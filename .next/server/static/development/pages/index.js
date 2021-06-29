module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _src_08_components_main_MainPage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../src/08/components/main/MainPage */ "./src/08/components/main/MainPage.jsx");
var _jsxFileName = "/Volumes/Workstation/dev_wooseok/react/do-it-example/pages/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




class IndexDocument extends react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"] {
  render() {
    return __jsx(_src_08_components_main_MainPage__WEBPACK_IMPORTED_MODULE_1__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 7,
        columnNumber: 12
      }
    });
  }

}

/* harmony default export */ __webpack_exports__["default"] = (IndexDocument);

/***/ }),

/***/ "./src/04/withStyles.js":
/*!******************************!*\
  !*** ./src/04/withStyles.js ***!
  \******************************/
/*! exports provided: css, withStyles, withStylesPropTypes, ThemedStyleSheet, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_with_styles_lib_ThemedStyleSheet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-with-styles/lib/ThemedStyleSheet */ "react-with-styles/lib/ThemedStyleSheet");
/* harmony import */ var react_with_styles_lib_ThemedStyleSheet__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_with_styles_lib_ThemedStyleSheet__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, "ThemedStyleSheet", function() { return react_with_styles_lib_ThemedStyleSheet__WEBPACK_IMPORTED_MODULE_0___default.a; });
/* harmony import */ var react_with_styles_interface_aphrodite_lib_aphroditeInterface__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-with-styles-interface-aphrodite/lib/aphroditeInterface */ "react-with-styles-interface-aphrodite/lib/aphroditeInterface");
/* harmony import */ var react_with_styles_interface_aphrodite_lib_aphroditeInterface__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_with_styles_interface_aphrodite_lib_aphroditeInterface__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_with_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-with-styles */ "react-with-styles");
/* harmony import */ var react_with_styles__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_with_styles__WEBPACK_IMPORTED_MODULE_2__);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "css", function() { return react_with_styles__WEBPACK_IMPORTED_MODULE_2__["css"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "withStyles", function() { return react_with_styles__WEBPACK_IMPORTED_MODULE_2__["withStyles"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "withStylesPropTypes", function() { return react_with_styles__WEBPACK_IMPORTED_MODULE_2__["withStylesPropTypes"]; });

/* harmony import */ var _doit_ui_Theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../doit-ui/Theme */ "./src/doit-ui/Theme.js");




react_with_styles_lib_ThemedStyleSheet__WEBPACK_IMPORTED_MODULE_0___default.a.registerTheme(_doit_ui_Theme__WEBPACK_IMPORTED_MODULE_3__["default"]);
react_with_styles_lib_ThemedStyleSheet__WEBPACK_IMPORTED_MODULE_0___default.a.registerInterface(react_with_styles_interface_aphrodite_lib_aphroditeInterface__WEBPACK_IMPORTED_MODULE_1___default.a);

/* harmony default export */ __webpack_exports__["default"] = (react_with_styles__WEBPACK_IMPORTED_MODULE_2__["withStyles"]);

/***/ }),

/***/ "./src/05/withLoading.jsx":
/*!********************************!*\
  !*** ./src/05/withLoading.jsx ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Volumes/Workstation/dev_wooseok/react/do-it-example/src/05/withLoading.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }


/* harmony default export */ __webpack_exports__["default"] = (function (loadingMessage = '로딩 중') {
  return function withLoading(WrappedComponent) {
    const {
      displayName,
      name: componentName
    } = WrappedComponent;
    const wrappedComponentName = displayName || componentName;

    function WithLoading(_ref) {
      let {
        isLoading
      } = _ref,
          otherProps = _objectWithoutProperties(_ref, ["isLoading"]);

      if (isLoading) return loadingMessage;
      return __jsx(WrappedComponent, _extends({}, otherProps, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 10,
          columnNumber: 20
        }
      }));
    }

    WithLoading.displayName = `withLoading(${wrappedComponentName})`;
    return WithLoading;
  };
});

/***/ }),

/***/ "./src/08/Api.js":
/*!***********************!*\
  !*** ./src/08/Api.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

const isDev = true;
const Api = axios__WEBPACK_IMPORTED_MODULE_0___default.a.create({
  baseURL: isDev ? 'http://localhost:4000' : '/api/'
});
/* harmony default export */ __webpack_exports__["default"] = (Api);

/***/ }),

/***/ "./src/08/actions/transactionPackActions.js":
/*!**************************************************!*\
  !*** ./src/08/actions/transactionPackActions.js ***!
  \**************************************************/
/*! exports provided: CREATE_TRANSACTION, FETCH_TRANSACTION_LIST, resetTransactionList, requestTransactionList, createTransaction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CREATE_TRANSACTION", function() { return CREATE_TRANSACTION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_TRANSACTION_LIST", function() { return FETCH_TRANSACTION_LIST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resetTransactionList", function() { return resetTransactionList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "requestTransactionList", function() { return requestTransactionList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createTransaction", function() { return createTransaction; });
/* harmony import */ var _11_api_redux_pack_createActions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../11/api-redux-pack/createActions */ "./src/11/api-redux-pack/createActions.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const CREATE_TRANSACTION = 'transaction/CREATE_TRANSACTION';
const FETCH_TRANSACTION_LIST = 'transaction/FETCH_TRANSACTION_LIST';
const {
  collection,
  create,
  reset
} = Object(_11_api_redux_pack_createActions__WEBPACK_IMPORTED_MODULE_0__["default"])('transactions');
const PAGE_SIZE = 10;
const resetTransactionList = reset;
function requestTransactionList(params, _page = 1) {
  const meta = {
    pageNumber: _page,
    pageSize: PAGE_SIZE,
    notification: {
      success: '거래 목록을 최신 정보로 업데이트했습니다.',
      error: '거래 목록을 갱신하는 중에 문제가 발생했습니다.'
    }
  };
  return collection(_objectSpread({}, params, {
    _page,
    _limit: PAGE_SIZE
  }), meta);
}
function createTransaction(data, onComplete) {
  const meta = {
    onSuccess: onComplete,
    notification: {
      success: '거래가 성공적으로 완료되었습니다'
    }
  };
  return create(data, {}, meta);
}

/***/ }),

/***/ "./src/08/components/main/CoinDashlet.jsx":
/*!************************************************!*\
  !*** ./src/08/components/main/CoinDashlet.jsx ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _doit_ui_Card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../doit-ui/Card */ "./src/doit-ui/Card.jsx");
/* harmony import */ var _doit_ui_Heading__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../doit-ui/Heading */ "./src/doit-ui/Heading.jsx");
/* harmony import */ var _doit_ui_Text__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../doit-ui/Text */ "./src/doit-ui/Text.jsx");
/* harmony import */ var _doit_ui_InlineList__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../doit-ui/InlineList */ "./src/doit-ui/InlineList.jsx");
/* harmony import */ var _doit_ui_Button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../doit-ui/Button */ "./src/doit-ui/Button.jsx");
/* harmony import */ var _doit_ui_Modal_context__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../doit-ui/Modal/context */ "./src/doit-ui/Modal/context.js");
/* harmony import */ var _constants_modals__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../constants/modals */ "./src/08/constants/modals.js");
var _jsxFileName = "/Volumes/Workstation/dev_wooseok/react/do-it-example/src/08/components/main/CoinDashlet.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;










class CoinDashlet extends react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"] {
  render() {
    const {
      name,
      priceLabel,
      code
    } = this.props;
    return __jsx(_doit_ui_Modal_context__WEBPACK_IMPORTED_MODULE_7__["Consumer"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 7
      }
    }, ({
      openModal
    }) => __jsx(_doit_ui_Card__WEBPACK_IMPORTED_MODULE_2__["default"], {
      vertical: 4,
      horizontal: 4,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 11
      }
    }, __jsx(_doit_ui_Heading__WEBPACK_IMPORTED_MODULE_3__["default"], {
      level: 4,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 13
      }
    }, name, __jsx(_doit_ui_Text__WEBPACK_IMPORTED_MODULE_4__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 15
      }
    }, priceLabel)), __jsx(_doit_ui_InlineList__WEBPACK_IMPORTED_MODULE_5__["default"], {
      spacingBetween: 1,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 13
      }
    }, __jsx(_doit_ui_Button__WEBPACK_IMPORTED_MODULE_6__["default"], {
      primary: true,
      small: true,
      onPress: () => openModal(_constants_modals__WEBPACK_IMPORTED_MODULE_8__["TRADE_COIN_MODAL"], {
        type: 'buy',
        code,
        name,
        price: priceLabel
      }),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 15
      }
    }, "\uB9E4\uB3C4"), __jsx(_doit_ui_Button__WEBPACK_IMPORTED_MODULE_6__["default"], {
      small: true,
      onPress: () => openModal(_constants_modals__WEBPACK_IMPORTED_MODULE_8__["TRADE_COIN_MODAL"], {
        type: 'sell',
        code,
        name,
        price: priceLabel
      }),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 15
      }
    }, "\uB9E4\uC218"))));
  }

}

