using Unity.Entities;
using Unity.Mathematics;
using UnityEngine;


namespace Dots
{
    public enum EState
    {
        Idle = 2,
        Move = 3,
        Attack = 4,
        Die = 5,
    }

    public struct MonsterInitTag : IComponentData
    {
        
    }

    //readonly
    public struct MonsterProperties : IComponentData
    {
        public int MonsterId;
        public float WalkSpeed;
        public float AttackRange;
        public float DelayDestroyTime;
        public float Damage;
        public float AttackContTime;
        public float AttackInterval;
    }
    
    
    public struct MonsterState : IComponentData
    {
        public EState Value;
        public EState PrevValue;
    }
    
    public struct MonsterTarget : IComponentData
    {
        public float3 Value;
    }
 
    public struct MonsterMove : IComponentData, IEnableableComponent
    {
    }
    
    
    public struct MonsterDie : IComponentData , IEnableableComponent
    {
        public float CurTime;
    }
    
    public struct MonsterAttack : IComponentData, IEnableableComponent
    {
        public float ActionTimer;
        public float IntervalTimer;
        public int AttackCount;
    }

    public struct MonsterAttackTag : IComponentData
    {
    }
    public struct MonsterDieTag : IComponentData
    {
    }
    public struct MonsterIdleTag : IComponentData
    {
    }
    public struct MonsterHitTag : IComponentData
    {
    }
    public struct MonsterMoveTag : IComponentData
    {
    }
}