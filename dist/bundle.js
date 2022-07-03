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

/***/ "./bin/Bullet.js":
/*!***********************!*\
  !*** ./bin/Bullet.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Bullet\": () => (/* binding */ Bullet)\n/* harmony export */ });\n/* harmony import */ var _Core_GameObject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Core/GameObject */ \"./bin/Core/GameObject.js\");\n/* harmony import */ var _Core_Point__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Core/Point */ \"./bin/Core/Point.js\");\n/* harmony import */ var _Core_GameManager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Core/GameManager */ \"./bin/Core/GameManager.js\");\n\r\n\r\n\r\nclass Bullet extends _Core_GameObject__WEBPACK_IMPORTED_MODULE_0__.GameObject {\r\n    constructor(Posistion, Graphic, Collider, Tag, Direction, Speed) {\r\n        super(Posistion, Graphic, Collider);\r\n        this.Tag = Tag;\r\n        this.Velocity = _Core_Point__WEBPACK_IMPORTED_MODULE_1__.Point.Mult(_Core_Point__WEBPACK_IMPORTED_MODULE_1__.Point.Normalize(Direction), Speed);\r\n        console.log(Speed);\r\n    }\r\n    LogicUpdate() {\r\n        super.LogicUpdate();\r\n        this.Position = _Core_Point__WEBPACK_IMPORTED_MODULE_1__.Point.Add(this.Position, this.Velocity);\r\n        if (this.Position.y <= 0) {\r\n            _Core_GameManager__WEBPACK_IMPORTED_MODULE_2__.GameManager.RemoveGameObject(this);\r\n        }\r\n        if (this.Position.x <= 0) {\r\n            _Core_GameManager__WEBPACK_IMPORTED_MODULE_2__.GameManager.RemoveGameObject(this);\r\n        }\r\n    }\r\n    OnCollision(Collision) {\r\n        if (Collision.Tag == \"Player\") {\r\n            if (this.Tag == \"EnemyBullet\") {\r\n            }\r\n        }\r\n        if (Collision.Tag == \"Enemy\") {\r\n            if (this.Tag == \"PlayerBullet\") {\r\n                let enemy = Collision;\r\n                enemy.Hurt(1);\r\n                _Core_GameManager__WEBPACK_IMPORTED_MODULE_2__.GameManager.RemoveGameObject(this);\r\n            }\r\n        }\r\n    }\r\n}\r\n//# sourceMappingURL=Bullet.js.map\n\n//# sourceURL=webpack://EntryPoint/./bin/Bullet.js?");

/***/ }),

/***/ "./bin/Core/Behaviour.js":
/*!*******************************!*\
  !*** ./bin/Core/Behaviour.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Behaviour\": () => (/* binding */ Behaviour)\n/* harmony export */ });\nclass Behaviour {\r\n    LogicUpdate() {\r\n    }\r\n}\r\n//# sourceMappingURL=Behaviour.js.map\n\n//# sourceURL=webpack://EntryPoint/./bin/Core/Behaviour.js?");

/***/ }),

/***/ "./bin/Core/Collider.js":
/*!******************************!*\
  !*** ./bin/Core/Collider.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"BoxCollider\": () => (/* binding */ BoxCollider)\n/* harmony export */ });\n/* harmony import */ var _Rect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Rect */ \"./bin/Core/Rect.js\");\n\r\nclass Collider {\r\n    constructor() { }\r\n    CheckCollision(a) {\r\n        return false;\r\n    }\r\n}\r\nclass BoxCollider extends Collider {\r\n    constructor(Width, Height, Position) {\r\n        super();\r\n        this.Width = Width;\r\n        this.Height = Height;\r\n        this.Posistion = Position;\r\n        this.Rect = new _Rect__WEBPACK_IMPORTED_MODULE_0__.Rect(Width, Height, \"green\");\r\n    }\r\n    CheckCollision(a) {\r\n        if (this.Posistion.x < a.Posistion.x + a.Width && this.Posistion.x + this.Width > a.Posistion.x && this.Posistion.y < a.Posistion.y + a.Height && this.Posistion.y + this.Height > a.Posistion.y) {\r\n            return true;\r\n        }\r\n        else {\r\n            return false;\r\n        }\r\n    }\r\n}\r\n//# sourceMappingURL=Collider.js.map\n\n//# sourceURL=webpack://EntryPoint/./bin/Core/Collider.js?");

/***/ }),

/***/ "./bin/Core/GameConsole.js":
/*!*********************************!*\
  !*** ./bin/Core/GameConsole.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"GameConsole\": () => (/* binding */ GameConsole)\n/* harmony export */ });\nclass GameConsole {\r\n    static LogError(message) {\r\n        this.LOG_AREA.innerHTML += `<p class='console-text-red'>${message}</p>`;\r\n    }\r\n    static LogWarning(message) {\r\n        this.LOG_AREA.innerHTML += `<p class='console-text-orange'>${message}</p>`;\r\n    }\r\n    static LogMessage(message) {\r\n        this.LOG_AREA.innerHTML += `<p class='console-text'>${message}</p>`;\r\n    }\r\n}\r\n//# sourceMappingURL=GameConsole.js.map\n\n//# sourceURL=webpack://EntryPoint/./bin/Core/GameConsole.js?");

