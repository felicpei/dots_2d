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
            foreach(var (pgo, transform, entity) in SystemAPI.Query<HybridInitTag, TransformAspect>().WithEntityAccess())
            {
                ecbBOS.RemoveComponent<HybridInitTag>(entity);
                
                var go = UnityEngine.Object.Instantiate(pgo.Prefab);
                go.AddComponent<HybridAuthoring>().AssignEntity(entity, state.World);

                var goTransform = new HybridTransform { Transform = go.transform };
                goTransform.Transform.position = transform.Position;
                goTransform.Transform.rotation = transform.Rotation;
                ecbBOS.AddComponent(entity, goTransform);
            }
        
            //暂时只有特效用，不用update更新
            //更新坐标
            /*foreach (var (goTransform, trans) in SystemAPI.Query<GameObjectTransform, TransformAspect>())
            {
                goTransform.Transform.position = trans.Position;
                goTransform.Transform.rotation = trans.Rotation;
            }*/

            //destroy GameObjectTransform
            foreach (var (goTransform, entity) in SystemAPI.Query<HybridTransform>().WithNone<LocalToWorld>().WithEntityAccess()) 
            {
                if (goTransform.Transform != null)
                {
                    Object.Destroy(goTransform.Transform.gameObject);
                }
                ecbBOS.RemoveComponent<HybridTransform>(entity);
            }
        }
    }
}