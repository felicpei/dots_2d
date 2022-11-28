using Unity.Burst;
using Unity.Collections;
using Unity.Entities;

//Monster初始化System
namespace Dots
{
    [BurstCompile]
    [UpdateInGroup(typeof(InitializationSystemGroup))]
    public  partial struct InitializeMonsterSystem : ISystem
    {
        [BurstCompile]
        public void OnCreate(ref SystemState state)
        {
            
        }

        [BurstCompile]
        public void OnDestroy(ref SystemState state)
        {
        }

        [BurstCompile]
        public void OnUpdate(ref SystemState state)
        {
            var ecb = new EntityCommandBuffer(Allocator.Temp);
            foreach (var monster in SystemAPI.Query<MonsterMoveAspect>().WithAll<MonsterInitTag>())
            {
                ecb.RemoveComponent<MonsterInitTag>(monster.Entity);
                ecb.SetComponentEnabled<MonsterMove>(monster.Entity, false);
                ecb.SetComponentEnabled<MonsterDie>(monster.Entity, false);
            }

            ecb.Playback(state.EntityManager);
        }
    }
}