using ecs;
using Unity.Burst;
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
        [BurstCompile]
        public void OnCreate(ref SystemState state)
        {
            //等待SpawnTimer
            state.RequireForUpdate<SpawnMonsterTimer>();
            state.RequireForUpdate<Destination>();
        }

        [BurstCompile]
        public void OnDestroy(ref SystemState state)
        {
        }
        
        [BurstCompile]
        public void OnUpdate(ref SystemState state)
        {
            //执行job
            var deltaTime = SystemAPI.Time.DeltaTime;
            var ecbSingleton = SystemAPI.GetSingleton<BeginInitializationEntityCommandBufferSystem.Singleton>().CreateCommandBuffer(state.WorldUnmanaged);

            var destination = SystemAPI.GetSingletonEntity<Destination>();
            var destinationAspect = SystemAPI.GetAspectRO<DestinationAspect>(destination);

            var targetPos = destinationAspect.Position;
            new MonsterSpawnJob
            {
                DeltaTime = deltaTime,
                TargetPos = targetPos,
                ECB = ecbSingleton
            }.Run();
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
                var transform = aspect.GetSpawnPoint(TargetPos);
                ECB.SetComponent(monster, new Translation
                {
                    Value = transform.Position
                });
                
                ECB.SetComponent(monster, new MonsterState
                {
                    Value = EState.Init
                });
                
                aspect.CurCount++;
            }
            else
            {
                aspect.Timer -= DeltaTime;
            }
        }
    }
}