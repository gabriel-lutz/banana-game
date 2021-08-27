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

/***/ "./src/apple.ts":
/*!**********************!*\
  !*** ./src/apple.ts ***!
  \**********************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __extends = (this && this.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        if (typeof b !== \"function\" && b !== null)\n            throw new TypeError(\"Class extends value \" + String(b) + \" is not a constructor or null\");\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\nexports.__esModule = true;\nvar fallingObject_1 = __webpack_require__(/*! ./fallingObject */ \"./src/fallingObject.ts\");\nvar Apple = /** @class */ (function (_super) {\n    __extends(Apple, _super);\n    function Apple(context) {\n        var _this = _super.call(this, context) || this;\n        _this.image = new Image();\n        _this.points = 10;\n        _this.image.src = \"./assets/red-apple.png\";\n        return _this;\n    }\n    return Apple;\n}(fallingObject_1[\"default\"]));\nexports.default = Apple;\n\n\n//# sourceURL=webpack://bananagame/./src/apple.ts?");

/***/ }),

/***/ "./src/banana.ts":
/*!***********************!*\
  !*** ./src/banana.ts ***!
  \***********************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __extends = (this && this.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        if (typeof b !== \"function\" && b !== null)\n            throw new TypeError(\"Class extends value \" + String(b) + \" is not a constructor or null\");\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\nexports.__esModule = true;\nvar fallingObject_1 = __webpack_require__(/*! ./fallingObject */ \"./src/fallingObject.ts\");\nvar Banana = /** @class */ (function (_super) {\n    __extends(Banana, _super);\n    function Banana(context) {\n        var _this = _super.call(this, context) || this;\n        _this.image = new Image();\n        _this.theBanana = true;\n        _this.image.src = \"./assets/banana.png\";\n        return _this;\n    }\n    return Banana;\n}(fallingObject_1[\"default\"]));\nexports.default = Banana;\n\n\n//# sourceURL=webpack://bananagame/./src/banana.ts?");

/***/ }),

/***/ "./src/bomb.ts":
/*!*********************!*\
  !*** ./src/bomb.ts ***!
  \*********************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __extends = (this && this.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        if (typeof b !== \"function\" && b !== null)\n            throw new TypeError(\"Class extends value \" + String(b) + \" is not a constructor or null\");\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\nexports.__esModule = true;\nvar fallingObject_1 = __webpack_require__(/*! ./fallingObject */ \"./src/fallingObject.ts\");\nvar Bomb = /** @class */ (function (_super) {\n    __extends(Bomb, _super);\n    function Bomb(context) {\n        var _this = _super.call(this, context) || this;\n        _this.theBomb = true;\n        _this.image = new Image();\n        _this.image.src = \"./assets/bomb.png\";\n        return _this;\n    }\n    return Bomb;\n}(fallingObject_1[\"default\"]));\nexports.default = Bomb;\n\n\n//# sourceURL=webpack://bananagame/./src/bomb.ts?");

/***/ }),

/***/ "./src/fallingObject.ts":
/*!******************************!*\
  !*** ./src/fallingObject.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nexports.__esModule = true;\nvar FallingObject = /** @class */ (function () {\n    function FallingObject(context) {\n        this.speedY = 1.01;\n        this.theBomb = false;\n        this.theBanana = false;\n        this.context = context;\n        this.x = Math.floor(Math.random() * 325);\n        this.y = 10;\n    }\n    FallingObject.prototype.move = function () {\n        if (this.y < 200) {\n            this.y *= 1.015;\n        }\n        else {\n            this.y *= 1.025;\n        }\n    };\n    FallingObject.prototype.draw = function () {\n        this.context.beginPath();\n        this.context.drawImage(this.image, this.x, this.y, 50, 50);\n        this.context.fill();\n    };\n    return FallingObject;\n}());\nexports.default = FallingObject;\n\n\n//# sourceURL=webpack://bananagame/./src/fallingObject.ts?");

/***/ }),

