/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/GameConfig.ts":
/*!***************************!*\
  !*** ./src/GameConfig.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "G": () => (/* binding */ G),
/* harmony export */   "GameConfig": () => (/* binding */ GameConfig),
/* harmony export */   "SceneID": () => (/* binding */ SceneID)
/* harmony export */ });
/* harmony import */ var _base_ui_UIManager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base/ui/UIManager */ "./src/base/ui/UIManager.ts");
/* harmony import */ var _base_scene_SceneLoader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./base/scene/SceneLoader */ "./src/base/scene/SceneLoader.ts");
/* harmony import */ var csharp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! csharp */ "csharp");
/* harmony import */ var csharp__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(csharp__WEBPACK_IMPORTED_MODULE_2__);



class GameConfig {
}
GameConfig.debug = true;
GameConfig.realmServerIP = "127.0.0.1";
GameConfig.realmServerPort = 9001;
class SceneID {
}
SceneID.MainCity = "Scenes/Maincity/Maincity.unity";
SceneID.Test = "Scenes/Test/Test.unity";
//单例工具类
class G {
    static OnSceneLeave() {
        this.UIManager.clearAll();
        csharp__WEBPACK_IMPORTED_MODULE_2__.PauseHelper.Revert();
        csharp__WEBPACK_IMPORTED_MODULE_2__.TimeScaleHelper.ResetTimeScale();
        csharp__WEBPACK_IMPORTED_MODULE_2__.Sound.ClearAll();
    }
}
G.UIManager = _base_ui_UIManager__WEBPACK_IMPORTED_MODULE_0__.UIManager.Instance(_base_ui_UIManager__WEBPACK_IMPORTED_MODULE_0__.UIManager);
G.SceneLoader = _base_scene_SceneLoader__WEBPACK_IMPORTED_MODULE_1__.SceneLoader.Instance(_base_scene_SceneLoader__WEBPACK_IMPORTED_MODULE_1__.SceneLoader);


/***/ }),

/***/ "./src/base/common/NiceDecorator.ts":
/*!******************************************!*\
  !*** ./src/base/common/NiceDecorator.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "binder": () => (/* binding */ binder)
/* harmony export */ });
// FairyGUI 元件 绑定器
function binder(name) {
    return function (target, key) {
        target["binders"] = target["binders"] || {};
        target["binders"][key] = name;
    };
}


/***/ }),

/***/ "./src/base/common/Singleton.ts":
/*!**************************************!*\
  !*** ./src/base/common/Singleton.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Singleton": () => (/* binding */ Singleton)
/* harmony export */ });
class Singleton {
    static Instance(c) {
        if (this.instance == null) {
            this.instance = new c();
        }
        return this.instance;
    }
}
Singleton.instance = null;


/***/ }),

/***/ "./src/base/scene/BaseScene.ts":
/*!*************************************!*\
  !*** ./src/base/scene/BaseScene.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BaseScene": () => (/* binding */ BaseScene)
/* harmony export */ });
class BaseScene {
    constructor() {
    }
    onDestroy() {
    }
}


/***/ }),

/***/ "./src/base/scene/SceneLoader.ts":
/*!***************************************!*\
  !*** ./src/base/scene/SceneLoader.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SceneLoader": () => (/* binding */ SceneLoader)
/* harmony export */ });
/* harmony import */ var csharp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! csharp */ "csharp");
/* harmony import */ var csharp__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(csharp__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _common_Singleton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/Singleton */ "./src/base/common/Singleton.ts");
/* harmony import */ var _GameConfig__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../GameConfig */ "./src/GameConfig.ts");



class SceneLoader extends _common_Singleton__WEBPACK_IMPORTED_MODULE_1__.Singleton {
    constructor() {
        super();
        this.currentScene = null;
        this.bCachedMaterial = false;
    }
    //加载场景（Single模式）
    async loadScene(sceneNmae, mode, onProgress) {
        csharp__WEBPACK_IMPORTED_MODULE_0__.Dbg.Log("<TS> start loadScene over：" + sceneNmae + " mode:" + mode);
        let promise = new Promise(resove => {
            csharp__WEBPACK_IMPORTED_MODULE_0__.XResource.LoadScene(sceneNmae, mode, () => {
                resove(true);
            }, (loadStr, loadProgress) => {
                //进度回调
                if (onProgress != null) {
                    onProgress(loadStr, loadProgress);
                }
            });
        });
        return promise;
    }
    async openScene(scene, cls) {
        csharp__WEBPACK_IMPORTED_MODULE_0__.Dbg.Log("<TS> 开始加载场景：" + scene);
        try {
            //清理旧场景
            this.unloadCurrentScene();
            if (this.bCachedMaterial == false) {
                this.bCachedMaterial = true;
                await this.preloadMaterials();
            }
            //开始加载场景
            await this.loadScene(scene, CS.UnityEngine.SceneManagement.LoadSceneMode.Single);
            //场景类型
            this.currentScene = new cls();
            this.currentScene.sceneName = scene;
            this.currentScene.onEnter();
            //Init
            await this.currentScene.onInit();
            csharp__WEBPACK_IMPORTED_MODULE_0__.Dbg.Log("<TS> loadScene over：" + scene);
        }
        catch (ex) {
            csharp__WEBPACK_IMPORTED_MODULE_0__.Dbg.LogError("load scene excep:" + ex);
        }
    }
    unloadCurrentScene() {
        if (this.currentScene) {
            this.currentScene.onLeave();
            this.currentScene.onDestroy();
            this.currentScene = null;
        }
        //全局清理
        _GameConfig__WEBPACK_IMPORTED_MODULE_2__.G.OnSceneLeave();
    }
    async preloadMaterials() {
        //预加载需要的资源（这个要给Dots用，需要在C#里完成）
        let promise = new Promise(resove => {
            csharp__WEBPACK_IMPORTED_MODULE_0__.MissionCache.PreloadMission(() => {
                resove(true);
            });
        });
        return promise;
    }
}


/***/ }),

/***/ "./src/base/ui/UIBase.ts":
/*!*******************************!*\
  !*** ./src/base/ui/UIBase.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UIBase": () => (/* binding */ UIBase)
/* harmony export */ });
class UIBase {
    //绑定FairyGUI元件
    bindAll(target) {
        for (let k in target["binders"]) {
            let fguiName = this["binders"][k];
            this[k] = this.fui.GetChild(fguiName);
        }
    }
}


/***/ }),

/***/ "./src/base/ui/UIDefine.ts":
/*!*********************************!*\
  !*** ./src/base/ui/UIDefine.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UIComDefs": () => (/* binding */ UIComDefs),
/* harmony export */   "UILayerDef": () => (/* binding */ UILayerDef),
/* harmony export */   "UITypeDef": () => (/* binding */ UITypeDef)
/* harmony export */ });
var UITypeDef;
(function (UITypeDef) {
    UITypeDef[UITypeDef["Unkown"] = 0] = "Unkown";
    UITypeDef[UITypeDef["Window"] = 1] = "Window";
    UITypeDef[UITypeDef["Widget"] = 2] = "Widget";
    UITypeDef[UITypeDef["Loading"] = 3] = "Loading";
})(UITypeDef || (UITypeDef = {}));
class UILayerDef {
    static getDefaultLayer(type) {
        switch (type) {
            case UITypeDef.Loading: return this.Loading;
            case UITypeDef.Widget: return this.Widget;
            case UITypeDef.Window: return this.NormalWindow;
            case UITypeDef.Unkown: return this.Unkown;
            default: return this.Unkown;
        }
    }
}
UILayerDef.Background = 0;
UILayerDef.Page = 1000;
UILayerDef.NormalWindow = 2000;
UILayerDef.TopWindow = 3000;
UILayerDef.Widget = 4000;
UILayerDef.Loading = 5000;
UILayerDef.Unkown = 9999;
class UIComDefs {
}
UIComDefs.BackBtn = "back_btn";
UIComDefs.WindowCloseBtn = "win_close_btn";


/***/ }),

/***/ "./src/base/ui/UIManager.ts":
/*!**********************************!*\
  !*** ./src/base/ui/UIManager.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UIManager": () => (/* binding */ UIManager)
/* harmony export */ });
/* harmony import */ var _common_Singleton__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/Singleton */ "./src/base/common/Singleton.ts");
/* harmony import */ var csharp__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! csharp */ "csharp");
/* harmony import */ var csharp__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(csharp__WEBPACK_IMPORTED_MODULE_1__);


