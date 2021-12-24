/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
var EntryPoint;
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./bin/Core/GameManager.js":
/*!*********************************!*\
  !*** ./bin/Core/GameManager.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"GameManager\": () => (/* binding */ GameManager)\n/* harmony export */ });\n/* harmony import */ var _Level__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Level */ \"./bin/Level.js\");\n/* harmony import */ var _Input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Input */ \"./bin/Core/Input.js\");\n\r\n\r\nclass GameManager {\r\n    constructor() {\r\n        console.log(\"Game instance created\");\r\n        GameManager.Context = document.getElementById(\"canvas\").getContext(\"2d\");\r\n        this.CurrentLevel = new _Level__WEBPACK_IMPORTED_MODULE_0__.Level();\r\n        this.timer = setInterval(() => this.GameUpdate(), 10);\r\n    }\r\n    static Instantiate(GameObject) {\r\n        GameManager.GameObjects[GameManager.GameObjects.length] = GameObject;\r\n    }\r\n    static RemoveGameObject(GameObject) {\r\n        for (let i = 0; i < GameManager.GameObjects.length; i++) {\r\n            if (GameManager.GameObjects[i].ID == GameObject.ID) {\r\n                GameManager.GameObjects.splice(i, 1);\r\n            }\r\n        }\r\n    }\r\n    GameUpdate() {\r\n        _Input__WEBPACK_IMPORTED_MODULE_1__.Input.HandleKeys();\r\n        this.CurrentLevel.LogicUpdate();\r\n    }\r\n}\r\nGameManager.GameObjects = [];\r\n//# sourceMappingURL=GameManager.js.map\n\n//# sourceURL=webpack://EntryPoint/./bin/Core/GameManager.js?");

/***/ }),

/***/ "./bin/Core/Input.js":
/*!***************************!*\
  !*** ./bin/Core/Input.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Input\": () => (/* binding */ Input)\n/* harmony export */ });\nclass Input {\r\n    static HandleKeys() {\r\n        addEventListener(\"keydown\", (e) => {\r\n            this.KeysDown[e.key.toLowerCase()] = true;\r\n        }, false);\r\n        addEventListener(\"keyup\", (e) => {\r\n            delete this.KeysDown[e.key.toLowerCase()];\r\n        }, false);\r\n    }\r\n}\r\nInput.KeysDown = [];\r\n//# sourceMappingURL=Input.js.map\n\n//# sourceURL=webpack://EntryPoint/./bin/Core/Input.js?");

/***/ }),

/***/ "./bin/Core/Language/Statement/PrintStatement.js":
/*!*******************************************************!*\
  !*** ./bin/Core/Language/Statement/PrintStatement.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"PrintStatement\": () => (/* binding */ PrintStatement)\n/* harmony export */ });\n/* harmony import */ var _Statement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Statement */ \"./bin/Core/Language/Statement/Statement.js\");\n\r\nclass PrintStatement extends _Statement__WEBPACK_IMPORTED_MODULE_0__.Statement {\r\n    Run() {\r\n        console.log(this.Arguments[0]);\r\n    }\r\n}\r\n{\r\n    console.log(\"Static clause test\");\r\n}\r\n//# sourceMappingURL=PrintStatement.js.map\n\n//# sourceURL=webpack://EntryPoint/./bin/Core/Language/Statement/PrintStatement.js?");

/***/ }),

/***/ "./bin/Core/Language/Statement/Statement.js":
/*!**************************************************!*\
  !*** ./bin/Core/Language/Statement/Statement.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Statement\": () => (/* binding */ Statement)\n/* harmony export */ });\nclass Statement {\r\n    constructor() {\r\n        this.Arguments = new Array();\r\n    }\r\n    Run() {\r\n    }\r\n}\r\n//# sourceMappingURL=Statement.js.map\n\n//# sourceURL=webpack://EntryPoint/./bin/Core/Language/Statement/Statement.js?");

/***/ }),

/***/ "./bin/Index.js":
/*!**********************!*\
  !*** ./bin/Index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Core_GameManager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Core/GameManager */ \"./bin/Core/GameManager.js\");\n/* harmony import */ var _Core_Language_Statement_PrintStatement__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Core/Language/Statement/PrintStatement */ \"./bin/Core/Language/Statement/PrintStatement.js\");\n\r\n\r\nlet gm = new _Core_GameManager__WEBPACK_IMPORTED_MODULE_0__.GameManager();\r\nfunction test(code) {\r\n    console.log(code);\r\n    gm.CurrentLevel.PlayLevel(code);\r\n    new _Core_Language_Statement_PrintStatement__WEBPACK_IMPORTED_MODULE_1__.PrintStatement();\r\n}\r\nwindow.test = test;\r\n//# sourceMappingURL=Index.js.map\n\n//# sourceURL=webpack://EntryPoint/./bin/Index.js?");

