using Unity.Burst;
using Unity.Collections;
using Unity.Entities;
using Unity.Rendering;

namespace Dots
{
    [BurstCompile]
    [RequireMatchingQueriesForUpdate]
    [UpdateInGroup(typeof(SimulationSystemGroup))]
    public partial struct MonsterAnimationSystem : ISystem
    {

        [BurstCompile]
        public void OnCreate(ref SystemState state)
        {
            //必须是mission
            state.RequireForUpdate<MissionProperties>();
            state.RequireForUpdate<MonsterMaterialsCache>();
        }

        [BurstCompile]
        public void OnDestroy(ref SystemState state)
        {
        }

        [BurstCompile]
        public void OnUpdate(ref SystemState state)
        {
            var ecbBOS = SystemAPI.GetSingleton<BeginSimulationEntityCommandBufferSystem.Singleton>().CreateCommandBuffer(state.WorldUnmanaged);
            var globalCache = SystemAPI.GetSingletonEntity<MonsterMaterialsCache>();
            var globalAspect = SystemAPI.GetAspectRW<GlobalCacheAspect>(globalCache);

            foreach (var aspect in SystemAPI.Query<MonsterAspect>().WithAll<MonsterAttackTag>())
            {
                ecbBOS.RemoveComponent<MonsterAttackTag>(aspect.Entity);
                ecbBOS.SetComponent(aspect.Entity, new MaterialMeshInfo
                {
                    MeshID = globalAspect.MonsterMeshId,
                    MaterialID = globalAspect.GetMaterialId(aspect.MonsterId, EMonsterAni.Attack)
                });
            }
            
            foreach (var aspect in SystemAPI.Query<MonsterAspect>().WithAll<MonsterMoveTag>())
            {
                ecbBOS.RemoveComponent<MonsterMoveTag>(aspect.Entity);
                ecbBOS.SetComponent(aspect.Entity, new MaterialMeshInfo
                {
                    MeshID = globalAspect.MonsterMeshId,
                    MaterialID = globalAspect.GetMaterialId(aspect.MonsterId, EMonsterAni.Move)
                });
            }
            
            foreach (var aspect in SystemAPI.Query<MonsterAspect>().WithAll<MonsterHitTag>())
            {
                ecbBOS.RemoveComponent<MonsterHitTag>(aspect.Entity);
                ecbBOS.SetComponent(aspect.Entity, new MaterialMeshInfo
                {
                    MeshID = globalAspect.MonsterMeshId,
                    MaterialID = globalAspect.GetMaterialId(aspect.MonsterId, EMonsterAni.Hit)
                });
            }
            
            foreach (var aspect in SystemAPI.Query<MonsterAspect>().WithAll<MonsterIdleTag>())
            {
                ecbBOS.RemoveComponent<MonsterIdleTag>(aspect.Entity);
                ecbBOS.SetComponent(aspect.Entity, new MaterialMeshInfo
                {
                    MeshID = globalAspect.MonsterMeshId,
                    MaterialID = globalAspect.GetMaterialId(aspect.MonsterId, EMonsterAni.Idle)
                });
            }
            
            foreach (var aspect in SystemAPI.Query<MonsterAspect>().WithAll<MonsterDieTag>())
            {
                ecbBOS.RemoveComponent<MonsterDieTag>(aspect.Entity);
                ecbBOS.SetComponent(aspect.Entity, new MaterialMeshInfo
                {
                    MeshID = globalAspect.MonsterMeshId,
                    MaterialID = globalAspect.GetMaterialId(aspect.MonsterId, EMonsterAni.Die)
                });
            }
        }
    }
}