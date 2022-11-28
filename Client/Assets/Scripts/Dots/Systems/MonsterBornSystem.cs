using Unity.Burst;
using Unity.Entities;

namespace Dots
{
    //怪物出生的system, 从地下刷新
    
    [BurstCompile]
    [UpdateAfter(typeof(SpawnMonsterSystem))]
    public partial struct MonsterBornSystem : ISystem
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
            var deltaTime = SystemAPI.Time.DeltaTime;
            var ecbSingleton = SystemAPI.GetSingleton<EndSimulationEntityCommandBufferSystem.Singleton>();

            new MonsterBornJob
            {
                DeltaTime = deltaTime,
                ECB = ecbSingleton.CreateCommandBuffer(state.WorldUnmanaged).AsParallelWriter()
            }.ScheduleParallel();
        }
    }
    
    [BurstCompile]
    public partial struct MonsterBornJob : IJobEntity
    {
        public float DeltaTime;
        public EntityCommandBuffer.ParallelWriter ECB;

        [BurstCompile]
        private void Execute(MonsterBornAspect aspect, [EntityInQueryIndex]int sortKey)
        {
            aspect.Rise(DeltaTime);

            //如果已经来到地上，则停止
            if (aspect.IsAboveGround)
            {
                aspect.SetAtGroundLevel();
                
                //删掉BornComponent(删掉后这个BornAspect就会失效，节省效率这个system不再执行)
                ECB.RemoveComponent<MonsterBorn>(sortKey, aspect.Entity);
                
                //进入走路状态，激活WalkComponent
                ECB.SetComponentEnabled<MonsterMove>(sortKey, aspect.Entity, true);
                
                //添加开始移动的标记，播放动画
                ECB.AddComponent<MonsterStartMoveTag>(sortKey, aspect.Entity);
            }
        }
    }
}