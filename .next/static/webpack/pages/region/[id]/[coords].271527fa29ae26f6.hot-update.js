"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/region/[id]/[coords]",{

/***/ "./src/components/layout/LayoutCoords.tsx":
/*!************************************************!*\
  !*** ./src/components/layout/LayoutCoords.tsx ***!
  \************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd */ \"./node_modules/antd/es/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _pages_Region_City_Coords_CoordsCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../pages/Region/City/Coords/CoordsCard */ \"./src/components/pages/Region/City/Coords/CoordsCard.tsx\");\n/* harmony import */ var _content_ContentList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./content/ContentList */ \"./src/components/layout/content/ContentList.tsx\");\n/* harmony import */ var _header_HeaderCoords__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./header/HeaderCoords */ \"./src/components/layout/header/HeaderCoords.tsx\");\nvar _this = undefined;\n\n\n\n\n\n\nvar LayoutCoords = function(param) {\n    var coords = param.coords;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_5__.Layout, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_header_HeaderCoords__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\kamil\\\\Desktop\\\\yandex-weather_v2\\\\src\\\\components\\\\layout\\\\LayoutCoords.tsx\",\n                lineNumber: 15,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_content_ContentList__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                items: coords,\n                renderItem: function(coord) {\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_pages_Region_City_Coords_CoordsCard__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        forecasts: coord.forecasts,\n                        yesterday: coord.yesterday,\n                        geo_object: coord.geo_object,\n                        fact: coord.fact\n                    }, coord.geo_object.locality.id, false, void 0, void 0);\n                }\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\kamil\\\\Desktop\\\\yandex-weather_v2\\\\src\\\\components\\\\layout\\\\LayoutCoords.tsx\",\n                lineNumber: 16,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\kamil\\\\Desktop\\\\yandex-weather_v2\\\\src\\\\components\\\\layout\\\\LayoutCoords.tsx\",\n        lineNumber: 14,\n        columnNumber: 5\n    }, _this);\n};\n_c = LayoutCoords;\n/* harmony default export */ __webpack_exports__[\"default\"] = (LayoutCoords);\nvar _c;\n$RefreshReg$(_c, \"LayoutCoords\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9sYXlvdXQvTGF5b3V0Q29vcmRzLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7QUFBOEI7QUFDSTtBQUU4QjtBQUNoQjtBQUNDO0FBTWpELElBQU1LLFlBQVksR0FBMEIsZ0JBQWdCO1FBQWJDLE1BQU0sU0FBTkEsTUFBTTtJQUNuRCxxQkFDRSw4REFBQ04sd0NBQU07OzBCQUNMLDhEQUFDSSw0REFBWTs7OztxQkFBZ0I7MEJBQzdCLDhEQUFDRCw0REFBVztnQkFDVkksS0FBSyxFQUFFRCxNQUFNO2dCQUNiRSxVQUFVLEVBQUUsU0FBQ0MsS0FBSzt5Q0FDaEIsOERBQUNQLDRFQUFVO3dCQUVUUSxTQUFTLEVBQUVELEtBQUssQ0FBQ0MsU0FBUzt3QkFDMUJDLFNBQVMsRUFBRUYsS0FBSyxDQUFDRSxTQUFTO3dCQUMxQkMsVUFBVSxFQUFFSCxLQUFLLENBQUNHLFVBQVU7d0JBQzVCQyxJQUFJLEVBQUVKLEtBQUssQ0FBQ0ksSUFBSTt1QkFKWEosS0FBSyxDQUFDRyxVQUFVLENBQUNFLFFBQVEsQ0FBQ0MsRUFBRSx3QkFLakM7aUJBQ0g7Ozs7O3FCQUNEOzs7Ozs7YUFDSyxDQUNUO0NBQ0g7QUFsQktWLEtBQUFBLFlBQVk7QUFvQmxCLCtEQUFlQSxZQUFZLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvbGF5b3V0L0xheW91dENvb3Jkcy50c3g/N2IxOSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBMYXlvdXQgfSBmcm9tIFwiYW50ZFwiO1xyXG5pbXBvcnQgUmVhY3QsIHsgRkMgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgSUNvb3JkcyB9IGZyb20gXCIuLi8uLi9tb2RlbHMvQ29vcmRzXCI7XHJcbmltcG9ydCBDb29yZHNDYXJkIGZyb20gXCIuLi9wYWdlcy9SZWdpb24vQ2l0eS9Db29yZHMvQ29vcmRzQ2FyZFwiO1xyXG5pbXBvcnQgQ29udGVudExpc3QgZnJvbSBcIi4vY29udGVudC9Db250ZW50TGlzdFwiO1xyXG5pbXBvcnQgSGVhZGVyQ29vcmRzIGZyb20gXCIuL2hlYWRlci9IZWFkZXJDb29yZHNcIjtcclxuXHJcbmludGVyZmFjZSBMYXlvdXRDb29yZHNQcm9wcyB7XHJcbiAgY29vcmRzOiBJQ29vcmRzW107XHJcbn1cclxuXHJcbmNvbnN0IExheW91dENvb3JkczogRkM8TGF5b3V0Q29vcmRzUHJvcHM+ID0gKHsgY29vcmRzIH0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPExheW91dD5cclxuICAgICAgPEhlYWRlckNvb3Jkcz48L0hlYWRlckNvb3Jkcz5cclxuICAgICAgPENvbnRlbnRMaXN0XHJcbiAgICAgICAgaXRlbXM9e2Nvb3Jkc31cclxuICAgICAgICByZW5kZXJJdGVtPXsoY29vcmQpID0+IChcclxuICAgICAgICAgIDxDb29yZHNDYXJkXHJcbiAgICAgICAgICAgIGtleT17Y29vcmQuZ2VvX29iamVjdC5sb2NhbGl0eS5pZH1cclxuICAgICAgICAgICAgZm9yZWNhc3RzPXtjb29yZC5mb3JlY2FzdHN9XHJcbiAgICAgICAgICAgIHllc3RlcmRheT17Y29vcmQueWVzdGVyZGF5fVxyXG4gICAgICAgICAgICBnZW9fb2JqZWN0PXtjb29yZC5nZW9fb2JqZWN0fVxyXG4gICAgICAgICAgICBmYWN0PXtjb29yZC5mYWN0fVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICApfVxyXG4gICAgICAvPlxyXG4gICAgPC9MYXlvdXQ+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IExheW91dENvb3JkcztcclxuIl0sIm5hbWVzIjpbIkxheW91dCIsIlJlYWN0IiwiQ29vcmRzQ2FyZCIsIkNvbnRlbnRMaXN0IiwiSGVhZGVyQ29vcmRzIiwiTGF5b3V0Q29vcmRzIiwiY29vcmRzIiwiaXRlbXMiLCJyZW5kZXJJdGVtIiwiY29vcmQiLCJmb3JlY2FzdHMiLCJ5ZXN0ZXJkYXkiLCJnZW9fb2JqZWN0IiwiZmFjdCIsImxvY2FsaXR5IiwiaWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/layout/LayoutCoords.tsx\n"));

/***/ })

});