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


Object.defineProperty(exports, "__esModule", {
    value: true
});
// import { eventListenerOptionsSupported, noop } from './utils';
//
// const defaultOptions = {
//   passive: true,
//   capture: false
// };
//
// let supportedPassiveTypes = [
//   'scroll', 'wheel',
//     'touchstart', 'touchmove', 'touchenter', 'touchend', 'touchleave',
//     'mouseout', 'mouseleave', 'mouseup', 'mousedown', 'mousemove', 'mouseenter', 'mousewheel', 'mouseover'
// ];
// const getDefaultPassiveOption = (passive, eventName) => {
//   if (passive !== undefined) return passive;
//
//   return supportedPassiveTypes.indexOf(eventName) === -1 ? false : defaultOptions.passive;
// };
//
// const getWritableOptions = (options) => {
//   const passiveDescriptor = Object.getOwnPropertyDescriptor(options, 'passive');
//
//   return passiveDescriptor && passiveDescriptor.writable !== true && passiveDescriptor.set === undefined
//     ? Object.assign({}, options)
//     : options;
// };
//
// const prepareSafeListener = (listener, passive) => {
//   if (!passive) return listener;
//   return function (e) {
//     e.preventDefault = noop;
//     return listener.call(this, e);
//   };
// };
//
// const overwriteAddEvent = (superMethod) => {
//   EventTarget.prototype.addEventListener = function (type, listener, options) {
//     const usesListenerOptions = typeof options === 'object' && options !== null;
//     const useCapture          = usesListenerOptions ? options.capture : options;
//
//     options         = usesListenerOptions ? getWritableOptions(options) : {};
//     options.passive = getDefaultPassiveOption(options.passive, type);
//     options.capture = useCapture === undefined ? defaultOptions.capture : useCapture;
//     listener        = prepareSafeListener(listener, options.passive);
//
//     superMethod.call(this, type, listener, options);
//   };
// };
//
// const supportsPassive = eventListenerOptionsSupported();

var markEventsAsPassive = function markEventsAsPassive(events) {
    // if (Array.isArray(events)) {
    //     supportedPassiveTypes = events;
    // }
    // if (supportsPassive) {
    //     const addEvent = EventTarget.prototype.addEventListener;
    //     overwriteAddEvent(addEvent);
    // }
    console.log('test');
};
console.log('markEventsAsPassive', markEventsAsPassive);
exports.default = markEventsAsPassive;

console.log('module.exports', module.exports);

/***/ })
/******/ ]);