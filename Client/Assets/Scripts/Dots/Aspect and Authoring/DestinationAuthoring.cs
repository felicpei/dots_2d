using Unity.Entities;
using Unity.Mathematics;
using Unity.Transforms;
using UnityEngine;

namespace Dots
{
    public class DestinationAuthoring : MonoBehaviour
    {
        public class DestinationAuthoringBaker : Baker<DestinationAuthoring>
        {
            public override void Bake(DestinationAuthoring authoring)
            {
                AddComponent<DestinationProperties>();
            }
        }
    }
    
    public readonly partial struct DestinationAspect : IAspect
    {
        private readonly TransformAspect _transform;
        private readonly RefRO<DestinationProperties> _destination;

        public float3 Position => _transform.Position;
    }
}