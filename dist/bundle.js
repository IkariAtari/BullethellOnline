/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./bin/Bullet.js":
/*!***********************!*\
  !*** ./bin/Bullet.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Bullet\": () => (/* binding */ Bullet)\n/* harmony export */ });\n/* harmony import */ var _Core_GameObject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Core/GameObject */ \"./bin/Core/GameObject.js\");\n/* harmony import */ var _Core_Point__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Core/Point */ \"./bin/Core/Point.js\");\n/* harmony import */ var _Core_GameManager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Core/GameManager */ \"./bin/Core/GameManager.js\");\n\r\n\r\n\r\nclass Bullet extends _Core_GameObject__WEBPACK_IMPORTED_MODULE_0__.GameObject {\r\n    constructor(Posistion, Graphic, Collider, Tag, Direction, Speed) {\r\n        super(Posistion, Graphic, Collider);\r\n        this.Tag = Tag;\r\n        this.Velocity = _Core_Point__WEBPACK_IMPORTED_MODULE_1__.Point.Mult(_Core_Point__WEBPACK_IMPORTED_MODULE_1__.Point.Normalize(Direction), Speed);\r\n    }\r\n    LogicUpdate() {\r\n        super.LogicUpdate();\r\n        this.Position = _Core_Point__WEBPACK_IMPORTED_MODULE_1__.Point.Add(this.Position, this.Velocity);\r\n        if (this.Position.y <= 0) {\r\n            _Core_GameManager__WEBPACK_IMPORTED_MODULE_2__.GameManager.RemoveGameObject(this);\r\n        }\r\n        if (this.Position.x <= 0) {\r\n            _Core_GameManager__WEBPACK_IMPORTED_MODULE_2__.GameManager.RemoveGameObject(this);\r\n        }\r\n    }\r\n    OnCollision(Collision) {\r\n        if (Collision.Tag == \"Player\") {\r\n            if (this.Tag == \"EnemyBullet\") {\r\n            }\r\n        }\r\n        if (Collision.Tag == \"Enemy\") {\r\n            if (this.Tag == \"PlayerBullet\") {\r\n                let enemy = Collision;\r\n                enemy.Hurt(1);\r\n                _Core_GameManager__WEBPACK_IMPORTED_MODULE_2__.GameManager.RemoveGameObject(this);\r\n            }\r\n        }\r\n    }\r\n}\r\n//# sourceMappingURL=Bullet.js.map\n\n//# sourceURL=webpack://bullethellonline/./bin/Bullet.js?");

/***/ }),

/***/ "./bin/Core/Behaviour.js":
/*!*******************************!*\
  !*** ./bin/Core/Behaviour.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Behaviour\": () => (/* binding */ Behaviour)\n/* harmony export */ });\nclass Behaviour {\r\n    LogicUpdate() {\r\n    }\r\n}\r\n//# sourceMappingURL=Behaviour.js.map\n\n//# sourceURL=webpack://bullethellonline/./bin/Core/Behaviour.js?");

/***/ }),

/***/ "./bin/Core/Collider.js":
/*!******************************!*\
  !*** ./bin/Core/Collider.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"BoxCollider\": () => (/* binding */ BoxCollider)\n/* harmony export */ });\n/* harmony import */ var _Graphic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Graphic */ \"./bin/Core/Graphic.js\");\n\r\nclass Collider {\r\n    constructor() { }\r\n    CheckCollision(a) {\r\n        return false;\r\n    }\r\n}\r\nclass BoxCollider extends Collider {\r\n    constructor(Width, Height, Position) {\r\n        super();\r\n        this.Width = Width;\r\n        this.Height = Height;\r\n        this.Posistion = Position;\r\n        this.Rect = new _Graphic__WEBPACK_IMPORTED_MODULE_0__.Rect(Width, Height, \"green\");\r\n    }\r\n    CheckCollision(a) {\r\n        if (this.Posistion.x < a.Posistion.x + a.Width && this.Posistion.x + this.Width > a.Posistion.x && this.Posistion.y < a.Posistion.y + a.Height && this.Posistion.y + this.Height > a.Posistion.y) {\r\n            return true;\r\n        }\r\n        else {\r\n            return false;\r\n        }\r\n    }\r\n}\r\n0.;\r\n//# sourceMappingURL=Collider.js.map\n\n//# sourceURL=webpack://bullethellonline/./bin/Core/Collider.js?");

