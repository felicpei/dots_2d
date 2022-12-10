import { UIManager } from "./base/ui/UIManager";
import { SceneLoader } from "./base/scene/SceneLoader";
import { PauseHelper,TimeScaleHelper,Sound } from "csharp";

export class GameConfig {

    public static debug: boolean = true;
    public static realmServerIP: string = "127.0.0.1";
    public static realmServerPort: number = 9001;
}

export class SceneID {
    public static MainCity = "Scenes/Maincity/Maincity.unity";
    public static Test = "Scenes/Test/Test.unity";
}

//单例工具类
export class G {
    public static UIManager = UIManager.Instance(UIManager);
    public static SceneLoader = SceneLoader.Instance(SceneLoader);

    public static OnSceneLeave(){

        this.UIManager.clearAll();
        
        PauseHelper.Revert();
        TimeScaleHelper.ResetTimeScale();
        Sound.ClearAll();
    }
}
