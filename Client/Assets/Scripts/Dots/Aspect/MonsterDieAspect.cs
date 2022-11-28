using Unity.Entities;
using Unity.Mathematics;
using Unity.Transforms;

namespace Dots
{
    public readonly partial struct MonsterDieAspect : IAspect
    {
        public readonly Entity Entity;
        private readonly RefRW<MonsterDie> _dieComponent;

        public bool CheckDestroy(float deltaTime)
        {
            _dieComponent.ValueRW.CurTime += deltaTime;

            if (_dieComponent.ValueRO.CurTime >= _dieComponent.ValueRO.DelayTime)
            {
                return true;
            }

            return false;
        }
    }
}