/***/ }),

/***/ "./bin/Core/GameManager.js":
/*!*********************************!*\
  !*** ./bin/Core/GameManager.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"GameManager\": () => (/* binding */ GameManager)\n/* harmony export */ });\n/* harmony import */ var _Level__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Level */ \"./bin/Level.js\");\n/* harmony import */ var _Input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Input */ \"./bin/Core/Input.js\");\n\r\n\r\nclass GameManager {\r\n    constructor() {\r\n        console.log(\"Game instance created\");\r\n        GameManager.Context = document.getElementById(\"canvas\").getContext(\"2d\");\r\n        this.CurrentLevel = new _Level__WEBPACK_IMPORTED_MODULE_0__.Level();\r\n        this.timer = setInterval(() => this.GameUpdate(), 10);\r\n    }\r\n    static Instantiate(GameObject) {\r\n        GameManager.GameObjects[GameManager.GameObjects.length] = GameObject;\r\n    }\r\n    static RemoveGameObject(GameObject) {\r\n        for (let i = 0; i < GameManager.GameObjects.length; i++) {\r\n            if (GameManager.GameObjects[i].ID == GameObject.ID) {\r\n                GameManager.GameObjects.splice(i, 1);\r\n                console.log(GameManager.GameObjects);\r\n            }\r\n        }\r\n    }\r\n    GameUpdate() {\r\n        _Input__WEBPACK_IMPORTED_MODULE_1__.Input.HandleKeys();\r\n        this.CurrentLevel.LogicUpdate();\r\n    }\r\n}\r\nGameManager.GameObjects = [];\r\n//# sourceMappingURL=GameManager.js.map\n\n//# sourceURL=webpack://bullethellonline/./bin/Core/GameManager.js?");

/***/ }),

/***/ "./bin/Core/GameObject.js":
/*!********************************!*\
  !*** ./bin/Core/GameObject.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"GameObject\": () => (/* binding */ GameObject)\n/* harmony export */ });\n/* harmony import */ var _Behaviour__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Behaviour */ \"./bin/Core/Behaviour.js\");\n/* harmony import */ var _GameManager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GameManager */ \"./bin/Core/GameManager.js\");\n\r\n\r\nclass GameObject extends _Behaviour__WEBPACK_IMPORTED_MODULE_0__.Behaviour {\r\n    constructor(Position, Graphic, Collider, Tag = \"none\") {\r\n        super();\r\n        this.Position = Position;\r\n        this.Graphic = Graphic;\r\n        this.Collider = Collider;\r\n        this.Tag = Tag;\r\n        if (GameObject.Count == null) {\r\n            GameObject.Count = 0;\r\n        }\r\n        else {\r\n            GameObject.Count += 1;\r\n        }\r\n        this.ID = GameObject.Count;\r\n    }\r\n    Start() {\r\n    }\r\n    LogicUpdate() {\r\n        this.Graphic.Position = this.Position;\r\n        this.Collider.Posistion = this.Position;\r\n        for (let i = 0; i < _GameManager__WEBPACK_IMPORTED_MODULE_1__.GameManager.GameObjects.length; i++) {\r\n            if (_GameManager__WEBPACK_IMPORTED_MODULE_1__.GameManager.GameObjects[i] != this) {\r\n                GameObject.CheckCollision(this, _GameManager__WEBPACK_IMPORTED_MODULE_1__.GameManager.GameObjects[i]);\r\n            }\r\n        }\r\n    }\r\n    Draw() {\r\n        this.Graphic.Draw();\r\n    }\r\n    static CheckCollision(a, b) {\r\n        if (a.Collider.CheckCollision(b.Collider)) {\r\n            b.OnCollision(a);\r\n        }\r\n    }\r\n    OnCollision(Collision) {\r\n    }\r\n}\r\n//# sourceMappingURL=GameObject.js.map\n\n//# sourceURL=webpack://bullethellonline/./bin/Core/GameObject.js?");

