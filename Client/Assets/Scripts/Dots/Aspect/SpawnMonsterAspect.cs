using ecs;
using Unity.Entities;
using Unity.Mathematics;
using Unity.Transforms;

namespace Dots
{
    public readonly partial struct SpawnMonsterAspect : IAspect
    {
        public readonly Entity Entity;
        private readonly TransformAspect _transform;
        private readonly RefRO<SpawnMonsterProperties> _spawnComponent;
        private readonly RefRW<RandomComponent> _randomComponent;
        private readonly RefRW<SpawnMonsterTimer> _timerComponent;
        private readonly RefRW<SpawnMonsterCount> _countComponent;

        public Entity MonsterPrefab => _spawnComponent.ValueRO.Prefab;

        
        public UniformScaleTransform GetSpawnPoint(float3 targetPosition)
        {
            var pos = GetBornPosition();
            return new UniformScaleTransform
            {
                Position = pos,
                Rotation = DotsHelper.HeadingToTarget(pos, targetPosition),
                Scale = 1,
            };
        }

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
        private float3 GetBornPosition()
        {
            var pos = GetRandomFloat3(_transform.Position, _spawnComponent.ValueRO.PosRange);
            return pos;
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

        private float3 GetRandomFloat3(float3 pos, float3 range)
        {
            var minCorner = pos - range / 2f;
            var maxCorner = pos + range / 2f;
            var randomPos = _randomComponent.ValueRW.RandomFloat2.NextFloat3(minCorner, maxCorner);
            return randomPos;
        }
    }
}