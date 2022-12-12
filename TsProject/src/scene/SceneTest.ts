import { MissionCache, TouchMgr } from "csharp";
import { BaseScene } from "../base/scene/BaseScene";
import { G } from "../GameConfig";
import { UIDebugBattle } from '../ui/UIDebugBattle';

export class SceneTest extends BaseScene {

    public onInit() {

        //加载战斗UI
        G.UIManager.openWindow<UIDebugBattle>("Debug", "DebugBattle", UIDebugBattle);

        //加载摇杆UI
        TouchMgr.LoadJoystickPrefab();
    }

    public onEnter() {

    }

    public onLeave() {

    }
}
