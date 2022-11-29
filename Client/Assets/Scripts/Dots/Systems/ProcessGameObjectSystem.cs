using Unity.Burst;
using Unity.Entities;
using Unity.Transforms;
using UnityEngine;

namespace Dots
{
    [UpdateInGroup(typeof(InitializationSystemGroup))]
    public partial struct ProcessGameObjectSystem : ISystem
    {
  
        public void OnCreate(ref SystemState state)
        {
        }

        public void OnDestroy(ref SystemState state)
        {
        }

        public void OnUpdate(ref SystemState state)
        {
            var ecbBOS = SystemAPI.GetSingleton<BeginSimulationEntityCommandBufferSystem.Singleton>().CreateCommandBuffer(state.WorldUnmanaged);

            //Init: 找到所有附带GameObjectInit的Component进行初始化, 添加transform和animator
            foreach(var (pgo, transform,entity) in SystemAPI.Query<GameObjectInitTag, TransformAspect>().WithEntityAccess())
            {
                var go = UnityEngine.Object.Instantiate(pgo.Prefab);
                go.AddComponent<EntityGameObjectAuthoring>().AssignEntity(entity, state.World);

                var goTransform = new GameObjectTransform { Transform = go.transform };
                goTransform.Transform.position = transform.Position;
                goTransform.Transform.rotation = transform.Rotation;
                
                ecbBOS.AddComponent(entity, goTransform);
                ecbBOS.AddComponent(entity, new GameObjectAnimator { Animator = go.GetComponent<Animator>() });
                ecbBOS.RemoveComponent<GameObjectInitTag>(entity);
            }
        
            //更新坐标
            foreach (var (goTransform, trans) in SystemAPI.Query<GameObjectTransform, TransformAspect>())
            {
                goTransform.Transform.position = trans.Position;
                goTransform.Transform.rotation = trans.Rotation;
            }
            
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
            }

            //destroy GameObjectTransform
            foreach (var (goTransform, entity) in SystemAPI.Query<GameObjectTransform>().WithNone<LocalToWorld>().WithEntityAccess()) 
            {
                if (goTransform.Transform != null)
                {
                    Object.Destroy(goTransform.Transform.gameObject);
                }
                ecbBOS.RemoveComponent<GameObjectAnimator>(entity);
                ecbBOS.RemoveComponent<GameObjectTransform>(entity);
            }
        }
    }
}