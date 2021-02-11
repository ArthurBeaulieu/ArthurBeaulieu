/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
window.AB =
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/AB.js":
/*!**********************!*\
  !*** ./src/js/AB.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _scss_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scss/style.scss */ \"./src/scss/style.scss\");\n/* harmony import */ var _tools_Utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tools/Utils */ \"./src/js/tools/Utils.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\n\nvar AB = /*#__PURE__*/function () {\n  function AB() {\n    _classCallCheck(this, AB);\n\n    this._init();\n  }\n\n  _createClass(AB, [{\n    key: \"_init\",\n    value: function _init() {\n      (0,_tools_Utils__WEBPACK_IMPORTED_MODULE_1__.contactModal)();\n    }\n  }]);\n\n  return AB;\n}();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AB);\n\n//# sourceURL=webpack://AB/./src/js/AB.js?");

/***/ }),

/***/ "./src/js/modal/ContactModal.js":
/*!**************************************!*\
  !*** ./src/js/modal/ContactModal.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Modal_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Modal.js */ \"./src/js/modal/Modal.js\");\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\n\n\nvar ContactModal = /*#__PURE__*/function (_Modal) {\n  _inherits(ContactModal, _Modal);\n\n  var _super = _createSuper(ContactModal);\n\n  function ContactModal(options) {\n    _classCallCheck(this, ContactModal);\n\n    return _super.call(this, options);\n  }\n\n  return ContactModal;\n}(_Modal_js__WEBPACK_IMPORTED_MODULE_0__.default);\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ContactModal);\n\n//# sourceURL=webpack://AB/./src/js/modal/ContactModal.js?");

/***/ }),

/***/ "./src/js/modal/Modal.js":
/*!*******************************!*\
  !*** ./src/js/modal/Modal.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar Modal = /*#__PURE__*/function () {\n  function Modal(options) {\n    _classCallCheck(this, Modal);\n\n    this._template = options.template;\n    this._rootElement = null;\n    this._modalOverlay = null;\n    this._closeButton = null;\n    this._footerCloseButton = null;\n    this.close = this.close.bind(this);\n\n    this._loadTemplate();\n  }\n\n  _createClass(Modal, [{\n    key: \"destroy\",\n    value: function destroy() {\n      this._modalOverlay.removeEventListener('click', this.close);\n\n      this._closeButton.removeEventListener('click', this.close);\n\n      this._footerCloseButton.removeEventListener('click', this.close); // Must be overridden in child class to clean extension properties and events\n\n\n      delete this._template;\n      delete this._rootElement;\n      delete this._modalOverlay;\n      delete this._closeButton;\n    }\n  }, {\n    key: \"_loadTemplate\",\n    value: function _loadTemplate() {\n      this._rootElement = this._parseHTMLFragment(this._template); // Create overlay modal container\n\n      this._modalOverlay = document.createElement('DIV');\n      this._modalOverlay.className = 'loading-overlay';\n\n      this._modalOverlay.appendChild(this._rootElement); // Get close button from template\n\n\n      this._closeButton = this._rootElement.querySelector('#modal-close');\n      this._footerCloseButton = this._rootElement.querySelector('#modal-footer-close');\n      this.open();\n    }\n  }, {\n    key: \"_fillAttributes\",\n    value: function _fillAttributes() {// Must be overridden in child class to build modal with HTML template attributes\n    }\n  }, {\n    key: \"_parseHTMLFragment\",\n    value: function _parseHTMLFragment(htmlString) {\n      var parser = new DOMParser();\n      var dom = parser.parseFromString(htmlString, 'text/html');\n      return dom.body.firstChild;\n    }\n  }, {\n    key: \"open\",\n    value: function open() {\n      document.body.appendChild(this._modalOverlay);\n\n      this._modalOverlay.addEventListener('click', this.close);\n\n      this._closeButton.addEventListener('click', this.close);\n\n      this._footerCloseButton.addEventListener('click', this.close);\n    }\n  }, {\n    key: \"close\",\n    value: function close(event) {\n      // Must be overridden in child class to properly clean extension properties and events\n      if (!event || event && (event.target === this._modalOverlay || event.target === this._closeButton || event.target === this._footerCloseButton)) {\n        // Remove the overlay from the body\n        document.body.removeChild(this._modalOverlay); // Use the child class destroy\n\n        this.destroy();\n      }\n    }\n  }]);\n\n  return Modal;\n}();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Modal);\n\n//# sourceURL=webpack://AB/./src/js/modal/Modal.js?");

/***/ }),

/***/ "./src/js/tools/Utils.js":
/*!*******************************!*\
  !*** ./src/js/tools/Utils.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"contactModal\": () => (/* binding */ contactModal)\n/* harmony export */ });\n/* harmony import */ var _modal_ContactModal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modal/ContactModal */ \"./src/js/modal/ContactModal.js\");\n\n\nvar fetchHTML = function fetchHTML(url) {\n  return new Promise(function (resolve) {\n    var options = {\n      method: 'GET',\n      headers: new Headers([['Content-Type', 'application/json; charset=UTF-8']])\n    };\n    fetch(url, options).then(function (response) {\n      if (response) {\n        if (response.ok) {\n          resolve(response.text());\n        } else {\n          console.error(response.status);\n        }\n      }\n    })[\"catch\"](function (error) {\n      console.error(error);\n    });\n  });\n};\n\nvar contactModal = function contactModal() {\n  document.querySelector('#contact-modal').addEventListener('click', function () {\n    fetchHTML('assets/html/contact.html').then(function (template) {\n      new _modal_ContactModal__WEBPACK_IMPORTED_MODULE_0__.default({\n        template: template\n      });\n    });\n  }, false);\n};\n\n\n\n//# sourceURL=webpack://AB/./src/js/tools/Utils.js?");

/***/ }),

/***/ "./src/scss/style.scss":
/*!*****************************!*\
  !*** ./src/scss/style.scss ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://AB/./src/scss/style.scss?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
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
/******/ 	// module exports must be returned from runtime so entry inlining is disabled
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__("./src/js/AB.js");
/******/ })()
.default;