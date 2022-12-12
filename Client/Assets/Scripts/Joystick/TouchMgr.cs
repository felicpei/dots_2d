using System.Collections.Generic;
using UnityEngine;

public class TouchMgr : MonoBehaviour
{
    private static TouchMgr _instance;
    private static readonly List<ITouchX> BeganTouch = new();
    private static readonly List<ITouchX> EndTouch = new();

    public static void Init()
    {
        if (_instance != null)
        {
            return;
        }
        
        var gameObj = new GameObject("TouchMgr");
        DontDestroyOnLoad(gameObj);
        _instance = gameObj.AddComponent<TouchMgr>();
    }

    public static void LoadJoystickPrefab()
    {
        XResource.LoadGameObject("Joystick/prefabs/JoystickCanvas.prefab", gameObject =>
        {
            gameObject.name = "JoySticks";
            gameObject.transform.SetParent(null, false);
        });
    }
    
    public static void RegController(ITouchX iTouch)
    {
        if (!BeganTouch.Contains(iTouch))
        {
            BeganTouch.Add(iTouch);
        }

        if (!EndTouch.Contains(iTouch))
        {
            EndTouch.Add(iTouch);
        }
    }

    public static void RemoveController(ITouchX iTouch)
    {
        BeganTouch.Remove(iTouch);
        EndTouch.Remove(iTouch);
    }

    public static Vector3? GetTouchPos(int fingerId)
    {
        Vector3? ret;
        switch (XPlatform.Platform)
        {
            case XPlatform.EPlatform.UnityEditor:
            case XPlatform.EPlatform.UnityEditor_AB:
            case XPlatform.EPlatform.Standalone:
            case XPlatform.EPlatform.WebGL:
                ret = GetMouseTouchPos();
                break;
            case XPlatform.EPlatform.Android:
            case XPlatform.EPlatform.Ios:
            default:
                ret = GetMobileTouchPos(fingerId);
                break;
        }

        return ret;
    }

    private void Update()
    {
        switch (XPlatform.Platform)
        {
            case XPlatform.EPlatform.UnityEditor:
            case XPlatform.EPlatform.UnityEditor_AB:
            case XPlatform.EPlatform.Standalone:
            case XPlatform.EPlatform.WebGL:
                UpdateMouseTouch();
                break;
            case XPlatform.EPlatform.Android:
            case XPlatform.EPlatform.Ios:
            default:
                UpdateTouch();
                break;
        }
    }

    private static void UpdateMouseTouch()
    {
        if (Input.GetMouseButtonDown(MouseButton.Left))
        {
            SendTouchBegan(MouseButton.Left, Input.mousePosition);
        }

        if (Input.GetMouseButtonUp(MouseButton.Left))
        {
            SendTouchEnd(MouseButton.Left, Input.mousePosition);
        }
    }

    private static Vector3? GetMouseTouchPos()
    {
        return Input.mousePosition;
    }

    private static void UpdateTouch()
    {
        var touchCount = Input.touchCount;
        for (var i = 0; i < touchCount; i++)
        {
            var touch = Input.GetTouch(i);
            if (touch.phase == TouchPhase.Began)
            {
                SendTouchBegan(touch.fingerId, touch.position);
            }
            else if (touch.phase == TouchPhase.Ended)
            {
                SendTouchEnd(touch.fingerId, touch.position);
            }
        }
    }

    private static Vector3? GetMobileTouchPos(int fingerId)
    {
        for (var i = 0; i < Input.touchCount; i++)
        {
            var t = Input.GetTouch(i);
            if (t.fingerId == fingerId)
            {
                return t.position;
            }
        }

        return null;
    }

    private static void SendTouchBegan(int _fingerId, Vector3 pos)
    {
        for (var i = 0; i < BeganTouch.Count; i++)
        {
            BeganTouch[i].TouchBegan(_fingerId, pos);
        }
    }

    private static void SendTouchEnd(int _fingerId, Vector3 pos)
    {
        for (var i = 0; i < EndTouch.Count; i++)
        {
            EndTouch[i].TouchEnd(_fingerId, pos);
        }
    }

    public static void ForceTouchEndAll()
    {
        var touchCount = Input.touchCount;
        for (var i = 0; i < touchCount; i++)
        {
            var touch = Input.GetTouch(i);
            SendTouchEnd(touch.fingerId, touch.position);
        }

        for (var i = 0; i < EndTouch.Count; i++)
        {
            EndTouch[i].ForceEnd();
        }
    }

    public static void ClearAll()
    {
        BeganTouch.Clear();
        EndTouch.Clear();
    }
}
