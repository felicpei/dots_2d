import { MissionCache } from "csharp";
import { BaseScene } from "../base/scene/BaseScene";
import { G } from "../GameConfig";
import { UIDebugBattle } from '../ui/UIDebugBattle';

export class SceneTest extends BaseScene {

    public async onInit() {

        //预加载需要的资源（这个要给Dots用，需要在C#里完成）
        let promise = new Promise<boolean>(resove => {

            MissionCache.PreloadMission(() => {
                resove(true)
            });
        });

        //加载战斗UI
        G.UIManager.openWindow<UIDebugBattle>("Debug", "DebugBattle", UIDebugBattle);

        return promise;
    }

    public onEnter() {

    }

    public onLeave() {

    }
}
