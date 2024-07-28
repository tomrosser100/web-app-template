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

/***/ "./back/src/server.ts":
/*!****************************!*\
  !*** ./back/src/server.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var heroku_ssl_redirect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! heroku-ssl-redirect */ \"heroku-ssl-redirect\");\n/* harmony import */ var heroku_ssl_redirect__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(heroku_ssl_redirect__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var node_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! node:http */ \"node:http\");\n/* harmony import */ var node_http__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(node_http__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var socket_io__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! socket.io */ \"socket.io\");\n/* harmony import */ var socket_io__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(socket_io__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _socketHandlers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./socketHandlers */ \"./back/src/socketHandlers.ts\");\n\n\n\n\n\nconst options = {\n  distPath: '/front/dist',\n  htmlFilename: 'index.html',\n  localIP: '192.168.1.25',\n  usingSSL: false\n};\nconst app = express__WEBPACK_IMPORTED_MODULE_0___default()();\nconst server = (0,node_http__WEBPACK_IMPORTED_MODULE_2__.createServer)(app);\nconst io = new socket_io__WEBPACK_IMPORTED_MODULE_3__.Server(server);\nif (options.usingSSL) app.use(heroku_ssl_redirect__WEBPACK_IMPORTED_MODULE_1___default()());\napp.use(express__WEBPACK_IMPORTED_MODULE_0___default()[\"static\"](process.cwd() + options.distPath));\napp.get('/**', function (req, res) {\n  res.sendFile(process.cwd() + options.distPath + '/' + options.htmlFilename);\n});\nio.on('connection', socket => {\n  (0,_socketHandlers__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(io, socket);\n});\nserver.listen(process.env.PORT, () => {\n  console.log(`http://localhost:${process.env.PORT}/`);\n});\n\n//# sourceURL=webpack://web-app-template/./back/src/server.ts?");

/***/ }),

/***/ "./back/src/socketHandlers.ts":
/*!************************************!*\
  !*** ./back/src/socketHandlers.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((io, socket) => {\n  console.log(\"a user connected\", socket.id);\n  socket.on(\"disconnect\", () => {\n    console.log(socket.id, \"disconnected\");\n  });\n  socket.on('userPrompt', (userInput, callback) => {\n    console.log('received', userInput);\n    callback('server response');\n  });\n});\n\n//# sourceURL=webpack://web-app-template/./back/src/socketHandlers.ts?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("express");

/***/ }),

/***/ "heroku-ssl-redirect":
/*!**************************************!*\
  !*** external "heroku-ssl-redirect" ***!
  \**************************************/
/***/ ((module) => {

module.exports = require("heroku-ssl-redirect");

/***/ }),

/***/ "socket.io":
/*!****************************!*\
  !*** external "socket.io" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("socket.io");

/***/ }),

/***/ "node:http":
/*!****************************!*\
  !*** external "node:http" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("node:http");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./back/src/server.ts");
/******/ 	
/******/ })()
;