class UIManager extends _common_Singleton__WEBPACK_IMPORTED_MODULE_0__.Singleton {
    constructor() {
        super();
        this.m_listLoadedPanel = new Array();
    }
    //加载FairyGUIPakcage
    async loadFairyGUIPackage(packageName) {
        let promise = new Promise(resove => {
            csharp__WEBPACK_IMPORTED_MODULE_1__.FUIHelper.AddPackage(packageName, () => {
                resove(true);
            });
        });
        return promise;
    }
    //释放FairyGUIPackage
    releaseFairyGUIPackage(packageName) {
        csharp__WEBPACK_IMPORTED_MODULE_1__.FUIHelper.ReleasePackage(packageName);
    }
    //创建UI类
    createUI(pkg, name, cls) {
        let comp = CS.FairyGUI.UIPackage.CreateObject(pkg, name).asCom;
        comp.container.gameObject.AddComponent(puer.$typeof(CS.FairyGUI.UIContentScaler));
        //Size设置为GRoot的Size
        var rootSize = CS.FairyGUI.GRoot.inst.size;
        comp.SetSize(rootSize.x, rootSize.y);
        let ui = new cls();
        ui.fui = comp;
        ui.name = name;
        ui.pkgName = pkg;
        //绑定FairyGUI控件
        ui.bindAll(ui);
        ui.awake();
        return ui;
    }
    //get Panel by name
    getPanelUI(name) {
        for (const panel of this.m_listLoadedPanel) {
            if (panel.name == name) {
                csharp__WEBPACK_IMPORTED_MODULE_1__.Dbg.Log("find panel in cache: " + name);
                return panel;
            }
        }
        return null;
    }
    async open(pkg, name, cls, arg) {
        let ui = this.getPanelUI(name);
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
    async openWindow(pkg, name, cls, arg) {
        let ui = await this.open(pkg, name, cls, arg);
        let window = ui;
        if (window == null) {
            csharp__WEBPACK_IMPORTED_MODULE_1__.Dbg.LogError("Error, ui is not window, cls:" + cls);
        }
        return window;
    }
    //关闭Window
    closeWindow(name, arg) {
        let ui = this.getPanelUI(name);
        if (ui != null) {
            ui.close(arg);
        }
    }
    //打开Widiget
    async openWidget(pkg, name, cls, arg) {
        let ui = await this.open(pkg, name, cls, arg);
        return ui;
    }
    //关闭Widiget
    closeWidget(name, arg) {
        let ui = this.getPanelUI(name);
        if (ui != null) {
            ui.close(arg);
        }
    }
    distroyPanel(panel) {
        if (panel.isOpen) {
            panel.close();
        }
        //卸载资源
        this.releaseFairyGUIPackage(panel.pkgName);
        panel.dispose();
    }
    distroyAllLoadedPanel() {
        for (let i = this.m_listLoadedPanel.length - 1; i >= 0; i--) {
            let panel = this.m_listLoadedPanel[i];
            this.distroyPanel(panel);
            this.m_listLoadedPanel.splice(i, 1);
        }
    }
    //删除所有UIPanel
    clearAll() {
        this.distroyAllLoadedPanel();
        this.m_listLoadedPanel.length = 0;
    }
    //当分辨率改变时
    onStageResized() {
        for (let i = 0; i < this.m_listLoadedPanel.length; i++) {
            var rootSize = CS.FairyGUI.GRoot.inst.size;
            this.m_listLoadedPanel[i].fui.SetSize(rootSize.x, rootSize.y);
        }
    }
}


/***/ }),

/***/ "./src/base/ui/UIPanel.ts":
/*!********************************!*\
  !*** ./src/base/ui/UIPanel.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UIPanel": () => (/* binding */ UIPanel)
/* harmony export */ });
/* harmony import */ var _UIDefine__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UIDefine */ "./src/base/ui/UIDefine.ts");
/* harmony import */ var csharp__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! csharp */ "csharp");
/* harmony import */ var csharp__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(csharp__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _UIBase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./UIBase */ "./src/base/ui/UIBase.ts");



class UIPanel extends _UIBase__WEBPACK_IMPORTED_MODULE_2__.UIBase {
    constructor() {
        super(...arguments);
        this.m_layer = _UIDefine__WEBPACK_IMPORTED_MODULE_0__.UILayerDef.Unkown;
    }
    set name(v) {
        this._name = v;
    }
    get name() {
        return this._name;
    }
    get uiType() {
        return _UIDefine__WEBPACK_IMPORTED_MODULE_0__.UITypeDef.Unkown;
    }
    get layer() {
        return this.m_layer;
    }
    set layer(v) {
        this.m_layer = v;
    }
    get isOpen() {
        return this.fui.visible;
    }
    set visible(isActivate) {
        this.fui.visible = isActivate;
    }
    onCreate(arg) {
        this.layer = _UIDefine__WEBPACK_IMPORTED_MODULE_0__.UILayerDef.getDefaultLayer(this.uiType);
        csharp__WEBPACK_IMPORTED_MODULE_1__.FairyGUI.GRoot.inst.AddChild(this.fui);
        this.onShow(arg);
    }
    onDispose() {
    }
    onUpdate() {
    }
    awake() {
        this.onAwake();
    }
    update() {
        this.onUpdate();
    }
    close(arg = null) {
        this.onClose(arg);
        csharp__WEBPACK_IMPORTED_MODULE_1__.FairyGUI.GRoot.inst.RemoveChild(this.fui);
    }
    dispose() {
        this.fui.Dispose();
        this.onDispose();
    }
}


/***/ }),

/***/ "./src/base/ui/UIWindow.ts":
/*!*********************************!*\
  !*** ./src/base/ui/UIWindow.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UIWindow": () => (/* binding */ UIWindow)
/* harmony export */ });
/* harmony import */ var _UIPanel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UIPanel */ "./src/base/ui/UIPanel.ts");
/* harmony import */ var _UIDefine__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UIDefine */ "./src/base/ui/UIDefine.ts");
/* harmony import */ var csharp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! csharp */ "csharp");
/* harmony import */ var csharp__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(csharp__WEBPACK_IMPORTED_MODULE_2__);



class UIWindow extends _UIPanel__WEBPACK_IMPORTED_MODULE_0__.UIPanel {
    get uiType() {
        return _UIDefine__WEBPACK_IMPORTED_MODULE_1__.UITypeDef.Window;
    }
    onAwake() {
        this.m_btnClose = this.fui.GetChild(_UIDefine__WEBPACK_IMPORTED_MODULE_1__.UIComDefs.WindowCloseBtn);
    }
    onShow(arg) {
        this.fui.x = csharp__WEBPACK_IMPORTED_MODULE_2__.FairyGUI.GRoot.inst.width / 2 - this.fui.width / 2;
        this.fui.y = csharp__WEBPACK_IMPORTED_MODULE_2__.FairyGUI.GRoot.inst.height / 2 - this.fui.height / 2;
        if (this.m_btnClose != undefined) {
            this.m_btnClose.onClick.Add(this.onBtnClose);
        }
    }
    onClose(arg) {
        if (this.m_btnClose != undefined) {
            this.m_btnClose.onClick.Remove(this.onBtnClose);
        }
    }
    onBtnClose() {
        this.close(0);
    }
}


/***/ }),

/***/ "./src/scene/SceneMainCity.ts":
/*!************************************!*\
  !*** ./src/scene/SceneMainCity.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SceneMainCity": () => (/* binding */ SceneMainCity)
/* harmony export */ });
/* harmony import */ var _base_scene_BaseScene__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../base/scene/BaseScene */ "./src/base/scene/BaseScene.ts");
/* harmony import */ var _GameConfig__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../GameConfig */ "./src/GameConfig.ts");
/* harmony import */ var _ui_UIDebugMain__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ui/UIDebugMain */ "./src/ui/UIDebugMain.ts");



class SceneMainCity extends _base_scene_BaseScene__WEBPACK_IMPORTED_MODULE_0__.BaseScene {
    onInit() {
        //主城场景显示ui
        _GameConfig__WEBPACK_IMPORTED_MODULE_1__.G.UIManager.openWindow("Debug", "DebugMain", _ui_UIDebugMain__WEBPACK_IMPORTED_MODULE_2__.UIDebugMain);
    }
    onEnter() {
    }
    onLeave() {
    }
}


/***/ }),

/***/ "./src/scene/SceneTest.ts":
/*!********************************!*\
  !*** ./src/scene/SceneTest.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SceneTest": () => (/* binding */ SceneTest)
/* harmony export */ });
/* harmony import */ var _base_scene_BaseScene__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../base/scene/BaseScene */ "./src/base/scene/BaseScene.ts");
/* harmony import */ var _GameConfig__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../GameConfig */ "./src/GameConfig.ts");
/* harmony import */ var _ui_UIDebugBattle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ui/UIDebugBattle */ "./src/ui/UIDebugBattle.ts");



class SceneTest extends _base_scene_BaseScene__WEBPACK_IMPORTED_MODULE_0__.BaseScene {
    onInit() {
        //加载战斗UI
        _GameConfig__WEBPACK_IMPORTED_MODULE_1__.G.UIManager.openWindow("Debug", "DebugBattle", _ui_UIDebugBattle__WEBPACK_IMPORTED_MODULE_2__.UIDebugBattle);
    }
    onEnter() {
    }
    onLeave() {
    }
}


/***/ }),

/***/ "./src/ui/UIDebugBattle.ts":
/*!*********************************!*\
  !*** ./src/ui/UIDebugBattle.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UIDebugBattle": () => (/* binding */ UIDebugBattle)
/* harmony export */ });
/* harmony import */ var _base_ui_UIWindow__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../base/ui/UIWindow */ "./src/base/ui/UIWindow.ts");
/* harmony import */ var _base_common_NiceDecorator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../base/common/NiceDecorator */ "./src/base/common/NiceDecorator.ts");
/* harmony import */ var _GameConfig__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../GameConfig */ "./src/GameConfig.ts");
/* harmony import */ var _scene_SceneMainCity__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../scene/SceneMainCity */ "./src/scene/SceneMainCity.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




class UIDebugBattle extends _base_ui_UIWindow__WEBPACK_IMPORTED_MODULE_0__.UIWindow {
    onAwake() {
        super.onAwake();
        this.m_btnExit.onClick.Add(() => {
            _GameConfig__WEBPACK_IMPORTED_MODULE_2__.G.SceneLoader.openScene(_GameConfig__WEBPACK_IMPORTED_MODULE_2__.SceneID.MainCity, _scene_SceneMainCity__WEBPACK_IMPORTED_MODULE_3__.SceneMainCity);
        });
    }
    onShow(vo) {
        super.onShow(vo);
    }
    onClose(arg) {
        super.onClose(arg);
    }
}
__decorate([
    (0,_base_common_NiceDecorator__WEBPACK_IMPORTED_MODULE_1__.binder)("btnExit")
], UIDebugBattle.prototype, "m_btnExit", void 0);


/***/ }),

/***/ "./src/ui/UIDebugMain.ts":
/*!*******************************!*\
  !*** ./src/ui/UIDebugMain.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UIDebugMain": () => (/* binding */ UIDebugMain)
