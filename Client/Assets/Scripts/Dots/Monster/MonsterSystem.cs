using System;
using Unity.Burst;
using Unity.Collections;
using Unity.Entities;
using Unity.Mathematics;
using Unity.Rendering;
using UnityEngine.Rendering;

namespace Dots
{
    [BurstCompile]
    [RequireMatchingQueriesForUpdate]
    [UpdateInGroup(typeof(SimulationSystemGroup))]
    public partial struct MonsterSystem : ISystem
    {
        [BurstCompile]
        public void OnCreate(ref SystemState state)
        {
            //必须是mission
            state.RequireForUpdate<MissionProperties>();
            state.RequireForUpdate<DestinationProperties>();
        }

        [BurstCompile] 
        public void OnDestroy(ref SystemState state)
        {
        }

        [BurstCompile]
        public void OnUpdate(ref SystemState state)
        {
            var deltaTime = SystemAPI.Time.DeltaTime;
            var ecbSingleton = SystemAPI.GetSingleton<EndSimulationEntityCommandBufferSystem.Singleton>();

            //Update Target
            var destination = SystemAPI.GetSingletonEntity<DestinationProperties>();
            var destinationAspect = SystemAPI.GetAspectRO<DestinationAspect>(destination);
            new MonsterTargetJob
            {
                TargetPos = destinationAspect.Position
            }.ScheduleParallel();

            //update AI
            new MonsterAIJob
            {
                DeltaTime = deltaTime,
                ECB = ecbSingleton.CreateCommandBuffer(state.WorldUnmanaged).AsParallelWriter(),
            }.ScheduleParallel();
        }

        [BurstCompile]
        private partial struct MonsterTargetJob : IJobEntity
        {
            public float3 TargetPos;

            [BurstCompile]
            private void Execute(MonsterAspect aspect)
            {
                aspect.SetTarget(TargetPos);
            }
        }

        [BurstCompile]
        private partial struct MonsterAIJob : IJobEntity
        {
            public float DeltaTime;
            public EntityCommandBuffer.ParallelWriter ECB;

            [BurstCompile]
            private void Execute(MonsterAspect aspect, [EntityIndexInQuery] int sortKey)
            {
                switch (aspect.CurState)
                {
                    case EState.Idle:
                    {
                        aspect.EnterState(EState.Move, ECB, sortKey);
                        break;
                    }
                    case EState.Move:
                    {
                        //如果超出攻击范围，停止移动，并开启攻击
                        var inAttackRange = aspect.IsInAttackRange(aspect.AttackRange);
                        if (inAttackRange)
                        {
                            aspect.EnterState(EState.Attack, ECB, sortKey);
                        }
                        else
                        {
                            aspect.Walk(DeltaTime);
                        }

                        break;
                    }
                    case EState.Attack:
                    {
                        var inAttackRange = aspect.IsInAttackRange(aspect.AttackRange);
                        if (!inAttackRange)
                        {
                            aspect.EnterState(EState.Move, ECB, sortKey);
                        }
                        else
                        {
                            //判断攻击间隔
                            if (aspect.AttackIntervalTimer <= 0)
                            {
                                aspect.AttackIntervalTimer = aspect.AttackInterval;
                                aspect.AttackActionTimer = aspect.AttackContTime;
                                aspect.Attack(ECB, sortKey);
                            }
                            else
                            {
                                aspect.AttackIntervalTimer -= DeltaTime;
                                
                                //这里要判断攻击动作时间，动作到时间，切换会idle动作
                                if (aspect.AttackActionTimer > 0)
                                {
                                    aspect.AttackActionTimer -= DeltaTime;
                                }
                                else
                                {
                                    aspect.AttackActionTimer = 10000000;
                                    ECB.AddComponent<MonsterIdleTag>(sortKey, aspect.Entity);
                                }
                            }
                        }

                        break;
                    }
                    case EState.Die:
                    {
                        if (aspect.CheckDestroy(DeltaTime))
                        {
                            ECB.DestroyEntity(sortKey, aspect.Entity);
                        }

                        break;
                    }
                }
            }
        }
    }
}