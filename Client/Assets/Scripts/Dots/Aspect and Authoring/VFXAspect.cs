using Unity.Entities;
using Unity.Mathematics;
using Unity.Transforms;
using UnityEngine;

namespace Dots
{
    public readonly partial struct VFXAspect : IAspect
    {
        public readonly Entity Entity;
        private readonly TransformAspect _transform;
        private readonly RefRW<VFXComponent> _properties;

        public float3 Position
        {
            get => _transform.Position;
            set => _transform.Position = value;
        }
        
        public bool CheckDestroy(float deltaTime)
        {
            _properties.ValueRW.CurTime += deltaTime;

            if (_properties.ValueRO.CurTime >= _properties.ValueRO.DestroyTime)
            {
                return true;
            }
            return false;
        }
    }
}