using System;
using System.Collections;
using System.Collections.Generic;
using FairyGUI;
using UnityEngine;

public static class FUIHelper
{
    private static readonly List<GObject> UIList = new();
    
    public static void ShowFUI<T>(string packageName, string componentName) where T: MonoBehaviour
    {
        //add package
        AddPackage(packageName, () =>
        {
            var view = UIPackage.CreateObject(packageName, componentName).asCom;
            view.container.gameObject.AddComponent<T>();
            view.container.gameObject.AddComponent<UIContentScaler>();
            view.SetSize(GRoot.inst.size.x, GRoot.inst.size.y);
            
            var gObject = GRoot.inst.AddChild(view);
            UIList.Add(gObject);
        });
    }

    private static void AddPackage(string packageName, Action onFinished)
    {
#if UNITY_EDITOR 
        var packagePath = XPath.FUI_ROOT + packageName;
        UIPackage.AddPackage(packagePath);
        
        onFinished.Invoke();
#else
        GameWorld.StartCoroutine(DoAddPackage(packageName, onFinished));
#endif
    }

    private static IEnumerator DoAddPackage(string packageName, Action onFinished)
    {
        var atlasBundleName = packageName.ToLower() + XPath.FUI_ATLAS_SUFFIX;
        var uiBundleName = packageName.ToLower() + XPath.FUI_UI_SUFFIX;

        if (!XAssetBundle.TryGetCacheBundle(atlasBundleName, out var atlasBundle))
        {
            yield return XAssetBundle.LoadAssetBundle(atlasBundleName, (_, _) => { });
            XAssetBundle.TryGetCacheBundle(atlasBundleName, out atlasBundle);
        }

        if (!XAssetBundle.TryGetCacheBundle(uiBundleName, out var uiBundle))
        {
            yield return XAssetBundle.LoadAssetBundle(uiBundleName, (_, _) => { });
            XAssetBundle.TryGetCacheBundle(uiBundleName, out uiBundle);
        }

        if (atlasBundle == null)
        {
            Dbg.LogError("加载FUI Atlas Bundle Error, bundleName:" + atlasBundleName);
            yield break;
        }

        if (uiBundle == null)
        {
            Dbg.LogError("加载FUI UI Bundle Error, bundleName:" + uiBundleName);
            yield break;
        }
        UIPackage.AddPackage(uiBundle, atlasBundle);
        onFinished?.Invoke();
    }

    public static void ApplyContentScaleFactor()
    {
        for (int i = 0; i < UIList.Count; i++)
        {
            UIList[i].SetSize(GRoot.inst.size.x, GRoot.inst.size.y);
        }
    }

    public static void CloseFUI(GObject uiObj)
    {
        uiObj.Dispose();
        for (int i = UIList.Count - 1; i >= 0; i--)
        {
            if (UIList[i] == uiObj)
            {
                UIList.RemoveAt(i);
                return;
            }
        }
    }

    public static void ClearAll()
    {
        for (int i = 0; i < UIList.Count; i++)
        {
            UIList[i].Dispose();
        }
        UIList.Clear();
        UIPackage.RemoveAllPackages();
    }
}