CoinDashlet.propTypes = {
  name: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  priceLabel: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
};
/* harmony default export */ __webpack_exports__["default"] = (CoinDashlet);

/***/ }),

/***/ "./src/08/components/main/CoinOverview.jsx":
/*!*************************************************!*\
  !*** ./src/08/components/main/CoinOverview.jsx ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _doit_ui_Heading__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../doit-ui/Heading */ "./src/doit-ui/Heading.jsx");
/* harmony import */ var _doit_ui_InlineList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../doit-ui/InlineList */ "./src/doit-ui/InlineList.jsx");
/* harmony import */ var _CoinDashlet__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./CoinDashlet */ "./src/08/components/main/CoinDashlet.jsx");
var _jsxFileName = "/Volumes/Workstation/dev_wooseok/react/do-it-example/src/08/components/main/CoinOverview.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





class CoinOverview extends react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"] {
  render() {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_doit_ui_Heading__WEBPACK_IMPORTED_MODULE_1__["default"], {
      level: 3,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 9
      }
    }, "\uCF54\uC778 \uB3D9\uD5A5"), __jsx(_doit_ui_InlineList__WEBPACK_IMPORTED_MODULE_2__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 9
      }
    }, __jsx(_CoinDashlet__WEBPACK_IMPORTED_MODULE_3__["default"], {
      code: "BTX",
      name: "\uBE44\uD2B8\uCF54\uC778(BTX)",
      priceLabel: "4216000",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 11
      }
    }), __jsx(_CoinDashlet__WEBPACK_IMPORTED_MODULE_3__["default"], {
      code: "ETH",
      name: "\uC774\uB354\uB9AC\uC6C0(ETH)",
      priceLabel: "216000",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 11
      }
    }), __jsx(_CoinDashlet__WEBPACK_IMPORTED_MODULE_3__["default"], {
      code: "DOIT",
      name: "\uB450\uC787\uCF54\uC778(DOIT)",
      priceLabel: "36000",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 11
      }
    })));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (CoinOverview);

/***/ }),

/***/ "./src/08/components/main/MainPage.jsx":
/*!*********************************************!*\
  !*** ./src/08/components/main/MainPage.jsx ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _CoinOverview__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CoinOverview */ "./src/08/components/main/CoinOverview.jsx");
/* harmony import */ var _containers_main_TransactionListContainer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../containers/main/TransactionListContainer */ "./src/08/containers/main/TransactionListContainer.jsx");
var _jsxFileName = "/Volumes/Workstation/dev_wooseok/react/do-it-example/src/08/components/main/MainPage.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




class MainPage extends react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"] {
  render() {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_CoinOverview__WEBPACK_IMPORTED_MODULE_1__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 9
      }
    }), __jsx(_containers_main_TransactionListContainer__WEBPACK_IMPORTED_MODULE_2__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 9
      }
    }));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (MainPage);

/***/ }),

/***/ "./src/08/components/main/TransactionList.jsx":
/*!****************************************************!*\
  !*** ./src/08/components/main/TransactionList.jsx ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _doit_ui_Heading__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../doit-ui/Heading */ "./src/doit-ui/Heading.jsx");
/* harmony import */ var _doit_ui_Card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../doit-ui/Card */ "./src/doit-ui/Card.jsx");
/* harmony import */ var _TransactionTable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./TransactionTable */ "./src/08/components/main/TransactionTable.jsx");
/* harmony import */ var _containers_main_TransactionSearchFilterContainer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../containers/main/TransactionSearchFilterContainer */ "./src/08/containers/main/TransactionSearchFilterContainer.jsx");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _containers_main_TransactionPaginationContainer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../containers/main/TransactionPaginationContainer */ "./src/08/containers/main/TransactionPaginationContainer.jsx");
var _jsxFileName = "/Volumes/Workstation/dev_wooseok/react/do-it-example/src/08/components/main/TransactionList.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;








class TransactionList extends react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"] {
  render() {
    const {
      transactions,
      loading
    } = this.props;
    return __jsx("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 7
      }
    }, __jsx(_doit_ui_Heading__WEBPACK_IMPORTED_MODULE_1__["default"], {
      level: 3,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 9
      }
    }, "\uAC70\uB798 \uD604\uD669"), __jsx(_doit_ui_Card__WEBPACK_IMPORTED_MODULE_2__["default"], {
      vertical: 4,
      horizontal: 4,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 9
      }
    }, __jsx(_containers_main_TransactionSearchFilterContainer__WEBPACK_IMPORTED_MODULE_4__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 11
      }
    })), __jsx(_doit_ui_Card__WEBPACK_IMPORTED_MODULE_2__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 9
      }
    }, __jsx(_TransactionTable__WEBPACK_IMPORTED_MODULE_3__["default"], {
      transactions: transactions,
      isLoading: loading,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 11
      }
    })), __jsx(_containers_main_TransactionPaginationContainer__WEBPACK_IMPORTED_MODULE_6__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 9
      }
    }));
  }

}

TransactionList.propTypes = {
  requestTransactionList: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.func
};
TransactionList.defaultProps = {
  transactions: [],
  requestTransactionList: () => {}
};
/* harmony default export */ __webpack_exports__["default"] = (TransactionList);

/***/ }),

/***/ "./src/08/components/main/TransactionPagination.jsx":
/*!**********************************************************!*\
  !*** ./src/08/components/main/TransactionPagination.jsx ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _doit_ui_InlineList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../doit-ui/InlineList */ "./src/doit-ui/InlineList.jsx");
/* harmony import */ var _doit_ui_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../doit-ui/Button */ "./src/doit-ui/Button.jsx");
var _jsxFileName = "/Volumes/Workstation/dev_wooseok/react/do-it-example/src/08/components/main/TransactionPagination.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






class TransactionPagination extends react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"] {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "handleNextPress", () => {
      const {
        requestTransactionList,
        pageNumber,
        searchParams
      } = this.props;
      requestTransactionList(searchParams, pageNumber + 1);
    });

    _defineProperty(this, "handlePrevPress", () => {
      const {
        requestTransactionList,
        pageNumber,
        searchParams
      } = this.props;
      requestTransactionList(searchParams, pageNumber - 1);
    });
  }

  render() {
    const {
      loading,
      pageNumber,
      hasNext
    } = this.props;
    const prevDisabled = loading || pageNumber <= 1;
    const nextDisabled = loading || !hasNext;
    return __jsx(_doit_ui_InlineList__WEBPACK_IMPORTED_MODULE_2__["default"], {
      align: "right",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 7
      }
    }, __jsx(_doit_ui_Button__WEBPACK_IMPORTED_MODULE_3__["default"], {
      secondary: true,
      disabled: prevDisabled,
      onPress: this.handlePrevPress,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 9
      }
    }, "\uC774\uC804"), __jsx(_doit_ui_Button__WEBPACK_IMPORTED_MODULE_3__["default"], {
      secondary: true,
      disabled: nextDisabled,
      onPress: this.handleNextPress,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 9
      }
    }, "\uB2E4\uC74C"));
  }

}

TransactionPagination.propTypes = {
  hasNext: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  requestTransactionList: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  pageNumber: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  loading: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  searchParams: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object
};
/* harmony default export */ __webpack_exports__["default"] = (TransactionPagination);

/***/ }),

/***/ "./src/08/components/main/TransactionSearchFilter.jsx":
/*!************************************************************!*\
  !*** ./src/08/components/main/TransactionSearchFilter.jsx ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _doit_ui_Form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../doit-ui/Form */ "./src/doit-ui/Form.jsx");
/* harmony import */ var _doit_ui_InlineList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../doit-ui/InlineList */ "./src/doit-ui/InlineList.jsx");
/* harmony import */ var _doit_ui_Text__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../doit-ui/Text */ "./src/doit-ui/Text.jsx");
/* harmony import */ var _doit_ui_Select__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../doit-ui/Select */ "./src/doit-ui/Select.jsx");
/* harmony import */ var _doit_ui_Input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../doit-ui/Input */ "./src/doit-ui/Input.jsx");
/* harmony import */ var _doit_ui_Button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../doit-ui/Button */ "./src/doit-ui/Button.jsx");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_8__);
var _jsxFileName = "/Volumes/Workstation/dev_wooseok/react/do-it-example/src/08/components/main/TransactionSearchFilter.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }











