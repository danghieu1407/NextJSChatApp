"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/layout",{

/***/ "(app-pages-browser)/./app/globals.css":
/*!*************************!*\
  !*** ./app/globals.css ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"080a72886e43\");\nif (true) { module.hot.accept() }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9nbG9iYWxzLmNzcyIsIm1hcHBpbmdzIjoiO0FBQUEsK0RBQWUsY0FBYztBQUM3QixJQUFJLElBQVUsSUFBSSxpQkFBaUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2dsb2JhbHMuY3NzP2I3M2QiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgXCIwODBhNzI4ODZlNDNcIlxuaWYgKG1vZHVsZS5ob3QpIHsgbW9kdWxlLmhvdC5hY2NlcHQoKSB9XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/globals.css\n"));

/***/ }),

/***/ "(app-pages-browser)/./app/hooks/useActiveChannel.ts":
/*!***************************************!*\
  !*** ./app/hooks/useActiveChannel.ts ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _useActiveList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./useActiveList */ \"(app-pages-browser)/./app/hooks/useActiveList.ts\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _libs_pusher__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../libs/pusher */ \"(app-pages-browser)/./app/libs/pusher.ts\");\n\n\n\nconst useActiveChannel = ()=>{\n    const { set, add, remove } = (0,_useActiveList__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n    const [activeChannel, setActiveChannel] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        let channel = activeChannel;\n        if (!channel) {\n            channel = _libs_pusher__WEBPACK_IMPORTED_MODULE_2__.pusherClient.subscribe(\"presence-messenger\");\n            setActiveChannel(channel);\n        }\n        channel.bind(\"pusher:subscription_succeeded\", (members)=>{\n            const initialMembers = [];\n            members.each((member)=>{});\n        });\n    }, []);\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (useActiveChannel);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9ob29rcy91c2VBY3RpdmVDaGFubmVsLnRzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQzRDO0FBQ0E7QUFDRTtBQUU5QyxNQUFNSSxtQkFBbUI7SUFDckIsTUFBTSxFQUFFQyxHQUFHLEVBQUVDLEdBQUcsRUFBRUMsTUFBTSxFQUFFLEdBQUdQLDBEQUFhQTtJQUMxQyxNQUFNLENBQUNRLGVBQWVDLGlCQUFpQixHQUFHUCwrQ0FBUUEsQ0FBaUI7SUFFbkVELGdEQUFTQSxDQUFDO1FBQ04sSUFBSVMsVUFBVUY7UUFDZCxJQUFJLENBQUNFLFNBQVM7WUFDVkEsVUFBVVAsc0RBQVlBLENBQUNRLFNBQVMsQ0FBQztZQUNqQ0YsaUJBQWlCQztRQUNyQjtRQUNBQSxRQUFRRSxJQUFJLENBQUMsaUNBQWlDLENBQUNDO1lBQzNDLE1BQU1DLGlCQUEyQixFQUFFO1lBQ25DRCxRQUFRRSxJQUFJLENBQUMsQ0FBQ0MsVUFFZDtRQUNKO0lBQ0osR0FBRyxFQUFFO0FBQ1Q7QUFFQSwrREFBZVosZ0JBQWdCQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9ob29rcy91c2VBY3RpdmVDaGFubmVsLnRzPzU1M2QiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbm5lbCwgTWVtYmVycyB9IGZyb20gXCJwdXNoZXItanNcIjtcclxuaW1wb3J0IHVzZUFjdGl2ZUxpc3QgZnJvbSBcIi4vdXNlQWN0aXZlTGlzdFwiO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHB1c2hlckNsaWVudCB9IGZyb20gXCIuLi9saWJzL3B1c2hlclwiO1xyXG5cclxuY29uc3QgdXNlQWN0aXZlQ2hhbm5lbCA9ICgpID0+IHtcclxuICAgIGNvbnN0IHsgc2V0LCBhZGQsIHJlbW92ZSB9ID0gdXNlQWN0aXZlTGlzdCgpO1xyXG4gICAgY29uc3QgW2FjdGl2ZUNoYW5uZWwsIHNldEFjdGl2ZUNoYW5uZWxdID0gdXNlU3RhdGU8Q2hhbm5lbCB8IG51bGw+KG51bGwpO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgbGV0IGNoYW5uZWwgPSBhY3RpdmVDaGFubmVsO1xyXG4gICAgICAgIGlmICghY2hhbm5lbCkge1xyXG4gICAgICAgICAgICBjaGFubmVsID0gcHVzaGVyQ2xpZW50LnN1YnNjcmliZShcInByZXNlbmNlLW1lc3NlbmdlclwiKTtcclxuICAgICAgICAgICAgc2V0QWN0aXZlQ2hhbm5lbChjaGFubmVsKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY2hhbm5lbC5iaW5kKFwicHVzaGVyOnN1YnNjcmlwdGlvbl9zdWNjZWVkZWRcIiwgKG1lbWJlcnM6IE1lbWJlcnMpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgaW5pdGlhbE1lbWJlcnM6IHN0cmluZ1tdID0gW107XHJcbiAgICAgICAgICAgIG1lbWJlcnMuZWFjaCgobWVtYmVyOiBSZWNvcmQ8c3RyaW5nLCBhbnk+KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9LCBbXSk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHVzZUFjdGl2ZUNoYW5uZWw7Il0sIm5hbWVzIjpbInVzZUFjdGl2ZUxpc3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsInB1c2hlckNsaWVudCIsInVzZUFjdGl2ZUNoYW5uZWwiLCJzZXQiLCJhZGQiLCJyZW1vdmUiLCJhY3RpdmVDaGFubmVsIiwic2V0QWN0aXZlQ2hhbm5lbCIsImNoYW5uZWwiLCJzdWJzY3JpYmUiLCJiaW5kIiwibWVtYmVycyIsImluaXRpYWxNZW1iZXJzIiwiZWFjaCIsIm1lbWJlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/hooks/useActiveChannel.ts\n"));

/***/ })

});