using Unity.Burst;
using Unity.Entities;
using Unity.Mathematics;

namespace Dots
{
    //怪物出生的system, 从地下刷新
    
    [BurstCompile]
    [UpdateAfter(typeof(MonsterBornSystem))]
    public partial struct MonsterMoveSystem : ISystem
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

            var destination = SystemAPI.GetSingletonEntity<Destination>();
            var destinationAspect = SystemAPI.GetAspectRO<DestinationAspect>(destination);
            
            new MonsterMoveJob
            {
                DeltaTime = deltaTime,
                TargetPos = destinationAspect.Position,
                ECB = ecbSingleton.CreateCommandBuffer(state.WorldUnmanaged).AsParallelWriter(),
                
            }.ScheduleParallel();
        }
    }
    
    [BurstCompile]
    public partial struct MonsterMoveJob : IJobEntity
    {
        public float DeltaTime;
        public EntityCommandBuffer.ParallelWriter ECB;
        public float3 TargetPos;
        

        [BurstCompile]
        private void Execute(MonsterMoveAspect aspect, [EntityInQueryIndex]int sortKey)
        {
            aspect.Walk(DeltaTime);
            
            //如果超出攻击范围，停止移动，并开启攻击
            if (aspect.IsInAttackRange(TargetPos, aspect.AttackRange))
            {
                //停止移动
                ECB.SetComponentEnabled<MonsterMove>(sortKey, aspect.Entity, false);
                
                //跑到地点直接死亡
                ECB.SetComponentEnabled<MonsterDie>(sortKey, aspect.Entity, true);
                ECB.AddComponent<MonsterStartDieTag>(sortKey, aspect.Entity);
            }
        }
    }
}