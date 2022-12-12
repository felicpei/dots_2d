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
    //进游戏相关初始化
    static InitGame() {
        csharp__WEBPACK_IMPORTED_MODULE_2__.XGameSetting.Init();
        csharp__WEBPACK_IMPORTED_MODULE_2__.Sound.Init();
        csharp__WEBPACK_IMPORTED_MODULE_2__.TouchMgr.Init();
    }
    //离开场景清理
    static OnSceneLeave() {
        this.UIManager.clearAll();
        csharp__WEBPACK_IMPORTED_MODULE_2__.PauseHelper.Revert();
        csharp__WEBPACK_IMPORTED_MODULE_2__.TimeScaleHelper.ResetTimeScale();
        csharp__WEBPACK_IMPORTED_MODULE_2__.Sound.ClearAll();
        csharp__WEBPACK_IMPORTED_MODULE_2__.TouchMgr.ClearAll();
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
/* harmony import */ var csharp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! csharp */ "csharp");
/* harmony import */ var csharp__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(csharp__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _base_scene_BaseScene__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../base/scene/BaseScene */ "./src/base/scene/BaseScene.ts");
/* harmony import */ var _GameConfig__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../GameConfig */ "./src/GameConfig.ts");
/* harmony import */ var _ui_UIDebugBattle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ui/UIDebugBattle */ "./src/ui/UIDebugBattle.ts");




