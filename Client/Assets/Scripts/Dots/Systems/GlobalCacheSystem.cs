using System;
using Script;
using Unity.Collections;
using Unity.Entities;
using Unity.Rendering;
using Unity.Transforms;
using UnityEngine.Rendering;

namespace Dots
{
    [UpdateInGroup(typeof(InitializationSystemGroup))]
    public partial struct GlobalCacheSystem : ISystem
    {
        private EntityQuery _query;
        public void OnCreate(ref SystemState state)
        {
            var queryBuilder = new EntityQueryBuilder(Allocator.Temp);
            queryBuilder.WithAll<GlobalInitTag>();
            _query = state.GetEntityQuery(queryBuilder);
        }

        public void OnDestroy(ref SystemState state)
        {
        }

        public void OnUpdate(ref SystemState state)
        {
            if (!_query.IsEmpty)
            {
                var globalEntity = SystemAPI.GetSingletonEntity<GlobalInitTag>();
                
                var hybridRenderer = state.World.GetExistingSystemManaged<EntitiesGraphicsSystem>();
                var ecb = new EntityCommandBuffer(Allocator.Temp);

                var monsterMaterialCache = new MonsterMaterialsCache();

                //cache mesh
                var meshID = hybridRenderer.RegisterMesh(InternalResource.Inst.Quad);
                monsterMaterialCache.MeshId = meshID;

                //cache materials
                var cacheCount = MissionCache.MonsterMaterials.Count;
                monsterMaterialCache.MonsterIdIndex = new NativeArray<int>(cacheCount, Allocator.Persistent);
                monsterMaterialCache.Idle = new NativeArray<BatchMaterialID>(cacheCount, Allocator.Persistent);
                monsterMaterialCache.Move = new NativeArray<BatchMaterialID>(cacheCount, Allocator.Persistent);
                monsterMaterialCache.Attack = new NativeArray<BatchMaterialID>(cacheCount, Allocator.Persistent);
                monsterMaterialCache.Die = new NativeArray<BatchMaterialID>(cacheCount, Allocator.Persistent);
                monsterMaterialCache.Hit = new NativeArray<BatchMaterialID>(cacheCount, Allocator.Persistent);

                for (int i = 0; i < cacheCount; i++)
                {
                    var info = MissionCache.MonsterMaterials[i];
                    monsterMaterialCache.MonsterIdIndex[i] = info.MonsterId;

                    monsterMaterialCache.Idle[i] = hybridRenderer.RegisterMaterial(info.Idle);
                    monsterMaterialCache.Move[i] = hybridRenderer.RegisterMaterial(info.Move);
                    monsterMaterialCache.Attack[i] = hybridRenderer.RegisterMaterial(info.Attack);
                    monsterMaterialCache.Die[i] = hybridRenderer.RegisterMaterial(info.Die);
                    monsterMaterialCache.Hit[i] = hybridRenderer.RegisterMaterial(info.Hit);
                }

                //set component data
                ecb.AddComponent(globalEntity, monsterMaterialCache);
                
                //remove tag 保证 init 一次
                ecb.RemoveComponent<GlobalInitTag>(globalEntity);
                ecb.Playback(state.EntityManager);
            }
        }
    }
}