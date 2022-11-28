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
        public float RiseSpeed;
        public float MoveSpeed;
        public float Damage;
        
        public class MonsterAuthoringBaker : Baker<MonsterAuthoring>
        {
            public override void Bake(MonsterAuthoring authoring)
            {
                AddComponent<MonsterInitTag>();
                AddComponent<MonsterTarget>();
                
                AddComponent(new MonsterDie
                {
                    DelayTime = 1
                });
                
                AddComponent(new MonsterBorn
                {
                    RiseSpeed =  authoring.RiseSpeed
                });
                
                AddComponent(new MonsterMove
                {
                    AttackRange = authoring.AttackRange,
                    WalkSpeed = authoring.MoveSpeed,
                });
                
                //添加Prefab
                AddComponentObject(new GameObjectInitTag
                {
                    Prefab = authoring.Prefab
                });
            }
        }
    }
}