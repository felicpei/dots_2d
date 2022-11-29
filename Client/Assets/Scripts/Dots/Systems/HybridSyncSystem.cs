/*using System.Linq;
using ecs;
using Script;
using Unity.Burst;
using Unity.Collections;
using Unity.Entities;
using Unity.Mathematics;
using Unity.Transforms;
using UnityEngine;

namespace Dots
{
    [UpdateInGroup(typeof(TransformSystemGroup))]
    public partial struct HybridSyncSystem  : ISystem
    {
        public void OnCreate(ref SystemState state)
        {
        }

        public void OnDestroy(ref SystemState state)
        {
        }

        public void OnUpdate(ref SystemState state)
        {
            //更新坐标
            foreach (var (goTransform, trans) in SystemAPI.Query<HybridTransform, TransformAspect>())
            {
                goTransform.Transform.position = trans.Position;
                goTransform.Transform.rotation = trans.Rotation;
            }
            
        }
    }
}*/