using Unity.Entities;
using Unity.Mathematics;
using Unity.Transforms;

namespace Dots
{
    public readonly partial struct DestinationAspect : IAspect
    {
        private readonly TransformAspect _transform;
        private readonly RefRO<Destination> _spawnComponent;

        public float3 Position => _transform.Position;
    }
}