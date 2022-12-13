using Unity.Entities;
using Unity.Mathematics;
using Unity.Transforms;
using UnityEngine;

namespace Dots
{
    public class PlayerAuthoring : MonoBehaviour
    {
        public GameObject Prefab;
        public class PlayerAuthoringBaker : Baker<PlayerAuthoring>
        {
            public override void Bake(PlayerAuthoring authoring)
            {
                AddComponent<PlayerProperties>();

                //Hybrid
                AddComponentObject(new HybridInitTag
                {
                    Prefab = authoring.Prefab
                });
            }
        }
    }

    public readonly partial struct PlayerAspect : IAspect
    {
        public readonly Entity Entity;
        private readonly RefRW<LocalTransform> _transform;
        private readonly RefRW<PlayerProperties> _properties;
        private readonly RefRW<PlayerState> _state;

        public bool InMove
        {
            get => _state.ValueRO.InMove;
            set => _state.ValueRW.InMove = value;
        }
        
        public void Move(float2 direction, float deltaTime)
        {
            var dir = new float3(direction.x, direction.y, 0);
            _transform.ValueRW.Position = _transform.ValueRO.Position + math.normalize(dir) * _properties.ValueRO.MoveSpeed * deltaTime;
            InMove = true;
        }

        public void StopMove()
        {
            InMove = false;
        }
    }
}