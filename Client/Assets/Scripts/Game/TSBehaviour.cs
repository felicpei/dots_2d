using UnityEngine;
using Puerts;
using System;
using System.Collections;

public delegate void ModuleInit(TSBehaviour monoBehaviour);

//只是演示纯用js实现MonoBehaviour逻辑的可能，
//但从性能角度这并不是最佳实践，会导致过多的跨语言调用
public class TSBehaviour : MonoBehaviour
{
    public string ModuleName; //可配置加载的js模块

    public Action JsUpdate;
    public Action JsOnDestroy;
    private static JsEnv jsEnv;

    private void Start()
    {
        if (jsEnv == null)
        {
            jsEnv = new JsEnv(new DefaultLoader(XPath.TSScriptPath), 9229);
        }
        
        //var varname = "m_" + Time.frameCount;
        var init = jsEnv.ExecuteModule<ModuleInit>("gamestart.mjs", "init");
        init?.Invoke(this);
    }

    private void Update()
    {
        jsEnv.Tick();
        JsUpdate?.Invoke();
    }

    private void OnDestroy()
    {
        JsOnDestroy?.Invoke();
        JsUpdate = null;
        JsOnDestroy = null;
    }

    public IEnumerator Coroutine()
    {
        yield return new WaitForSeconds(1);
        Debug.Log("coroutine done");
    }
}