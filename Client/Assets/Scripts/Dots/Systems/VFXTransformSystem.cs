namespace Dots
{
    using Unity.Burst;
    using Unity.Collections;
    using Unity.Entities;
    using Unity.Jobs;
    using Unity.Mathematics;
    using Unity.Transforms;

    [RequireMatchingQueriesForUpdate]
    public partial class VFXTransformSystem : SystemBase
    {
        protected override void OnUpdate()
        {
            //Play ParticleSystem when the sphere is touching the ground
            Entities.WithoutBurst().WithAll<VFXComponent>().ForEach((UnityEngine.ParticleSystem ps, in Translation translation, in Rotation rot ) =>
            {
                var transform = ps.transform;
                transform.position = translation.Value;
                transform.rotation = rot.Value;
            }).Run();
            
            Entities.WithoutBurst().WithAll<Parent>().ForEach((UnityEngine.ParticleSystem ps, in Parent parent) =>
            {
                var t = SystemAPI.GetComponent<Translation>(parent.Value);
                var transform = ps.transform;
                transform.position = t.Value;
//                transform.rotation = rot.Value;
            }).Run();
        }
    }

}