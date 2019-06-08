webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/components/DisplayStock.js":
/*!****************************************!*\
  !*** ./src/components/DisplayStock.js ***!
  \****************************************/
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
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-apollo */ "./node_modules/react-apollo/react-apollo.esm.js");
/* harmony import */ var _Styledsection__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Styledsection */ "./src/components/Styledsection.js");
/* harmony import */ var _viewStockComponents__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./viewStockComponents */ "./src/components/viewStockComponents.js");
/* harmony import */ var _BookStyles__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./BookStyles */ "./src/components/BookStyles.js");
/* harmony import */ var _queries_viewStock__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./queries/viewStock */ "./src/components/queries/viewStock.js");







var _jsxFileName = "/Users/TerryDag/Documents/iLearner/workspace/dhm_StyledComponent/ui/src/components/DisplayStock.js";







var DisplayStock =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(DisplayStock, _React$Component);

  function DisplayStock(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, DisplayStock);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(DisplayStock).call(this, props));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "displayCountry", function () {
      var data = _this.props.data.Country;

      if (data === undefined) {
        return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_viewStockComponents__WEBPACK_IMPORTED_MODULE_10__["TopSection"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 24
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_BookStyles__WEBPACK_IMPORTED_MODULE_11__["Label"], {
          right: "-1.5cm",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 25
          },
          __self: this
        }, " Select Country"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_BookStyles__WEBPACK_IMPORTED_MODULE_11__["Select"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 26
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("option", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 27
          },
          __self: this
        }, "loading...")));
      }

      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_viewStockComponents__WEBPACK_IMPORTED_MODULE_10__["TopSection"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_BookStyles__WEBPACK_IMPORTED_MODULE_11__["Label"], {
        right: "-1.5cm",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        },
        __self: this
      }, "Select Country"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_BookStyles__WEBPACK_IMPORTED_MODULE_11__["Select"], {
        onChange: _this.countryPick,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        },
        __self: this
      }, data.map(function (country) {
        return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("option", {
          key: country.name,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 37
          },
          __self: this
        }, " ", country.name, " ");
      }))));
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "countryPick", function (e) {
      _this.setState({
        country: e.target.value,
        option: ''
      });
    });

    _this.state = {
      initialData: [],
      country: '---',
      option: '' // countryIndex: 0

    };
    _this.handlePick = _this.handlePick.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(DisplayStock, [{
    key: "displayWarehouse",
    value: function displayWarehouse(e) {
      var pick = this.state.initialData;
      var countryOption = this.state.country;
      var countryIndex = pick.findIndex(function (countryName, index) {
        return countryOption === countryName.name;
      });

      if (countryIndex === -1 || pick[countryIndex].warehouse[0] === undefined || pick[countryIndex].warehouse[0].books === undefined) {
        return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_viewStockComponents__WEBPACK_IMPORTED_MODULE_10__["Wrapper"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 63
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_Styledsection__WEBPACK_IMPORTED_MODULE_9__["default"], {
          bgcolor: "#4ea9ad",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 64
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_viewStockComponents__WEBPACK_IMPORTED_MODULE_10__["TopSection"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 65
          },
          __self: this
        }, this.displayCountry())), this.displayBooks());
      }

      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_viewStockComponents__WEBPACK_IMPORTED_MODULE_10__["Wrapper"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_Styledsection__WEBPACK_IMPORTED_MODULE_9__["default"], {
        bgcolor: "#4ea9ad",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_viewStockComponents__WEBPACK_IMPORTED_MODULE_10__["TopSection"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        },
        __self: this
      }, this.displayCountry(), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_BookStyles__WEBPACK_IMPORTED_MODULE_11__["Label"], {
        right: "-0.7cm",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        },
        __self: this
      }, "Select Warehouse"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_BookStyles__WEBPACK_IMPORTED_MODULE_11__["Select"], {
        onChange: this.handlePick,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        },
        __self: this
      }, pick[countryIndex].warehouse.map(function (warehousename) {
        return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("option", {
          key: warehousename.warehouseID,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 79
          },
          __self: this
        }, warehousename.name);
      })))), this.displayBooks());
    }
  }, {
    key: "handlePick",
    value: function handlePick(e) {
      // console.log(this.state.option);
      this.setState({
        option: e.target.value
      });
    }
  }, {
    key: "displayBooks",
    value: function displayBooks() {
      console.log(this.state);
      var pick = this.state.initialData;
      var countryOption = this.state.country;
      var Index = pick.findIndex(function (countryName) {
        return countryOption === countryName.name;
      });
      var warehousePick = this.state.option;
      var warehouseData = this.props.data.Country[Index];
      var warehouseIndex = warehouseData.warehouse.findIndex(function (name, index) {
        return warehousePick === name.name;
      });

      if (warehouseIndex !== -1) {
        return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_viewStockComponents__WEBPACK_IMPORTED_MODULE_10__["Table"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 108
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("tbody", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 109
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("tr", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 110
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("th", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 111
          },
          __self: this
        }, "Title"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("th", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 112
          },
          __self: this
        }, "Stock"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("th", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 113
          },
          __self: this
        }, "Language")), warehouseData.warehouse[warehouseIndex].books.map(function (titles) {
          return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("tr", {
            key: titles.bookID,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 117
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("td", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 118
            },
            __self: this
          }, titles.title), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("td", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 119
            },
            __self: this
          }, titles.stock.balance), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("td", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 120
            },
            __self: this
          }, titles.language.language));
        })));
      } else if (pick[Index].warehouse[0].books === undefined) {
        return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_viewStockComponents__WEBPACK_IMPORTED_MODULE_10__["Table"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 129
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("tbody", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 130
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("tr", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 131
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("th", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 132
          },
          __self: this
        }, "Title"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("th", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 133
          },
          __self: this
        }, "Stock"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("th", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 134
          },
          __self: this
        }, "Language"))));
      } else if (warehousePick === '') {
        return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_viewStockComponents__WEBPACK_IMPORTED_MODULE_10__["Table"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 141
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("tbody", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 142
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("tr", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 143
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("th", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 144
          },
          __self: this
        }, "Title"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("th", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 145
          },
          __self: this
        }, "Stock"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("th", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 146
          },
          __self: this
        }, "Language")), warehouseData.warehouse[0].books.map(function (titles) {
          return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("tr", {
            key: titles.bookID,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 150
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("td", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 151
            },
            __self: this
          }, titles.title), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("td", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 152
            },
            __self: this
          }, titles.stock.balance), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("td", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 153
            },
            __self: this
          }, titles.language.language));
        })));
      }

      return;
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      var fetchedData = this.props.data.Country;

      if (this.state.country === '---') {
        this.setState({
          country: fetchedData[0].name,
          initialData: this.props.data.Country
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_viewStockComponents__WEBPACK_IMPORTED_MODULE_10__["Wrapper"], {
        marginLeft: "200px",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 174
        },
        __self: this
      }, this.displayWarehouse());
    }
  }]);

  return DisplayStock;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Object(react_apollo__WEBPACK_IMPORTED_MODULE_8__["graphql"])(_queries_viewStock__WEBPACK_IMPORTED_MODULE_12__["default"])(DisplayStock));

/***/ })

})
//# sourceMappingURL=index.js.c56e08049513478ae355.hot-update.js.map