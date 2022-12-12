using System;
using System.Collections.Generic;
using UnityEngine;

public abstract class VirtualBaseJoystick : MonoBehaviour, ITouchX
{
    protected bool InFingerTouch;
    protected int FingerId = -1;
    protected bool FirstPressed;
    private Vector2 _curTouch;


    protected virtual void Awake()
    {
        TouchMgr.RegController(this);
    }

    public void ReBind()
    {
        TouchMgr.RegController(this);
    }

    protected virtual void LateUpdate()
    {
        var bTouchEntity = CheckTouchEntity();

        if (HasFinger())
        {
            if (!bTouchEntity || FirstPressed)
            {
                InTouch();
            }
        }
    }

    private bool CheckTouchEntity()
    {
        return false;
    }

    public virtual void TouchBegan(int fid, Vector3 pos)
    {
        if ((!HasFinger() || fid != FingerId) && CanTouch(fid, pos))
        {
            TouchEnd(FingerId, pos);
            InFingerTouch = true;
            FingerId = fid;
            StartTouch();
        }
    }

    public void ForceEnd()
    {
        InFingerTouch = false;
        FingerId = -1;
        EndTouch();
    }

    public virtual void TouchEnd(int _fingerId, Vector3 pos)
    {
        if (HasFinger())
        {
            if (_fingerId == FingerId)
            {
                InFingerTouch = false;
                FingerId = -1;
                EndTouch();
            }
        }
    }


    protected virtual void StartTouch()
    {
        UpdateTouchPos();
    }

    protected virtual void InTouch()
    {
        UpdateTouchPos();
    }

    protected virtual void EndTouch()
    {
    }

    private void UpdateTouchPos()
    {
        var ret = TouchMgr.GetTouchPos(FingerId);
        if (ret != null)
        {
            _curTouch = (Vector3)ret;
        }
    }

    protected Vector2 GetTouchPoint()
    {
        return _curTouch;
    }

    protected virtual bool CanTouch(int fid, Vector2 touchPos)
    {
        return true;
    }

    protected bool HasFinger()
    {
        return FingerId >= 0;
    }

    public bool SameFinger(int fid)
    {
        return FingerId == fid;
    }

    protected virtual void OnDestroy()
    {
        TouchMgr.RemoveController(this);
    }
}