/* harmony export */ });
/* harmony import */ var csharp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! csharp */ "csharp");
/* harmony import */ var csharp__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(csharp__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _base_ui_UIWindow__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../base/ui/UIWindow */ "./src/base/ui/UIWindow.ts");
/* harmony import */ var _base_common_NiceDecorator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../base/common/NiceDecorator */ "./src/base/common/NiceDecorator.ts");
/* harmony import */ var _GameConfig__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../GameConfig */ "./src/GameConfig.ts");
/* harmony import */ var _scene_SceneTest__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../scene/SceneTest */ "./src/scene/SceneTest.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





class UIDebugMain extends _base_ui_UIWindow__WEBPACK_IMPORTED_MODULE_1__.UIWindow {
    onAwake() {
        super.onAwake();
        this.m_btnFight.onClick.Add(() => {
            _GameConfig__WEBPACK_IMPORTED_MODULE_3__.G.SceneLoader.openScene(_GameConfig__WEBPACK_IMPORTED_MODULE_3__.SceneID.Test, _scene_SceneTest__WEBPACK_IMPORTED_MODULE_4__.SceneTest);
        });
        this.m_btnResolution1.onClick.Add(() => {
            csharp__WEBPACK_IMPORTED_MODULE_0__.XGameSetting.XResolution = csharp__WEBPACK_IMPORTED_MODULE_0__.XGameSetting.EnumResolution.Low;
        });
        this.m_btnResolution2.onClick.Add(() => {
            csharp__WEBPACK_IMPORTED_MODULE_0__.XGameSetting.XResolution = csharp__WEBPACK_IMPORTED_MODULE_0__.XGameSetting.EnumResolution.Mid;
        });
        this.m_btnResolution3.onClick.Add(() => {
            csharp__WEBPACK_IMPORTED_MODULE_0__.XGameSetting.XResolution = csharp__WEBPACK_IMPORTED_MODULE_0__.XGameSetting.EnumResolution.High;
        });
    }
    onShow(vo) {
        super.onShow(vo);
    }
    onClose(arg) {
        super.onClose(arg);
    }
}
__decorate([
    (0,_base_common_NiceDecorator__WEBPACK_IMPORTED_MODULE_2__.binder)("btnFight")
], UIDebugMain.prototype, "m_btnFight", void 0);
__decorate([
    (0,_base_common_NiceDecorator__WEBPACK_IMPORTED_MODULE_2__.binder)("btnResolution1")
], UIDebugMain.prototype, "m_btnResolution1", void 0);
__decorate([
    (0,_base_common_NiceDecorator__WEBPACK_IMPORTED_MODULE_2__.binder)("btnResolution2")
], UIDebugMain.prototype, "m_btnResolution2", void 0);
__decorate([
    (0,_base_common_NiceDecorator__WEBPACK_IMPORTED_MODULE_2__.binder)("btnResolution3")
], UIDebugMain.prototype, "m_btnResolution3", void 0);


/***/ }),

/***/ "csharp":
/*!*************************!*\
  !*** external "csharp" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("csharp");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*************************!*\
  !*** ./src/GameMain.ts ***!
  \*************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var csharp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! csharp */ "csharp");
/* harmony import */ var csharp__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(csharp__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _scene_SceneMainCity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scene/SceneMainCity */ "./src/scene/SceneMainCity.ts");
/* harmony import */ var _GameConfig__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./GameConfig */ "./src/GameConfig.ts");



