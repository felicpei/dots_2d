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
    public partial struct SpawnPlayerSystem : ISystem
    {
        private EntityQuery _query;
        [BurstCompile]
        public void OnCreate(ref SystemState state)
        {
            //必须是mission
            state.RequireForUpdate<MissionProperties>();
            _query = state.GetEntityQuery(ComponentType.ReadOnly<PlayerProperties>());
        }

        [BurstCompile]
        public void OnDestroy(ref SystemState state)
        {
        }
        
        [BurstCompile]
        public void OnUpdate(ref SystemState state)
        {
            if (_query.IsEmpty)
            {
                var mission = SystemAPI.GetAspectRO<MissionAspect>(SystemAPI.GetSingletonEntity<MissionProperties>());
                var ecbSingleton = SystemAPI.GetSingleton<BeginInitializationEntityCommandBufferSystem.Singleton>().CreateCommandBuffer(state.WorldUnmanaged);
                var player = ecbSingleton.Instantiate(mission.PlayerPrefab);
                
                //设置transform
                ecbSingleton.SetComponent(player, new LocalTransform
                {
                    Position = float3.zero,
                    Rotation = quaternion.identity,
                    Scale = 3f,
                });
                
                //初始化玩家状态
                ecbSingleton.AddComponent(player, new PlayerState
                {
                    InMove = false
                });
                
                //设置玩家属性（todo，这个要来自配置表，到时候要扔到另外System中读取）
                ecbSingleton.SetComponent(player, new PlayerProperties
                {
                    MoveSpeed = 9,
                });
                
                //设置怪物仇恨目标为玩家
                ecbSingleton.AddComponent(player, new DestinationProperties());
            }
        }
    }
}