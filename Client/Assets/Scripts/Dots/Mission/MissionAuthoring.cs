using Unity.Entities;
using Unity.Mathematics;
using Unity.Transforms;
using UnityEngine;

namespace Dots
{
    public class MissionAuthoring : MonoBehaviour
    {
        public GameObject PlayerPrefab;

        public class MissionAuthoringBaker : Baker<MissionAuthoring>
        {
            public override void Bake(MissionAuthoring authoring)
            {  
                AddComponent(new MissionProperties
                {
                    PlayerPrefab = GetEntity(authoring.PlayerPrefab),
                });
            }
        }
    }
    
    public readonly partial struct MissionAspect : IAspect
    {
        private readonly RefRO<MissionProperties> _properties;

        public Entity PlayerPrefab => _properties.ValueRO.PlayerPrefab;
    }
}