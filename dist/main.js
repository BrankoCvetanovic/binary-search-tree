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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _tree__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tree */ \"./src/tree.js\");\n\n\nconst a = [1, 2, 4, 3, 23, 12, 12341324, 54, 5, 6, 8, 7, 22, 11, 234];\nconst b = (0,_tree__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(a);\n\nconst prettyPrint = (node, prefix = \"\", isLeft = true) => {\n  if (node === null) {\n    return;\n  }\n  if (node.right !== null) {\n    prettyPrint(node.right, `${prefix}${isLeft ? \"│   \" : \"    \"}`, false);\n  }\n  console.log(`${prefix}${isLeft ? \"└── \" : \"┌── \"}${node.data}`);\n  if (node.left !== null) {\n    prettyPrint(node.left, `${prefix}${isLeft ? \"    \" : \"│   \"}`, true);\n  }\n};\nb.insert(19);\nb.insert(53);\nb.insert(9);\nb.insert(19);\nprettyPrint(b.root);\n\n\n//# sourceURL=webpack://binary-search-tree/./src/index.js?");

/***/ }),

/***/ "./src/merge-sort.js":
/*!***************************!*\
  !*** ./src/merge-sort.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ mergeSort)\n/* harmony export */ });\nfunction mergeSort(array) {\n  const midpoint = Math.ceil(array.length / 2);\n  const firstHalf = array.slice(0, midpoint);\n  const secondHalf = array.slice(midpoint, array.length);\n  if (array.length === 1) {\n    return [array[0]];\n  }\n  let a = mergeSort(firstHalf);\n  let b = mergeSort(secondHalf);\n  let c = [];\n\n  for (let i = 0, j = 0; i < a.length || j < b.length; ) {\n    if (j == b.length) {\n      c.push(a[i]);\n      i++;\n    } else if (i == a.length) {\n      c.push(b[j]);\n      j++;\n    } else if (a[i] == b[j]) {\n      i++;\n    } else if (a[i] < b[j]) {\n      c.push(a[i]);\n      i++;\n    } else {\n      c.push(b[j]);\n      j++;\n    }\n  }\n  return c;\n}\n\n\n//# sourceURL=webpack://binary-search-tree/./src/merge-sort.js?");

/***/ }),

/***/ "./src/node.js":
/*!*********************!*\
  !*** ./src/node.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Node)\n/* harmony export */ });\nfunction Node(data) {\n  const left = null;\n  const right = null;\n  return {\n    data,\n    left,\n    right,\n  };\n}\n\n\n//# sourceURL=webpack://binary-search-tree/./src/node.js?");

/***/ }),

/***/ "./src/tree.js":
/*!*********************!*\
  !*** ./src/tree.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Tree)\n/* harmony export */ });\n/* harmony import */ var _node__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node */ \"./src/node.js\");\n/* harmony import */ var _merge_sort__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./merge-sort */ \"./src/merge-sort.js\");\n\n\n\nfunction buildTree(array, start, end) {\n  if (start > end) {\n    return null;\n  }\n  const mid = parseInt((start + end) / 2);\n  const node = (0,_node__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(array[mid]);\n\n  node.left = buildTree(array, start, mid - 1);\n  node.right = buildTree(array, mid + 1, end);\n  return node;\n}\n\nfunction Tree(array) {\n  const sortedArr = (0,_merge_sort__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(array);\n  const root = buildTree(sortedArr, 0, array.length - 1);\n\n  let curr = root;\n  function insert(value) {\n    if (curr.data == value) {\n      curr = root;\n      return;\n    }\n    if (value < curr.data) {\n      if (curr.left == null) {\n        curr.left = (0,_node__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(value);\n        curr = root;\n        return;\n      }\n      curr = curr.left;\n      insert(value);\n    } else {\n      if (curr.right == null) {\n        curr.left = (0,_node__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(value);\n        curr = root;\n        return;\n      }\n      curr = curr.right;\n      insert(value);\n    }\n  }\n\n  function remove(value) {}\n\n  return {\n    root,\n    insert,\n  };\n}\n\n\n//# sourceURL=webpack://binary-search-tree/./src/tree.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;