/***/ "./src/game.ts":
/*!*********************!*\
  !*** ./src/game.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nexports.__esModule = true;\nvar player_1 = __webpack_require__(/*! ./player */ \"./src/player.ts\");\nvar watermelon_1 = __webpack_require__(/*! ./watermelon */ \"./src/watermelon.ts\");\nvar banana_1 = __webpack_require__(/*! ./banana */ \"./src/banana.ts\");\nvar orange_1 = __webpack_require__(/*! ./orange */ \"./src/orange.ts\");\nvar apple_1 = __webpack_require__(/*! ./apple */ \"./src/apple.ts\");\nvar strawberry_1 = __webpack_require__(/*! ./strawberry */ \"./src/strawberry.ts\");\nvar bomb_1 = __webpack_require__(/*! ./bomb */ \"./src/bomb.ts\");\nvar Game = /** @class */ (function () {\n    function Game(screenHeight, canvas) {\n        this.screenWidth = 375;\n        this.score = 0;\n        this.lifes = 4;\n        this.scoreElement = document.querySelector(\".score\");\n        this.lifeImgElements = document.querySelectorAll(\".full\");\n        this.gameOverElement = document.querySelector(\".gameOver\");\n        this.canvas = canvas;\n        this.screenHeight = screenHeight;\n        this.context = canvas.getContext(\"2d\");\n    }\n    Game.prototype.start = function () {\n        var _this = this;\n        this.fallingObjects = [];\n        this.lifeImgElements.forEach(function (element) {\n            return element.setAttribute(\"src\", \"./assets/heart.png\");\n        });\n        this.lifes = 4;\n        this.score = 0;\n        this.scoreElement.innerHTML = \"<p> Score: \" + this.score + \" <p>\";\n        this.gameOverElement.setAttribute(\"class\", \"gameOver hide\");\n        this.player = new player_1[\"default\"](this.context, this.screenWidth, this.screenHeight);\n        this.clearIntervals();\n        this.gameIntervalId = setInterval(function () { return _this.gameLoop(); }, 1000 / 60);\n    };\n    Game.prototype.clearIntervals = function () {\n        clearInterval(this.gameIntervalId);\n    };\n    Game.prototype.gameLoop = function () {\n        if (Math.random() >= 0.99) {\n            this.fallingObjects.push(this.generateNewObject());\n        }\n        if (Math.random() >= 0.997) {\n            this.fallingObjects.push(new bomb_1[\"default\"](this.context));\n        }\n        this.checkIfHealthIsAboveZero();\n        this.updateState();\n        this.renderGame();\n    };\n    Game.prototype.checkIfHealthIsAboveZero = function () {\n        if (this.lifes <= 0) {\n            this.endGame();\n        }\n    };\n    Game.prototype.generateNewObject = function () {\n        var randomPercentage = Math.random();\n        if (randomPercentage < 0.3) {\n            return new orange_1[\"default\"](this.context);\n        }\n        else if (randomPercentage < 0.6) {\n            return new apple_1[\"default\"](this.context);\n        }\n        else if (randomPercentage < 0.8) {\n            return new watermelon_1[\"default\"](this.context);\n        }\n        else if (randomPercentage < 0.95) {\n            return new strawberry_1[\"default\"](this.context);\n        }\n        else {\n            return new banana_1[\"default\"](this.context);\n        }\n    };\n    Game.prototype.updateState = function () {\n        var _this = this;\n        this.fallingObjects.forEach(function (fallingObject) {\n            fallingObject.move();\n            if (_this.player.checkCollision(fallingObject)) {\n                if (fallingObject.theBanana) {\n                    _this.removeFallingObject(fallingObject);\n                    _this.score *= 2;\n                    return (_this.scoreElement.innerHTML = \"<p> Score: \" + _this.score + \" <p>\");\n                }\n                else if (fallingObject.theBomb) {\n                    _this.removeFallingObject(fallingObject);\n                    return _this.endGame();\n                }\n                else {\n                    _this.removeFallingObject(fallingObject);\n                    _this.score += fallingObject.points;\n                    return (_this.scoreElement.innerHTML = \"<p> Score: \" + _this.score + \" <p>\");\n                }\n            }\n            _this.removeOnGroundCollision(fallingObject);\n        });\n    };\n    Game.prototype.removeOnGroundCollision = function (fallingObject) {\n        if (this.checkGroundCollision(fallingObject)) {\n            if (!fallingObject.theBomb) {\n                this.lifeImgElements[this.lifes - 1].setAttribute(\"src\", \"./assets/heart-empty.png\");\n                this.lifes--;\n            }\n            this.removeFallingObject(fallingObject);\n        }\n    };\n    Game.prototype.checkGroundCollision = function (fallingObject) {\n        if (fallingObject.y + 50 > this.screenHeight) {\n            return true;\n        }\n        else {\n            return false;\n        }\n    };\n    Game.prototype.removeFallingObject = function (objectToRemove) {\n        this.fallingObjects = this.fallingObjects.filter(function (fallingObject) {\n            if (fallingObject === objectToRemove) {\n                return false;\n            }\n            else {\n                return true;\n            }\n        });\n    };\n    Game.prototype.endGame = function () {\n        this.clearIntervals();\n        this.gameOverElement.setAttribute(\"class\", \"gameOver\");\n        console.log(\"fim de jogo\");\n    };\n    Game.prototype.renderGame = function () {\n        this.clearScreen();\n        var image = new Image();\n        image.src = \"./assets/moon.png\";\n        this.context.beginPath();\n        this.context.drawImage(image, -400, this.screenHeight < 900 ? -100 : 0, 1200, this.screenHeight < 900 ? 900 : this.screenHeight);\n        this.context.fill();\n        this.fallingObjects.forEach(function (fallingObject) { return fallingObject.draw(); });\n        this.player.draw();\n    };\n    Game.prototype.clearScreen = function () {\n        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);\n    };\n    return Game;\n}());\nexports.default = Game;\n\n\n//# sourceURL=webpack://bananagame/./src/game.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nexports.__esModule = true;\nvar game_1 = __webpack_require__(/*! ./game */ \"./src/game.ts\");\nvar screenHeight = window.innerHeight;\nvar canvas = document.querySelector(\"#canvas\");\ncanvas.width = 375;\ncanvas.height = screenHeight;\ncanvas.style.backgroundColor = \"#181820\";\nvar game = new game_1[\"default\"](screenHeight, canvas);\nvar mouseButton = document.querySelector(\".mouseButton\");\nmouseButton.addEventListener(\"click\", function () {\n    selectMouse();\n});\nvar keyboardButton = document.querySelector(\".keyboardButton\");\nkeyboardButton.addEventListener(\"click\", function () {\n    selectKeyboard();\n});\nfunction hideInstructions() {\n    var hide = document.querySelector(\".selectController\");\n    hide.setAttribute(\"class\", \"selectController hide\");\n}\nfunction selectMouse() {\n    hideInstructions();\n    game.start();\n    canvas.addEventListener(\"mousemove\", function (e) {\n        game.player.mouseMove(e.offsetX);\n    });\n}\nfunction selectKeyboard() {\n    hideInstructions();\n    game.start();\n    canvas.addEventListener(\"keydown\", function (e) {\n        if (e.key === \"ArrowRight\") {\n            game.player.setDirection(1);\n            game.player.move();\n        }\n        else if (e.key === \"ArrowLeft\") {\n            game.player.setDirection(-1);\n            game.player.move();\n        }\n    });\n}\ncanvas.addEventListener(\"click\", function () {\n    game.start();\n});\n\n\n//# sourceURL=webpack://bananagame/./src/index.ts?");

