using FairyGUI;
using Puerts;
using System;
using UnityEngine;

public static class JsManager 
{
    private static JsEnv _jsEnv;
    public static Action JsOnApplicationQuit;
    public static Action JsOnDispose;
    
    public static void Update()
    {
        _jsEnv?.Tick();
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