using Unity.Entities;
using Unity.Mathematics;

namespace Dots
{
    public struct SpawnMonsterProperties : IComponentData
    {
        public Entity Prefab;
        public float2 PosRange;
        public float2 Interval;
        public int TotalCount;
    }
    public struct SpawnMonsterTimer : IComponentData
    {
        public float Value;
    }
    
    public struct SpawnMonsterCount : IComponentData
    {
        public int CurCount;
    }
}