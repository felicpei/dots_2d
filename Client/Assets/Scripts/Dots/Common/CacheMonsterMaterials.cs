using System.Collections.Generic;
using Unity.Collections;
using Unity.Entities;
using UnityEngine.Rendering;

namespace Dots
{
    public struct CacheMonsterMaterials : IComponentData
    {
        public NativeArray<int> MonsterIdIndex;      
        public NativeArray<BatchMaterialID> Idle;
        public NativeArray<BatchMaterialID> Move;
        public NativeArray<BatchMaterialID> Attack;
        public NativeArray<BatchMaterialID> Die;
        public NativeArray<BatchMaterialID> Hit;
        public BatchMeshID MeshId;
    }
}