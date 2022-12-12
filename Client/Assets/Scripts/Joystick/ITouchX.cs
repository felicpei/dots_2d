using UnityEngine;

public interface ITouchX
{
    void TouchBegan(int fingerId, Vector3 pos);
    void TouchEnd(int fingerId, Vector3 pos);
    void ForceEnd();
}
