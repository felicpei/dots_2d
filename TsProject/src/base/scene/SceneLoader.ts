import { Dbg, XResource,MissionCache } from "csharp";
import { Singleton } from "../common/Singleton";
import { BaseScene } from "./BaseScene";
import { G } from "../../GameConfig";

export class SceneLoader extends Singleton<SceneLoader>{

    private currentScene: BaseScene = null;
    private bCachedMaterial: boolean = false

    constructor() {
        super();
    }

    //加载场景（Single模式）
    private async loadScene(sceneNmae: string, mode: CS.UnityEngine.SceneManagement.LoadSceneMode, onProgress?: (loadName: string, loadProgress: number) => void) {

        Dbg.Log("<TS> start loadScene over：" + sceneNmae+" mode:"+mode);
        let promise = new Promise<boolean>(resove => {
            XResource.LoadScene(sceneNmae, mode, () => {
                resove(true)

            }, (loadStr, loadProgress) => {
                //进度回调
                if (onProgress != null) {
                    onProgress(loadStr, loadProgress);
                }
            });
        });
        return promise;
    }


    public async openScene<T extends BaseScene>(scene: string, cls: { new(): T }) {

        Dbg.Log("<TS> 开始加载场景：" + scene);
        try {

            //清理旧场景
            if (this.currentScene) {
                this.currentScene.onLeave();
                this.currentScene.onDestroy();
            }

            //全局清理
            G.OnSceneLeave();

            if(this.bCachedMaterial == false){
                this.bCachedMaterial = true
                await this.preloadMaterials();
            }

            //开始加载场景
            await this.loadScene(scene, CS.UnityEngine.SceneManagement.LoadSceneMode.Single);

         

            //场景类型
            this.currentScene = new cls();
            this.currentScene.onEnter();

            //Init
            await this.currentScene.onInit()

            Dbg.Log("<TS> loadScene over：" + scene);

        } catch (ex) {
            Dbg.LogError("load scene excep:" + ex);
        }
    }


    private async preloadMaterials() {

        //预加载需要的资源（这个要给Dots用，需要在C#里完成）
        let promise = new Promise<boolean>(resove => {

            MissionCache.PreloadMission(() => {
                resove(true)
            });
        });
        return promise
    }
}