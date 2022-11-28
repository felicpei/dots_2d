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
                Rotation = quaternion.identity,
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
            var range = new float3(_spawnComponent.ValueRO.PosRange.x, _spawnComponent.ValueRO.PosRange.y, 0);
            var minCorner = _transform.Position - range / 2f;
            var maxCorner = _transform.Position + range / 2f;
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