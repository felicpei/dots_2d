import { Dbg, FairyGUI, XGameSetting } from "csharp";
import { UIWindow } from "../base/ui/UIWindow";
import { binder } from "../base/common/NiceDecorator";
import { G, SceneID } from "../GameConfig";
import { SceneMainCity } from "../scene/SceneMainCity";

export class UIDebugBattle extends UIWindow {

    @binder("btnExit")
    private m_btnExit: FairyGUI.GButton;

    public onAwake(): void {
        super.onAwake();

        this.m_btnExit.onClick.Add(() => {
            G.SceneLoader.openScene<SceneMainCity>(SceneID.MainCity, SceneMainCity)
        });
    }

    public onShow(vo: any): void {
        super.onShow(vo);
    }

    public onClose(arg: any): void {
        super.onClose(arg);
    }
}