using FairyGUI;
using Puerts;
using System;
using UnityEngine;

public static class JsManager 
{
    private static JsEnv _jsEnv;
    public static Action JsOnApplicationQuit;
    public static Action JsOnDispose;
    public static Action<bool> JsOnApplicationFocus;
    public static Action<bool> JsOnApplicationPause;
    public static Action<string, object> JSDoEvent;
    
    public static void Update()
    {
        _jsEnv?.Tick();
    }

    public static void LateUpdate()
    {
        
    }

    private static void InitJsEnv()
    {
        if (_jsEnv == null)
        {
            _jsEnv = new JsEnv(new DefaultLoader(), 8080);
            
            //如果是调试
            //_jsEnv.WaitDebugger();
        }
        
        //声明Action： 值类型才需要这样添加
        _jsEnv.UsingAction<float>();
        _jsEnv.UsingAction<bool>();
        _jsEnv.UsingAction<float, float>();
        _jsEnv.UsingAction<string, byte[]>();
        _jsEnv.UsingAction<int, GObject>();
    }

    public static void StartGame()
    {
        InitJsEnv();

        if (_jsEnv != null)
        {
            XResource.LoadText(XPath.TSScriptPath +"output/bundle.js", str =>
            {
                try
                {
                    _jsEnv.Eval(str);
                }
                catch (Exception e)
                {
                    Debug.LogError(e.ToString());
                } 
            });
        }
    }

    public static void Restart()
    {
        Dispose();
        InitJsEnv();
        StartGame();
    }

    public static void DispatchJSEvent(string eventName, object eventParam = null)
    {
        if (_jsEnv != null)
        {
            JSDoEvent.Invoke(eventName, eventParam);
        }
    }
    
    public static void OnApplicationFocus(bool statusParam)
    {
        if (_jsEnv != null)
        {
            JsOnApplicationFocus.Invoke(statusParam);
        }
    }
    
    public static void OnApplicationPause(bool statusParam)
    {
        if (_jsEnv != null)
        {
            JsOnApplicationPause.Invoke(statusParam);
        }
    }
    
    public static void OnApplicationQuit()
    {
        if (_jsEnv != null)
        {
            JsOnApplicationQuit?.Invoke();
        }
    }

    public static void Dispose()
    {
        JsOnDispose?.Invoke();
        if (_jsEnv != null)
        {
            try
            {
                _jsEnv.Dispose();
                _jsEnv = null;
            }
            catch (Exception ex)
            {
                var msg = string.Format("js exception : {0}\n {1}", ex.Message, ex.StackTrace);
                Debug.LogError(msg);
            }
        }
    }
}