/***/ }),

/***/ "./bin/Level.js":
/*!**********************!*\
  !*** ./bin/Level.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Level\": () => (/* binding */ Level)\n/* harmony export */ });\n/* harmony import */ var _Core_GameManager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Core/GameManager */ \"./bin/Core/GameManager.js\");\n\r\nclass Level {\r\n    constructor() {\r\n        this.Level = new Array();\r\n        this.Tick = 0;\r\n        this.Iteration = 0;\r\n        this.PlayLevel(\"\");\r\n    }\r\n    PlayLevel(_code) {\r\n        this.LoadLevel(`[{\"LevelName\":\"Test\",\"Author\":\"Ikari\",\"Pattern\":{\"Name\":\"Pattern1\",\"Bullets\":[[\"0,0\",\"GraphicType\",\"2\",\"EnemyBullet\",\"-5,0.2\",\"0.3\"]],\"Interval\":\"2\",\"Repeat\":\"5\"},\"Enemy\":{},\"Level\":{\"0\":{\"SpawnAction\":{\"Type\":\"Player\",\"Position\":\"0,0\"}},\"2\":{\"SpawnActon\":{\"Type\":\"Enemy\",\"Position\":\"0\",\"Enemys\":[{\"Graphic\":\"GraphicName\",\"Health\":\"100\",\"EnemyPath\":[[\"Move\",\"4,5\",\"10\"],[\"Shoot\",\"Pattern1\"]]},{\"Graphic\":\"GraphicName\",\"Health\":\"100\",\"EnemyPath\":[[\"Move\",\"4,5\",\"10\"],[\"Shoot\",\"Pattern1\"]]}]}}}}]`);\r\n    }\r\n    LoadLevel(_levelJSON) {\r\n        let _level = JSON.parse(_levelJSON);\r\n        console.log(_level);\r\n    }\r\n    LogicUpdate() {\r\n        if (this.Tick < this.Level.length) {\r\n            if (this.Iteration == this.Level[this.Tick].AtTime) {\r\n                for (let i = 0; i < this.Level[this.Tick].Actions.length; i++) {\r\n                    this.Level[this.Tick].Actions[i].Action();\r\n                }\r\n                this.Tick++;\r\n            }\r\n        }\r\n        this.Iteration += 1;\r\n        _Core_GameManager__WEBPACK_IMPORTED_MODULE_0__.GameManager.Context.clearRect(0, 0, 500, 500);\r\n        for (let i = 0; i < _Core_GameManager__WEBPACK_IMPORTED_MODULE_0__.GameManager.GameObjects.length; i++) {\r\n            _Core_GameManager__WEBPACK_IMPORTED_MODULE_0__.GameManager.GameObjects[i].LogicUpdate();\r\n        }\r\n        this.DrawUpdate();\r\n    }\r\n    DrawUpdate() {\r\n        for (let i = 0; i < _Core_GameManager__WEBPACK_IMPORTED_MODULE_0__.GameManager.GameObjects.length; i++) {\r\n            _Core_GameManager__WEBPACK_IMPORTED_MODULE_0__.GameManager.GameObjects[i].Draw();\r\n        }\r\n    }\r\n}\r\nclass LevelTick {\r\n    constructor(AtTime) {\r\n        this.AtTime = AtTime;\r\n        console.log(\"Initated level action at: \" + this.AtTime.toString());\r\n    }\r\n}\r\nclass LevelAction {\r\n}\r\nclass SpawnAction extends LevelAction {\r\n    constructor(Spawnable) {\r\n        super();\r\n        this.Spawnable = Spawnable;\r\n    }\r\n    Action() {\r\n        _Core_GameManager__WEBPACK_IMPORTED_MODULE_0__.GameManager.Instantiate(this.Spawnable);\r\n    }\r\n}\r\n//# sourceMappingURL=Level.js.map\n\n//# sourceURL=webpack://EntryPoint/./bin/Level.js?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./bin/Index.js");
/******/ 	EntryPoint = __webpack_exports__;
/******/ 	
/******/ })()
;