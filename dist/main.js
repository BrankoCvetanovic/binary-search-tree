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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _tree__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tree */ \"./src/tree.js\");\n\n\nconst a = [1, 2, 4, 3, 23, 12, 12341324, 54, 5, 6, 8, 7, 22, 11, 234];\nconst b = (0,_tree__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(a);\n\nconst prettyPrint = (node, prefix = \"\", isLeft = true) => {\n  if (node === null) {\n    return;\n  }\n  if (node.right !== null) {\n    prettyPrint(node.right, `${prefix}${isLeft ? \"│   \" : \"    \"}`, false);\n  }\n  console.log(`${prefix}${isLeft ? \"└── \" : \"┌── \"}${node.data}`);\n  if (node.left !== null) {\n    prettyPrint(node.left, `${prefix}${isLeft ? \"    \" : \"│   \"}`, true);\n  }\n};\nb.insert(19);\nb.insert(52);\nb.insert(9);\nb.insert(19);\nprettyPrint(b.root);\nb.remove(9);\nprettyPrint(b.root);\nb.insert(9);\nb.insert(10);\nb.insert(21);\nprettyPrint(b.root);\nb.remove(11);\nprettyPrint(b.root);\nb.remove(23);\nprettyPrint(b.root);\nb.remove(12);\nprettyPrint(b.root);\n\nb.remove(8);\nprettyPrint(b.root);\nb.insert(7.6);\nb.insert(56);\nb.insert(55);\nprettyPrint(b.root);\nb.remove(54);\nprettyPrint(b.root);\nconsole.log(b.find(4));\nb.levelOrder(console.log);\nconsole.log(\"__________________________________\");\nb.preOrder(console.log);\nconsole.log(\"__________________________________\");\nb.inOrder(console.log);\nconsole.log(\"__________________________________\");\nb.postOrder(console.log);\nconsole.log(b.levelOrder());\nconsole.log(b.inOrder());\nconsole.log(b.preOrder());\nconsole.log(b.postOrder());\n\n\n//# sourceURL=webpack://binary-search-tree/./src/index.js?");

/***/ }),