class TransactionSearchFilter extends react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"] {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "handleSubmit", values => {
      const {
        history
      } = this.props;
      const cleanedParams = Object.entries(values).filter(entries => entries[1] !== '').reduce((obj, [key, values]) => _objectSpread({}, obj, {
        [key]: values
      }), {});
      const querystring = Object.entries(cleanedParams).map(([key, value]) => `${key}=${value}`).join('&');
      history.push(`/?${querystring}`);
    });
  }

  render() {
    const {
      initValues
    } = this.props;
    return __jsx(_doit_ui_Form__WEBPACK_IMPORTED_MODULE_1__["default"], {
      onSubmit: this.handleSubmit,
      initValues: initValues,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 7
      }
    }, __jsx(_doit_ui_Form__WEBPACK_IMPORTED_MODULE_1__["default"].Consumer, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 9
      }
    }, ({
      onChange,
      values
    }) => {
      return __jsx(_doit_ui_InlineList__WEBPACK_IMPORTED_MODULE_2__["default"], {
        spacingBetween: 2,
        verticalAlign: "bottom",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30,
          columnNumber: 15
        }
      }, __jsx(_doit_ui_Text__WEBPACK_IMPORTED_MODULE_3__["default"], {
        large: true,
        bold: true,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31,
          columnNumber: 17
        }
      }, "\uAC80\uC0C9"), __jsx(_doit_ui_Select__WEBPACK_IMPORTED_MODULE_4__["default"], {
        name: "code",
        label: "\uCF54\uC778 \uCF54\uB4DC",
        onChange: onChange,
        value: values['code'],
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34,
          columnNumber: 17
        }
      }, __jsx(_doit_ui_Select__WEBPACK_IMPORTED_MODULE_4__["Option"], {
        label: "\uC120\uD0DD\uD574\uC8FC\uC138\uC694",
        value: "",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35,
          columnNumber: 19
        }
      }), __jsx(_doit_ui_Select__WEBPACK_IMPORTED_MODULE_4__["Option"], {
        value: "BTX",
        label: "\uBE44\uD2B8\uCF54\uC778(BTX)",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36,
          columnNumber: 19
        }
      }), __jsx(_doit_ui_Select__WEBPACK_IMPORTED_MODULE_4__["Option"], {
        value: "ETH",
        label: "\uC774\uB354\uB9AC\uC6C0(ETH)",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37,
          columnNumber: 19
        }
      }), __jsx(_doit_ui_Select__WEBPACK_IMPORTED_MODULE_4__["Option"], {
        value: "DOIT",
        label: "\uB450\uC787\uCF54\uC778(DOIT)",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38,
          columnNumber: 19
        }
      })), __jsx(_doit_ui_Input__WEBPACK_IMPORTED_MODULE_5__["default"], {
        name: "currentPrice_gte",
        value: values['currentPrice_gte'],
        onChange: onChange,
        label: "\uCD5C\uC18C \uAC70\uB798\uAC00",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40,
          columnNumber: 17
        }
      }), __jsx(_doit_ui_Input__WEBPACK_IMPORTED_MODULE_5__["default"], {
        name: "currentPrice_lte",
        value: values['currentPrice_lte'],
        onChange: onChange,
        label: "\uCD5C\uB300 \uAC70\uB798\uAC00",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46,
          columnNumber: 17
        }
      }), __jsx(_doit_ui_Button__WEBPACK_IMPORTED_MODULE_6__["default"], {
        type: 'submit',
        primary: true,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52,
          columnNumber: 17
        }
      }, "\uAC80\uC0C9"));
    }));
  }

}

TransactionSearchFilter.propTypes = {
  requestTransactionList: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.func,
  setFilter: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.func
};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_router_dom__WEBPACK_IMPORTED_MODULE_8__["withRouter"])(TransactionSearchFilter));

/***/ }),

/***/ "./src/08/components/main/TransactionTable.jsx":
/*!*****************************************************!*\
  !*** ./src/08/components/main/TransactionTable.jsx ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _doit_ui_Table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../doit-ui/Table */ "./src/doit-ui/Table.jsx");
/* harmony import */ var _doit_ui_TableHead__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../doit-ui/TableHead */ "./src/doit-ui/TableHead.jsx");
/* harmony import */ var _doit_ui_TableRow__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../doit-ui/TableRow */ "./src/doit-ui/TableRow.jsx");
/* harmony import */ var _doit_ui_TableCell__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../doit-ui/TableCell */ "./src/doit-ui/TableCell.jsx");
/* harmony import */ var _doit_ui_TableBody__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../doit-ui/TableBody */ "./src/doit-ui/TableBody.jsx");
/* harmony import */ var _doit_ui_Spacing__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../doit-ui/Spacing */ "./src/doit-ui/Spacing.jsx");
/* harmony import */ var _doit_ui_Text__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../doit-ui/Text */ "./src/doit-ui/Text.jsx");
/* harmony import */ var _05_withLoading__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../05/withLoading */ "./src/05/withLoading.jsx");
var _jsxFileName = "/Volumes/Workstation/dev_wooseok/react/do-it-example/src/08/components/main/TransactionTable.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;











const LoadingMessage = __jsx(_doit_ui_Spacing__WEBPACK_IMPORTED_MODULE_7__["default"], {
  vertical: 4,
  horizontal: 2,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 13,
    columnNumber: 3
  }
}, __jsx(_doit_ui_Text__WEBPACK_IMPORTED_MODULE_8__["default"], {
  large: true,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 14,
    columnNumber: 5
  }
}, "\uB370\uC774\uD130\uB97C \uBD88\uB7EC\uB4E4\uC774\uACE0 \uC788\uC2B5\uB2C8\uB2E4."));

class TransactionTable extends react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"] {
  render() {
    const {
      transactions
    } = this.props;
    return __jsx(_doit_ui_Table__WEBPACK_IMPORTED_MODULE_2__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 7
      }
    }, __jsx(_doit_ui_TableHead__WEBPACK_IMPORTED_MODULE_3__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 9
      }
    }, __jsx(_doit_ui_TableRow__WEBPACK_IMPORTED_MODULE_4__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 11
      }
    }, __jsx(_doit_ui_TableCell__WEBPACK_IMPORTED_MODULE_5__["default"], {
      align: "center",
      isHeader: true,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 13
      }
    }, "ID."), __jsx(_doit_ui_TableCell__WEBPACK_IMPORTED_MODULE_5__["default"], {
      align: "center",
      isHeader: true,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 13
      }
    }, "\uCF54\uC778"), __jsx(_doit_ui_TableCell__WEBPACK_IMPORTED_MODULE_5__["default"], {
      align: "right",
      isHeader: true,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 13
      }
    }, "\uC2DC\uAC00 \uCD1D\uC561"), __jsx(_doit_ui_TableCell__WEBPACK_IMPORTED_MODULE_5__["default"], {
      align: "right",
      isHeader: true,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 13
      }
    }, "\uD604\uC7AC \uC2DC\uC138"), __jsx(_doit_ui_TableCell__WEBPACK_IMPORTED_MODULE_5__["default"], {
      align: "center",
      isHeader: true,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 13
      }
    }, "\uAC70\uB798 \uC2DC\uAC04"))), __jsx(_doit_ui_TableBody__WEBPACK_IMPORTED_MODULE_6__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 9
      }
    }, transactions.map(({
      id,
      name,
      totalPrice,
      currentPrice,
      dateTime
    }) => __jsx(_doit_ui_TableRow__WEBPACK_IMPORTED_MODULE_4__["default"], {
      id: id,
      key: id,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 13
      }
    }, __jsx(_doit_ui_TableCell__WEBPACK_IMPORTED_MODULE_5__["default"], {
      align: "center",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 15
      }
    }, id), __jsx(_doit_ui_TableCell__WEBPACK_IMPORTED_MODULE_5__["default"], {
      align: "left",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 15
      }
    }, name), __jsx(_doit_ui_TableCell__WEBPACK_IMPORTED_MODULE_5__["default"], {
      align: "right",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 15
      }
    }, totalPrice.toLocaleString()), __jsx(_doit_ui_TableCell__WEBPACK_IMPORTED_MODULE_5__["default"], {
      align: "right",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 15
      }
    }, currentPrice.toLocaleString()), __jsx(_doit_ui_TableCell__WEBPACK_IMPORTED_MODULE_5__["default"], {
      align: "center",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 15
      }
    }, dateTime)))));
  }

}

TransactionTable.propTypes = {
  transactions: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
    id: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
    name: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
    totalPrice: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
    currentPrice: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
    dateTime: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
  }))
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_05_withLoading__WEBPACK_IMPORTED_MODULE_9__["default"])(LoadingMessage)(TransactionTable));

/***/ }),

/***/ "./src/08/constants/modals.js":
/*!************************************!*\
  !*** ./src/08/constants/modals.js ***!
  \************************************/
/*! exports provided: TRADE_COIN_MODAL, REGISTER_USER_MODAL */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TRADE_COIN_MODAL", function() { return TRADE_COIN_MODAL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REGISTER_USER_MODAL", function() { return REGISTER_USER_MODAL; });
const TRADE_COIN_MODAL = 'modal/TRADE_COIN_MODAL';
const REGISTER_USER_MODAL = 'modal/REGISTER_USER_MODAL';

