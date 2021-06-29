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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/next/app.js":
/*!**********************************!*\
  !*** ./node_modules/next/app.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/pages/_app */ "./node_modules/next/dist/pages/_app.js")


/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/utils.js":
/*!*********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/utils.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__(/*! url */ "url");
/**
 * Utils
 */


function execOnce(fn) {
  let used = false;
  let result = null;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn.apply(this, args);
    }

    return result;
  };
}

exports.execOnce = execOnce;

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

exports.getLocationOrigin = getLocationOrigin;

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

exports.getURL = getURL;

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

exports.getDisplayName = getDisplayName;

function isResSent(res) {
  return res.finished || res.headersSent;
}

exports.isResSent = isResSent;

async function loadGetInitialProps(App, ctx) {
  var _a;

  if (true) {
    if ((_a = App.prototype) === null || _a === void 0 ? void 0 : _a.getInitialProps) {
      const message = `"${getDisplayName(App)}.getInitialProps()" is defined as an instance method - visit https://err.sh/zeit/next.js/get-initial-props-as-an-instance-method for more information.`;
      throw new Error(message);
    }
  } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (true) {
    if (Object.keys(props).length === 0 && !ctx.ctx) {
      console.warn(`${getDisplayName(App)} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic static optimization. https://err.sh/zeit/next.js/empty-object-getInitialProps`);
    }
  }

  return props;
}

exports.loadGetInitialProps = loadGetInitialProps;
exports.urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];

function formatWithValidation(url, options) {
  if (true) {
    if (url !== null && typeof url === 'object') {
      Object.keys(url).forEach(key => {
        if (exports.urlObjectKeys.indexOf(key) === -1) {
          console.warn(`Unknown key passed via urlObject into url.format: ${key}`);
        }
      });
    }
  }

  return url_1.format(url, options);
}

exports.formatWithValidation = formatWithValidation;
exports.SP = typeof performance !== 'undefined';
exports.ST = exports.SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';

/***/ }),

/***/ "./node_modules/next/dist/pages/_app.js":
/*!**********************************************!*\
  !*** ./node_modules/next/dist/pages/_app.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.Container = Container;
exports.createUrl = createUrl;
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _utils = __webpack_require__(/*! ../next-server/lib/utils */ "./node_modules/next/dist/next-server/lib/utils.js");

exports.AppInitialProps = _utils.AppInitialProps;
/**
* `App` component is used for initialize of pages. It allows for overwriting and full control of the `page` initialization.
* This allows for keeping state between navigation, custom error handling, injecting additional data.
*/

async function appGetInitialProps(_ref) {
  var {
    Component,
    ctx
  } = _ref;
  var pageProps = await (0, _utils.loadGetInitialProps)(Component, ctx);
  return {
    pageProps
  };
}

class App extends _react.default.Component {
  // Kept here for backwards compatibility.
  // When someone ended App they could call `super.componentDidCatch`.
  // @deprecated This method is no longer needed. Errors are caught at the top level
  componentDidCatch(error, _errorInfo) {
    throw error;
  }

  render() {
    var {
      router,
      Component,
      pageProps,
      __N_SSG,
      __N_SSP
    } = this.props;
    return _react.default.createElement(Component, Object.assign({}, pageProps, // we don't add the legacy URL prop if it's using non-legacy
    // methods like getStaticProps and getServerSideProps
    !(__N_SSG || __N_SSP) ? {
      url: createUrl(router)
    } : {}));
  }

}

exports.default = App;
App.origGetInitialProps = appGetInitialProps;
App.getInitialProps = appGetInitialProps;
var warnContainer;
var warnUrl;

if (true) {
  warnContainer = (0, _utils.execOnce)(() => {
    console.warn("Warning: the `Container` in `_app` has been deprecated and should be removed. https://err.sh/zeit/next.js/app-container-deprecated");
  });
  warnUrl = (0, _utils.execOnce)(() => {
    console.error("Warning: the 'url' property is deprecated. https://err.sh/zeit/next.js/url-deprecated");
  });
} // @deprecated noop for now until removal


function Container(p) {
  if (true) warnContainer();
  return p.children;
}

function createUrl(router) {
  // This is to make sure we don't references the router object at call time
  var {
    pathname,
    asPath,
    query
  } = router;
  return {
    get query() {
      if (true) warnUrl();
      return query;
    },

    get pathname() {
      if (true) warnUrl();
      return pathname;
    },

    get asPath() {
      if (true) warnUrl();
      return asPath;
    },

    back: () => {
      if (true) warnUrl();
      router.back();
    },
    push: (url, as) => {
      if (true) warnUrl();
      return router.push(url, as);
    },
    pushTo: (href, as) => {
      if (true) warnUrl();
      var pushRoute = as ? href : '';
      var pushUrl = as || href;
      return router.push(pushRoute, pushUrl);
    },
    replace: (url, as) => {
      if (true) warnUrl();
      return router.replace(url, as);
    },
    replaceTo: (href, as) => {
      if (true) warnUrl();
      var replaceRoute = as ? href : '';
      var replaceUrl = as || href;
      return router.replace(replaceRoute, replaceUrl);
    }
  };
}

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/app */ "./node_modules/next/app.js");
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_app__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _src_08_store_configureStore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/08/store/configureStore */ "./src/08/store/configureStore.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _src_08_ModalProvider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../src/08/ModalProvider */ "./src/08/ModalProvider.jsx");
/* harmony import */ var _src_08_components_AppLayout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../src/08/components/AppLayout */ "./src/08/components/AppLayout.jsx");
/* harmony import */ var _src_08_containers_NotificationContainer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../src/08/containers/NotificationContainer */ "./src/08/containers/NotificationContainer.jsx");
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-router */ "react-router");
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_router__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _src_08_containers_RouterStateContainer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../src/08/containers/RouterStateContainer */ "./src/08/containers/RouterStateContainer.jsx");
var _jsxFileName = "/Volumes/Workstation/dev_wooseok/react/do-it-example/pages/_app.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }











const isServer = true;

