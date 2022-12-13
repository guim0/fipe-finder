/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/search";
exports.ids = ["pages/search"];
exports.modules = {

/***/ "./pages/search/Search.module.scss":
/*!*****************************************!*\
  !*** ./pages/search/Search.module.scss ***!
  \*****************************************/
/***/ ((module) => {

eval("// Exports\nmodule.exports = {\n\t\"container\": \"Search_container___c0fd\",\n\t\"modal\": \"Search_modal__vyqtn\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9zZWFyY2gvU2VhcmNoLm1vZHVsZS5zY3NzLmpzIiwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90ZXN0LWZyb250ZW5kLy4vcGFnZXMvc2VhcmNoL1NlYXJjaC5tb2R1bGUuc2Nzcz85YzA0Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImNvbnRhaW5lclwiOiBcIlNlYXJjaF9jb250YWluZXJfX19jMGZkXCIsXG5cdFwibW9kYWxcIjogXCJTZWFyY2hfbW9kYWxfX3Z5cXRuXCJcbn07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/search/Search.module.scss\n");

/***/ }),

/***/ "./pages/search/index.tsx":
/*!********************************!*\
  !*** ./pages/search/index.tsx ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"getStaticProps\": () => (/* binding */ getStaticProps)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Search_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Search.module.scss */ \"./pages/search/Search.module.scss\");\n/* harmony import */ var _Search_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Search_module_scss__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _mui_material_FormControl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mui/material/FormControl */ \"@mui/material/FormControl\");\n/* harmony import */ var _mui_material_FormControl__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material_FormControl__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/material */ \"@mui/material\");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\nasync function getStaticProps() {\n    const res = await fetch(\"https://parallelum.com.br/fipe/api/v1/carros/marcas\");\n    const req = await res.json();\n    const data = JSON.stringify(req);\n    return {\n        props: {\n            data\n        }\n    };\n}\nconst SearchPage = ({ data  })=>{\n    console.log(data);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        className: (_Search_module_scss__WEBPACK_IMPORTED_MODULE_3___default().container),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Tabela Fipe\"\n            }, void 0, false, {\n                fileName: \"/home/guimo-dev/www/personal/test-frontend/pages/search/index.tsx\",\n                lineNumber: 27,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                children: \"Consulte o valor de um veiculo\"\n            }, void 0, false, {\n                fileName: \"/home/guimo-dev/www/personal/test-frontend/pages/search/index.tsx\",\n                lineNumber: 28,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                className: (_Search_module_scss__WEBPACK_IMPORTED_MODULE_3___default().modal),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_mui_material_FormControl__WEBPACK_IMPORTED_MODULE_1___default()), {\n                    fullWidth: true,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.InputLabel, {\n                            id: \"car-model\",\n                            children: \"Modelo\"\n                        }, void 0, false, {\n                            fileName: \"/home/guimo-dev/www/personal/test-frontend/pages/search/index.tsx\",\n                            lineNumber: 31,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Select, {\n                            labelId: \"car-mode\",\n                            id: \"demo-simple-select\",\n                            // value={10}\n                            label: \"Age\"\n                        }, void 0, false, {\n                            fileName: \"/home/guimo-dev/www/personal/test-frontend/pages/search/index.tsx\",\n                            lineNumber: 32,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/guimo-dev/www/personal/test-frontend/pages/search/index.tsx\",\n                    lineNumber: 30,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/home/guimo-dev/www/personal/test-frontend/pages/search/index.tsx\",\n                lineNumber: 29,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/guimo-dev/www/personal/test-frontend/pages/search/index.tsx\",\n        lineNumber: 26,\n        columnNumber: 5\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SearchPage);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9zZWFyY2gvaW5kZXgudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUEwQztBQUNVO0FBQ1M7QUFPdEQsZUFBZUksY0FBYyxHQUFHO0lBQ3JDLE1BQU1DLEdBQUcsR0FBRyxNQUFNQyxLQUFLLENBQ3JCLHFEQUFxRCxDQUN0RDtJQUNELE1BQU1DLEdBQUcsR0FBRyxNQUFNRixHQUFHLENBQUNHLElBQUksRUFBRTtJQUU1QixNQUFNQyxJQUFJLEdBQUdDLElBQUksQ0FBQ0MsU0FBUyxDQUFDSixHQUFHLENBQUM7SUFFaEMsT0FBTztRQUNMSyxLQUFLLEVBQUU7WUFBRUgsSUFBSTtTQUFFO0tBQ2hCLENBQUM7QUFDSixDQUFDO0FBRUQsTUFBTUksVUFBVSxHQUFHLENBQUMsRUFBRUosSUFBSSxHQUFPLEdBQUs7SUFDcENLLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDTixJQUFJLENBQUMsQ0FBQztJQUNsQixxQkFDRSw4REFBQ08sTUFBSTtRQUFDQyxTQUFTLEVBQUVqQixzRUFBZ0I7OzBCQUMvQiw4REFBQ21CLElBQUU7MEJBQUMsYUFBVzs7Ozs7eUJBQUs7MEJBQ3BCLDhEQUFDQyxJQUFFOzBCQUFDLGdDQUE4Qjs7Ozs7eUJBQUs7MEJBQ3ZDLDhEQUFDQyxTQUFPO2dCQUFDSixTQUFTLEVBQUVqQixrRUFBWTswQkFDOUIsNEVBQUNDLGtFQUFXO29CQUFDc0IsU0FBUzs7c0NBQ3BCLDhEQUFDckIscURBQVU7NEJBQUNzQixFQUFFLEVBQUMsV0FBVztzQ0FBQyxRQUFNOzs7OztxQ0FBYTtzQ0FDOUMsOERBQUNyQixpREFBTTs0QkFDTHNCLE9BQU8sRUFBQyxVQUFVOzRCQUNsQkQsRUFBRSxFQUFDLG9CQUFvQjs0QkFDdkIsYUFBYTs0QkFDYkUsS0FBSyxFQUFDLEtBQUs7Ozs7O3FDQU1KOzs7Ozs7NkJBQ0c7Ozs7O3lCQUNOOzs7Ozs7aUJBQ0wsQ0FDUDtBQUNKLENBQUM7QUFDRCxpRUFBZWIsVUFBVSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGVzdC1mcm9udGVuZC8uL3BhZ2VzL3NlYXJjaC9pbmRleC50c3g/NjMxNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVzIGZyb20gXCIuL1NlYXJjaC5tb2R1bGUuc2Nzc1wiO1xuaW1wb3J0IEZvcm1Db250cm9sIGZyb20gXCJAbXVpL21hdGVyaWFsL0Zvcm1Db250cm9sXCI7XG5pbXBvcnQgeyBJbnB1dExhYmVsLCBNZW51SXRlbSwgU2VsZWN0IH0gZnJvbSBcIkBtdWkvbWF0ZXJpYWxcIjtcbmltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuXG50eXBlIElNb2RlbENhciA9IHtcbiAgbm9tZTogc3RyaW5nO1xuICBjb2RpZ286IHN0cmluZztcbn07XG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoKSB7XG4gIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKFxuICAgIFwiaHR0cHM6Ly9wYXJhbGxlbHVtLmNvbS5ici9maXBlL2FwaS92MS9jYXJyb3MvbWFyY2FzXCJcbiAgKTtcbiAgY29uc3QgcmVxID0gYXdhaXQgcmVzLmpzb24oKTtcblxuICBjb25zdCBkYXRhID0gSlNPTi5zdHJpbmdpZnkocmVxKTtcblxuICByZXR1cm4ge1xuICAgIHByb3BzOiB7IGRhdGEgfSxcbiAgfTtcbn1cblxuY29uc3QgU2VhcmNoUGFnZSA9ICh7IGRhdGEgfTogYW55KSA9PiB7XG4gIGNvbnNvbGUubG9nKGRhdGEpO1xuICByZXR1cm4gKFxuICAgIDxtYWluIGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XG4gICAgICA8aDE+VGFiZWxhIEZpcGU8L2gxPlxuICAgICAgPGgzPkNvbnN1bHRlIG8gdmFsb3IgZGUgdW0gdmVpY3VsbzwvaDM+XG4gICAgICA8c2VjdGlvbiBjbGFzc05hbWU9e3N0eWxlcy5tb2RhbH0+XG4gICAgICAgIDxGb3JtQ29udHJvbCBmdWxsV2lkdGg+XG4gICAgICAgICAgPElucHV0TGFiZWwgaWQ9XCJjYXItbW9kZWxcIj5Nb2RlbG88L0lucHV0TGFiZWw+XG4gICAgICAgICAgPFNlbGVjdFxuICAgICAgICAgICAgbGFiZWxJZD1cImNhci1tb2RlXCJcbiAgICAgICAgICAgIGlkPVwiZGVtby1zaW1wbGUtc2VsZWN0XCJcbiAgICAgICAgICAgIC8vIHZhbHVlPXsxMH1cbiAgICAgICAgICAgIGxhYmVsPVwiQWdlXCJcbiAgICAgICAgICAgIC8vIG9uQ2hhbmdlPXsoZSkgPT4gY29uc29sZS5sb2coZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHsvKntyZXEubWFwKChkYXRhOiBJTW9kZWxDYXIpID0+IChcbiAgICAgICAgICAgICAgPE1lbnVJdGVtIHZhbHVlPXtkYXRhLmNvZGlnb30+e2RhdGEubm9tZX08L01lbnVJdGVtPlxuICAgICAgICAgICAgKSl9Ki99XG4gICAgICAgICAgPC9TZWxlY3Q+XG4gICAgICAgIDwvRm9ybUNvbnRyb2w+XG4gICAgICA8L3NlY3Rpb24+XG4gICAgPC9tYWluPlxuICApO1xufTtcbmV4cG9ydCBkZWZhdWx0IFNlYXJjaFBhZ2U7XG4iXSwibmFtZXMiOlsic3R5bGVzIiwiRm9ybUNvbnRyb2wiLCJJbnB1dExhYmVsIiwiU2VsZWN0IiwiZ2V0U3RhdGljUHJvcHMiLCJyZXMiLCJmZXRjaCIsInJlcSIsImpzb24iLCJkYXRhIiwiSlNPTiIsInN0cmluZ2lmeSIsInByb3BzIiwiU2VhcmNoUGFnZSIsImNvbnNvbGUiLCJsb2ciLCJtYWluIiwiY2xhc3NOYW1lIiwiY29udGFpbmVyIiwiaDEiLCJoMyIsInNlY3Rpb24iLCJtb2RhbCIsImZ1bGxXaWR0aCIsImlkIiwibGFiZWxJZCIsImxhYmVsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/search/index.tsx\n");

/***/ }),

/***/ "@mui/material":
/*!********************************!*\
  !*** external "@mui/material" ***!
  \********************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material");

/***/ }),

/***/ "@mui/material/FormControl":
/*!********************************************!*\
  !*** external "@mui/material/FormControl" ***!
  \********************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/FormControl");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/search/index.tsx"));
module.exports = __webpack_exports__;

})();