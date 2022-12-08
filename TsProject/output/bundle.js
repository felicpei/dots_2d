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
/* harmony export */   "GameConfig": () => (/* binding */ GameConfig),
/* harmony export */   "S": () => (/* binding */ S)
/* harmony export */ });
class GameConfig {
}
GameConfig.debug = true;
GameConfig.realmServerIP = "127.0.0.1";
GameConfig.realmServerPort = 9001;
class S {
}


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


class GameMain {
    constructor() {
        csharp__WEBPACK_IMPORTED_MODULE_0__.JsManager.JsOnApplicationQuit = () => this.onApplicationQuit();
        csharp__WEBPACK_IMPORTED_MODULE_0__.JsManager.JsOnDispose = () => this.onDispose();
    }
    async start() {
        try {
            csharp__WEBPACK_IMPORTED_MODULE_0__.Dbg.Log("###### 初始化TS: Game start in JS....");
            csharp__WEBPACK_IMPORTED_MODULE_0__.Dbg.Log("Port:" + _GameConfig__WEBPACK_IMPORTED_MODULE_1__.GameConfig.realmServerPort);
        }
        catch (ex) {
            csharp__WEBPACK_IMPORTED_MODULE_0__.Dbg.LogError(ex);
        }
    }
    onApplicationQuit() {
        csharp__WEBPACK_IMPORTED_MODULE_0__.Dbg.Log("Game onApplicationQuit in JS....");
    }
    onDispose() {
        csharp__WEBPACK_IMPORTED_MODULE_0__.Dbg.Log("Game onDispose in JS....");
    }
}
new GameMain().start();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUNPLE1BQU8sVUFBVTs7QUFFTixnQkFBSyxHQUFXLElBQUksQ0FBQztBQUNyQix3QkFBYSxHQUFVLFdBQVcsQ0FBQztBQUNuQywwQkFBZSxHQUFVLElBQUksQ0FBQztBQUl6QyxNQUFNLENBQUM7Q0FFYjs7Ozs7Ozs7Ozs7QUNYRDs7Ozs7O1VDQUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7O0FDTndDO0FBQ0U7QUFFMUMsTUFBTSxRQUFRO0lBR1Y7UUFDSSxpRUFBNkIsR0FBRyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztRQUMvRCx5REFBcUIsR0FBRyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7SUFDbkQsQ0FBQztJQUVNLEtBQUssQ0FBQyxLQUFLO1FBRWQsSUFBRztZQUNDLDJDQUFPLENBQUMsb0NBQW9DLENBQUMsQ0FBQztZQUM5QywyQ0FBTyxDQUFDLE9BQU8sR0FBRyxtRUFBMEIsQ0FBQyxDQUFDO1NBRWpEO1FBQUEsT0FBTSxFQUFFLEVBQUM7WUFDTixnREFBWSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1NBQ3BCO0lBRUwsQ0FBQztJQUVNLGlCQUFpQjtRQUVwQiwyQ0FBTyxDQUFDLGtDQUFrQyxDQUFDLENBQUM7SUFDaEQsQ0FBQztJQUVNLFNBQVM7UUFFWiwyQ0FBTyxDQUFDLDBCQUEwQixDQUFDLENBQUM7SUFDeEMsQ0FBQztDQUVKO0FBRUQsSUFBSSxRQUFRLEVBQUUsQ0FBQyxLQUFLLEVBQUUsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3RzcHJvamVjdC8uL3NyYy9HYW1lQ29uZmlnLnRzIiwid2VicGFjazovL3RzcHJvamVjdC9leHRlcm5hbCBjb21tb25qczIgXCJjc2hhcnBcIiIsIndlYnBhY2s6Ly90c3Byb2plY3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdHNwcm9qZWN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RzcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdHNwcm9qZWN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdHNwcm9qZWN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdHNwcm9qZWN0Ly4vc3JjL0dhbWVNYWluLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIlxyXG5leHBvcnQgIGNsYXNzIEdhbWVDb25maWd7XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBkZWJ1Zzpib29sZWFuID0gdHJ1ZTtcclxuICAgIHB1YmxpYyBzdGF0aWMgcmVhbG1TZXJ2ZXJJUDpzdHJpbmcgPSBcIjEyNy4wLjAuMVwiOyBcclxuICAgIHB1YmxpYyBzdGF0aWMgcmVhbG1TZXJ2ZXJQb3J0Om51bWJlciA9IDkwMDE7XHJcblxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgU3tcclxuICAgIFxyXG59XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNzaGFycFwiKTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgRGJnLCBKc01hbmFnZXIgfSBmcm9tICdjc2hhcnAnO1xyXG5pbXBvcnQgeyBHYW1lQ29uZmlnIH0gZnJvbSAnLi9HYW1lQ29uZmlnJztcclxuXHJcbmNsYXNzIEdhbWVNYWlue1xyXG5cclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBKc01hbmFnZXIuSnNPbkFwcGxpY2F0aW9uUXVpdCA9ICgpID0+IHRoaXMub25BcHBsaWNhdGlvblF1aXQoKTtcclxuICAgICAgICBKc01hbmFnZXIuSnNPbkRpc3Bvc2UgPSAoKSA9PiB0aGlzLm9uRGlzcG9zZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBhc3luYyBzdGFydCgpIHtcclxuICAgICAgICBcclxuICAgICAgICB0cnl7XHJcbiAgICAgICAgICAgIERiZy5Mb2coXCIjIyMjIyMg5Yid5aeL5YyWVFM6IEdhbWUgc3RhcnQgaW4gSlMuLi4uXCIpO1xyXG4gICAgICAgICAgICBEYmcuTG9nKFwiUG9ydDpcIiArIEdhbWVDb25maWcucmVhbG1TZXJ2ZXJQb3J0KTtcclxuXHJcbiAgICAgICAgfWNhdGNoKGV4KXtcclxuICAgICAgICAgICAgRGJnLkxvZ0Vycm9yKGV4KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBvbkFwcGxpY2F0aW9uUXVpdCgpOnZvaWQge1xyXG5cclxuICAgICAgICBEYmcuTG9nKFwiR2FtZSBvbkFwcGxpY2F0aW9uUXVpdCBpbiBKUy4uLi5cIik7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG9uRGlzcG9zZSgpOnZvaWQge1xyXG4gICAgICAgIFxyXG4gICAgICAgIERiZy5Mb2coXCJHYW1lIG9uRGlzcG9zZSBpbiBKUy4uLi5cIik7XHJcbiAgICB9XHJcbiAgICBcclxufVxyXG5cclxubmV3IEdhbWVNYWluKCkuc3RhcnQoKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=