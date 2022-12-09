import { Dbg, FairyGUI, XGameSetting } from "csharp";
import { UIWindow } from "../base/ui/UIWindow";
import { binder } from "../base/common/NiceDecorator";

export class UIDebugMain extends UIWindow {

    @binder("btnFight")
    private m_btnFight: FairyGUI.GButton;

    @binder("btnResolution1")
    private m_btnResolution1: FairyGUI.GButton;

    @binder("btnResolution2")
    private m_btnResolution2: FairyGUI.GButton;

    @binder("btnResolution3")
    private m_btnResolution3: FairyGUI.GButton;


    public onAwake(): void {
        super.onAwake();

        this.m_btnFight.onClick.Add(() => {
            Dbg.Log("onClickFight");
        });

   
        this.m_btnResolution1.onClick.Add(() => {
            XGameSetting.XResolution = XGameSetting.EnumResolution.Low;
        });

        this.m_btnResolution2.onClick.Add(() => {
            XGameSetting.XResolution = XGameSetting.EnumResolution.Mid;
        });
        
        this.m_btnResolution3.onClick.Add(() => {
            XGameSetting.XResolution = XGameSetting.EnumResolution.High;
        });
    }

    public onShow(vo: any): void {
        super.onShow(vo);


    }


    public onClose(arg: any): void {
        super.onClose(arg);
    }
}