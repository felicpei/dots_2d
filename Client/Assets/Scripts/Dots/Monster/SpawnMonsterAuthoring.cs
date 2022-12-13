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
        public int MonsterId;
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
                    MonsterId = authoring.MonsterId,
                    PosRange = authoring.PosRange,
                    Interval = authoring.SpawnInterval,
                    TotalCount = authoring.TotalCount,
                });

                AddComponent(new RandomProperties
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


    public readonly partial struct SpawnMonsterAspect : IAspect
    {
        public readonly Entity Entity;
        private readonly RefRW<LocalTransform> _transform;
        private readonly RefRO<SpawnMonsterProperties> _spawnComponent;
        private readonly RefRW<RandomProperties> _randomComponent;
        private readonly RefRW<SpawnMonsterTimer> _timerComponent;
        private readonly RefRW<SpawnMonsterCount> _countComponent;

        public Entity MonsterPrefab => _spawnComponent.ValueRO.Prefab;
        public int MonsterId => _spawnComponent.ValueRO.MonsterId;

        //刷新timer
        public float Timer
        {
            set => _timerComponent.ValueRW.Value = value;
            get => _timerComponent.ValueRO.Value;
        }

        public int TotalCount => _spawnComponent.ValueRO.TotalCount;

        public int CurCount
        {
            set => _countComponent.ValueRW.CurCount = value;
            get => _countComponent.ValueRO.CurCount;
        }

        //随机出生坐标
        public float3 GetBornPosition()
        {
            var range = new float3(_spawnComponent.ValueRO.PosRange.x, _spawnComponent.ValueRO.PosRange.y, 0);
            var minCorner = _transform.ValueRO.Position - range / 2f;
            var maxCorner = _transform.ValueRO.Position + range / 2f;
            var randomPos = _randomComponent.ValueRW.RandomFloat2.NextFloat3(minCorner, maxCorner);
            return randomPos;
        }

        //随机下次刷新时间
        public float GetNextSpawnTime()
        {
            var range = _spawnComponent.ValueRO.Interval;
            return GetRandomFloat(range.x, range.y);
        }

        private float GetRandomFloat(float min, float max)
        {
            var randomScale = _randomComponent.ValueRW.RandomFloat.NextFloat(min, max);
            return randomScale;
        }
    }
}