/***/ }),

/***/ "./bin/Core/GameManager.js":
/*!*********************************!*\
  !*** ./bin/Core/GameManager.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"GameManager\": () => (/* binding */ GameManager)\n/* harmony export */ });\n/* harmony import */ var _Level__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Level */ \"./bin/Level.js\");\n/* harmony import */ var _Collider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Collider */ \"./bin/Core/Collider.js\");\n/* harmony import */ var _GameConsole__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./GameConsole */ \"./bin/Core/GameConsole.js\");\n/* harmony import */ var _GameObject__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./GameObject */ \"./bin/Core/GameObject.js\");\n/* harmony import */ var _Rect__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Rect */ \"./bin/Core/Rect.js\");\n/* harmony import */ var _Input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Input */ \"./bin/Core/Input.js\");\n/* harmony import */ var _Point__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Point */ \"./bin/Core/Point.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nclass GameManager {\r\n    constructor() {\r\n        console.log(\"Game instance created\");\r\n        GameManager.Context = document.getElementById(\"canvas\").getContext(\"2d\");\r\n        _GameConsole__WEBPACK_IMPORTED_MODULE_2__.GameConsole.LOG_AREA = document.getElementById(\"console\");\r\n        this.CurrentLevel = new _Level__WEBPACK_IMPORTED_MODULE_0__.Level();\r\n        this.timer = setInterval(() => this.GameUpdate(), 10);\r\n    }\r\n    static Instantiate(gameObject) {\r\n        let _gameObject = Object.assign(new _GameObject__WEBPACK_IMPORTED_MODULE_3__.GameObject(new _Point__WEBPACK_IMPORTED_MODULE_6__.Point(0, 0), new _Rect__WEBPACK_IMPORTED_MODULE_4__.Rect(0, 0, \"black\"), new _Collider__WEBPACK_IMPORTED_MODULE_1__.BoxCollider(0, 0, new _Point__WEBPACK_IMPORTED_MODULE_6__.Point(0, 0))), gameObject);\r\n        GameManager.GameObjects[GameManager.GameObjects.length] = gameObject;\r\n        console.log(GameManager.GameObjects);\r\n    }\r\n    static RemoveGameObject(GameObject) {\r\n        for (let i = 0; i < GameManager.GameObjects.length; i++) {\r\n            if (GameManager.GameObjects[i].ID == GameObject.ID) {\r\n                GameManager.GameObjects.splice(i, 1);\r\n            }\r\n        }\r\n    }\r\n    GameUpdate() {\r\n        _Input__WEBPACK_IMPORTED_MODULE_5__.Input.HandleKeys();\r\n        this.CurrentLevel.LogicUpdate();\r\n    }\r\n}\r\nGameManager.GameObjects = [];\r\nGameManager.isDebug = true;\r\n//# sourceMappingURL=GameManager.js.map\n\n//# sourceURL=webpack://EntryPoint/./bin/Core/GameManager.js?");

/***/ }),

/***/ "./bin/Core/GameObject.js":
/*!********************************!*\
  !*** ./bin/Core/GameObject.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"GameObject\": () => (/* binding */ GameObject)\n/* harmony export */ });\n/* harmony import */ var _Behaviour__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Behaviour */ \"./bin/Core/Behaviour.js\");\n/* harmony import */ var _GameManager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GameManager */ \"./bin/Core/GameManager.js\");\n\r\n\r\nclass GameObject extends _Behaviour__WEBPACK_IMPORTED_MODULE_0__.Behaviour {\r\n    constructor(Position, Graphic, Collider, Tag = \"none\") {\r\n        super();\r\n        this.Position = Position;\r\n        this.Graphic = Graphic;\r\n        this.Collider = Collider;\r\n        this.Tag = Tag;\r\n        if (GameObject.Count == null) {\r\n            GameObject.Count = 0;\r\n        }\r\n        else {\r\n            GameObject.Count += 1;\r\n        }\r\n        this.ID = GameObject.Count;\r\n    }\r\n    Start() {\r\n    }\r\n    LogicUpdate() {\r\n        this.Graphic.Position = this.Position;\r\n        this.Collider.Posistion = this.Position;\r\n        for (let i = 0; i < _GameManager__WEBPACK_IMPORTED_MODULE_1__.GameManager.GameObjects.length; i++) {\r\n            if (_GameManager__WEBPACK_IMPORTED_MODULE_1__.GameManager.GameObjects[i] != this) {\r\n                GameObject.CheckCollision(this, _GameManager__WEBPACK_IMPORTED_MODULE_1__.GameManager.GameObjects[i]);\r\n            }\r\n        }\r\n    }\r\n    Draw() {\r\n        this.Graphic.Draw();\r\n    }\r\n    static CheckCollision(a, b) {\r\n        if (a.Collider.CheckCollision(b.Collider)) {\r\n            b.OnCollision(a);\r\n        }\r\n    }\r\n    OnCollision(Collision) {\r\n    }\r\n}\r\n//# sourceMappingURL=GameObject.js.map\n\n//# sourceURL=webpack://EntryPoint/./bin/Core/GameObject.js?");

