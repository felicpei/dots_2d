using System.Collections.Generic;
using Unity.Collections;
using Unity.Entities;
using Unity.Mathematics;
using UnityEngine;

namespace Dots
{
    public struct VFXData : IBufferElementData
    {
        public Entity Prefab;
    }

    public struct VFXComponent : IComponentData
    {
        public float CurTime;
        public float DestroyTime;
    }

    public struct VFXCreateTag : IComponentData
    {
        public float3 Pos;
        public int EffectIdx;
    }
}