/***/ }),

/***/ "./bin/Core/Graphic.js":
/*!*****************************!*\
  !*** ./bin/Core/Graphic.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Graphic\": () => (/* binding */ Graphic),\n/* harmony export */   \"Rect\": () => (/* binding */ Rect)\n/* harmony export */ });\n/* harmony import */ var _GameManager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GameManager */ \"./bin/Core/GameManager.js\");\n\r\nclass Graphic {\r\n    constructor() { }\r\n    Draw() { }\r\n}\r\nclass Rect extends Graphic {\r\n    constructor(Length, Height, Color) {\r\n        super();\r\n        this.Length = Length;\r\n        this.Height = Height;\r\n        this.Color = Color;\r\n    }\r\n    Draw() {\r\n        _GameManager__WEBPACK_IMPORTED_MODULE_0__.GameManager.Context.beginPath();\r\n        _GameManager__WEBPACK_IMPORTED_MODULE_0__.GameManager.Context.fillStyle = this.Color;\r\n        _GameManager__WEBPACK_IMPORTED_MODULE_0__.GameManager.Context.fillRect(this.Position.x, this.Position.y, this.Length, this.Height);\r\n    }\r\n}\r\n//# sourceMappingURL=Graphic.js.map\n\n//# sourceURL=webpack://bullethellonline/./bin/Core/Graphic.js?");

/***/ }),

/***/ "./bin/Core/Input.js":
/*!***************************!*\
  !*** ./bin/Core/Input.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Input\": () => (/* binding */ Input)\n/* harmony export */ });\nclass Input {\r\n    static HandleKeys() {\r\n        addEventListener(\"keydown\", (e) => {\r\n            this.KeysDown[e.key.toLowerCase()] = true;\r\n        }, false);\r\n        addEventListener(\"keyup\", (e) => {\r\n            delete this.KeysDown[e.key.toLowerCase()];\r\n        }, false);\r\n    }\r\n}\r\nInput.KeysDown = [];\r\n//# sourceMappingURL=Input.js.map\n\n//# sourceURL=webpack://bullethellonline/./bin/Core/Input.js?");

/***/ }),

/***/ "./bin/Core/Point.js":
/*!***************************!*\
  !*** ./bin/Core/Point.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Point\": () => (/* binding */ Point)\n/* harmony export */ });\nclass Point {\r\n    constructor(x, y) {\r\n        this.x = x;\r\n        this.y = y;\r\n    }\r\n    static Add(a, b) {\r\n        let c = new Point(0, 0);\r\n        c.x = a.x + b.x;\r\n        c.y = a.y + b.y;\r\n        return c;\r\n    }\r\n    static Mult(a, b) {\r\n        let c = new Point(0, 0);\r\n        c.x = a.x * b;\r\n        c.y = a.y * b;\r\n        return c;\r\n    }\r\n    static Direction(a, b) {\r\n        return new Point(b.x - a.x, b.y - a.y);\r\n    }\r\n    static Magnitude(a) {\r\n        return Number(Math.sqrt((a.x * a.x) + (a.y * a.y)).toFixed(10));\r\n    }\r\n    static Normalize(a) {\r\n        let mag = Point.Magnitude(a);\r\n        return new Point(a.x / mag, a.y / mag);\r\n    }\r\n    static AngleToHeading(a) {\r\n        let Radians = a * (Math.PI / 180);\r\n        return new Point(Number(Math.cos(Radians).toFixed(10)), Number(Math.sin(Radians).toFixed(10)));\r\n    }\r\n}\r\n//# sourceMappingURL=Point.js.map\n\n//# sourceURL=webpack://bullethellonline/./bin/Core/Point.js?");

/***/ }),

