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
            }
        }
    }

    public readonly partial struct PlayerAspect : IAspect
    {
        public readonly Entity Entity;
        private readonly TransformAspect _transform;
        private readonly RefRW<PlayerProperties> _properties;
    }
}