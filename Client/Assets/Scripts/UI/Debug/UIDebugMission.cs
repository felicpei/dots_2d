using System;
using FairyGUI;
using UnityEngine;

public class UIDebugMission : MonoBehaviour
{
    private GComponent _mainView;
        
    private void Start()
    {
        _mainView = GetComponent<UIPanel>().ui;
        var exitBtn = _mainView.GetChild("btnExit");
        
        exitBtn.onClick.Add(() =>
        {
            SceneLoader.LoadMainCity(() => { });
        });
    }
}