/***/ "./bin/Enemy.js":
/*!**********************!*\
  !*** ./bin/Enemy.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Enemy\": () => (/* binding */ Enemy),\n/* harmony export */   \"EnemyPath\": () => (/* binding */ EnemyPath)\n/* harmony export */ });\n/* harmony import */ var _Core_GameObject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Core/GameObject */ \"./bin/Core/GameObject.js\");\n/* harmony import */ var _Core_Point__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Core/Point */ \"./bin/Core/Point.js\");\n/* harmony import */ var _Core_GameManager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Core/GameManager */ \"./bin/Core/GameManager.js\");\n\r\n\r\n\r\nclass Enemy extends _Core_GameObject__WEBPACK_IMPORTED_MODULE_0__.GameObject {\r\n    constructor(Position, Graphic, Collider, Health, Path, Speed) {\r\n        super(new _Core_Point__WEBPACK_IMPORTED_MODULE_1__.Point(Position, -10), Graphic, Collider);\r\n        this.isOnHold = false;\r\n        this.Health = Health;\r\n        this.Path = Path;\r\n        this.Speed = Speed;\r\n        this.Tick = 0;\r\n        this.Iteration = 0;\r\n        this.Tag = \"Enemy\";\r\n    }\r\n    LogicUpdate() {\r\n        super.LogicUpdate();\r\n        if (this.Health <= 0) {\r\n            _Core_GameManager__WEBPACK_IMPORTED_MODULE_2__.GameManager.RemoveGameObject(this);\r\n        }\r\n        if (this.Tick < this.Path.Actions.length) {\r\n            if (this.Iteration == this.Path.Actions[this.Tick][1]) {\r\n                switch (this.Path.Actions[this.Tick][0]) {\r\n                    case \"move\":\r\n                        this.Target = this.Path.Actions[this.Tick][2];\r\n                        break;\r\n                    case \"speed\":\r\n                        break;\r\n                    case \"shoot\":\r\n                        let pattern = this.Path.Actions[this.Tick][2];\r\n                        pattern.Fire(this.Position);\r\n                        break;\r\n                    case \"StartInterval\":\r\n                        break;\r\n                    case \"StopInterval\":\r\n                        break;\r\n                    default:\r\n                        console.log(\"No valid action assigned\");\r\n                        break;\r\n                }\r\n                this.Tick += 1;\r\n            }\r\n        }\r\n        this.Iteration += 1;\r\n        let dir = _Core_Point__WEBPACK_IMPORTED_MODULE_1__.Point.Direction(this.Position, this.Target);\r\n        this.Position = _Core_Point__WEBPACK_IMPORTED_MODULE_1__.Point.Add(this.Position, _Core_Point__WEBPACK_IMPORTED_MODULE_1__.Point.Normalize(new _Core_Point__WEBPACK_IMPORTED_MODULE_1__.Point(dir.x * this.Speed, dir.y * this.Speed)));\r\n    }\r\n    Hurt(Damage) {\r\n        this.Health -= Damage;\r\n    }\r\n}\r\nclass EnemyPath {\r\n    constructor(Actions) {\r\n        this.Actions = Actions;\r\n    }\r\n}\r\n//# sourceMappingURL=Enemy.js.map\n\n//# sourceURL=webpack://bullethellonline/./bin/Enemy.js?");

/***/ }),

/***/ "./bin/Index.js":
/*!**********************!*\
  !*** ./bin/Index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Core_GameManager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Core/GameManager */ \"./bin/Core/GameManager.js\");\n\r\nnew _Core_GameManager__WEBPACK_IMPORTED_MODULE_0__.GameManager();\r\n//# sourceMappingURL=Index.js.map\n\n//# sourceURL=webpack://bullethellonline/./bin/Index.js?");

/***/ }),

