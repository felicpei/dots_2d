using System;
using UnityEngine;
#if UNITY_IOS
using UnityEngine.iOS;
#endif

public class ScreenScaleHelper
{
    public static void Init()
    {
        AdjustCamera();
    }

    private static float StandardRatio => 0.56338f; //!UsePortrait ? 1.77f : 0.56338f; }

    private static float StandardWidth => 720f; //!UsePortrait ? 1280f : 720f; }

    private static float StandardHeight => 1280f; // !UsePortrait ? 720f : 1280f; }

    public static void AdjustCamera()
    {
        var cam = XUI_Manager.UICamera;
        var canvasSize = GetCanvasSize();
        if (cam)
        {
            var ratio = StandardWidth / StandardHeight;
            var myRatio = Screen.width / (float)Screen.height;
            if (myRatio < ratio) 
            {
                cam.orthographicSize = StandardHeight / 2f * (ratio / myRatio);
            }
            else
            {
                cam.orthographicSize = StandardHeight / 2f;
            }
            
            cam.nearClipPlane = 100f;
            Debug.Log("ratio:" + ratio + " myRatio:" + myRatio + " cam.orthographicSize:" + cam.orthographicSize);
        }

        //异形屏
        XUI_Manager.OriginCanvasSize = canvasSize;
        
        
        var safeArea = Screen.safeArea;
        var widthRadio =  safeArea.width / Screen.width;
        var heightRadio = safeArea.height / Screen.height;
        var startX = safeArea.x / Screen.width / 2;
        var startY = safeArea.y / Screen.height / 2;
        
        Debug.Log("Screen.safeArea:" + Screen.safeArea + "ScreenWidth:" + Screen.width + " ScreenHeight:" + Screen.height);
        XUI_Manager.RefreshCanvasSize(widthRadio, heightRadio, startX, startY);
    }


    public static Vector2 GetCanvasSize()
    {
        var thisRatio = (float)Screen.width / Screen.height;
       
        if (thisRatio < StandardRatio)
        {
            var thisHeight = StandardWidth / thisRatio;
            return new Vector2(StandardWidth, thisHeight);

        }
        else
        {
            var thisWidth = StandardHeight * thisRatio;
            return new Vector2(thisWidth, StandardHeight);
        }
    }
}