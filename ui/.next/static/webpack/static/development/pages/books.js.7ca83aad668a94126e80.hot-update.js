webpackHotUpdate("static/development/pages/books.js",{

/***/ "./pages/addbooks.js":
/*!***************************!*\
  !*** ./pages/addbooks.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _books__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./books */ "./pages/books.js");
/* harmony import */ var _apollo_withData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../apollo/withData */ "./apollo/withData.js");
/* harmony import */ var _src_components_AddTitle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/components/AddTitle */ "./src/components/AddTitle.js");
var _jsxFileName = "/Users/TerryDag/Documents/iLearner/workspace/dhm_StyledComponent/ui/pages/addbooks.js";




/* harmony default export */ __webpack_exports__["default"] = (Object(_apollo_withData__WEBPACK_IMPORTED_MODULE_2__["default"])(function () {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_books__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_components_AddTitle__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }));
}));

/***/ }),

/***/ "./pages/index.js":
false,

/***/ "./src/components/AddTitle.js":
/*!************************************!*\
  !*** ./src/components/AddTitle.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-apollo */ "./node_modules/react-apollo/react-apollo.esm.js");
/* harmony import */ var _queries_fetchbooks__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./queries/fetchbooks */ "./src/components/queries/fetchbooks.js");
/* harmony import */ var _queries_bookCreate__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./queries/bookCreate */ "./src/components/queries/bookCreate.js");
/* harmony import */ var _languageSelect__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./languageSelect */ "./src/components/languageSelect.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _BookStyles__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./BookStyles */ "./src/components/BookStyles.js");






var _jsxFileName = "/Users/TerryDag/Documents/iLearner/workspace/dhm_StyledComponent/ui/src/components/AddTitle.js";







var Title = styled_components__WEBPACK_IMPORTED_MODULE_11__["default"].h3.withConfig({
  displayName: "AddTitle__Title",
  componentId: "sc-3god43-0"
})(["text-align:right;"]);