/***/ }),

/***/ "./src/orange.ts":
/*!***********************!*\
  !*** ./src/orange.ts ***!
  \***********************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __extends = (this && this.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        if (typeof b !== \"function\" && b !== null)\n            throw new TypeError(\"Class extends value \" + String(b) + \" is not a constructor or null\");\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\nexports.__esModule = true;\nvar fallingObject_1 = __webpack_require__(/*! ./fallingObject */ \"./src/fallingObject.ts\");\nvar Orange = /** @class */ (function (_super) {\n    __extends(Orange, _super);\n    function Orange(context) {\n        var _this = _super.call(this, context) || this;\n        _this.image = new Image();\n        _this.points = 5;\n        _this.image.src = \"./assets/orange.png\";\n        return _this;\n    }\n    return Orange;\n}(fallingObject_1[\"default\"]));\nexports.default = Orange;\n\n\n//# sourceURL=webpack://bananagame/./src/orange.ts?");

/***/ }),

/***/ "./src/player.ts":
/*!***********************!*\
  !*** ./src/player.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nexports.__esModule = true;\nvar Player = /** @class */ (function () {\n    function Player(context, screenWidth, screenHeight) {\n        this.speedX = 20;\n        this.context = context;\n        this.screenWidth = screenWidth;\n        this.x = screenWidth / 2;\n        this.y = screenHeight - 100;\n    }\n    Player.prototype.move = function () {\n        this.x += this.speedX * this.direction;\n    };\n    Player.prototype.mouseMove = function (clientX) {\n        this.x = clientX;\n    };\n    Player.prototype.setDirection = function (direction) {\n        this.direction = direction;\n    };\n    Player.prototype.checkCollision = function (fallingObject) {\n        if (this.x < fallingObject.x + 50 &&\n            this.x + 40 > fallingObject.x &&\n            this.y < fallingObject.y + 50 &&\n            this.y + 80 > fallingObject.y) {\n            return true;\n        }\n        else {\n            return false;\n        }\n    };\n    Player.prototype.draw = function () {\n        var image = new Image();\n        image.src = \"./assets/alien.png\";\n        this.context.beginPath();\n        this.context.drawImage(image, this.x - 20, this.y, 40, 80);\n        this.context.fill();\n    };\n    return Player;\n}());\nexports.default = Player;\n\n\n//# sourceURL=webpack://bananagame/./src/player.ts?");

/***/ }),