/***/ "./bin/Level.js":
/*!**********************!*\
  !*** ./bin/Level.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Level\": () => (/* binding */ Level)\n/* harmony export */ });\n/* harmony import */ var _Bullet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Bullet */ \"./bin/Bullet.js\");\n/* harmony import */ var _Core_Collider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Core/Collider */ \"./bin/Core/Collider.js\");\n/* harmony import */ var _Core_GameManager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Core/GameManager */ \"./bin/Core/GameManager.js\");\n/* harmony import */ var _Core_Graphic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Core/Graphic */ \"./bin/Core/Graphic.js\");\n/* harmony import */ var _Core_Point__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Core/Point */ \"./bin/Core/Point.js\");\n/* harmony import */ var _Enemy__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Enemy */ \"./bin/Enemy.js\");\n/* harmony import */ var _Pattern__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Pattern */ \"./bin/Pattern.js\");\n/* harmony import */ var _Player__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Player */ \"./bin/Player.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nclass Level {\r\n    constructor() {\r\n        this.BlockWords = [\r\n            'bullet',\r\n            'pattern',\r\n            'enemy',\r\n            'path',\r\n            'level',\r\n            'start',\r\n            'action'\r\n        ];\r\n        this.StatementWords = [\r\n            'print',\r\n            'spawn',\r\n            'shoot',\r\n            'health',\r\n            'spawnat',\r\n            'move'\r\n        ];\r\n        this.Blocks = new Array();\r\n        this.Patterns = [\r\n            new _Pattern__WEBPACK_IMPORTED_MODULE_6__.Pattern(new Array(new _Bullet__WEBPACK_IMPORTED_MODULE_0__.Bullet(new _Core_Point__WEBPACK_IMPORTED_MODULE_4__.Point(0, 0), new _Core_Graphic__WEBPACK_IMPORTED_MODULE_3__.Rect(5, 5, \"purple\"), new _Core_Collider__WEBPACK_IMPORTED_MODULE_1__.BoxCollider(5, 5, new _Core_Point__WEBPACK_IMPORTED_MODULE_4__.Point(0, 0)), \"EnemyBullet\", new _Core_Point__WEBPACK_IMPORTED_MODULE_4__.Point(-5, 0.2), 0.2), new _Bullet__WEBPACK_IMPORTED_MODULE_0__.Bullet(new _Core_Point__WEBPACK_IMPORTED_MODULE_4__.Point(0, 0), new _Core_Graphic__WEBPACK_IMPORTED_MODULE_3__.Rect(5, 5, \"purple\"), new _Core_Collider__WEBPACK_IMPORTED_MODULE_1__.BoxCollider(5, 5, new _Core_Point__WEBPACK_IMPORTED_MODULE_4__.Point(0, 0)), \"EnemyBullet\", new _Core_Point__WEBPACK_IMPORTED_MODULE_4__.Point(-2.5, 0.2), 0.2), new _Bullet__WEBPACK_IMPORTED_MODULE_0__.Bullet(new _Core_Point__WEBPACK_IMPORTED_MODULE_4__.Point(0, 0), new _Core_Graphic__WEBPACK_IMPORTED_MODULE_3__.Rect(5, 5, \"purple\"), new _Core_Collider__WEBPACK_IMPORTED_MODULE_1__.BoxCollider(5, 5, new _Core_Point__WEBPACK_IMPORTED_MODULE_4__.Point(0, 0)), \"EnemyBullet\", new _Core_Point__WEBPACK_IMPORTED_MODULE_4__.Point(0, 0.2), 0.2), new _Bullet__WEBPACK_IMPORTED_MODULE_0__.Bullet(new _Core_Point__WEBPACK_IMPORTED_MODULE_4__.Point(0, 0), new _Core_Graphic__WEBPACK_IMPORTED_MODULE_3__.Rect(5, 5, \"purple\"), new _Core_Collider__WEBPACK_IMPORTED_MODULE_1__.BoxCollider(5, 5, new _Core_Point__WEBPACK_IMPORTED_MODULE_4__.Point(0, 0)), \"EnemyBullet\", new _Core_Point__WEBPACK_IMPORTED_MODULE_4__.Point(2.5, 0.2), 0.2), new _Bullet__WEBPACK_IMPORTED_MODULE_0__.Bullet(new _Core_Point__WEBPACK_IMPORTED_MODULE_4__.Point(0, 0), new _Core_Graphic__WEBPACK_IMPORTED_MODULE_3__.Rect(5, 5, \"purple\"), new _Core_Collider__WEBPACK_IMPORTED_MODULE_1__.BoxCollider(5, 5, new _Core_Point__WEBPACK_IMPORTED_MODULE_4__.Point(0, 0)), \"EnemyBullet\", new _Core_Point__WEBPACK_IMPORTED_MODULE_4__.Point(5, 0.2), 0.2)), 0, \"\")\r\n        ];\r\n        this.Level = [\r\n            new LevelTick(0, new SpawnAction(new _Player__WEBPACK_IMPORTED_MODULE_7__.Player(new _Core_Point__WEBPACK_IMPORTED_MODULE_4__.Point(40, 40), new _Core_Graphic__WEBPACK_IMPORTED_MODULE_3__.Rect(10, 10, \"green\"), new _Core_Collider__WEBPACK_IMPORTED_MODULE_1__.BoxCollider(10, 10, new _Core_Point__WEBPACK_IMPORTED_MODULE_4__.Point(40, 40))))),\r\n            new LevelTick(500, new SpawnAction(new _Enemy__WEBPACK_IMPORTED_MODULE_5__.Enemy(100, new _Core_Graphic__WEBPACK_IMPORTED_MODULE_3__.Rect(10, 10, \"purple\"), new _Core_Collider__WEBPACK_IMPORTED_MODULE_1__.BoxCollider(10, 10, new _Core_Point__WEBPACK_IMPORTED_MODULE_4__.Point(40, 10)), 10, new _Enemy__WEBPACK_IMPORTED_MODULE_5__.EnemyPath([\r\n                [\"move\", 10, new _Core_Point__WEBPACK_IMPORTED_MODULE_4__.Point(150, 200)],\r\n                [\"move\", 50, new _Core_Point__WEBPACK_IMPORTED_MODULE_4__.Point(400, 100)],\r\n                [\"shoot\", 55, this.Patterns[0]],\r\n                [\"shoot\", 60, this.Patterns[0]],\r\n                [\"shoot\", 70, this.Patterns[0]],\r\n                [\"shoot\", 80, this.Patterns[0]],\r\n                [\"shoot\", 90, this.Patterns[0]]\r\n            ]), 0.1))),\r\n        ];\r\n        this.Tick = 0;\r\n        this.Iteration = 0;\r\n        this.Interpet();\r\n    }\r\n    Interpet() {\r\n        let file = \"LEVEL START PRINT KAAS; END END\";\r\n        this.Tokens = file.split(\";\");\r\n        this.Tokens = file.split(/\\s+/);\r\n        this.MakeBlockList(this.Tokens);\r\n        this.BuildLevel();\r\n    }\r\n    MakeBlockList(_toProcess) {\r\n        let _backlog = 0;\r\n        let _tokens = new Array();\r\n        let _startToken;\r\n        for (let i = 0; i < _toProcess.length; i++) {\r\n            if (this.BlockWords.includes(_toProcess[i].toLowerCase())) {\r\n                _backlog++;\r\n                _startToken = i;\r\n            }\r\n            if (_toProcess[i].toLowerCase() == \"end\") {\r\n                _backlog--;\r\n                if (_backlog == 0) {\r\n                    let _block = new Block();\r\n                    let _blockCode = _toProcess.slice(_startToken + 1, i - 1);\r\n                    for (let j = 0; j < _blockCode.length; j++) {\r\n                        if (this.StatementWords.includes(_blockCode[j].toLowerCase())) {\r\n                            let _statement;\r\n                            switch (_blockCode[j].toLowerCase()) {\r\n                                case \"print\":\r\n                                    _statement = new PrintStatement();\r\n                                    _statement.Arguments.push(_blockCode[j + 1]);\r\n                                    break;\r\n                            }\r\n                            _block.Commands.push(_statement);\r\n                        }\r\n                        else if (this.BlockWords.includes(_blockCode[j].toLowerCase())) {\r\n                        }\r\n                        else {\r\n                        }\r\n                    }\r\n                    this.Blocks.push(_block);\r\n                }\r\n            }\r\n        }\r\n        console.log(this.Blocks);\r\n        return _tokens;\r\n    }\r\n    ProcessBlock(_type, _block) {\r\n    }\r\n    BuildLevel() {\r\n        for (let i = 0; i < this.Blocks.length; i++) {\r\n            this.Blocks[i].RunBlock();\r\n        }\r\n    }\r\n    LogicUpdate() {\r\n        if (this.Tick < this.Level.length) {\r\n            if (this.Iteration == this.Level[this.Tick].AtTime) {\r\n                this.Level[this.Tick].Action.Action();\r\n                this.Tick++;\r\n            }\r\n        }\r\n        this.Iteration += 1;\r\n        _Core_GameManager__WEBPACK_IMPORTED_MODULE_2__.GameManager.Context.clearRect(0, 0, 500, 500);\r\n        for (let i = 0; i < _Core_GameManager__WEBPACK_IMPORTED_MODULE_2__.GameManager.GameObjects.length; i++) {\r\n            _Core_GameManager__WEBPACK_IMPORTED_MODULE_2__.GameManager.GameObjects[i].LogicUpdate();\r\n        }\r\n        this.DrawUpdate();\r\n    }\r\n    DrawUpdate() {\r\n        for (let i = 0; i < _Core_GameManager__WEBPACK_IMPORTED_MODULE_2__.GameManager.GameObjects.length; i++) {\r\n            _Core_GameManager__WEBPACK_IMPORTED_MODULE_2__.GameManager.GameObjects[i].Draw();\r\n        }\r\n    }\r\n}\r\nclass LevelTick {\r\n    constructor(AtTime, Action) {\r\n        this.AtTime = AtTime;\r\n        this.Action = Action;\r\n        console.log(\"Initated level action at: \" + this.AtTime.toString());\r\n    }\r\n}\r\nclass LevelAction {\r\n}\r\nclass SpawnAction extends LevelAction {\r\n    constructor(Spawnable) {\r\n        super();\r\n        this.Spawnable = Spawnable;\r\n    }\r\n    Action() {\r\n        _Core_GameManager__WEBPACK_IMPORTED_MODULE_2__.GameManager.Instantiate(this.Spawnable);\r\n    }\r\n}\r\nclass Statement {\r\n    constructor() {\r\n        this.Arguments = new Array();\r\n    }\r\n    Run() {\r\n    }\r\n}\r\nclass PrintStatement extends Statement {\r\n    Run() {\r\n        console.log(this.Arguments[0]);\r\n    }\r\n}\r\nclass Block {\r\n    constructor() {\r\n        this.Commands = new Array();\r\n    }\r\n    RunBlock() {\r\n        for (let i = 0; i < this.Commands.length; i++) {\r\n            this.Commands[i].Run();\r\n        }\r\n    }\r\n}\r\n//# sourceMappingURL=Level.js.map\n\n//# sourceURL=webpack://bullethellonline/./bin/Level.js?");

