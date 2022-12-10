import { BaseScene } from "../base/scene/BaseScene";
import { G } from "../GameConfig";
import { UIDebugMain } from '../ui/UIDebugMain';

export class SceneMainCity extends BaseScene {

    public onInit() {

        //主城场景显示ui
        G.UIManager.openWindow<UIDebugMain>("Debug", "DebugMain", UIDebugMain);
    }

    public onEnter() {

    }

    public onLeave() {

    }
}