/***/ "./src/strawberry.ts":
/*!***************************!*\
  !*** ./src/strawberry.ts ***!
  \***************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __extends = (this && this.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        if (typeof b !== \"function\" && b !== null)\n            throw new TypeError(\"Class extends value \" + String(b) + \" is not a constructor or null\");\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\nexports.__esModule = true;\nvar fallingObject_1 = __webpack_require__(/*! ./fallingObject */ \"./src/fallingObject.ts\");\nvar Strawberry = /** @class */ (function (_super) {\n    __extends(Strawberry, _super);\n    function Strawberry(context) {\n        var _this = _super.call(this, context) || this;\n        _this.image = new Image();\n        _this.points = 30;\n        _this.image.src = \"./assets/strawberry.png\";\n        return _this;\n    }\n    return Strawberry;\n}(fallingObject_1[\"default\"]));\nexports.default = Strawberry;\n\n\n//# sourceURL=webpack://bananagame/./src/strawberry.ts?");

/***/ }),

/***/ "./src/watermelon.ts":
/*!***************************!*\
  !*** ./src/watermelon.ts ***!
  \***************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __extends = (this && this.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        if (typeof b !== \"function\" && b !== null)\n            throw new TypeError(\"Class extends value \" + String(b) + \" is not a constructor or null\");\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\nexports.__esModule = true;\nvar fallingObject_1 = __webpack_require__(/*! ./fallingObject */ \"./src/fallingObject.ts\");\nvar Watermelon = /** @class */ (function (_super) {\n    __extends(Watermelon, _super);\n    function Watermelon(context) {\n        var _this = _super.call(this, context) || this;\n        _this.image = new Image();\n        _this.points = 20;\n        _this.image.src = \"./assets/watermelon.png\";\n        return _this;\n    }\n    return Watermelon;\n}(fallingObject_1[\"default\"]));\nexports.default = Watermelon;\n\n\n//# sourceURL=webpack://bananagame/./src/watermelon.ts?");

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
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;