
using System;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.EventSystems;
using UnityEngine.UI;

public enum EMoveJoyMode
{
    None,
    Walk
}

public class VirtualMoveJoystick : VirtualBaseJoystick
{
    public static EMoveJoyMode Mode { private set; get; } = EMoveJoyMode.None;
    public static Vector2 Direction { private set; get; }
    private const int MaxDist       = 40;
    private const int StartMoveDist = 10;
    
    
    public Image Bg;
    public Image Fore;
    public GameObject TouchArea;
    public Canvas Canvas;
    
    private Vector3 _initPos;
    private bool _bPress;
    private GraphicRaycaster _graphicRaycaster;
    private PointerEventData _eventDataCurrentPosition;
    private readonly List<RaycastResult> _raycastResults = new();
    
    protected override void Awake()
    {
        base.Awake();
        _graphicRaycaster = Canvas.GetComponent<GraphicRaycaster>();
        _eventDataCurrentPosition = new PointerEventData(EventSystem.current);
        
        FingerId = -1;
        _initPos = Vector3.zero;
    }
    
    protected override void StartTouch()
    {
        base.StartTouch();
        _bPress = true;
    }
    
    protected override void InTouch()
    {
        base.InTouch();
        var touchPt = GetTouchPoint();
        
        //点击坐标转UI坐标
        RectTransformUtility.ScreenPointToLocalPointInRectangle(transform as RectTransform, touchPt, Canvas.worldCamera, out var localPt);

        var bgTransform = Bg.transform;
        var foreTransform = Fore.transform;
        
        var direction = localPt - (Vector2)bgTransform.localPosition;
        var dist = direction.magnitude;

        if (_bPress)
        {
            FirstPressed = true;
            _bPress = false;
            
            foreTransform.localPosition = localPt;
            bgTransform.localPosition = localPt;
            return;
        }

        if (XGameSetting.FreeMoveJoystick)
        {
            var bgMoveDist = dist > MaxDist ? dist - MaxDist : 0;
            
            var bgPos = (Vector2)bgTransform.localPosition;
            foreTransform.localPosition = bgPos + direction;
            
            bgPos += direction.normalized * bgMoveDist;
            bgTransform.localPosition = bgPos;
        }
        else
        {
            var moveDist = dist > MaxDist ? MaxDist : dist;
            foreTransform.localPosition = (Vector2)bgTransform.localPosition + direction.normalized * moveDist;
        }
            
        if (dist > StartMoveDist)
        {
            Mode = EMoveJoyMode.Walk;
            Direction = direction;
        }
    }

    protected override void EndTouch()
    {
        base.EndTouch();
        _bPress = false;
        FirstPressed = false;
        Bg.transform.localPosition = _initPos;
        Fore.transform.localPosition = _initPos;
        
        Mode = EMoveJoyMode.None;
        Direction = Vector2.zero;
    }

    protected override bool CanTouch(int fid, Vector2 touchPos)
    {
        _raycastResults.Clear();
        _eventDataCurrentPosition.pressPosition = touchPos;
        _eventDataCurrentPosition.position = touchPos;

        _graphicRaycaster.Raycast(_eventDataCurrentPosition, _raycastResults);
        
        var bTouchArea = false;
        for (var i = 0; i < _raycastResults.Count; i++)
        {
            if (_raycastResults[i].gameObject == TouchArea)
            {
                bTouchArea = true;
                break;
            }
        }
        
        return bTouchArea;
    }
}