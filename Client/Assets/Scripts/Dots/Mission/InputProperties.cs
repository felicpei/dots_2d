using Unity.Entities;
using Unity.Mathematics;
using UnityEngine;

namespace Dots
{
    public struct InputProperties : IComponentData
    {
        public EMoveJoyMode MoveMode;
        public Vector2 MoveDirection;
        public EAttackJoyMode AttackMode;
        public Vector2 AttackDirection;
    }
}