class MyApp extends next_app__WEBPACK_IMPORTED_MODULE_1___default.a {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "store", Object(_src_08_store_configureStore__WEBPACK_IMPORTED_MODULE_2__["default"])());
  }

  render() {
    const {
      Component,
      router,
      pageProps
    } = this.props;
    const Router = isServer ? react_router__WEBPACK_IMPORTED_MODULE_7__["StaticRouter"] : react_router_dom__WEBPACK_IMPORTED_MODULE_8__["BrowserRouter"];
    const routerProps = isServer ? {
      location: router.asPath
    } : {};
    return __jsx(next_app__WEBPACK_IMPORTED_MODULE_1__["Container"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 7
      }
    }, __jsx(react_redux__WEBPACK_IMPORTED_MODULE_3__["Provider"], {
      store: this.store,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 9
      }
    }, __jsx(Router, _extends({}, routerProps, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 11
      }
    }), __jsx(_src_08_containers_RouterStateContainer__WEBPACK_IMPORTED_MODULE_9__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 13
      }
    }), __jsx(_src_08_ModalProvider__WEBPACK_IMPORTED_MODULE_4__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 13
      }
    }, __jsx(_src_08_components_AppLayout__WEBPACK_IMPORTED_MODULE_5__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 15
      }
    }, __jsx(Component, _extends({}, pageProps, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 17
      }
    })), __jsx(_src_08_containers_NotificationContainer__WEBPACK_IMPORTED_MODULE_6__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 17
      }
    }))), __jsx(_src_08_containers_NotificationContainer__WEBPACK_IMPORTED_MODULE_6__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 13
      }
    }))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (MyApp);

/***/ }),

/***/ "./src/02/debounce.js":
/*!****************************!*\
  !*** ./src/02/debounce.js ***!
  \****************************/
/*! exports provided: debounce */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "debounce", function() { return debounce; });
function debounce(func, delay) {
  let inDebounce;
  return function (...args) {
    if (inDebounce) {
      clearTimeout(inDebounce);
    }

    inDebounce = setTimeout(() => func(...args), delay);
  };
}

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

/***/ "./src/08/ModalProvider.jsx":
/*!**********************************!*\
  !*** ./src/08/ModalProvider.jsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _doit_ui_Modal_create__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../doit-ui/Modal/create */ "./src/doit-ui/Modal/create.js");
/* harmony import */ var _constants_modals__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants/modals */ "./src/08/constants/modals.js");
/* harmony import */ var _containers_main_TradeCoinPageContainer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./containers/main/TradeCoinPageContainer */ "./src/08/containers/main/TradeCoinPageContainer.js");
/* harmony import */ var _containers_main_RegisterPageContainer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./containers/main/RegisterPageContainer */ "./src/08/containers/main/RegisterPageContainer.jsx");




/* harmony default export */ __webpack_exports__["default"] = (Object(_doit_ui_Modal_create__WEBPACK_IMPORTED_MODULE_0__["default"])({
  [_constants_modals__WEBPACK_IMPORTED_MODULE_1__["TRADE_COIN_MODAL"]]: _containers_main_TradeCoinPageContainer__WEBPACK_IMPORTED_MODULE_2__["default"],
  [_constants_modals__WEBPACK_IMPORTED_MODULE_1__["REGISTER_USER_MODAL"]]: _containers_main_RegisterPageContainer__WEBPACK_IMPORTED_MODULE_3__["default"]
}));

/***/ }),

/***/ "./src/08/actions/notificationActions.js":
/*!***********************************************!*\
  !*** ./src/08/actions/notificationActions.js ***!
  \***********************************************/
/*! exports provided: SHOW_NOTIFICATION, HIDE_NOTIFICATION, showMessage, hideMessage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SHOW_NOTIFICATION", function() { return SHOW_NOTIFICATION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HIDE_NOTIFICATION", function() { return HIDE_NOTIFICATION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showMessage", function() { return showMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hideMessage", function() { return hideMessage; });
const SHOW_NOTIFICATION = 'notification/SHOW_NOTIFICATION';
const HIDE_NOTIFICATION = 'notification/HIDE_NOTIFICATION';
function showMessage(message, warning = false) {
  return {
    type: SHOW_NOTIFICATION,
    payload: {
      message,
      warning
    }
  };
}
function hideMessage() {
  return {
    type: HIDE_NOTIFICATION
  };
}

/***/ }),

/***/ "./src/08/actions/routerActions.js":
/*!*****************************************!*\
  !*** ./src/08/actions/routerActions.js ***!
  \*****************************************/
/*! exports provided: SET_LOCATION, setLocation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_LOCATION", function() { return SET_LOCATION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setLocation", function() { return setLocation; });
const SET_LOCATION = 'router/SET_LOCATION';
function setLocation(location) {
  return {
    type: SET_LOCATION,
    payload: {
      location
    }
  };
}

/***/ }),

/***/ "./src/08/actions/searchFilterActions.js":
/*!***********************************************!*\
  !*** ./src/08/actions/searchFilterActions.js ***!
  \***********************************************/
/*! exports provided: SET_FILTER, setFilter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_FILTER", function() { return SET_FILTER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setFilter", function() { return setFilter; });
const SET_FILTER = 'searchFilter/SET_FILTER';
function setFilter(params) {
  return {
    type: SET_FILTER,
    payload: {
      params
    }
  };
}

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

/***/ "./src/08/actions/userActions.js":
/*!***************************************!*\
  !*** ./src/08/actions/userActions.js ***!
  \***************************************/
/*! exports provided: createUser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createUser", function() { return createUser; });
/* harmony import */ var _11_api_redux_pack_createActions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../11/api-redux-pack/createActions */ "./src/11/api-redux-pack/createActions.js");

const {
  create
} = Object(_11_api_redux_pack_createActions__WEBPACK_IMPORTED_MODULE_0__["default"])('users');
function createUser(data, onComplete) {
  return create(data, {}, {
    notification: {
      success: '회원 가입이 성공적으로 완료되었습니다.'
    },
    onSuccess: onComplete
  });
}

/***/ }),

/***/ "./src/08/components/AppLayout.jsx":
/*!*****************************************!*\
  !*** ./src/08/components/AppLayout.jsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _doit_ui_withStyles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../doit-ui/withStyles */ "./src/doit-ui/withStyles.js");
/* harmony import */ var _AppNav__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./AppNav */ "./src/08/components/AppNav.jsx");
var _jsxFileName = "/Volumes/Workstation/dev_wooseok/react/do-it-example/src/08/components/AppLayout.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }






class AppLayout extends react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"] {
  render() {
    const {
      children,
      styles
    } = this.props;
    return __jsx("div", _extends({}, Object(_doit_ui_withStyles__WEBPACK_IMPORTED_MODULE_2__["css"])(styles.wrapper), {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 7
      }
    }), __jsx(_AppNav__WEBPACK_IMPORTED_MODULE_3__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 9
      }
    }), __jsx("div", _extends({}, Object(_doit_ui_withStyles__WEBPACK_IMPORTED_MODULE_2__["css"])(styles.body), {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 9
      }
    }), children));
  }

}

