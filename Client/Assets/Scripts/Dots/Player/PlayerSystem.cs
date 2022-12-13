using Unity.Burst;
using Unity.Entities;
using Unity.Mathematics;

namespace Dots
{
    //刷怪System
    [BurstCompile]
    [RequireMatchingQueriesForUpdate]
    [UpdateInGroup(typeof(SimulationSystemGroup))]
    public partial struct PlayerSystem : ISystem
    {
        [BurstCompile]
        public void OnCreate(ref SystemState state)
        {
            state.RequireForUpdate<MissionProperties>();
            state.RequireForUpdate<InputProperties>();
            state.RequireForUpdate<PlayerProperties>();
        }

        [BurstCompile]
        public void OnDestroy(ref SystemState state)
        {
        }

        [BurstCompile]
        public void OnUpdate(ref SystemState state)
        {
            var deltaTime = SystemAPI.Time.DeltaTime;
            var inputAspect = SystemAPI.GetAspectRO<InputAspect>(SystemAPI.GetSingletonEntity<InputProperties>());
            
            //update AI
            new PlayerMoveJob
            {
                DeltaTime = deltaTime,
                Direction = inputAspect.MoveDirection,
                MoveMode = inputAspect.MoveJoyMode
            }.ScheduleParallel();
        }

        [BurstCompile]
        private partial struct PlayerMoveJob : IJobEntity
        {
            public float DeltaTime;
            public float2 Direction;
            public EMoveJoyMode MoveMode;

            [BurstCompile]
            private void Execute(PlayerAspect aspect)
            {
                if (MoveMode == EMoveJoyMode.Walk)
                {
                    aspect.Move(Direction, DeltaTime);
                }
                else
                {
                    aspect.StopMove();
                }
            }
        }
    }
}