/***/ }),

/***/ "./src/08/containers/main/TransactionListContainer.jsx":
/*!*************************************************************!*\
  !*** ./src/08/containers/main/TransactionListContainer.jsx ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_main_TransactionList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/main/TransactionList */ "./src/08/components/main/TransactionList.jsx");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _selectors_transactionSelectors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../selectors/transactionSelectors */ "./src/08/selectors/transactionSelectors.js");
/* harmony import */ var _actions_transactionPackActions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../actions/transactionPackActions */ "./src/08/actions/transactionPackActions.js");





const mapStateToProps = state => {
  return {
    transactions: Object(_selectors_transactionSelectors__WEBPACK_IMPORTED_MODULE_2__["transactionListSelector"])(state),
    loading: Object(_selectors_transactionSelectors__WEBPACK_IMPORTED_MODULE_2__["transactionListLoadingStateSelector"])(state)
  };
};

const mapDispatchToProps = {
  requestTransactionList: _actions_transactionPackActions__WEBPACK_IMPORTED_MODULE_3__["requestTransactionList"]
};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, mapDispatchToProps)(_components_main_TransactionList__WEBPACK_IMPORTED_MODULE_0__["default"]));

/***/ }),

/***/ "./src/08/containers/main/TransactionPaginationContainer.jsx":
/*!*******************************************************************!*\
  !*** ./src/08/containers/main/TransactionPaginationContainer.jsx ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_main_TransactionPagination__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/main/TransactionPagination */ "./src/08/components/main/TransactionPagination.jsx");
/* harmony import */ var _selectors_transactionSelectors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../selectors/transactionSelectors */ "./src/08/selectors/transactionSelectors.js");
/* harmony import */ var _actions_transactionPackActions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../actions/transactionPackActions */ "./src/08/actions/transactionPackActions.js");





const mapStateToProps = state => {
  const {
    pagination,
    ids
  } = state.transactions;
  const {
    number,
    size
  } = pagination;
  return {
    pageNumber: number || 1,
    hasNext: ids.length === size,
    loading: Object(_selectors_transactionSelectors__WEBPACK_IMPORTED_MODULE_2__["transactionListLoadingStateSelector"])(state),
    searchParams: state.searchFilter.params
  };
};

const mapDispatchToProps = {
  requestTransactionList: _actions_transactionPackActions__WEBPACK_IMPORTED_MODULE_3__["requestTransactionList"]
};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_0__["connect"])(mapStateToProps, mapDispatchToProps)(_components_main_TransactionPagination__WEBPACK_IMPORTED_MODULE_1__["default"]));

/***/ }),

/***/ "./src/08/containers/main/TransactionSearchFilterContainer.jsx":
/*!*********************************************************************!*\
  !*** ./src/08/containers/main/TransactionSearchFilterContainer.jsx ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_main_TransactionSearchFilter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/main/TransactionSearchFilter */ "./src/08/components/main/TransactionSearchFilter.jsx");



const mapStateToProps = state => ({
  initValues: state.searchFilter.params
});

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_0__["connect"])(mapStateToProps)(_components_main_TransactionSearchFilter__WEBPACK_IMPORTED_MODULE_1__["default"]));

/***/ }),

/***/ "./src/08/selectors/transactionSelectors.js":
/*!**************************************************!*\
  !*** ./src/08/selectors/transactionSelectors.js ***!
  \**************************************************/
/*! exports provided: transactionSelector, transactionListSelector, transactionListLoadingStateSelector, transactionCreateLoadingStateSelector, paginationSelector */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transactionSelector", function() { return transactionSelector; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transactionListSelector", function() { return transactionListSelector; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transactionListLoadingStateSelector", function() { return transactionListLoadingStateSelector; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transactionCreateLoadingStateSelector", function() { return transactionCreateLoadingStateSelector; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "paginationSelector", function() { return paginationSelector; });
/* harmony import */ var _11_api_redux_pack_createSelectors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../11/api-redux-pack/createSelectors */ "./src/11/api-redux-pack/createSelectors.js");

const {
  resourceSelector: transactionSelector,
  collectionSelector: transactionListSelector,
  collectionLoadingStateSelector: transactionListLoadingStateSelector,
  createLoadingStateSelector: transactionCreateLoadingStateSelector,
  paginationSelector
} = Object(_11_api_redux_pack_createSelectors__WEBPACK_IMPORTED_MODULE_0__["default"])('transactions');

/***/ }),

/***/ "./src/11/api-redux-pack/actionTypes.js":
/*!**********************************************!*\
  !*** ./src/11/api-redux-pack/actionTypes.js ***!
  \**********************************************/
/*! exports provided: FETCH_LIST, FETCH, UPDATE, CREATE, RESET */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_LIST", function() { return FETCH_LIST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH", function() { return FETCH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE", function() { return UPDATE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CREATE", function() { return CREATE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RESET", function() { return RESET; });
const FETCH_LIST = 'api-redux-pack/FETCH_LIST';
const FETCH = 'api-redux-pack/FETCH';
const UPDATE = 'api-redux-pack/UPDATE';
const CREATE = 'api-redux-pack/CREATE';
const RESET = 'api-redux-pack/RESET';

/***/ }),

/***/ "./src/11/api-redux-pack/createActions.js":
/*!************************************************!*\
  !*** ./src/11/api-redux-pack/createActions.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _actionTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./actionTypes */ "./src/11/api-redux-pack/actionTypes.js");
/* harmony import */ var _08_Api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../08/Api */ "./src/08/Api.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



/* harmony default export */ __webpack_exports__["default"] = ((resourceName, key = 'id') => ({
  collection: (params = {}, meta = {}) => ({
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__["FETCH_LIST"],
    promise: _08_Api__WEBPACK_IMPORTED_MODULE_1__["default"].get(resourceName, {
      params
    }),
    meta: _objectSpread({}, meta, {
      key,
      resourceName
    })
  }),
  member: (id, params = {}, meta = {}) => ({
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__["FETCH"],
    promise: _08_Api__WEBPACK_IMPORTED_MODULE_1__["default"].get(`${resourceName}/${id}`, {
      params
    }),
    meta: _objectSpread({}, meta, {
      key,
      resourceName
    })
  }),
  create: (data, params = {}, meta = {}) => ({
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__["CREATE"],
    promise: _08_Api__WEBPACK_IMPORTED_MODULE_1__["default"].post(resourceName, data, {
      params
    }),
    meta: _objectSpread({}, meta, {
      key,
      resourceName
    })
  }),
  update: (id, data, params = {}, meta = {}) => ({
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__["UPDATE"],
    promise: _08_Api__WEBPACK_IMPORTED_MODULE_1__["default"].put(`${resourceName}/${id}`, data, {
      params
    }),
    meta: _objectSpread({}, meta, {
      key,
      resourceName
    })
  }),
  reset: () => ({
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__["RESET"],
    meta: {
      resourceName
    }
  })
}));

/***/ }),

/***/ "./src/11/api-redux-pack/createSelectors.js":
/*!**************************************************!*\
  !*** ./src/11/api-redux-pack/createSelectors.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return createSelectors; });
/* harmony import */ var reselect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! reselect */ "reselect");
/* harmony import */ var reselect__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(reselect__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _actionTypes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./actionTypes */ "./src/11/api-redux-pack/actionTypes.js");


function createSelectors(resourceName) {
  const resourceSelector = state => state[resourceName];

  const entitiesSelector = state => resourceSelector(state).entities;

  const collectionSelector = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])([resourceSelector], ({
    ids,
    entities
  }) => ids.map(id => entities[id]));

  const loadingStateSelector = state => resourceSelector(state).loadingState;

  const errorStateSelector = state => resourceSelector(state).errorState;

  const collectionLoadingStateSelector = state => loadingStateSelector(state)[`${_actionTypes__WEBPACK_IMPORTED_MODULE_1__["FETCH_LIST"]}/${resourceName}`];

  const createLoadingStateSelector = state => loadingStateSelector(state)[`${_actionTypes__WEBPACK_IMPORTED_MODULE_1__["CREATE"]}/${resourceName}`];

  const updateLoadingStateSelector = state => loadingStateSelector(state)[`${_actionTypes__WEBPACK_IMPORTED_MODULE_1__["UPDATE"]}/${resourceName}`];

  const memberLoadingStateSelector = state => loadingStateSelector(state)[`${_actionTypes__WEBPACK_IMPORTED_MODULE_1__["FETCH"]}/${resourceName}`];

  const collectionErrorStateSelector = state => errorStateSelector(state)[`${_actionTypes__WEBPACK_IMPORTED_MODULE_1__["FETCH_LIST"]}/${resourceName}`];

  const createErrorStateSelector = state => errorStateSelector(state)[`${_actionTypes__WEBPACK_IMPORTED_MODULE_1__["CREATE"]}/${resourceName}`];

  const updateErrorStateSelector = state => errorStateSelector(state)[`${_actionTypes__WEBPACK_IMPORTED_MODULE_1__["UPDATE"]}/${resourceName}`];

  const memberErrorStateSelector = state => errorStateSelector(state)[`${_actionTypes__WEBPACK_IMPORTED_MODULE_1__["FETCH"]}/${resourceName}`];

  const paginationSelector = state => {
    const {
      pagination
    } = resourceSelector(state);
    return {
      number: pagination.number || 0,
      size: pagination.size
    };
  };

  return {
    resourceSelector,
    entitiesSelector,
    collectionSelector,
    collectionLoadingStateSelector,
    createLoadingStateSelector,
    updateLoadingStateSelector,
    memberLoadingStateSelector,
    collectionErrorStateSelector,
    createErrorStateSelector,
    updateErrorStateSelector,
    memberErrorStateSelector,
    paginationSelector
  };
}

