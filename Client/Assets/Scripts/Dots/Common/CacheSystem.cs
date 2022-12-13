using System;
using Script;
using Unity.Collections;
using Unity.Entities;
using Unity.Rendering;
using Unity.Transforms;
using UnityEngine.Rendering;

namespace Dots
{
    [RequireMatchingQueriesForUpdate]
    [UpdateInGroup(typeof(InitializationSystemGroup))]
    public partial struct CacheSystem : ISystem
    {
        public void OnCreate(ref SystemState state)
        {
            //必须是mission
            state.RequireForUpdate<MissionProperties>();
        }

        public void OnDestroy(ref SystemState state)
        {
        }

        public void OnUpdate(ref SystemState state)
        {
            if (!SystemAPI.HasSingleton<CacheMonsterMaterials>())
            {
                var cacheEntity = state.EntityManager.CreateSingleton<CacheMonsterMaterials>();
                
                var hybridRenderer = state.World.GetExistingSystemManaged<EntitiesGraphicsSystem>();
                var ecb = new EntityCommandBuffer(Allocator.Temp);

                var monsterMaterialCache = new CacheMonsterMaterials();

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
                ecb.SetComponent(cacheEntity, monsterMaterialCache);
                ecb.Playback(state.EntityManager);
            }
        }
    }
}