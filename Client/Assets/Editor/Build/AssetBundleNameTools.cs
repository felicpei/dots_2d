using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using NUnit.Framework;
using UnityEditor;
using UnityEngine;

public class AssetBundleNameTools
{
    private static readonly HashSet<string> ResourceSet = new();

    [MenuItem("XEngine/Reset All AssetBundleName")]
    public static void ResetAllAssetBundleName()
    {
        XPath.InitAssetBundlePath();
        ClearAssetbundleName();
        AssetDatabase.Refresh();
        RefreshAssetBundleName();
        AssetDatabase.Refresh();
    }

    public static void ClearAssetbundleName()
    {
        var abNameArr = AssetDatabase.GetAllAssetBundleNames();
        for (var i = 0; i < abNameArr.Length; i++)
        {
            EditorUtility.DisplayProgressBar("Remove All AssetBundleName", abNameArr[i], (float)i / abNameArr.Length);
            AssetDatabase.RemoveAssetBundleName(abNameArr[i], true);
        }

        AssetDatabase.SaveAssets();
        EditorUtility.ClearProgressBar();
    }

    public static bool RefreshAssetBundleName()
    {
        //set abname
        var resourceList = ResourceBuildTool.GetBuildResources(XPath.FullPathToProjectPath(XPath.ContentPath));
        CollectionUtility.Insert(ResourceSet, resourceList);

        if (!SetAssetsBundleName(ResourceSet))
        {
            Debug.LogError("Error SetAssetsBundleName失敗");
            return false;
        }

        EditorUtility.ClearProgressBar();
        return true;
    }

    private static bool SetAssetsBundleName(HashSet<string> assetPaths)
    {
        var progress = 0;

        //step 1: 遍历所有依赖, 缓存资源被依赖次数
        var allResources = new List<string>();
        foreach (var resource in assetPaths)
        {
            var dependencies = AssetDatabase.GetDependencies(resource, true);
            foreach (var dependName in dependencies)
            {
                if (!allResources.Contains(dependName))
                {
                    allResources.Add(dependName);
                }
            }

            ++progress;
            ShowProgressBar("Get DependFileList", resource, progress / (float)assetPaths.Count);
        }


        progress = 0;

        for (int i = 0; i < allResources.Count; i++)
        {
            var resource = allResources[i];
            var type = XResourcesUtility.GetResourceTypeByPath(resource);
            var importer = AssetImporter.GetAtPath(resource);
            if (importer == null)
            {
                Debug.LogError("Error Resource importer is Null. --> " + resource);
                continue;
            }

            //FairyGUI Bundle 相关处理
            if (resource.StartsWith(XPath.FUI_ROOT))
            {
                //UI: 图集和bytes分别打包，packageName_atlas && packageName_ui
                var path = resource.Replace(XPath.FUI_ROOT, "");
                var fileName = path.Split(".")[0];
                var packageName = fileName.Split("_")[0];
                var suffix = type == ResourceType.texture ? XPath.FUI_ATLAS_SUFFIX : XPath.FUI_UI_SUFFIX;
                importer.assetBundleName = packageName.ToLower() + suffix;
                continue;
            }

            switch (type)
            {
                case ResourceType.text:
                case ResourceType.script:
                case ResourceType.folder:
                {
                    break;
                }
                default:
                {
                    importer.assetBundleName = XPath.GetAbName(resource.Replace(XPath.CONTENT_URL, ""));
                    break;
                }
            }

            ++progress;
            ShowProgressBar("Set Resource AssetBundleName", resource, progress / (float)allResources.Count);
        }

        return true;
    }


    private static void ShowProgressBar(string str1, string strInfo, float progress)
    {
        var bCancel = EditorUtility.DisplayCancelableProgressBar(str1, strInfo, progress);
        if (bCancel)
        {
            EditorUtility.ClearProgressBar();
            throw new Exception("User break!");
        }
    }
}