var BookCreate =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(BookCreate, _React$Component);

  function BookCreate(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, BookCreate);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(BookCreate).call(this, props));
    _this.state = {
      title: '',
      warehouseOption: '',
      language: '',
      warehouseID: ''
    };
    _this.onSubmit = _this.onSubmit.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    _this.handlePick = _this.handlePick.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    _this.langPick = _this.langPick.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    _this.titleInput = _this.titleInput.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(BookCreate, [{
    key: "selectWarehouse",
    value: function selectWarehouse() {
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_BookStyles__WEBPACK_IMPORTED_MODULE_12__["Select"], {
        onChange: this.handlePick,
        value: this.state.warehouseOption,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        },
        __self: this
      }, this.props.data.Warehouse.map(function (warehouseName) {
        return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("option", {
          key: warehouseName.warehouseID,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 30
          },
          __self: this
        }, warehouseName.name);
      }));
    }
  }, {
    key: "handlePick",
    value: function handlePick(e) {
      this.setState({
        warehouseOption: e.target.value
      });
      var selection = e.target.value;
      var pick = this.props.data.Warehouse;
      var result = pick.findIndex(function (warehousename, index) {
        return warehousename.name === selection;
      });

      if (selection === pick[result].name) {
        console.log(this.state.warehouseOption);
        console.log(this.state.warehouseID);
        console.log(this.setState.language);
        this.setState({
          warehouseOption: pick[result].name,
          warehouseID: pick[result].warehouseID
        });
      } else {
        this.setState({
          warehouseOption: pick[result].name,
          warehouseID: pick[result].warehouseID
        });
        console.log('correct the logic above');
      }
    }
  }, {
    key: "langPick",
    value: function langPick(event) {
      this.setState({
        language: event.target.value
      });
    }
  }, {
    key: "onSubmit",
    value: function onSubmit(e) {
      e.preventDefault();
      this.props.mutate({
        variables: {
          title: this.state.title,
          language: this.state.language,
          warehouseID: this.state.warehouseID,
          refetchQueries: [{
            query: _queries_fetchbooks__WEBPACK_IMPORTED_MODULE_8__["default"]
          }]
        }
      });
      this.setState({
        title: ''
      }); // console.log(this.state);
    }
  }, {
    key: "titleInput",
    value: function titleInput(e) {
      this.setState({
        title: e.target.value
      });
      this.initialState();
    }
  }, {
    key: "initialState",
    value: function initialState() {
      if (this.state.warehouseOption === '') {
        this.setState({
          warehouseOption: this.props.data.Warehouse[0].name,
          warehouseID: this.props.data.Warehouse[0].warehouseID
        });

        if (this.state.language === '') {
          this.setState({
            language: this.props.data.Language[0].language
          });
        }
      }
    }
  }, {
    key: "render",
    value: function render() {
      if (this.props.data.loading) {
        return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 102
          },
          __self: this
        }, "loading...");
      }

      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_BookStyles__WEBPACK_IMPORTED_MODULE_12__["Wrapper"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 105
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("form", {
        onSubmit: this.onSubmit,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 106
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(Title, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 107
        },
        __self: this
      }, "ADD TITLE TO WAREHOUSE"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_BookStyles__WEBPACK_IMPORTED_MODULE_12__["Section"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 108
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_BookStyles__WEBPACK_IMPORTED_MODULE_12__["Label"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 109
        },
        __self: this
      }, "Select Warehouse"), this.selectWarehouse()), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 112
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_BookStyles__WEBPACK_IMPORTED_MODULE_12__["Section"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 113
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_BookStyles__WEBPACK_IMPORTED_MODULE_12__["Label"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 114
        },
        __self: this
      }, "Enter Book Title"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_BookStyles__WEBPACK_IMPORTED_MODULE_12__["Input"], {
        type: "text",
        name: "title",
        value: this.state.title,
        onChange: this.titleInput,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 115
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 117
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_BookStyles__WEBPACK_IMPORTED_MODULE_12__["Section"], {
        onChange: this.langPick,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 118
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_BookStyles__WEBPACK_IMPORTED_MODULE_12__["Label"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 119
        },
        __self: this
      }, "Select Language"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_languageSelect__WEBPACK_IMPORTED_MODULE_10__["default"] // onChange={(e) => this.setState({ language: e.target.language })}
      , {
        value: this.langPick,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 120
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 125
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_BookStyles__WEBPACK_IMPORTED_MODULE_12__["Section"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 126
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_BookStyles__WEBPACK_IMPORTED_MODULE_12__["Button"], {
        onClick: this.onSubmit,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 127
        },
        __self: this
      }, "Submit"))));
    }
  }]);

  return BookCreate;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Object(react_apollo__WEBPACK_IMPORTED_MODULE_7__["graphql"])(_queries_fetchbooks__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(react_apollo__WEBPACK_IMPORTED_MODULE_7__["graphql"])(_queries_bookCreate__WEBPACK_IMPORTED_MODULE_9__["default"])(BookCreate)));

/***/ }),

/***/ "./src/components/BookOptions.js":
/*!***************************************!*\
  !*** ./src/components/BookOptions.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Button */ "./src/components/Button.js");
/* harmony import */ var react_icons_lib_go_plus__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons/lib/go/plus */ "./node_modules/react-icons/lib/go/plus.js");
/* harmony import */ var react_icons_lib_go_plus__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_icons_lib_go_plus__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_icons_lib_fa_trash_o__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-icons/lib/fa/trash-o */ "./node_modules/react-icons/lib/fa/trash-o.js");
/* harmony import */ var react_icons_lib_fa_trash_o__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_icons_lib_fa_trash_o__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_icons_lib_go_pencil__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-icons/lib/go/pencil */ "./node_modules/react-icons/lib/go/pencil.js");
/* harmony import */ var react_icons_lib_go_pencil__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_icons_lib_go_pencil__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _Styledsection__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Styledsection */ "./src/components/Styledsection.js");
/* harmony import */ var _pages_addbooks__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../pages/addbooks */ "./pages/addbooks.js");
var _jsxFileName = "/Users/TerryDag/Documents/iLearner/workspace/dhm_StyledComponent/ui/src/components/BookOptions.js";









