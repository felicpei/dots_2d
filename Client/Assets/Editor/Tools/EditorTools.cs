
using UnityEngine;
using UnityEditor;
using System.IO;
using System.Collections.Generic;
using System.Runtime.InteropServices;
using UnityEditor.SceneManagement;

public class EditorTools
{
    [MenuItem("Assets/Copy Full Path ", false, 15)]
    public static void CopyPath()
    {
        var path = AssetDatabase.GetAssetPath(Selection.activeObject);
        EditorGUIUtility.systemCopyBuffer = path;
    }

    [MenuItem("Assets/Copy Resource Path", false, 16)]
    public static void CopyResourcePath()
    {
        var path = AssetDatabase.GetAssetPath(Selection.activeObject);
        var resourcexPath = XPath.RESOURCEX_URL;
        if (path.StartsWith(resourcexPath))
        {
            path = path.Remove(0, resourcexPath.Length);
        }
        EditorGUIUtility.systemCopyBuffer = path;
    }

    [MenuItem("Assets/Copy All Resource Path", false, 17)]
    public static void CopyAllResourcePath()
    {
        var path = AssetDatabase.GetAssetPath(Selection.activeObject);
        var fullpath = XPath.ProjectPathToFullPath(path);
        if (Directory.Exists(fullpath))
        {
            var paths = Directory.GetFiles(fullpath, "*", SearchOption.TopDirectoryOnly);
            var allpath = string.Empty;
            for (var i = 0; i < paths.Length; ++i)
            {
                if (Path.GetExtension(paths[i]) == ".meta")
                {
                    continue;
                }
                allpath += XPath.RESOURCEX_URL + paths[i];
                if (i < paths.Length - 1)
                {
                    allpath += "\r\n";
                }
            }
            EditorGUIUtility.systemCopyBuffer = allpath;
        }
    }

    private static void CombineCollect(GameObject _object, Dictionary<Material, List<GameObject>> dict)
    {
        var r = _object.GetComponent<MeshRenderer>();
        if (r != null)
        {
            if (dict.TryGetValue(r.sharedMaterial, out var _list))
            {
                _list.Add(_object);
            }
            else
            {
                _list = new List<GameObject>();
                _list.Add(_object);
                dict.Add(r.sharedMaterial, _list);
            }
        }

        foreach (Transform t in _object.transform)
        {
            CombineCollect(t.gameObject, dict);
        }
    }

	[MenuItem("Game-X/Utility/Import txt data")]
	public static void ImportData()
	{
		var pth = new OpenFileDlg();
		pth.structSize = Marshal.SizeOf(pth);
		pth.filter = "All files (*.zip)|*.zip";
		pth.file = new string(new char[256]);
		pth.maxFile = pth.file.Length;
		pth.fileTitle = new string(new char[64]);
		pth.maxFileTitle = pth.fileTitle.Length;
		pth.initialDir = Application.dataPath.Replace("/", "\\") + "\\Resources"; //默认路径
		pth.title = "打开项目";
		pth.defExt = "dat";
		pth.flags = 0x00080000 | 0x00001000 | 0x00000800 | 0x00000200 | 0x00000008;
		if (OpenFileDialog.GetOpenFileName(pth))
		{
			var filepath = pth.file; //选择的文件路径;  
			Debug.Log(filepath);
		}
	}


	[MenuItem("Game-X/Utility/Combine GameObject")]
    public static void Combine()
    {
        var _selected = Selection.activeGameObject;
        if (!_selected)
        {
            EditorUtility.DisplayDialog(
                "Error", "Please Select An Root GameObject", "OK");
            return;
        }
        var fileName =
            EditorUtility.SaveFilePanel("Combine Prefab", "Assets", _selected.name, "prefab");
        if (string.IsNullOrEmpty(fileName))
        {
            EditorUtility.DisplayDialog(
               "Error", "Invalidate Export File Path", "OK");
            return;
        }
        fileName = XPath.FullPathToProjectPath(fileName);

        var dict = new Dictionary<Material, List<GameObject>>();
        CombineCollect(_selected, dict);

        var id = 0;
        var root = new GameObject(_selected.name);
        var meshList = new List<Mesh>();

        foreach (var kv in dict)
        {
            var mtl = kv.Key;
            var _list = kv.Value;
            var name = $"group_{id++}";

            var mesh = new Mesh();
            mesh.name = name;

            var combine = new CombineInstance[_list.Count];
            for (var i = 0; i < _list.Count; ++i)
            {
                var _f = _list[i].GetComponent<MeshFilter>();
                combine[i].mesh = _f.sharedMesh;
                combine[i].transform = _f.transform.localToWorldMatrix;
            }
            mesh.CombineMeshes(combine);
            ;
            //    Unwrapping.GenerateSecondaryUVSet(mesh);

            var sub = new GameObject(name);
            var f = sub.AddComponent<MeshFilter>();
            f.sharedMesh = mesh;
            var r = sub.AddComponent<MeshRenderer>();
            r.sharedMaterial = mtl;
            sub.transform.parent = root.transform;
            meshList.Add(mesh);
        }

        PrefabUtility.SaveAsPrefabAsset(root, fileName);
        Object.DestroyImmediate(root);

        root = (GameObject)AssetDatabase.LoadMainAssetAtPath(fileName);
        foreach (var _mesh in meshList)
            AssetDatabase.AddObjectToAsset(_mesh, root);

        var filterList = new List<MeshFilter>();
        var meshDict = new Dictionary<string, Mesh>();

        var _assetList =
            AssetDatabase.LoadAllAssetsAtPath(fileName);
        foreach (var _asset in _assetList)
        {
            if (_asset is MeshFilter)
            {
                filterList.Add((MeshFilter)_asset);
            }

            if (_asset is Mesh)
            {
                meshDict.Add(_asset.name, (Mesh)_asset);
            }
        }

        foreach (var filter in filterList)
        {
            Mesh _mesh;
            if (meshDict.TryGetValue(filter.name, out _mesh))
            {
                filter.sharedMesh = _mesh;
            }
        }

        AssetDatabase.SaveAssets();
        AssetDatabase.ImportAsset(fileName);

        EditorUtility.DisplayDialog("Prompt", "Combine Finish", "OK");
        Selection.activeObject = AssetDatabase.LoadMainAssetAtPath(fileName);
    }


