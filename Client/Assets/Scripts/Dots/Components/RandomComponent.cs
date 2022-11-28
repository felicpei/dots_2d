using Unity.Entities;
using Unity.Mathematics;

namespace ecs
{
    public struct RandomComponent : IComponentData
    {
        public Random RandomFloat3;
        public Random RandomFloat2;
        public Random RandomFloat;
    }
}