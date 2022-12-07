using System.Collections;
using UnityEngine;
using UnityEngine.SceneManagement;
using UnityEngine.Scripting;
using UnityEngine.UI;

[assembly:Preserve]

public class FirstStart : MonoBehaviour
{
	private static FirstStart Inst;
	private const string ScenePath = "Launcher.unity";
	public Slider Slider;
	public Text Text;
	public CanvasScaler CanvasScaler;

	private void Awake()
	{
		Inited = false;
		Inst = this;
	}
	
	private void Start()
	{
		StartCoroutine(Init());
	}


	public static bool Inited;
	public static IEnumerator Init(bool bFromLauncher = false)
	{
		if (Inited)
		{
			yield break;
		}

		Inited = true;
		
		yield return XPlatform.Init(false);
		
		//初始化AB
		yield return XAssetBundle.Initialize(SetLoadingProgress);
		
		XResource.Init();
		AtlasLoader.Init();
		
		//加载配置表
		yield return XResource.CacheTableZip(SetLoadingProgress);
		
		//cache
		if (XPlatform.Platform != XPlatform.EPlatform.UnityEditor)
		{
			/*
				yield return XAssetBundle.LoadAssetBundle("common.ab", SetLoadingProgress);
				yield return XAssetBundle.LoadAssetBundle("atlas.ab", SetLoadingProgress);
			*/
		}

		//loadScene
		if (!bFromLauncher)
		{
			yield return XResource.LoadScene(ScenePath, LoadSceneMode.Single, onProgress:SetLoadingProgress);
		}
	}
	
	private static void SetLoadingProgress(string abName, float progress)
	{
		if (Inst != null)
		{
			Inst.Text.text = string.Format("正在加载{0}", abName);
			Inst.Slider.value = progress;
		}
	}

	private void OnDestroy()
	{
		Inst = null;
	}
}