AppLayout.propTypes = _objectSpread({}, _doit_ui_withStyles__WEBPACK_IMPORTED_MODULE_2__["withStylesPropTypes"], {
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node
});
/* harmony default export */ __webpack_exports__["default"] = (Object(_doit_ui_withStyles__WEBPACK_IMPORTED_MODULE_2__["withStyles"])(({
  unit
}) => ({
  wrapper: {
    marginTop: _AppNav__WEBPACK_IMPORTED_MODULE_3__["HEIGHT"],
    maxWidth: '1080px',
    margin: '0 auto'
  },
  body: {
    padding: unit * 4,
    marginTop: _AppNav__WEBPACK_IMPORTED_MODULE_3__["HEIGHT"]
  }
}))(AppLayout));

/***/ }),

/***/ "./src/08/components/AppNav.jsx":
/*!**************************************!*\
  !*** ./src/08/components/AppNav.jsx ***!
  \**************************************/
/*! exports provided: HEIGHT, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HEIGHT", function() { return HEIGHT; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _doit_ui_withStyles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../doit-ui/withStyles */ "./src/doit-ui/withStyles.js");
/* harmony import */ var _doit_ui_Heading__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../doit-ui/Heading */ "./src/doit-ui/Heading.jsx");
/* harmony import */ var _doit_ui_Modal_context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../doit-ui/Modal/context */ "./src/doit-ui/Modal/context.js");
/* harmony import */ var _doit_ui_Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../doit-ui/Button */ "./src/doit-ui/Button.jsx");
/* harmony import */ var _constants_modals__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../constants/modals */ "./src/08/constants/modals.js");
var _jsxFileName = "/Volumes/Workstation/dev_wooseok/react/do-it-example/src/08/components/AppNav.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }







const HEIGHT = 64;

class AppNav extends react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"] {
  render() {
    const {
      styles
    } = this.props;
    return __jsx("div", _extends({}, Object(_doit_ui_withStyles__WEBPACK_IMPORTED_MODULE_1__["css"])(styles.wrapper), {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 7
      }
    }), __jsx("div", _extends({}, Object(_doit_ui_withStyles__WEBPACK_IMPORTED_MODULE_1__["css"])(styles.container), {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 9
      }
    }), __jsx("div", _extends({}, Object(_doit_ui_withStyles__WEBPACK_IMPORTED_MODULE_1__["css"])(styles.title), {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 11
      }
    }), __jsx("img", _extends({}, Object(_doit_ui_withStyles__WEBPACK_IMPORTED_MODULE_1__["css"])(styles.img), {
      src: "logo.jpg",
      alt: "logo",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 13
      }
    })), __jsx(_doit_ui_Heading__WEBPACK_IMPORTED_MODULE_2__["default"], {
      level: 3,
      inverse: true,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 13
      }
    }, "\uB450\uC787 \uCF54\uC778 \uAC70\uB798\uC18C")), __jsx(_doit_ui_Modal_context__WEBPACK_IMPORTED_MODULE_3__["Consumer"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 11
      }
    }, ({
      openModal
    }) => __jsx(_doit_ui_Button__WEBPACK_IMPORTED_MODULE_4__["default"], {
      inverse: true,
      bold: true,
      large: true,
      onPress: () => openModal(_constants_modals__WEBPACK_IMPORTED_MODULE_5__["REGISTER_USER_MODAL"], {
        totalAmount: 0
      }),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 15
      }
    }, "\uD68C\uC6D0 \uAC00\uC785"))));
  }

}

AppNav.propTypes = _objectSpread({}, _doit_ui_withStyles__WEBPACK_IMPORTED_MODULE_1__["withStylesPropTypes"]);
/* harmony default export */ __webpack_exports__["default"] = (Object(_doit_ui_withStyles__WEBPACK_IMPORTED_MODULE_1__["withStyles"])(({
  color,
  depth,
  unit
}) => {
  return {
    wrapper: _objectSpread({}, depth.level1, {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: HEIGHT - 4,
      backgroundColor: color.primary,
      zIndex: 10
    }),
    container: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingRight: unit * 2,
      paddingLeft: unit * 2
    },
    title: {
      display: 'flex',
      alignItems: 'center'
    },
    img: {
      width: '30px',
      height: '30px',
      marginRight: '10px'
    }
  };
})(AppNav));

/***/ }),

/***/ "./src/08/components/Notification.jsx":
/*!********************************************!*\
  !*** ./src/08/components/Notification.jsx ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _doit_ui_Toast__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../doit-ui/Toast */ "./src/doit-ui/Toast.jsx");
var _jsxFileName = "/Volumes/Workstation/dev_wooseok/react/do-it-example/src/08/components/Notification.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




class Notification extends react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"] {
  render() {
    const {
      message,
      warning,
      showMessage
    } = this.props;
    return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, showMessage && __jsx(_doit_ui_Toast__WEBPACK_IMPORTED_MODULE_2__["default"], {
      message: message,
      warning: warning,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8,
        columnNumber: 30
      }
    }));
  }

}

Notification.propTypes = {
  showMessage: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  warning: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  message: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
};
/* harmony default export */ __webpack_exports__["default"] = (Notification);

/***/ }),

/***/ "./src/08/components/main/TradeCoinPage01.jsx":
/*!****************************************************!*\
  !*** ./src/08/components/main/TradeCoinPage01.jsx ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _doit_ui_Modal_context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../doit-ui/Modal/context */ "./src/doit-ui/Modal/context.js");
/* harmony import */ var _doit_ui_Form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../doit-ui/Form */ "./src/doit-ui/Form.jsx");
/* harmony import */ var _doit_ui_Spacing__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../doit-ui/Spacing */ "./src/doit-ui/Spacing.jsx");
/* harmony import */ var _doit_ui_Text__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../doit-ui/Text */ "./src/doit-ui/Text.jsx");
/* harmony import */ var _doit_ui_Input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../doit-ui/Input */ "./src/doit-ui/Input.jsx");
/* harmony import */ var _doit_ui_InlineList__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../doit-ui/InlineList */ "./src/doit-ui/InlineList.jsx");
/* harmony import */ var _doit_ui_Button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../doit-ui/Button */ "./src/doit-ui/Button.jsx");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! moment */ "moment");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_9__);
var _jsxFileName = "/Volumes/Workstation/dev_wooseok/react/do-it-example/src/08/components/main/TradeCoinPage01.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }












