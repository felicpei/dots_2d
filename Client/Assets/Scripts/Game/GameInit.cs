using System;
using System.Collections;
using DG.Tweening;
using FairyGUI;
using Script;
using UnityEngine;
using Random = UnityEngine.Random;

public class GameInit : MonoBehaviour
{
    public Camera MainCamera;
    
    private void Awake()
    {
        //ecs editor静态变量不清空，特殊处理
#if UNITY_EDITOR
        FirstStart.Inited = false;        
#endif
        DontDestroyOnLoad(gameObject);
        StartCoroutine(Init());
    }

    private IEnumerator Init()
    {
        gameObject.AddComponentIfNotExists<DebugGUI>();
        yield return FirstStart.Init(true);
        
        //初始化全局协程
        GameWorld.StartCoroutine = StartCoroutine;
        
        //camera
        CameraHelper.Init(MainCamera);
        
        //一些必要的初始化过程
        XGameSetting.Init();
        Sound.Init();
        Random.InitState(DateTime.Now.Second);
        
        //StartGame
        JsManager.StartGame();    
    }

    private void Update()
    {
        JsManager.Update();
    }

    private void LateUpdate()
    {
        JsManager.LateUpdate();
    }
    
    private void OnDestroy()
    {
        JsManager.Dispose();
    }

    private void OnApplicationPause(bool pauseStatus)
    {
        JsManager.OnApplicationPause(pauseStatus);
    }

    private void OnApplicationQuit()
    {
        JsManager.OnApplicationQuit();
    }

    private void OnApplicationFocus(bool focusStatus)
    {
        JsManager.OnApplicationFocus(focusStatus);
    }
}