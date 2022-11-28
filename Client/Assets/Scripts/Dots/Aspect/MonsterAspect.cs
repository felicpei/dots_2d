using System;
using Unity.Entities;
using Unity.Mathematics;
using Unity.Transforms;

namespace Dots
{
    public readonly partial struct MonsterAspect : IAspect
    {
        public readonly Entity Entity;
        private readonly TransformAspect _transform;
        private readonly RefRW<MonsterState> _state;
        private readonly RefRW<MonsterDie> _dieComponent;
        private readonly RefRW<MonsterTarget> _targetComponent;
        private readonly RefRW<MonsterAttack> _attackComponent;
        private readonly RefRO<MonsterMove> _walkComponent;
        
        public EState CurState => _state.ValueRO.Value;
        public EState PrevState => _state.ValueRO.PrevValue;
        
        public float WalkSpeed => _walkComponent.ValueRO.WalkSpeed;
        public float AttackRange => _walkComponent.ValueRO.AttackRange;
        public float3 Target => _targetComponent.ValueRO.Value;
        
        public float AttackTimer
        {
            set => _attackComponent.ValueRW.TimerValue = value;
            get => _attackComponent.ValueRO.TimerValue;
        }

        public float AttackInterval => _attackComponent.ValueRO.AttackInterval;
        
        
        public void SetTarget(float3 target)
        {
            _targetComponent.ValueRW.Value = target;
        }
        
        public void Walk(float deltaTime)
        {
            var dir = math.normalize(Target - _transform.Position);
            _transform.Position += dir * WalkSpeed * deltaTime;
        }
        
        public bool IsInAttackRange(float attackRadius)
        {
            return math.distancesq(Target, _transform.Position) <= attackRadius;
        }
        
        public void EnterState(EState state)
        {
            if (CurState == state)
            {
                return;
            }

            _state.ValueRW.PrevValue = _state.ValueRW.Value;
            _state.ValueRW.Value = state;
            /*ecb.SetComponentEnabled<MonsterMove>(sortKey, Entity, state == EState.Move);
            ecb.SetComponentEnabled<MonsterAttack>(sortKey, Entity, state == EState.Attack);
            ecb.SetComponentEnabled<MonsterDie>(sortKey, Entity, state == EState.Die);*/
        }

        public void Attack(EntityCommandBuffer.ParallelWriter ecb, int sortKey)
        {
            ecb.AddComponent<MonsterAttackTag>(sortKey, Entity);
            
            //todo attack damage
        }
        
        public bool CheckDestroy(float deltaTime)
        {
            _dieComponent.ValueRW.CurTime += deltaTime;

            if (_dieComponent.ValueRO.CurTime >= _dieComponent.ValueRO.DelayTime)
            {
                return true;
            }

            return false;
        }
    }
}