class TradeCoinPage extends react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"] {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "handleSubmit", (values, closeModal) => {
      const {
        name,
        code,
        createTransaction,
        requestTransactionList
      } = this.props;
      const {
        amount,
        currentPrice
      } = values;
      const formValues = {
        code,
        name,
        totalPrice: parseInt(currentPrice) * amount,
        currentPrice: parseInt(currentPrice),
        dateTime: moment__WEBPACK_IMPORTED_MODULE_9___default()().format('YYYY/MM/DD HH:mm:ss')
      };
      createTransaction(formValues, closeModal, requestTransactionList);
    });
  }

  render() {
    const {
      name,
      price,
      type,
      loading
    } = this.props;
    const typeName = type === 'sell' ? '판매' : '구매';
    return __jsx(_doit_ui_Modal_context__WEBPACK_IMPORTED_MODULE_2__["Consumer"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 7
      }
    }, ({
      closeModal
    }) => __jsx(_doit_ui_Form__WEBPACK_IMPORTED_MODULE_3__["default"], {
      onSubmit: values => this.handleSubmit(values, closeModal),
      initValues: {
        currentPrice: price
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 11
      }
    }, __jsx(_doit_ui_Form__WEBPACK_IMPORTED_MODULE_3__["default"].Consumer, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 13
      }
    }, ({
      onChange,
      values
    }) => __jsx(_doit_ui_Spacing__WEBPACK_IMPORTED_MODULE_4__["default"], {
      horizontal: 4,
      vertical: 8,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 17
      }
    }, __jsx(_doit_ui_Text__WEBPACK_IMPORTED_MODULE_5__["default"], {
      xlarge: true,
      bold: true,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 19
      }
    }, name, " ", typeName), __jsx(_doit_ui_Spacing__WEBPACK_IMPORTED_MODULE_4__["default"], {
      bottom: 2,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 19
      }
    }, __jsx(_doit_ui_Input__WEBPACK_IMPORTED_MODULE_6__["default"], {
      name: "currentPrice",
      label: "\uAE08\uC561",
      value: values['currentPrice'],
      onChange: onChange,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 21
      }
    })), __jsx(_doit_ui_Spacing__WEBPACK_IMPORTED_MODULE_4__["default"], {
      bottom: 2,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 19
      }
    }, __jsx(_doit_ui_Input__WEBPACK_IMPORTED_MODULE_6__["default"], {
      name: "amount",
      label: "\uC218\uB7C9",
      value: values['amount'],
      onChange: onChange,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 21
      }
    })), __jsx(_doit_ui_InlineList__WEBPACK_IMPORTED_MODULE_7__["default"], {
      spacingBetween: 1,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 19
      }
    }, __jsx(_doit_ui_Button__WEBPACK_IMPORTED_MODULE_8__["default"], {
      primary: true,
      disabled: loading,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 21
      }
    }, loading ? '거래 처리중' : typeName), __jsx(_doit_ui_Button__WEBPACK_IMPORTED_MODULE_8__["default"], {
      onPress: closeModal,
      disabled: loading,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 21
      }
    }, "\uCDE8\uC18C"))))));
  }

}

TradeCoinPage.propTypes = {
  createTransaction: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  loading: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool
};
/* harmony default export */ __webpack_exports__["default"] = (TradeCoinPage);

/***/ }),

/***/ "./src/08/components/signup/RegisterPage.jsx":
/*!***************************************************!*\
  !*** ./src/08/components/signup/RegisterPage.jsx ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _doit_ui_Modal_context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../doit-ui/Modal/context */ "./src/doit-ui/Modal/context.js");
/* harmony import */ var _doit_ui_Form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../doit-ui/Form */ "./src/doit-ui/Form.jsx");
/* harmony import */ var _doit_ui_Spacing__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../doit-ui/Spacing */ "./src/doit-ui/Spacing.jsx");
/* harmony import */ var _doit_ui_Text__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../doit-ui/Text */ "./src/doit-ui/Text.jsx");
/* harmony import */ var _doit_ui_Input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../doit-ui/Input */ "./src/doit-ui/Input.jsx");
/* harmony import */ var _doit_ui_InlineList__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../doit-ui/InlineList */ "./src/doit-ui/InlineList.jsx");
/* harmony import */ var _doit_ui_Button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../doit-ui/Button */ "./src/doit-ui/Button.jsx");
var _jsxFileName = "/Volumes/Workstation/dev_wooseok/react/do-it-example/src/08/components/signup/RegisterPage.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }











class RegisterPage extends react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"] {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "handleSubmit", (values, closeModal) => {
      const {
        createUser
      } = this.props;
      createUser(values, closeModal);
    });
  }

  render() {
    const {
      loading
    } = this.props;
    return __jsx(_doit_ui_Modal_context__WEBPACK_IMPORTED_MODULE_2__["Consumer"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 7
      }
    }, ({
      closeModal
    }) => __jsx(_doit_ui_Form__WEBPACK_IMPORTED_MODULE_3__["default"], {
      onSubmit: values => this.handleSubmit(values, closeModal),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 11
      }
    }, __jsx(_doit_ui_Form__WEBPACK_IMPORTED_MODULE_3__["default"].Consumer, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 13
      }
    }, ({
      onChange,
      values
    }) => __jsx(_doit_ui_Spacing__WEBPACK_IMPORTED_MODULE_4__["default"], {
      horizontal: 4,
      vertical: 8,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 17
      }
    }, __jsx(_doit_ui_Text__WEBPACK_IMPORTED_MODULE_5__["default"], {
      xlarge: true,
      bold: true,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 19
      }
    }, "\uD68C\uC6D0 \uB4F1\uB85D"), __jsx(_doit_ui_Spacing__WEBPACK_IMPORTED_MODULE_4__["default"], {
      bottom: 2,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 19
      }
    }, __jsx(_doit_ui_Input__WEBPACK_IMPORTED_MODULE_6__["default"], {
      name: "totalAmount",
      type: "number",
      label: "\uC790\uC0B0 \uCD1D\uC561",
      onChange: onChange,
      value: values['totalAmount'],
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 21
      }
    })), __jsx(_doit_ui_InlineList__WEBPACK_IMPORTED_MODULE_7__["default"], {
      spacingBetween: 1,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 19
      }
    }, __jsx(_doit_ui_Button__WEBPACK_IMPORTED_MODULE_8__["default"], {
      type: "submit",
      primary: true,
      disabled: loading,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 21
      }
    }, "\uD68C\uC6D0 \uB4F1\uB85D"), __jsx(_doit_ui_Button__WEBPACK_IMPORTED_MODULE_8__["default"], {
      onPress: closeModal,
      disabled: loading,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 21
      }
    }, "\uCDE8\uC18C"))))));
  }

}

