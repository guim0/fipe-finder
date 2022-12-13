(() => {
var exports = {};
exports.id = 603;
exports.ids = [603];
exports.modules = {

/***/ 858:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "Search_container___c0fd",
	"modal": "Search_modal__vyqtn"
};


/***/ }),

/***/ 5888:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ search),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./pages/search/Search.module.scss
var Search_module = __webpack_require__(858);
var Search_module_default = /*#__PURE__*/__webpack_require__.n(Search_module);
;// CONCATENATED MODULE: external "@mui/material/FormControl"
const FormControl_namespaceObject = require("@mui/material/FormControl");
var FormControl_default = /*#__PURE__*/__webpack_require__.n(FormControl_namespaceObject);
;// CONCATENATED MODULE: external "@mui/material"
const material_namespaceObject = require("@mui/material");
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
;// CONCATENATED MODULE: ./pages/search/index.tsx






const getStaticProps = async ()=>{
    const res = await fetch("https://parallelum.com.br/fipe/api/v1/carros/marcas");
    const data = await res.json();
    return {
        props: {
            cars: data
        }
    };
};
//@ts-ignore
const SearchPage = ({ cars  })=>{
    const { 0: model , 1: setModel  } = (0,external_react_.useState)("");
    const { 0: brand , 1: setBrand  } = (0,external_react_.useState)("");
    const { 0: year , 1: setYear  } = (0,external_react_.useState)("");
    const { 0: carModel , 1: setCarModel  } = (0,external_react_.useState)([]);
    const { 0: carYear , 1: setCarYear  } = (0,external_react_.useState)([]);
    const router = (0,router_.useRouter)();
    (0,external_react_.useEffect)(()=>{
        if (!brand) return;
        const fetchCarModels = async ()=>{
            const data = await fetch(`https://parallelum.com.br/fipe/api/v1/carros/marcas/${brand}/modelos`);
            const json = await data.json();
            setCarModel(json.modelos);
            return json;
        };
        const fetchModelYear = async ()=>{
            const data = await fetch(`https://parallelum.com.br/fipe/api/v1/carros/marcas/${brand}/modelos/${model}/anos`);
            const json = await data.json();
            setCarYear(json);
            return json;
        };
        fetchCarModels();
        fetchModelYear();
    }, [
        brand,
        model
    ]);
    async function handleSubmit() {
        const data = await fetch(`https://parallelum.com.br/fipe/api/v1/carros/marcas/${brand}/modelos/${model}/anos/${year}`);
        const json = await data.json();
        router.push({
            pathname: "/result",
            query: {
                name: json.Modelo,
                year: json.AnoModelo,
                value: json.Valor
            }
        });
    }
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("main", {
        className: (Search_module_default()).container,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                children: "Tabela Fipe"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                children: "Consulte o valor de um veiculo"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("section", {
                className: (Search_module_default()).modal,
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_namespaceObject.FormGroup, {
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)((FormControl_default()), {
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(material_namespaceObject.InputLabel, {
                                    id: "car-brand",
                                    children: "Marca"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(material_namespaceObject.Select, {
                                    labelId: "car-brand",
                                    onChange: (e)=>setBrand(e.target.value),
                                    children: cars?.map((data)=>/*#__PURE__*/ jsx_runtime_.jsx(material_namespaceObject.MenuItem, {
                                            value: data.codigo,
                                            children: data.nome
                                        }))
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)((FormControl_default()), {
                            disabled: carModel.length < 1,
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(material_namespaceObject.InputLabel, {
                                    id: "car-model",
                                    children: "Modelo"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(material_namespaceObject.Select, {
                                    labelId: "car-model",
                                    onChange: (e)=>setModel(e.target.value),
                                    children: carModel?.map((data)=>/*#__PURE__*/ jsx_runtime_.jsx(material_namespaceObject.MenuItem, {
                                            value: data.codigo,
                                            children: data.nome
                                        }))
                                })
                            ]
                        }),
                        !(carYear.length < 1) && /*#__PURE__*/ (0,jsx_runtime_.jsxs)((FormControl_default()), {
                            disabled: carYear.length < 1,
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(material_namespaceObject.InputLabel, {
                                    id: "car-year",
                                    children: "Ano"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(material_namespaceObject.Select, {
                                    labelId: "car-year",
                                    onChange: (e)=>setYear(e.target.value),
                                    children: carYear?.map((data)=>/*#__PURE__*/ jsx_runtime_.jsx(material_namespaceObject.MenuItem, {
                                            value: data.codigo,
                                            children: data.nome
                                        }))
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(material_namespaceObject.Button, {
                            disabled: !year && !model,
                            color: "secondary",
                            variant: "contained",
                            onClick: handleSubmit,
                            children: "Concluir pesquisa"
                        })
                    ]
                })
            })
        ]
    });
};
/* harmony default export */ const search = (SearchPage);


/***/ }),

/***/ 1853:
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(5888));
module.exports = __webpack_exports__;

})();