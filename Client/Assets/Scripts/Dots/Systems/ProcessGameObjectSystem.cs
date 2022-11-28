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
            /*var ecbBOS = SystemAPI.GetSingleton<BeginSimulationEntityCommandBufferSystem.Singleton>().CreateCommandBuffer(state.WorldUnmanaged);

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

            //Animator Walk
            foreach (var (animator, tag, entity) in SystemAPI.Query<GameObjectAnimator, MonsterStartMoveTag>().WithEntityAccess())
            {
                ecbBOS.RemoveComponent<MonsterStartMoveTag>(entity);
                animator.Animator.Play("Walk");
            }
            
            foreach (var (animator, tag, entity) in SystemAPI.Query<GameObjectAnimator, MonsterStartDieTag>().WithEntityAccess())
            {
                ecbBOS.RemoveComponent<MonsterStartDieTag>(entity);
                animator.Animator.Play("Die");
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
            }*/
        }
    }
}