/***/ }),

/***/ "./bin/Core/Graphic.js":
/*!*****************************!*\
  !*** ./bin/Core/Graphic.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Graphic\": () => (/* binding */ Graphic)\n/* harmony export */ });\nclass Graphic {\r\n    constructor() { }\r\n    Draw() { }\r\n}\r\n//# sourceMappingURL=Graphic.js.map\n\n//# sourceURL=webpack://EntryPoint/./bin/Core/Graphic.js?");

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

/***/ "./bin/Core/Point.js":
/*!***************************!*\
  !*** ./bin/Core/Point.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Point\": () => (/* binding */ Point)\n/* harmony export */ });\nclass Point {\r\n    constructor(x, y) {\r\n        this.x = x;\r\n        this.y = y;\r\n    }\r\n    static Add(a, b) {\r\n        let c = new Point(0, 0);\r\n        c.x = a.x + b.x;\r\n        c.y = a.y + b.y;\r\n        return c;\r\n    }\r\n    static Mult(a, b) {\r\n        let c = new Point(0, 0);\r\n        c.x = a.x * b;\r\n        c.y = a.y * b;\r\n        return c;\r\n    }\r\n    static Direction(a, b) {\r\n        return new Point(b.x - a.x, b.y - a.y);\r\n    }\r\n    static Magnitude(a) {\r\n        return Number(Math.sqrt((a.x * a.x) + (a.y * a.y)).toFixed(10));\r\n    }\r\n    static Normalize(a) {\r\n        let mag = Point.Magnitude(a);\r\n        return new Point(a.x / mag, a.y / mag);\r\n    }\r\n    static AngleToHeading(a) {\r\n        let Radians = a * (Math.PI / 180);\r\n        return new Point(Number(Math.cos(Radians).toFixed(10)), Number(Math.sin(Radians).toFixed(10)));\r\n    }\r\n    static DecodePoint(code) {\r\n        let _point = code.split(\",\");\r\n        if (_point.length > 2) {\r\n            return new Point(0, 0);\r\n        }\r\n        return new Point(parseFloat(_point[0]), parseFloat(_point[1]));\r\n    }\r\n}\r\n//# sourceMappingURL=Point.js.map\n\n//# sourceURL=webpack://EntryPoint/./bin/Core/Point.js?");

/***/ }),

/***/ "./bin/Core/Rect.js":
/*!**************************!*\
  !*** ./bin/Core/Rect.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Rect\": () => (/* binding */ Rect)\n/* harmony export */ });\n/* harmony import */ var _GameManager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GameManager */ \"./bin/Core/GameManager.js\");\n/* harmony import */ var _Graphic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Graphic */ \"./bin/Core/Graphic.js\");\n\r\n\r\nclass Rect extends _Graphic__WEBPACK_IMPORTED_MODULE_1__.Graphic {\r\n    constructor(Length, Height, Color) {\r\n        super();\r\n        this.Length = Length;\r\n        this.Height = Height;\r\n        this.Color = Color;\r\n    }\r\n    Draw() {\r\n        _GameManager__WEBPACK_IMPORTED_MODULE_0__.GameManager.Context.beginPath();\r\n        _GameManager__WEBPACK_IMPORTED_MODULE_0__.GameManager.Context.fillStyle = this.Color;\r\n        _GameManager__WEBPACK_IMPORTED_MODULE_0__.GameManager.Context.fillRect(this.Position.x, this.Position.y, this.Length, this.Height);\r\n    }\r\n}\r\n//# sourceMappingURL=Rect.js.map\n\n//# sourceURL=webpack://EntryPoint/./bin/Core/Rect.js?");

/***/ }),

/***/ "./bin/Core/Sprite.js":
/*!****************************!*\
  !*** ./bin/Core/Sprite.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Sprite\": () => (/* binding */ Sprite)\n/* harmony export */ });\n/* harmony import */ var _GameManager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GameManager */ \"./bin/Core/GameManager.js\");\n/* harmony import */ var _Graphic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Graphic */ \"./bin/Core/Graphic.js\");\n\r\n\r\nclass Sprite extends _Graphic__WEBPACK_IMPORTED_MODULE_1__.Graphic {\r\n    constructor(ImageURL) {\r\n        super();\r\n        this.ImageURL = \"Img/\" + ImageURL + \".png\";\r\n        this.Image = new Image();\r\n        this.Image.src = this.ImageURL;\r\n    }\r\n    Draw() {\r\n        _GameManager__WEBPACK_IMPORTED_MODULE_0__.GameManager.Context.drawImage(this.Image, this.Position.x, this.Position.y, 50, 50);\r\n    }\r\n}\r\n//# sourceMappingURL=Sprite.js.map\n\n//# sourceURL=webpack://EntryPoint/./bin/Core/Sprite.js?");

/***/ }),

