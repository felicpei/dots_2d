
import { Singleton } from '../common/Singleton';
import { UIWindow } from './UIWindow';
import { UIWidge } from './UIWidget';
import { UIPanel } from './UIPanel';
import { Dbg, FUIHelper } from 'csharp';

export class UIManager extends Singleton<UIManager>{

    private m_listLoadedPanel: Array<UIPanel>;

    constructor() {
        super();
        this.m_listLoadedPanel = new Array<UIPanel>();
    }


    //加载FairyGUIPakcage
    public async loadFairyGUIPackage(packageName: string) {

        let promise = new Promise<boolean>(resove => {

            FUIHelper.AddPackage(packageName, () => {
                resove(true)
            });
        });

        return promise;
    }

    //释放FairyGUIPackage
    public releaseFairyGUIPackage(packageName: string) {
        FUIHelper.ReleasePackage(packageName);
    }

    //创建UI类
    private createUI<T extends UIPanel>(pkg: string, name: string, cls: { new(): T }): UIPanel {

        let comp = CS.FairyGUI.UIPackage.CreateObject(pkg, name).asCom
        comp.container.gameObject.AddComponent(puer.$typeof(CS.FairyGUI.UIContentScaler))

        //Size设置为GRoot的Size
        var rootSize = CS.FairyGUI.GRoot.inst.size;
        comp.SetSize(rootSize.x, rootSize.y);

        let ui: UIPanel = new cls();
        ui.fui = comp;
        ui.name = name;
        ui.pkgName = pkg;

        //绑定FairyGUI控件
        ui.bindAll(ui);
        ui.awake();
        return ui;
    }

    //get Panel by name
    public getPanelUI(name: string): UIPanel {

        for (const panel of this.m_listLoadedPanel) {
            if (panel.name == name) {
                Dbg.Log("find panel in cache: " + name);
                return panel;
            }
        }
        return null;
    }

    private async open<T extends UIPanel>(pkg: string, name: string, cls: { new(): T }, arg?: any) {

        let ui: UIPanel = this.getPanelUI(name);

        if (ui == null) {

            //加载 package
            await this.loadFairyGUIPackage(pkg);
            ui = this.createUI(pkg, name, cls);
            this.m_listLoadedPanel.push(ui);
        }

        ui.onCreate(arg);
        return ui;
    }

    //打开Window
    public async openWindow<T extends UIPanel>(pkg: string, name: string, cls: { new(): T }, arg?: any) {

        let ui: UIPanel = await this.open(pkg, name, cls, arg);

        let window = ui as UIWindow;
        if (window == null) {
            Dbg.LogError("Error, ui is not window, cls:" + cls);
        }
        return window;
    }

    //关闭Window
    public closeWindow(name: string, arg: any) {

        let ui: UIWindow = this.getPanelUI(name) as UIWindow;
        if (ui != null) {
            ui.close(arg);
        }
    }

    //打开Widiget
    public async openWidget<T extends UIPanel>(pkg: string, name: string, cls: { new(): T }, arg?: any) {

        let ui: UIWidge = await this.open(pkg, name, cls, arg);
        return ui;
    }

    //关闭Widiget
    public closeWidget(name: string, arg: any) {

        let ui: UIWidge = this.getPanelUI(name) as UIWidge;
        if (ui != null) {
            ui.close(arg);
        }
    }

    private distroyPanel(panel: UIPanel) {

        if (panel.isOpen) {
            panel.close();
        }

        //卸载资源
        this.releaseFairyGUIPackage(panel.pkgName);
        panel.dispose();
    }

    private distroyAllLoadedPanel(): void {
        for (let i = this.m_listLoadedPanel.length - 1; i >= 0; i--) {

            let panel = this.m_listLoadedPanel[i];
            this.distroyPanel(panel);
            this.m_listLoadedPanel.splice(i, 1);
        }
    }

    //删除所有UIPanel
    public clearAll(): void {
        this.distroyAllLoadedPanel();
        this.m_listLoadedPanel.length = 0;
    }

    //当分辨率改变时
    public onStageResized():void{

        for(let i = 0; i < this.m_listLoadedPanel.length; i++){
            var rootSize = CS.FairyGUI.GRoot.inst.size;
            this.m_listLoadedPanel[i].fui.SetSize(rootSize.x, rootSize.y);
        }
    }
}