RegisterPage.propTypes = {
  loading: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  createUser: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func
};
/* harmony default export */ __webpack_exports__["default"] = (RegisterPage);

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

/***/ "./src/08/containers/NotificationContainer.jsx":
/*!*****************************************************!*\
  !*** ./src/08/containers/NotificationContainer.jsx ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Notification__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Notification */ "./src/08/components/Notification.jsx");



const mapStateToProps = state => {
  const {
    showMessage,
    message,
    warning
  } = state.notification;
  return {
    showMessage,
    message,
    warning
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_0__["connect"])(mapStateToProps)(_components_Notification__WEBPACK_IMPORTED_MODULE_1__["default"]));

/***/ }),

/***/ "./src/08/containers/RouterStateContainer.jsx":
/*!****************************************************!*\
  !*** ./src/08/containers/RouterStateContainer.jsx ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _actions_routerActions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../actions/routerActions */ "./src/08/actions/routerActions.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var recompose_compose__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! recompose/compose */ "recompose/compose");
/* harmony import */ var recompose_compose__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(recompose_compose__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_5__);







class RouterState extends react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"] {
  componentDidMount() {
    const {
      setLocation,
      location
    } = this.props;
    setLocation(location);
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    const {
      setLocation,
      location
    } = this.props;
    setLocation(location);
  }

  render() {
    return null;
  }

}

RouterState.propTypes = {
  setLocation: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  location: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object
};
/* harmony default export */ __webpack_exports__["default"] = (recompose_compose__WEBPACK_IMPORTED_MODULE_4___default()(Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["connect"])(null, {
  setLocation: _actions_routerActions__WEBPACK_IMPORTED_MODULE_2__["setLocation"]
}), react_router_dom__WEBPACK_IMPORTED_MODULE_5__["withRouter"])(RouterState));

/***/ }),

/***/ "./src/08/containers/main/RegisterPageContainer.jsx":
/*!**********************************************************!*\
  !*** ./src/08/containers/main/RegisterPageContainer.jsx ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _selectors_userSelectors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../selectors/userSelectors */ "./src/08/selectors/userSelectors.js");
/* harmony import */ var _actions_userActions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../actions/userActions */ "./src/08/actions/userActions.js");
/* harmony import */ var _components_signup_RegisterPage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/signup/RegisterPage */ "./src/08/components/signup/RegisterPage.jsx");




/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_0__["connect"])(state => ({
  loading: Object(_selectors_userSelectors__WEBPACK_IMPORTED_MODULE_1__["userCreateLoadingStateSelector"])(state)
}), () => ({
  createUser: _actions_userActions__WEBPACK_IMPORTED_MODULE_2__["createUser"]
}))(_components_signup_RegisterPage__WEBPACK_IMPORTED_MODULE_3__["default"]));

/***/ }),

/***/ "./src/08/containers/main/TradeCoinPageContainer.js":
/*!**********************************************************!*\
  !*** ./src/08/containers/main/TradeCoinPageContainer.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _actions_transactionPackActions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../actions/transactionPackActions */ "./src/08/actions/transactionPackActions.js");
/* harmony import */ var _components_main_TradeCoinPage01__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/main/TradeCoinPage01 */ "./src/08/components/main/TradeCoinPage01.jsx");




const mapStateToProps = state => {
  const {
    loadingState
  } = state.transactions;
  const loading = loadingState[_actions_transactionPackActions__WEBPACK_IMPORTED_MODULE_1__["CREATE_TRANSACTION"]];
  return {
    loading
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_0__["connect"])(mapStateToProps, {
  createTransaction: _actions_transactionPackActions__WEBPACK_IMPORTED_MODULE_1__["createTransaction"],
  requestTransactionList: _actions_transactionPackActions__WEBPACK_IMPORTED_MODULE_1__["requestTransactionList"]
})(_components_main_TradeCoinPage01__WEBPACK_IMPORTED_MODULE_2__["default"]));

/***/ }),

/***/ "./src/08/middlewares/notificationEffects.js":
/*!***************************************************!*\
  !*** ./src/08/middlewares/notificationEffects.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _actions_notificationActions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/notificationActions */ "./src/08/actions/notificationActions.js");
/* harmony import */ var _02_debounce__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../02/debounce */ "./src/02/debounce.js");
/* harmony import */ var redux_pack__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-pack */ "redux-pack");
/* harmony import */ var redux_pack__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux_pack__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _actions_transactionPackActions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../actions/transactionPackActions */ "./src/08/actions/transactionPackActions.js");




const debounceRunner = Object(_02_debounce__WEBPACK_IMPORTED_MODULE_1__["debounce"])(action => action(), 2000);
/* harmony default export */ __webpack_exports__["default"] = (store => nextRunner => action => {
  const {
    type,
    meta
  } = action;

  if (meta && meta.notification) {
    const {
      success,
      error
    } = meta.notification;

    if (success && meta[redux_pack__WEBPACK_IMPORTED_MODULE_2__["KEY"].LIFECYCLE] === redux_pack__WEBPACK_IMPORTED_MODULE_2__["LIFECYCLE"].SUCCESS) {
      store.dispatch(Object(_actions_notificationActions__WEBPACK_IMPORTED_MODULE_0__["showMessage"])(success));
    } else if (error && meta[redux_pack__WEBPACK_IMPORTED_MODULE_2__["KEY"].LIFECYCLE] === redux_pack__WEBPACK_IMPORTED_MODULE_2__["LIFECYCLE"].FAILURE) {
      store.dispatch(Object(_actions_notificationActions__WEBPACK_IMPORTED_MODULE_0__["showMessage"])(error, true));
    } else if (type === _actions_transactionPackActions__WEBPACK_IMPORTED_MODULE_3__["FETCH_TRANSACTION_LIST"] && meta[redux_pack__WEBPACK_IMPORTED_MODULE_2__["KEY"].LIFECYCLE] === redux_pack__WEBPACK_IMPORTED_MODULE_2__["LIFECYCLE"].SUCCESS) {
      const message = '거래 목록을 최신 정보로 업데이트 했습니다.';
      store.dispatch(Object(_actions_notificationActions__WEBPACK_IMPORTED_MODULE_0__["showMessage"])(message));
    }
  } else if (type === _actions_notificationActions__WEBPACK_IMPORTED_MODULE_0__["SHOW_NOTIFICATION"]) {
    const hide = () => store.dispatch(Object(_actions_notificationActions__WEBPACK_IMPORTED_MODULE_0__["hideMessage"])());

    debounceRunner(hide);
  }

  return nextRunner(action);
});

