/*using Unity.Burst;
using Unity.Collections;
using Unity.Entities;
using Unity.Mathematics;
using Unity.Physics;
using Unity.Physics.Extensions;
using Unity.Transforms;
using UnityEngine;

namespace Dots.Components
{
    [BurstCompile]
    [RequireMatchingQueriesForUpdate]
    [UpdateInGroup(typeof(SimulationSystemGroup))]
    public partial struct TestAttackSystem : ISystem
    {
        [BurstCompile]
        public void OnCreate(ref SystemState state)
        {
            //必须是mission
            state.RequireForUpdate<MissionProperties>();
            state.RequireForUpdate<InputProperties>();
        }

        [BurstCompile]
        public void OnDestroy(ref SystemState state)
        {
        }

        [BurstCompile]
        public void OnUpdate(ref SystemState state)
        {
            var inputEntity = SystemAPI.GetSingletonEntity<InputProperties>();
            var inputAspect = SystemAPI.GetAspectRW<InputAspect>(inputEntity);
            
            var mission = SystemAPI.GetSingletonEntity<MissionProperties>();
            if (inputAspect.InTouch)
            {
                inputAspect.InTouch = false;

                var pos = inputAspect.TouchPos;
                var ecbSingleton = SystemAPI.GetSingleton<EndSimulationEntityCommandBufferSystem.Singleton>().CreateCommandBuffer(state.WorldUnmanaged);
            
                ecbSingleton.AddComponent(mission, new VFXCreateTag
                {
                    Pos = pos,
                    EffectIdx = 0,
                });
                
                //overlap附近的怪物
                var radius = 2;
                var physicsWorld = SystemAPI.GetSingleton<PhysicsWorldSingleton>();
                var hits = new NativeList<DistanceHit>(Allocator.Temp);
                 
                //过滤monster
                var filter = new CollisionFilter
                {
                    BelongsTo = PhysicsLayers.GetFilterResult(PhysicsLayers.Monster),
                    CollidesWith =  PhysicsLayers.GetFilterResult(PhysicsLayers.Monster),
                    GroupIndex = 0
                };
                
                //physics overlap
                if(physicsWorld.OverlapSphere(pos, radius, ref hits, filter))
                {
                    foreach (var distanceHit in hits)
                    {
                        if (distanceHit.Entity != Entity.Null)
                        {
                            var monsterEntity = distanceHit.Entity;
                            var monster = SystemAPI.GetAspectRW<MonsterAspect>(monsterEntity);
                            monster.EnterState(EState.Die, ecbSingleton);
                        }
                    }
                } 

                new MonsterFlyJob
                {
                    Pos = pos
                }.Run();
            }
        }
        
        [BurstCompile]
        private partial struct MonsterFlyJob : IJobEntity
        {
            public float3 Pos;

            [BurstCompile]
            private void Execute(MonsterAspect aspect)
            {
                var force = math.normalize( aspect.Position - Pos) * 150f;
                aspect.AddForce(force);
            }
        }
    }
}*/