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

/***/ "./src/pages/region/[id]/[coords]/index.tsx":
/*!**************************************************!*\
  !*** ./src/pages/region/[id]/[coords]/index.tsx ***!
  \**************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; },\n/* harmony export */   \"default\": function() { return /* binding */ handler; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_layout_LayoutCoords__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../components/layout/LayoutCoords */ \"./src/components/layout/LayoutCoords.tsx\");\n\n\n\n\nvar _s = $RefreshSig$();\nvar __N_SSP = true;\nfunction handler(townTest) {\n    var getArray = function getArray(valuesArray) {\n        valuesArray.map(function(tw) {\n            townObject = tw;\n        });\n    };\n    _s();\n    var query = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)().query;\n    var valuesArray = Object.values(townTest);\n    var townObject = [];\n    getArray(valuesArray);\n    console.log(valuesArray);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_layout_LayoutCoords__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n            coords: valuesArray\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\kamil\\\\Desktop\\\\yandex-weather_v2\\\\src\\\\pages\\\\region\\\\[id]\\\\[coords]\\\\index.tsx\",\n            lineNumber: 22,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\kamil\\\\Desktop\\\\yandex-weather_v2\\\\src\\\\pages\\\\region\\\\[id]\\\\[coords]\\\\index.tsx\",\n        lineNumber: 21,\n        columnNumber: 5\n    }, this);\n};\n_s(handler, \"wby5GzzI23pLfTlf5I7v7XLG1RQ=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvcmVnaW9uL1tpZF0vW2Nvb3Jkc10vaW5kZXgudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBO0FBQTBCO0FBQzBCO0FBS2tCOzs7QUFFdkQsU0FBU0csT0FBTyxDQUFDQyxRQUFhLEVBQUU7UUFJcENDLFFBQVEsR0FBakIsU0FBU0EsUUFBUSxDQUFDQyxXQUFrQixFQUFFO1FBQ3BDQSxXQUFXLENBQUNDLEdBQUcsQ0FBQyxTQUFDQyxFQUFFLEVBQUs7WUFDdEJDLFVBQVUsR0FBR0QsRUFBRSxDQUFDO1NBQ2pCLENBQUMsQ0FBQztLQUNKOztJQVBELElBQU0sS0FBTyxHQUFLUCxzREFBUyxFQUFFLENBQXJCUyxLQUFLO0lBQ2IsSUFBTUosV0FBVyxHQUFjSyxNQUFNLENBQUNDLE1BQU0sQ0FBQ1IsUUFBUSxDQUFDO0lBQ3RELElBQUlLLFVBQVUsR0FBYyxFQUFFO0lBTTlCSixRQUFRLENBQUNDLFdBQVcsQ0FBQyxDQUFDO0lBQ3RCTyxPQUFPLENBQUNDLEdBQUcsQ0FBQ1IsV0FBVyxDQUFDLENBQUM7SUFDekIscUJBQ0UsOERBQUNTLEtBQUc7a0JBQ0YsNEVBQUNiLHVFQUFZO1lBQUNjLE1BQU0sRUFBRVYsV0FBVzs7Ozs7Z0JBQUk7Ozs7O1lBQ2pDLENBQ047Q0FDSDtHQWhCdUJILE9BQU87O1FBQ1hGLGtEQUFTIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9yZWdpb24vW2lkXS9bY29vcmRzXS9pbmRleC50c3g/NzM2YyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IE5leHRSb3V0ZXIsIHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCB7IElUb3duIH0gZnJvbSBcIi4uLy4uLy4uLy4uL21vZGVscy9Ub3duXCI7XHJcbmltcG9ydCB7IElDb29yZHMgfSBmcm9tIFwiLi4vLi4vLi4vLi4vbW9kZWxzL0Nvb3Jkc1wiO1xyXG5pbXBvcnQgQ29vcmRzQ2FyZCBmcm9tIFwiLi4vLi4vLi4vLi4vY29tcG9uZW50cy9wYWdlcy9SZWdpb24vQ2l0eS9Db29yZHMvQ29vcmRzQ2FyZFwiO1xyXG5pbXBvcnQgTGF5b3V0Q29vcmRzIGZyb20gXCIuLi8uLi8uLi8uLi9jb21wb25lbnRzL2xheW91dC9MYXlvdXRDb29yZHNcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGhhbmRsZXIodG93blRlc3Q6IGFueSkge1xyXG4gIGNvbnN0IHsgcXVlcnkgfSA9IHVzZVJvdXRlcigpO1xyXG4gIGNvbnN0IHZhbHVlc0FycmF5OiBJQ29vcmRzW10gPSBPYmplY3QudmFsdWVzKHRvd25UZXN0KTtcclxuICBsZXQgdG93bk9iamVjdDogSUNvb3Jkc1tdID0gW107XHJcbiAgZnVuY3Rpb24gZ2V0QXJyYXkodmFsdWVzQXJyYXk6IGFueVtdKSB7XHJcbiAgICB2YWx1ZXNBcnJheS5tYXAoKHR3KSA9PiB7XHJcbiAgICAgIHRvd25PYmplY3QgPSB0dztcclxuICAgIH0pO1xyXG4gIH1cclxuICBnZXRBcnJheSh2YWx1ZXNBcnJheSk7XHJcbiAgY29uc29sZS5sb2codmFsdWVzQXJyYXkpO1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8TGF5b3V0Q29vcmRzIGNvb3Jkcz17dmFsdWVzQXJyYXl9IC8+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKGNvbnRleHQ6IGFueSkge1xyXG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MuZ2V0KFxyXG4gICAgXCJodHRwczovL2FwaS5nZW90cmVlLnJ1L3NlYXJjaC5waHA/a2V5PXhPdGRyckdBMkJOMSZsZXZlbD00JmxpbWl0PTFcIixcclxuICAgIHtcclxuICAgICAgcGFyYW1zOiB7XHJcbiAgICAgICAgdGVybTogY29udGV4dC5wYXJhbXMuY29vcmRzLFxyXG4gICAgICB9LFxyXG4gICAgfVxyXG4gICk7XHJcblxyXG4gIGNvbnN0IHRvd24gPSByZXNwb25zZS5kYXRhO1xyXG5cclxuICBjb25zdCB2YWx1ZXNBcnJheSA9IE9iamVjdC52YWx1ZXModG93bik7XHJcbiAgbGV0IHRvd25PYmplY3Q6IElUb3duID0ge1xyXG4gICAgZ2VvX2NlbnRlcjoge1xyXG4gICAgICBsYXQ6IFwiMFwiLFxyXG4gICAgICBsb246IFwiMFwiLFxyXG4gICAgfSxcclxuICAgIG5hbWVfZGlzcGxheTogXCJcIixcclxuICAgIGFyZWE6IDAsXHJcbiAgfTtcclxuICBmdW5jdGlvbiBnZXRBcnJheSh2YWx1ZXNBcnJheTogYW55W10pIHtcclxuICAgIHZhbHVlc0FycmF5Lm1hcCgodHcpID0+IHtcclxuICAgICAgdG93bk9iamVjdCA9IHR3O1xyXG4gICAgfSk7XHJcbiAgfVxyXG4gIGdldEFycmF5KHZhbHVlc0FycmF5KTtcclxuXHJcbiAgY29uc3QgcmVzcG9uc2VUb3duID0gYXdhaXQgYXhpb3MuZ2V0KFxyXG4gICAgXCJodHRwczovL2FwaS53ZWF0aGVyLnlhbmRleC5ydS92Mi9mb3JlY2FzdFwiLFxyXG4gICAge1xyXG4gICAgICBwYXJhbXM6IHtcclxuICAgICAgICBsb246IHRvd25PYmplY3QuZ2VvX2NlbnRlci5sb24sXHJcbiAgICAgICAgbGF0OiB0b3duT2JqZWN0Lmdlb19jZW50ZXIubGF0LFxyXG4gICAgICB9LFxyXG4gICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgXCJYLVlhbmRleC1BUEktS2V5XCI6IFwiOWFhYTQzMzQtZjJjZS00ZGMyLWIxNGQtZDBiODU4YWViMjgyXCIsXHJcbiAgICAgIH0sXHJcbiAgICB9XHJcbiAgKTtcclxuXHJcbiAgY29uc3QgdG93blRlc3QgPSByZXNwb25zZVRvd24uZGF0YTtcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIHByb3BzOiB7IHRvd25UZXN0IH0sIC8vIHdpbGwgYmUgcGFzc2VkIHRvIHRoZSBwYWdlIGNvbXBvbmVudCBhcyBwcm9wc1xyXG4gIH07XHJcbn1cclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlUm91dGVyIiwiTGF5b3V0Q29vcmRzIiwiaGFuZGxlciIsInRvd25UZXN0IiwiZ2V0QXJyYXkiLCJ2YWx1ZXNBcnJheSIsIm1hcCIsInR3IiwidG93bk9iamVjdCIsInF1ZXJ5IiwiT2JqZWN0IiwidmFsdWVzIiwiY29uc29sZSIsImxvZyIsImRpdiIsImNvb3JkcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/region/[id]/[coords]/index.tsx\n"));

/***/ })

});