/***/ }),

/***/ "./src/08/middlewares/routerEffects.js":
/*!*********************************************!*\
  !*** ./src/08/middlewares/routerEffects.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _actions_routerActions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/routerActions */ "./src/08/actions/routerActions.js");
/* harmony import */ var _actions_searchFilterActions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actions/searchFilterActions */ "./src/08/actions/searchFilterActions.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




function parse(qs) {
  const quertString = qs.substr(1);
  const chunks = quertString.split('&');
  return chunks.map(chunk => chunk.split('=')).reduce((result, [key, value]) => _objectSpread({}, result, {
    [key]: value
  }), {});
}

/* harmony default export */ __webpack_exports__["default"] = (store => nextRunner => action => {
  const {
    type,
    payload
  } = action;
  const result = nextRunner(action);

  if (type === _actions_routerActions__WEBPACK_IMPORTED_MODULE_0__["SET_LOCATION"]) {
    const {
      pathname,
      search
    } = payload.location;

    if (pathname === '/') {
      store.dispatch(Object(_actions_searchFilterActions__WEBPACK_IMPORTED_MODULE_1__["setFilter"])(parse(search)));
    }
  }

  return result;
});

/***/ }),

/***/ "./src/08/middlewares/searchFilterEffects.js":
/*!***************************************************!*\
  !*** ./src/08/middlewares/searchFilterEffects.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _actions_searchFilterActions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/searchFilterActions */ "./src/08/actions/searchFilterActions.js");
/* harmony import */ var _actions_transactionPackActions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actions/transactionPackActions */ "./src/08/actions/transactionPackActions.js");


/* harmony default export */ __webpack_exports__["default"] = (store => nextRunner => action => {
  const {
    type,
    payload
  } = action;
  const result = nextRunner(action);

  if (type === _actions_searchFilterActions__WEBPACK_IMPORTED_MODULE_0__["SET_FILTER"]) {
    const {
      params
    } = payload || {};
    store.dispatch(Object(_actions_transactionPackActions__WEBPACK_IMPORTED_MODULE_1__["resetTransactionList"])());
    store.dispatch(Object(_actions_transactionPackActions__WEBPACK_IMPORTED_MODULE_1__["requestTransactionList"])(params));
  }

  return result;
});

/***/ }),

/***/ "./src/08/reducers/index.js":
/*!**********************************!*\
  !*** ./src/08/reducers/index.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _notificationReducer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./notificationReducer */ "./src/08/reducers/notificationReducer.js");
/* harmony import */ var _searchFilterReducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./searchFilterReducer */ "./src/08/reducers/searchFilterReducer.js");
/* harmony import */ var _11_api_redux_pack_createReducers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../11/api-redux-pack/createReducers */ "./src/11/api-redux-pack/createReducers.js");
/* harmony import */ var _routerReducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./routerReducer */ "./src/08/reducers/routerReducer.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





const apiReducers = Object(_11_api_redux_pack_createReducers__WEBPACK_IMPORTED_MODULE_2__["default"])('transactions', 'users');
/* harmony default export */ __webpack_exports__["default"] = (_objectSpread({}, apiReducers, {
  notification: _notificationReducer__WEBPACK_IMPORTED_MODULE_0__["default"],
  searchFilter: _searchFilterReducer__WEBPACK_IMPORTED_MODULE_1__["default"],
  routerReducer: _routerReducer__WEBPACK_IMPORTED_MODULE_3__["default"]
}));

/***/ }),

/***/ "./src/08/reducers/notificationReducer.js":
/*!************************************************!*\
  !*** ./src/08/reducers/notificationReducer.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _actions_notificationActions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/notificationActions */ "./src/08/actions/notificationActions.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const initState = {
  message: '',
  warning: false,
  showMessage: false
};
/* harmony default export */ __webpack_exports__["default"] = ((state = initState, action) => {
  const {
    type,
    payload
  } = action;

  switch (type) {
    case _actions_notificationActions__WEBPACK_IMPORTED_MODULE_0__["SHOW_NOTIFICATION"]:
      const {
        message,
        warning
      } = payload;
      return _objectSpread({}, state, {
        showMessage: true,
        message,
        warning
      });

    case _actions_notificationActions__WEBPACK_IMPORTED_MODULE_0__["HIDE_NOTIFICATION"]:
      return _objectSpread({}, state, {
        message: '',
        showMessage: false
      });

    default:
      return state;
  }
});

/***/ }),

/***/ "./src/08/reducers/routerReducer.js":
/*!******************************************!*\
  !*** ./src/08/reducers/routerReducer.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _actions_routerActions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/routerActions */ "./src/08/actions/routerActions.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const initState = {
  location: {}
};
/* harmony default export */ __webpack_exports__["default"] = ((state = initState, action) => {
  const {
    type,
    payload
  } = action;

  switch (type) {
    case _actions_routerActions__WEBPACK_IMPORTED_MODULE_0__["SET_LOCATION"]:
      const {
        location
      } = payload;
      return _objectSpread({}, state, {
        location
      });

    default:
      return state;
  }
});

/***/ }),

/***/ "./src/08/reducers/searchFilterReducer.js":
/*!************************************************!*\
  !*** ./src/08/reducers/searchFilterReducer.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _actions_searchFilterActions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/searchFilterActions */ "./src/08/actions/searchFilterActions.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const initState = {
  params: {}
};
/* harmony default export */ __webpack_exports__["default"] = ((state = initState, action) => {
  const {
    type,
    payload
  } = action;

  switch (type) {
    case _actions_searchFilterActions__WEBPACK_IMPORTED_MODULE_0__["SET_FILTER"]:
      const {
        params
      } = payload;
      return _objectSpread({}, state, {
        params
      });

    default:
      return state;
  }
});

/***/ }),

/***/ "./src/08/selectors/userSelectors.js":
/*!*******************************************!*\
  !*** ./src/08/selectors/userSelectors.js ***!
  \*******************************************/
