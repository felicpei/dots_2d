using Unity.Burst;
using Unity.Collections;
using Unity.Entities;
using Unity.Mathematics;
using Unity.Transforms;
using UnityEngine;

namespace Dots
{
    //读取摇杆相关参数，存储到InputProperties中

    [RequireMatchingQueriesForUpdate]
    [UpdateInGroup(typeof(InitializationSystemGroup))]
    public partial struct InputSystem : ISystem
    {
        public void OnCreate(ref SystemState state)
        {
            state.RequireForUpdate<MissionProperties>();
            state.RequireForUpdate<InputProperties>();
        }

        public void OnDestroy(ref SystemState state)
        {
        }

        public void OnUpdate(ref SystemState state)
        {
            //更新input相关参数
            var inputAspect = SystemAPI.GetAspectRW<InputAspect>(SystemAPI.GetSingletonEntity<InputProperties>());
            
            inputAspect.MoveDirection = VirtualMoveJoystick.Direction;
            inputAspect.MoveJoyMode = VirtualMoveJoystick.Mode;
            
            inputAspect.ShootDirection = VirtualAttackJoystick.Direction;
            inputAspect.ShootJoyMode = VirtualAttackJoystick.Mode;
        }
    }
}