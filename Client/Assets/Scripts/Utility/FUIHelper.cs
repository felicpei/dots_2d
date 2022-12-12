using System;
using System.Collections;
using System.Collections.Generic;
using System.Threading.Tasks;
using FairyGUI;
using UnityEngine;

public static class FUIHelper
{
    public static void AddPackage(string packageName, Action onFinished)
    {
        if (XPlatform.Platform == XPlatform.EPlatform.UnityEditor)
        {
            var packagePath = XPath.FUI_ROOT + packageName;
            UIPackage.AddPackage(packagePath);
            onFinished.Invoke();
        }
        else
        {
            GlobalCoroutine.StartCoroutine(DoAddPackage(packageName, onFinished));
        }
    }

    public static void ReleasePackage(string packageName)
    {
        UIPackage.RemovePackage(packageName);
    }

    private static IEnumerator DoAddPackage(string packageName, Action onFinished)
    {
        var atlasBundleName = packageName.ToLower() + XPath.FUI_ATLAS_SUFFIX;
        var uiBundleName = packageName.ToLower() + XPath.FUI_UI_SUFFIX;

        var atlasBundle = XAssetBundle.GetLoadedAssetBundle(atlasBundleName);
        if (atlasBundle == null)
        {
            yield return XAssetBundle.LoadAssetBundle(atlasBundleName, (_, _) => { });
            atlasBundle = XAssetBundle.GetLoadedAssetBundle(atlasBundleName);
        }
     
        var uiBundle = XAssetBundle.GetLoadedAssetBundle(uiBundleName);
        if (uiBundle == null)
        {
            yield return XAssetBundle.LoadAssetBundle(uiBundleName, (_, _) => { });
            uiBundle = XAssetBundle.GetLoadedAssetBundle(uiBundleName);
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
        UIPackage.AddPackage(uiBundle.AssetBundle, atlasBundle.AssetBundle);
        onFinished?.Invoke();
    }
}