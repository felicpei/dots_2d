using System.Collections;

public class MainCity : SceneBase
{
    public override IEnumerator Init()
    {
        yield return base.Init();
        
        //FUIHelper.ShowFUI<UIDebugMain>("Debug", "DebugMain");
    }
}