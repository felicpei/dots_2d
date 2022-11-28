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
                AddComponent<Destination>();
            }
        }
    }
}