/*! exports provided: userCreateLoadingStateSelector */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "userCreateLoadingStateSelector", function() { return userCreateLoadingStateSelector; });
/* harmony import */ var _11_api_redux_pack_createSelectors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../11/api-redux-pack/createSelectors */ "./src/11/api-redux-pack/createSelectors.js");

const {
  createLoadingStateSelector: userCreateLoadingStateSelector
} = Object(_11_api_redux_pack_createSelectors__WEBPACK_IMPORTED_MODULE_0__["default"])('users');

/***/ }),

/***/ "./src/08/store/configureStore.js":
/*!****************************************!*\
  !*** ./src/08/store/configureStore.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-devtools-extension */ "redux-devtools-extension");
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../reducers */ "./src/08/reducers/index.js");
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux-thunk */ "redux-thunk");
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(redux_thunk__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _middlewares_notificationEffects__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../middlewares/notificationEffects */ "./src/08/middlewares/notificationEffects.js");
/* harmony import */ var redux_pack__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! redux-pack */ "redux-pack");
/* harmony import */ var redux_pack__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(redux_pack__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _middlewares_searchFilterEffects__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../middlewares/searchFilterEffects */ "./src/08/middlewares/searchFilterEffects.js");
/* harmony import */ var _middlewares_routerEffects__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../middlewares/routerEffects */ "./src/08/middlewares/routerEffects.js");








/* harmony default export */ __webpack_exports__["default"] = (initStates => Object(redux__WEBPACK_IMPORTED_MODULE_0__["createStore"])(Object(redux__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])(_reducers__WEBPACK_IMPORTED_MODULE_2__["default"]), initStates, Object(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_1__["composeWithDevTools"])(Object(redux__WEBPACK_IMPORTED_MODULE_0__["applyMiddleware"])(redux_thunk__WEBPACK_IMPORTED_MODULE_3___default.a, redux_pack__WEBPACK_IMPORTED_MODULE_5__["middleware"], _middlewares_searchFilterEffects__WEBPACK_IMPORTED_MODULE_6__["default"], _middlewares_notificationEffects__WEBPACK_IMPORTED_MODULE_4__["default"], _middlewares_routerEffects__WEBPACK_IMPORTED_MODULE_7__["default"]))));

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

/***/ "./src/11/api-redux-pack/createReducers.js":
/*!*************************************************!*\
  !*** ./src/11/api-redux-pack/createReducers.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _actionTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./actionTypes */ "./src/11/api-redux-pack/actionTypes.js");
/* harmony import */ var redux_pack__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-pack */ "redux-pack");
/* harmony import */ var redux_pack__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_pack__WEBPACK_IMPORTED_MODULE_1__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



/* harmony default export */ __webpack_exports__["default"] = ((...reducerNames) => {
  return reducerNames.reduce((apiReducers, name) => {
    const initState = {
      ids: [],
      entities: {},
      loadingState: {
        [`${_actionTypes__WEBPACK_IMPORTED_MODULE_0__["CREATE"]}/${name}`]: false,
        [`${_actionTypes__WEBPACK_IMPORTED_MODULE_0__["UPDATE"]}/${name}`]: false,
        [`${_actionTypes__WEBPACK_IMPORTED_MODULE_0__["FETCH"]}/${name}`]: false,
        [`${_actionTypes__WEBPACK_IMPORTED_MODULE_0__["FETCH_LIST"]}/${name}`]: false
      },
      errorState: {
        [`${_actionTypes__WEBPACK_IMPORTED_MODULE_0__["CREATE"]}/${name}`]: false,
        [`${_actionTypes__WEBPACK_IMPORTED_MODULE_0__["UPDATE"]}/${name}`]: false,
        [`${_actionTypes__WEBPACK_IMPORTED_MODULE_0__["FETCH"]}/${name}`]: false,
        [`${_actionTypes__WEBPACK_IMPORTED_MODULE_0__["FETCH_LIST"]}/${name}`]: false
      },
      pagination: {}
    };

    apiReducers[name] = (state = initState, action) => {
      const {
        type,
        payload,
        meta
      } = action;
      const {
        resourceName,
        key
      } = meta || {};

      if (resourceName !== name) {
        return state;
      }

      switch (type) {
        case _actionTypes__WEBPACK_IMPORTED_MODULE_0__["UPDATE"]:
        case _actionTypes__WEBPACK_IMPORTED_MODULE_0__["FETCH"]:
        case _actionTypes__WEBPACK_IMPORTED_MODULE_0__["CREATE"]:
        case _actionTypes__WEBPACK_IMPORTED_MODULE_0__["FETCH_LIST"]:
          return Object(redux_pack__WEBPACK_IMPORTED_MODULE_1__["handle"])(state, action, {
            start: prevState => _objectSpread({}, prevState, {
              loadingState: _objectSpread({}, prevState.loadingState, {
                [`${type}/${name}`]: true
              }),
              errorState: _objectSpread({}, prevState.errorState, {
                [`${type}/${name}`]: true
              })
            }),
            success: prevState => {
              const {
                data
              } = payload;

              if (type === _actionTypes__WEBPACK_IMPORTED_MODULE_0__["FETCH_LIST"]) {
                const {
                  pageNumber,
                  pageSize
                } = meta || {};
                const ids = data.map(entity => entity[key]);
                const entities = data.reduce((finalEntities, entity) => _objectSpread({}, finalEntities, {
                  [entity[key]]: entity
                }), {});
                return _objectSpread({}, prevState, {
                  ids,
                  entities: _objectSpread({}, prevState.entities, {}, entities),
                  loadingState: _objectSpread({}, prevState.loadingState, {
                    [`${type}/${name}`]: false
                  }),
                  errorState: _objectSpread({}, prevState.errorState, {
                    [`${type}/${name}`]: false
                  }),
                  pagination: {
                    number: pageNumber,
                    size: pageSize
                  }
                });
              } else {
                const id = data[key];
                return _objectSpread({}, prevState, {
                  id,
                  entities: _objectSpread({}, prevState.entities, {
                    [id]: data
                  }),
                  loadingState: _objectSpread({}, prevState.loadingState, {
                    [`${type}/${name}`]: false
                  }),
                  errorState: _objectSpread({}, prevState.errorState, {
                    [`${type}/${name}`]: false
                  })
                });
              }
            },
            failure: prevState => {
              const {
                errorMessage
              } = payload.response ? payload.response.data : {};
              return _objectSpread({}, prevState, {
                loadingState: _objectSpread({}, prevState.loadingState, {
                  [`${type}/${name}`]: false
                }),
                errorState: _objectSpread({}, prevState.errorState, {
                  [`${type}/${name}`]: errorMessage || true
                })
              });
            }
          });

        case _actionTypes__WEBPACK_IMPORTED_MODULE_0__["RESET"]:
          return initState;

        default:
          return state;
      }
    };

    return apiReducers;
  }, {});
});

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

