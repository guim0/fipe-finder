exports.id = 553;
exports.ids = [553];
exports.modules = {

/***/ 1934:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "formatData_container__gpQGr",
	"objectComparisson": "formatData_objectComparisson__4Llql"
};


/***/ }),

/***/ 6442:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "Maskify_container__WV8s8",
	"output": "Maskify_output__KqxsA"
};


/***/ }),

/***/ 8316:
/***/ ((module) => {

// Exports
module.exports = {
	"modal": "Modal_modal__w8Blv"
};


/***/ }),

/***/ 9899:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "RickAndMorty_container__KImok"
};


/***/ }),

/***/ 553:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Home": () => (/* binding */ Home),
  "default": () => (/* binding */ home)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./src/util/formatData.ts
function formatData(currentObject, newDataObject) {
    if (!currentObject.age || currentObject.price) return;
    if (newDataObject.price || newDataObject.amount) return currentObject;
    const current = currentObject;
    const dataImplement = newDataObject;
    const formattedData = {
        ...current,
        ...dataImplement
    };
    return formattedData;
}

// EXTERNAL MODULE: ./src/components/FormatData/formatData.module.scss
var formatData_module = __webpack_require__(1934);
var formatData_module_default = /*#__PURE__*/__webpack_require__.n(formatData_module);
;// CONCATENATED MODULE: ./src/components/FormatData/index.tsx



const obj1 = {
    name: "Marcos",
    country: "Brasil",
    age: 22
};
const obj1WithFix = {
    country: "Jap\xe3o",
    age: 33
};
const obj2 = {
    name: "Marcos",
    country: "Brasil",
    age: 22
};
const obj2WithProblem = {
    price: 89.9,
    amount: 15,
    description: "camiseta 100% algod\xe3o"
};
const obj3 = {
    name: "Rafael",
    country: "Chile",
    age: 42
};
const obj3WithProblem = {
    name: "Camiseta Polo",
    price: 59.9,
    amount: 30
};
const UpdateData = ()=>{
    const formattedObj1 = formatData(obj1, obj1WithFix);
    const formattedObj2 = formatData(obj2, obj2WithProblem);
    const formattedObj3 = formatData(obj3, obj3WithProblem);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("main", {
        className: (formatData_module_default()).container,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                children: "Atualiza\xe7\xe3o de objeto"
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        children: "Exemplo 1:"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: (formatData_module_default()).objectComparisson,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                children: [
                                    "this is the ",
                                    /*#__PURE__*/ jsx_runtime_.jsx("b", {
                                        children: "OLD"
                                    }),
                                    " object:"
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                children: JSON.stringify(obj1)
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: (formatData_module_default()).objectComparisson,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                children: [
                                    "this is the ",
                                    /*#__PURE__*/ jsx_runtime_.jsx("b", {
                                        children: "NEW"
                                    }),
                                    " object:"
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                children: JSON.stringify(formattedObj1)
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        children: "Exemplo 2:"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: (formatData_module_default()).objectComparisson,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                children: [
                                    "this is the ",
                                    /*#__PURE__*/ jsx_runtime_.jsx("b", {
                                        children: "OLD"
                                    }),
                                    " object:"
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                children: [
                                    JSON.stringify(obj2),
                                    ", ",
                                    JSON.stringify(obj2WithProblem)
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: (formatData_module_default()).objectComparisson,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                children: [
                                    "this is the ",
                                    /*#__PURE__*/ jsx_runtime_.jsx("b", {
                                        children: "NEW"
                                    }),
                                    " object:"
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                children: JSON.stringify(formattedObj2)
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        children: "Exemplo 3:"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: (formatData_module_default()).objectComparisson,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                children: [
                                    "this is the ",
                                    /*#__PURE__*/ jsx_runtime_.jsx("b", {
                                        children: "OLD"
                                    }),
                                    " object:"
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                children: [
                                    JSON.stringify(obj3),
                                    ", ",
                                    JSON.stringify(obj3WithProblem)
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: (formatData_module_default()).objectComparisson,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                children: [
                                    "this is the ",
                                    /*#__PURE__*/ jsx_runtime_.jsx("b", {
                                        children: "NEW"
                                    }),
                                    " object:"
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                children: JSON.stringify(formattedObj3)
                            })
                        ]
                    })
                ]
            })
        ]
    });
};

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./src/util/Mask.ts
const Mask = (value)=>{
    let hideChar = [];
    for(let i = 0; i < value.length; i++){
        if (i < value.length - 4) {
            hideChar.push("#");
        } else {
            hideChar.push(value[i]);
        }
    }
    return hideChar.join("");
};

// EXTERNAL MODULE: ./src/components/Maskify/Maskify.module.scss
var Maskify_module = __webpack_require__(6442);
var Maskify_module_default = /*#__PURE__*/__webpack_require__.n(Maskify_module);
;// CONCATENATED MODULE: ./src/components/Maskify/index.tsx




const Maskify = ()=>{
    const { 0: value , 1: setValue  } = (0,external_react_.useState)("");
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
        className: (Maskify_module_default()).container,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                children: "Exercicio 1"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                children: "Maskify"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                children: "Insira alguns dados"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("input", {
                type: "text",
                name: "character",
                onChange: (e)=>setValue(e.target.value)
            }),
            value && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                className: (Maskify_module_default()).output,
                children: [
                    "the output is: ",
                    /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                        children: [
                            " ",
                            Mask(value)
                        ]
                    })
                ]
            })
        ]
    });
};

;// CONCATENATED MODULE: ./src/util/checkFirstLetterUppercase.ts
function checkFirstLetterUpcase(word) {
    return word.charCodeAt(0) >= 65 && word.charCodeAt(0) <= 90;
}

// EXTERNAL MODULE: ./src/components/Modal/Modal.module.scss
var Modal_module = __webpack_require__(8316);
var Modal_module_default = /*#__PURE__*/__webpack_require__.n(Modal_module);
;// CONCATENATED MODULE: ./src/components/Modal/index.tsx




const Modal = (props)=>{
    const { 0: value , 1: setValue  } = (0,external_react_.useState)("");
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("main", {
        className: (Modal_module_default()).modal,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                children: props.title
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("input", {
                placeholder: "Digite",
                type: "text",
                name: "word",
                onChange: (e)=>setValue(e.target.value)
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                children: [
                    "Primeira letra \xe9 maiuscula?",
                    " ",
                    value && JSON.stringify(checkFirstLetterUpcase(value))
                ]
            })
        ]
    });
};

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./src/components/RickAndMorty/RickAndMorty.module.scss
var RickAndMorty_module = __webpack_require__(9899);
var RickAndMorty_module_default = /*#__PURE__*/__webpack_require__.n(RickAndMorty_module);
;// CONCATENATED MODULE: ./src/components/RickAndMorty/index.tsx



const RickAndMorty = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("main", {
        className: (RickAndMorty_module_default()).container,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                children: "Detalhe"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                children: "Ja fiz um caso de estudo usando React-Query com esta api do rick and morty."
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                href: "https://github.com/guim0/RickAndMorty-ReactQuery",
                target: "_blank",
                children: "Clique aqui para ir pra meu github"
            })
        ]
    });
};

;// CONCATENATED MODULE: ./pages/home/index.tsx






function Home() {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "container",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Maskify, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(UpdateData, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(RickAndMorty, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(Modal, {
                title: "Checando se primeira \xe9 verdadeiro"
            })
        ]
    });
}
/* harmony default export */ const home = (Home);


/***/ })

};
;