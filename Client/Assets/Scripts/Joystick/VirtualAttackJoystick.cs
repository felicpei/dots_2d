
using System.Collections.Generic;
using DG.Tweening;
using UnityEngine;
using UnityEngine.EventSystems;
using UnityEngine.UI;

public enum EAttackJoyMode
{
    None,
    Semi,
    Auto
}

public class VirtualAttackJoystick : VirtualBaseJoystick
{
     
    public static EAttackJoyMode Mode { private set; get; } = EAttackJoyMode.None;
    public static Vector2 Direction { private set; get; }
    
    
    private const float SemiDist = 35f;
    private const float MaxDist = 75f;
    
    public Image Bg;
    public Image Fore;
    public GameObject TouchArea;
    public Canvas Canvas;

    private Vector3 _readyPt;
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
    }

    protected override void StartTouch()
    {
        base.StartTouch();
        _bPress = true;
    }
    
    
    private void FirstTouch()
    {
        FirstPressed = true;
        Vector3 touchPt = GetTouchPoint();

        _readyPt = touchPt;
        
        RectTransformUtility.ScreenPointToLocalPointInRectangle(transform as RectTransform, touchPt, Canvas.worldCamera, out var localPt);
        Bg.transform.localPosition = localPt;
        Fore.transform.localPosition = localPt;
    }

    protected override void InTouch()
    {
        base.InTouch();

        if (_bPress)
        {
            _bPress = false;
            FirstTouch();
        }

        Vector3 touchPt = GetTouchPoint();
        var direction = (touchPt - _readyPt).normalized;
        var dist = Vector3.Distance(_readyPt, touchPt);
        if (dist > MaxDist)
        {
            dist = MaxDist;
        }

        //超出范围手动瞄准
        if (dist > SemiDist)
        {
            Mode = EAttackJoyMode.Semi;
            Direction = direction;
        }
        //范围内自动攻击
        else
        {
            Mode = EAttackJoyMode.Auto;
            Direction = direction;
        }

        Fore.transform.localPosition = Bg.transform.localPosition + direction.normalized * dist;
    }


    protected override void EndTouch()
    {
        base.EndTouch();
        _bPress = false;
        FirstPressed = false;

        Bg.transform.localPosition = Vector3.zero;
        Fore.transform.localPosition = Vector3.zero;
        
        //停止射击
        Mode = EAttackJoyMode.None;
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
