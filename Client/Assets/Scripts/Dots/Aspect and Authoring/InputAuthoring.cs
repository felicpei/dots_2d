using Unity.Entities;
using Unity.Mathematics;
using Unity.Transforms;
using UnityEngine;

namespace Dots
{
    public class InputAuthoring : MonoBehaviour
    {
        public class InputAuthoringBaker : Baker<InputAuthoring>
        {
            public override void Bake(InputAuthoring authoring)
            {
                AddComponent<InputProperties>();
            }
        }
    }

    public readonly partial struct InputAspect : IAspect
    {
        private readonly RefRW<InputProperties> _properties;

        public bool InTouch
        {
            get => _properties.ValueRO.InTouch;
            set => _properties.ValueRW.InTouch = value;
        }

        public float3 TouchPos
        {
            get => _properties.ValueRO.TouchPos;
            set => _properties.ValueRW.TouchPos = value;
        }
    }
}