/***/ }),

/***/ "./src/doit-ui/Button.jsx":
/*!********************************!*\
  !*** ./src/doit-ui/Button.jsx ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _withStyles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./withStyles */ "./src/doit-ui/withStyles.js");
var _jsxFileName = "/Volumes/Workstation/dev_wooseok/react/do-it-example/src/doit-ui/Button.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }





class Button extends react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"] {
  render() {
    const {
      type,
      children,
      disabled,
      styles,
      large,
      xlarge,
      small,
      xsmall,
      primary,
      secondary,
      onPress
    } = this.props;
    return __jsx("button", _extends({}, Object(_withStyles__WEBPACK_IMPORTED_MODULE_2__["css"])(styles.default, xsmall && styles.xsmall, small && styles.small, large && styles.large, xlarge && styles.xlarge, secondary && styles.secondary, primary && styles.primary, disabled && styles.disabled), {
      disabled: disabled,
      type: type,
      onClick: onPress,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 7
      }
    }), children);
  }

}

Button.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node.isRequired,
  xsmall: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  small: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  large: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  xlarge: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  secondary: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  primary: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  onPress: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  type: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOf(['submit', 'reset', 'button'])
};
Button.defaultProps = {
  onPress: () => {},
  xsmall: false,
  small: false,
  large: false,
  xlarge: false,
  secondary: false,
  primary: false
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_withStyles__WEBPACK_IMPORTED_MODULE_2__["withStyles"])(({
  color,
  size,
  unit,
  depth,
  fontWeight
}) => ({
  default: _objectSpread({}, depth.level1, {
    border: 1,
    borderStyle: 'solid',
    borderColor: color.default,
    borderRadius: unit,
    color: color.default,
    fontSize: size.md,
    fontWeight: fontWeight.bold,
    padding: unit * 2,
    paddingLeft: unit * 4,
    paddingRight: unit * 4,
    outline: 0,
    cursor: 'pointer',
    ':hover': {
      backgroundColor: color.grayLight
    },
    ':focus': {
      boxShadow: '0 0 0 2px rgba(0, 0, 0, 0.3)'
    }
  }),
  xlarge: {
    fontSize: size.xg
  },
  large: {
    fontSize: size.lg,
    padding: unit
  },
  small: {
    fontSize: size.sm,
    padding: unit
  },
  xsmall: {
    fontSize: size.xs,
    padding: unit
  },
  primary: {
    borderColor: color.primary,
    color: color.white,
    backgroundColor: color.primary,
    ':hover': {
      backgroundColor: color.primaryDark
    }
  },
  secondary: {
    borderColor: color.secondary,
    color: color.secondary
  },
  disabled: {
    borderColor: color.grayDark,
    color: color.grayLight,
    cursor: 'default',
    opacity: 0.5,
    backgroundColor: color.gray,
    ':hover': {
      backgroundColor: color.gray
    }
  }
}))(Button));

/***/ }),

/***/ "./src/doit-ui/Card.jsx":
/*!******************************!*\
  !*** ./src/doit-ui/Card.jsx ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _withStyles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./withStyles */ "./src/doit-ui/withStyles.js");
/* harmony import */ var _Spacing__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Spacing */ "./src/doit-ui/Spacing.jsx");
var _jsxFileName = "/Volumes/Workstation/dev_wooseok/react/do-it-example/src/doit-ui/Card.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }






class Card extends react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"] {
  render() {
    const _this$props = this.props,
          {
      children,
      styles
    } = _this$props,
          spacingProps = _objectWithoutProperties(_this$props, ["children", "styles"]);

    return __jsx("div", _extends({}, Object(_withStyles__WEBPACK_IMPORTED_MODULE_2__["css"])(styles.wrapper), {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 7
      }
    }), __jsx(_Spacing__WEBPACK_IMPORTED_MODULE_3__["default"], _extends({}, spacingProps, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 9
      }
    }), children));
  }

}

Card.propTypes = _objectSpread({}, _Spacing__WEBPACK_IMPORTED_MODULE_3__["propTypes"], {}, _withStyles__WEBPACK_IMPORTED_MODULE_2__["withStylesPropTypes"], {
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node
});
/* harmony default export */ __webpack_exports__["default"] = (Object(_withStyles__WEBPACK_IMPORTED_MODULE_2__["withStyles"])(({
  depth,
  unit,
  color
}) => ({
  wrapper: _objectSpread({}, depth.level1, {
    borderRadius: unit,
    backgroundColor: color.white,
    display: 'flex',
    overflow: 'hidden',
    marginBottom: unit * 4
  })
}))(Card));

/***/ }),

/***/ "./src/doit-ui/Form.jsx":
/*!******************************!*\
  !*** ./src/doit-ui/Form.jsx ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Volumes/Workstation/dev_wooseok/react/do-it-example/src/doit-ui/Form.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const {
  Consumer,
  Provider
} = react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext({});

class FormProvider extends react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"] {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {});

    _defineProperty(this, "handleSubmit", e => {
      const {
        values,
        errors
      } = this.state;
      e.preventDefault();

      if (Object.values(errors).length === 0) {
        this.props.onSubmit(values);
      }
    });

    _defineProperty(this, "onChange", (name, updatedValue) => {
      this.setState(({
        values
      }) => ({
        values: _objectSpread({}, values, {
          [name]: updatedValue
        })
      }), () => this.validate(this.state.values));
    });

    _defineProperty(this, "reset", () => {
      this.setState({
        values: {}
      });
    });

    _defineProperty(this, "validate", values => {
      const {
        validate
      } = this.props;

      if (!validate) {
        return;
      }

      const errors = this.props.validate(values);
      this.setState({
        errors
      });
    });
  }

  static getDerivedStateFromProps({
    initValues
  }, prevState) {
    const values = initValues !== prevState.initValues ? initValues : prevState.values;
    return {
      initValues,
      values,
      errors: {}
    };
  }

  render() {
    const {
      values,
      errors
    } = this.state;
    return __jsx(Provider, {
      value: {
        errors,
        values,
        onChange: this.onChange,
        reset: this.reset
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 7
      }
    }, __jsx("form", {
      onSubmit: this.handleSubmit,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 9
      }
    }, this.props.children));
  }

}

_defineProperty(FormProvider, "Consumer", Consumer);

FormProvider.propTypes = {
  validate: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  onSubmit: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  initValues: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object
};
FormProvider.defaultProps = {
  initValues: {},
  validate: () => ({})
};
/* harmony default export */ __webpack_exports__["default"] = (FormProvider);

/***/ }),

/***/ "./src/doit-ui/Heading.jsx":
/*!*********************************!*\
  !*** ./src/doit-ui/Heading.jsx ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _withStyles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./withStyles */ "./src/doit-ui/withStyles.js");
var _jsxFileName = "/Volumes/Workstation/dev_wooseok/react/do-it-example/src/doit-ui/Heading.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }




const headingTags = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'];

class Heading extends react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"] {
  render() {
    const {
      children,
      bold,
      light,
      styles,
      large,
      xlarge,
      small,
      xsmall,
      primary,
      secondary,
      inverse,
      level
    } = this.props;
    const HeadingTag = headingTags[level - 1];
    return __jsx(HeadingTag, _extends({}, Object(_withStyles__WEBPACK_IMPORTED_MODULE_2__["css"])(styles.default, xsmall && styles.xsmall, small && styles.small, large && styles.large, xlarge && styles.xlarge, secondary && styles.secondary, primary && styles.primary, bold && styles.bold, light && styles.light, inverse && styles.inverse), {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 7
      }
    }), children);
  }

}

