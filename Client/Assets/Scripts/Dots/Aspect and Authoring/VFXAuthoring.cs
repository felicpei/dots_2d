using Unity.Entities;
using Unity.Mathematics;
using Unity.Transforms;
using UnityEngine;

namespace Dots
{
    public class VFXAuthoring : MonoBehaviour
    {
        public GameObject Prefab;

        public class VFXAuthoringBaker : Baker<VFXAuthoring>
        {
            public override void Bake(VFXAuthoring authroing)
            {
               AddComponentObject(new HybridInitTag
               {
                   Prefab = authroing.Prefab
               });
            }
        }
    }
    
    public readonly partial struct VFXAspect : IAspect
    {
        public readonly Entity Entity;
        private readonly TransformAspect _transform;
        private readonly RefRW<VFXComponent> _properties;

        
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