/***/ }),

/***/ "./bin/Pattern.js":
/*!************************!*\
  !*** ./bin/Pattern.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Pattern\": () => (/* binding */ Pattern)\n/* harmony export */ });\n/* harmony import */ var _Core_GameManager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Core/GameManager */ \"./bin/Core/GameManager.js\");\n\r\nclass Pattern {\r\n    constructor(Bullets, Interval, PatternCode) {\r\n        this.Bullets = Bullets;\r\n        this.Interval = Interval;\r\n        this.PatternCode = PatternCode;\r\n    }\r\n    Fire(Position) {\r\n        for (let i = 0; i < this.Bullets.length; i++) {\r\n            this.Bullets[i].Position = Position;\r\n            _Core_GameManager__WEBPACK_IMPORTED_MODULE_0__.GameManager.Instantiate(this.Bullets[i]);\r\n        }\r\n    }\r\n    PatternStep() {\r\n    }\r\n    StartPattern(Position) {\r\n        this.interval = setInterval(() => this.PatternStep(), 10);\r\n    }\r\n    StopPattern() {\r\n        clearInterval(this.interval);\r\n    }\r\n}\r\n//# sourceMappingURL=Pattern.js.map\n\n//# sourceURL=webpack://bullethellonline/./bin/Pattern.js?");

