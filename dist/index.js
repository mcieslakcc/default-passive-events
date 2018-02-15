/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _utils = __webpack_require__(1);

var defaultOptions = {
  passive: true,
  capture: false
};

var supportedPassiveTypes = ['scroll', 'wheel', 'touchstart', 'touchmove', 'touchenter', 'touchend', 'touchleave', 'mouseout', 'mouseleave', 'mouseup', 'mousedown', 'mousemove', 'mouseenter', 'mousewheel', 'mouseover'];
var getDefaultPassiveOption = function getDefaultPassiveOption(passive, eventName) {
  if (passive !== undefined) return passive;

  return supportedPassiveTypes.indexOf(eventName) === -1 ? false : defaultOptions.passive;
};

var getWritableOptions = function getWritableOptions(options) {
  var passiveDescriptor = Object.getOwnPropertyDescriptor(options, 'passive');

  return passiveDescriptor && passiveDescriptor.writable !== true && passiveDescriptor.set === undefined ? Object.assign({}, options) : options;
};

var prepareSafeListener = function prepareSafeListener(listener, passive) {
  if (!passive) return listener;
  return function (e) {
    e.preventDefault = _utils.noop;
    return listener.call(this, e);
  };
};

var overwriteAddEvent = function overwriteAddEvent(superMethod) {
  EventTarget.prototype.addEventListener = function (type, listener, options) {
    var usesListenerOptions = (typeof options === 'undefined' ? 'undefined' : _typeof(options)) === 'object' && options !== null;
    var useCapture = usesListenerOptions ? options.capture : options;

    options = usesListenerOptions ? getWritableOptions(options) : {};
    options.passive = getDefaultPassiveOption(options.passive, type);
    options.capture = useCapture === undefined ? defaultOptions.capture : useCapture;
    listener = prepareSafeListener(listener, options.passive);

    superMethod.call(this, type, listener, options);
  };
};

var supportsPassive = (0, _utils.eventListenerOptionsSupported)();

var markEventsAsPassive = function markEventsAsPassive(events) {
  if (Array.isArray(events)) {
    supportedPassiveTypes = events;
  }
  if (supportsPassive) {
    var addEvent = EventTarget.prototype.addEventListener;
    overwriteAddEvent(addEvent);
  }
};

module.exports = markEventsAsPassive;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var eventListenerOptionsSupported = exports.eventListenerOptionsSupported = function eventListenerOptionsSupported() {
  var supported = false;

  try {
    var opts = Object.defineProperty({}, 'passive', {
      get: function get() {
        supported = true;
      }
    });

    window.addEventListener('test', null, opts);
    window.removeEventListener('test', null, opts);
  } catch (e) {}

  return supported;
};

var noop = exports.noop = function noop() {};

/***/ })
/******/ ]);
//# sourceMappingURL=index.js.map