    [MenuItem("Assets/Navigate Library Asset", false, 39)]
    private static void NavigateLibraryAsset()
    {
        var _object = Selection.activeObject;
        if (_object != null)
        {
            var path = AssetDatabase.GetAssetPath(_object);
            var guid = AssetDatabase.AssetPathToGUID(path);
            var lp = XPath.ProjectPath + "/Library/metadata/" + guid.Substring(0, 2) + "/" + guid;
            if (File.Exists(lp))
            {
                EditorUtility.RevealInFinder(lp);
            }
        }
    }

    [MenuItem("GameObject/CopyScenePath", false, 13)]
    public static void CopyTransPath()
    {
        var trans = Selection.activeTransform;
        var path = Selection.activeTransform.gameObject.name;
        while (trans.parent != null && trans.parent.parent != null)
        {
            var parent = trans.parent;
            path = string.Concat(parent.gameObject.name, "/" , path );
            trans = parent;
        }
        EditorGUIUtility.systemCopyBuffer = string.Concat("\"" ,path, "\"");
    }

    private static T GetMissionCompoents<T>(Transform t) where T:MonoBehaviour
    {
        var args = t.GetComponentsInParent<T>(true);
        var ret = args.Length > 0 ? args[0] : null;
        return ret;
    }

    [MenuItem("GameObject/关卡工具/隐藏其他关卡", false, 14)]
    private static void HideOtherWave()
    {
        var _selected = Selection.activeTransform;

        var waveMgr = GetMissionCompoents<MissionWaveMgr>(_selected);
        var waveRoot = GetMissionCompoents<MissionWaveRoot>(_selected);
        if (waveMgr != null && waveRoot != null)
        {
            for (var i = 0; i < waveMgr.WaveList.Count; i++)
            {
                waveMgr.WaveList[i].gameObject.SetActive(false);
            }

            waveRoot.gameObject.SetActive(true);
            DoDirty(waveMgr.gameObject);
        }
    }

    [MenuItem("GameObject/关卡工具/显示全部关卡", false, 14)]
    private static void ShowAllWave()
    {
        var _selected = Selection.activeTransform;
        var waveMgr = GetMissionCompoents<MissionWaveMgr>(_selected);
        if (waveMgr != null)
        {
            for (var i = 0; i < waveMgr.WaveList.Count; i++)
            {
                waveMgr.WaveList[i].gameObject.SetActive(true);
            }

            DoDirty(waveMgr.gameObject);
        }
    }

    [MenuItem("GameObject/关卡工具/隐藏其他怪物点", false, 14)]
    private static void HideOtherMonsterGroup()
    {
        var _selected = Selection.activeTransform;
        var groupData = GetMissionCompoents<MonsterGroupData>(_selected);
        if (groupData != null)
        {
            var regionRoot = GetMissionCompoents<MissionMonsterRegionRoot>(groupData.transform);
            if (regionRoot != null)
            {
                for (var i = 0; i < regionRoot.GroupDatas.Count; i++)
                {
                    regionRoot.GroupDatas[i].gameObject.SetActive(false);
                }
                groupData.gameObject.SetActive(true);
                DoDirty(regionRoot.gameObject);
            }
            else
            {
                Debug.LogError("错误，节点或父节点必须包含 MissionMonsterRegionRoot脚本");
            }
                
        }
        else
        {
            Debug.LogError("错误，节点或父节点必须包含 MonsterGroupData脚本");
        }
    }

    [MenuItem("GameObject/关卡工具/显示全部怪物点", false, 14)]
    private static void ShowAllMonsterGroup()
    {
        var _selected = Selection.activeTransform;
        var regionRoot = GetMissionCompoents<MissionMonsterRegionRoot>(_selected);
        if (regionRoot != null)
        {
            for (var i = 0; i < regionRoot.GroupDatas.Count; i++)
            {
                regionRoot.GroupDatas[i].gameObject.SetActive(true);
            }
            DoDirty(regionRoot.gameObject);
        }
        else
        {
            Debug.LogError("错误，节点或父节点必须包含 MissionMonsterRegionRoot脚本");
        }
    }

    private static void DoDirty(GameObject gameObject)
    {
        EditorUtility.SetDirty(gameObject);
        var prefabStage = PrefabStageUtility.GetCurrentPrefabStage();
        if (prefabStage != null)
        {
            EditorSceneManager.MarkSceneDirty(prefabStage.scene);
        }
    }
}