/***/ "./bin/Enemy.js":
/*!**********************!*\
  !*** ./bin/Enemy.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Enemy\": () => (/* binding */ Enemy),\n/* harmony export */   \"EnemyPath\": () => (/* binding */ EnemyPath)\n/* harmony export */ });\n/* harmony import */ var _Core_GameObject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Core/GameObject */ \"./bin/Core/GameObject.js\");\n/* harmony import */ var _Core_Point__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Core/Point */ \"./bin/Core/Point.js\");\n/* harmony import */ var _Core_GameManager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Core/GameManager */ \"./bin/Core/GameManager.js\");\n/* harmony import */ var _Core_GameConsole__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Core/GameConsole */ \"./bin/Core/GameConsole.js\");\n/* harmony import */ var _Level__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Level */ \"./bin/Level.js\");\n/* harmony import */ var _Pattern__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Pattern */ \"./bin/Pattern.js\");\n\r\n\r\n\r\n\r\n\r\n\r\nclass Enemy extends _Core_GameObject__WEBPACK_IMPORTED_MODULE_0__.GameObject {\r\n    constructor(Position, Graphic, Collider, Health, Path, Speed) {\r\n        super(Position, Graphic, Collider);\r\n        this.isOnHold = false;\r\n        this.isLocked = false;\r\n        this.Health = Health;\r\n        this.Path = Path;\r\n        this.Speed = Speed;\r\n        this.Tick = 0;\r\n        this.Iteration = 0;\r\n        this.Tag = \"Enemy\";\r\n    }\r\n    LogicUpdate() {\r\n        super.LogicUpdate();\r\n        if (this.Health <= 0) {\r\n            _Core_GameManager__WEBPACK_IMPORTED_MODULE_2__.GameManager.RemoveGameObject(this);\r\n        }\r\n        if (this.Path.Actions === undefined) {\r\n            return;\r\n        }\r\n        if (this.Tick < this.Path.Actions.length) {\r\n            if (this.Iteration == parseInt(this.Path.Actions[this.Tick][1])) {\r\n                switch (this.Path.Actions[this.Tick][0]) {\r\n                    case \"Move\":\r\n                        this.Target = _Core_Point__WEBPACK_IMPORTED_MODULE_1__.Point.DecodePoint(this.Path.Actions[this.Tick][2]);\r\n                        break;\r\n                    case \"Speed\":\r\n                        break;\r\n                    case \"Shoot\":\r\n                        let pattern = Object.assign(new _Pattern__WEBPACK_IMPORTED_MODULE_5__.Pattern(new Array(), 0, \"\"), _Level__WEBPACK_IMPORTED_MODULE_4__.Level.Patterns.get(this.Path.Actions[this.Tick][2]));\r\n                        console.log(pattern);\r\n                        pattern.Fire(this.Position);\r\n                        break;\r\n                    case \"StartInterval\":\r\n                        break;\r\n                    case \"StopInterval\":\r\n                        break;\r\n                    case \"SetVar\":\r\n                        break;\r\n                    default:\r\n                        _Core_GameConsole__WEBPACK_IMPORTED_MODULE_3__.GameConsole.LogWarning(`No such enemy command: <b>${this.Path.Actions[this.Tick][0]}</b>`);\r\n                        break;\r\n                }\r\n                this.Tick += 1;\r\n            }\r\n        }\r\n        if (this.Target != undefined) {\r\n            let dir = _Core_Point__WEBPACK_IMPORTED_MODULE_1__.Point.Direction(this.Position, this.Target);\r\n            this.Position = _Core_Point__WEBPACK_IMPORTED_MODULE_1__.Point.Add(this.Position, _Core_Point__WEBPACK_IMPORTED_MODULE_1__.Point.Normalize(new _Core_Point__WEBPACK_IMPORTED_MODULE_1__.Point(dir.x * this.Speed, dir.y * this.Speed)));\r\n        }\r\n        this.Iteration += 1;\r\n    }\r\n    MoveRoutine() {\r\n    }\r\n    Hurt(Damage) {\r\n        this.Health -= Damage;\r\n    }\r\n    static GetSpawnPosition(x) {\r\n        return new _Core_Point__WEBPACK_IMPORTED_MODULE_1__.Point(x, -10);\r\n    }\r\n}\r\nclass EnemyPath {\r\n    constructor(Actions) {\r\n        this.Actions = Actions;\r\n    }\r\n}\r\n//# sourceMappingURL=Enemy.js.map\n\n//# sourceURL=webpack://EntryPoint/./bin/Enemy.js?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Level\": () => (/* binding */ Level)\n/* harmony export */ });\n/* harmony import */ var _Core_Collider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Core/Collider */ \"./bin/Core/Collider.js\");\n/* harmony import */ var _Core_GameConsole__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Core/GameConsole */ \"./bin/Core/GameConsole.js\");\n/* harmony import */ var _Core_GameManager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Core/GameManager */ \"./bin/Core/GameManager.js\");\n/* harmony import */ var _Core_Rect__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Core/Rect */ \"./bin/Core/Rect.js\");\n/* harmony import */ var _Core_Point__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Core/Point */ \"./bin/Core/Point.js\");\n/* harmony import */ var _Core_Sprite__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Core/Sprite */ \"./bin/Core/Sprite.js\");\n/* harmony import */ var _Enemy__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Enemy */ \"./bin/Enemy.js\");\n/* harmony import */ var _Pattern__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Pattern */ \"./bin/Pattern.js\");\n/* harmony import */ var _Player__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Player */ \"./bin/Player.js\");\n/* harmony import */ var _TestLevel_json__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./TestLevel.json */ \"./bin/TestLevel.json\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nclass Level {\r\n    constructor() {\r\n        this.GlobalVariables = new Map();\r\n        this.Level = new Array();\r\n        this.Instances = 0;\r\n        this.Tick = 0;\r\n        this.Iteration = 0;\r\n        this.PlayLevel(\"\");\r\n    }\r\n    PlayLevel(_code) {\r\n        let _errorcode = this.LoadLevel(\"Hoi\");\r\n        console.log(_errorcode);\r\n        switch (_errorcode) {\r\n            case 0:\r\n                _Core_GameConsole__WEBPACK_IMPORTED_MODULE_1__.GameConsole.LogMessage(\"<span style='color:#33ff74'>Level built without errors!</span>\");\r\n                break;\r\n            case 1:\r\n                _Core_GameConsole__WEBPACK_IMPORTED_MODULE_1__.GameConsole.LogError(\"Level failed to load due to critical error\");\r\n                break;\r\n        }\r\n    }\r\n    LoadLevel(_levelJSON) {\r\n        let _level = JSON.parse(JSON.stringify(_TestLevel_json__WEBPACK_IMPORTED_MODULE_9__));\r\n        let _patterns = _level[0].Patterns;\r\n        this.CompilePatterns(_patterns);\r\n        console.log(Level.Patterns);\r\n        console.log(this.Level);\r\n        let _levelObj = _level[0].Level;\r\n        let _entries = Object.entries(_levelObj);\r\n        for (let e = 0; e < _entries.length; e++) {\r\n            let _entry = _entries[e];\r\n            const _time = parseInt(_entry[0]);\r\n            let _levelActions = new Array();\r\n            let _actions = Object.entries(_entry[1])[0][1];\r\n            for (let a = 0; a < _actions.length; a++) {\r\n                let _action = _actions[a];\r\n                switch (_action.ActionType) {\r\n                    case \"SpawnAction\":\r\n                        if (_action.SpawnType == \"Player\") {\r\n                            const _positionString = _action.Position;\r\n                            const _posistion = new _Core_Point__WEBPACK_IMPORTED_MODULE_4__.Point(parseFloat(_positionString.split(\",\")[0]), parseFloat(_positionString.split(\",\")[1]));\r\n                            _levelActions.push(new SpawnAction(new _Player__WEBPACK_IMPORTED_MODULE_8__.Player(_posistion, new _Core_Rect__WEBPACK_IMPORTED_MODULE_3__.Rect(5, 5, \"red\"), new _Core_Collider__WEBPACK_IMPORTED_MODULE_0__.BoxCollider(5, 5, _posistion))));\r\n                            if (_time != 0) {\r\n                                _Core_GameConsole__WEBPACK_IMPORTED_MODULE_1__.GameConsole.LogError(\"Player spawn is outside time 0\");\r\n                                return 1;\r\n                            }\r\n                            break;\r\n                        }\r\n                        else {\r\n                            let _enemies = _action.Enemies;\r\n                            for (let i = 0; i < _enemies.length; i++) {\r\n                                let _enemy = _enemies[i];\r\n                                let _enemyPath = new _Enemy__WEBPACK_IMPORTED_MODULE_6__.EnemyPath(_enemy.EnemyPath);\r\n                                let _enemyObject = new _Enemy__WEBPACK_IMPORTED_MODULE_6__.Enemy(_Enemy__WEBPACK_IMPORTED_MODULE_6__.Enemy.GetSpawnPosition(parseFloat(_enemy.Position)), new _Core_Sprite__WEBPACK_IMPORTED_MODULE_5__.Sprite(\"Placeholder\"), new _Core_Collider__WEBPACK_IMPORTED_MODULE_0__.BoxCollider(7, 7, _Enemy__WEBPACK_IMPORTED_MODULE_6__.Enemy.GetSpawnPosition(parseFloat(_enemy.Position))), _enemy.Health, _enemyPath, _enemy.StartSpeed);\r\n                                _levelActions.push(new SpawnAction(_enemyObject));\r\n                            }\r\n                        }\r\n                        break;\r\n                    case \"ConsoleLog\":\r\n                        _levelActions.push(new LogAction(_action.Message));\r\n                        break;\r\n                    case \"Declare\":\r\n                        if (this.GlobalVariables.has(_action.Name)) {\r\n                            _Core_GameConsole__WEBPACK_IMPORTED_MODULE_1__.GameConsole.LogError(`Cannot declare more than one variable with the same name: <b>${_action.Name}</b>`);\r\n                            console.log(\"About to return 1\");\r\n                            return 1;\r\n                        }\r\n                        this.GlobalVariables.set(_action.Name, _action.Value);\r\n                        break;\r\n                    case \"Execute\":\r\n                        break;\r\n                    default:\r\n                        _Core_GameConsole__WEBPACK_IMPORTED_MODULE_1__.GameConsole.LogError(`No such action type: <b>${_action.ActionType}</b>`);\r\n                        break;\r\n                }\r\n            }\r\n            let _tick = new LevelTick(_time);\r\n            _tick.Actions = _levelActions;\r\n            this.Level.push(_tick);\r\n        }\r\n        console.log(this.GlobalVariables);\r\n        this.isStarted = true;\r\n        return 0;\r\n    }\r\n    CompilePatterns(_patterns) {\r\n        for (let i = 0; i < _patterns.length; i++) {\r\n            let _patternObj = _patterns[i];\r\n            let _bullets = new Array();\r\n            for (let j = 0; j < _patternObj.Bullets.length; j++) {\r\n                let _bullet = _patternObj.Bullets[j];\r\n                _bullets[j] = [_bullet[0], _bullet[4], _bullet[5]];\r\n            }\r\n            let _pattern = new _Pattern__WEBPACK_IMPORTED_MODULE_7__.Pattern(_bullets, _patternObj.Interval, \"\");\r\n            Level.Patterns.set(_patternObj.Name, _pattern);\r\n        }\r\n    }\r\n    LogicUpdate() {\r\n        if (_Core_GameManager__WEBPACK_IMPORTED_MODULE_2__.GameManager.isDebug) {\r\n        }\r\n        if (this.isStarted != true) {\r\n            return;\r\n        }\r\n        if (this.Tick < this.Level.length) {\r\n            if (this.Iteration == this.Level[this.Tick].AtTime) {\r\n                for (let i = 0; i < this.Level[this.Tick].Actions.length; i++) {\r\n                    this.Level[this.Tick].Actions[i].Action();\r\n                }\r\n                this.Tick++;\r\n            }\r\n        }\r\n        this.Iteration += 1;\r\n        _Core_GameManager__WEBPACK_IMPORTED_MODULE_2__.GameManager.Context.clearRect(0, 0, 800, 800);\r\n        for (let i = 0; i < _Core_GameManager__WEBPACK_IMPORTED_MODULE_2__.GameManager.GameObjects.length; i++) {\r\n            _Core_GameManager__WEBPACK_IMPORTED_MODULE_2__.GameManager.GameObjects[i].LogicUpdate();\r\n        }\r\n        this.DrawUpdate();\r\n    }\r\n    DrawUpdate() {\r\n        if (this.isStarted != true) {\r\n            return;\r\n        }\r\n        for (let i = 0; i < _Core_GameManager__WEBPACK_IMPORTED_MODULE_2__.GameManager.GameObjects.length; i++) {\r\n            _Core_GameManager__WEBPACK_IMPORTED_MODULE_2__.GameManager.GameObjects[i].Draw();\r\n        }\r\n    }\r\n}\r\nLevel.Patterns = new Map();\r\nclass LevelTick {\r\n    constructor(AtTime) {\r\n        this.AtTime = AtTime;\r\n        console.log(\"Initated level action at: \" + this.AtTime.toString());\r\n    }\r\n}\r\nclass LevelAction {\r\n}\r\nclass SpawnAction extends LevelAction {\r\n    constructor(Spawnable) {\r\n        super();\r\n        this.Spawnable = Spawnable;\r\n    }\r\n    Action() {\r\n        _Core_GameManager__WEBPACK_IMPORTED_MODULE_2__.GameManager.Instantiate(this.Spawnable);\r\n    }\r\n}\r\nclass LogAction extends LevelAction {\r\n    constructor(Message) {\r\n        super();\r\n        this.Message = Message;\r\n    }\r\n    Action() {\r\n        _Core_GameConsole__WEBPACK_IMPORTED_MODULE_1__.GameConsole.LogMessage(this.Message);\r\n    }\r\n}\r\nclass LevelCodeExecute extends LevelAction {\r\n    constructor() {\r\n        super();\r\n    }\r\n    Action() {\r\n    }\r\n}\r\n//# sourceMappingURL=Level.js.map\n\n//# sourceURL=webpack://EntryPoint/./bin/Level.js?");

