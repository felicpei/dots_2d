using Unity.Entities;
using Unity.Mathematics;
using Unity.Transforms;

namespace Dots
{
    public readonly partial struct MonsterBornAspect : IAspect
    {
        public readonly Entity Entity;
        private readonly TransformAspect _transform;
        private readonly RefRO<MonsterBorn> _born;

        public void Rise(float deltaTime)
        {
            _transform.Position += math.up() * _born.ValueRO.RiseSpeed * deltaTime;
        }

        public bool IsAboveGround => _transform.Position.y >= 0f;
        public void SetAtGroundLevel()
        {
            var pos = _transform.Position;
            pos.y = 0;
            _transform.Position = pos;
        }
    }
}