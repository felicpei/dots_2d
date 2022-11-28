using Unity.Burst;
using Unity.Entities;
using Unity.Mathematics;

namespace Dots
{
    //怪物出生的system, 从地下刷新
    
    [BurstCompile]
    [UpdateAfter(typeof(MonsterMoveAspect))]
    public partial struct MonsterDieSystem : ISystem
    {
        [BurstCompile]
        public void OnCreate(ref SystemState state)
        {
            state.RequireForUpdate<Destination>();
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

            new MonsterDieJob
            {
                DeltaTime = deltaTime,
                ECB = ecbSingleton.CreateCommandBuffer(state.WorldUnmanaged).AsParallelWriter(),
            }.ScheduleParallel();
        }
    }
    
    [BurstCompile]
    public partial struct MonsterDieJob : IJobEntity
    {
        public float DeltaTime;
        public EntityCommandBuffer.ParallelWriter ECB;

        [BurstCompile]
        private void Execute(MonsterDieAspect aspect, [EntityInQueryIndex]int sortKey)
        {
            if (aspect.CheckDestroy(DeltaTime))
            {
                ECB.DestroyEntity(sortKey, aspect.Entity);
            }
        }
    }
}