/***/ }),

/***/ "./bin/Pattern.js":
/*!************************!*\
  !*** ./bin/Pattern.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Pattern\": () => (/* binding */ Pattern)\n/* harmony export */ });\n/* harmony import */ var _Bullet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Bullet */ \"./bin/Bullet.js\");\n/* harmony import */ var _Core_Collider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Core/Collider */ \"./bin/Core/Collider.js\");\n/* harmony import */ var _Core_GameManager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Core/GameManager */ \"./bin/Core/GameManager.js\");\n/* harmony import */ var _Core_Rect__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Core/Rect */ \"./bin/Core/Rect.js\");\n/* harmony import */ var _Core_Point__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Core/Point */ \"./bin/Core/Point.js\");\n\r\n\r\n\r\n\r\n\r\nclass Pattern {\r\n    constructor(Bullets, Interval, PatternCode) {\r\n        this.Bullets = Bullets;\r\n        this.Interval = Interval;\r\n        this.PatternCode = PatternCode;\r\n    }\r\n    Fire(Position) {\r\n        for (let i = 0; i < this.Bullets.length; i++) {\r\n            let _bulletArray = this.Bullets[i];\r\n            let _bullet = new _Bullet__WEBPACK_IMPORTED_MODULE_0__.Bullet(Position, new _Core_Rect__WEBPACK_IMPORTED_MODULE_3__.Rect(5, 5, \"red\"), new _Core_Collider__WEBPACK_IMPORTED_MODULE_1__.BoxCollider(5, 5, _Core_Point__WEBPACK_IMPORTED_MODULE_4__.Point.DecodePoint(_bulletArray[0])), \"EnemyBullet\", _Core_Point__WEBPACK_IMPORTED_MODULE_4__.Point.DecodePoint(_bulletArray[1]), parseFloat(_bulletArray[2]));\r\n            console.log(\"A pattern has fired!\");\r\n            _Core_GameManager__WEBPACK_IMPORTED_MODULE_2__.GameManager.Instantiate(_bullet);\r\n        }\r\n    }\r\n    PatternStep() {\r\n    }\r\n    StartPattern(Position) {\r\n        this.interval = setInterval(() => this.PatternStep(), 10);\r\n    }\r\n    StopPattern() {\r\n        clearInterval(this.interval);\r\n    }\r\n}\r\n//# sourceMappingURL=Pattern.js.map\n\n//# sourceURL=webpack://EntryPoint/./bin/Pattern.js?");

