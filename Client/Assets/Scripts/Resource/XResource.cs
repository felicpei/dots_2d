using UnityEngine;
using System.Collections;
using Object = UnityEngine.Object;
using System;
using System.Collections.Generic;
using System.IO;
using ICSharpCode.SharpZipLib.Zip;
using UnityEngine.Networking;
using UnityEngine.SceneManagement;

public class XResource : MonoBehaviour
{
    public const int EDITOR_DOWNLOAD_SPEED = 10000 * 1000; //10k/fps

    private static XResource _inst;
    public static void Init()
    {
        if (_inst != null)
        {
            return;
        }

        var gameObj = new GameObject("XResource");
        DontDestroyOnLoad(gameObj);
        _inst = gameObj.AddComponent<XResource>();
    }
    
    public static void Load(string resource, Action<Object> notify)
    {
        if (string.IsNullOrEmpty(resource))
        {
            Debug.LogError("resource path is null");
            return;
        }

        LoadObject(resource, obj => { notify?.Invoke(obj); });
    }

    public static void LoadGameObject(string resource, Action<GameObject> callback)
    {
        Load(resource, obj =>
        {
            var gameObj = obj.InstantiateGo();
            callback.Invoke(gameObj);
        });
    }

    public static void LoadObject(string resource, Action<Object> callBack)
    {
        _inst.StartCoroutine(XAssetBundle.LoadAssetBundleObject(resource, callBack));
    }
    
    public static IEnumerator LoadObjectAsync(string resource, Action<Object> callBack)
    {
        yield return XAssetBundle.LoadAssetBundleObject(resource, callBack);
    }

    public static void LoadScene(string levelName, LoadSceneMode mode, Action<string> onFinished = null, Action<string, float> onProgress = null)
    {
        _inst.StartCoroutine(LoadSceneAsync(levelName, mode, onFinished, onProgress));
    }

    public static void UnloadScene(string levelName)
    {
        SceneManager.UnloadSceneAsync(levelName);
    }
    
    
    public static IEnumerator LoadSceneAsync(string levelName, LoadSceneMode mode, Action<string> onFinished = null, Action<string, float> onProgress = null)
    {
        Debug.Log("LoadScene:" + levelName);

        var assetBundleName = XPath.GetAbName(levelName);

        //Load AssetBundle
        if (XPlatform.Platform != XPlatform.EPlatform.UnityEditor)
        {
            yield return XAssetBundle.LoadAssetBundle(assetBundleName, onProgress);
        }

        var sceneName = XPath.GetAssetNamePath(levelName);
        //LoadScene
        var request = SceneManager.LoadSceneAsync(sceneName, mode);
        while (!request.isDone)
        {
            yield return 0;
        }
        
        onFinished?.Invoke(sceneName);
        Debug.Log("LoadScene Finished:" + levelName);
    }

    private static readonly Dictionary<string, byte[]> ZipTextCache = new();

    public static IEnumerator CacheTableZip(Action<string, float> onProgress)
    {
        if (XPlatform.Platform == XPlatform.EPlatform.UnityEditor)
        {
            yield break;
        }

        yield return RequestZipFile(XPath.TextZipName, zip =>
        {
            //一次性解压并把所有内容放在内存
            for (var i = 0; i < zip.Count; i++)
            {
                var name = zip[i].Name;
                var zipEntry = zip[i];
                ZipTextCache[name] = ZipEntityToMemoryStream(zip, zipEntry);
            }
        }, progress => { onProgress?.Invoke("配置文件", progress); });
    }

    //读取配置表
    public static string LoadTableText(string path)
    {
        //editor模式下, 直接用file读
        if (XPlatform.Platform == XPlatform.EPlatform.UnityEditor)
        {
            var fullPath = XPath.ContentPath + path;
            return FileHelper.GetTableFromFile(fullPath);
        }

        var fileName = path.GetUniqueNameByFullpath();
        if (ZipTextCache.TryGetValue(fileName, out var bytes))
        {
            return FileHelper.DecodeTable(bytes);
        }

        Debug.LogError("读取配置表缓存失败:" + path + " filename:" + fileName);
        return "";
    }
    
    public static Object LoadEditorAsset(string resourcePath)
    {
        //Editor下直接去读AssetDatabase
        if (XPlatform.InEditor)
        {
#if UNITY_EDITOR
            if (!string.IsNullOrEmpty(resourcePath))
            {
                var fileName = XPath.CONTENT_URL + resourcePath;
                var assetObject = UnityEditor.AssetDatabase.LoadAssetAtPath(fileName, typeof(Object));
                if (!assetObject)
                {
                    Debug.LogError($"load : {resourcePath} failed");
                }

                return assetObject;
            }
#endif
        }

        Debug.LogError("LoadEditorAsset Error, 当前不是Editor:" + XPlatform.Platform);
        return null;
    }


    //-------------------- 外部资源加载Start --------------------//

