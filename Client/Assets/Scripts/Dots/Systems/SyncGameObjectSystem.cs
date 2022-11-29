/*using Unity.Burst;
using Unity.Collections;
using Unity.Entities;
using Unity.Transforms;
using UnityEngine;

namespace Dots
{
    [UpdateInGroup(typeof(SimulationSystemGroup))]
    public partial class SyncGameObjectSystem : SystemBase
    {
        private BeginSimulationEntityCommandBufferSystem m_BeginSimECBSystem;
        private EntityQuery m_transformQuery;
        private EntityQuery m_destroyQuery;
        
        protected override void OnCreate()
        {
            base.OnCreate();
            
            m_BeginSimECBSystem = World.GetExistingSystemManaged<BeginSimulationEntityCommandBufferSystem>();
            
            var queryBuilder = new EntityQueryBuilder(Allocator.Temp).WithAll<GameObjectTransform, TransformAspect>();
            m_transformQuery = GetEntityQuery(queryBuilder);
            
            queryBuilder.Reset();
            queryBuilder.WithAll<GameObjectTransform>().WithNone<LocalToWorld>();
            m_destroyQuery = GetEntityQuery(queryBuilder);
        }

        protected override void OnUpdate()
        {
       //     var ecb = SystemAPI.GetSingleton<BeginSimulationEntityCommandBufferSystem.Singleton>().CreateCommandBuffer(WorldUnmanaged);
        
            //更新坐标
            var transformJob = new TransformSyncJob();
            transformJob.Run(m_transformQuery);

            //检查destroy
            var destroyJob = new DestroyGameObjectJob();
            destroyJob.Run(m_destroyQuery);
        }

      
            /#1#*
           //Animator Update
           foreach (var (animator, stateAspect) in SystemAPI.Query<GameObjectAnimator, MonsterAspect>())
           {
               //Move
               if (stateAspect.PrevState != stateAspect.CurState)
               {
                   animator.Animator.SetBool(MonsterAnimatorParam.IsMove, stateAspect.CurState == EState.Move);
               }    
           }
           
           //attack
           foreach (var (animator, _, entity) in SystemAPI.Query<GameObjectAnimator, MonsterAttackTag>().WithEntityAccess())
           {
               ecbBOS.RemoveComponent<MonsterAttackTag>(entity);
               animator.Animator.SetTrigger(MonsterAnimatorParam.Attack);
           }
           
           //die
           foreach (var (animator, _, entity) in SystemAPI.Query<GameObjectAnimator, MonsterDieTag>().WithEntityAccess())
           {
               ecbBOS.RemoveComponent<MonsterDieTag>(entity);
               animator.Animator.SetTrigger(MonsterAnimatorParam.Die);
           }#2#

            //destroy GameObjectTransform
            foreach (var (goTransform, entity) in SystemAPI.Query<GameObjectTransform>().WithNone<LocalToWorld>().WithEntityAccess()) 
            {
                if (goTransform.Transform != null)
                {
                    Object.Destroy(goTransform.Transform.gameObject);
                }
                ecbBOS.RemoveComponent<GameObjectAnimator>(entity);
                ecbBOS.RemoveComponent<GameObjectTransform>(entity);
            }#1#

    }

    public partial struct TransformSyncJob : IJobEntity
    {
        [BurstCompile]
        private void Execute(GameObjectTransform goTransform, TransformAspect transform)
        {
            goTransform.Transform.position = transform.Position;
            goTransform.Transform.rotation = transform.Rotation;
        }
    }
    
    public partial struct DestroyGameObjectJob : IJobEntity
    {
        public EntityCommandBuffer.ParallelWriter ECB;
        
        [BurstCompile]
        private void Execute(Entity entity, GameObjectTransform goTransform, [EntityInQueryIndex]int sortKey)
        {
            if (goTransform.Transform != null)
            {
                Object.Destroy(goTransform.Transform.gameObject);
            }
            ECB.RemoveComponent<GameObjectAnimator>(sortKey, entity);
            ECB.RemoveComponent<GameObjectTransform>(sortKey, entity);
        }
    }
}*/