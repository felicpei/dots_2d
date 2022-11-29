using Unity.Entities;
using Unity.Mathematics;
using Unity.Transforms;
using UnityEngine;

namespace Dots
{
    public class MonsterAuthoring : MonoBehaviour
    {
        public GameObject Prefab;
        public float AttackRange;
        public float MoveSpeed;
        public float AttackInterval;
        public float Damage;
        
        public class MonsterAuthoringBaker : Baker<MonsterAuthoring>
        {
            public override void Bake(MonsterAuthoring authoring)
            {
                AddComponent<MonsterState>();
                AddComponent<MonsterTarget>();
                
                AddComponent(new MonsterDie
                {
                    DelayTime = 1
                });
        
                AddComponent(new MonsterMove
                {
                    AttackRange = authoring.AttackRange,
                    WalkSpeed = authoring.MoveSpeed,
                });
                
                AddComponent(new MonsterAttack
                {
                    Damage = authoring.Damage,
                    AttackInterval = authoring.AttackInterval
                });
                
                //添加Prefab
                AddComponentObject(new HybridInitTag
                {
                    Prefab = authoring.Prefab
                });
            }
        }
    }
}