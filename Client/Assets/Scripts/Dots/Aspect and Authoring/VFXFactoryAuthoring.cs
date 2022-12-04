using System.Collections.Generic;
using Unity.Collections;
using Unity.Entities;
using Unity.Mathematics;
using Unity.Transforms;
using UnityEngine;

namespace Dots
{
    public class VFXFactoryAuthoring : MonoBehaviour
    {
        public List<GameObject> Effects;

        public class VFXFactoryAuthoringBaker : Baker<VFXFactoryAuthoring>
        {
            public override void Bake(VFXFactoryAuthoring authroing)
            {
                var buffer = AddBuffer<VFXData>();

                for (int i = 0; i < authroing.Effects.Count; i++)
                {
                    buffer.Add(new VFXData { Prefab = GetEntity(authroing.Effects[i]) });
                }
            }
        }
    }
}