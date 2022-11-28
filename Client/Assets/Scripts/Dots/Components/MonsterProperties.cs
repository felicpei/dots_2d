using Unity.Entities;
using Unity.Mathematics;
using UnityEngine;

namespace Dots
{
    
    public struct MonsterInitTag : IComponentData
    {
    }

    public struct MonsterStartMoveTag : IComponentData
    {
    }

    public struct MonsterStartDieTag : IComponentData
    {
    }
    
    public struct MonsterTarget : IComponentData
    {
        public float3 Value;
    }
 
    public struct MonsterBorn : IComponentData
    {
        public float RiseSpeed;
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
}