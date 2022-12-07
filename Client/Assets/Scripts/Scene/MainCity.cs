using System.Collections;

public class MainCity : SceneBase
{
    public override IEnumerator Init()
    {
        yield return base.Init();
        
        XResource.LoadGameObject("UI/Prefabs/UIDebugEntrance.prefab", gameObj =>
        {
            
        });
    }
}