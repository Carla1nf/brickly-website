"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./components/form.tsx":
/*!*****************************!*\
  !*** ./components/form.tsx ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Form; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_async_to_generator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @swc/helpers/_/_async_to_generator */ \"(app-pages-browser)/./node_modules/@swc/helpers/esm/_async_to_generator.js\");\n/* harmony import */ var _swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @swc/helpers/_/_sliced_to_array */ \"(app-pages-browser)/./node_modules/@swc/helpers/esm/_sliced_to_array.js\");\n/* harmony import */ var _swc_helpers_ts_generator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @swc/helpers/_/_ts_generator */ \"(app-pages-browser)/./node_modules/tslib/tslib.es6.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _radix_ui_themes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @radix-ui/themes */ \"(app-pages-browser)/./node_modules/@radix-ui/themes/dist/esm/components/button.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \n\n\n\nvar _s = $RefreshSig$();\n\n\n\nfunction Form() {\n    _s();\n    var _useState = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_2__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"), 2), email = _useState[0], setEmail = _useState[1];\n    var _useState1 = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_2__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"), 2), name = _useState1[0], setName = _useState1[1];\n    var _useState2 = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_2__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"), 2), lastname = _useState2[0], setLastname = _useState2[1];\n    var _useState3 = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_2__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), 2), isSubmitting = _useState3[0], setIsSubmitting = _useState3[1];\n    var _useState4 = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_2__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), 2), success = _useState4[0], setIsSuccess = _useState4[1];\n    var handleSubmit = function() {\n        var _ref = (0,_swc_helpers_async_to_generator__WEBPACK_IMPORTED_MODULE_3__._)(function() {\n            var data;\n            return (0,_swc_helpers_ts_generator__WEBPACK_IMPORTED_MODULE_4__.__generator)(this, function(_state) {\n                switch(_state.label){\n                    case 0:\n                        setIsSubmitting(true);\n                        // post with axios\n                        console.group(\"sending Data\");\n                        return [\n                            4,\n                            axios__WEBPACK_IMPORTED_MODULE_5__[\"default\"].post(\"https://a3yvs010od.execute-api.us-east-1.amazonaws.com/dev/store-data\", {\n                                email: email,\n                                name: name,\n                                lastname: lastname\n                            })\n                        ];\n                    case 1:\n                        data = _state.sent();\n                        return [\n                            4,\n                            new Promise(function(r) {\n                                return setTimeout(r, 1000);\n                            })\n                        ];\n                    case 2:\n                        _state.sent();\n                        setEmail(\"\");\n                        setName(\"\");\n                        setLastname(\"\");\n                        setIsSubmitting(false);\n                        setIsSuccess(true);\n                        return [\n                            2\n                        ];\n                }\n            });\n        });\n        return function handleSubmit() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"font-bold text-2xl\",\n                children: \"Pre-Registrarse\"\n            }, void 0, false, {\n                fileName: \"/Users/martinsuarez/Documents/Brickly/brick-ly/components/form.tsx\",\n                lineNumber: 34,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"font-normal text-gray-500 w-[85vw] sm:w-auto\",\n                children: \"\\xa1Suscr\\xedbete para informaci\\xf3n exclusiva sobre inversiones con Brickly y asegura tu lugar en la primera ronda al pre-registrarte!\"\n            }, void 0, false, {\n                fileName: \"/Users/martinsuarez/Documents/Brickly/brick-ly/components/form.tsx\",\n                lineNumber: 35,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                onSubmit: handleSubmit,\n                className: \"flex flex-col gap-y-5\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        value: email,\n                        onChange: function(e) {\n                            return setEmail(e.target.value);\n                        },\n                        placeholder: \"E-mail\",\n                        type: \"email\",\n                        className: \" px-4 py-4 sm:w-96 w-40 rounded-xl bg-gray-100 animate-enter-token delay-100 fill-mode-forwards opacity-0\"\n                    }, void 0, false, {\n                        fileName: \"/Users/martinsuarez/Documents/Brickly/brick-ly/components/form.tsx\",\n                        lineNumber: 37,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        value: name,\n                        onChange: function(e) {\n                            return setName(e.target.value);\n                        },\n                        placeholder: \"Nombre\",\n                        className: \" px-4 py-4 rounded-xl bg-gray-100 animate-enter-token delay-200 fill-mode-forwards opacity-0\"\n                    }, void 0, false, {\n                        fileName: \"/Users/martinsuarez/Documents/Brickly/brick-ly/components/form.tsx\",\n                        lineNumber: 38,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        value: lastname,\n                        onChange: function(e) {\n                            return setLastname(e.target.value);\n                        },\n                        placeholder: \"Apellido\",\n                        className: \" px-4 py-4 rounded-xl bg-gray-100 animate-enter-token delay-300 fill-mode-forwards opacity-0\"\n                    }, void 0, false, {\n                        fileName: \"/Users/martinsuarez/Documents/Brickly/brick-ly/components/form.tsx\",\n                        lineNumber: 39,\n                        columnNumber: 13\n                    }, this),\n                    success ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_radix_ui_themes__WEBPACK_IMPORTED_MODULE_6__.Button, {\n                        className: \"bg-green-400 font-semibold rounded-lg text-white h-10  cursor-pointer transition-all\",\n                        color: \"tomato\",\n                        type: \"submit\",\n                        variant: \"soft\",\n                        size: \"3\",\n                        onClick: function() {\n                            return handleSubmit();\n                        },\n                        disabled: isSubmitting,\n                        children: \"\\xa1Revisa tu e-mail! \"\n                    }, void 0, false, {\n                        fileName: \"/Users/martinsuarez/Documents/Brickly/brick-ly/components/form.tsx\",\n                        lineNumber: 41,\n                        columnNumber: 17\n                    }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_radix_ui_themes__WEBPACK_IMPORTED_MODULE_6__.Button, {\n                        className: \"bg-black font-semibold rounded-lg text-white h-10  cursor-pointer transition-all \".concat(isSubmitting ? \"opacity-50\" : \"\"),\n                        onClick: function() {\n                            return handleSubmit();\n                        },\n                        children: [\n                            \"Pre-registrarse \",\n                            isSubmitting ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                src: \"universal/spinner.svg\",\n                                width: \"25\",\n                                className: \" animate-spin\"\n                            }, void 0, false, {\n                                fileName: \"/Users/martinsuarez/Documents/Brickly/brick-ly/components/form.tsx\",\n                                lineNumber: 42,\n                                columnNumber: 221\n                            }, this) : \"\",\n                            \" \"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/martinsuarez/Documents/Brickly/brick-ly/components/form.tsx\",\n                        lineNumber: 42,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/martinsuarez/Documents/Brickly/brick-ly/components/form.tsx\",\n                lineNumber: 36,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Form, \"OdAZ7+QAVZYSryS+1ySbDutOZjQ=\");\n_c = Form;\nvar _c;\n$RefreshReg$(_c, \"Form\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvZm9ybS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFMEM7QUFDaEI7QUFDTztBQUVsQixTQUFTRzs7SUFDbkIsSUFBMEJELFlBQUFBLCtEQUFBQSxDQUFBQSwrQ0FBUUEsQ0FBQyxTQUE1QkUsUUFBbUJGLGNBQVpHLFdBQVlIO0lBQzFCLElBQXdCQSxhQUFBQSwrREFBQUEsQ0FBQUEsK0NBQVFBLENBQUMsU0FBMUJJLE9BQWlCSixlQUFYSyxVQUFXTDtJQUN4QixJQUFnQ0EsYUFBQUEsK0RBQUFBLENBQUFBLCtDQUFRQSxDQUFDLFNBQWxDTSxXQUF5Qk4sZUFBZk8sY0FBZVA7SUFDaEMsSUFBd0NBLGFBQUFBLCtEQUFBQSxDQUFBQSwrQ0FBUUEsQ0FBQyxZQUExQ1EsZUFBaUNSLGVBQW5CUyxrQkFBbUJUO0lBQ3hDLElBQWdDQSxhQUFBQSwrREFBQUEsQ0FBQUEsK0NBQVFBLENBQUMsWUFBbENVLFVBQXlCVixlQUFoQlcsZUFBZ0JYO0lBRWhDLElBQU1ZO21CQUFlO2dCQUlmQzs7Ozt3QkFITkosZ0JBQWdCO3dCQUNoQixrQkFBa0I7d0JBQ2xCSyxRQUFRQyxLQUFLLENBQUM7d0JBQ0Q7OzRCQUFNaEIsNkNBQUtBLENBQUNpQixJQUFJLENBQUMseUVBQXlFO2dDQUNuR2QsT0FBT0E7Z0NBQ1BFLE1BQU1BO2dDQUNORSxVQUFVQTs0QkFDZDs7O3dCQUpNTyxPQUFPO3dCQUtiOzs0QkFBTSxJQUFJSSxRQUFRQyxTQUFBQTt1Q0FBS0MsV0FBV0QsR0FBRzs7Ozt3QkFBckM7d0JBQ0FmLFNBQVM7d0JBQ1RFLFFBQVE7d0JBQ1JFLFlBQVk7d0JBQ1pFLGdCQUFnQjt3QkFDaEJFLGFBQWE7Ozs7OztRQUNiO3dCQWZNQzs7OztJQWtCUCxxQkFDSTs7MEJBQ0EsOERBQUNRO2dCQUFJQyxXQUFVOzBCQUFxQjs7Ozs7OzBCQUNwQyw4REFBQ0Q7Z0JBQUlDLFdBQVU7MEJBQStDOzs7Ozs7MEJBQzlELDhEQUFDQztnQkFBS0MsVUFBVVg7Z0JBQWNTLFdBQVU7O2tDQUNwQyw4REFBQ0c7d0JBQU1DLE9BQU92Qjt3QkFBT3dCLFVBQVUsU0FBQ0M7bUNBQU14QixTQUFTd0IsRUFBRUMsTUFBTSxDQUFDSCxLQUFLOzt3QkFBR0ksYUFBWTt3QkFBU0MsTUFBSzt3QkFBUVQsV0FBVTs7Ozs7O2tDQUM1Ryw4REFBQ0c7d0JBQU1DLE9BQU9yQjt3QkFBTXNCLFVBQVUsU0FBQ0M7bUNBQU10QixRQUFRc0IsRUFBRUMsTUFBTSxDQUFDSCxLQUFLOzt3QkFBR0ksYUFBWTt3QkFBU1IsV0FBVTs7Ozs7O2tDQUM3Riw4REFBQ0c7d0JBQU1DLE9BQU9uQjt3QkFBVW9CLFVBQVUsU0FBQ0M7bUNBQU1wQixZQUFZb0IsRUFBRUMsTUFBTSxDQUFDSCxLQUFLOzt3QkFBR0ksYUFBWTt3QkFBV1IsV0FBVTs7Ozs7O29CQUN0R1gsd0JBQ0csOERBQUNaLG9EQUFNQTt3QkFBQ3VCLFdBQVU7d0JBQXVGVSxPQUFNO3dCQUFTRCxNQUFLO3dCQUFTRSxTQUFRO3dCQUFPQyxNQUFLO3dCQUFJQyxTQUFTO21DQUFNdEI7O3dCQUFnQnVCLFVBQVUzQjtrQ0FBYzs7Ozs7NkNBQ3JOLDhEQUFDVixvREFBTUE7d0JBQUN1QixXQUFXLG9GQUFxSCxPQUFqQ2IsZUFBZSxlQUFlO3dCQUFNMEIsU0FBUzttQ0FBTXRCOzs7NEJBQWlCOzRCQUFpQkosNkJBQWdCLDhEQUFDNEI7Z0NBQUlDLEtBQUk7Z0NBQXdCQyxPQUFNO2dDQUFLakIsV0FBVTs7Ozs7dUNBQXFCOzRCQUFHOzs7Ozs7Ozs7Ozs7Ozs7QUFRMVM7R0EzQ3dCcEI7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9mb3JtLnRzeD84ZWQyIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiXG5cbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gXCJAcmFkaXgtdWkvdGhlbWVzXCI7XG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBGb3JtICgpIHtcbiAgICAgY29uc3QgW2VtYWlsLCBzZXRFbWFpbF0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgICAgY29uc3QgW25hbWUsIHNldE5hbWVdID0gdXNlU3RhdGUoXCJcIik7ICAgXG4gICAgIGNvbnN0IFtsYXN0bmFtZSwgc2V0TGFzdG5hbWVdID0gdXNlU3RhdGUoXCJcIik7XG4gICAgIGNvbnN0IFtpc1N1Ym1pdHRpbmcsIHNldElzU3VibWl0dGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICAgIGNvbnN0IFtzdWNjZXNzLCBzZXRJc1N1Y2Nlc3NdID0gdXNlU3RhdGUoZmFsc2UpO1xuICAgIFxuICAgICBjb25zdCBoYW5kbGVTdWJtaXQgPSBhc3luYyAoKSA9PiB7XG4gICAgIHNldElzU3VibWl0dGluZyh0cnVlKTtcbiAgICAgLy8gcG9zdCB3aXRoIGF4aW9zXG4gICAgIGNvbnNvbGUuZ3JvdXAoXCJzZW5kaW5nIERhdGFcIilcbiAgICAgY29uc3QgZGF0YSA9IGF3YWl0IGF4aW9zLnBvc3QoXCJodHRwczovL2EzeXZzMDEwb2QuZXhlY3V0ZS1hcGkudXMtZWFzdC0xLmFtYXpvbmF3cy5jb20vZGV2L3N0b3JlLWRhdGFcIiwge1xuICAgICAgICAgZW1haWw6IGVtYWlsLFxuICAgICAgICAgbmFtZTogbmFtZSxcbiAgICAgICAgIGxhc3RuYW1lOiBsYXN0bmFtZSxcbiAgICAgfSk7XG4gICAgIGF3YWl0IG5ldyBQcm9taXNlKHIgPT4gc2V0VGltZW91dChyLCAxMDAwKSk7XG4gICAgIHNldEVtYWlsKFwiXCIpO1xuICAgICBzZXROYW1lKFwiXCIpO1xuICAgICBzZXRMYXN0bmFtZShcIlwiKTtcbiAgICAgc2V0SXNTdWJtaXR0aW5nKGZhbHNlKTtcbiAgICAgc2V0SXNTdWNjZXNzKHRydWUpO1xuICAgICB9XG5cblxuICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9udC1ib2xkIHRleHQtMnhsXCI+UHJlLVJlZ2lzdHJhcnNlPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9udC1ub3JtYWwgdGV4dC1ncmF5LTUwMCB3LVs4NXZ3XSBzbTp3LWF1dG9cIj7CoVN1c2Nyw61iZXRlIHBhcmEgaW5mb3JtYWNpw7NuIGV4Y2x1c2l2YSBzb2JyZSBpbnZlcnNpb25lcyBjb24gQnJpY2tseSB5IGFzZWd1cmEgdHUgbHVnYXIgZW4gbGEgcHJpbWVyYSByb25kYSBhbCBwcmUtcmVnaXN0cmFydGUhPC9kaXY+XG4gICAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgZ2FwLXktNVwiPlxuICAgICAgICAgICAgPGlucHV0IHZhbHVlPXtlbWFpbH0gb25DaGFuZ2U9eyhlKSA9PiBzZXRFbWFpbChlLnRhcmdldC52YWx1ZSl9IHBsYWNlaG9sZGVyPVwiRS1tYWlsXCIgdHlwZT1cImVtYWlsXCIgY2xhc3NOYW1lPVwiIHB4LTQgcHktNCBzbTp3LTk2IHctNDAgcm91bmRlZC14bCBiZy1ncmF5LTEwMCBhbmltYXRlLWVudGVyLXRva2VuIGRlbGF5LTEwMCBmaWxsLW1vZGUtZm9yd2FyZHMgb3BhY2l0eS0wXCIvPlxuICAgICAgICAgICAgPGlucHV0IHZhbHVlPXtuYW1lfSBvbkNoYW5nZT17KGUpID0+IHNldE5hbWUoZS50YXJnZXQudmFsdWUpfSBwbGFjZWhvbGRlcj1cIk5vbWJyZVwiIGNsYXNzTmFtZT1cIiBweC00IHB5LTQgcm91bmRlZC14bCBiZy1ncmF5LTEwMCBhbmltYXRlLWVudGVyLXRva2VuIGRlbGF5LTIwMCBmaWxsLW1vZGUtZm9yd2FyZHMgb3BhY2l0eS0wXCIvPlxuICAgICAgICAgICAgPGlucHV0IHZhbHVlPXtsYXN0bmFtZX0gb25DaGFuZ2U9eyhlKSA9PiBzZXRMYXN0bmFtZShlLnRhcmdldC52YWx1ZSl9IHBsYWNlaG9sZGVyPVwiQXBlbGxpZG9cIiBjbGFzc05hbWU9XCIgcHgtNCBweS00IHJvdW5kZWQteGwgYmctZ3JheS0xMDAgYW5pbWF0ZS1lbnRlci10b2tlbiBkZWxheS0zMDAgZmlsbC1tb2RlLWZvcndhcmRzIG9wYWNpdHktMFwiLz5cbiAgICAgICAgICAgIHtzdWNjZXNzID8gXG4gICAgICAgICAgICAgICAgPEJ1dHRvbiBjbGFzc05hbWU9XCJiZy1ncmVlbi00MDAgZm9udC1zZW1pYm9sZCByb3VuZGVkLWxnIHRleHQtd2hpdGUgaC0xMCAgY3Vyc29yLXBvaW50ZXIgdHJhbnNpdGlvbi1hbGxcIiBjb2xvcj1cInRvbWF0b1wiIHR5cGU9XCJzdWJtaXRcIiB2YXJpYW50PSdzb2Z0JyBzaXplPSczJyBvbkNsaWNrPXsoKSA9PiBoYW5kbGVTdWJtaXQoKX0gZGlzYWJsZWQ9e2lzU3VibWl0dGluZ30+wqFSZXZpc2EgdHUgZS1tYWlsISA8L0J1dHRvbj4gOiBcbiAgICAgICAgICAgICAgICA8QnV0dG9uIGNsYXNzTmFtZT17YGJnLWJsYWNrIGZvbnQtc2VtaWJvbGQgcm91bmRlZC1sZyB0ZXh0LXdoaXRlIGgtMTAgIGN1cnNvci1wb2ludGVyIHRyYW5zaXRpb24tYWxsICR7aXNTdWJtaXR0aW5nID8gXCJvcGFjaXR5LTUwXCIgOiBcIlwifWB9IG9uQ2xpY2s9eygpID0+IGhhbmRsZVN1Ym1pdCgpfSA+UHJlLXJlZ2lzdHJhcnNlIHtpc1N1Ym1pdHRpbmcgPyAgPGltZyBzcmM9XCJ1bml2ZXJzYWwvc3Bpbm5lci5zdmdcIiB3aWR0aD1cIjI1XCIgY2xhc3NOYW1lPVwiIGFuaW1hdGUtc3BpblwiLz4gIDogXCJcIn0gPC9CdXR0b24+XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICBcblxuICAgICAgICA8L2Zvcm0+XG4gICAgICAgIFxuICAgICAgICA8Lz5cbiAgICApXG59Il0sIm5hbWVzIjpbIkJ1dHRvbiIsImF4aW9zIiwidXNlU3RhdGUiLCJGb3JtIiwiZW1haWwiLCJzZXRFbWFpbCIsIm5hbWUiLCJzZXROYW1lIiwibGFzdG5hbWUiLCJzZXRMYXN0bmFtZSIsImlzU3VibWl0dGluZyIsInNldElzU3VibWl0dGluZyIsInN1Y2Nlc3MiLCJzZXRJc1N1Y2Nlc3MiLCJoYW5kbGVTdWJtaXQiLCJkYXRhIiwiY29uc29sZSIsImdyb3VwIiwicG9zdCIsIlByb21pc2UiLCJyIiwic2V0VGltZW91dCIsImRpdiIsImNsYXNzTmFtZSIsImZvcm0iLCJvblN1Ym1pdCIsImlucHV0IiwidmFsdWUiLCJvbkNoYW5nZSIsImUiLCJ0YXJnZXQiLCJwbGFjZWhvbGRlciIsInR5cGUiLCJjb2xvciIsInZhcmlhbnQiLCJzaXplIiwib25DbGljayIsImRpc2FibGVkIiwiaW1nIiwic3JjIiwid2lkdGgiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/form.tsx\n"));

/***/ })

});