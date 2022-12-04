using Unity.Entities;
using Unity.Mathematics;
using Unity.Transforms;
using UnityEngine;

namespace Dots
{
    public class MissionAuthoring : MonoBehaviour
    {
        public class MissionAuthoringBaker : Baker<MissionAuthoring>
        {
            public override void Bake(MissionAuthoring authoring)
            {
                AddComponent<MissionProperties>();
            }
        }
    }
}