//类似以前的GameWorld.cs
class GameMain {
    constructor() {
        csharp__WEBPACK_IMPORTED_MODULE_0__.JsManager.JsOnApplicationQuit = () => this.onApplicationQuit();
        csharp__WEBPACK_IMPORTED_MODULE_0__.JsManager.JsOnDispose = () => this.onDispose();
        csharp__WEBPACK_IMPORTED_MODULE_0__.JsManager.JsOnApplicationFocus = (statusParam) => this.onApplicationFocus(statusParam);
        csharp__WEBPACK_IMPORTED_MODULE_0__.JsManager.JsOnApplicationPause = (statusParam) => this.onApplicationPause(statusParam);
        csharp__WEBPACK_IMPORTED_MODULE_0__.JsManager.JSDoEvent = (eventName, eventParam) => this.onCSharpEvent(eventName, eventParam);
    }
    async start() {
        try {
            csharp__WEBPACK_IMPORTED_MODULE_0__.Dbg.Log("###### 初始化TS: Game start in JS....");
            //一些模组初始化
            csharp__WEBPACK_IMPORTED_MODULE_0__.XGameSetting.Init();
            csharp__WEBPACK_IMPORTED_MODULE_0__.Sound.Init();
            //加载主城场景,
            _GameConfig__WEBPACK_IMPORTED_MODULE_2__.G.SceneLoader.openScene(_GameConfig__WEBPACK_IMPORTED_MODULE_2__.SceneID.MainCity, _scene_SceneMainCity__WEBPACK_IMPORTED_MODULE_1__.SceneMainCity);
        }
        catch (ex) {
            csharp__WEBPACK_IMPORTED_MODULE_0__.Dbg.LogError(ex);
        }
    }
    onCSharpEvent(eventName, eventParam) {
        csharp__WEBPACK_IMPORTED_MODULE_0__.Dbg.Log("onCSharpEvent:" + eventName);
        switch (eventName) {
            //FUI分辨率改变
            case "onStageResized":
                _GameConfig__WEBPACK_IMPORTED_MODULE_2__.G.UIManager.onStageResized();
                break;
        }
    }
    onApplicationQuit() {
        csharp__WEBPACK_IMPORTED_MODULE_0__.Dbg.Log("Game onApplicationQuit in JS....");
    }
    onApplicationFocus(statusParam) {
        csharp__WEBPACK_IMPORTED_MODULE_0__.Dbg.Log("Game OnApplicationFocus statusParam:" + statusParam);
    }
    onApplicationPause(statusParam) {
        csharp__WEBPACK_IMPORTED_MODULE_0__.Dbg.Log("Game OnApplicationPause statusParam:" + statusParam);
    }
    onDispose() {
        //卸载当前场景
        _GameConfig__WEBPACK_IMPORTED_MODULE_2__.G.SceneLoader.unloadCurrentScene();
        csharp__WEBPACK_IMPORTED_MODULE_0__.Dbg.Log("Game onDispose in JS....");
    }
}
new GameMain().start();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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aUIsRUFBRSxDQUFDO1lBQ3BCLDhDQUFVLEVBQUUsQ0FBQztZQUViLFNBQVM7WUFDVCxnRUFBdUIsQ0FBZ0IseURBQWdCLEVBQUUsK0RBQWEsQ0FBQyxDQUFDO1NBRTNFO1FBQUMsT0FBTyxFQUFFLEVBQUU7WUFDVCxnREFBWSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1NBQ3BCO0lBRUwsQ0FBQztJQUVNLGFBQWEsQ0FBQyxTQUFpQixFQUFFLFVBQWU7UUFFbkQsMkNBQU8sQ0FBQyxnQkFBZ0IsR0FBRyxTQUFTLENBQUM7UUFDckMsUUFBUSxTQUFTLEVBQUU7WUFDZixVQUFVO1lBQ1YsS0FBSyxnQkFBZ0I7Z0JBQ2pCLG1FQUEwQixFQUFFO2dCQUM1QixNQUFNO1NBQ2I7SUFDTCxDQUFDO0lBRU0saUJBQWlCO1FBQ3BCLDJDQUFPLENBQUMsa0NBQWtDLENBQUMsQ0FBQztJQUNoRCxDQUFDO0lBRU0sa0JBQWtCLENBQUMsV0FBb0I7UUFDMUMsMkNBQU8sQ0FBQyxzQ0FBc0MsR0FBRyxXQUFXLENBQUMsQ0FBQztJQUNsRSxDQUFDO0lBRU0sa0JBQWtCLENBQUMsV0FBb0I7UUFDMUMsMkNBQU8sQ0FBQyxzQ0FBc0MsR0FBRyxXQUFXLENBQUMsQ0FBQztJQUNsRSxDQUFDO0lBR00sU0FBUztRQUVaLFFBQVE7UUFDUix5RUFBZ0MsRUFBRTtRQUNsQywyQ0FBTyxDQUFDLDBCQUEwQixDQUFDLENBQUM7SUFDeEMsQ0FBQztDQUVKO0FBRUQsSUFBSSxRQUFRLEVBQUUsQ0FBQyxLQUFLLEVBQUUsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3RzcHJvamVjdC8uL3NyYy9HYW1lQ29uZmlnLnRzIiwid2VicGFjazovL3RzcHJvamVjdC8uL3NyYy9iYXNlL2NvbW1vbi9OaWNlRGVjb3JhdG9yLnRzIiwid2VicGFjazovL3RzcHJvamVjdC8uL3NyYy9iYXNlL2NvbW1vbi9TaW5nbGV0b24udHMiLCJ3ZWJwYWNrOi8vdHNwcm9qZWN0Ly4vc3JjL2Jhc2Uvc2NlbmUvQmFzZVNjZW5lLnRzIiwid2VicGFjazovL3RzcHJvamVjdC8uL3NyYy9iYXNlL3NjZW5lL1NjZW5lTG9hZGVyLnRzIiwid2VicGFjazovL3RzcHJvamVjdC8uL3NyYy9iYXNlL3VpL1VJQmFzZS50cyIsIndlYnBhY2s6Ly90c3Byb2plY3QvLi9zcmMvYmFzZS91aS9VSURlZmluZS50cyIsIndlYnBhY2s6Ly90c3Byb2plY3QvLi9zcmMvYmFzZS91aS9VSU1hbmFnZXIudHMiLCJ3ZWJwYWNrOi8vdHNwcm9qZWN0Ly4vc3JjL2Jhc2UvdWkvVUlQYW5lbC50cyIsIndlYnBhY2s6Ly90c3Byb2plY3QvLi9zcmMvYmFzZS91aS9VSVdpbmRvdy50cyIsIndlYnBhY2s6Ly90c3Byb2plY3QvLi9zcmMvc2NlbmUvU2NlbmVNYWluQ2l0eS50cyIsIndlYnBhY2s6Ly90c3Byb2plY3QvLi9zcmMvc2NlbmUvU2NlbmVUZXN0LnRzIiwid2VicGFjazovL3RzcHJvamVjdC8uL3NyYy91aS9VSURlYnVnQmF0dGxlLnRzIiwid2VicGFjazovL3RzcHJvamVjdC8uL3NyYy91aS9VSURlYnVnTWFpbi50cyIsIndlYnBhY2s6Ly90c3Byb2plY3QvZXh0ZXJuYWwgY29tbW9uanMyIFwiY3NoYXJwXCIiLCJ3ZWJwYWNrOi8vdHNwcm9qZWN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RzcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90c3Byb2plY3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RzcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RzcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RzcHJvamVjdC8uL3NyYy9HYW1lTWFpbi50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBVSU1hbmFnZXIgfSBmcm9tIFwiLi9iYXNlL3VpL1VJTWFuYWdlclwiO1xyXG5pbXBvcnQgeyBTY2VuZUxvYWRlciB9IGZyb20gXCIuL2Jhc2Uvc2NlbmUvU2NlbmVMb2FkZXJcIjtcclxuaW1wb3J0IHsgUGF1c2VIZWxwZXIsVGltZVNjYWxlSGVscGVyLFNvdW5kIH0gZnJvbSBcImNzaGFycFwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIEdhbWVDb25maWcge1xyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgZGVidWc6IGJvb2xlYW4gPSB0cnVlO1xyXG4gICAgcHVibGljIHN0YXRpYyByZWFsbVNlcnZlcklQOiBzdHJpbmcgPSBcIjEyNy4wLjAuMVwiO1xyXG4gICAgcHVibGljIHN0YXRpYyByZWFsbVNlcnZlclBvcnQ6IG51bWJlciA9IDkwMDE7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBTY2VuZUlEIHtcclxuICAgIHB1YmxpYyBzdGF0aWMgTWFpbkNpdHkgPSBcIlNjZW5lcy9NYWluY2l0eS9NYWluY2l0eS51bml0eVwiO1xyXG4gICAgcHVibGljIHN0YXRpYyBUZXN0ID0gXCJTY2VuZXMvVGVzdC9UZXN0LnVuaXR5XCI7XHJcbn1cclxuXHJcbi8v5Y2V5L6L5bel5YW357G7XHJcbmV4cG9ydCBjbGFzcyBHIHtcclxuICAgIHB1YmxpYyBzdGF0aWMgVUlNYW5hZ2VyID0gVUlNYW5hZ2VyLkluc3RhbmNlKFVJTWFuYWdlcik7XHJcbiAgICBwdWJsaWMgc3RhdGljIFNjZW5lTG9hZGVyID0gU2NlbmVMb2FkZXIuSW5zdGFuY2UoU2NlbmVMb2FkZXIpO1xyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgT25TY2VuZUxlYXZlKCl7XHJcblxyXG4gICAgICAgIHRoaXMuVUlNYW5hZ2VyLmNsZWFyQWxsKCk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgUGF1c2VIZWxwZXIuUmV2ZXJ0KCk7XHJcbiAgICAgICAgVGltZVNjYWxlSGVscGVyLlJlc2V0VGltZVNjYWxlKCk7XHJcbiAgICAgICAgU291bmQuQ2xlYXJBbGwoKTtcclxuICAgIH1cclxufVxyXG4iLCIvLyBGYWlyeUdVSSDlhYPku7Yg57uR5a6a5ZmoXHJcbmV4cG9ydCBmdW5jdGlvbiBiaW5kZXIobmFtZTpzdHJpbmcpe1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uKHRhcmdldDphbnksIGtleTpzdHJpbmcgfCBzeW1ib2wpe1xyXG4gICAgICAgIHRhcmdldFtcImJpbmRlcnNcIl0gPSB0YXJnZXRbXCJiaW5kZXJzXCJdIHx8IHt9O1xyXG4gICAgICAgIHRhcmdldFtcImJpbmRlcnNcIl1ba2V5XSA9IG5hbWU7XHJcbiAgICB9XHJcbn0iLCJcclxuXHJcbmV4cG9ydCBjbGFzcyBTaW5nbGV0b248VD4ge1xyXG5cclxuICAgIHByaXZhdGUgc3RhdGljIGluc3RhbmNlOiBhbnkgPSBudWxsO1xyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgSW5zdGFuY2U8VD4oYzogeyBuZXcoKTogVCB9KTogVCB7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmluc3RhbmNlID09IG51bGwpIHtcclxuICAgICAgICAgICAgdGhpcy5pbnN0YW5jZSA9IG5ldyBjKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5pbnN0YW5jZTtcclxuICAgIH1cclxuXHJcbn0iLCJpbXBvcnQgeyBVbml0eUVuZ2luZSB9IGZyb20gXCJjc2hhcnBcIjtcclxuXHJcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBCYXNlU2NlbmUge1xyXG5cclxuICAgIHB1YmxpYyBzY2VuZU5hbWU6IHN0cmluZztcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIH1cclxuICAgIFxyXG4gICAgcHVibGljIGFic3RyYWN0IG9uSW5pdCgpO1xyXG4gICAgcHVibGljIGFic3RyYWN0IG9uRW50ZXIoKTtcclxuICAgIHB1YmxpYyBhYnN0cmFjdCBvbkxlYXZlKCk7XHJcblxyXG4gICAgcHVibGljIG9uRGVzdHJveSgpIHtcclxuXHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBEYmcsIFhSZXNvdXJjZSwgTWlzc2lvbkNhY2hlIH0gZnJvbSBcImNzaGFycFwiO1xyXG5pbXBvcnQgeyBTaW5nbGV0b24gfSBmcm9tIFwiLi4vY29tbW9uL1NpbmdsZXRvblwiO1xyXG5pbXBvcnQgeyBCYXNlU2NlbmUgfSBmcm9tIFwiLi9CYXNlU2NlbmVcIjtcclxuaW1wb3J0IHsgRyB9IGZyb20gXCIuLi8uLi9HYW1lQ29uZmlnXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgU2NlbmVMb2FkZXIgZXh0ZW5kcyBTaW5nbGV0b248U2NlbmVMb2FkZXI+e1xyXG5cclxuICAgIHByaXZhdGUgY3VycmVudFNjZW5lOiBCYXNlU2NlbmUgPSBudWxsO1xyXG4gICAgcHJpdmF0ZSBiQ2FjaGVkTWF0ZXJpYWw6IGJvb2xlYW4gPSBmYWxzZVxyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy/liqDovb3lnLrmma/vvIhTaW5nbGXmqKHlvI/vvIlcclxuICAgIHByaXZhdGUgYXN5bmMgbG9hZFNjZW5lKHNjZW5lTm1hZTogc3RyaW5nLCBtb2RlOiBDUy5Vbml0eUVuZ2luZS5TY2VuZU1hbmFnZW1lbnQuTG9hZFNjZW5lTW9kZSwgb25Qcm9ncmVzcz86IChsb2FkTmFtZTogc3RyaW5nLCBsb2FkUHJvZ3Jlc3M6IG51bWJlcikgPT4gdm9pZCkge1xyXG5cclxuICAgICAgICBEYmcuTG9nKFwiPFRTPiBzdGFydCBsb2FkU2NlbmUgb3Zlcu+8mlwiICsgc2NlbmVObWFlICsgXCIgbW9kZTpcIiArIG1vZGUpO1xyXG4gICAgICAgIGxldCBwcm9taXNlID0gbmV3IFByb21pc2U8Ym9vbGVhbj4ocmVzb3ZlID0+IHtcclxuICAgICAgICAgICAgWFJlc291cmNlLkxvYWRTY2VuZShzY2VuZU5tYWUsIG1vZGUsICgpID0+IHtcclxuICAgICAgICAgICAgICAgIHJlc292ZSh0cnVlKVxyXG5cclxuICAgICAgICAgICAgfSwgKGxvYWRTdHIsIGxvYWRQcm9ncmVzcykgPT4ge1xyXG4gICAgICAgICAgICAgICAgLy/ov5vluqblm57osINcclxuICAgICAgICAgICAgICAgIGlmIChvblByb2dyZXNzICE9IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICBvblByb2dyZXNzKGxvYWRTdHIsIGxvYWRQcm9ncmVzcyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiBwcm9taXNlO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwdWJsaWMgYXN5bmMgb3BlblNjZW5lPFQgZXh0ZW5kcyBCYXNlU2NlbmU+KHNjZW5lOiBzdHJpbmcsIGNsczogeyBuZXcoKTogVCB9KSB7XHJcblxyXG4gICAgICAgIERiZy5Mb2coXCI8VFM+IOW8gOWni+WKoOi9veWcuuaZr++8mlwiICsgc2NlbmUpO1xyXG4gICAgICAgIHRyeSB7XHJcblxyXG4gICAgICAgICAgICAvL+a4heeQhuaXp+WcuuaZr1xyXG4gICAgICAgICAgICB0aGlzLnVubG9hZEN1cnJlbnRTY2VuZSgpO1xyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMuYkNhY2hlZE1hdGVyaWFsID09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmJDYWNoZWRNYXRlcmlhbCA9IHRydWVcclxuICAgICAgICAgICAgICAgIGF3YWl0IHRoaXMucHJlbG9hZE1hdGVyaWFscygpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvL+W8gOWni+WKoOi9veWcuuaZr1xyXG4gICAgICAgICAgICBhd2FpdCB0aGlzLmxvYWRTY2VuZShzY2VuZSwgQ1MuVW5pdHlFbmdpbmUuU2NlbmVNYW5hZ2VtZW50LkxvYWRTY2VuZU1vZGUuU2luZ2xlKTtcclxuXHJcblxyXG4gICAgICAgICAgICAvL+WcuuaZr+exu+Wei1xyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRTY2VuZSA9IG5ldyBjbHMoKTtcclxuICAgICAgICAgICAgdGhpcy5jdXJyZW50U2NlbmUuc2NlbmVOYW1lID0gc2NlbmU7XHJcbiAgICAgICAgICAgIHRoaXMuY3VycmVudFNjZW5lLm9uRW50ZXIoKTtcclxuXHJcbiAgICAgICAgICAgIC8vSW5pdFxyXG4gICAgICAgICAgICBhd2FpdCB0aGlzLmN1cnJlbnRTY2VuZS5vbkluaXQoKVxyXG5cclxuICAgICAgICAgICAgRGJnLkxvZyhcIjxUUz4gbG9hZFNjZW5lIG92ZXLvvJpcIiArIHNjZW5lKTtcclxuXHJcbiAgICAgICAgfSBjYXRjaCAoZXgpIHtcclxuICAgICAgICAgICAgRGJnLkxvZ0Vycm9yKFwibG9hZCBzY2VuZSBleGNlcDpcIiArIGV4KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHVubG9hZEN1cnJlbnRTY2VuZSgpIHtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuY3VycmVudFNjZW5lKSB7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRTY2VuZS5vbkxlYXZlKCk7XHJcbiAgICAgICAgICAgIHRoaXMuY3VycmVudFNjZW5lLm9uRGVzdHJveSgpO1xyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRTY2VuZSA9IG51bGw7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvL+WFqOWxgOa4heeQhlxyXG4gICAgICAgIEcuT25TY2VuZUxlYXZlKCk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHByaXZhdGUgYXN5bmMgcHJlbG9hZE1hdGVyaWFscygpIHtcclxuXHJcbiAgICAgICAgLy/pooTliqDovb3pnIDopoHnmoTotYTmupDvvIjov5nkuKropoHnu5lEb3Rz55So77yM6ZyA6KaB5ZyoQyPph4zlrozmiJDvvIlcclxuICAgICAgICBsZXQgcHJvbWlzZSA9IG5ldyBQcm9taXNlPGJvb2xlYW4+KHJlc292ZSA9PiB7XHJcblxyXG4gICAgICAgICAgICBNaXNzaW9uQ2FjaGUuUHJlbG9hZE1pc3Npb24oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmVzb3ZlKHRydWUpXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiBwcm9taXNlXHJcbiAgICB9XHJcbn0iLCJcclxuZXhwb3J0IGNsYXNzIFVJQmFzZSB7XHJcblxyXG4gICAgcHVibGljIGZ1aTogYW55OyAgLy9GYWlyeUdVSSDlr7nosaFcclxuXHJcbiAgICAvL+e7keWumkZhaXJ5R1VJ5YWD5Lu2XHJcbiAgICBwdWJsaWMgYmluZEFsbCh0YXJnZXQ6IGFueSk6IHZvaWQge1xyXG4gICAgICAgIGZvciAobGV0IGsgaW4gdGFyZ2V0W1wiYmluZGVyc1wiXSkge1xyXG4gICAgICAgICAgICBsZXQgZmd1aU5hbWUgPSB0aGlzW1wiYmluZGVyc1wiXVtrXTtcclxuICAgICAgICAgICAgdGhpc1trXSA9IHRoaXMuZnVpLkdldENoaWxkKGZndWlOYW1lKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCJleHBvcnQgZW51bSBVSVR5cGVEZWYge1xyXG4gICAgVW5rb3duID0gMCxcclxuICAgIFdpbmRvdyA9IDEsXHJcbiAgICBXaWRnZXQgPSAyLFxyXG4gICAgTG9hZGluZyA9IDNcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFVJTGF5ZXJEZWYge1xyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgQmFja2dyb3VuZDogbnVtYmVyID0gMDtcclxuICAgIHB1YmxpYyBzdGF0aWMgUGFnZTogbnVtYmVyID0gMTAwMDtcclxuICAgIHB1YmxpYyBzdGF0aWMgTm9ybWFsV2luZG93OiBudW1iZXIgPSAyMDAwO1xyXG4gICAgcHVibGljIHN0YXRpYyBUb3BXaW5kb3c6IG51bWJlciA9IDMwMDA7XHJcbiAgICBwdWJsaWMgc3RhdGljIFdpZGdldDogbnVtYmVyID0gNDAwMDtcclxuICAgIHB1YmxpYyBzdGF0aWMgTG9hZGluZzogbnVtYmVyID0gNTAwMDtcclxuICAgIHB1YmxpYyBzdGF0aWMgVW5rb3duOiBudW1iZXIgPSA5OTk5O1xyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0RGVmYXVsdExheWVyKHR5cGU6IFVJVHlwZURlZik6IG51bWJlciB7XHJcblxyXG4gICAgICAgIHN3aXRjaCAodHlwZSkge1xyXG4gICAgICAgICAgICBjYXNlIFVJVHlwZURlZi5Mb2FkaW5nOiByZXR1cm4gdGhpcy5Mb2FkaW5nO1xyXG4gICAgICAgICAgICBjYXNlIFVJVHlwZURlZi5XaWRnZXQ6IHJldHVybiB0aGlzLldpZGdldDtcclxuICAgICAgICAgICAgY2FzZSBVSVR5cGVEZWYuV2luZG93OiByZXR1cm4gdGhpcy5Ob3JtYWxXaW5kb3c7XHJcbiAgICAgICAgICAgIGNhc2UgVUlUeXBlRGVmLlVua293bjogcmV0dXJuIHRoaXMuVW5rb3duO1xyXG4gICAgICAgICAgICBkZWZhdWx0OiByZXR1cm4gdGhpcy5Vbmtvd247XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5cclxuZXhwb3J0IGNsYXNzIFVJQ29tRGVmcyB7XHJcbiAgICBwdWJsaWMgc3RhdGljIEJhY2tCdG4gPSBcImJhY2tfYnRuXCI7XHJcbiAgICBwdWJsaWMgc3RhdGljIFdpbmRvd0Nsb3NlQnRuID0gXCJ3aW5fY2xvc2VfYnRuXCI7XHJcbn1cclxuXHJcblxyXG4iLCJcclxuaW1wb3J0IHsgU2luZ2xldG9uIH0gZnJvbSAnLi4vY29tbW9uL1NpbmdsZXRvbic7XHJcbmltcG9ydCB7IFVJV2luZG93IH0gZnJvbSAnLi9VSVdpbmRvdyc7XHJcbmltcG9ydCB7IFVJV2lkZ2UgfSBmcm9tICcuL1VJV2lkZ2V0JztcclxuaW1wb3J0IHsgVUlQYW5lbCB9IGZyb20gJy4vVUlQYW5lbCc7XHJcbmltcG9ydCB7IERiZywgRlVJSGVscGVyIH0gZnJvbSAnY3NoYXJwJztcclxuXHJcbmV4cG9ydCBjbGFzcyBVSU1hbmFnZXIgZXh0ZW5kcyBTaW5nbGV0b248VUlNYW5hZ2VyPntcclxuXHJcbiAgICBwcml2YXRlIG1fbGlzdExvYWRlZFBhbmVsOiBBcnJheTxVSVBhbmVsPjtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHRoaXMubV9saXN0TG9hZGVkUGFuZWwgPSBuZXcgQXJyYXk8VUlQYW5lbD4oKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLy/liqDovb1GYWlyeUdVSVBha2NhZ2VcclxuICAgIHB1YmxpYyBhc3luYyBsb2FkRmFpcnlHVUlQYWNrYWdlKHBhY2thZ2VOYW1lOiBzdHJpbmcpIHtcclxuXHJcbiAgICAgICAgbGV0IHByb21pc2UgPSBuZXcgUHJvbWlzZTxib29sZWFuPihyZXNvdmUgPT4ge1xyXG5cclxuICAgICAgICAgICAgRlVJSGVscGVyLkFkZFBhY2thZ2UocGFja2FnZU5hbWUsICgpID0+IHtcclxuICAgICAgICAgICAgICAgIHJlc292ZSh0cnVlKVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHByb21pc2U7XHJcbiAgICB9XHJcblxyXG4gICAgLy/ph4rmlL5GYWlyeUdVSVBhY2thZ2VcclxuICAgIHB1YmxpYyByZWxlYXNlRmFpcnlHVUlQYWNrYWdlKHBhY2thZ2VOYW1lOiBzdHJpbmcpIHtcclxuICAgICAgICBGVUlIZWxwZXIuUmVsZWFzZVBhY2thZ2UocGFja2FnZU5hbWUpO1xyXG4gICAgfVxyXG5cclxuICAgIC8v5Yib5bu6VUnnsbtcclxuICAgIHByaXZhdGUgY3JlYXRlVUk8VCBleHRlbmRzIFVJUGFuZWw+KHBrZzogc3RyaW5nLCBuYW1lOiBzdHJpbmcsIGNsczogeyBuZXcoKTogVCB9KTogVUlQYW5lbCB7XHJcblxyXG4gICAgICAgIGxldCBjb21wID0gQ1MuRmFpcnlHVUkuVUlQYWNrYWdlLkNyZWF0ZU9iamVjdChwa2csIG5hbWUpLmFzQ29tXHJcbiAgICAgICAgY29tcC5jb250YWluZXIuZ2FtZU9iamVjdC5BZGRDb21wb25lbnQocHVlci4kdHlwZW9mKENTLkZhaXJ5R1VJLlVJQ29udGVudFNjYWxlcikpXHJcblxyXG4gICAgICAgIC8vU2l6Zeiuvue9ruS4ukdSb29055qEU2l6ZVxyXG4gICAgICAgIHZhciByb290U2l6ZSA9IENTLkZhaXJ5R1VJLkdSb290Lmluc3Quc2l6ZTtcclxuICAgICAgICBjb21wLlNldFNpemUocm9vdFNpemUueCwgcm9vdFNpemUueSk7XHJcblxyXG4gICAgICAgIGxldCB1aTogVUlQYW5lbCA9IG5ldyBjbHMoKTtcclxuICAgICAgICB1aS5mdWkgPSBjb21wO1xyXG4gICAgICAgIHVpLm5hbWUgPSBuYW1lO1xyXG4gICAgICAgIHVpLnBrZ05hbWUgPSBwa2c7XHJcblxyXG4gICAgICAgIC8v57uR5a6aRmFpcnlHVUnmjqfku7ZcclxuICAgICAgICB1aS5iaW5kQWxsKHVpKTtcclxuICAgICAgICB1aS5hd2FrZSgpO1xyXG4gICAgICAgIHJldHVybiB1aTtcclxuICAgIH1cclxuXHJcbiAgICAvL2dldCBQYW5lbCBieSBuYW1lXHJcbiAgICBwdWJsaWMgZ2V0UGFuZWxVSShuYW1lOiBzdHJpbmcpOiBVSVBhbmVsIHtcclxuXHJcbiAgICAgICAgZm9yIChjb25zdCBwYW5lbCBvZiB0aGlzLm1fbGlzdExvYWRlZFBhbmVsKSB7XHJcbiAgICAgICAgICAgIGlmIChwYW5lbC5uYW1lID09IG5hbWUpIHtcclxuICAgICAgICAgICAgICAgIERiZy5Mb2coXCJmaW5kIHBhbmVsIGluIGNhY2hlOiBcIiArIG5hbWUpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHBhbmVsO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgYXN5bmMgb3BlbjxUIGV4dGVuZHMgVUlQYW5lbD4ocGtnOiBzdHJpbmcsIG5hbWU6IHN0cmluZywgY2xzOiB7IG5ldygpOiBUIH0sIGFyZz86IGFueSkge1xyXG5cclxuICAgICAgICBsZXQgdWk6IFVJUGFuZWwgPSB0aGlzLmdldFBhbmVsVUkobmFtZSk7XHJcblxyXG4gICAgICAgIGlmICh1aSA9PSBudWxsKSB7XHJcblxyXG4gICAgICAgICAgICAvL+WKoOi9vSBwYWNrYWdlXHJcbiAgICAgICAgICAgIGF3YWl0IHRoaXMubG9hZEZhaXJ5R1VJUGFja2FnZShwa2cpO1xyXG4gICAgICAgICAgICB1aSA9IHRoaXMuY3JlYXRlVUkocGtnLCBuYW1lLCBjbHMpO1xyXG4gICAgICAgICAgICB0aGlzLm1fbGlzdExvYWRlZFBhbmVsLnB1c2godWkpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdWkub25DcmVhdGUoYXJnKTtcclxuICAgICAgICByZXR1cm4gdWk7XHJcbiAgICB9XHJcblxyXG4gICAgLy/miZPlvIBXaW5kb3dcclxuICAgIHB1YmxpYyBhc3luYyBvcGVuV2luZG93PFQgZXh0ZW5kcyBVSVBhbmVsPihwa2c6IHN0cmluZywgbmFtZTogc3RyaW5nLCBjbHM6IHsgbmV3KCk6IFQgfSwgYXJnPzogYW55KSB7XHJcblxyXG4gICAgICAgIGxldCB1aTogVUlQYW5lbCA9IGF3YWl0IHRoaXMub3Blbihwa2csIG5hbWUsIGNscywgYXJnKTtcclxuXHJcbiAgICAgICAgbGV0IHdpbmRvdyA9IHVpIGFzIFVJV2luZG93O1xyXG4gICAgICAgIGlmICh3aW5kb3cgPT0gbnVsbCkge1xyXG4gICAgICAgICAgICBEYmcuTG9nRXJyb3IoXCJFcnJvciwgdWkgaXMgbm90IHdpbmRvdywgY2xzOlwiICsgY2xzKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHdpbmRvdztcclxuICAgIH1cclxuXHJcbiAgICAvL+WFs+mXrVdpbmRvd1xyXG4gICAgcHVibGljIGNsb3NlV2luZG93KG5hbWU6IHN0cmluZywgYXJnOiBhbnkpIHtcclxuXHJcbiAgICAgICAgbGV0IHVpOiBVSVdpbmRvdyA9IHRoaXMuZ2V0UGFuZWxVSShuYW1lKSBhcyBVSVdpbmRvdztcclxuICAgICAgICBpZiAodWkgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICB1aS5jbG9zZShhcmcpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvL+aJk+W8gFdpZGlnZXRcclxuICAgIHB1YmxpYyBhc3luYyBvcGVuV2lkZ2V0PFQgZXh0ZW5kcyBVSVBhbmVsPihwa2c6IHN0cmluZywgbmFtZTogc3RyaW5nLCBjbHM6IHsgbmV3KCk6IFQgfSwgYXJnPzogYW55KSB7XHJcblxyXG4gICAgICAgIGxldCB1aTogVUlXaWRnZSA9IGF3YWl0IHRoaXMub3Blbihwa2csIG5hbWUsIGNscywgYXJnKTtcclxuICAgICAgICByZXR1cm4gdWk7XHJcbiAgICB9XHJcblxyXG4gICAgLy/lhbPpl61XaWRpZ2V0XHJcbiAgICBwdWJsaWMgY2xvc2VXaWRnZXQobmFtZTogc3RyaW5nLCBhcmc6IGFueSkge1xyXG5cclxuICAgICAgICBsZXQgdWk6IFVJV2lkZ2UgPSB0aGlzLmdldFBhbmVsVUkobmFtZSkgYXMgVUlXaWRnZTtcclxuICAgICAgICBpZiAodWkgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICB1aS5jbG9zZShhcmcpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGRpc3Ryb3lQYW5lbChwYW5lbDogVUlQYW5lbCkge1xyXG5cclxuICAgICAgICBpZiAocGFuZWwuaXNPcGVuKSB7XHJcbiAgICAgICAgICAgIHBhbmVsLmNsb3NlKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvL+WNuOi9vei1hOa6kFxyXG4gICAgICAgIHRoaXMucmVsZWFzZUZhaXJ5R1VJUGFja2FnZShwYW5lbC5wa2dOYW1lKTtcclxuICAgICAgICBwYW5lbC5kaXNwb3NlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBkaXN0cm95QWxsTG9hZGVkUGFuZWwoKTogdm9pZCB7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IHRoaXMubV9saXN0TG9hZGVkUGFuZWwubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcclxuXHJcbiAgICAgICAgICAgIGxldCBwYW5lbCA9IHRoaXMubV9saXN0TG9hZGVkUGFuZWxbaV07XHJcbiAgICAgICAgICAgIHRoaXMuZGlzdHJveVBhbmVsKHBhbmVsKTtcclxuICAgICAgICAgICAgdGhpcy5tX2xpc3RMb2FkZWRQYW5lbC5zcGxpY2UoaSwgMSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8v5Yig6Zmk5omA5pyJVUlQYW5lbFxyXG4gICAgcHVibGljIGNsZWFyQWxsKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuZGlzdHJveUFsbExvYWRlZFBhbmVsKCk7XHJcbiAgICAgICAgdGhpcy5tX2xpc3RMb2FkZWRQYW5lbC5sZW5ndGggPSAwO1xyXG4gICAgfVxyXG5cclxuICAgIC8v5b2T5YiG6L6o546H5pS55Y+Y5pe2XHJcbiAgICBwdWJsaWMgb25TdGFnZVJlc2l6ZWQoKTp2b2lke1xyXG5cclxuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgdGhpcy5tX2xpc3RMb2FkZWRQYW5lbC5sZW5ndGg7IGkrKyl7XHJcbiAgICAgICAgICAgIHZhciByb290U2l6ZSA9IENTLkZhaXJ5R1VJLkdSb290Lmluc3Quc2l6ZTtcclxuICAgICAgICAgICAgdGhpcy5tX2xpc3RMb2FkZWRQYW5lbFtpXS5mdWkuU2V0U2l6ZShyb290U2l6ZS54LCByb290U2l6ZS55KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBVSVR5cGVEZWYsIFVJTGF5ZXJEZWYgfSBmcm9tIFwiLi9VSURlZmluZVwiO1xyXG5pbXBvcnQgeyBEYmcsIEZhaXJ5R1VJIH0gZnJvbSBcImNzaGFycFwiO1xyXG5pbXBvcnQgeyBVSUJhc2UgfSBmcm9tIFwiLi9VSUJhc2VcIjtcclxuXHJcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBVSVBhbmVsIGV4dGVuZHMgVUlCYXNlIHtcclxuXHJcbiAgICBwdWJsaWMgcGtnTmFtZTogc3RyaW5nO1xyXG4gICAgcHJpdmF0ZSBfbmFtZTogc3RyaW5nO1xyXG5cclxuICAgIHB1YmxpYyBzZXQgbmFtZSh2OiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLl9uYW1lID0gdjtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0IG5hbWUoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fbmFtZTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0IHVpVHlwZSgpOiBVSVR5cGVEZWYge1xyXG4gICAgICAgIHJldHVybiBVSVR5cGVEZWYuVW5rb3duO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgbV9sYXllcjogVUlMYXllckRlZiA9IFVJTGF5ZXJEZWYuVW5rb3duO1xyXG4gICAgcHVibGljIGdldCBsYXllcigpOiBVSUxheWVyRGVmIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5tX2xheWVyO1xyXG4gICAgfVxyXG4gICAgcHVibGljIHNldCBsYXllcih2OiBVSUxheWVyRGVmKSB7XHJcbiAgICAgICAgdGhpcy5tX2xheWVyID0gdjtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0IGlzT3BlbigpOiBib29sZWFuIHtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZnVpLnZpc2libGU7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNldCB2aXNpYmxlKGlzQWN0aXZhdGU6IGJvb2xlYW4pIHtcclxuXHJcbiAgICAgICAgdGhpcy5mdWkudmlzaWJsZSA9IGlzQWN0aXZhdGU7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG9uQ3JlYXRlKGFyZzogYW55KTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5sYXllciA9IFVJTGF5ZXJEZWYuZ2V0RGVmYXVsdExheWVyKHRoaXMudWlUeXBlKTtcclxuICAgICAgICBGYWlyeUdVSS5HUm9vdC5pbnN0LkFkZENoaWxkKHRoaXMuZnVpKTtcclxuICAgICAgICB0aGlzLm9uU2hvdyhhcmcpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBhYnN0cmFjdCBvbkF3YWtlKCk6IHZvaWQ7XHJcbiAgICBwdWJsaWMgYWJzdHJhY3Qgb25TaG93KHZvPzogYW55KTogdm9pZDtcclxuICAgIHB1YmxpYyBhYnN0cmFjdCBvbkNsb3NlKGFyZz86IGFueSk6IHZvaWQ7XHJcblxyXG4gICAgcHVibGljIG9uRGlzcG9zZSgpIHsgXHJcblxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBvblVwZGF0ZSgpOiB2b2lkIHsgXHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGF3YWtlKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMub25Bd2FrZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB1cGRhdGUoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5vblVwZGF0ZSgpO1xyXG4gICAgfVxyXG5cclxuXHJcblxyXG4gICAgcHVibGljIGNsb3NlKGFyZzogYW55ID0gbnVsbCk6IHZvaWQge1xyXG5cclxuICAgICAgICB0aGlzLm9uQ2xvc2UoYXJnKTtcclxuICAgICAgICBGYWlyeUdVSS5HUm9vdC5pbnN0LlJlbW92ZUNoaWxkKHRoaXMuZnVpKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZGlzcG9zZSgpOiB2b2lkIHtcclxuXHJcbiAgICAgICAgdGhpcy5mdWkuRGlzcG9zZSgpO1xyXG4gICAgICAgIHRoaXMub25EaXNwb3NlKCk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBVSVBhbmVsIH0gZnJvbSBcIi4vVUlQYW5lbFwiO1xyXG5pbXBvcnQgeyBVSVR5cGVEZWYsIFVJQ29tRGVmcyB9IGZyb20gXCIuL1VJRGVmaW5lXCI7XHJcbmltcG9ydCB7IEZhaXJ5R1VJIH0gZnJvbSBcImNzaGFycFwiO1xyXG5cclxuXHJcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBVSVdpbmRvdyBleHRlbmRzIFVJUGFuZWwge1xyXG5cclxuICAgIHB1YmxpYyBnZXQgdWlUeXBlKCk6IFVJVHlwZURlZiB7XHJcbiAgICAgICAgcmV0dXJuIFVJVHlwZURlZi5XaW5kb3c7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBtX2J0bkNsb3NlOiBGYWlyeUdVSS5HQnV0dG9uO1xyXG5cclxuICAgIHB1YmxpYyBvbkF3YWtlKCk6IHZvaWQge1xyXG5cclxuICAgICAgICB0aGlzLm1fYnRuQ2xvc2UgPSB0aGlzLmZ1aS5HZXRDaGlsZChVSUNvbURlZnMuV2luZG93Q2xvc2VCdG4pO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBvblNob3coYXJnOiBhbnkpOiB2b2lkIHtcclxuXHJcbiAgICAgICAgdGhpcy5mdWkueCA9IEZhaXJ5R1VJLkdSb290Lmluc3Qud2lkdGggLyAyIC0gdGhpcy5mdWkud2lkdGggLyAyO1xyXG4gICAgICAgIHRoaXMuZnVpLnkgPSBGYWlyeUdVSS5HUm9vdC5pbnN0LmhlaWdodCAvIDIgLSB0aGlzLmZ1aS5oZWlnaHQgLyAyO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5tX2J0bkNsb3NlICE9IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICB0aGlzLm1fYnRuQ2xvc2Uub25DbGljay5BZGQodGhpcy5vbkJ0bkNsb3NlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG4gICAgcHVibGljIG9uQ2xvc2UoYXJnOiBhbnkpOiB2b2lkIHtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMubV9idG5DbG9zZSAhPSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgdGhpcy5tX2J0bkNsb3NlLm9uQ2xpY2suUmVtb3ZlKHRoaXMub25CdG5DbG9zZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgb25CdG5DbG9zZSgpIHtcclxuICAgICAgICB0aGlzLmNsb3NlKDApO1xyXG4gICAgfVxyXG5cclxufSIsImltcG9ydCB7IEJhc2VTY2VuZSB9IGZyb20gXCIuLi9iYXNlL3NjZW5lL0Jhc2VTY2VuZVwiO1xyXG5pbXBvcnQgeyBHIH0gZnJvbSBcIi4uL0dhbWVDb25maWdcIjtcclxuaW1wb3J0IHsgVUlEZWJ1Z01haW4gfSBmcm9tICcuLi91aS9VSURlYnVnTWFpbic7XHJcblxyXG5leHBvcnQgY2xhc3MgU2NlbmVNYWluQ2l0eSBleHRlbmRzIEJhc2VTY2VuZSB7XHJcblxyXG4gICAgcHVibGljIG9uSW5pdCgpIHtcclxuXHJcbiAgICAgICAgLy/kuLvln47lnLrmma/mmL7npLp1aVxyXG4gICAgICAgIEcuVUlNYW5hZ2VyLm9wZW5XaW5kb3c8VUlEZWJ1Z01haW4+KFwiRGVidWdcIiwgXCJEZWJ1Z01haW5cIiwgVUlEZWJ1Z01haW4pO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBvbkVudGVyKCkge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgb25MZWF2ZSgpIHtcclxuXHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgTWlzc2lvbkNhY2hlIH0gZnJvbSBcImNzaGFycFwiO1xyXG5pbXBvcnQgeyBCYXNlU2NlbmUgfSBmcm9tIFwiLi4vYmFzZS9zY2VuZS9CYXNlU2NlbmVcIjtcclxuaW1wb3J0IHsgRyB9IGZyb20gXCIuLi9HYW1lQ29uZmlnXCI7XHJcbmltcG9ydCB7IFVJRGVidWdCYXR0bGUgfSBmcm9tICcuLi91aS9VSURlYnVnQmF0dGxlJztcclxuXHJcbmV4cG9ydCBjbGFzcyBTY2VuZVRlc3QgZXh0ZW5kcyBCYXNlU2NlbmUge1xyXG5cclxuICAgIHB1YmxpYyBvbkluaXQoKSB7XHJcblxyXG4gICAgICAgIC8v5Yqg6L295oiY5paXVUlcclxuICAgICAgICBHLlVJTWFuYWdlci5vcGVuV2luZG93PFVJRGVidWdCYXR0bGU+KFwiRGVidWdcIiwgXCJEZWJ1Z0JhdHRsZVwiLCBVSURlYnVnQmF0dGxlKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgb25FbnRlcigpIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG9uTGVhdmUoKSB7XHJcblxyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7IERiZywgRmFpcnlHVUksIFhHYW1lU2V0dGluZyB9IGZyb20gXCJjc2hhcnBcIjtcclxuaW1wb3J0IHsgVUlXaW5kb3cgfSBmcm9tIFwiLi4vYmFzZS91aS9VSVdpbmRvd1wiO1xyXG5pbXBvcnQgeyBiaW5kZXIgfSBmcm9tIFwiLi4vYmFzZS9jb21tb24vTmljZURlY29yYXRvclwiO1xyXG5pbXBvcnQgeyBHLCBTY2VuZUlEIH0gZnJvbSBcIi4uL0dhbWVDb25maWdcIjtcclxuaW1wb3J0IHsgU2NlbmVNYWluQ2l0eSB9IGZyb20gXCIuLi9zY2VuZS9TY2VuZU1haW5DaXR5XCI7XHJcblxyXG5leHBvcnQgY2xhc3MgVUlEZWJ1Z0JhdHRsZSBleHRlbmRzIFVJV2luZG93IHtcclxuXHJcbiAgICBAYmluZGVyKFwiYnRuRXhpdFwiKVxyXG4gICAgcHJpdmF0ZSBtX2J0bkV4aXQ6IEZhaXJ5R1VJLkdCdXR0b247XHJcblxyXG4gICAgcHVibGljIG9uQXdha2UoKTogdm9pZCB7XHJcbiAgICAgICAgc3VwZXIub25Bd2FrZSgpO1xyXG5cclxuICAgICAgICB0aGlzLm1fYnRuRXhpdC5vbkNsaWNrLkFkZCgoKSA9PiB7XHJcbiAgICAgICAgICAgIEcuU2NlbmVMb2FkZXIub3BlblNjZW5lPFNjZW5lTWFpbkNpdHk+KFNjZW5lSUQuTWFpbkNpdHksIFNjZW5lTWFpbkNpdHkpXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG9uU2hvdyh2bzogYW55KTogdm9pZCB7XHJcbiAgICAgICAgc3VwZXIub25TaG93KHZvKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgb25DbG9zZShhcmc6IGFueSk6IHZvaWQge1xyXG4gICAgICAgIHN1cGVyLm9uQ2xvc2UoYXJnKTtcclxuICAgIH1cclxufSIsImltcG9ydCB7IERiZywgRmFpcnlHVUksIFhHYW1lU2V0dGluZyB9IGZyb20gXCJjc2hhcnBcIjtcclxuaW1wb3J0IHsgVUlXaW5kb3cgfSBmcm9tIFwiLi4vYmFzZS91aS9VSVdpbmRvd1wiO1xyXG5pbXBvcnQgeyBiaW5kZXIgfSBmcm9tIFwiLi4vYmFzZS9jb21tb24vTmljZURlY29yYXRvclwiO1xyXG5pbXBvcnQgeyBHLCBTY2VuZUlEIH0gZnJvbSBcIi4uL0dhbWVDb25maWdcIjtcclxuaW1wb3J0IHsgU2NlbmVUZXN0IH0gZnJvbSBcIi4uL3NjZW5lL1NjZW5lVGVzdFwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFVJRGVidWdNYWluIGV4dGVuZHMgVUlXaW5kb3cge1xyXG5cclxuICAgIEBiaW5kZXIoXCJidG5GaWdodFwiKVxyXG4gICAgcHJpdmF0ZSBtX2J0bkZpZ2h0OiBGYWlyeUdVSS5HQnV0dG9uO1xyXG5cclxuICAgIEBiaW5kZXIoXCJidG5SZXNvbHV0aW9uMVwiKVxyXG4gICAgcHJpdmF0ZSBtX2J0blJlc29sdXRpb24xOiBGYWlyeUdVSS5HQnV0dG9uO1xyXG5cclxuICAgIEBiaW5kZXIoXCJidG5SZXNvbHV0aW9uMlwiKVxyXG4gICAgcHJpdmF0ZSBtX2J0blJlc29sdXRpb24yOiBGYWlyeUdVSS5HQnV0dG9uO1xyXG5cclxuICAgIEBiaW5kZXIoXCJidG5SZXNvbHV0aW9uM1wiKVxyXG4gICAgcHJpdmF0ZSBtX2J0blJlc29sdXRpb24zOiBGYWlyeUdVSS5HQnV0dG9uO1xyXG5cclxuXHJcbiAgICBwdWJsaWMgb25Bd2FrZSgpOiB2b2lkIHtcclxuICAgICAgICBzdXBlci5vbkF3YWtlKCk7XHJcblxyXG4gICAgICAgIHRoaXMubV9idG5GaWdodC5vbkNsaWNrLkFkZCgoKSA9PiB7XHJcbiAgICAgICAgICAgIEcuU2NlbmVMb2FkZXIub3BlblNjZW5lPFNjZW5lVGVzdD4oU2NlbmVJRC5UZXN0LCBTY2VuZVRlc3QpXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICBcclxuICAgICAgICB0aGlzLm1fYnRuUmVzb2x1dGlvbjEub25DbGljay5BZGQoKCkgPT4ge1xyXG4gICAgICAgICAgICBYR2FtZVNldHRpbmcuWFJlc29sdXRpb24gPSBYR2FtZVNldHRpbmcuRW51bVJlc29sdXRpb24uTG93O1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLm1fYnRuUmVzb2x1dGlvbjIub25DbGljay5BZGQoKCkgPT4ge1xyXG4gICAgICAgICAgICBYR2FtZVNldHRpbmcuWFJlc29sdXRpb24gPSBYR2FtZVNldHRpbmcuRW51bVJlc29sdXRpb24uTWlkO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLm1fYnRuUmVzb2x1dGlvbjMub25DbGljay5BZGQoKCkgPT4ge1xyXG4gICAgICAgICAgICBYR2FtZVNldHRpbmcuWFJlc29sdXRpb24gPSBYR2FtZVNldHRpbmcuRW51bVJlc29sdXRpb24uSGlnaDtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgb25TaG93KHZvOiBhbnkpOiB2b2lkIHtcclxuICAgICAgICBzdXBlci5vblNob3codm8pO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBvbkNsb3NlKGFyZzogYW55KTogdm9pZCB7XHJcbiAgICAgICAgc3VwZXIub25DbG9zZShhcmcpO1xyXG4gICAgfVxyXG59IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY3NoYXJwXCIpOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyBEYmcsIEpzTWFuYWdlciwgWEdhbWVTZXR0aW5nLCBTb3VuZCB9IGZyb20gJ2NzaGFycCc7XHJcbmltcG9ydCB7IFNjZW5lTWFpbkNpdHkgfSBmcm9tICcuL3NjZW5lL1NjZW5lTWFpbkNpdHknO1xyXG5pbXBvcnQgeyBHLCBTY2VuZUlEIH0gZnJvbSAnLi9HYW1lQ29uZmlnJztcclxuXHJcblxyXG4vL+exu+S8vOS7peWJjeeahEdhbWVXb3JsZC5jc1xyXG5jbGFzcyBHYW1lTWFpbiB7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgSnNNYW5hZ2VyLkpzT25BcHBsaWNhdGlvblF1aXQgPSAoKSA9PiB0aGlzLm9uQXBwbGljYXRpb25RdWl0KCk7XHJcbiAgICAgICAgSnNNYW5hZ2VyLkpzT25EaXNwb3NlID0gKCkgPT4gdGhpcy5vbkRpc3Bvc2UoKTtcclxuICAgICAgICBKc01hbmFnZXIuSnNPbkFwcGxpY2F0aW9uRm9jdXMgPSAoc3RhdHVzUGFyYW0pID0+IHRoaXMub25BcHBsaWNhdGlvbkZvY3VzKHN0YXR1c1BhcmFtKTtcclxuICAgICAgICBKc01hbmFnZXIuSnNPbkFwcGxpY2F0aW9uUGF1c2UgPSAoc3RhdHVzUGFyYW0pID0+IHRoaXMub25BcHBsaWNhdGlvblBhdXNlKHN0YXR1c1BhcmFtKTtcclxuICAgICAgICBKc01hbmFnZXIuSlNEb0V2ZW50ID0gKGV2ZW50TmFtZSwgZXZlbnRQYXJhbSkgPT4gdGhpcy5vbkNTaGFycEV2ZW50KGV2ZW50TmFtZSwgZXZlbnRQYXJhbSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGFzeW5jIHN0YXJ0KCkge1xyXG5cclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBEYmcuTG9nKFwiIyMjIyMjIOWIneWni+WMllRTOiBHYW1lIHN0YXJ0IGluIEpTLi4uLlwiKTtcclxuXHJcbiAgICAgICAgICAgIC8v5LiA5Lqb5qih57uE5Yid5aeL5YyWXHJcbiAgICAgICAgICAgIFhHYW1lU2V0dGluZy5Jbml0KCk7XHJcbiAgICAgICAgICAgIFNvdW5kLkluaXQoKTtcclxuXHJcbiAgICAgICAgICAgIC8v5Yqg6L295Li75Z+O5Zy65pmvLFxyXG4gICAgICAgICAgICBHLlNjZW5lTG9hZGVyLm9wZW5TY2VuZTxTY2VuZU1haW5DaXR5PihTY2VuZUlELk1haW5DaXR5LCBTY2VuZU1haW5DaXR5KTtcclxuXHJcbiAgICAgICAgfSBjYXRjaCAoZXgpIHtcclxuICAgICAgICAgICAgRGJnLkxvZ0Vycm9yKGV4KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBvbkNTaGFycEV2ZW50KGV2ZW50TmFtZTogc3RyaW5nLCBldmVudFBhcmFtOiBhbnkpIHtcclxuXHJcbiAgICAgICAgRGJnLkxvZyhcIm9uQ1NoYXJwRXZlbnQ6XCIgKyBldmVudE5hbWUpXHJcbiAgICAgICAgc3dpdGNoIChldmVudE5hbWUpIHtcclxuICAgICAgICAgICAgLy9GVUnliIbovqjnjofmlLnlj5hcclxuICAgICAgICAgICAgY2FzZSBcIm9uU3RhZ2VSZXNpemVkXCI6XHJcbiAgICAgICAgICAgICAgICBHLlVJTWFuYWdlci5vblN0YWdlUmVzaXplZCgpXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG9uQXBwbGljYXRpb25RdWl0KCk6IHZvaWQge1xyXG4gICAgICAgIERiZy5Mb2coXCJHYW1lIG9uQXBwbGljYXRpb25RdWl0IGluIEpTLi4uLlwiKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgb25BcHBsaWNhdGlvbkZvY3VzKHN0YXR1c1BhcmFtOiBib29sZWFuKSB7XHJcbiAgICAgICAgRGJnLkxvZyhcIkdhbWUgT25BcHBsaWNhdGlvbkZvY3VzIHN0YXR1c1BhcmFtOlwiICsgc3RhdHVzUGFyYW0pO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBvbkFwcGxpY2F0aW9uUGF1c2Uoc3RhdHVzUGFyYW06IGJvb2xlYW4pIHtcclxuICAgICAgICBEYmcuTG9nKFwiR2FtZSBPbkFwcGxpY2F0aW9uUGF1c2Ugc3RhdHVzUGFyYW06XCIgKyBzdGF0dXNQYXJhbSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHB1YmxpYyBvbkRpc3Bvc2UoKTogdm9pZCB7XHJcblxyXG4gICAgICAgIC8v5Y246L295b2T5YmN5Zy65pmvXHJcbiAgICAgICAgRy5TY2VuZUxvYWRlci51bmxvYWRDdXJyZW50U2NlbmUoKVxyXG4gICAgICAgIERiZy5Mb2coXCJHYW1lIG9uRGlzcG9zZSBpbiBKUy4uLi5cIik7XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5uZXcgR2FtZU1haW4oKS5zdGFydCgpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==