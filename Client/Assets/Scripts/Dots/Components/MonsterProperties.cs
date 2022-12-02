using Unity.Entities;
using Unity.Mathematics;
using UnityEngine;


namespace Dots
{
    public enum EState
    {
        Init = 1,
        Idle = 2,
        Move = 3,
        Attack = 4,
        Die = 5,
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
        public float WalkSpeed;
        public float AttackRange;
    }
    
    public struct MonsterDie : IComponentData , IEnableableComponent
    {
        public float DelayTime;
        public float CurTime;
    }
    
    public struct MonsterAttack : IComponentData, IEnableableComponent
    {
        public float Damage;
        public float AttackInterval;
        public float TimerValue;
        public int AttackCount;
    }

    public struct MonsterAttackTag : IComponentData
    {
    }
    
    public struct MonsterDieTag : IComponentData
    {
    }
}