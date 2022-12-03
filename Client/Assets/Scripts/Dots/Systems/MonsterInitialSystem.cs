using System;
using Unity.Burst;
using Unity.Collections;
using Unity.Entities;
using Unity.Rendering;

namespace Dots
{
    [RequireMatchingQueriesForUpdate]
    [UpdateInGroup(typeof(InitializationSystemGroup))]
    public  partial struct MonsterInitialSystem : ISystem
    {
        public void OnCreate(ref SystemState state)
        {
            state.RequireForUpdate<MonsterMaterialsCache>();
        }

        public void OnDestroy(ref SystemState state)
        {
        } 

        public void OnUpdate(ref SystemState state)
        {
            var globalCache = SystemAPI.GetSingletonEntity<MonsterMaterialsCache>();
            var globalAspect = SystemAPI.GetAspectRW<GlobalCacheAspect>(globalCache);
            
            var ecb = new EntityCommandBuffer(Allocator.Temp);
            foreach (var monster in SystemAPI.Query<MonsterAspect>().WithAll<MonsterInitTag>())
            {
                ecb.RemoveComponent<MonsterInitTag>(monster.Entity);
                
                //set monster properties
                var monsterDeploy = TableMgr.GetDeploy<MonsterDeploy>(monster.MonsterId);
                ecb.SetComponent(monster.Entity, new MonsterProperties
                {
                    MonsterId = monster.MonsterId,
                    AttackRange = monsterDeploy.AttackRange,
                    WalkSpeed = monsterDeploy.MoveSpeed,
                    AttackInterval = monsterDeploy.AttackInterval,
                    Damage = monsterDeploy.Damage,
                    DelayDestroyTime = monsterDeploy.DelayDestroyTime
                });

                //进 idle state
                ecb.SetComponent(monster.Entity, new MonsterState
                {
                    Value = EState.Idle
                });
                
                //set to idle animation
                ecb.SetComponent(monster.Entity, new MaterialMeshInfo
                {
                    MeshID = globalAspect.MonsterMeshId,
                    MaterialID = globalAspect.GetMaterialId(monster.MonsterId, (int)EMonsterAni.Idle)
                });
            }

            ecb.Playback(state.EntityManager);
        }
    }
}