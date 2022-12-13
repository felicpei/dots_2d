using Unity.Burst;
using Unity.Collections;
using Unity.Entities;
using Unity.Mathematics;
using Unity.Rendering;
using Unity.Transforms;

namespace Dots
{
    [BurstCompile]
    [RequireMatchingQueriesForUpdate]
    [UpdateInGroup(typeof(InitializationSystemGroup))]
    public partial struct VFXSystem : ISystem
    {
        [BurstCompile]
        public void OnCreate(ref SystemState state)
        { 
            //必须是mission
            state.RequireForUpdate<MissionProperties>();
        }

        [BurstCompile]
        public void OnDestroy(ref SystemState state)
        {
        }

        [BurstCompile]
        public void OnUpdate(ref SystemState state)
        {
            var ecbSingleton = SystemAPI.GetSingleton<BeginInitializationEntityCommandBufferSystem.Singleton>().CreateCommandBuffer(state.WorldUnmanaged);
            var vfxList = SystemAPI.GetSingletonBuffer<VFXData>();
            
            //Play ParticleSystem
            foreach (var (comp, entity) in SystemAPI.Query<VFXCreateTag>().WithEntityAccess())
            {
                var effectPos = comp.Pos;
                var effectIndex = comp.EffectIdx;
                ecbSingleton.RemoveComponent<VFXCreateTag>(entity);
                
                var effect = ecbSingleton.Instantiate(vfxList[effectIndex].Prefab);
                ecbSingleton.SetComponent(effect, new LocalTransform
                {
                    Scale = 1f,
                    Rotation = quaternion.identity,
                    Position = effectPos
                });
                
                ecbSingleton.AddComponent(effect, new VFXComponent
                {
                    CurTime = 0,
                    DestroyTime = 1f, //1秒后destroy
                });
            }
      
            var deltaTime = SystemAPI.Time.DeltaTime;
            //check destroy
            new VFXDestroyJob
            {
                DeltaTime = deltaTime,
                Ecb = ecbSingleton.AsParallelWriter(),
            }.ScheduleParallel();
        }
        

        [BurstCompile]
        private partial struct VFXDestroyJob : IJobEntity
        {
            public float DeltaTime;
            public EntityCommandBuffer.ParallelWriter Ecb;

            [BurstCompile]
            private void Execute(VFXAspect aspect, [EntityIndexInQuery] int sortKey)
            {
                if (aspect.CheckDestroy(DeltaTime))
                {
                    Ecb.RemoveComponent<VFXComponent>(sortKey, aspect.Entity);
                    Ecb.DestroyEntity(sortKey, aspect.Entity);
                }
            }
        }
    }
}