/***/ }),

/***/ "./bin/Player.js":
/*!***********************!*\
  !*** ./bin/Player.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Player\": () => (/* binding */ Player)\n/* harmony export */ });\n/* harmony import */ var _Bullet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Bullet */ \"./bin/Bullet.js\");\n/* harmony import */ var _Core_Collider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Core/Collider */ \"./bin/Core/Collider.js\");\n/* harmony import */ var _Core_GameManager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Core/GameManager */ \"./bin/Core/GameManager.js\");\n/* harmony import */ var _Core_GameObject__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Core/GameObject */ \"./bin/Core/GameObject.js\");\n/* harmony import */ var _Core_Graphic__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Core/Graphic */ \"./bin/Core/Graphic.js\");\n/* harmony import */ var _Core_Input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Core/Input */ \"./bin/Core/Input.js\");\n/* harmony import */ var _Core_Point__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Core/Point */ \"./bin/Core/Point.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nclass Player extends _Core_GameObject__WEBPACK_IMPORTED_MODULE_3__.GameObject {\r\n    constructor(Posistion, Graphic, Collider) {\r\n        super(Posistion, Graphic, Collider);\r\n        this.ShootTimerValue = 0;\r\n        this.ShootTimer = 10;\r\n        this.CurrentAngle = 180;\r\n        this.Counter = 0;\r\n        this.Tag = \"Player\";\r\n    }\r\n    LogicUpdate() {\r\n        super.LogicUpdate();\r\n        if (\"arrowright\" in _Core_Input__WEBPACK_IMPORTED_MODULE_5__.Input.KeysDown) {\r\n            this.Position.x += 1;\r\n        }\r\n        if (\"arrowleft\" in _Core_Input__WEBPACK_IMPORTED_MODULE_5__.Input.KeysDown) {\r\n            this.Position.x -= 1;\r\n        }\r\n        if (\"arrowup\" in _Core_Input__WEBPACK_IMPORTED_MODULE_5__.Input.KeysDown) {\r\n            this.Position.y -= 1;\r\n        }\r\n        if (\"arrowdown\" in _Core_Input__WEBPACK_IMPORTED_MODULE_5__.Input.KeysDown) {\r\n            this.Position.y += 1;\r\n        }\r\n        if (\" \" in _Core_Input__WEBPACK_IMPORTED_MODULE_5__.Input.KeysDown) {\r\n            if (this.ShootTimerValue <= 0) {\r\n                let value = Math.sin(this.Counter);\r\n                this.CurrentAngle = 270;\r\n                _Core_GameManager__WEBPACK_IMPORTED_MODULE_2__.GameManager.Instantiate(new _Bullet__WEBPACK_IMPORTED_MODULE_0__.Bullet(this.Position, new _Core_Graphic__WEBPACK_IMPORTED_MODULE_4__.Rect(5, 5, \"red\"), new _Core_Collider__WEBPACK_IMPORTED_MODULE_1__.BoxCollider(5, 5, this.Position), \"PlayerBullet\", _Core_Point__WEBPACK_IMPORTED_MODULE_6__.Point.AngleToHeading(this.CurrentAngle), 3.5));\r\n                this.Counter += 1;\r\n                this.ShootTimerValue = this.ShootTimer;\r\n            }\r\n            else {\r\n                this.ShootTimerValue -= 1;\r\n            }\r\n        }\r\n        else {\r\n            this.ShootTimerValue = this.ShootTimer;\r\n        }\r\n    }\r\n}\r\n//# sourceMappingURL=Player.js.map\n\n//# sourceURL=webpack://EntryPoint/./bin/Player.js?");