var Books = function Books(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Styledsection__WEBPACK_IMPORTED_MODULE_6__["default"], {
    marginLeft: "200px",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "books/".concat(_pages_addbooks__WEBPACK_IMPORTED_MODULE_7__["default"]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Button__WEBPACK_IMPORTED_MODULE_2__["default"], {
    bgColour: "#216F73",
    color: "white",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_icons_lib_go_plus__WEBPACK_IMPORTED_MODULE_3___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }), "Add Title")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/editbook",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Button__WEBPACK_IMPORTED_MODULE_2__["default"], {
    bgColour: "rgba(0, 217, 255, 0.735)",
    color: "white",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_icons_lib_go_pencil__WEBPACK_IMPORTED_MODULE_5___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }), "Edit Title")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Button__WEBPACK_IMPORTED_MODULE_2__["default"], {
    bgColour: "Red",
    color: "white",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_icons_lib_fa_trash_o__WEBPACK_IMPORTED_MODULE_4___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }), "Delete Title")) // {props.children}
  ;
};

/* harmony default export */ __webpack_exports__["default"] = (Books);

/***/ }),

/***/ "./src/components/DisplayStock.js":
false,

/***/ "./src/components/languageSelect.js":
/*!******************************************!*\
  !*** ./src/components/languageSelect.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! graphql-tag */ "./node_modules/graphql-tag/src/index.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-apollo */ "./node_modules/react-apollo/react-apollo.esm.js");
/* harmony import */ var _BookStyles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./BookStyles */ "./src/components/BookStyles.js");

var _jsxFileName = "/Users/TerryDag/Documents/iLearner/workspace/dhm_StyledComponent/ui/src/components/languageSelect.js";

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n\t{\n\t\tLanguage {\n\t\t\tlanguage\n\t\t}\n\t\tWarehouse {\n\t\t\tname\n\t\t\twarehouseID\n\t\t}\n\t}\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}






var SelectLanguage = function SelectLanguage(props) {
  console.log(props);

  if (props.data.loading) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9
      },
      __self: this
    }, "loading...");
  }

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_BookStyles__WEBPACK_IMPORTED_MODULE_4__["Select"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, props.data.Language.map(function (lang) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
      key: lang.language,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14
      },
      __self: this
    }, lang.language);
  }));
};

var query = graphql_tag__WEBPACK_IMPORTED_MODULE_2___default()(_templateObject());
/* harmony default export */ __webpack_exports__["default"] = (Object(react_apollo__WEBPACK_IMPORTED_MODULE_3__["graphql"])(query)(SelectLanguage));

/***/ }),

/***/ "./src/components/queries/bookCreate.js":
/*!**********************************************!*\
  !*** ./src/components/queries/bookCreate.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! graphql-tag */ "./node_modules/graphql-tag/src/index.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_1__);


function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n\tmutation newbook($warehouseID: ID!, $title: String, $language: String) {\n\t\taddBookCreate(warehouseID: $warehouseID, title: $title, language: $language) {\n\t\t\ttitle\n\t\t\tbookID\n\t\t\twarehouse {\n\t\t\t\tname\n\t\t\t}\n\t\t\tlanguage {\n\t\t\t\tlanguage\n\t\t\t}\n\t\t\tstock {\n\t\t\t\tbalance\n\t\t\t}\n\t\t}\n\t}\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}


/* harmony default export */ __webpack_exports__["default"] = (graphql_tag__WEBPACK_IMPORTED_MODULE_1___default()(_templateObject()));

/***/ }),

/***/ "./src/components/queries/fetchbooks.js":
/*!**********************************************!*\
  !*** ./src/components/queries/fetchbooks.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! graphql-tag */ "./node_modules/graphql-tag/src/index.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_1__);


function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n\t{\n\t\tLanguage {\n\t\t\tlanguage\n\t\t}\n\t\tWarehouse {\n\t\t\tname\n\t\t\twarehouseID\n\t\t}\n\t}\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}


/* harmony default export */ __webpack_exports__["default"] = (graphql_tag__WEBPACK_IMPORTED_MODULE_1___default()(_templateObject()));

/***/ }),

/***/ "./src/components/queries/viewStock.js":
false,

/***/ "./src/components/viewStockComponents.js":
false

})
//# sourceMappingURL=books.js.7ca83aad668a94126e80.hot-update.js.map