Heading.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node.isRequired,
  bold: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  light: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  xsmall: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  small: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  large: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  xlarge: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  secondary: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  primary: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  inverse: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  level: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number
};
Heading.defaultProps = {
  level: 1
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_withStyles__WEBPACK_IMPORTED_MODULE_2__["withStyles"])(({
  color,
  fontWeight,
  size,
  lineHeight,
  unit
}) => ({
  default: {
    lineHeight: lineHeight.lg,
    fontWeight: fontWeight.bold
  },
  xlarge: {
    fontSize: size.xg,
    lineHeight: lineHeight.xg
  },
  large: {
    fontSize: size.lg,
    lineHeight: lineHeight.lg
  },
  small: {
    fontSize: size.sm,
    lineHeight: lineHeight.sm
  },
  xsmall: {
    fontSize: size.xs,
    lineHeight: lineHeight.xs
  },
  primary: {
    color: color.primary
  },
  secondary: {
    color: color.secondary
  },
  light: {
    fontWeight: fontWeight.light
  },
  bold: {
    fontWeight: fontWeight.bold
  },
  inverse: {
    color: color.white
  },
  level1: {
    fontSize: size.h1,
    marginTop: unit * 2,
    marginBottom: unit * 4
  }
}))(Heading));

/***/ }),

/***/ "./src/doit-ui/InlineList.jsx":
/*!************************************!*\
  !*** ./src/doit-ui/InlineList.jsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _withStyles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./withStyles */ "./src/doit-ui/withStyles.js");
/* harmony import */ var _Theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Theme */ "./src/doit-ui/Theme.js");
var _jsxFileName = "/Volumes/Workstation/dev_wooseok/react/do-it-example/src/doit-ui/InlineList.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }






class InlineList extends react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"] {
  render() {
    const {
      align,
      children,
      styles,
      spacingBetween,
      verticalAlign
    } = this.props;
    return __jsx("div", _extends({}, Object(_withStyles__WEBPACK_IMPORTED_MODULE_2__["css"])(styles.wrapper, align === 'center' && styles.alignCenter, align === 'right' && styles.alignRight, verticalAlign === 'top' && styles.verticalAlignTop, verticalAlign === 'bottom' && styles.verticalAlignBotttom), {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 13
      }
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.Children.map(children, child => __jsx("div", _extends({}, Object(_withStyles__WEBPACK_IMPORTED_MODULE_2__["css"])({
      marginRight: spacingBetween * _Theme__WEBPACK_IMPORTED_MODULE_3__["unit"]
    }), {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 21
      }
    }), child)));
  }

}

InlineList.propTypes = _objectSpread({}, _withStyles__WEBPACK_IMPORTED_MODULE_2__["withStylesPropTypes"], {
  align: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOf(['left', 'center', 'right']),
  verticalAlign: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOf(['top', 'middle', 'bottom']),
  spacingBetween: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node
});
InlineList.defaultProps = {
  spacingBetween: 1
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_withStyles__WEBPACK_IMPORTED_MODULE_2__["withStyles"])(() => ({
  wrapper: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  alignCenter: {
    justifyContent: 'center'
  },
  alignRight: {
    justifyContent: 'flex-end'
  },
  verticalAlignTop: {
    alignItems: 'flex-start'
  },
  verticalAlignBottom: {
    alignItems: 'flex-end'
  }
}))(InlineList));

/***/ }),

/***/ "./src/doit-ui/Input.jsx":
/*!*******************************!*\
  !*** ./src/doit-ui/Input.jsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _withStyles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./withStyles */ "./src/doit-ui/withStyles.js");
var _jsxFileName = "/Volumes/Workstation/dev_wooseok/react/do-it-example/src/doit-ui/Input.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





class Input extends react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"] {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "handleChange", e => {
      const {
        name,
        onChange
      } = this.props;

      if (onChange) {
        onChange(name, this.ref.value);
      }
    });

    _defineProperty(this, "setRef", ref => {
      this.ref = ref;
    });
  }

  componentDidMount() {
    if (this.props.autoFocus) {
      this.ref.focus();
    }
  }

  componentDidUpdate() {
    if (this.props.autoFocus) {
      this.ref.focus();
    }
  }

  render() {
    const {
      errorMessage,
      label,
      name,
      value,
      type,
      styles,
      large,
      xlarge,
      small,
      xsmall
    } = this.props;
    return __jsx("fieldset", _extends({}, Object(_withStyles__WEBPACK_IMPORTED_MODULE_2__["css"])(styles.wrapper), {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 7
      }
    }), __jsx("label", _extends({
      htmlFor: `input_${name}`
    }, Object(_withStyles__WEBPACK_IMPORTED_MODULE_2__["css"])(styles.label, errorMessage && styles.errorLabel), {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 9
      }
    }), errorMessage || label), __jsx("input", _extends({}, Object(_withStyles__WEBPACK_IMPORTED_MODULE_2__["css"])(styles.input, errorMessage && styles.error, xsmall && styles.xsmall, small && styles.small, large && styles.large, xlarge && styles.xlarge), {
      id: `input_${name}`,
      ref: this.setRef,
      onChange: this.handleChange,
      value: value || '',
      type: type,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 9
      }
    })));
  }

}

Input.propTypes = _objectSpread({}, _withStyles__WEBPACK_IMPORTED_MODULE_2__["withStylesPropTypes"], {
  type: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOf(['text', 'number', 'price']),
  name: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  value: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string]),
  errorMessage: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  label: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  onChange: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  autoFocus: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool
});
Input.defaultProps = {
  onChange: () => {},
  autoFocus: false
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_withStyles__WEBPACK_IMPORTED_MODULE_2__["withStyles"])(({
  unit,
  color,
  size,
  lineHeight
}) => ({
  wrapper: {
    border: 0,
    padding: 0,
    position: 'relative'
  },
  label: {
    display: 'block',
    fontSize: size.xs,
    top: 2,
    left: unit * 2,
    cursor: 'pointer'
  },
  input: {
    marginTop: 2,
    fontSize: size.md,
    lineHeight: lineHeight.md,
    padding: unit * 1.5,
    border: 1,
    borderColor: color.primary,
    borderStyle: 'solid',
    borderRadius: 4,
    outline: 0,
    ':focus': {
      boxShadow: '0 0 0px 2px rgba(0, 0, 0, 0.3)'
    }
  },
  xlarge: {
    fontSize: size.xg
  },
  large: {
    fontSize: size.lg
  },
  small: {
    fontSize: size.sm,
    padding: unit
  },
  errorLabel: {
    color: color.error
  },
  error: {
    borderColor: color.error
  }
}))(Input));

/***/ }),

/***/ "./src/doit-ui/Modal/context.js":
/*!**************************************!*\
  !*** ./src/doit-ui/Modal/context.js ***!
  \**************************************/
/*! exports provided: Provider, Consumer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Provider", function() { return Provider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Consumer", function() { return Consumer; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const {
  Provider,
  Consumer
} = react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext({});

/***/ }),

/***/ "./src/doit-ui/Option.jsx":
/*!********************************!*\
  !*** ./src/doit-ui/Option.jsx ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Volumes/Workstation/dev_wooseok/react/do-it-example/src/doit-ui/Option.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



class Option extends react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"] {
  render() {
    const {
      value,
      label,
      disabled
    } = this.props;
    return __jsx("option", {
      value: value,
      disabled: disabled,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 13
      }
    }, label || value);
  }

}

Option.propTypes = {
  disabled: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  value: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  label: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
};
/* harmony default export */ __webpack_exports__["default"] = (Option);

/***/ }),

/***/ "./src/doit-ui/Select.jsx":
/*!********************************!*\
  !*** ./src/doit-ui/Select.jsx ***!
  \********************************/
/*! exports provided: Option, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Option__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Option */ "./src/doit-ui/Option.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Option", function() { return _Option__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _withStyles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./withStyles */ "./src/doit-ui/withStyles.js");
var _jsxFileName = "/Volumes/Workstation/dev_wooseok/react/do-it-example/src/doit-ui/Select.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







