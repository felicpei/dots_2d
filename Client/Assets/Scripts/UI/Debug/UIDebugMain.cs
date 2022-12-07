using System;
using FairyGUI;
using UnityEngine;

public class UIDebugMain : MonoBehaviour
{
    private GComponent _mainView;
 
    private void Start()
    {
        _mainView = GetComponent<UIPanel>().ui;
            
        _mainView.GetChild("btnFight").onClick.Add(OnClickFight);
        _mainView.GetChild("btnResolution1").onClick.Add(()=>
        {
            XGameSetting.XResolution = XGameSetting.EnumResolution.Low;
        });
        _mainView.GetChild("btnResolution2").onClick.Add(()=>
        {
            XGameSetting.XResolution = XGameSetting.EnumResolution.Mid;
        });
        _mainView.GetChild("btnResolution3").onClick.Add(()=>
        {
            XGameSetting.XResolution = XGameSetting.EnumResolution.High;
        });
    }

    private void OnClickFight(EventContext context)
    {
        SceneLoader.Load((int)ESceneId.Test);
    }
}