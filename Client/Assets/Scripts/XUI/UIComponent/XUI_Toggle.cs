using System;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.Events;
using UnityEngine.EventSystems;
using UnityEngine.UI;


public class XUI_Toggle : Toggle
{
    public delegate void VoidDelegate(GameObject go);

    private UnityEvent _onClickEvent;
    private RectTransform _rectTransform;

    public Action OnClick;
    public VoidDelegate OnEnter;
    public VoidDelegate OnExit;
    public VoidDelegate OnDown;
    public VoidDelegate OnUp;
    public bool IsDebug;
    public bool TextColorChange;

    public RectTransform RectTransform
    {
        get
        {
            if (_rectTransform == null)
            {
                _rectTransform = gameObject.GetComponent<RectTransform>();
            }

            return _rectTransform;
        }
    }

    protected override void Awake()
    {
        base.Awake();
        _onClickEvent = new UnityEvent();

        if (IsDebug)
        {
            if (!Dbg.IsDebugBuild)
            {
                SetActiveSafe(false);
            }
        }

        onValueChanged.AddListener(OnToggleValueChanged);
    }

    private CanvasGroup _canvasGroup;

    public CanvasGroup CanvasGroup
    {
        get
        {
            if (_canvasGroup == null)
            {
                _canvasGroup = XUI_Utility.CreateCanvasGroup(gameObject);
            }

            return _canvasGroup;
        }
    }

    public void SetActiveSafe(bool b)
    {
        if (b && IsDebug && !Dbg.IsDebugBuild)
        {
            return;
        }

        CanvasGroup.SetActiveByCanvasGroup(b);
    }


    public override void OnPointerClick(PointerEventData eventData)
    {
        base.OnPointerClick(eventData);
        OnClick?.Invoke();
        _onClickEvent?.Invoke();
    }

    public bool SetOn()
    {
        if (group != null)
        {
            group.SetAllTogglesOff();
            isOn = true;
            return true;
        }

        return false;
    }


    private void OnToggleValueChanged(bool bIsOn)
    {
    }

    public override void OnPointerEnter(PointerEventData eventData)
    {
        base.OnPointerEnter(eventData);
        OnEnter?.Invoke(gameObject);
    }

    public override void OnPointerExit(PointerEventData eventData)
    {
        base.OnPointerExit(eventData);
        OnExit?.Invoke(gameObject);
    }

    public override void OnPointerDown(PointerEventData eventData)
    {
        base.OnPointerDown(eventData);
        OnDown?.Invoke(gameObject);
    }

    public override void OnPointerUp(PointerEventData eventData)
    {
        base.OnPointerUp(eventData);
        OnUp?.Invoke(gameObject);
    }

    protected override void OnDestroy()
    {
        onValueChanged.RemoveListener(OnToggleValueChanged);
        base.OnDestroy();
    }

    public bool CanClick()
    {
        var pos = XUI_Manager.UICamera.WorldToScreenPoint(transform.position);
        var results = XUI_Manager.GetRayCastResult(new Vector2(pos.x, pos.y));
        if (results.Count > 0 && (results[0].gameObject == gameObject || results[0].gameObject.transform.IsChildOf(transform)))
        {
            return true;
        }

        return false;
    }

    public bool IsInScreen()
    {
        var pos = XUI_Manager.UICamera.WorldToScreenPoint(transform.position);
        if (pos.x < Screen.width && pos.x > 0 && pos.y > 0 && pos.y < Screen.height)
        {
            return true;
        }

        return false;
    }

    public UnityEvent GetOnClick()
    {
        return _onClickEvent;
    }

    public GameObject GetGameObject()
    {
        return gameObject;
    }
}