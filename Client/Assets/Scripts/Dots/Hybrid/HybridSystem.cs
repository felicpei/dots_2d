using Unity.Burst;
using Unity.Entities;
using Unity.Transforms;
using UnityEngine;

namespace Dots
{
    [UpdateInGroup(typeof(InitializationSystemGroup))]
    public partial struct HybridSystem : ISystem
    {
        public void OnCreate(ref SystemState state)
        {
        }

        public void OnDestroy(ref SystemState state)
        {
        }

        public void OnUpdate(ref SystemState state)
        {
            var ecbBOS = SystemAPI.GetSingleton<BeginInitializationEntityCommandBufferSystem.Singleton>().CreateCommandBuffer(state.WorldUnmanaged);

            //Init: 找到所有附带GameObjectInit的Component进行初始化, 添加transform和animator
            foreach(var (tag, transform, entity) in SystemAPI.Query<HybridInitTag, LocalTransform>().WithEntityAccess())
            {
                ecbBOS.RemoveComponent<HybridInitTag>(entity);
                
                var go = Object.Instantiate(tag.Prefab);
                go.AddComponent<HybridAuthoring>().AssignEntity(entity, state.World);
                
                //初始化Transform
                var hybridTransform = new HybridTransform { Value = go.transform };
                hybridTransform.Value.position = transform.Position;
                hybridTransform.Value.rotation = transform.Rotation;
                hybridTransform.Value.localScale = Vector3.one * transform.Scale;
                ecbBOS.AddComponent(entity, hybridTransform);
                
                //如果有状态机，初始化状态机
                var animator = go.GetComponent<Animator>();
                if (animator != null)
                {
                    var hybridAnimator = new HybridAnimator { Value = animator };
                    ecbBOS.AddComponent(entity, hybridAnimator);
                }
            }
            
            //更新Transform
            foreach (var (hybridTransform, trans) in SystemAPI.Query<HybridTransform, LocalTransform>())
            {
                hybridTransform.Value.position = trans.Position;
                hybridTransform.Value.rotation = trans.Rotation;
                hybridTransform.Value.localScale =  Vector3.one * trans.Scale;
            }

            //destroy GameObjectTransform
            foreach (var (goTransform, entity) in SystemAPI.Query<HybridTransform>().WithNone<LocalToWorld>().WithEntityAccess()) 
            {
                if (goTransform.Value != null)
                {
                    Object.Destroy(goTransform.Value.gameObject);
                }
                ecbBOS.RemoveComponent<HybridTransform>(entity);
            }
        }
    }
}