/***/ "./src/doit-ui/Modal/create.js":
/*!*************************************!*\
  !*** ./src/doit-ui/Modal/create.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return createModalProvider; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./context */ "./src/doit-ui/Modal/context.js");
/* harmony import */ var _Modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Modal */ "./src/doit-ui/Modal/index.jsx");
var _jsxFileName = "/Volumes/Workstation/dev_wooseok/react/do-it-example/src/doit-ui/Modal/create.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




function createModalProvider(ContentMap = {}) {
  return class ModalProvider extends react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"] {
    constructor(...args) {
      super(...args);

      _defineProperty(this, "state", {
        showModal: false
      });

      _defineProperty(this, "handleOpen", (contentId, modalProps) => {
        this.contentId = contentId;
        this.modalProps = modalProps;
        this.setState({
          showModal: true
        });
      });

      _defineProperty(this, "handleClose", () => {
        this.setState({
          showModal: false
        });
      });
    }

    render() {
      const {
        children
      } = this.props;
      const {
        showModal
      } = this.state;
      const ModalContent = ContentMap[this.contentId];
      return __jsx(_context__WEBPACK_IMPORTED_MODULE_1__["Provider"], {
        value: {
          openModal: this.handleOpen,
          closeModal: this.handleClose
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27,
          columnNumber: 9
        }
      }, children, showModal && ModalContent && __jsx(_Modal__WEBPACK_IMPORTED_MODULE_2__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30,
          columnNumber: 13
        }
      }, __jsx(ModalContent, _extends({}, this.modalProps, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31,
          columnNumber: 15
        }
      }))));
    }

  };
}

/***/ }),

/***/ "./src/doit-ui/Modal/index.jsx":
/*!*************************************!*\
  !*** ./src/doit-ui/Modal/index.jsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _withStyles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../withStyles */ "./src/doit-ui/withStyles.js");
/* harmony import */ var _Card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Card */ "./src/doit-ui/Card.jsx");
var _jsxFileName = "/Volumes/Workstation/dev_wooseok/react/do-it-example/src/doit-ui/Modal/index.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }






class Modal extends react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"] {
  render() {
    const {
      styles,
      children
    } = this.props;
    return __jsx("div", _extends({}, Object(_withStyles__WEBPACK_IMPORTED_MODULE_2__["css"])(styles.overlay), {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 7
      }
    }), __jsx("div", _extends({}, Object(_withStyles__WEBPACK_IMPORTED_MODULE_2__["css"])(styles.wrapper), {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 9
      }
    }), __jsx("div", _extends({}, Object(_withStyles__WEBPACK_IMPORTED_MODULE_2__["css"])(styles.container), {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 11
      }
    }), __jsx(_Card__WEBPACK_IMPORTED_MODULE_3__["default"], {
      vertical: 2,
      horizontal: 2,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 13
      }
    }, children))));
  }

}

Modal.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_withStyles__WEBPACK_IMPORTED_MODULE_2__["withStyles"])(() => ({
  overlay: {
    position: 'fixed',
    zIndex: 9999,
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)'
  },
  wrapper: {
    verticalAlign: 'middle'
  },
  container: {
    margin: '40px auto 0',
    width: 700
  }
}))(Modal));

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

/***/ "./src/doit-ui/Toast.jsx":
/*!*******************************!*\
  !*** ./src/doit-ui/Toast.jsx ***!
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
/* harmony import */ var _Spacing__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Spacing */ "./src/doit-ui/Spacing.jsx");
var _jsxFileName = "/Volumes/Workstation/dev_wooseok/react/do-it-example/src/doit-ui/Toast.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }






class Toast extends react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"] {
  render() {
    const {
      message,
      styles,
      warning
    } = this.props;
    return __jsx("div", _extends({}, Object(_withStyles__WEBPACK_IMPORTED_MODULE_2__["css"])(styles.overlay), {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 7
      }
    }), __jsx("div", _extends({}, Object(_withStyles__WEBPACK_IMPORTED_MODULE_2__["css"])(styles.wrapper, warning && styles.warning), {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 9
      }
    }), __jsx(_Spacing__WEBPACK_IMPORTED_MODULE_3__["default"], {
      vertical: 4,
      horizontal: 8,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 11
      }
    }, message)));
  }

}

Toast.propTypes = _objectSpread({}, _withStyles__WEBPACK_IMPORTED_MODULE_2__["withStylesPropTypes"], {
  warning: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  message: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
});
/* harmony default export */ __webpack_exports__["default"] = (Object(_withStyles__WEBPACK_IMPORTED_MODULE_2__["withStyles"])(({
  depth,
  unit,
  color
}) => ({
  overlay: {
    position: 'fixed',
    bottom: 0,
    right: 0,
    margin: unit * 4
  },
  wrapper: _objectSpread({}, depth.level1, {
    borderRadius: unit,
    backgroundColor: color.secondary,
    padding: unit * 2,
    marginBottom: unit * 4,
    color: 'ivory'
  }),
  warning: {
    backgroundColor: color.error
  }
}))(Toast));

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

/***/ 0:
/*!****************************************!*\
  !*** multi private-next-pages/_app.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.js */"./pages/_app.js");


/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "moment":
/*!*************************!*\
  !*** external "moment" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("moment");

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

/***/ "react-router":
/*!*******************************!*\
  !*** external "react-router" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-router");

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

/***/ "recompose/compose":
/*!************************************!*\
  !*** external "recompose/compose" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("recompose/compose");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "redux-devtools-extension":
/*!*******************************************!*\
  !*** external "redux-devtools-extension" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-devtools-extension");

/***/ }),

/***/ "redux-pack":
/*!*****************************!*\
  !*** external "redux-pack" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-pack");

/***/ }),

/***/ "redux-thunk":
/*!******************************!*\
  !*** external "redux-thunk" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ }),

/***/ "reselect":
/*!***************************!*\
  !*** external "reselect" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("reselect");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ })

/******/ });
//# sourceMappingURL=_app.js.map