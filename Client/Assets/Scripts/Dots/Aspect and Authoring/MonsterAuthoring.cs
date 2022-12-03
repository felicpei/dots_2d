using System;
using Unity.Entities;
using Unity.Mathematics;
using Unity.Rendering;
using Unity.Transforms;
using UnityEngine;

namespace Dots
{
    public class MonsterAuthoring : MonoBehaviour
    {
        public class MonsterAuthoringBaker : Baker<MonsterAuthoring>
        {
            public override void Bake(MonsterAuthoring authoring)
            {
                AddComponent<MonsterProperties>();
                AddComponent<MonsterState>();
                AddComponent<MonsterTarget>();
                AddComponent<MonsterDie>();
                AddComponent<MonsterMove>();
                AddComponent<MonsterAttack>();
            }
        }
    }
    
    public readonly partial struct MonsterAspect : IAspect
    {
        public readonly Entity Entity;
        private readonly TransformAspect _transform;
        private readonly RefRO<MonsterProperties> _properties;
        private readonly RefRW<MonsterState> _state;
        private readonly RefRW<MonsterDie> _dieComponent;
        private readonly RefRW<MonsterTarget> _targetComponent;
        private readonly RefRW<MonsterAttack> _attackComponent;

        public int MonsterId => _properties.ValueRO.MonsterId;
        
        public EState CurState => _state.ValueRO.Value;
        public EState PrevState => _state.ValueRO.PrevValue;
        
        public float WalkSpeed => _properties.ValueRO.WalkSpeed;
        public float AttackRange => _properties.ValueRO.AttackRange;
        public float3 Target => _targetComponent.ValueRO.Value;
        
        public float AttackTimer
        {
            set => _attackComponent.ValueRW.TimerValue = value;
            get => _attackComponent.ValueRO.TimerValue;
        }

        public float AttackInterval => _properties.ValueRO.AttackInterval;
        
        
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
        
        public void EnterState(EState state, EntityCommandBuffer.ParallelWriter ecb, int sortKey)
        {
            if (CurState == state)
            {
                return;
            }

            _state.ValueRW.PrevValue = _state.ValueRW.Value;
            _state.ValueRW.Value = state;

            if (CurState == EState.Idle)
            {
                ecb.AddComponent<MonsterIdleTag>(sortKey, Entity);
            }
            else if(CurState == EState.Move)
            {
                ecb.AddComponent<MonsterMoveTag>(sortKey, Entity);
            }
            /*ecb.SetComponentEnabled<MonsterMove>(sortKey, Entity, state == EState.Move);
            ecb.SetComponentEnabled<MonsterAttack>(sortKey, Entity, state == EState.Attack);
            ecb.SetComponentEnabled<MonsterDie>(sortKey, Entity, state == EState.Die);*/
        }

        public void Attack(EntityCommandBuffer.ParallelWriter ecb, int sortKey)
        {
            ecb.AddComponent<MonsterAttackTag>(sortKey, Entity);
            
            //todo attack damage
            _attackComponent.ValueRW.AttackCount += 1;

            if (_attackComponent.ValueRW.AttackCount == 2)
            {
                EnterDie(ecb, sortKey);
            }
        }

        public void EnterDie(EntityCommandBuffer.ParallelWriter ecb, int sortKey)
        {
            EnterState(EState.Die, ecb, sortKey);  
            ecb.AddComponent<MonsterDieTag>(sortKey, Entity);
        }
        
        public bool CheckDestroy(float deltaTime)
        {
            _dieComponent.ValueRW.CurTime += deltaTime;

            if (_dieComponent.ValueRO.CurTime >= _properties.ValueRO.DelayDestroyTime)
            {
                return true;
            }

            return false;
        }
    }
}