class Select extends react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"] {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      focused: false
    });

    _defineProperty(this, "handleFocus", () => {
      this.setState({
        focused: true
      });
    });

    _defineProperty(this, "handleBlur", () => {
      this.setState({
        focused: false
      });
    });

    _defineProperty(this, "handleChange", e => {
      const {
        name,
        onChange
      } = this.props;

      if (onChange) {
        onChange(name, e.target.value);
      }
    });

    _defineProperty(this, "setRef", ref => {
      this.ref = ref;
    });
  }

  componentDidMount() {
    if (this.props.autoFocus) {
      this.ref.focus();
    }
  }

  render() {
    const {
      children,
      disabled,
      errorMessage,
      label,
      value,
      name,
      styles,
      large,
      xlarge,
      small,
      xsmall
    } = this.props;
    const {
      focused
    } = this.state;
    return __jsx("fieldset", _extends({}, Object(_withStyles__WEBPACK_IMPORTED_MODULE_3__["css"])(styles.wrapper), {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 7
      }
    }), __jsx("label", _extends({
      htmlFor: `input_${name}`
    }, Object(_withStyles__WEBPACK_IMPORTED_MODULE_3__["css"])(styles.label, errorMessage && styles.errorLabel), {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 9
      }
    }), errorMessage || label), __jsx("div", _extends({}, Object(_withStyles__WEBPACK_IMPORTED_MODULE_3__["css"])(styles.placeholder, xsmall && styles.xsmallPadding, small && styles.smallPadding, large && styles.largePadding, xlarge && styles.xlargePadding, focused && styles.focus, errorMessage && styles.error), {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 9
      }
    }), __jsx("select", _extends({}, Object(_withStyles__WEBPACK_IMPORTED_MODULE_3__["css"])(styles.select, xsmall && styles.xsmall, small && styles.small, large && styles.large, xlarge && styles.xlarge), {
      disabled: disabled,
      id: `input_${name}`,
      ref: this.setRef,
      onChange: this.handleChange,
      onFocus: this.handleFocus,
      onBlur: this.handleBlur,
      value: value,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 11
      }
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.Children.map(children, child => react__WEBPACK_IMPORTED_MODULE_0___default.a.cloneElement(child, {
      disabled
    })))));
  }

}

Select.propTypes = _objectSpread({}, _withStyles__WEBPACK_IMPORTED_MODULE_3__["withStylesPropTypes"], {
  name: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  value: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string]),
  errorMessage: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  label: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  onChange: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  autoFocus: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool
});
Select.defaultProps = {
  onChange: () => {},
  autoFocus: false
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_withStyles__WEBPACK_IMPORTED_MODULE_3__["withStyles"])(({
  unit,
  color,
  size,
  lineHeight
}) => ({
  wrapper: {
    border: 0,
    padding: 0,
    position: 'relative'
  },
  label: {
    display: 'block',
    fontSize: size.xs,
    top: 2,
    left: unit * 2,
    cursor: 'pointer'
  },
  placeholder: {
    marginTop: 2,
    border: 1,
    borderColor: color.primary,
    borderStyle: 'solid',
    borderRadius: 4,
    padding: unit * 1.5
  },
  focus: {
    boxShadow: '0 0 0px 2px rgba(0, 0, 0, 0.3)'
  },
  xlargePadding: {
    padding: unit * 2
  },
  largePadding: {
    padding: unit * 2
  },
  smallPadding: {
    padding: unit - 1
  },
  xsmallPadding: {
    padding: unit - 2
  },
  select: {
    fontSize: size.md,
    lineHeight: lineHeight.md,
    backgroundColor: color.white,
    border: 0,
    outline: 0,
    width: '100%'
  },
  xlarge: {
    fontSize: size.xg
  },
  large: {
    fontSize: size.lg
  },
  small: {
    fontSize: size.sm
  },
  errorLabel: {
    color: color.error
  },
  error: {
    borderColor: color.error
  }
}))(Select));

/***/ }),

/***/ "./src/doit-ui/Spacing.jsx":
/*!*********************************!*\
  !*** ./src/doit-ui/Spacing.jsx ***!
  \*********************************/
/*! exports provided: propTypes, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "propTypes", function() { return propTypes; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Theme */ "./src/doit-ui/Theme.js");
/* harmony import */ var _04_withStyles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../04/withStyles */ "./src/04/withStyles.js");
var _jsxFileName = "/Volumes/Workstation/dev_wooseok/react/do-it-example/src/doit-ui/Spacing.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





const propTypes = {
  top: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  left: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  right: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  bottom: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  vertical: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  horizontal: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number
};

class Spacing extends react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"] {
  render() {
    const {
      children,
      top,
      left,
      right,
      bottom,
      vertical,
      horizontal
    } = this.props;
    const computedTop = top ? top : vertical;
    const computedBottom = bottom ? bottom : vertical;
    const computedLeft = left ? left : horizontal;
    const computedRight = right ? right : horizontal;

    const computedStyle = _objectSpread({
      flex: 1
    }, computedTop && {
      marginTop: computedTop * _Theme__WEBPACK_IMPORTED_MODULE_2__["unit"]
    }, {}, computedBottom && {
      marginBottom: computedBottom * _Theme__WEBPACK_IMPORTED_MODULE_2__["unit"]
    }, {}, computedLeft && {
      marginLeft: computedLeft * _Theme__WEBPACK_IMPORTED_MODULE_2__["unit"]
    }, {}, computedRight && {
      marginRight: computedRight * _Theme__WEBPACK_IMPORTED_MODULE_2__["unit"]
    });

    return __jsx("div", _extends({}, Object(_04_withStyles__WEBPACK_IMPORTED_MODULE_3__["css"])(computedStyle), {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 12
      }
    }), children);
  }

}

Spacing.propTypes = propTypes;
/* harmony default export */ __webpack_exports__["default"] = (Spacing);

/***/ }),

/***/ "./src/doit-ui/Table.jsx":
/*!*******************************!*\
  !*** ./src/doit-ui/Table.jsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _withStyles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./withStyles */ "./src/doit-ui/withStyles.js");
var _jsxFileName = "/Volumes/Workstation/dev_wooseok/react/do-it-example/src/doit-ui/Table.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }





class Table extends react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"] {
  render() {
    const {
      styles,
      children
    } = this.props;
    return __jsx("table", _extends({}, Object(_withStyles__WEBPACK_IMPORTED_MODULE_2__["css"])(styles.table), {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8,
        columnNumber: 16
      }
    }), children);
  }

}

Table.propTypes = _objectSpread({}, _withStyles__WEBPACK_IMPORTED_MODULE_2__["withStylesPropTypes"], {
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node
});
/* harmony default export */ __webpack_exports__["default"] = (Object(_withStyles__WEBPACK_IMPORTED_MODULE_2__["withStyles"])(({
  color,
  unit
}) => ({
  table: {
    borderCollapse: 'collapse',
    width: '100%'
  }
}))(Table));

/***/ }),

/***/ "./src/doit-ui/TableBody.jsx":
/*!***********************************!*\
  !*** ./src/doit-ui/TableBody.jsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Volumes/Workstation/dev_wooseok/react/do-it-example/src/doit-ui/TableBody.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



class TableBody extends react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"] {
  render() {
    const {
      children
    } = this.props;
    const {
      length
    } = react__WEBPACK_IMPORTED_MODULE_0___default.a.Children.toArray(children);
    return __jsx("tbody", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 13
      }
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.Children.map(children, (child, index) => {
      const baseline = index < length - 1 ? true : false;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.cloneElement(child, {
        baseline
      });
    }));
  }

}

TableBody.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node
};
/* harmony default export */ __webpack_exports__["default"] = (TableBody);

/***/ }),

/***/ "./src/doit-ui/TableCell.jsx":
/*!***********************************!*\
  !*** ./src/doit-ui/TableCell.jsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _withStyles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./withStyles */ "./src/doit-ui/withStyles.js");
var _jsxFileName = "/Volumes/Workstation/dev_wooseok/react/do-it-example/src/doit-ui/TableCell.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }





class TableCell extends react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"] {
  render() {
    const {
      align,
      baseline,
      styles,
      children,
      isHeader
    } = this.props;
    const Tag = isHeader ? 'th' : 'td';
    return __jsx(Tag, _extends({}, Object(_withStyles__WEBPACK_IMPORTED_MODULE_2__["css"])(styles.cell, isHeader && styles.header, !isHeader && baseline && styles.baseline, align === 'center' && styles.alignCenter, align === 'right' && styles.alignRight), {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 13
      }
    }), children);
  }

}

TableCell.propTypes = _objectSpread({}, _withStyles__WEBPACK_IMPORTED_MODULE_2__["withStylesPropTypes"], {
  align: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOf(['left', 'right', 'center']),
  baseline: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node,
  isHeader: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool
});
TableCell.defaultProps = {
  baseline: true,
  isHeader: false
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_withStyles__WEBPACK_IMPORTED_MODULE_2__["withStyles"])(({
  color,
  unit
}) => ({
  cell: {
    paddingTop: unit * 4,
    paddingBottom: unit * 4,
    paddingRight: unit * 8,
    paddingLeft: unit * 8,
    backgroundColor: color.white,
    textAlign: 'left'
  },
  header: {
    backgroundColor: color.primary,
    color: color.white
  },
  baseline: {
    borderBottom: `1px solid ${color.border}`
  },
  alignCenter: {
    textAlign: 'center'
  },
  alignRight: {
    textAlign: 'right'
  }
}))(TableCell));

/***/ }),

