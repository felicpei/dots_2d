using Unity.Entities;
using Unity.Transforms;

//更新VFX Transform(mobile平台目前不会自动更新，需要手动更新下transform)
namespace Dots
{
    [RequireMatchingQueriesForUpdate]
    public partial class VFXTransformSystem : SystemBase
    {
        protected override void OnUpdate()
        {
            //Play ParticleSystem when the sphere is touching the ground
            Entities.WithoutBurst().WithAll<VFXComponent>().ForEach((UnityEngine.ParticleSystem ps, in LocalTransform localTransform) =>
            {
                var transform = ps.transform;
                transform.position = localTransform.Position;
                transform.rotation = localTransform.Rotation;
            }).Run();
            
            Entities.WithoutBurst().WithAll<Parent>().ForEach((UnityEngine.ParticleSystem ps, in Parent parent) =>
            {
                var localTransform = SystemAPI.GetComponent<LocalTransform>(parent.Value);
                var transform = ps.transform;
                transform.position = localTransform.Position;
                transform.rotation = localTransform.Rotation;
            }).Run();
        }
    }

}