import { Dbg, JsManager} from 'csharp';
import { SceneMainCity } from './scene/SceneMainCity';
import { G, SceneID } from './GameConfig';


//类似以前的GameWorld.cs
class GameMain {

    constructor() {
        JsManager.JsOnApplicationQuit = () => this.onApplicationQuit();
        JsManager.JsOnDispose = () => this.onDispose();
        JsManager.JsOnApplicationFocus = (statusParam) => this.onApplicationFocus(statusParam);
        JsManager.JsOnApplicationPause = (statusParam) => this.onApplicationPause(statusParam);
        JsManager.JSDoEvent = (eventName, eventParam) => this.onCSharpEvent(eventName, eventParam);
    }

    public async start() {

        try {
            Dbg.Log("###### 初始化TS: Game start in JS....");

            //初始化
            G.InitGame();
           
            //加载主城场景
            G.SceneLoader.openScene<SceneMainCity>(SceneID.MainCity, SceneMainCity);

        } catch (ex) {
            Dbg.LogError(ex);
        }

    }

    public onCSharpEvent(eventName: string, eventParam: any) {

        Dbg.Log("onCSharpEvent:" + eventName)
        switch (eventName) {
            //FUI分辨率改变
            case "onStageResized":
                G.UIManager.onStageResized()
                break;
        }
    }

    public onApplicationQuit(): void {
        Dbg.Log("Game onApplicationQuit in JS....");
    }

    public onApplicationFocus(statusParam: boolean) {
        Dbg.Log("Game OnApplicationFocus statusParam:" + statusParam);
    }

    public onApplicationPause(statusParam: boolean) {
        Dbg.Log("Game OnApplicationPause statusParam:" + statusParam);
    }


    public onDispose(): void {

        //卸载当前场景
        G.SceneLoader.unloadCurrentScene()
        Dbg.Log("Game onDispose in JS....");
    }

}

new GameMain().start();