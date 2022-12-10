using UnityEngine;
using UnityEngine.Rendering.Universal;

public static class CameraHelper
{
    public static Camera MainCamera => Camera.main != null ? Camera.main : Camera.current;
    
    public static void ClearShake()
    {
        
    }

    public static Vector3 GetMouseWorldPos(Vector3 touchPos)
    {
        var camera = MainCamera;
        if (camera == null)
        {
            Dbg.LogError("GetMouseWorldPos Error, camera is null");
            return Vector3.zero;
        }
        
        var transform = camera.transform;
        var targetPos = transform.position;
        targetPos += transform.forward * camera.orthographicSize;
        
        var screenPoint = camera.WorldToScreenPoint(targetPos);
        var mousePos = touchPos;
        mousePos.z = screenPoint.z;
        return camera.ScreenToWorldPoint(mousePos);
    }
}