/***/ "./src/doit-ui/TableHead.jsx":
/*!***********************************!*\
  !*** ./src/doit-ui/TableHead.jsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Volumes/Workstation/dev_wooseok/react/do-it-example/src/doit-ui/TableHead.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



class TableHead extends react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"] {
  render() {
    const {
      children
    } = this.props;
    return __jsx("thead", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 13
      }
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.Children.map(children, child => react__WEBPACK_IMPORTED_MODULE_0___default.a.cloneElement(child, {
      isHeader: true
    })));
  }

}

TableHead.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node
};
/* harmony default export */ __webpack_exports__["default"] = (TableHead);

/***/ }),

/***/ "./src/doit-ui/TableRow.jsx":
/*!**********************************!*\
  !*** ./src/doit-ui/TableRow.jsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Volumes/Workstation/dev_wooseok/react/do-it-example/src/doit-ui/TableRow.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



class TableRow extends react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"] {
  render() {
    const {
      children,
      isHeader,
      baseline
    } = this.props;
    return __jsx("tr", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 13
      }
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.Children.map(children, child => react__WEBPACK_IMPORTED_MODULE_0___default.a.cloneElement(child, {
      baseline,
      isHeader
    })));
  }

}

TableRow.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node,
  baseline: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  isHeader: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool
};
/* harmony default export */ __webpack_exports__["default"] = (TableRow);

/***/ }),

/***/ "./src/doit-ui/Text.jsx":
/*!******************************!*\
  !*** ./src/doit-ui/Text.jsx ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _withStyles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./withStyles */ "./src/doit-ui/withStyles.js");
var _jsxFileName = "/Volumes/Workstation/dev_wooseok/react/do-it-example/src/doit-ui/Text.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }





class Text extends react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"] {
  render() {
    const {
      children,
      bold,
      light,
      styles,
      large,
      xlarge,
      small,
      xsmall,
      primary,
      secondary,
      inverse
    } = this.props;
    return __jsx("span", _extends({}, Object(_withStyles__WEBPACK_IMPORTED_MODULE_2__["css"])(styles.default, xsmall && styles.xsmall, small && styles.small, large && styles.large, xlarge && styles.xlarge, secondary && styles.secondary, primary && styles.primary, bold && styles.bold, light && styles.light, inverse && styles.inverse), {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 13
      }
    }), children);
  }

}

Text.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node.isRequired,
  bold: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  light: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  xsmall: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  small: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  large: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  xlarge: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  secondary: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  primary: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  inverse: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_withStyles__WEBPACK_IMPORTED_MODULE_2__["withStyles"])(({
  color,
  fontWeight,
  size,
  lineHeight
}) => ({
  default: {
    color: color.default,
    fontSize: size.md,
    lineHeight: lineHeight.md,
    fontWeight: fontWeight.normal
  },
  xlarge: {
    fontSize: size.xg,
    lineHeight: lineHeight.xg
  },
  large: {
    fontSize: size.lg,
    lineHeight: lineHeight.lg
  },
  small: {
    fontSize: size.sm,
    lineHeight: lineHeight.sm
  },
  xsmall: {
    fontSize: size.xs,
    lineHeight: lineHeight.xs
  },
  primary: {
    color: color.primary
  },
  secondary: {
    color: color.secondary
  },
  light: {
    fontWeight: fontWeight.light
  },
  bold: {
    fontWeight: fontWeight.bold
  },
  inverse: {
    color: color.white
  }
}))(Text));

/***/ }),

/***/ "./src/doit-ui/Theme.js":
/*!******************************!*\
  !*** ./src/doit-ui/Theme.js ***!
  \******************************/
/*! exports provided: LARGE_AND_ABOVE, unit, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LARGE_AND_ABOVE", function() { return LARGE_AND_ABOVE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unit", function() { return unit; });
const LARGE_AND_ABOVE = 'largeAndAbove';
const BREAKPOINT_NAMES = {
  LARGE: 'large',
  MEDIUM: 'medium',
  SMALL: 'small'
};
const breakpoints = {
  [BREAKPOINT_NAMES.LARGE]: 1128,
  [BREAKPOINT_NAMES.MEDIUM]: 744,
  [BREAKPOINT_NAMES.SMALL]: 327
};
const responsive = {
  [LARGE_AND_ABOVE]: `@media (min-width: ${breakpoints[BREAKPOINT_NAMES.LARGE]}px)`,
  [BREAKPOINT_NAMES.SMALL]: `@media (max-width: ${breakpoints[BREAKPOINT_NAMES.MEDIUM] - 1}px)`,
  print: '@media print'
};
const unit = 4;
/* harmony default export */ __webpack_exports__["default"] = ({
  // 색상
  color: {
    primary: '#2196F3',
    // 주 색상
    primaryDark: '#1976D2',
    secondary: '#009688',
    // 부 색상
    secondaryDark: '#00796b',
    white: '#FFFFFF',
    gray: '#9e9e9e',
    grayLight: '#eeeeee',
    grayDark: '#616161',
    border: 'rgba(0, 0, 0, .15)',
    default: '#333333',
    // 기본 문자 색상
    error: '#e51c23' // 오류 색상

  },
  // 폰트 사이즈
  size: {
    h1: 48,
    h2: 36,
    h3: 28,
    xg: 24,
    lg: 18,
    md: 14,
    sm: 12,
    xs: 10
  },
  lineHeight: {
    xg: 1.6,
    lg: 1.6,
    md: 1.5,
    sm: 1.4,
    xs: 1.4
  },
  fontWeight: {
    bold: 'bold',
    normal: 'normal',
    light: 300
  },
  depth: {
    level1: {
      boxShadow: '0 2px 2px 0 rgba(0, 0, 0, 0.14)'
    },
    level2: {
      boxShadow: '0 4px 5px 0 rgba(0, 0, 0, 0.14)'
    },
    level3: {
      boxShadow: '0 8px 17px 12px rgba(0, 0, 0, 0.14)'
    }
  },
  // 길이 단위
  unit,
  // 반응형 미디어 속성
  responsive
});

/***/ }),

/***/ "./src/doit-ui/withStyles.js":
/*!***********************************!*\
  !*** ./src/doit-ui/withStyles.js ***!
  \***********************************/
/*! exports provided: css, withStyles, withStylesPropTypes, ThemedStyleSheet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_with_styles_lib_ThemedStyleSheet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-with-styles/lib/ThemedStyleSheet */ "react-with-styles/lib/ThemedStyleSheet");
/* harmony import */ var react_with_styles_lib_ThemedStyleSheet__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_with_styles_lib_ThemedStyleSheet__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, "ThemedStyleSheet", function() { return react_with_styles_lib_ThemedStyleSheet__WEBPACK_IMPORTED_MODULE_0___default.a; });
/* harmony import */ var react_with_styles_interface_aphrodite_lib_aphroditeInterface__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-with-styles-interface-aphrodite/lib/aphroditeInterface */ "react-with-styles-interface-aphrodite/lib/aphroditeInterface");
/* harmony import */ var react_with_styles_interface_aphrodite_lib_aphroditeInterface__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_with_styles_interface_aphrodite_lib_aphroditeInterface__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_with_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-with-styles */ "react-with-styles");
/* harmony import */ var react_with_styles__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_with_styles__WEBPACK_IMPORTED_MODULE_2__);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "css", function() { return react_with_styles__WEBPACK_IMPORTED_MODULE_2__["css"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "withStyles", function() { return react_with_styles__WEBPACK_IMPORTED_MODULE_2__["withStyles"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "withStylesPropTypes", function() { return react_with_styles__WEBPACK_IMPORTED_MODULE_2__["withStylesPropTypes"]; });

/* harmony import */ var _Theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Theme */ "./src/doit-ui/Theme.js");




react_with_styles_lib_ThemedStyleSheet__WEBPACK_IMPORTED_MODULE_0___default.a.registerInterface(react_with_styles_interface_aphrodite_lib_aphroditeInterface__WEBPACK_IMPORTED_MODULE_1___default.a);
react_with_styles_lib_ThemedStyleSheet__WEBPACK_IMPORTED_MODULE_0___default.a.registerTheme(_Theme__WEBPACK_IMPORTED_MODULE_3__["default"]);


/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Volumes/Workstation/dev_wooseok/react/do-it-example/pages/index.js */"./pages/index.js");


/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),

/***/ "react-with-styles":
/*!************************************!*\
  !*** external "react-with-styles" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-with-styles");

/***/ }),

/***/ "react-with-styles-interface-aphrodite/lib/aphroditeInterface":
/*!*******************************************************************************!*\
  !*** external "react-with-styles-interface-aphrodite/lib/aphroditeInterface" ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-with-styles-interface-aphrodite/lib/aphroditeInterface");

/***/ }),

/***/ "react-with-styles/lib/ThemedStyleSheet":
/*!*********************************************************!*\
  !*** external "react-with-styles/lib/ThemedStyleSheet" ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-with-styles/lib/ThemedStyleSheet");

/***/ }),

/***/ "reselect":
/*!***************************!*\
  !*** external "reselect" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("reselect");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map