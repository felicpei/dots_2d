using ecs;
using Unity.Burst;
using Unity.Collections;
using Unity.Entities;
using Unity.Mathematics;
using Unity.Transforms;
using UnityEngine;

namespace Dots
{
    //刷怪System
    [BurstCompile]
    [RequireMatchingQueriesForUpdate]
    [UpdateInGroup(typeof(InitializationSystemGroup))]
    public partial struct SpawnMonsterSystem : ISystem
    {
        private EntityQuery _query;
        [BurstCompile]
        public void OnCreate(ref SystemState state)
        {
            //等待SpawnTimer
            state.RequireForUpdate<SpawnMonsterTimer>();
            state.RequireForUpdate<DestinationProperties>();
            
            _query = state.GetEntityQuery(ComponentType.ReadOnly<MonsterProperties>());
        }

        [BurstCompile]
        public void OnDestroy(ref SystemState state)
        {
        }
        
        [BurstCompile]
        public void OnUpdate(ref SystemState state)
        { 
            //同屏最多2000个怪
            if (_query.CalculateEntityCount() <= 2000)
            {
                //执行job
                var deltaTime = SystemAPI.Time.DeltaTime;
                var ecbSingleton = SystemAPI.GetSingleton<BeginInitializationEntityCommandBufferSystem.Singleton>().CreateCommandBuffer(state.WorldUnmanaged);

                var destination = SystemAPI.GetSingletonEntity<DestinationProperties>();
                var destinationAspect = SystemAPI.GetAspectRO<DestinationAspect>(destination);

                var targetPos = destinationAspect.Position;
                new MonsterSpawnJob
                {
                    DeltaTime = deltaTime,
                    TargetPos = targetPos,
                    ECB = ecbSingleton,
                }.Run();
            }
        }
    }
    
    [BurstCompile]
    partial struct MonsterSpawnJob : IJobEntity
    {
        public float DeltaTime;
        public EntityCommandBuffer ECB;
        public float3 TargetPos;
    
        private void Execute(SpawnMonsterAspect aspect)
        {
            //全部刷完了
            if (aspect.CurCount >= aspect.TotalCount)
            {
                return;
            }
            
            //timer时间到, 重置timer, 刷新怪物
            if (aspect.Timer <= 0)
            {
                aspect.Timer = aspect.GetNextSpawnTime();
                
                //刷新怪物
                var monster = ECB.Instantiate(aspect.MonsterPrefab);
                
                //设置transform
                var transform = aspect.GetSpawnPoint();
                ECB.SetComponent(monster, new Translation
                {
                    Value = transform.Position
                });
                
                ECB.SetComponent(monster,new Rotation
                {
                    Value = transform.Rotation
                });
   
                //set monsterId
                ECB.SetComponent(monster, new MonsterProperties
                {
                    MonsterId = aspect.MonsterId
                });
                
                ECB.AddComponent<MonsterInitTag>(monster);
                
                aspect.CurCount++;
            }
            else
            {
                aspect.Timer -= DeltaTime;
            }
        }
    }
}