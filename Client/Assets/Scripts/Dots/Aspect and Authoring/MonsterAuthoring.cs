using System;
using Unity.Entities;
using Unity.Mathematics;
using Unity.Physics;
using Unity.Physics.Extensions;
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
        private readonly RefRO<MonsterProperties> _properties;
        private readonly RefRW<MonsterState> _state;
        private readonly RefRW<MonsterDie> _dieComponent;
        private readonly RefRW<MonsterTarget> _targetComponent;
        private readonly RefRW<MonsterAttack> _attackComponent;

        private readonly RefRW<Translation> _translation;
        private readonly RefRW<Rotation> _rotation;

        public float3 Position
        {
            get => _translation.ValueRO.Value;
            set => _translation.ValueRW.Value = value;
        } 
        
        public int MonsterId => _properties.ValueRO.MonsterId;
        
        public EState CurState => _state.ValueRO.Value;
        public EState PrevState => _state.ValueRO.PrevValue;
        
        public float WalkSpeed => _properties.ValueRO.WalkSpeed;
        public float AttackRange => _properties.ValueRO.AttackRange;
        public float3 Target => _targetComponent.ValueRO.Value;
        
        public float AttackIntervalTimer
        {
            set => _attackComponent.ValueRW.IntervalTimer = value;
            get => _attackComponent.ValueRO.IntervalTimer;
        }
        
        public float AttackActionTimer
        {
            set => _attackComponent.ValueRW.ActionTimer = value;
            get => _attackComponent.ValueRO.ActionTimer;
        }


        public float AttackInterval => _properties.ValueRO.AttackInterval;
        public float AttackContTime => _properties.ValueRO.AttackContTime;
        
        public void SetTarget(float3 target)
        {
            _targetComponent.ValueRW.Value = target;
        }
        
        public void Walk(float deltaTime)
        {
            var dir = math.normalize(Target - Position);
            Position += dir * WalkSpeed * deltaTime;
            
        }
        
        public bool IsInAttackRange(float attackRadius)
        {
            return math.distancesq(Target, Position) <= attackRadius;
        }
        
        public void EnterState(EState state, EntityCommandBuffer.ParallelWriter ecb, int sortKey)
        {
            if (CurState == state)
            {
                return;
            }

            _state.ValueRW.PrevValue = _state.ValueRW.Value;
            _state.ValueRW.Value = state;

            if(CurState == EState.Move)
            {
                //动作标签
                ecb.AddComponent<MonsterMoveTag>(sortKey, Entity);
            }

            if (CurState == EState.Die)
            {
                //动作标签
                ecb.AddComponent<MonsterDieTag>(sortKey, Entity);
                
                //播放死亡特效
                ecb.AddComponent(sortKey, Entity, new VFXCreateTag
                {
                    Pos = Position,
                    EffectIdx = 1,
                });
            }
            /*
            ecb.SetComponentEnabled<MonsterMove>(sortKey, Entity, state == EState.Move);
            ecb.SetComponentEnabled<MonsterAttack>(sortKey, Entity, state == EState.Attack);
            ecb.SetComponentEnabled<MonsterDie>(sortKey, Entity, state == EState.Die);
            */
        }
        
        public void EnterState(EState state, EntityCommandBuffer ecb)
        {
            if (CurState == state)
            {
                return;
            }

            _state.ValueRW.PrevValue = _state.ValueRW.Value;
            _state.ValueRW.Value = state;

            if(CurState == EState.Move)
            {
                //动作标签
                ecb.AddComponent<MonsterMoveTag>(Entity);
            }

            if (CurState == EState.Die)
            {
                //动作标签
                ecb.AddComponent<MonsterDieTag>(Entity);
                
                //播放死亡特效
                ecb.AddComponent(Entity, new VFXCreateTag
                {
                    Pos = Position,
                    EffectIdx = 1,
                });
            }
            /*
            ecb.SetComponentEnabled<MonsterMove>(sortKey, Entity, state == EState.Move);
            ecb.SetComponentEnabled<MonsterAttack>(sortKey, Entity, state == EState.Attack);
            ecb.SetComponentEnabled<MonsterDie>(sortKey, Entity, state == EState.Die);
            */
        }
        

        public void Attack(EntityCommandBuffer.ParallelWriter ecb, int sortKey)
        {
            ecb.AddComponent<MonsterAttackTag>(sortKey, Entity);
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


        
        private readonly RefRW<PhysicsVelocity> _physicsVelocity;
        private readonly RefRW<PhysicsMass> _physicsMass;
        private readonly RefRW<PhysicsDamping> _physicsDamping;
        private readonly RefRW<PhysicsCollider> _physicsCollider;
        public void AddForce(float3 force)
        {
            _physicsVelocity.ValueRW.ApplyImpulse(_physicsMass.ValueRO, _translation.ValueRO, _rotation.ValueRO, force, Position);
        }
    }
}