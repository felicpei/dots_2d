using Unity.Burst;
using Unity.Collections;
using Unity.Entities;
using Unity.Mathematics;
using Unity.Transforms;
using UnityEngine;

namespace Dots
{
    [RequireMatchingQueriesForUpdate]
    [UpdateInGroup(typeof(InitializationSystemGroup))]
    public partial struct PlayerInputSystem : ISystem
    {
        public void OnCreate(ref SystemState state)
        {
            //必须是mission
            state.RequireForUpdate<MissionProperties>();
            state.RequireForUpdate<InputProperties>();
        }

        public void OnDestroy(ref SystemState state)
        {
        }

        public void OnUpdate(ref SystemState state)
        {
            var inputEntity = SystemAPI.GetSingletonEntity<InputProperties>();
            var inputAspect = SystemAPI.GetAspectRW<InputAspect>(inputEntity);
            
#if (UNITY_ANDROID || UNITY_IOS) && !UNITY_EDITOR
            if (Input.touchCount > 0)
            {
                var useTouch = Input.touches[0];
                var touchPos = useTouch.position;
#else
            //鼠标点击以后，为每个cube附加一个MoveComponent，里面附带终点坐标
            if (Input.GetMouseButtonDown(MouseButton.Left))
            {
                var touchPos = Input.mousePosition;
#endif
                //获得鼠标坐标对应的世界坐标位置
                var worldPosV3 = CameraHelper.GetMouseWorldPos(touchPos);
                var worldPos = math.float3(worldPosV3.x, worldPosV3.y, worldPosV3.z);

                inputAspect.InTouch = true;
                inputAspect.TouchPos = worldPos;
            }
            else
            {
                inputAspect.InTouch = false;   
            }
        }
    }
}