class SceneTest extends _base_scene_BaseScene__WEBPACK_IMPORTED_MODULE_1__.BaseScene {
    onInit() {
        //加载战斗UI
        _GameConfig__WEBPACK_IMPORTED_MODULE_2__.G.UIManager.openWindow("Debug", "DebugBattle", _ui_UIDebugBattle__WEBPACK_IMPORTED_MODULE_3__.UIDebugBattle);
        //加载摇杆UI
        csharp__WEBPACK_IMPORTED_MODULE_0__.TouchMgr.LoadJoystickPrefab();
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
            //初始化
            _GameConfig__WEBPACK_IMPORTED_MODULE_2__.G.InitGame();
            //加载主城场景
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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bUIsR0FBRyxDQUFDLFNBQVMsRUFBRSxVQUFVLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsU0FBUyxFQUFFLFVBQVUsQ0FBQyxDQUFDO0lBQy9GLENBQUM7SUFFTSxLQUFLLENBQUMsS0FBSztRQUVkLElBQUk7WUFDQSwyQ0FBTyxDQUFDLG9DQUFvQyxDQUFDLENBQUM7WUFFOUMsS0FBSztZQUNMLG1EQUFVLEVBQUUsQ0FBQztZQUViLFFBQVE7WUFDUixnRUFBdUIsQ0FBZ0IseURBQWdCLEVBQUUsK0RBQWEsQ0FBQyxDQUFDO1NBRTNFO1FBQUMsT0FBTyxFQUFFLEVBQUU7WUFDVCxnREFBWSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1NBQ3BCO0lBRUwsQ0FBQztJQUVNLGFBQWEsQ0FBQyxTQUFpQixFQUFFLFVBQWU7UUFFbkQsMkNBQU8sQ0FBQyxnQkFBZ0IsR0FBRyxTQUFTLENBQUM7UUFDckMsUUFBUSxTQUFTLEVBQUU7WUFDZixVQUFVO1lBQ1YsS0FBSyxnQkFBZ0I7Z0JBQ2pCLG1FQUEwQixFQUFFO2dCQUM1QixNQUFNO1NBQ2I7SUFDTCxDQUFDO0lBRU0saUJBQWlCO1FBQ3BCLDJDQUFPLENBQUMsa0NBQWtDLENBQUMsQ0FBQztJQUNoRCxDQUFDO0lBRU0sa0JBQWtCLENBQUMsV0FBb0I7UUFDMUMsMkNBQU8sQ0FBQyxzQ0FBc0MsR0FBRyxXQUFXLENBQUMsQ0FBQztJQUNsRSxDQUFDO0lBRU0sa0JBQWtCLENBQUMsV0FBb0I7UUFDMUMsMkNBQU8sQ0FBQyxzQ0FBc0MsR0FBRyxXQUFXLENBQUMsQ0FBQztJQUNsRSxDQUFDO0lBR00sU0FBUztRQUVaLFFBQVE7UUFDUix5RUFBZ0MsRUFBRTtRQUNsQywyQ0FBTyxDQUFDLDBCQUEwQixDQUFDLENBQUM7SUFDeEMsQ0FBQztDQUVKO0FBRUQsSUFBSSxRQUFRLEVBQUUsQ0FBQyxLQUFLLEVBQUUsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3RzcHJvamVjdC8uL3NyYy9HYW1lQ29uZmlnLnRzIiwid2VicGFjazovL3RzcHJvamVjdC8uL3NyYy9iYXNlL2NvbW1vbi9OaWNlRGVjb3JhdG9yLnRzIiwid2VicGFjazovL3RzcHJvamVjdC8uL3NyYy9iYXNlL2NvbW1vbi9TaW5nbGV0b24udHMiLCJ3ZWJwYWNrOi8vdHNwcm9qZWN0Ly4vc3JjL2Jhc2Uvc2NlbmUvQmFzZVNjZW5lLnRzIiwid2VicGFjazovL3RzcHJvamVjdC8uL3NyYy9iYXNlL3NjZW5lL1NjZW5lTG9hZGVyLnRzIiwid2VicGFjazovL3RzcHJvamVjdC8uL3NyYy9iYXNlL3VpL1VJQmFzZS50cyIsIndlYnBhY2s6Ly90c3Byb2plY3QvLi9zcmMvYmFzZS91aS9VSURlZmluZS50cyIsIndlYnBhY2s6Ly90c3Byb2plY3QvLi9zcmMvYmFzZS91aS9VSU1hbmFnZXIudHMiLCJ3ZWJwYWNrOi8vdHNwcm9qZWN0Ly4vc3JjL2Jhc2UvdWkvVUlQYW5lbC50cyIsIndlYnBhY2s6Ly90c3Byb2plY3QvLi9zcmMvYmFzZS91aS9VSVdpbmRvdy50cyIsIndlYnBhY2s6Ly90c3Byb2plY3QvLi9zcmMvc2NlbmUvU2NlbmVNYWluQ2l0eS50cyIsIndlYnBhY2s6Ly90c3Byb2plY3QvLi9zcmMvc2NlbmUvU2NlbmVUZXN0LnRzIiwid2VicGFjazovL3RzcHJvamVjdC8uL3NyYy91aS9VSURlYnVnQmF0dGxlLnRzIiwid2VicGFjazovL3RzcHJvamVjdC8uL3NyYy91aS9VSURlYnVnTWFpbi50cyIsIndlYnBhY2s6Ly90c3Byb2plY3QvZXh0ZXJuYWwgY29tbW9uanMyIFwiY3NoYXJwXCIiLCJ3ZWJwYWNrOi8vdHNwcm9qZWN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RzcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90c3Byb2plY3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RzcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RzcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RzcHJvamVjdC8uL3NyYy9HYW1lTWFpbi50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBVSU1hbmFnZXIgfSBmcm9tIFwiLi9iYXNlL3VpL1VJTWFuYWdlclwiO1xyXG5pbXBvcnQgeyBTY2VuZUxvYWRlciB9IGZyb20gXCIuL2Jhc2Uvc2NlbmUvU2NlbmVMb2FkZXJcIjtcclxuaW1wb3J0IHsgUGF1c2VIZWxwZXIsIFRpbWVTY2FsZUhlbHBlciwgWEdhbWVTZXR0aW5nLCBTb3VuZCwgVG91Y2hNZ3IgfSBmcm9tIFwiY3NoYXJwXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgR2FtZUNvbmZpZyB7XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBkZWJ1ZzogYm9vbGVhbiA9IHRydWU7XHJcbiAgICBwdWJsaWMgc3RhdGljIHJlYWxtU2VydmVySVA6IHN0cmluZyA9IFwiMTI3LjAuMC4xXCI7XHJcbiAgICBwdWJsaWMgc3RhdGljIHJlYWxtU2VydmVyUG9ydDogbnVtYmVyID0gOTAwMTtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFNjZW5lSUQge1xyXG4gICAgcHVibGljIHN0YXRpYyBNYWluQ2l0eSA9IFwiU2NlbmVzL01haW5jaXR5L01haW5jaXR5LnVuaXR5XCI7XHJcbiAgICBwdWJsaWMgc3RhdGljIFRlc3QgPSBcIlNjZW5lcy9UZXN0L1Rlc3QudW5pdHlcIjtcclxufVxyXG5cclxuLy/ljZXkvovlt6XlhbfnsbtcclxuZXhwb3J0IGNsYXNzIEcge1xyXG4gICAgcHVibGljIHN0YXRpYyBVSU1hbmFnZXIgPSBVSU1hbmFnZXIuSW5zdGFuY2UoVUlNYW5hZ2VyKTtcclxuICAgIHB1YmxpYyBzdGF0aWMgU2NlbmVMb2FkZXIgPSBTY2VuZUxvYWRlci5JbnN0YW5jZShTY2VuZUxvYWRlcik7XHJcblxyXG4gICAgLy/ov5vmuLjmiI/nm7jlhbPliJ3lp4vljJZcclxuICAgIHB1YmxpYyBzdGF0aWMgSW5pdEdhbWUoKSB7XHJcbiAgICAgICBcclxuICAgICAgICBYR2FtZVNldHRpbmcuSW5pdCgpO1xyXG4gICAgICAgIFNvdW5kLkluaXQoKTtcclxuICAgICAgICBUb3VjaE1nci5Jbml0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy/nprvlvIDlnLrmma/muIXnkIZcclxuICAgIHB1YmxpYyBzdGF0aWMgT25TY2VuZUxlYXZlKCkge1xyXG5cclxuICAgICAgICB0aGlzLlVJTWFuYWdlci5jbGVhckFsbCgpO1xyXG5cclxuICAgICAgICBQYXVzZUhlbHBlci5SZXZlcnQoKTtcclxuICAgICAgICBUaW1lU2NhbGVIZWxwZXIuUmVzZXRUaW1lU2NhbGUoKTtcclxuICAgICAgICBTb3VuZC5DbGVhckFsbCgpO1xyXG4gICAgICAgIFRvdWNoTWdyLkNsZWFyQWxsKCk7XHJcbiAgICB9XHJcbn1cclxuIiwiLy8gRmFpcnlHVUkg5YWD5Lu2IOe7keWumuWZqFxyXG5leHBvcnQgZnVuY3Rpb24gYmluZGVyKG5hbWU6c3RyaW5nKXtcclxuICAgIHJldHVybiBmdW5jdGlvbih0YXJnZXQ6YW55LCBrZXk6c3RyaW5nIHwgc3ltYm9sKXtcclxuICAgICAgICB0YXJnZXRbXCJiaW5kZXJzXCJdID0gdGFyZ2V0W1wiYmluZGVyc1wiXSB8fCB7fTtcclxuICAgICAgICB0YXJnZXRbXCJiaW5kZXJzXCJdW2tleV0gPSBuYW1lO1xyXG4gICAgfVxyXG59IiwiXHJcblxyXG5leHBvcnQgY2xhc3MgU2luZ2xldG9uPFQ+IHtcclxuXHJcbiAgICBwcml2YXRlIHN0YXRpYyBpbnN0YW5jZTogYW55ID0gbnVsbDtcclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIEluc3RhbmNlPFQ+KGM6IHsgbmV3KCk6IFQgfSk6IFQge1xyXG5cclxuICAgICAgICBpZiAodGhpcy5pbnN0YW5jZSA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaW5zdGFuY2UgPSBuZXcgYygpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaW5zdGFuY2U7XHJcbiAgICB9XHJcblxyXG59IiwiaW1wb3J0IHsgVW5pdHlFbmdpbmUgfSBmcm9tIFwiY3NoYXJwXCI7XHJcblxyXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgQmFzZVNjZW5lIHtcclxuXHJcbiAgICBwdWJsaWMgc2NlbmVOYW1lOiBzdHJpbmc7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHB1YmxpYyBhYnN0cmFjdCBvbkluaXQoKTtcclxuICAgIHB1YmxpYyBhYnN0cmFjdCBvbkVudGVyKCk7XHJcbiAgICBwdWJsaWMgYWJzdHJhY3Qgb25MZWF2ZSgpO1xyXG5cclxuICAgIHB1YmxpYyBvbkRlc3Ryb3koKSB7XHJcblxyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgRGJnLCBYUmVzb3VyY2UsIE1pc3Npb25DYWNoZSB9IGZyb20gXCJjc2hhcnBcIjtcclxuaW1wb3J0IHsgU2luZ2xldG9uIH0gZnJvbSBcIi4uL2NvbW1vbi9TaW5nbGV0b25cIjtcclxuaW1wb3J0IHsgQmFzZVNjZW5lIH0gZnJvbSBcIi4vQmFzZVNjZW5lXCI7XHJcbmltcG9ydCB7IEcgfSBmcm9tIFwiLi4vLi4vR2FtZUNvbmZpZ1wiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFNjZW5lTG9hZGVyIGV4dGVuZHMgU2luZ2xldG9uPFNjZW5lTG9hZGVyPntcclxuXHJcbiAgICBwcml2YXRlIGN1cnJlbnRTY2VuZTogQmFzZVNjZW5lID0gbnVsbDtcclxuICAgIHByaXZhdGUgYkNhY2hlZE1hdGVyaWFsOiBib29sZWFuID0gZmFsc2VcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgfVxyXG5cclxuICAgIC8v5Yqg6L295Zy65pmv77yIU2luZ2xl5qih5byP77yJXHJcbiAgICBwcml2YXRlIGFzeW5jIGxvYWRTY2VuZShzY2VuZU5tYWU6IHN0cmluZywgbW9kZTogQ1MuVW5pdHlFbmdpbmUuU2NlbmVNYW5hZ2VtZW50LkxvYWRTY2VuZU1vZGUsIG9uUHJvZ3Jlc3M/OiAobG9hZE5hbWU6IHN0cmluZywgbG9hZFByb2dyZXNzOiBudW1iZXIpID0+IHZvaWQpIHtcclxuXHJcbiAgICAgICAgRGJnLkxvZyhcIjxUUz4gc3RhcnQgbG9hZFNjZW5lIG92ZXLvvJpcIiArIHNjZW5lTm1hZSArIFwiIG1vZGU6XCIgKyBtb2RlKTtcclxuICAgICAgICBsZXQgcHJvbWlzZSA9IG5ldyBQcm9taXNlPGJvb2xlYW4+KHJlc292ZSA9PiB7XHJcbiAgICAgICAgICAgIFhSZXNvdXJjZS5Mb2FkU2NlbmUoc2NlbmVObWFlLCBtb2RlLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXNvdmUodHJ1ZSlcclxuXHJcbiAgICAgICAgICAgIH0sIChsb2FkU3RyLCBsb2FkUHJvZ3Jlc3MpID0+IHtcclxuICAgICAgICAgICAgICAgIC8v6L+b5bqm5Zue6LCDXHJcbiAgICAgICAgICAgICAgICBpZiAob25Qcm9ncmVzcyAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgb25Qcm9ncmVzcyhsb2FkU3RyLCBsb2FkUHJvZ3Jlc3MpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gcHJvbWlzZTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgcHVibGljIGFzeW5jIG9wZW5TY2VuZTxUIGV4dGVuZHMgQmFzZVNjZW5lPihzY2VuZTogc3RyaW5nLCBjbHM6IHsgbmV3KCk6IFQgfSkge1xyXG5cclxuICAgICAgICBEYmcuTG9nKFwiPFRTPiDlvIDlp4vliqDovb3lnLrmma/vvJpcIiArIHNjZW5lKTtcclxuICAgICAgICB0cnkge1xyXG5cclxuICAgICAgICAgICAgLy/muIXnkIbml6flnLrmma9cclxuICAgICAgICAgICAgdGhpcy51bmxvYWRDdXJyZW50U2NlbmUoKTtcclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLmJDYWNoZWRNYXRlcmlhbCA9PSBmYWxzZSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5iQ2FjaGVkTWF0ZXJpYWwgPSB0cnVlXHJcbiAgICAgICAgICAgICAgICBhd2FpdCB0aGlzLnByZWxvYWRNYXRlcmlhbHMoKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy/lvIDlp4vliqDovb3lnLrmma9cclxuICAgICAgICAgICAgYXdhaXQgdGhpcy5sb2FkU2NlbmUoc2NlbmUsIENTLlVuaXR5RW5naW5lLlNjZW5lTWFuYWdlbWVudC5Mb2FkU2NlbmVNb2RlLlNpbmdsZSk7XHJcblxyXG5cclxuICAgICAgICAgICAgLy/lnLrmma/nsbvlnotcclxuICAgICAgICAgICAgdGhpcy5jdXJyZW50U2NlbmUgPSBuZXcgY2xzKCk7XHJcbiAgICAgICAgICAgIHRoaXMuY3VycmVudFNjZW5lLnNjZW5lTmFtZSA9IHNjZW5lO1xyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRTY2VuZS5vbkVudGVyKCk7XHJcblxyXG4gICAgICAgICAgICAvL0luaXRcclxuICAgICAgICAgICAgYXdhaXQgdGhpcy5jdXJyZW50U2NlbmUub25Jbml0KClcclxuXHJcbiAgICAgICAgICAgIERiZy5Mb2coXCI8VFM+IGxvYWRTY2VuZSBvdmVy77yaXCIgKyBzY2VuZSk7XHJcblxyXG4gICAgICAgIH0gY2F0Y2ggKGV4KSB7XHJcbiAgICAgICAgICAgIERiZy5Mb2dFcnJvcihcImxvYWQgc2NlbmUgZXhjZXA6XCIgKyBleCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB1bmxvYWRDdXJyZW50U2NlbmUoKSB7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmN1cnJlbnRTY2VuZSkge1xyXG5cclxuICAgICAgICAgICAgdGhpcy5jdXJyZW50U2NlbmUub25MZWF2ZSgpO1xyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRTY2VuZS5vbkRlc3Ryb3koKTtcclxuICAgICAgICAgICAgdGhpcy5jdXJyZW50U2NlbmUgPSBudWxsO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy/lhajlsYDmuIXnkIZcclxuICAgICAgICBHLk9uU2NlbmVMZWF2ZSgpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwcml2YXRlIGFzeW5jIHByZWxvYWRNYXRlcmlhbHMoKSB7XHJcblxyXG4gICAgICAgIC8v6aKE5Yqg6L296ZyA6KaB55qE6LWE5rqQ77yI6L+Z5Liq6KaB57uZRG90c+eUqO+8jOmcgOimgeWcqEMj6YeM5a6M5oiQ77yJXHJcbiAgICAgICAgbGV0IHByb21pc2UgPSBuZXcgUHJvbWlzZTxib29sZWFuPihyZXNvdmUgPT4ge1xyXG5cclxuICAgICAgICAgICAgTWlzc2lvbkNhY2hlLlByZWxvYWRNaXNzaW9uKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHJlc292ZSh0cnVlKVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gcHJvbWlzZVxyXG4gICAgfVxyXG59IiwiXHJcbmV4cG9ydCBjbGFzcyBVSUJhc2Uge1xyXG5cclxuICAgIHB1YmxpYyBmdWk6IGFueTsgIC8vRmFpcnlHVUkg5a+56LGhXHJcblxyXG4gICAgLy/nu5HlrppGYWlyeUdVSeWFg+S7tlxyXG4gICAgcHVibGljIGJpbmRBbGwodGFyZ2V0OiBhbnkpOiB2b2lkIHtcclxuICAgICAgICBmb3IgKGxldCBrIGluIHRhcmdldFtcImJpbmRlcnNcIl0pIHtcclxuICAgICAgICAgICAgbGV0IGZndWlOYW1lID0gdGhpc1tcImJpbmRlcnNcIl1ba107XHJcbiAgICAgICAgICAgIHRoaXNba10gPSB0aGlzLmZ1aS5HZXRDaGlsZChmZ3VpTmFtZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiZXhwb3J0IGVudW0gVUlUeXBlRGVmIHtcclxuICAgIFVua293biA9IDAsXHJcbiAgICBXaW5kb3cgPSAxLFxyXG4gICAgV2lkZ2V0ID0gMixcclxuICAgIExvYWRpbmcgPSAzXHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBVSUxheWVyRGVmIHtcclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIEJhY2tncm91bmQ6IG51bWJlciA9IDA7XHJcbiAgICBwdWJsaWMgc3RhdGljIFBhZ2U6IG51bWJlciA9IDEwMDA7XHJcbiAgICBwdWJsaWMgc3RhdGljIE5vcm1hbFdpbmRvdzogbnVtYmVyID0gMjAwMDtcclxuICAgIHB1YmxpYyBzdGF0aWMgVG9wV2luZG93OiBudW1iZXIgPSAzMDAwO1xyXG4gICAgcHVibGljIHN0YXRpYyBXaWRnZXQ6IG51bWJlciA9IDQwMDA7XHJcbiAgICBwdWJsaWMgc3RhdGljIExvYWRpbmc6IG51bWJlciA9IDUwMDA7XHJcbiAgICBwdWJsaWMgc3RhdGljIFVua293bjogbnVtYmVyID0gOTk5OTtcclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGdldERlZmF1bHRMYXllcih0eXBlOiBVSVR5cGVEZWYpOiBudW1iZXIge1xyXG5cclxuICAgICAgICBzd2l0Y2ggKHR5cGUpIHtcclxuICAgICAgICAgICAgY2FzZSBVSVR5cGVEZWYuTG9hZGluZzogcmV0dXJuIHRoaXMuTG9hZGluZztcclxuICAgICAgICAgICAgY2FzZSBVSVR5cGVEZWYuV2lkZ2V0OiByZXR1cm4gdGhpcy5XaWRnZXQ7XHJcbiAgICAgICAgICAgIGNhc2UgVUlUeXBlRGVmLldpbmRvdzogcmV0dXJuIHRoaXMuTm9ybWFsV2luZG93O1xyXG4gICAgICAgICAgICBjYXNlIFVJVHlwZURlZi5Vbmtvd246IHJldHVybiB0aGlzLlVua293bjtcclxuICAgICAgICAgICAgZGVmYXVsdDogcmV0dXJuIHRoaXMuVW5rb3duO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuXHJcbmV4cG9ydCBjbGFzcyBVSUNvbURlZnMge1xyXG4gICAgcHVibGljIHN0YXRpYyBCYWNrQnRuID0gXCJiYWNrX2J0blwiO1xyXG4gICAgcHVibGljIHN0YXRpYyBXaW5kb3dDbG9zZUJ0biA9IFwid2luX2Nsb3NlX2J0blwiO1xyXG59XHJcblxyXG5cclxuIiwiXHJcbmltcG9ydCB7IFNpbmdsZXRvbiB9IGZyb20gJy4uL2NvbW1vbi9TaW5nbGV0b24nO1xyXG5pbXBvcnQgeyBVSVdpbmRvdyB9IGZyb20gJy4vVUlXaW5kb3cnO1xyXG5pbXBvcnQgeyBVSVdpZGdlIH0gZnJvbSAnLi9VSVdpZGdldCc7XHJcbmltcG9ydCB7IFVJUGFuZWwgfSBmcm9tICcuL1VJUGFuZWwnO1xyXG5pbXBvcnQgeyBEYmcsIEZVSUhlbHBlciB9IGZyb20gJ2NzaGFycCc7XHJcblxyXG5leHBvcnQgY2xhc3MgVUlNYW5hZ2VyIGV4dGVuZHMgU2luZ2xldG9uPFVJTWFuYWdlcj57XHJcblxyXG4gICAgcHJpdmF0ZSBtX2xpc3RMb2FkZWRQYW5lbDogQXJyYXk8VUlQYW5lbD47XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICB0aGlzLm1fbGlzdExvYWRlZFBhbmVsID0gbmV3IEFycmF5PFVJUGFuZWw+KCk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8v5Yqg6L29RmFpcnlHVUlQYWtjYWdlXHJcbiAgICBwdWJsaWMgYXN5bmMgbG9hZEZhaXJ5R1VJUGFja2FnZShwYWNrYWdlTmFtZTogc3RyaW5nKSB7XHJcblxyXG4gICAgICAgIGxldCBwcm9taXNlID0gbmV3IFByb21pc2U8Ym9vbGVhbj4ocmVzb3ZlID0+IHtcclxuXHJcbiAgICAgICAgICAgIEZVSUhlbHBlci5BZGRQYWNrYWdlKHBhY2thZ2VOYW1lLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXNvdmUodHJ1ZSlcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiBwcm9taXNlO1xyXG4gICAgfVxyXG5cclxuICAgIC8v6YeK5pS+RmFpcnlHVUlQYWNrYWdlXHJcbiAgICBwdWJsaWMgcmVsZWFzZUZhaXJ5R1VJUGFja2FnZShwYWNrYWdlTmFtZTogc3RyaW5nKSB7XHJcbiAgICAgICAgRlVJSGVscGVyLlJlbGVhc2VQYWNrYWdlKHBhY2thZ2VOYW1lKTtcclxuICAgIH1cclxuXHJcbiAgICAvL+WIm+W7ulVJ57G7XHJcbiAgICBwcml2YXRlIGNyZWF0ZVVJPFQgZXh0ZW5kcyBVSVBhbmVsPihwa2c6IHN0cmluZywgbmFtZTogc3RyaW5nLCBjbHM6IHsgbmV3KCk6IFQgfSk6IFVJUGFuZWwge1xyXG5cclxuICAgICAgICBsZXQgY29tcCA9IENTLkZhaXJ5R1VJLlVJUGFja2FnZS5DcmVhdGVPYmplY3QocGtnLCBuYW1lKS5hc0NvbVxyXG4gICAgICAgIGNvbXAuY29udGFpbmVyLmdhbWVPYmplY3QuQWRkQ29tcG9uZW50KHB1ZXIuJHR5cGVvZihDUy5GYWlyeUdVSS5VSUNvbnRlbnRTY2FsZXIpKVxyXG5cclxuICAgICAgICAvL1NpemXorr7nva7kuLpHUm9vdOeahFNpemVcclxuICAgICAgICB2YXIgcm9vdFNpemUgPSBDUy5GYWlyeUdVSS5HUm9vdC5pbnN0LnNpemU7XHJcbiAgICAgICAgY29tcC5TZXRTaXplKHJvb3RTaXplLngsIHJvb3RTaXplLnkpO1xyXG5cclxuICAgICAgICBsZXQgdWk6IFVJUGFuZWwgPSBuZXcgY2xzKCk7XHJcbiAgICAgICAgdWkuZnVpID0gY29tcDtcclxuICAgICAgICB1aS5uYW1lID0gbmFtZTtcclxuICAgICAgICB1aS5wa2dOYW1lID0gcGtnO1xyXG5cclxuICAgICAgICAvL+e7keWumkZhaXJ5R1VJ5o6n5Lu2XHJcbiAgICAgICAgdWkuYmluZEFsbCh1aSk7XHJcbiAgICAgICAgdWkuYXdha2UoKTtcclxuICAgICAgICByZXR1cm4gdWk7XHJcbiAgICB9XHJcblxyXG4gICAgLy9nZXQgUGFuZWwgYnkgbmFtZVxyXG4gICAgcHVibGljIGdldFBhbmVsVUkobmFtZTogc3RyaW5nKTogVUlQYW5lbCB7XHJcblxyXG4gICAgICAgIGZvciAoY29uc3QgcGFuZWwgb2YgdGhpcy5tX2xpc3RMb2FkZWRQYW5lbCkge1xyXG4gICAgICAgICAgICBpZiAocGFuZWwubmFtZSA9PSBuYW1lKSB7XHJcbiAgICAgICAgICAgICAgICBEYmcuTG9nKFwiZmluZCBwYW5lbCBpbiBjYWNoZTogXCIgKyBuYW1lKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBwYW5lbDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGFzeW5jIG9wZW48VCBleHRlbmRzIFVJUGFuZWw+KHBrZzogc3RyaW5nLCBuYW1lOiBzdHJpbmcsIGNsczogeyBuZXcoKTogVCB9LCBhcmc/OiBhbnkpIHtcclxuXHJcbiAgICAgICAgbGV0IHVpOiBVSVBhbmVsID0gdGhpcy5nZXRQYW5lbFVJKG5hbWUpO1xyXG5cclxuICAgICAgICBpZiAodWkgPT0gbnVsbCkge1xyXG5cclxuICAgICAgICAgICAgLy/liqDovb0gcGFja2FnZVxyXG4gICAgICAgICAgICBhd2FpdCB0aGlzLmxvYWRGYWlyeUdVSVBhY2thZ2UocGtnKTtcclxuICAgICAgICAgICAgdWkgPSB0aGlzLmNyZWF0ZVVJKHBrZywgbmFtZSwgY2xzKTtcclxuICAgICAgICAgICAgdGhpcy5tX2xpc3RMb2FkZWRQYW5lbC5wdXNoKHVpKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHVpLm9uQ3JlYXRlKGFyZyk7XHJcbiAgICAgICAgcmV0dXJuIHVpO1xyXG4gICAgfVxyXG5cclxuICAgIC8v5omT5byAV2luZG93XHJcbiAgICBwdWJsaWMgYXN5bmMgb3BlbldpbmRvdzxUIGV4dGVuZHMgVUlQYW5lbD4ocGtnOiBzdHJpbmcsIG5hbWU6IHN0cmluZywgY2xzOiB7IG5ldygpOiBUIH0sIGFyZz86IGFueSkge1xyXG5cclxuICAgICAgICBsZXQgdWk6IFVJUGFuZWwgPSBhd2FpdCB0aGlzLm9wZW4ocGtnLCBuYW1lLCBjbHMsIGFyZyk7XHJcblxyXG4gICAgICAgIGxldCB3aW5kb3cgPSB1aSBhcyBVSVdpbmRvdztcclxuICAgICAgICBpZiAod2luZG93ID09IG51bGwpIHtcclxuICAgICAgICAgICAgRGJnLkxvZ0Vycm9yKFwiRXJyb3IsIHVpIGlzIG5vdCB3aW5kb3csIGNsczpcIiArIGNscyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB3aW5kb3c7XHJcbiAgICB9XHJcblxyXG4gICAgLy/lhbPpl61XaW5kb3dcclxuICAgIHB1YmxpYyBjbG9zZVdpbmRvdyhuYW1lOiBzdHJpbmcsIGFyZzogYW55KSB7XHJcblxyXG4gICAgICAgIGxldCB1aTogVUlXaW5kb3cgPSB0aGlzLmdldFBhbmVsVUkobmFtZSkgYXMgVUlXaW5kb3c7XHJcbiAgICAgICAgaWYgKHVpICE9IG51bGwpIHtcclxuICAgICAgICAgICAgdWkuY2xvc2UoYXJnKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy/miZPlvIBXaWRpZ2V0XHJcbiAgICBwdWJsaWMgYXN5bmMgb3BlbldpZGdldDxUIGV4dGVuZHMgVUlQYW5lbD4ocGtnOiBzdHJpbmcsIG5hbWU6IHN0cmluZywgY2xzOiB7IG5ldygpOiBUIH0sIGFyZz86IGFueSkge1xyXG5cclxuICAgICAgICBsZXQgdWk6IFVJV2lkZ2UgPSBhd2FpdCB0aGlzLm9wZW4ocGtnLCBuYW1lLCBjbHMsIGFyZyk7XHJcbiAgICAgICAgcmV0dXJuIHVpO1xyXG4gICAgfVxyXG5cclxuICAgIC8v5YWz6ZetV2lkaWdldFxyXG4gICAgcHVibGljIGNsb3NlV2lkZ2V0KG5hbWU6IHN0cmluZywgYXJnOiBhbnkpIHtcclxuXHJcbiAgICAgICAgbGV0IHVpOiBVSVdpZGdlID0gdGhpcy5nZXRQYW5lbFVJKG5hbWUpIGFzIFVJV2lkZ2U7XHJcbiAgICAgICAgaWYgKHVpICE9IG51bGwpIHtcclxuICAgICAgICAgICAgdWkuY2xvc2UoYXJnKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBkaXN0cm95UGFuZWwocGFuZWw6IFVJUGFuZWwpIHtcclxuXHJcbiAgICAgICAgaWYgKHBhbmVsLmlzT3Blbikge1xyXG4gICAgICAgICAgICBwYW5lbC5jbG9zZSgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy/ljbjovb3otYTmupBcclxuICAgICAgICB0aGlzLnJlbGVhc2VGYWlyeUdVSVBhY2thZ2UocGFuZWwucGtnTmFtZSk7XHJcbiAgICAgICAgcGFuZWwuZGlzcG9zZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZGlzdHJveUFsbExvYWRlZFBhbmVsKCk6IHZvaWQge1xyXG4gICAgICAgIGZvciAobGV0IGkgPSB0aGlzLm1fbGlzdExvYWRlZFBhbmVsLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XHJcblxyXG4gICAgICAgICAgICBsZXQgcGFuZWwgPSB0aGlzLm1fbGlzdExvYWRlZFBhbmVsW2ldO1xyXG4gICAgICAgICAgICB0aGlzLmRpc3Ryb3lQYW5lbChwYW5lbCk7XHJcbiAgICAgICAgICAgIHRoaXMubV9saXN0TG9hZGVkUGFuZWwuc3BsaWNlKGksIDEpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvL+WIoOmZpOaJgOaciVVJUGFuZWxcclxuICAgIHB1YmxpYyBjbGVhckFsbCgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmRpc3Ryb3lBbGxMb2FkZWRQYW5lbCgpO1xyXG4gICAgICAgIHRoaXMubV9saXN0TG9hZGVkUGFuZWwubGVuZ3RoID0gMDtcclxuICAgIH1cclxuXHJcbiAgICAvL+W9k+WIhui+qOeOh+aUueWPmOaXtlxyXG4gICAgcHVibGljIG9uU3RhZ2VSZXNpemVkKCk6dm9pZHtcclxuXHJcbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IHRoaXMubV9saXN0TG9hZGVkUGFuZWwubGVuZ3RoOyBpKyspe1xyXG4gICAgICAgICAgICB2YXIgcm9vdFNpemUgPSBDUy5GYWlyeUdVSS5HUm9vdC5pbnN0LnNpemU7XHJcbiAgICAgICAgICAgIHRoaXMubV9saXN0TG9hZGVkUGFuZWxbaV0uZnVpLlNldFNpemUocm9vdFNpemUueCwgcm9vdFNpemUueSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgVUlUeXBlRGVmLCBVSUxheWVyRGVmIH0gZnJvbSBcIi4vVUlEZWZpbmVcIjtcclxuaW1wb3J0IHsgRGJnLCBGYWlyeUdVSSB9IGZyb20gXCJjc2hhcnBcIjtcclxuaW1wb3J0IHsgVUlCYXNlIH0gZnJvbSBcIi4vVUlCYXNlXCI7XHJcblxyXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgVUlQYW5lbCBleHRlbmRzIFVJQmFzZSB7XHJcblxyXG4gICAgcHVibGljIHBrZ05hbWU6IHN0cmluZztcclxuICAgIHByaXZhdGUgX25hbWU6IHN0cmluZztcclxuXHJcbiAgICBwdWJsaWMgc2V0IG5hbWUodjogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5fbmFtZSA9IHY7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldCBuYW1lKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX25hbWU7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldCB1aVR5cGUoKTogVUlUeXBlRGVmIHtcclxuICAgICAgICByZXR1cm4gVUlUeXBlRGVmLlVua293bjtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIG1fbGF5ZXI6IFVJTGF5ZXJEZWYgPSBVSUxheWVyRGVmLlVua293bjtcclxuICAgIHB1YmxpYyBnZXQgbGF5ZXIoKTogVUlMYXllckRlZiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubV9sYXllcjtcclxuICAgIH1cclxuICAgIHB1YmxpYyBzZXQgbGF5ZXIodjogVUlMYXllckRlZikge1xyXG4gICAgICAgIHRoaXMubV9sYXllciA9IHY7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldCBpc09wZW4oKTogYm9vbGVhbiB7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLmZ1aS52aXNpYmxlO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZXQgdmlzaWJsZShpc0FjdGl2YXRlOiBib29sZWFuKSB7XHJcblxyXG4gICAgICAgIHRoaXMuZnVpLnZpc2libGUgPSBpc0FjdGl2YXRlO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBvbkNyZWF0ZShhcmc6IGFueSk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMubGF5ZXIgPSBVSUxheWVyRGVmLmdldERlZmF1bHRMYXllcih0aGlzLnVpVHlwZSk7XHJcbiAgICAgICAgRmFpcnlHVUkuR1Jvb3QuaW5zdC5BZGRDaGlsZCh0aGlzLmZ1aSk7XHJcbiAgICAgICAgdGhpcy5vblNob3coYXJnKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYWJzdHJhY3Qgb25Bd2FrZSgpOiB2b2lkO1xyXG4gICAgcHVibGljIGFic3RyYWN0IG9uU2hvdyh2bz86IGFueSk6IHZvaWQ7XHJcbiAgICBwdWJsaWMgYWJzdHJhY3Qgb25DbG9zZShhcmc/OiBhbnkpOiB2b2lkO1xyXG5cclxuICAgIHB1YmxpYyBvbkRpc3Bvc2UoKSB7IFxyXG5cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgb25VcGRhdGUoKTogdm9pZCB7IFxyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBhd2FrZSgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLm9uQXdha2UoKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgdXBkYXRlKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMub25VcGRhdGUoKTtcclxuICAgIH1cclxuXHJcblxyXG5cclxuICAgIHB1YmxpYyBjbG9zZShhcmc6IGFueSA9IG51bGwpOiB2b2lkIHtcclxuXHJcbiAgICAgICAgdGhpcy5vbkNsb3NlKGFyZyk7XHJcbiAgICAgICAgRmFpcnlHVUkuR1Jvb3QuaW5zdC5SZW1vdmVDaGlsZCh0aGlzLmZ1aSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGRpc3Bvc2UoKTogdm9pZCB7XHJcblxyXG4gICAgICAgIHRoaXMuZnVpLkRpc3Bvc2UoKTtcclxuICAgICAgICB0aGlzLm9uRGlzcG9zZSgpO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgVUlQYW5lbCB9IGZyb20gXCIuL1VJUGFuZWxcIjtcclxuaW1wb3J0IHsgVUlUeXBlRGVmLCBVSUNvbURlZnMgfSBmcm9tIFwiLi9VSURlZmluZVwiO1xyXG5pbXBvcnQgeyBGYWlyeUdVSSB9IGZyb20gXCJjc2hhcnBcIjtcclxuXHJcblxyXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgVUlXaW5kb3cgZXh0ZW5kcyBVSVBhbmVsIHtcclxuXHJcbiAgICBwdWJsaWMgZ2V0IHVpVHlwZSgpOiBVSVR5cGVEZWYge1xyXG4gICAgICAgIHJldHVybiBVSVR5cGVEZWYuV2luZG93O1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgbV9idG5DbG9zZTogRmFpcnlHVUkuR0J1dHRvbjtcclxuXHJcbiAgICBwdWJsaWMgb25Bd2FrZSgpOiB2b2lkIHtcclxuXHJcbiAgICAgICAgdGhpcy5tX2J0bkNsb3NlID0gdGhpcy5mdWkuR2V0Q2hpbGQoVUlDb21EZWZzLldpbmRvd0Nsb3NlQnRuKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgb25TaG93KGFyZzogYW55KTogdm9pZCB7XHJcblxyXG4gICAgICAgIHRoaXMuZnVpLnggPSBGYWlyeUdVSS5HUm9vdC5pbnN0LndpZHRoIC8gMiAtIHRoaXMuZnVpLndpZHRoIC8gMjtcclxuICAgICAgICB0aGlzLmZ1aS55ID0gRmFpcnlHVUkuR1Jvb3QuaW5zdC5oZWlnaHQgLyAyIC0gdGhpcy5mdWkuaGVpZ2h0IC8gMjtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMubV9idG5DbG9zZSAhPSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgdGhpcy5tX2J0bkNsb3NlLm9uQ2xpY2suQWRkKHRoaXMub25CdG5DbG9zZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuICAgIHB1YmxpYyBvbkNsb3NlKGFyZzogYW55KTogdm9pZCB7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLm1fYnRuQ2xvc2UgIT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHRoaXMubV9idG5DbG9zZS5vbkNsaWNrLlJlbW92ZSh0aGlzLm9uQnRuQ2xvc2UpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIG9uQnRuQ2xvc2UoKSB7XHJcbiAgICAgICAgdGhpcy5jbG9zZSgwKTtcclxuICAgIH1cclxuXHJcbn0iLCJpbXBvcnQgeyBCYXNlU2NlbmUgfSBmcm9tIFwiLi4vYmFzZS9zY2VuZS9CYXNlU2NlbmVcIjtcclxuaW1wb3J0IHsgRyB9IGZyb20gXCIuLi9HYW1lQ29uZmlnXCI7XHJcbmltcG9ydCB7IFVJRGVidWdNYWluIH0gZnJvbSAnLi4vdWkvVUlEZWJ1Z01haW4nO1xyXG5cclxuZXhwb3J0IGNsYXNzIFNjZW5lTWFpbkNpdHkgZXh0ZW5kcyBCYXNlU2NlbmUge1xyXG5cclxuICAgIHB1YmxpYyBvbkluaXQoKSB7XHJcblxyXG4gICAgICAgIC8v5Li75Z+O5Zy65pmv5pi+56S6dWlcclxuICAgICAgICBHLlVJTWFuYWdlci5vcGVuV2luZG93PFVJRGVidWdNYWluPihcIkRlYnVnXCIsIFwiRGVidWdNYWluXCIsIFVJRGVidWdNYWluKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgb25FbnRlcigpIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG9uTGVhdmUoKSB7XHJcblxyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7IE1pc3Npb25DYWNoZSwgVG91Y2hNZ3IgfSBmcm9tIFwiY3NoYXJwXCI7XHJcbmltcG9ydCB7IEJhc2VTY2VuZSB9IGZyb20gXCIuLi9iYXNlL3NjZW5lL0Jhc2VTY2VuZVwiO1xyXG5pbXBvcnQgeyBHIH0gZnJvbSBcIi4uL0dhbWVDb25maWdcIjtcclxuaW1wb3J0IHsgVUlEZWJ1Z0JhdHRsZSB9IGZyb20gJy4uL3VpL1VJRGVidWdCYXR0bGUnO1xyXG5cclxuZXhwb3J0IGNsYXNzIFNjZW5lVGVzdCBleHRlbmRzIEJhc2VTY2VuZSB7XHJcblxyXG4gICAgcHVibGljIG9uSW5pdCgpIHtcclxuXHJcbiAgICAgICAgLy/liqDovb3miJjmlpdVSVxyXG4gICAgICAgIEcuVUlNYW5hZ2VyLm9wZW5XaW5kb3c8VUlEZWJ1Z0JhdHRsZT4oXCJEZWJ1Z1wiLCBcIkRlYnVnQmF0dGxlXCIsIFVJRGVidWdCYXR0bGUpO1xyXG5cclxuICAgICAgICAvL+WKoOi9veaRh+adhlVJXHJcbiAgICAgICAgVG91Y2hNZ3IuTG9hZEpveXN0aWNrUHJlZmFiKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG9uRW50ZXIoKSB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBvbkxlYXZlKCkge1xyXG5cclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgeyBEYmcsIEZhaXJ5R1VJLCBYR2FtZVNldHRpbmcgfSBmcm9tIFwiY3NoYXJwXCI7XHJcbmltcG9ydCB7IFVJV2luZG93IH0gZnJvbSBcIi4uL2Jhc2UvdWkvVUlXaW5kb3dcIjtcclxuaW1wb3J0IHsgYmluZGVyIH0gZnJvbSBcIi4uL2Jhc2UvY29tbW9uL05pY2VEZWNvcmF0b3JcIjtcclxuaW1wb3J0IHsgRywgU2NlbmVJRCB9IGZyb20gXCIuLi9HYW1lQ29uZmlnXCI7XHJcbmltcG9ydCB7IFNjZW5lTWFpbkNpdHkgfSBmcm9tIFwiLi4vc2NlbmUvU2NlbmVNYWluQ2l0eVwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFVJRGVidWdCYXR0bGUgZXh0ZW5kcyBVSVdpbmRvdyB7XHJcblxyXG4gICAgQGJpbmRlcihcImJ0bkV4aXRcIilcclxuICAgIHByaXZhdGUgbV9idG5FeGl0OiBGYWlyeUdVSS5HQnV0dG9uO1xyXG5cclxuICAgIHB1YmxpYyBvbkF3YWtlKCk6IHZvaWQge1xyXG4gICAgICAgIHN1cGVyLm9uQXdha2UoKTtcclxuXHJcbiAgICAgICAgdGhpcy5tX2J0bkV4aXQub25DbGljay5BZGQoKCkgPT4ge1xyXG4gICAgICAgICAgICBHLlNjZW5lTG9hZGVyLm9wZW5TY2VuZTxTY2VuZU1haW5DaXR5PihTY2VuZUlELk1haW5DaXR5LCBTY2VuZU1haW5DaXR5KVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBvblNob3codm86IGFueSk6IHZvaWQge1xyXG4gICAgICAgIHN1cGVyLm9uU2hvdyh2byk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG9uQ2xvc2UoYXJnOiBhbnkpOiB2b2lkIHtcclxuICAgICAgICBzdXBlci5vbkNsb3NlKGFyZyk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBEYmcsIEZhaXJ5R1VJLCBYR2FtZVNldHRpbmcgfSBmcm9tIFwiY3NoYXJwXCI7XHJcbmltcG9ydCB7IFVJV2luZG93IH0gZnJvbSBcIi4uL2Jhc2UvdWkvVUlXaW5kb3dcIjtcclxuaW1wb3J0IHsgYmluZGVyIH0gZnJvbSBcIi4uL2Jhc2UvY29tbW9uL05pY2VEZWNvcmF0b3JcIjtcclxuaW1wb3J0IHsgRywgU2NlbmVJRCB9IGZyb20gXCIuLi9HYW1lQ29uZmlnXCI7XHJcbmltcG9ydCB7IFNjZW5lVGVzdCB9IGZyb20gXCIuLi9zY2VuZS9TY2VuZVRlc3RcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBVSURlYnVnTWFpbiBleHRlbmRzIFVJV2luZG93IHtcclxuXHJcbiAgICBAYmluZGVyKFwiYnRuRmlnaHRcIilcclxuICAgIHByaXZhdGUgbV9idG5GaWdodDogRmFpcnlHVUkuR0J1dHRvbjtcclxuXHJcbiAgICBAYmluZGVyKFwiYnRuUmVzb2x1dGlvbjFcIilcclxuICAgIHByaXZhdGUgbV9idG5SZXNvbHV0aW9uMTogRmFpcnlHVUkuR0J1dHRvbjtcclxuXHJcbiAgICBAYmluZGVyKFwiYnRuUmVzb2x1dGlvbjJcIilcclxuICAgIHByaXZhdGUgbV9idG5SZXNvbHV0aW9uMjogRmFpcnlHVUkuR0J1dHRvbjtcclxuXHJcbiAgICBAYmluZGVyKFwiYnRuUmVzb2x1dGlvbjNcIilcclxuICAgIHByaXZhdGUgbV9idG5SZXNvbHV0aW9uMzogRmFpcnlHVUkuR0J1dHRvbjtcclxuXHJcblxyXG4gICAgcHVibGljIG9uQXdha2UoKTogdm9pZCB7XHJcbiAgICAgICAgc3VwZXIub25Bd2FrZSgpO1xyXG5cclxuICAgICAgICB0aGlzLm1fYnRuRmlnaHQub25DbGljay5BZGQoKCkgPT4ge1xyXG4gICAgICAgICAgICBHLlNjZW5lTG9hZGVyLm9wZW5TY2VuZTxTY2VuZVRlc3Q+KFNjZW5lSUQuVGVzdCwgU2NlbmVUZXN0KVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgXHJcbiAgICAgICAgdGhpcy5tX2J0blJlc29sdXRpb24xLm9uQ2xpY2suQWRkKCgpID0+IHtcclxuICAgICAgICAgICAgWEdhbWVTZXR0aW5nLlhSZXNvbHV0aW9uID0gWEdhbWVTZXR0aW5nLkVudW1SZXNvbHV0aW9uLkxvdztcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGhpcy5tX2J0blJlc29sdXRpb24yLm9uQ2xpY2suQWRkKCgpID0+IHtcclxuICAgICAgICAgICAgWEdhbWVTZXR0aW5nLlhSZXNvbHV0aW9uID0gWEdhbWVTZXR0aW5nLkVudW1SZXNvbHV0aW9uLk1pZDtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGhpcy5tX2J0blJlc29sdXRpb24zLm9uQ2xpY2suQWRkKCgpID0+IHtcclxuICAgICAgICAgICAgWEdhbWVTZXR0aW5nLlhSZXNvbHV0aW9uID0gWEdhbWVTZXR0aW5nLkVudW1SZXNvbHV0aW9uLkhpZ2g7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG9uU2hvdyh2bzogYW55KTogdm9pZCB7XHJcbiAgICAgICAgc3VwZXIub25TaG93KHZvKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgb25DbG9zZShhcmc6IGFueSk6IHZvaWQge1xyXG4gICAgICAgIHN1cGVyLm9uQ2xvc2UoYXJnKTtcclxuICAgIH1cclxufSIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNzaGFycFwiKTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgRGJnLCBKc01hbmFnZXJ9IGZyb20gJ2NzaGFycCc7XHJcbmltcG9ydCB7IFNjZW5lTWFpbkNpdHkgfSBmcm9tICcuL3NjZW5lL1NjZW5lTWFpbkNpdHknO1xyXG5pbXBvcnQgeyBHLCBTY2VuZUlEIH0gZnJvbSAnLi9HYW1lQ29uZmlnJztcclxuXHJcblxyXG4vL+exu+S8vOS7peWJjeeahEdhbWVXb3JsZC5jc1xyXG5jbGFzcyBHYW1lTWFpbiB7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgSnNNYW5hZ2VyLkpzT25BcHBsaWNhdGlvblF1aXQgPSAoKSA9PiB0aGlzLm9uQXBwbGljYXRpb25RdWl0KCk7XHJcbiAgICAgICAgSnNNYW5hZ2VyLkpzT25EaXNwb3NlID0gKCkgPT4gdGhpcy5vbkRpc3Bvc2UoKTtcclxuICAgICAgICBKc01hbmFnZXIuSnNPbkFwcGxpY2F0aW9uRm9jdXMgPSAoc3RhdHVzUGFyYW0pID0+IHRoaXMub25BcHBsaWNhdGlvbkZvY3VzKHN0YXR1c1BhcmFtKTtcclxuICAgICAgICBKc01hbmFnZXIuSnNPbkFwcGxpY2F0aW9uUGF1c2UgPSAoc3RhdHVzUGFyYW0pID0+IHRoaXMub25BcHBsaWNhdGlvblBhdXNlKHN0YXR1c1BhcmFtKTtcclxuICAgICAgICBKc01hbmFnZXIuSlNEb0V2ZW50ID0gKGV2ZW50TmFtZSwgZXZlbnRQYXJhbSkgPT4gdGhpcy5vbkNTaGFycEV2ZW50KGV2ZW50TmFtZSwgZXZlbnRQYXJhbSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGFzeW5jIHN0YXJ0KCkge1xyXG5cclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBEYmcuTG9nKFwiIyMjIyMjIOWIneWni+WMllRTOiBHYW1lIHN0YXJ0IGluIEpTLi4uLlwiKTtcclxuXHJcbiAgICAgICAgICAgIC8v5Yid5aeL5YyWXHJcbiAgICAgICAgICAgIEcuSW5pdEdhbWUoKTtcclxuICAgICAgICAgICBcclxuICAgICAgICAgICAgLy/liqDovb3kuLvln47lnLrmma9cclxuICAgICAgICAgICAgRy5TY2VuZUxvYWRlci5vcGVuU2NlbmU8U2NlbmVNYWluQ2l0eT4oU2NlbmVJRC5NYWluQ2l0eSwgU2NlbmVNYWluQ2l0eSk7XHJcblxyXG4gICAgICAgIH0gY2F0Y2ggKGV4KSB7XHJcbiAgICAgICAgICAgIERiZy5Mb2dFcnJvcihleCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgb25DU2hhcnBFdmVudChldmVudE5hbWU6IHN0cmluZywgZXZlbnRQYXJhbTogYW55KSB7XHJcblxyXG4gICAgICAgIERiZy5Mb2coXCJvbkNTaGFycEV2ZW50OlwiICsgZXZlbnROYW1lKVxyXG4gICAgICAgIHN3aXRjaCAoZXZlbnROYW1lKSB7XHJcbiAgICAgICAgICAgIC8vRlVJ5YiG6L6o546H5pS55Y+YXHJcbiAgICAgICAgICAgIGNhc2UgXCJvblN0YWdlUmVzaXplZFwiOlxyXG4gICAgICAgICAgICAgICAgRy5VSU1hbmFnZXIub25TdGFnZVJlc2l6ZWQoKVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBvbkFwcGxpY2F0aW9uUXVpdCgpOiB2b2lkIHtcclxuICAgICAgICBEYmcuTG9nKFwiR2FtZSBvbkFwcGxpY2F0aW9uUXVpdCBpbiBKUy4uLi5cIik7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG9uQXBwbGljYXRpb25Gb2N1cyhzdGF0dXNQYXJhbTogYm9vbGVhbikge1xyXG4gICAgICAgIERiZy5Mb2coXCJHYW1lIE9uQXBwbGljYXRpb25Gb2N1cyBzdGF0dXNQYXJhbTpcIiArIHN0YXR1c1BhcmFtKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgb25BcHBsaWNhdGlvblBhdXNlKHN0YXR1c1BhcmFtOiBib29sZWFuKSB7XHJcbiAgICAgICAgRGJnLkxvZyhcIkdhbWUgT25BcHBsaWNhdGlvblBhdXNlIHN0YXR1c1BhcmFtOlwiICsgc3RhdHVzUGFyYW0pO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwdWJsaWMgb25EaXNwb3NlKCk6IHZvaWQge1xyXG5cclxuICAgICAgICAvL+WNuOi9veW9k+WJjeWcuuaZr1xyXG4gICAgICAgIEcuU2NlbmVMb2FkZXIudW5sb2FkQ3VycmVudFNjZW5lKClcclxuICAgICAgICBEYmcuTG9nKFwiR2FtZSBvbkRpc3Bvc2UgaW4gSlMuLi4uXCIpO1xyXG4gICAgfVxyXG5cclxufVxyXG5cclxubmV3IEdhbWVNYWluKCkuc3RhcnQoKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=