    //加载二进制文件
    public static void LoadBytes(string fullPath, Action<byte[]> callBack, Action onError, Action<float> onProgress = null)
    {
        _inst.StartCoroutine(RequestBytes(fullPath, callBack, onError, onProgress));
    }

    private static IEnumerator RequestBytes(string fullPath, Action<byte[]> onSuccess, Action onError, Action<float> onProgress)
    {
        var request = UnityWebRequest.Get(fullPath);
        request.downloadHandler = new DownloadHandlerBuffer();
        request.SendWebRequest();

        while (!request.isDone)
        {
            onProgress?.Invoke(request.downloadProgress);
            yield return 0;
        }

        //Editor AB模式下做个假的加载过程，方便测试
        if (XPlatform.Platform == XPlatform.EPlatform.UnityEditor_AB)
        {
            yield return SimulateDownload(request, onProgress);
        }

        if (!string.IsNullOrEmpty(request.error))
        {
            Debug.LogError("RequestFile:" + request.error + " path:" + fullPath);
            onError.Invoke();
        }
        else
        {
            var data = request.downloadHandler.data;
            onSuccess.Invoke(data);
        }
        request.Dispose();
    }

    //加载文本文件
    public static void LoadText(string fullPath, Action<string> callBack)
    {
        _inst.StartCoroutine(RequestText(fullPath, callBack));
    }

    private static IEnumerator RequestText(string fullPath, Action<string> callBack)
    {
        var request = UnityWebRequest.Get(fullPath);
        request.downloadHandler = new DownloadHandlerBuffer();
        yield return request.SendWebRequest();

        if (!string.IsNullOrEmpty(request.error))
        {
            Debug.LogError("Request Text Error:" + request.error + " url:" + fullPath);
        }
        else
        {
            var buffer = request.downloadHandler.data;
            if (buffer == null)
            {
                Debug.LogError("GetResourceText Error, text = null" + fullPath);
                callBack.Invoke("");
            }
            else
            {
                var text = FileHelper.DecodeUTF8(buffer);
                callBack.Invoke(text);
            }
        }
    }


    //下载zip文件
    private static IEnumerator RequestZipFile(string zipName, Action<ZipFile> callback, Action<float> onProgress = null)
    {
        var path = XPath.Combine(XPath.AssetBundlePath, zipName);
        yield return RequestBytes(path, bytes =>
        {
            using (var ms = new MemoryStream(bytes))
            {
                using (var reader = new BinaryReader(ms))
                {
                    reader.ReadBytes(bytes.Length);
                    callback(new ZipFile(ms));
                }
            }
        }, () =>
        {
            callback.Invoke(null);
        }, onProgress);
    }

    //ZIP中读取文本
    public static string GetTextFromZip(ZipFile zip, string resourcePath)
    {
        var buffer = GetFileInZip(zip, resourcePath);
        if (buffer != null)
        {
            return FileHelper.DecodeTable(buffer);
        }

        Debug.LogError("Get Text From Zip Error, path:" + resourcePath);
        return "";
    }

    //从ZIP中读取二进制
    private static byte[] GetFileInZip(ZipFile zip, string resourcePath)
    {
        using (zip)
        {
            if (zip == null)
            {
                Debug.LogError("GetFileInZip error zip is null");
                return null;
            }

            Debug.Log("get file in zip:" + resourcePath);
            var fileName = resourcePath.GetUniqueNameByFullpath();
            var zipEntity = zip.GetEntry(fileName);
            if (zipEntity == null)
            {
                Debug.LogError("GetFileInZip Error zipEntity is null, fileName:" + fileName);
                return null;
            }

            return ZipEntityToMemoryStream(zip, zipEntity);
        }
    }

    //把ZipEntity转为二进制
    private static byte[] ZipEntityToMemoryStream(ZipFile zip, ZipEntry zipEntry)
    {
        var stm = zip.GetInputStream(zipEntry);
        using (stm)
        {
            var mem = new MemoryStream();
            const int buffSize = 4096;
            var buf = new byte[buffSize];

            while (true)
            {
                var reads = stm.Read(buf, 0, buffSize);
                if (reads > 0)
                {
                    mem.Write(buf, 0, reads);
                }

                if (reads < buffSize)
                {
                    break;
                }
            }

            return mem.ToArray();
        }
    }
    //-------------------- 外部资源加载End --------------------//

    //模拟下载过程
    public static IEnumerator SimulateDownload(UnityWebRequest request, Action<float> onProgress)
    {
        ulong curBytes = 0;
        while (curBytes < request.downloadedBytes)
        {
            curBytes += EDITOR_DOWNLOAD_SPEED; //模拟网速
            onProgress?.Invoke(curBytes / (float)request.downloadedBytes);
            yield return new WaitForFixedUpdate();
        }
    }
    
    
    //-------------------- GC START --------------------//
    public static IEnumerator DoGc(float sec = 0)
    {
#if !UNITY_WEBGL
        yield return new WaitForSeconds(sec);
        yield return Resources.UnloadUnusedAssets();
        GC.Collect();
#else
        yield break;
#endif
    }

    //-------------------- GC END --------------------//

}