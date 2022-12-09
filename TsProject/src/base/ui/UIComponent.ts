import { UIBase } from "./UIBase";
import { FairyGUI } from "csharp";


export abstract class UIComponent extends UIBase {

    public parent: FairyGUI.GComponent;

    public createUI(pkg: string, name: string) {
        let comp = FairyGUI.UIPackage.CreateObject(pkg, name).asCom
        this.fui = comp;
        this.bindAll(this);
        this.onAwake();
    }

    public addToParent(p: FairyGUI.GComponent, vo?: any) {
        this.parent = p;
        p.AddChild(this.fui);

        this.fui.SetSize(this.parent.width, this.parent.height);
        this.fui.AddRelation(this.parent, FairyGUI.RelationType.Size);

        this.onShow(vo);
    }

    public SetActive(visible: boolean) {
        this.fui.visible = visible;
    }

    public onShow(vo?: any): void {
        this.SetActive(true);
    }

    public abstract onAwake(): void;
    public abstract onClose(arg?: any): void;


    public onUpdate(): void { }

    public update(): void {
        this.onUpdate();
    }
}