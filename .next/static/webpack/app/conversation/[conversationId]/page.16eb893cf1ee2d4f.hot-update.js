"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/conversation/[conversationId]/page",{

/***/ "(app-pages-browser)/./app/conversation/[conversationId]/components/HeaderBoxChat.tsx":
/*!************************************************************************!*\
  !*** ./app/conversation/[conversationId]/components/HeaderBoxChat.tsx ***!
  \************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _app_components_Avatar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/app/components/Avatar */ \"(app-pages-browser)/./app/components/Avatar.tsx\");\n/* harmony import */ var _app_hooks_useOtherUser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/app/hooks/useOtherUser */ \"(app-pages-browser)/./app/hooks/useOtherUser.ts\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _barrel_optimize_names_HiChevronLeft_react_icons_hi2__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! __barrel_optimize__?names=HiEllipsisHorizontal!=!react-icons/hi2 */ \"(app-pages-browser)/./node_modules/react-icons/hi2/index.esm.js\");\n/* harmony import */ var _barrel_optimize_names_BsFillTelephoneFill_react_icons_bs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! __barrel_optimize__?names=BsFillTelephoneFill!=!react-icons/bs */ \"(app-pages-browser)/./node_modules/react-icons/bs/index.esm.js\");\n/* harmony import */ var _barrel_optimize_names_FaVideo_react_icons_fa__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! __barrel_optimize__?names=FaVideo!=!react-icons/fa */ \"(app-pages-browser)/./node_modules/react-icons/fa/index.esm.js\");\n/* harmony import */ var _Profile__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Profile */ \"(app-pages-browser)/./app/conversation/[conversationId]/components/Profile.tsx\");\n/* harmony import */ var _app_components_AvatarGroup__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/app/components/AvatarGroup */ \"(app-pages-browser)/./app/components/AvatarGroup.tsx\");\n/* harmony import */ var _app_hooks_useActiveList__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/app/hooks/useActiveList */ \"(app-pages-browser)/./app/hooks/useActiveList.ts\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\nconst HeaderBoxChat = (param)=>{\n    let { conversation } = param;\n    _s();\n    const otherUser = (0,_app_hooks_useOtherUser__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(conversation);\n    const [profileOpen, setProfileOpen] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false);\n    const { members } = (0,_app_hooks_useActiveList__WEBPACK_IMPORTED_MODULE_7__[\"default\"])();\n    const statusText = (0,react__WEBPACK_IMPORTED_MODULE_4__.useMemo)(()=>{\n        if (conversation.isGroup) {\n            return \"\".concat(conversation.users.length, \" members\");\n        }\n        return \"Active\";\n    }, [\n        conversation\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Profile__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                data: conversation,\n                isOpen: profileOpen,\n                onClose: ()=>setProfileOpen(false)\n            }, void 0, false, {\n                fileName: \"C:\\\\KPi\\\\mess\\\\app\\\\conversation\\\\[conversationId]\\\\components\\\\HeaderBoxChat.tsx\",\n                lineNumber: 37,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"   bg-white   w-full   flex   border-b-[1px]   sm:px-4   py-3   px-4   lg:px-6   justify-between   items-center   shadow-sm   \",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"   flex   gap-3   items-center   \",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                className: \"   block   lg:hidden   text-sky-500   hover:text-sky-600   transition   cursor-pointer   \",\n                                href: \"/conversation\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_HiChevronLeft_react_icons_hi2__WEBPACK_IMPORTED_MODULE_8__.HiChevronLeft, {\n                                    size: 32\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\KPi\\\\mess\\\\app\\\\conversation\\\\[conversationId]\\\\components\\\\HeaderBoxChat.tsx\",\n                                    lineNumber: 67,\n                                    columnNumber: 25\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\KPi\\\\mess\\\\app\\\\conversation\\\\[conversationId]\\\\components\\\\HeaderBoxChat.tsx\",\n                                lineNumber: 56,\n                                columnNumber: 21\n                            }, undefined),\n                            conversation.isGroup ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_app_components_AvatarGroup__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                                users: conversation.users\n                            }, void 0, false, {\n                                fileName: \"C:\\\\KPi\\\\mess\\\\app\\\\conversation\\\\[conversationId]\\\\components\\\\HeaderBoxChat.tsx\",\n                                lineNumber: 70,\n                                columnNumber: 25\n                            }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_app_components_Avatar__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                                user: otherUser\n                            }, void 0, false, {\n                                fileName: \"C:\\\\KPi\\\\mess\\\\app\\\\conversation\\\\[conversationId]\\\\components\\\\HeaderBoxChat.tsx\",\n                                lineNumber: 72,\n                                columnNumber: 25\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex flex-col\",\n                                children: [\n                                    conversation.name || (otherUser === null || otherUser === void 0 ? void 0 : otherUser.name),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"text-sm font-light text-neutral-500\",\n                                        children: statusText\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\KPi\\\\mess\\\\app\\\\conversation\\\\[conversationId]\\\\components\\\\HeaderBoxChat.tsx\",\n                                        lineNumber: 76,\n                                        columnNumber: 25\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\KPi\\\\mess\\\\app\\\\conversation\\\\[conversationId]\\\\components\\\\HeaderBoxChat.tsx\",\n                                lineNumber: 74,\n                                columnNumber: 21\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\KPi\\\\mess\\\\app\\\\conversation\\\\[conversationId]\\\\components\\\\HeaderBoxChat.tsx\",\n                        lineNumber: 51,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex gap-6  items-center \",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_BsFillTelephoneFill_react_icons_bs__WEBPACK_IMPORTED_MODULE_9__.BsFillTelephoneFill, {\n                                size: 24,\n                                onClick: ()=>{},\n                                className: \"   text-pink-400   cursor-pointer   hover:text-pink-600   transition\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\KPi\\\\mess\\\\app\\\\conversation\\\\[conversationId]\\\\components\\\\HeaderBoxChat.tsx\",\n                                lineNumber: 82,\n                                columnNumber: 21\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_FaVideo_react_icons_fa__WEBPACK_IMPORTED_MODULE_10__.FaVideo, {\n                                size: 32,\n                                onClick: ()=>{},\n                                className: \"   text-pink-400   cursor-pointer   hover:text-pink-600   transition\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\KPi\\\\mess\\\\app\\\\conversation\\\\[conversationId]\\\\components\\\\HeaderBoxChat.tsx\",\n                                lineNumber: 92,\n                                columnNumber: 21\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_HiChevronLeft_react_icons_hi2__WEBPACK_IMPORTED_MODULE_8__.HiEllipsisHorizontal, {\n                                size: 32,\n                                onClick: ()=>setProfileOpen(true),\n                                className: \"   text-pink-400   cursor-pointer   hover:text-pink-600   transition\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\KPi\\\\mess\\\\app\\\\conversation\\\\[conversationId]\\\\components\\\\HeaderBoxChat.tsx\",\n                                lineNumber: 102,\n                                columnNumber: 21\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\KPi\\\\mess\\\\app\\\\conversation\\\\[conversationId]\\\\components\\\\HeaderBoxChat.tsx\",\n                        lineNumber: 81,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\KPi\\\\mess\\\\app\\\\conversation\\\\[conversationId]\\\\components\\\\HeaderBoxChat.tsx\",\n                lineNumber: 38,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_s(HeaderBoxChat, \"wlOFxFJNDxiWCYct5XzD/alR2dk=\", false, function() {\n    return [\n        _app_hooks_useOtherUser__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n        _app_hooks_useActiveList__WEBPACK_IMPORTED_MODULE_7__[\"default\"]\n    ];\n});\n_c = HeaderBoxChat;\n/* harmony default export */ __webpack_exports__[\"default\"] = (HeaderBoxChat);\nvar _c;\n$RefreshReg$(_c, \"HeaderBoxChat\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jb252ZXJzYXRpb24vW2NvbnZlcnNhdGlvbklkXS9jb21wb25lbnRzL0hlYWRlckJveENoYXQudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFNEM7QUFDTztBQUV2QjtBQUNhO0FBQ007QUFDTztBQUNGO0FBQ1o7QUFDVDtBQUN1QjtBQUNEO0FBT3JELE1BQU1ZLGdCQUE4QztRQUFDLEVBQ2pEQyxZQUFZLEVBQ2Y7O0lBQ0csTUFBTUMsWUFBWWIsbUVBQVlBLENBQUNZO0lBQy9CLE1BQU0sQ0FBRUUsYUFBYUMsZUFBZ0IsR0FBR1osK0NBQVFBLENBQUM7SUFDakQsTUFBTSxFQUFDYSxPQUFPLEVBQUMsR0FBR04sb0VBQWFBO0lBRS9CLE1BQU1PLGFBQWFmLDhDQUFPQSxDQUFDO1FBQ3ZCLElBQUlVLGFBQWFNLE9BQU8sRUFBRTtZQUN0QixPQUFPLEdBQTZCLE9BQTFCTixhQUFhTyxLQUFLLENBQUNDLE1BQU0sRUFBQztRQUN4QztRQUVBLE9BQU87SUFDWCxHQUFHO1FBQUNSO0tBQWE7SUFDakIscUJBQ0k7OzBCQUNJLDhEQUFDSixnREFBT0E7Z0JBQUNhLE1BQU1UO2dCQUFjVSxRQUFRUjtnQkFBYVMsU0FBUyxJQUFNUixlQUFlOzs7Ozs7MEJBQ2hGLDhEQUFDUztnQkFBSUMsV0FBVTs7a0NBYVgsOERBQUNEO3dCQUFJQyxXQUFVOzswQ0FLWCw4REFBQ3hCLGtEQUFJQTtnQ0FDRHdCLFdBQVU7Z0NBUVZDLE1BQUs7MENBRUwsNEVBQUN0QiwrRkFBYUE7b0NBQUN1QixNQUFNOzs7Ozs7Ozs7Ozs0QkFFeEJmLGFBQWFNLE9BQU8saUJBQ2pCLDhEQUFDVCxtRUFBV0E7Z0NBQUNVLE9BQU9QLGFBQWFPLEtBQUs7Ozs7OzBEQUV0Qyw4REFBQ3BCLDhEQUFNQTtnQ0FBQzZCLE1BQU1mOzs7Ozs7MENBRWxCLDhEQUFDVztnQ0FBSUMsV0FBVTs7b0NBQ1ZiLGFBQWFpQixJQUFJLEtBQUloQixzQkFBQUEsZ0NBQUFBLFVBQVdnQixJQUFJO2tEQUNyQyw4REFBQ0w7d0NBQUlDLFdBQVU7a0RBQ1ZSOzs7Ozs7Ozs7Ozs7Ozs7Ozs7a0NBSWIsOERBQUNPO3dCQUFJQyxXQUFVOzswQ0FDWCw4REFBQ25CLDBHQUFtQkE7Z0NBQ2hCcUIsTUFBTTtnQ0FDTkcsU0FBUyxLQUFRO2dDQUNqQkwsV0FBVTs7Ozs7OzBDQU9kLDhEQUFDbEIsbUZBQU9BO2dDQUNKb0IsTUFBTTtnQ0FDTkcsU0FBUyxLQUFRO2dDQUNqQkwsV0FBVTs7Ozs7OzBDQU9kLDhEQUFDcEIsc0dBQW9CQTtnQ0FDakJzQixNQUFNO2dDQUNORyxTQUFTLElBQU1mLGVBQWU7Z0NBQzlCVSxXQUFVOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVVsQztHQTlGTWQ7O1FBR2dCWCwrREFBWUE7UUFFWlUsZ0VBQWFBOzs7S0FMN0JDO0FBZ0dOLCtEQUFlQSxhQUFhQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9jb252ZXJzYXRpb24vW2NvbnZlcnNhdGlvbklkXS9jb21wb25lbnRzL0hlYWRlckJveENoYXQudHN4Pzg1N2YiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCJcclxuXHJcbmltcG9ydCBBdmF0YXIgZnJvbSBcIkAvYXBwL2NvbXBvbmVudHMvQXZhdGFyXCJcclxuaW1wb3J0IHVzZU90aGVyVXNlciBmcm9tIFwiQC9hcHAvaG9va3MvdXNlT3RoZXJVc2VyXCJcclxuaW1wb3J0IHsgQ29udmVyc2F0aW9uLCBVc2VyIH0gZnJvbSBcIkBwcmlzbWEvY2xpZW50XCJcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiXHJcbmltcG9ydCB7IHVzZU1lbW8sIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCJcclxuaW1wb3J0IHsgSGlDaGV2cm9uTGVmdCB9IGZyb20gJ3JlYWN0LWljb25zL2hpMidcclxuaW1wb3J0IHsgSGlFbGxpcHNpc0hvcml6b250YWwgfSBmcm9tIFwicmVhY3QtaWNvbnMvaGkyXCJcclxuaW1wb3J0IHsgQnNGaWxsVGVsZXBob25lRmlsbCB9IGZyb20gJ3JlYWN0LWljb25zL2JzJ1xyXG5pbXBvcnQgeyBGYVZpZGVvIH0gZnJvbSAncmVhY3QtaWNvbnMvZmEnXHJcbmltcG9ydCBQcm9maWxlIGZyb20gXCIuL1Byb2ZpbGVcIlxyXG5pbXBvcnQgQXZhdGFyR3JvdXAgZnJvbSBcIkAvYXBwL2NvbXBvbmVudHMvQXZhdGFyR3JvdXBcIlxyXG5pbXBvcnQgdXNlQWN0aXZlTGlzdCBmcm9tIFwiQC9hcHAvaG9va3MvdXNlQWN0aXZlTGlzdFwiXHJcblxyXG5pbnRlcmZhY2UgSGVhZGVyQm94Q2hhdFByb3BzIHtcclxuICAgIGNvbnZlcnNhdGlvbjogQ29udmVyc2F0aW9uICYge1xyXG4gICAgICAgIHVzZXJzOiBVc2VyW11cclxuICAgIH1cclxufVxyXG5jb25zdCBIZWFkZXJCb3hDaGF0OiBSZWFjdC5GQzxIZWFkZXJCb3hDaGF0UHJvcHM+ID0gKHtcclxuICAgIGNvbnZlcnNhdGlvblxyXG59KSA9PiB7XHJcbiAgICBjb25zdCBvdGhlclVzZXIgPSB1c2VPdGhlclVzZXIoY29udmVyc2F0aW9uKVxyXG4gICAgY29uc3QgWyBwcm9maWxlT3Blbiwgc2V0UHJvZmlsZU9wZW4gXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG4gICAgY29uc3Qge21lbWJlcnN9ID0gdXNlQWN0aXZlTGlzdCgpO1xyXG4gICAgXHJcbiAgICBjb25zdCBzdGF0dXNUZXh0ID0gdXNlTWVtbygoKSA9PiB7XHJcbiAgICAgICAgaWYgKGNvbnZlcnNhdGlvbi5pc0dyb3VwKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBgJHtjb252ZXJzYXRpb24udXNlcnMubGVuZ3RofSBtZW1iZXJzYFxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuICdBY3RpdmUnO1xyXG4gICAgfSwgW2NvbnZlcnNhdGlvbl0pXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxQcm9maWxlIGRhdGE9e2NvbnZlcnNhdGlvbn0gaXNPcGVuPXtwcm9maWxlT3Blbn0gb25DbG9zZT17KCkgPT4gc2V0UHJvZmlsZU9wZW4oZmFsc2UpfSAvPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlxyXG4gICAgICAgIGJnLXdoaXRlXHJcbiAgICAgICAgdy1mdWxsXHJcbiAgICAgICAgZmxleFxyXG4gICAgICAgIGJvcmRlci1iLVsxcHhdXHJcbiAgICAgICAgc206cHgtNFxyXG4gICAgICAgIHB5LTNcclxuICAgICAgICBweC00XHJcbiAgICAgICAgbGc6cHgtNlxyXG4gICAgICAgIGp1c3RpZnktYmV0d2VlblxyXG4gICAgICAgIGl0ZW1zLWNlbnRlclxyXG4gICAgICAgIHNoYWRvdy1zbVxyXG4gICAgICAgIFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJcclxuICAgICAgICAgICAgZmxleFxyXG4gICAgICAgICAgICBnYXAtM1xyXG4gICAgICAgICAgICBpdGVtcy1jZW50ZXJcclxuICAgICAgICAgICAgXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPExpbmtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiXHJcbiAgICAgICAgICAgICAgICBibG9ja1xyXG4gICAgICAgICAgICAgICAgbGc6aGlkZGVuXHJcbiAgICAgICAgICAgICAgICB0ZXh0LXNreS01MDBcclxuICAgICAgICAgICAgICAgIGhvdmVyOnRleHQtc2t5LTYwMFxyXG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvblxyXG4gICAgICAgICAgICAgICAgY3Vyc29yLXBvaW50ZXJcclxuICAgICAgICAgICAgICAgIFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9XCIvY29udmVyc2F0aW9uXCJcclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxIaUNoZXZyb25MZWZ0IHNpemU9ezMyfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICB7Y29udmVyc2F0aW9uLmlzR3JvdXAgPyhcclxuICAgICAgICAgICAgICAgICAgICAgICAgPEF2YXRhckdyb3VwIHVzZXJzPXtjb252ZXJzYXRpb24udXNlcnN9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPEF2YXRhciB1c2VyPXtvdGhlclVzZXJ9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2xcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2NvbnZlcnNhdGlvbi5uYW1lIHx8IG90aGVyVXNlcj8ubmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXNtIGZvbnQtbGlnaHQgdGV4dC1uZXV0cmFsLTUwMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3N0YXR1c1RleHR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZ2FwLTYgIGl0ZW1zLWNlbnRlciBcIj5cclxuICAgICAgICAgICAgICAgICAgICA8QnNGaWxsVGVsZXBob25lRmlsbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzaXplPXsyNH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4geyB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0LXBpbmstNDAwXHJcbiAgICAgICAgICAgICAgICAgICAgY3Vyc29yLXBvaW50ZXJcclxuICAgICAgICAgICAgICAgICAgICBob3Zlcjp0ZXh0LXBpbmstNjAwXHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPEZhVmlkZW9cclxuICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT17MzJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHsgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiXHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1waW5rLTQwMFxyXG4gICAgICAgICAgICAgICAgICAgIGN1cnNvci1wb2ludGVyXHJcbiAgICAgICAgICAgICAgICAgICAgaG92ZXI6dGV4dC1waW5rLTYwMFxyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb25cIlxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxIaUVsbGlwc2lzSG9yaXpvbnRhbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzaXplPXszMn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0UHJvZmlsZU9wZW4odHJ1ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIlxyXG4gICAgICAgICAgICAgICAgICAgIHRleHQtcGluay00MDBcclxuICAgICAgICAgICAgICAgICAgICBjdXJzb3ItcG9pbnRlclxyXG4gICAgICAgICAgICAgICAgICAgIGhvdmVyOnRleHQtcGluay02MDBcclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uXCJcclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIZWFkZXJCb3hDaGF0Il0sIm5hbWVzIjpbIkF2YXRhciIsInVzZU90aGVyVXNlciIsIkxpbmsiLCJ1c2VNZW1vIiwidXNlU3RhdGUiLCJIaUNoZXZyb25MZWZ0IiwiSGlFbGxpcHNpc0hvcml6b250YWwiLCJCc0ZpbGxUZWxlcGhvbmVGaWxsIiwiRmFWaWRlbyIsIlByb2ZpbGUiLCJBdmF0YXJHcm91cCIsInVzZUFjdGl2ZUxpc3QiLCJIZWFkZXJCb3hDaGF0IiwiY29udmVyc2F0aW9uIiwib3RoZXJVc2VyIiwicHJvZmlsZU9wZW4iLCJzZXRQcm9maWxlT3BlbiIsIm1lbWJlcnMiLCJzdGF0dXNUZXh0IiwiaXNHcm91cCIsInVzZXJzIiwibGVuZ3RoIiwiZGF0YSIsImlzT3BlbiIsIm9uQ2xvc2UiLCJkaXYiLCJjbGFzc05hbWUiLCJocmVmIiwic2l6ZSIsInVzZXIiLCJuYW1lIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/conversation/[conversationId]/components/HeaderBoxChat.tsx\n"));

/***/ })

});