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
                //添加Prefab
                AddComponentObject(new HybridInitTag
                {
                    Prefab = authoring.Prefab
                });
            }
        }
    }
}