/***/ }),

/***/ "./bin/TestLevel.json":
/*!****************************!*\
  !*** ./bin/TestLevel.json ***!
  \****************************/
/***/ ((module) => {

eval("module.exports = JSON.parse('[{\"LevelName\":\"Test\",\"Author\":\"Ikari\",\"Imports\":[{\"Type\":\"Pattern\",\"URL\":\"USER::PATTERNNAME\"},{\"Type\":\"Enemy\",\"URL\":\"USER::ENEMYNAME\"}],\"Patterns\":[{\"Name\":\"Pattern1\",\"Bullets\":[[\"0,0\",\"GraphicType\",\"2\",\"EnemyBullet\",\"-1,1\",\"5\"],[\"0,0\",\"GraphicType\",\"2\",\"EnemyBullet\",\"-0.9,1\",\"5\"],[\"0,0\",\"GraphicType\",\"2\",\"EnemyBullet\",\"-0.6,1\",\"5\"],[\"0,0\",\"GraphicType\",\"2\",\"EnemyBullet\",\"-0.3,1\",\"5\"],[\"0,0\",\"GraphicType\",\"2\",\"EnemyBullet\",\"0,1\",\"5\"],[\"0,0\",\"GraphicType\",\"2\",\"EnemyBullet\",\"0.3,1\",\"5\"],[\"0,0\",\"GraphicType\",\"2\",\"EnemyBullet\",\"-0.6,1\",\"5\"],[\"0,0\",\"GraphicType\",\"2\",\"EnemyBullet\",\"0.9,1\",\"5\"],[\"0,0\",\"GraphicType\",\"2\",\"EnemyBullet\",\"1,1\",\"5\"]],\"Interval\":\"2\",\"Repeat\":\"5\"},{\"Name\":\"Pattern2\",\"Bullets\":[[\"0,0\",\"GraphicType\",\"2\",\"EnemyBullet\",\"-5,0.2\",\"0.3\"]],\"Interval\":\"2\",\"Repeat\":\"5\"}],\"Enemy\":{},\"Level\":{\"0\":{\"Actions\":[{\"ActionType\":\"SpawnAction\",\"SpawnType\":\"Player\",\"Position\":\"400,700\"},{\"ActionType\":\"Declare\",\"Name\":\"Var1\",\"Value\":\"0\"},{\"ActionType\":\"Declare\",\"Name\":\"Var2\",\"Value\":\"50\"},{\"ActionType\":\"Execute\",\"Code\":[[\"AddVar\",[\"Var1\",\"Var1\"]]]},{\"ActionType\":\"ConsoleLog\",\"Message\":\"Test!\"},{\"ActionType\":\"ConsoleLog\",\"Message\":\"Test!\"},{\"ActionType\":\"ConsoleLog\",\"Message\":\"Test!\"},{\"ActionType\":\"ConsoleLog\",\"Message\":\"Test!\"},{\"ActionType\":\"ConsoleLog\",\"Message\":\"Test!\"}]},\"50\":{\"Actions\":[{\"ActionType\":\"SpawnAction\",\"SpawnType\":\"Enemy\",\"Enemies\":[{\"Graphic\":\"GraphicName\",\"Health\":\"100\",\"Position\":\"100\",\"StartSpeed\":\"10\",\"EnemyPath\":[[\"Move\",\"5\",\"400,500\",\"10\"],[\"Shoot\",\"50\",\"Pattern1\"]]},{\"Graphic\":\"GraphicName\",\"Health\":\"100\",\"Position\":\"50\",\"StartSpeed\":\"10\",\"EnemyPath\":[[\"DeclareVar\",\"0\",\"VARNAME\",\"VALUE\"],[\"Move\",\"15\",\"300,500\",\"10\"],[\"Shoot\",\"100\",\"Pattern1\"],[\"SetVar\",\"20\",\"VARNAME\",\"VALUE\"],[\"RepeatShoot\",\"40\",\"0:VAR\",\"Pattern1\"],[\"EndRepeatShoot\",\"60\",\"0\"]]}]}]},\"100\":{\"Actions\":[{\"ActionType\":\"SpawnAction\",\"SpawnType\":\"Enemy\",\"Enemies\":[{\"Graphic\":\"GraphicName\",\"Health\":\"100\",\"Position\":\"100\",\"StartSpeed\":\"10\",\"EnemyPath\":[[\"Move\",\"5\",\"400,500\",\"10\"],[\"Shoot\",\"50\",\"Pattern1\"]]},{\"Graphic\":\"GraphicName\",\"Health\":\"100\",\"Position\":\"50\",\"StartSpeed\":\"10\",\"EnemyPath\":[[\"DeclareVar\",\"0\",\"VARNAME\",\"VALUE\"],[\"Move\",\"15\",\"300,500\",\"10\"],[\"Shoot\",\"100\",\"Pattern1\"],[\"SetVar\",\"20\",\"VARNAME\",\"VALUE\"],[\"RepeatShoot\",\"40\",\"0:VAR\",\"Pattern1\"],[\"EndRepeatShoot\",\"60\",\"0\"]]}]}]}}}]');\n\n//# sourceURL=webpack://EntryPoint/./bin/TestLevel.json?");

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