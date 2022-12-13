using Unity.Entities;

namespace Dots
{
    public struct PlayerProperties : IComponentData
    {
        public float MoveSpeed;
    }

    public struct PlayerState : IComponentData
    {
        public bool InMove;
    }
}