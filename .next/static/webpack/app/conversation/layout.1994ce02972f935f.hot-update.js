"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/conversation/layout",{

/***/ "(app-pages-browser)/./app/components/Avatar.tsx":
/*!***********************************!*\
  !*** ./app/components/Avatar.tsx ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _hooks_useActiveList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../hooks/useActiveList */ \"(app-pages-browser)/./app/hooks/useActiveList.ts\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nconst Avatar = (param)=>{\n    let { user } = param;\n    _s();\n    const { members } = (0,_hooks_useActiveList__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n    const idActive = members.indexOf(user === null || user === void 0 ? void 0 : user.email) !== -1;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"relative\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"   relative   inline-block   rounded-full   overflow-hidden   h-9   w-9   md:h-11   md:w-11   \",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                    src: (user === null || user === void 0 ? void 0 : user.image) || \"/images/DefaultAvatar.png\",\n                    alt: \"Avatar\",\n                    height: 100,\n                    width: 100,\n                    className: \"object-cover   w-full   h-full   align-middle   hover:opacity-75   transition   duration-150   rounded-full   border-2   shadow-sm   \"\n                }, void 0, false, {\n                    fileName: \"C:\\\\KPi\\\\mess\\\\app\\\\components\\\\Avatar.tsx\",\n                    lineNumber: 26,\n                    columnNumber: 13\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\KPi\\\\mess\\\\app\\\\components\\\\Avatar.tsx\",\n                lineNumber: 16,\n                columnNumber: 13\n            }, undefined),\n            isActive && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                className: \"absolute block rounded-full bg-green-500 ring-2 ring-white top-0 right-0 h-2 w-2 md:h-3 md:w-3\"\n            }, void 0, false, {\n                fileName: \"C:\\\\KPi\\\\mess\\\\app\\\\components\\\\Avatar.tsx\",\n                lineNumber: 44,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\KPi\\\\mess\\\\app\\\\components\\\\Avatar.tsx\",\n        lineNumber: 15,\n        columnNumber: 9\n    }, undefined);\n};\n_s(Avatar, \"yWg6bmOsXE6guaUZN0l6Uzexx6A=\", false, function() {\n    return [\n        _hooks_useActiveList__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n    ];\n});\n_c = Avatar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Avatar);\nvar _c;\n$RefreshReg$(_c, \"Avatar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jb21wb25lbnRzL0F2YXRhci50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUUrQjtBQUNvQjtBQUtuRCxNQUFNRSxTQUE4QjtRQUFDLEVBQ2pDQyxJQUFJLEVBQ1A7O0lBQ0csTUFBTSxFQUFDQyxPQUFPLEVBQUMsR0FBR0gsZ0VBQWFBO0lBQy9CLE1BQU1JLFdBQVdELFFBQVFFLE9BQU8sQ0FBQ0gsaUJBQUFBLDJCQUFBQSxLQUFNSSxLQUFLLE1BQU8sQ0FBQztJQUNwRCxxQkFDSSw4REFBQ0M7UUFBSUMsV0FBVTs7MEJBQ1gsOERBQUNEO2dCQUFJQyxXQUFVOzBCQVVmLDRFQUFDVCxtREFBS0E7b0JBQUNVLEtBQUtQLENBQUFBLGlCQUFBQSwyQkFBQUEsS0FBTVEsS0FBSyxLQUFJO29CQUMzQkMsS0FBSTtvQkFDSkMsUUFBUTtvQkFDUkMsT0FBTztvQkFDUEwsV0FBVTs7Ozs7Ozs7Ozs7WUFhYk0sMEJBQ0csOERBQUNDO2dCQUFLUCxXQUFVOzs7Ozs7Ozs7Ozs7QUFJNUI7R0F2Q01QOztRQUdnQkQsNERBQWFBOzs7S0FIN0JDO0FBd0NOLCtEQUFlQSxNQUFNQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9jb21wb25lbnRzL0F2YXRhci50c3g/ZGFhYSJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIlxyXG5pbXBvcnQgeyBVc2VyIH0gZnJvbSAnQHByaXNtYS9jbGllbnQnO1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSc7XHJcbmltcG9ydCB1c2VBY3RpdmVMaXN0IGZyb20gJy4uL2hvb2tzL3VzZUFjdGl2ZUxpc3QnO1xyXG5pbnRlcmZhY2UgQXZhdGFyUHJvcHMge1xyXG4gICAgdXNlcj86IFVzZXI7XHJcbn1cclxuXHJcbmNvbnN0IEF2YXRhcjpSZWFjdC5GQzxBdmF0YXJQcm9wcz4gPSh7XHJcbiAgICB1c2VyXHJcbn0pID0+IHtcclxuICAgIGNvbnN0IHttZW1iZXJzfSA9IHVzZUFjdGl2ZUxpc3QoKTtcclxuICAgIGNvbnN0IGlkQWN0aXZlID0gbWVtYmVycy5pbmRleE9mKHVzZXI/LmVtYWlsISkgIT09IC0xXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmVcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J1xyXG4gICAgICAgIHJlbGF0aXZlXHJcbiAgICAgICAgaW5saW5lLWJsb2NrXHJcbiAgICAgICAgcm91bmRlZC1mdWxsXHJcbiAgICAgICAgb3ZlcmZsb3ctaGlkZGVuXHJcbiAgICAgICAgaC05XHJcbiAgICAgICAgdy05XHJcbiAgICAgICAgbWQ6aC0xMVxyXG4gICAgICAgIG1kOnctMTFcclxuICAgICAgICAnPlxyXG4gICAgICAgICAgICA8SW1hZ2Ugc3JjPXt1c2VyPy5pbWFnZSB8fCAnL2ltYWdlcy9EZWZhdWx0QXZhdGFyLnBuZycgfVxyXG4gICAgICAgICAgICBhbHQ9J0F2YXRhcidcclxuICAgICAgICAgICAgaGVpZ2h0PXsxMDB9XHJcbiAgICAgICAgICAgIHdpZHRoPXsxMDB9XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT0nb2JqZWN0LWNvdmVyXHJcbiAgICAgICAgICAgIHctZnVsbFxyXG4gICAgICAgICAgICBoLWZ1bGxcclxuICAgICAgICAgICAgYWxpZ24tbWlkZGxlXHJcbiAgICAgICAgICAgIGhvdmVyOm9wYWNpdHktNzVcclxuICAgICAgICAgICAgdHJhbnNpdGlvblxyXG4gICAgICAgICAgICBkdXJhdGlvbi0xNTBcclxuICAgICAgICAgICAgcm91bmRlZC1mdWxsXHJcbiAgICAgICAgICAgIGJvcmRlci0yXHJcbiAgICAgICAgICAgIHNoYWRvdy1zbVxyXG4gICAgICAgICAgICAnXHJcbiAgICAgICAgICAgID48L0ltYWdlPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIHtpc0FjdGl2ZSAmJiAoXHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0nYWJzb2x1dGUgYmxvY2sgcm91bmRlZC1mdWxsIGJnLWdyZWVuLTUwMCByaW5nLTIgcmluZy13aGl0ZSB0b3AtMCByaWdodC0wIGgtMiB3LTIgbWQ6aC0zIG1kOnctMycvPlxyXG4gICAgICAgICl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn0gICBcclxuZXhwb3J0IGRlZmF1bHQgQXZhdGFyOyJdLCJuYW1lcyI6WyJJbWFnZSIsInVzZUFjdGl2ZUxpc3QiLCJBdmF0YXIiLCJ1c2VyIiwibWVtYmVycyIsImlkQWN0aXZlIiwiaW5kZXhPZiIsImVtYWlsIiwiZGl2IiwiY2xhc3NOYW1lIiwic3JjIiwiaW1hZ2UiLCJhbHQiLCJoZWlnaHQiLCJ3aWR0aCIsImlzQWN0aXZlIiwic3BhbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/components/Avatar.tsx\n"));

/***/ })

});