/***/ }),

/***/ "./bin/Player.js":
/*!***********************!*\
  !*** ./bin/Player.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Player\": () => (/* binding */ Player)\n/* harmony export */ });\n/* harmony import */ var _Bullet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Bullet */ \"./bin/Bullet.js\");\n/* harmony import */ var _Core_Collider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Core/Collider */ \"./bin/Core/Collider.js\");\n/* harmony import */ var _Core_GameManager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Core/GameManager */ \"./bin/Core/GameManager.js\");\n/* harmony import */ var _Core_GameObject__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Core/GameObject */ \"./bin/Core/GameObject.js\");\n/* harmony import */ var _Core_Graphic__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Core/Graphic */ \"./bin/Core/Graphic.js\");\n/* harmony import */ var _Core_Input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Core/Input */ \"./bin/Core/Input.js\");\n/* harmony import */ var _Core_Point__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Core/Point */ \"./bin/Core/Point.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nclass Player extends _Core_GameObject__WEBPACK_IMPORTED_MODULE_3__.GameObject {\r\n    constructor(Posistion, Graphic, Collider) {\r\n        super(Posistion, Graphic, Collider);\r\n        this.ShootTimerValue = 0;\r\n        this.ShootTimer = 10;\r\n        this.CurrentAngle = 180;\r\n        this.Counter = 0;\r\n        this.Tag = \"Player\";\r\n    }\r\n    LogicUpdate() {\r\n        super.LogicUpdate();\r\n        if (\"arrowright\" in _Core_Input__WEBPACK_IMPORTED_MODULE_5__.Input.KeysDown) {\r\n            this.Position.x += 1;\r\n        }\r\n        if (\"arrowleft\" in _Core_Input__WEBPACK_IMPORTED_MODULE_5__.Input.KeysDown) {\r\n            this.Position.x -= 1;\r\n        }\r\n        if (\"arrowup\" in _Core_Input__WEBPACK_IMPORTED_MODULE_5__.Input.KeysDown) {\r\n            this.Position.y -= 1;\r\n        }\r\n        if (\"arrowdown\" in _Core_Input__WEBPACK_IMPORTED_MODULE_5__.Input.KeysDown) {\r\n            this.Position.y += 1;\r\n        }\r\n        if (\" \" in _Core_Input__WEBPACK_IMPORTED_MODULE_5__.Input.KeysDown) {\r\n            if (this.ShootTimerValue <= 0) {\r\n                let value = Math.sin(this.Counter);\r\n                this.CurrentAngle = 270 + value * 10;\r\n                _Core_GameManager__WEBPACK_IMPORTED_MODULE_2__.GameManager.Instantiate(new _Bullet__WEBPACK_IMPORTED_MODULE_0__.Bullet(this.Position, new _Core_Graphic__WEBPACK_IMPORTED_MODULE_4__.Rect(5, 5, \"red\"), new _Core_Collider__WEBPACK_IMPORTED_MODULE_1__.BoxCollider(5, 5, this.Position), \"PlayerBullet\", _Core_Point__WEBPACK_IMPORTED_MODULE_6__.Point.AngleToHeading(this.CurrentAngle), 3.5));\r\n                this.Counter += 1;\r\n                this.ShootTimerValue = this.ShootTimer;\r\n            }\r\n            else {\r\n                this.ShootTimerValue -= 1;\r\n            }\r\n        }\r\n        else {\r\n            this.ShootTimerValue = this.ShootTimer;\r\n        }\r\n    }\r\n}\r\n//# sourceMappingURL=Player.js.map\n\n//# sourceURL=webpack://bullethellonline/./bin/Player.js?");

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
/******/ 	
/******/ })()
;