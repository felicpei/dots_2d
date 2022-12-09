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
/* harmony export */   "GameConfig": () => (/* binding */ GameConfig)
/* harmony export */ });
/* harmony import */ var _base_ui_UIManager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base/ui/UIManager */ "./src/base/ui/UIManager.ts");

class GameConfig {
}
GameConfig.debug = true;
GameConfig.realmServerIP = "127.0.0.1";
GameConfig.realmServerPort = 9001;
//单例工具类
class G {
}
G.UIManager = _base_ui_UIManager__WEBPACK_IMPORTED_MODULE_0__.UIManager.Instance(_base_ui_UIManager__WEBPACK_IMPORTED_MODULE_0__.UIManager);


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
    //删除所有UIPanel
    closeAllPanels() {
        this.distroyAllLoadedPanel();
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
    clearAll() {
        this.distroyAllLoadedPanel();
        this.m_listLoadedPanel.length = 0;
    }
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
            csharp__WEBPACK_IMPORTED_MODULE_0__.Dbg.Log("onClickFight");
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
/* harmony import */ var _GameConfig__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GameConfig */ "./src/GameConfig.ts");
/* harmony import */ var _ui_UIDebugMain__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ui/UIDebugMain */ "./src/ui/UIDebugMain.ts");



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
            //加载主城场景
            _GameConfig__WEBPACK_IMPORTED_MODULE_1__.G.UIManager.openWindow("Debug", "DebugMain", _ui_UIDebugMain__WEBPACK_IMPORTED_MODULE_2__.UIDebugMain);
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
                _GameConfig__WEBPACK_IMPORTED_MODULE_1__.G.UIManager.onStageResized();
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
        csharp__WEBPACK_IMPORTED_MODULE_0__.Dbg.Log("Game onDispose in JS....");
    }
}
new GameMain().start();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RCwyQ0FBTyxDQUFDLGdCQUFnQixHQUFHLFNBQVMsQ0FBQztRQUNyQyxRQUFRLFNBQVMsRUFBRTtZQUNmLFVBQVU7WUFDVixLQUFLLGdCQUFnQjtnQkFDakIsbUVBQTBCLEVBQUU7Z0JBQzVCLE1BQU07U0FDYjtJQUNMLENBQUM7SUFFTSxpQkFBaUI7UUFDcEIsMkNBQU8sQ0FBQyxrQ0FBa0MsQ0FBQyxDQUFDO0lBQ2hELENBQUM7SUFFTSxrQkFBa0IsQ0FBQyxXQUFvQjtRQUMxQywyQ0FBTyxDQUFDLHNDQUFzQyxHQUFHLFdBQVcsQ0FBQyxDQUFDO0lBQ2xFLENBQUM7SUFFTSxrQkFBa0IsQ0FBQyxXQUFvQjtRQUMxQywyQ0FBTyxDQUFDLHNDQUFzQyxHQUFHLFdBQVcsQ0FBQyxDQUFDO0lBQ2xFLENBQUM7SUFHTSxTQUFTO1FBQ1osMkNBQU8sQ0FBQywwQkFBMEIsQ0FBQyxDQUFDO0lBQ3hDLENBQUM7Q0FFSjtBQUVELElBQUksUUFBUSxFQUFFLENBQUMsS0FBSyxFQUFFLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90c3Byb2plY3QvLi9zcmMvR2FtZUNvbmZpZy50cyIsIndlYnBhY2s6Ly90c3Byb2plY3QvLi9zcmMvYmFzZS9jb21tb24vTmljZURlY29yYXRvci50cyIsIndlYnBhY2s6Ly90c3Byb2plY3QvLi9zcmMvYmFzZS9jb21tb24vU2luZ2xldG9uLnRzIiwid2VicGFjazovL3RzcHJvamVjdC8uL3NyYy9iYXNlL3VpL1VJQmFzZS50cyIsIndlYnBhY2s6Ly90c3Byb2plY3QvLi9zcmMvYmFzZS91aS9VSURlZmluZS50cyIsIndlYnBhY2s6Ly90c3Byb2plY3QvLi9zcmMvYmFzZS91aS9VSU1hbmFnZXIudHMiLCJ3ZWJwYWNrOi8vdHNwcm9qZWN0Ly4vc3JjL2Jhc2UvdWkvVUlQYW5lbC50cyIsIndlYnBhY2s6Ly90c3Byb2plY3QvLi9zcmMvYmFzZS91aS9VSVdpbmRvdy50cyIsIndlYnBhY2s6Ly90c3Byb2plY3QvLi9zcmMvdWkvVUlEZWJ1Z01haW4udHMiLCJ3ZWJwYWNrOi8vdHNwcm9qZWN0L2V4dGVybmFsIGNvbW1vbmpzMiBcImNzaGFycFwiIiwid2VicGFjazovL3RzcHJvamVjdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90c3Byb2plY3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdHNwcm9qZWN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90c3Byb2plY3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90c3Byb2plY3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90c3Byb2plY3QvLi9zcmMvR2FtZU1haW4udHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVUlNYW5hZ2VyIH0gZnJvbSBcIi4vYmFzZS91aS9VSU1hbmFnZXJcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBHYW1lQ29uZmlnIHtcclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGRlYnVnOiBib29sZWFuID0gdHJ1ZTtcclxuICAgIHB1YmxpYyBzdGF0aWMgcmVhbG1TZXJ2ZXJJUDogc3RyaW5nID0gXCIxMjcuMC4wLjFcIjtcclxuICAgIHB1YmxpYyBzdGF0aWMgcmVhbG1TZXJ2ZXJQb3J0OiBudW1iZXIgPSA5MDAxO1xyXG5cclxufVxyXG5cclxuLy/ljZXkvovlt6XlhbfnsbtcclxuZXhwb3J0IGNsYXNzIEcge1xyXG4gICAgcHVibGljIHN0YXRpYyBVSU1hbmFnZXIgPSBVSU1hbmFnZXIuSW5zdGFuY2UoVUlNYW5hZ2VyKTtcclxufVxyXG4iLCIvLyBGYWlyeUdVSSDlhYPku7Yg57uR5a6a5ZmoXHJcbmV4cG9ydCBmdW5jdGlvbiBiaW5kZXIobmFtZTpzdHJpbmcpe1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uKHRhcmdldDphbnksIGtleTpzdHJpbmcgfCBzeW1ib2wpe1xyXG4gICAgICAgIHRhcmdldFtcImJpbmRlcnNcIl0gPSB0YXJnZXRbXCJiaW5kZXJzXCJdIHx8IHt9O1xyXG4gICAgICAgIHRhcmdldFtcImJpbmRlcnNcIl1ba2V5XSA9IG5hbWU7XHJcbiAgICB9XHJcbn0iLCJcclxuXHJcbmV4cG9ydCBjbGFzcyBTaW5nbGV0b248VD4ge1xyXG5cclxuICAgIHByaXZhdGUgc3RhdGljIGluc3RhbmNlOiBhbnkgPSBudWxsO1xyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgSW5zdGFuY2U8VD4oYzogeyBuZXcoKTogVCB9KTogVCB7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmluc3RhbmNlID09IG51bGwpIHtcclxuICAgICAgICAgICAgdGhpcy5pbnN0YW5jZSA9IG5ldyBjKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5pbnN0YW5jZTtcclxuICAgIH1cclxuXHJcbn0iLCJcclxuZXhwb3J0IGNsYXNzIFVJQmFzZSB7XHJcblxyXG4gICAgcHVibGljIGZ1aTogYW55OyAgLy9GYWlyeUdVSSDlr7nosaFcclxuXHJcbiAgICAvL+e7keWumkZhaXJ5R1VJ5YWD5Lu2XHJcbiAgICBwdWJsaWMgYmluZEFsbCh0YXJnZXQ6IGFueSk6IHZvaWQge1xyXG4gICAgICAgIGZvciAobGV0IGsgaW4gdGFyZ2V0W1wiYmluZGVyc1wiXSkge1xyXG4gICAgICAgICAgICBsZXQgZmd1aU5hbWUgPSB0aGlzW1wiYmluZGVyc1wiXVtrXTtcclxuICAgICAgICAgICAgdGhpc1trXSA9IHRoaXMuZnVpLkdldENoaWxkKGZndWlOYW1lKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCJleHBvcnQgZW51bSBVSVR5cGVEZWYge1xyXG4gICAgVW5rb3duID0gMCxcclxuICAgIFdpbmRvdyA9IDEsXHJcbiAgICBXaWRnZXQgPSAyLFxyXG4gICAgTG9hZGluZyA9IDNcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFVJTGF5ZXJEZWYge1xyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgQmFja2dyb3VuZDogbnVtYmVyID0gMDtcclxuICAgIHB1YmxpYyBzdGF0aWMgUGFnZTogbnVtYmVyID0gMTAwMDtcclxuICAgIHB1YmxpYyBzdGF0aWMgTm9ybWFsV2luZG93OiBudW1iZXIgPSAyMDAwO1xyXG4gICAgcHVibGljIHN0YXRpYyBUb3BXaW5kb3c6IG51bWJlciA9IDMwMDA7XHJcbiAgICBwdWJsaWMgc3RhdGljIFdpZGdldDogbnVtYmVyID0gNDAwMDtcclxuICAgIHB1YmxpYyBzdGF0aWMgTG9hZGluZzogbnVtYmVyID0gNTAwMDtcclxuICAgIHB1YmxpYyBzdGF0aWMgVW5rb3duOiBudW1iZXIgPSA5OTk5O1xyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0RGVmYXVsdExheWVyKHR5cGU6IFVJVHlwZURlZik6IG51bWJlciB7XHJcblxyXG4gICAgICAgIHN3aXRjaCAodHlwZSkge1xyXG4gICAgICAgICAgICBjYXNlIFVJVHlwZURlZi5Mb2FkaW5nOiByZXR1cm4gdGhpcy5Mb2FkaW5nO1xyXG4gICAgICAgICAgICBjYXNlIFVJVHlwZURlZi5XaWRnZXQ6IHJldHVybiB0aGlzLldpZGdldDtcclxuICAgICAgICAgICAgY2FzZSBVSVR5cGVEZWYuV2luZG93OiByZXR1cm4gdGhpcy5Ob3JtYWxXaW5kb3c7XHJcbiAgICAgICAgICAgIGNhc2UgVUlUeXBlRGVmLlVua293bjogcmV0dXJuIHRoaXMuVW5rb3duO1xyXG4gICAgICAgICAgICBkZWZhdWx0OiByZXR1cm4gdGhpcy5Vbmtvd247XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5cclxuZXhwb3J0IGNsYXNzIFVJQ29tRGVmcyB7XHJcbiAgICBwdWJsaWMgc3RhdGljIEJhY2tCdG4gPSBcImJhY2tfYnRuXCI7XHJcbiAgICBwdWJsaWMgc3RhdGljIFdpbmRvd0Nsb3NlQnRuID0gXCJ3aW5fY2xvc2VfYnRuXCI7XHJcbn1cclxuXHJcblxyXG4iLCJcclxuaW1wb3J0IHsgU2luZ2xldG9uIH0gZnJvbSAnLi4vY29tbW9uL1NpbmdsZXRvbic7XHJcbmltcG9ydCB7IFVJV2luZG93IH0gZnJvbSAnLi9VSVdpbmRvdyc7XHJcbmltcG9ydCB7IFVJV2lkZ2UgfSBmcm9tICcuL1VJV2lkZ2V0JztcclxuaW1wb3J0IHsgVUlQYW5lbCB9IGZyb20gJy4vVUlQYW5lbCc7XHJcbmltcG9ydCB7IERiZywgRlVJSGVscGVyIH0gZnJvbSAnY3NoYXJwJztcclxuXHJcbmV4cG9ydCBjbGFzcyBVSU1hbmFnZXIgZXh0ZW5kcyBTaW5nbGV0b248VUlNYW5hZ2VyPntcclxuXHJcbiAgICBwcml2YXRlIG1fbGlzdExvYWRlZFBhbmVsOiBBcnJheTxVSVBhbmVsPjtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHRoaXMubV9saXN0TG9hZGVkUGFuZWwgPSBuZXcgQXJyYXk8VUlQYW5lbD4oKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLy/liqDovb1GYWlyeUdVSVBha2NhZ2VcclxuICAgIHB1YmxpYyBhc3luYyBsb2FkRmFpcnlHVUlQYWNrYWdlKHBhY2thZ2VOYW1lOiBzdHJpbmcpIHtcclxuXHJcbiAgICAgICAgbGV0IHByb21pc2UgPSBuZXcgUHJvbWlzZTxib29sZWFuPihyZXNvdmUgPT4ge1xyXG5cclxuICAgICAgICAgICAgRlVJSGVscGVyLkFkZFBhY2thZ2UocGFja2FnZU5hbWUsICgpID0+IHtcclxuICAgICAgICAgICAgICAgIHJlc292ZSh0cnVlKVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHByb21pc2U7XHJcbiAgICB9XHJcblxyXG4gICAgLy/ph4rmlL5GYWlyeUdVSVBhY2thZ2VcclxuICAgIHB1YmxpYyByZWxlYXNlRmFpcnlHVUlQYWNrYWdlKHBhY2thZ2VOYW1lOiBzdHJpbmcpIHtcclxuICAgICAgICBGVUlIZWxwZXIuUmVsZWFzZVBhY2thZ2UocGFja2FnZU5hbWUpO1xyXG4gICAgfVxyXG5cclxuICAgIC8v5Yib5bu6VUnnsbtcclxuICAgIHByaXZhdGUgY3JlYXRlVUk8VCBleHRlbmRzIFVJUGFuZWw+KHBrZzogc3RyaW5nLCBuYW1lOiBzdHJpbmcsIGNsczogeyBuZXcoKTogVCB9KTogVUlQYW5lbCB7XHJcblxyXG4gICAgICAgIGxldCBjb21wID0gQ1MuRmFpcnlHVUkuVUlQYWNrYWdlLkNyZWF0ZU9iamVjdChwa2csIG5hbWUpLmFzQ29tXHJcbiAgICAgICAgY29tcC5jb250YWluZXIuZ2FtZU9iamVjdC5BZGRDb21wb25lbnQocHVlci4kdHlwZW9mKENTLkZhaXJ5R1VJLlVJQ29udGVudFNjYWxlcikpXHJcblxyXG4gICAgICAgIC8vU2l6Zeiuvue9ruS4ukdSb29055qEU2l6ZVxyXG4gICAgICAgIHZhciByb290U2l6ZSA9IENTLkZhaXJ5R1VJLkdSb290Lmluc3Quc2l6ZTtcclxuICAgICAgICBjb21wLlNldFNpemUocm9vdFNpemUueCwgcm9vdFNpemUueSk7XHJcblxyXG4gICAgICAgIGxldCB1aTogVUlQYW5lbCA9IG5ldyBjbHMoKTtcclxuICAgICAgICB1aS5mdWkgPSBjb21wO1xyXG4gICAgICAgIHVpLm5hbWUgPSBuYW1lO1xyXG4gICAgICAgIHVpLnBrZ05hbWUgPSBwa2c7XHJcblxyXG4gICAgICAgIC8v57uR5a6aRmFpcnlHVUnmjqfku7ZcclxuICAgICAgICB1aS5iaW5kQWxsKHVpKTtcclxuICAgICAgICB1aS5hd2FrZSgpO1xyXG4gICAgICAgIHJldHVybiB1aTtcclxuICAgIH1cclxuXHJcbiAgICAvL2dldCBQYW5lbCBieSBuYW1lXHJcbiAgICBwdWJsaWMgZ2V0UGFuZWxVSShuYW1lOiBzdHJpbmcpOiBVSVBhbmVsIHtcclxuXHJcbiAgICAgICAgZm9yIChjb25zdCBwYW5lbCBvZiB0aGlzLm1fbGlzdExvYWRlZFBhbmVsKSB7XHJcbiAgICAgICAgICAgIGlmIChwYW5lbC5uYW1lID09IG5hbWUpIHtcclxuICAgICAgICAgICAgICAgIERiZy5Mb2coXCJmaW5kIHBhbmVsIGluIGNhY2hlOiBcIiArIG5hbWUpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHBhbmVsO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgYXN5bmMgb3BlbjxUIGV4dGVuZHMgVUlQYW5lbD4ocGtnOiBzdHJpbmcsIG5hbWU6IHN0cmluZywgY2xzOiB7IG5ldygpOiBUIH0sIGFyZz86IGFueSkge1xyXG5cclxuICAgICAgICBsZXQgdWk6IFVJUGFuZWwgPSB0aGlzLmdldFBhbmVsVUkobmFtZSk7XHJcblxyXG4gICAgICAgIGlmICh1aSA9PSBudWxsKSB7XHJcblxyXG4gICAgICAgICAgICAvL+WKoOi9vSBwYWNrYWdlXHJcbiAgICAgICAgICAgIGF3YWl0IHRoaXMubG9hZEZhaXJ5R1VJUGFja2FnZShwa2cpO1xyXG4gICAgICAgICAgICB1aSA9IHRoaXMuY3JlYXRlVUkocGtnLCBuYW1lLCBjbHMpO1xyXG4gICAgICAgICAgICB0aGlzLm1fbGlzdExvYWRlZFBhbmVsLnB1c2godWkpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdWkub25DcmVhdGUoYXJnKTtcclxuICAgICAgICByZXR1cm4gdWk7XHJcbiAgICB9XHJcblxyXG4gICAgLy/miZPlvIBXaW5kb3dcclxuICAgIHB1YmxpYyBhc3luYyBvcGVuV2luZG93PFQgZXh0ZW5kcyBVSVBhbmVsPihwa2c6IHN0cmluZywgbmFtZTogc3RyaW5nLCBjbHM6IHsgbmV3KCk6IFQgfSwgYXJnPzogYW55KSB7XHJcblxyXG4gICAgICAgIGxldCB1aTogVUlQYW5lbCA9IGF3YWl0IHRoaXMub3Blbihwa2csIG5hbWUsIGNscywgYXJnKTtcclxuXHJcbiAgICAgICAgbGV0IHdpbmRvdyA9IHVpIGFzIFVJV2luZG93O1xyXG4gICAgICAgIGlmICh3aW5kb3cgPT0gbnVsbCkge1xyXG4gICAgICAgICAgICBEYmcuTG9nRXJyb3IoXCJFcnJvciwgdWkgaXMgbm90IHdpbmRvdywgY2xzOlwiICsgY2xzKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHdpbmRvdztcclxuICAgIH1cclxuXHJcbiAgICAvL+WFs+mXrVdpbmRvd1xyXG4gICAgcHVibGljIGNsb3NlV2luZG93KG5hbWU6IHN0cmluZywgYXJnOiBhbnkpIHtcclxuXHJcbiAgICAgICAgbGV0IHVpOiBVSVdpbmRvdyA9IHRoaXMuZ2V0UGFuZWxVSShuYW1lKSBhcyBVSVdpbmRvdztcclxuICAgICAgICBpZiAodWkgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICB1aS5jbG9zZShhcmcpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvL+aJk+W8gFdpZGlnZXRcclxuICAgIHB1YmxpYyBhc3luYyBvcGVuV2lkZ2V0PFQgZXh0ZW5kcyBVSVBhbmVsPihwa2c6IHN0cmluZywgbmFtZTogc3RyaW5nLCBjbHM6IHsgbmV3KCk6IFQgfSwgYXJnPzogYW55KSB7XHJcblxyXG4gICAgICAgIGxldCB1aTogVUlXaWRnZSA9IGF3YWl0IHRoaXMub3Blbihwa2csIG5hbWUsIGNscywgYXJnKTtcclxuICAgICAgICByZXR1cm4gdWk7XHJcbiAgICB9XHJcblxyXG4gICAgLy/lhbPpl61XaWRpZ2V0XHJcbiAgICBwdWJsaWMgY2xvc2VXaWRnZXQobmFtZTogc3RyaW5nLCBhcmc6IGFueSkge1xyXG5cclxuICAgICAgICBsZXQgdWk6IFVJV2lkZ2UgPSB0aGlzLmdldFBhbmVsVUkobmFtZSkgYXMgVUlXaWRnZTtcclxuICAgICAgICBpZiAodWkgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICB1aS5jbG9zZShhcmcpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvL+WIoOmZpOaJgOaciVVJUGFuZWxcclxuICAgIHB1YmxpYyBjbG9zZUFsbFBhbmVscygpIHtcclxuICAgICAgICB0aGlzLmRpc3Ryb3lBbGxMb2FkZWRQYW5lbCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZGlzdHJveVBhbmVsKHBhbmVsOiBVSVBhbmVsKSB7XHJcblxyXG4gICAgICAgIGlmIChwYW5lbC5pc09wZW4pIHtcclxuICAgICAgICAgICAgcGFuZWwuY2xvc2UoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8v5Y246L296LWE5rqQXHJcbiAgICAgICAgdGhpcy5yZWxlYXNlRmFpcnlHVUlQYWNrYWdlKHBhbmVsLnBrZ05hbWUpO1xyXG4gICAgICAgIHBhbmVsLmRpc3Bvc2UoKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGRpc3Ryb3lBbGxMb2FkZWRQYW5lbCgpOiB2b2lkIHtcclxuICAgICAgICBmb3IgKGxldCBpID0gdGhpcy5tX2xpc3RMb2FkZWRQYW5lbC5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xyXG5cclxuICAgICAgICAgICAgbGV0IHBhbmVsID0gdGhpcy5tX2xpc3RMb2FkZWRQYW5lbFtpXTtcclxuICAgICAgICAgICAgdGhpcy5kaXN0cm95UGFuZWwocGFuZWwpO1xyXG4gICAgICAgICAgICB0aGlzLm1fbGlzdExvYWRlZFBhbmVsLnNwbGljZShpLCAxKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGNsZWFyQWxsKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuZGlzdHJveUFsbExvYWRlZFBhbmVsKCk7XHJcbiAgICAgICAgdGhpcy5tX2xpc3RMb2FkZWRQYW5lbC5sZW5ndGggPSAwO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBvblN0YWdlUmVzaXplZCgpOnZvaWR7XHJcblxyXG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCB0aGlzLm1fbGlzdExvYWRlZFBhbmVsLmxlbmd0aDsgaSsrKXtcclxuXHJcbiAgICAgICAgICAgIHZhciByb290U2l6ZSA9IENTLkZhaXJ5R1VJLkdSb290Lmluc3Quc2l6ZTtcclxuICAgICAgICAgICAgdGhpcy5tX2xpc3RMb2FkZWRQYW5lbFtpXS5mdWkuU2V0U2l6ZShyb290U2l6ZS54LCByb290U2l6ZS55KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBVSVR5cGVEZWYsIFVJTGF5ZXJEZWYgfSBmcm9tIFwiLi9VSURlZmluZVwiO1xyXG5pbXBvcnQgeyBEYmcsIEZhaXJ5R1VJIH0gZnJvbSBcImNzaGFycFwiO1xyXG5pbXBvcnQgeyBVSUJhc2UgfSBmcm9tIFwiLi9VSUJhc2VcIjtcclxuXHJcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBVSVBhbmVsIGV4dGVuZHMgVUlCYXNlIHtcclxuXHJcbiAgICBwdWJsaWMgcGtnTmFtZTogc3RyaW5nO1xyXG4gICAgcHJpdmF0ZSBfbmFtZTogc3RyaW5nO1xyXG5cclxuICAgIHB1YmxpYyBzZXQgbmFtZSh2OiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLl9uYW1lID0gdjtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0IG5hbWUoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fbmFtZTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0IHVpVHlwZSgpOiBVSVR5cGVEZWYge1xyXG4gICAgICAgIHJldHVybiBVSVR5cGVEZWYuVW5rb3duO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgbV9sYXllcjogVUlMYXllckRlZiA9IFVJTGF5ZXJEZWYuVW5rb3duO1xyXG4gICAgcHVibGljIGdldCBsYXllcigpOiBVSUxheWVyRGVmIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5tX2xheWVyO1xyXG4gICAgfVxyXG4gICAgcHVibGljIHNldCBsYXllcih2OiBVSUxheWVyRGVmKSB7XHJcbiAgICAgICAgdGhpcy5tX2xheWVyID0gdjtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0IGlzT3BlbigpOiBib29sZWFuIHtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZnVpLnZpc2libGU7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNldCB2aXNpYmxlKGlzQWN0aXZhdGU6IGJvb2xlYW4pIHtcclxuXHJcbiAgICAgICAgdGhpcy5mdWkudmlzaWJsZSA9IGlzQWN0aXZhdGU7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG9uQ3JlYXRlKGFyZzogYW55KTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5sYXllciA9IFVJTGF5ZXJEZWYuZ2V0RGVmYXVsdExheWVyKHRoaXMudWlUeXBlKTtcclxuICAgICAgICBGYWlyeUdVSS5HUm9vdC5pbnN0LkFkZENoaWxkKHRoaXMuZnVpKTtcclxuICAgICAgICB0aGlzLm9uU2hvdyhhcmcpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBhYnN0cmFjdCBvbkF3YWtlKCk6IHZvaWQ7XHJcbiAgICBwdWJsaWMgYWJzdHJhY3Qgb25TaG93KHZvPzogYW55KTogdm9pZDtcclxuICAgIHB1YmxpYyBhYnN0cmFjdCBvbkNsb3NlKGFyZz86IGFueSk6IHZvaWQ7XHJcblxyXG4gICAgcHVibGljIG9uRGlzcG9zZSgpIHsgXHJcblxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBvblVwZGF0ZSgpOiB2b2lkIHsgXHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGF3YWtlKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMub25Bd2FrZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB1cGRhdGUoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5vblVwZGF0ZSgpO1xyXG4gICAgfVxyXG5cclxuXHJcblxyXG4gICAgcHVibGljIGNsb3NlKGFyZzogYW55ID0gbnVsbCk6IHZvaWQge1xyXG5cclxuICAgICAgICB0aGlzLm9uQ2xvc2UoYXJnKTtcclxuICAgICAgICBGYWlyeUdVSS5HUm9vdC5pbnN0LlJlbW92ZUNoaWxkKHRoaXMuZnVpKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZGlzcG9zZSgpOiB2b2lkIHtcclxuXHJcbiAgICAgICAgdGhpcy5mdWkuRGlzcG9zZSgpO1xyXG4gICAgICAgIHRoaXMub25EaXNwb3NlKCk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBVSVBhbmVsIH0gZnJvbSBcIi4vVUlQYW5lbFwiO1xyXG5pbXBvcnQgeyBVSVR5cGVEZWYsIFVJQ29tRGVmcyB9IGZyb20gXCIuL1VJRGVmaW5lXCI7XHJcbmltcG9ydCB7IEZhaXJ5R1VJIH0gZnJvbSBcImNzaGFycFwiO1xyXG5cclxuXHJcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBVSVdpbmRvdyBleHRlbmRzIFVJUGFuZWwge1xyXG5cclxuICAgIHB1YmxpYyBnZXQgdWlUeXBlKCk6IFVJVHlwZURlZiB7XHJcbiAgICAgICAgcmV0dXJuIFVJVHlwZURlZi5XaW5kb3c7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBtX2J0bkNsb3NlOiBGYWlyeUdVSS5HQnV0dG9uO1xyXG5cclxuICAgIHB1YmxpYyBvbkF3YWtlKCk6IHZvaWQge1xyXG5cclxuICAgICAgICB0aGlzLm1fYnRuQ2xvc2UgPSB0aGlzLmZ1aS5HZXRDaGlsZChVSUNvbURlZnMuV2luZG93Q2xvc2VCdG4pO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBvblNob3coYXJnOiBhbnkpOiB2b2lkIHtcclxuXHJcbiAgICAgICAgdGhpcy5mdWkueCA9IEZhaXJ5R1VJLkdSb290Lmluc3Qud2lkdGggLyAyIC0gdGhpcy5mdWkud2lkdGggLyAyO1xyXG4gICAgICAgIHRoaXMuZnVpLnkgPSBGYWlyeUdVSS5HUm9vdC5pbnN0LmhlaWdodCAvIDIgLSB0aGlzLmZ1aS5oZWlnaHQgLyAyO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5tX2J0bkNsb3NlICE9IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICB0aGlzLm1fYnRuQ2xvc2Uub25DbGljay5BZGQodGhpcy5vbkJ0bkNsb3NlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG4gICAgcHVibGljIG9uQ2xvc2UoYXJnOiBhbnkpOiB2b2lkIHtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMubV9idG5DbG9zZSAhPSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgdGhpcy5tX2J0bkNsb3NlLm9uQ2xpY2suUmVtb3ZlKHRoaXMub25CdG5DbG9zZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgb25CdG5DbG9zZSgpIHtcclxuICAgICAgICB0aGlzLmNsb3NlKDApO1xyXG4gICAgfVxyXG5cclxufSIsImltcG9ydCB7IERiZywgRmFpcnlHVUksIFhHYW1lU2V0dGluZyB9IGZyb20gXCJjc2hhcnBcIjtcclxuaW1wb3J0IHsgVUlXaW5kb3cgfSBmcm9tIFwiLi4vYmFzZS91aS9VSVdpbmRvd1wiO1xyXG5pbXBvcnQgeyBiaW5kZXIgfSBmcm9tIFwiLi4vYmFzZS9jb21tb24vTmljZURlY29yYXRvclwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFVJRGVidWdNYWluIGV4dGVuZHMgVUlXaW5kb3cge1xyXG5cclxuICAgIEBiaW5kZXIoXCJidG5GaWdodFwiKVxyXG4gICAgcHJpdmF0ZSBtX2J0bkZpZ2h0OiBGYWlyeUdVSS5HQnV0dG9uO1xyXG5cclxuICAgIEBiaW5kZXIoXCJidG5SZXNvbHV0aW9uMVwiKVxyXG4gICAgcHJpdmF0ZSBtX2J0blJlc29sdXRpb24xOiBGYWlyeUdVSS5HQnV0dG9uO1xyXG5cclxuICAgIEBiaW5kZXIoXCJidG5SZXNvbHV0aW9uMlwiKVxyXG4gICAgcHJpdmF0ZSBtX2J0blJlc29sdXRpb24yOiBGYWlyeUdVSS5HQnV0dG9uO1xyXG5cclxuICAgIEBiaW5kZXIoXCJidG5SZXNvbHV0aW9uM1wiKVxyXG4gICAgcHJpdmF0ZSBtX2J0blJlc29sdXRpb24zOiBGYWlyeUdVSS5HQnV0dG9uO1xyXG5cclxuXHJcbiAgICBwdWJsaWMgb25Bd2FrZSgpOiB2b2lkIHtcclxuICAgICAgICBzdXBlci5vbkF3YWtlKCk7XHJcblxyXG4gICAgICAgIHRoaXMubV9idG5GaWdodC5vbkNsaWNrLkFkZCgoKSA9PiB7XHJcbiAgICAgICAgICAgIERiZy5Mb2coXCJvbkNsaWNrRmlnaHRcIik7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICBcclxuICAgICAgICB0aGlzLm1fYnRuUmVzb2x1dGlvbjEub25DbGljay5BZGQoKCkgPT4ge1xyXG4gICAgICAgICAgICBYR2FtZVNldHRpbmcuWFJlc29sdXRpb24gPSBYR2FtZVNldHRpbmcuRW51bVJlc29sdXRpb24uTG93O1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLm1fYnRuUmVzb2x1dGlvbjIub25DbGljay5BZGQoKCkgPT4ge1xyXG4gICAgICAgICAgICBYR2FtZVNldHRpbmcuWFJlc29sdXRpb24gPSBYR2FtZVNldHRpbmcuRW51bVJlc29sdXRpb24uTWlkO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMubV9idG5SZXNvbHV0aW9uMy5vbkNsaWNrLkFkZCgoKSA9PiB7XHJcbiAgICAgICAgICAgIFhHYW1lU2V0dGluZy5YUmVzb2x1dGlvbiA9IFhHYW1lU2V0dGluZy5FbnVtUmVzb2x1dGlvbi5IaWdoO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBvblNob3codm86IGFueSk6IHZvaWQge1xyXG4gICAgICAgIHN1cGVyLm9uU2hvdyh2byk7XHJcblxyXG5cclxuICAgIH1cclxuXHJcblxyXG4gICAgcHVibGljIG9uQ2xvc2UoYXJnOiBhbnkpOiB2b2lkIHtcclxuICAgICAgICBzdXBlci5vbkNsb3NlKGFyZyk7XHJcbiAgICB9XHJcbn0iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjc2hhcnBcIik7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IERiZywgSnNNYW5hZ2VyIH0gZnJvbSAnY3NoYXJwJztcclxuaW1wb3J0IHsgRyB9IGZyb20gJy4vR2FtZUNvbmZpZyc7XHJcbmltcG9ydCB7IFVJRGVidWdNYWluIH0gZnJvbSAnLi91aS9VSURlYnVnTWFpbic7XHJcblxyXG4vL+exu+S8vOS7peWJjeeahEdhbWVXb3JsZC5jc1xyXG5jbGFzcyBHYW1lTWFpbiB7XHJcblxyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIEpzTWFuYWdlci5Kc09uQXBwbGljYXRpb25RdWl0ID0gKCkgPT4gdGhpcy5vbkFwcGxpY2F0aW9uUXVpdCgpO1xyXG4gICAgICAgIEpzTWFuYWdlci5Kc09uRGlzcG9zZSA9ICgpID0+IHRoaXMub25EaXNwb3NlKCk7XHJcbiAgICAgICAgSnNNYW5hZ2VyLkpzT25BcHBsaWNhdGlvbkZvY3VzID0gKHN0YXR1c1BhcmFtKSA9PiB0aGlzLm9uQXBwbGljYXRpb25Gb2N1cyhzdGF0dXNQYXJhbSk7XHJcbiAgICAgICAgSnNNYW5hZ2VyLkpzT25BcHBsaWNhdGlvblBhdXNlID0gKHN0YXR1c1BhcmFtKSA9PiB0aGlzLm9uQXBwbGljYXRpb25QYXVzZShzdGF0dXNQYXJhbSk7XHJcbiAgICAgICAgSnNNYW5hZ2VyLkpTRG9FdmVudCA9IChldmVudE5hbWUsIGV2ZW50UGFyYW0pID0+IHRoaXMub25DU2hhcnBFdmVudChldmVudE5hbWUsIGV2ZW50UGFyYW0pO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBhc3luYyBzdGFydCgpIHtcclxuXHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgRGJnLkxvZyhcIiMjIyMjIyDliJ3lp4vljJZUUzogR2FtZSBzdGFydCBpbiBKUy4uLi5cIik7XHJcblxyXG5cclxuICAgICAgICAgICAgLy/liqDovb3kuLvln47lnLrmma9cclxuICAgICAgICAgICAgRy5VSU1hbmFnZXIub3BlbldpbmRvdzxVSURlYnVnTWFpbj4oXCJEZWJ1Z1wiLCBcIkRlYnVnTWFpblwiLCBVSURlYnVnTWFpbik7XHJcblxyXG5cclxuICAgICAgICB9IGNhdGNoIChleCkge1xyXG4gICAgICAgICAgICBEYmcuTG9nRXJyb3IoZXgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG9uQ1NoYXJwRXZlbnQoZXZlbnROYW1lOiBzdHJpbmcsIGV2ZW50UGFyYW06IGFueSkge1xyXG5cclxuICAgICAgICBEYmcuTG9nKFwib25DU2hhcnBFdmVudDpcIiArIGV2ZW50TmFtZSlcclxuICAgICAgICBzd2l0Y2ggKGV2ZW50TmFtZSkge1xyXG4gICAgICAgICAgICAvL0ZVSeWIhui+qOeOh+aUueWPmFxyXG4gICAgICAgICAgICBjYXNlIFwib25TdGFnZVJlc2l6ZWRcIjpcclxuICAgICAgICAgICAgICAgIEcuVUlNYW5hZ2VyLm9uU3RhZ2VSZXNpemVkKClcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgb25BcHBsaWNhdGlvblF1aXQoKTogdm9pZCB7XHJcbiAgICAgICAgRGJnLkxvZyhcIkdhbWUgb25BcHBsaWNhdGlvblF1aXQgaW4gSlMuLi4uXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBvbkFwcGxpY2F0aW9uRm9jdXMoc3RhdHVzUGFyYW06IGJvb2xlYW4pIHtcclxuICAgICAgICBEYmcuTG9nKFwiR2FtZSBPbkFwcGxpY2F0aW9uRm9jdXMgc3RhdHVzUGFyYW06XCIgKyBzdGF0dXNQYXJhbSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG9uQXBwbGljYXRpb25QYXVzZShzdGF0dXNQYXJhbTogYm9vbGVhbikge1xyXG4gICAgICAgIERiZy5Mb2coXCJHYW1lIE9uQXBwbGljYXRpb25QYXVzZSBzdGF0dXNQYXJhbTpcIiArIHN0YXR1c1BhcmFtKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgcHVibGljIG9uRGlzcG9zZSgpOiB2b2lkIHtcclxuICAgICAgICBEYmcuTG9nKFwiR2FtZSBvbkRpc3Bvc2UgaW4gSlMuLi4uXCIpO1xyXG4gICAgfVxyXG5cclxufVxyXG5cclxubmV3IEdhbWVNYWluKCkuc3RhcnQoKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=