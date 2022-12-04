using Unity.Entities;
using Unity.Mathematics;

namespace Dots
{
    public struct InputProperties : IComponentData
    {
        public float3 TouchPos;
        public bool InTouch;
    }
}