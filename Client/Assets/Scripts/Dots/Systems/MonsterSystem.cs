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
            private void Execute(MonsterAspect aspect, [EntityInQueryIndex] int sortKey)
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
                            //判断攻击时间
                            if (aspect.AttackTimer <= 0)
                            {
                                aspect.AttackTimer = aspect.AttackInterval;
                                aspect.Attack(ECB, sortKey);
                            }
                            else
                            {
                                aspect.AttackTimer -= DeltaTime;
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