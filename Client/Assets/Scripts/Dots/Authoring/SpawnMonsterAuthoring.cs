using ecs;
using Unity.Entities;
using Unity.Mathematics;
using Unity.Transforms;
using UnityEngine;
using Random = Unity.Mathematics.Random;

namespace Dots
{
   public class SpawnMonsterAuthoring : MonoBehaviour
    {
        public GameObject MonsterPrefab;
        
        public uint RandomSeed;
        public float2 PosRange;
        public float2 SpawnInterval;
        public int TotalCount;
        
        public class SpawnMonsterAuthoringBaker : Baker<SpawnMonsterAuthoring>
        {
            public override void Bake(SpawnMonsterAuthoring authoring)
            {
                AddComponent(new SpawnMonsterProperties
                {
                    Prefab = GetEntity(authoring.MonsterPrefab),
                    PosRange = authoring.PosRange,
                    Interval = authoring.SpawnInterval,
                    TotalCount = authoring.TotalCount,
                });
                
                AddComponent(new RandomComponent
                {
                    RandomFloat = Random.CreateFromIndex(authoring.RandomSeed),
                    RandomFloat2 = Random.CreateFromIndex(authoring.RandomSeed),
                    RandomFloat3 = Random.CreateFromIndex(authoring.RandomSeed),
                });
                
                AddComponent<SpawnMonsterTimer>();
                AddComponent<SpawnMonsterCount>();
            }
        }
    }
}