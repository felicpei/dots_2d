import { UITypeDef, UILayerDef } from "./UIDefine";
import { Dbg, FairyGUI } from "csharp";
import { UIBase } from "./UIBase";

export abstract class UIPanel extends UIBase {

    public pkgName: string;
    private _name: string;

    public set name(v: string) {
        this._name = v;
    }

    public get name(): string {
        return this._name;
    }

    public get uiType(): UITypeDef {
        return UITypeDef.Unkown;
    }

    private m_layer: UILayerDef = UILayerDef.Unkown;
    public get layer(): UILayerDef {
        return this.m_layer;
    }
    public set layer(v: UILayerDef) {
        this.m_layer = v;
    }

    public get isOpen(): boolean {

        return this.fui.visible;
    }

    public set visible(isActivate: boolean) {

        this.fui.visible = isActivate;
    }

    public onCreate(arg: any): void {
        this.layer = UILayerDef.getDefaultLayer(this.uiType);
        FairyGUI.GRoot.inst.AddChild(this.fui);
        this.onShow(arg);
    }

    public abstract onAwake(): void;
    public abstract onShow(vo?: any): void;
    public abstract onClose(arg?: any): void;

    public onDispose() { 

    }

    public onUpdate(): void { 
        
    }

    public awake(): void {
        this.onAwake();
    }

    public update(): void {
        this.onUpdate();
    }



    public close(arg: any = null): void {

        this.onClose(arg);
        FairyGUI.GRoot.inst.RemoveChild(this.fui);
    }

    public dispose(): void {

        this.fui.Dispose();
        this.onDispose();
    }
}