/***/ "./src/merge-sort.js":
/*!***************************!*\
  !*** ./src/merge-sort.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ mergeSort)\n/* harmony export */ });\nfunction mergeSort(array) {\n  const midpoint = Math.ceil(array.length / 2);\n  const firstHalf = array.slice(0, midpoint);\n  const secondHalf = array.slice(midpoint, array.length);\n  if (array.length === 1) {\n    return [array[0]];\n  }\n  const a = mergeSort(firstHalf);\n  const b = mergeSort(secondHalf);\n  const c = [];\n\n  for (let i = 0, j = 0; i < a.length || j < b.length; ) {\n    if (j === b.length) {\n      c.push(a[i]);\n      i += 1;\n    } else if (i === a.length) {\n      c.push(b[j]);\n      j += 1;\n    } else if (a[i] === b[j]) {\n      i += 1;\n    } else if (a[i] < b[j]) {\n      c.push(a[i]);\n      i += 1;\n    } else {\n      c.push(b[j]);\n      j += 1;\n    }\n  }\n  return c;\n}\n\n\n//# sourceURL=webpack://binary-search-tree/./src/merge-sort.js?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Tree)\n/* harmony export */ });\n/* harmony import */ var _node__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node */ \"./src/node.js\");\n/* harmony import */ var _merge_sort__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./merge-sort */ \"./src/merge-sort.js\");\n\n\n\nfunction buildTree(array, start, end) {\n  if (start > end) {\n    return null;\n  }\n  const mid = Math.ceil((start + end) / 2);\n  const node = (0,_node__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(array[mid]);\n\n  node.left = buildTree(array, start, mid - 1);\n  node.right = buildTree(array, mid + 1, end);\n  return node;\n}\n\nfunction Tree(array) {\n  const sortedArr = (0,_merge_sort__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(array);\n  const root = buildTree(sortedArr, 0, array.length - 1);\n\n  let curr = root;\n  function insert(value) {\n    if (curr.data === value) {\n      curr = root;\n      return;\n    }\n    if (value < curr.data) {\n      if (curr.left == null) {\n        curr.left = (0,_node__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(value);\n        curr = root;\n        return;\n      }\n      curr = curr.left;\n      insert(value);\n    } else {\n      if (curr.right == null) {\n        curr.right = (0,_node__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(value);\n        curr = root;\n        return;\n      }\n      curr = curr.right;\n      insert(value);\n    }\n  }\n  let prev = root;\n  function remove(value) {\n    if (curr.data === value) {\n      if (curr.left === null && curr.right === null) {\n        if (curr.data > prev.data) {\n          prev.right = null;\n        } else {\n          prev.left = null;\n        }\n      } else if (curr.left && curr.right) {\n        let closestValue = curr.right;\n        let prevClosestValue = curr;\n        while (closestValue.left !== null) {\n          prevClosestValue = closestValue;\n          closestValue = closestValue.left;\n        }\n        if (closestValue.right) {\n          prevClosestValue.left = closestValue.right;\n        } else {\n          prevClosestValue.left = null;\n        }\n        if (curr === root) {\n          curr.data = closestValue.data;\n          return;\n        }\n        if (curr.data > prev.data) {\n          prev.right.data = closestValue.data;\n        } else {\n          prev.left.data = closestValue.data;\n        }\n      } else if (curr.right) {\n        prev.left = curr.right;\n      } else {\n        prev.left = curr.left;\n      }\n      curr = root;\n      return;\n    }\n    if (value < curr.data) {\n      prev = curr;\n      curr = curr.left;\n      remove(value);\n    } else {\n      prev = curr;\n      curr = curr.right;\n      remove(value);\n    }\n  }\n\n  function find(value) {\n    if (curr === null) {\n      return \"This data doesn`t exist in BT\";\n    }\n    if (curr.data === value) {\n      const answer = curr;\n      return answer;\n    }\n    if (value < curr.data) {\n      curr = curr.left;\n      return find(value);\n    }\n    curr = curr.right;\n    return find(value);\n  }\n  function levelOrder(callback = null) {\n    if (!this.root) return;\n\n    const result = [];\n\n    if (!callback) {\n      callback = (data) => {\n        result.push(data);\n      };\n    }\n\n    const queue = [];\n    queue.push(this.root);\n\n    while (queue.length > 0) {\n      const node = queue.shift();\n      callback(node.data);\n\n      if (node.left !== null) {\n        queue.push(node.left);\n      }\n      if (node.right !== null) {\n        queue.push(node.right);\n      }\n    }\n    return result;\n  }\n\n  function preOrder(callback = null, rootNode = this.root) {\n    if (!this.root) return;\n\n    const result = [];\n\n    if (!callback) {\n      callback = (data) => {\n        result.push(data);\n      };\n    }\n\n    const stack = [];\n    stack.push(rootNode);\n\n    while (stack.length > 0) {\n      const node = stack.pop();\n      callback(node.data);\n      if (node.right !== null) {\n        stack.push(node.right);\n      }\n      if (node.left !== null) {\n        stack.push(node.left);\n      }\n    }\n    return result;\n  }\n\n  function inOrder(callback = null, node = this.root) {\n    const result = [];\n\n    if (node === null) {\n      return result;\n    }\n\n    if (!callback) {\n      callback = (data) => {\n        result.push(data);\n      };\n    }\n\n    inOrder(callback, node.left);\n    callback(node.data);\n    inOrder(callback, node.right);\n\n    return result;\n  }\n\n  function postOrder(callback = null, node = this.root) {\n    const result = [];\n    if (node === null) {\n      return;\n    }\n\n    if (!callback) {\n      callback = (data) => {\n        result.push(data);\n      };\n    }\n\n    postOrder(callback, node.left);\n    postOrder(callback, node.right);\n    callback(node.data);\n\n    return result;\n  }\n\n  return {\n    root,\n    insert,\n    remove,\n    find,\n    levelOrder,\n    preOrder,\n    inOrder,\n    postOrder,\n  };\n}\n\n\n//# sourceURL=webpack://binary-search-tree/./src/tree.js?");

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