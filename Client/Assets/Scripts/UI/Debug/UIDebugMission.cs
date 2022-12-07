using System;
using FairyGUI;
using UnityEngine;

public class UIDebugMission : MonoBehaviour
{
    private GComponent _mainView;
        
    private void Start()
    {
        var uiInfo = GetComponent<DisplayObjectInfo>();
        _mainView = GRoot.inst.DisplayObjectToGObject(uiInfo.displayObject).asCom;
        
        var exitBtn = _mainView.GetChild("btnExit");
        
        exitBtn.onClick.Add(() =>
        {
            SceneLoader.LoadMainCity(() => { });
        });
    }
}