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

        public bool InMove => _properties.ValueRO.MoveMode != EMoveJoyMode.None;
        public bool InShoot => _properties.ValueRO.AttackMode != EAttackJoyMode.None;

        public float2 MoveDirection
        {
            get => _properties.ValueRO.MoveDirection;
            set => _properties.ValueRW.MoveDirection = value;
        }

        public float2 ShootDirection
        {
            get => _properties.ValueRO.AttackDirection;
            set => _properties.ValueRW.AttackDirection = value;
        }

        public EMoveJoyMode MoveJoyMode
        {
            get => _properties.ValueRO.MoveMode;
            set => _properties.ValueRW.MoveMode = value;
        }

        public EAttackJoyMode ShootJoyMode
        {
            get => _properties.ValueRO.AttackMode;
            set => _properties.ValueRW.AttackMode = value;
        }
    }
}