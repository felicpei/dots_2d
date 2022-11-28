using Unity.Entities;
using Unity.Mathematics;
using Unity.Transforms;

namespace Dots
{
    public readonly partial struct MonsterMoveAspect : IAspect
    {
        public readonly Entity Entity;
        private readonly TransformAspect _transform;
        private readonly RefRO<MonsterMove> _walkComponent;
        private readonly RefRO<MonsterTarget> _targetComponent;

        public float WalkSpeed => _walkComponent.ValueRO.WalkSpeed;
        public float AttackRange => _walkComponent.ValueRO.AttackRange;
        
        public void Walk(float deltaTime)
        {
            _transform.Position += _transform.Forward * WalkSpeed * deltaTime;
        }
        
        public bool IsInAttackRange(float3 targetPosition, float attackRadius)
        {
            return math.distancesq(targetPosition, _transform.Position) <= attackRadius;
        }
    }
}