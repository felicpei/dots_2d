using System.Collections;
using Puerts;
using UnityEngine;

public static class GameWorld
{
    public delegate Coroutine StartCoroutineFunc(IEnumerator routine);
    public static StartCoroutineFunc StartCoroutine;

    public static bool FocusStatus { private set; get; }
    public static bool PauseStatus { private set; get; }



    public static void OnGameStart(GameObject gameObj)
    {
        //启动游戏
        //进入MainCity
        SceneLoader.LoadMainCity(() =>
        {
        });
        
        //on GameStart 添加ts脚本
    }
    
    
    //切换场景清理资源
    public static void OnSceneLeave()
    {
        PauseHelper.Revert();
        TimeScaleHelper.ResetTimeScale();
        Sound.ClearAll();
        //FUIHelper.ClearAll();
    }
 
    public static void Quit()
    {
        Application.Quit();
    }
}
