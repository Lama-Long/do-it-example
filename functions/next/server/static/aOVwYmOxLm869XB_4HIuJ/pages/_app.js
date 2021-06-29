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

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("1TCz");


/***/ }),

/***/ "1TCz":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: ./node_modules/next/app.js
var app = __webpack_require__("8Bbg");
var app_default = /*#__PURE__*/__webpack_require__.n(app);

// EXTERNAL MODULE: external "redux"
var external_redux_ = __webpack_require__("rKB8");

// EXTERNAL MODULE: external "redux-devtools-extension"
var external_redux_devtools_extension_ = __webpack_require__("ufKq");

// CONCATENATED MODULE: ./src/08/actions/notificationActions.js
const SHOW_NOTIFICATION = 'notification/SHOW_NOTIFICATION';
const HIDE_NOTIFICATION = 'notification/HIDE_NOTIFICATION';
function notificationActions_showMessage(message, warning = false) {
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
// CONCATENATED MODULE: ./src/08/reducers/notificationReducer.js
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const notificationReducer_initState = {
  message: '',
  warning: false,
  showMessage: false
};
/* harmony default export */ var notificationReducer = ((state = notificationReducer_initState, action) => {
  const {
    type,
    payload
  } = action;

  switch (type) {
    case SHOW_NOTIFICATION:
      const {
        message,
        warning
      } = payload;
      return _objectSpread({}, state, {
        showMessage: true,
        message,
        warning
      });

    case HIDE_NOTIFICATION:
      return _objectSpread({}, state, {
        message: '',
        showMessage: false
      });

    default:
      return state;
  }
});
// CONCATENATED MODULE: ./src/08/actions/searchFilterActions.js
const SET_FILTER = 'searchFilter/SET_FILTER';
function setFilter(params) {
  return {
    type: SET_FILTER,
    payload: {
      params
    }
  };
}
// CONCATENATED MODULE: ./src/08/reducers/searchFilterReducer.js
function searchFilterReducer_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function searchFilterReducer_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { searchFilterReducer_ownKeys(Object(source), true).forEach(function (key) { searchFilterReducer_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { searchFilterReducer_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function searchFilterReducer_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const searchFilterReducer_initState = {
  params: {}
};
/* harmony default export */ var searchFilterReducer = ((state = searchFilterReducer_initState, action) => {
  const {
    type,
    payload
  } = action;

  switch (type) {
    case SET_FILTER:
      const {
        params
      } = payload;
      return searchFilterReducer_objectSpread({}, state, {
        params
      });

    default:
      return state;
  }
});
// EXTERNAL MODULE: ./src/11/api-redux-pack/actionTypes.js
var actionTypes = __webpack_require__("8sXK");

// EXTERNAL MODULE: external "redux-pack"
var external_redux_pack_ = __webpack_require__("gz18");

// CONCATENATED MODULE: ./src/11/api-redux-pack/createReducers.js
function createReducers_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function createReducers_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { createReducers_ownKeys(Object(source), true).forEach(function (key) { createReducers_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { createReducers_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function createReducers_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



/* harmony default export */ var createReducers = ((...reducerNames) => {
  return reducerNames.reduce((apiReducers, name) => {
    const initState = {
      ids: [],
      entities: {},
      loadingState: {
        [`${actionTypes["a" /* CREATE */]}/${name}`]: false,
        [`${actionTypes["e" /* UPDATE */]}/${name}`]: false,
        [`${actionTypes["b" /* FETCH */]}/${name}`]: false,
        [`${actionTypes["c" /* FETCH_LIST */]}/${name}`]: false
      },
      errorState: {
        [`${actionTypes["a" /* CREATE */]}/${name}`]: false,
        [`${actionTypes["e" /* UPDATE */]}/${name}`]: false,
        [`${actionTypes["b" /* FETCH */]}/${name}`]: false,
        [`${actionTypes["c" /* FETCH_LIST */]}/${name}`]: false
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
        case actionTypes["e" /* UPDATE */]:
        case actionTypes["b" /* FETCH */]:
        case actionTypes["a" /* CREATE */]:
        case actionTypes["c" /* FETCH_LIST */]:
          return Object(external_redux_pack_["handle"])(state, action, {
            start: prevState => createReducers_objectSpread({}, prevState, {
              loadingState: createReducers_objectSpread({}, prevState.loadingState, {
                [`${type}/${name}`]: true
              }),
              errorState: createReducers_objectSpread({}, prevState.errorState, {
                [`${type}/${name}`]: true
              })
            }),
            success: prevState => {
              const {
                data
              } = payload;

              if (type === actionTypes["c" /* FETCH_LIST */]) {
                const {
                  pageNumber,
                  pageSize
                } = meta || {};
                const ids = data.map(entity => entity[key]);
                const entities = data.reduce((finalEntities, entity) => createReducers_objectSpread({}, finalEntities, {
                  [entity[key]]: entity
                }), {});
                return createReducers_objectSpread({}, prevState, {
                  ids,
                  entities: createReducers_objectSpread({}, prevState.entities, {}, entities),
                  loadingState: createReducers_objectSpread({}, prevState.loadingState, {
                    [`${type}/${name}`]: false
                  }),
                  errorState: createReducers_objectSpread({}, prevState.errorState, {
                    [`${type}/${name}`]: false
                  }),
                  pagination: {
                    number: pageNumber,
                    size: pageSize
                  }
                });
              } else {
                const id = data[key];
                return createReducers_objectSpread({}, prevState, {
                  id,
                  entities: createReducers_objectSpread({}, prevState.entities, {
                    [id]: data
                  }),
                  loadingState: createReducers_objectSpread({}, prevState.loadingState, {
                    [`${type}/${name}`]: false
                  }),
                  errorState: createReducers_objectSpread({}, prevState.errorState, {
                    [`${type}/${name}`]: false
                  })
                });
              }
            },
            failure: prevState => {
              const {
                errorMessage
              } = payload.response ? payload.response.data : {};
              return createReducers_objectSpread({}, prevState, {
                loadingState: createReducers_objectSpread({}, prevState.loadingState, {
                  [`${type}/${name}`]: false
                }),
                errorState: createReducers_objectSpread({}, prevState.errorState, {
                  [`${type}/${name}`]: errorMessage || true
                })
              });
            }
          });

        case actionTypes["d" /* RESET */]:
          return initState;

        default:
          return state;
      }
    };

    return apiReducers;
  }, {});
});
// CONCATENATED MODULE: ./src/08/actions/routerActions.js
const SET_LOCATION = 'router/SET_LOCATION';
function setLocation(location) {
  return {
    type: SET_LOCATION,
    payload: {
      location
    }
  };
}
// CONCATENATED MODULE: ./src/08/reducers/routerReducer.js
function routerReducer_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function routerReducer_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { routerReducer_ownKeys(Object(source), true).forEach(function (key) { routerReducer_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { routerReducer_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function routerReducer_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const routerReducer_initState = {
  location: {}
};
/* harmony default export */ var routerReducer = ((state = routerReducer_initState, action) => {
  const {
    type,
    payload
  } = action;

  switch (type) {
    case SET_LOCATION:
      const {
        location
      } = payload;
      return routerReducer_objectSpread({}, state, {
        location
      });

    default:
      return state;
  }
});
// CONCATENATED MODULE: ./src/08/reducers/index.js
function reducers_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function reducers_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { reducers_ownKeys(Object(source), true).forEach(function (key) { reducers_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { reducers_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function reducers_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





const reducers_apiReducers = createReducers('transactions', 'users');
/* harmony default export */ var reducers = (reducers_objectSpread({}, reducers_apiReducers, {
  notification: notificationReducer,
  searchFilter: searchFilterReducer,
  routerReducer: routerReducer
}));
// EXTERNAL MODULE: external "redux-thunk"
var external_redux_thunk_ = __webpack_require__("ZSx1");
var external_redux_thunk_default = /*#__PURE__*/__webpack_require__.n(external_redux_thunk_);

// CONCATENATED MODULE: ./src/02/debounce.js
function debounce(func, delay) {
  let inDebounce;
  return function (...args) {
    if (inDebounce) {
      clearTimeout(inDebounce);
    }

    inDebounce = setTimeout(() => func(...args), delay);
  };
}
// EXTERNAL MODULE: ./src/08/actions/transactionPackActions.js
var transactionPackActions = __webpack_require__("DOFU");

// CONCATENATED MODULE: ./src/08/middlewares/notificationEffects.js




const debounceRunner = debounce(action => action(), 2000);
/* harmony default export */ var notificationEffects = (store => nextRunner => action => {
  const {
    type,
    meta
  } = action;

  if (meta && meta.notification) {
    const {
      success,
      error
    } = meta.notification;

    if (success && meta[external_redux_pack_["KEY"].LIFECYCLE] === external_redux_pack_["LIFECYCLE"].SUCCESS) {
      store.dispatch(notificationActions_showMessage(success));
    } else if (error && meta[external_redux_pack_["KEY"].LIFECYCLE] === external_redux_pack_["LIFECYCLE"].FAILURE) {
      store.dispatch(notificationActions_showMessage(error, true));
    } else if (type === transactionPackActions["b" /* FETCH_TRANSACTION_LIST */] && meta[external_redux_pack_["KEY"].LIFECYCLE] === external_redux_pack_["LIFECYCLE"].SUCCESS) {
      const message = '거래 목록을 최신 정보로 업데이트 했습니다.';
      store.dispatch(notificationActions_showMessage(message));
    }
  } else if (type === SHOW_NOTIFICATION) {
    const hide = () => store.dispatch(hideMessage());

    debounceRunner(hide);
  }

  return nextRunner(action);
});
// CONCATENATED MODULE: ./src/08/middlewares/searchFilterEffects.js


/* harmony default export */ var searchFilterEffects = (store => nextRunner => action => {
  const {
    type,
    payload
  } = action;
  const result = nextRunner(action);

  if (type === SET_FILTER) {
    const {
      params
    } = payload || {};
    store.dispatch(Object(transactionPackActions["e" /* resetTransactionList */])());
    store.dispatch(Object(transactionPackActions["d" /* requestTransactionList */])(params));
  }

  return result;
});
// CONCATENATED MODULE: ./src/08/middlewares/routerEffects.js
function routerEffects_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function routerEffects_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { routerEffects_ownKeys(Object(source), true).forEach(function (key) { routerEffects_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { routerEffects_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function routerEffects_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




function parse(qs) {
  const quertString = qs.substr(1);
  const chunks = quertString.split('&');
  return chunks.map(chunk => chunk.split('=')).reduce((result, [key, value]) => routerEffects_objectSpread({}, result, {
    [key]: value
  }), {});
}

/* harmony default export */ var routerEffects = (store => nextRunner => action => {
  const {
    type,
    payload
  } = action;
  const result = nextRunner(action);

  if (type === SET_LOCATION) {
    const {
      pathname,
      search
    } = payload.location;

    if (pathname === '/') {
      store.dispatch(setFilter(parse(search)));
    }
  }

  return result;
});
// CONCATENATED MODULE: ./src/08/store/configureStore.js








/* harmony default export */ var configureStore = (initStates => Object(external_redux_["createStore"])(Object(external_redux_["combineReducers"])(reducers), initStates, Object(external_redux_devtools_extension_["composeWithDevTools"])(Object(external_redux_["applyMiddleware"])(external_redux_thunk_default.a, external_redux_pack_["middleware"], searchFilterEffects, notificationEffects, routerEffects))));
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__("h74D");

// EXTERNAL MODULE: ./src/doit-ui/Modal/context.js
var context = __webpack_require__("usfy");

// EXTERNAL MODULE: ./src/doit-ui/withStyles.js
var withStyles = __webpack_require__("Ice+");

// EXTERNAL MODULE: ./src/doit-ui/Card.jsx
var Card = __webpack_require__("KYDP");

// CONCATENATED MODULE: ./src/doit-ui/Modal/index.jsx
var __jsx = external_react_default.a.createElement;




class Modal_Modal extends external_react_["PureComponent"] {
  render() {
    const {
      styles,
      children
    } = this.props;
    return __jsx("div", Object(withStyles["a" /* css */])(styles.overlay), __jsx("div", Object(withStyles["a" /* css */])(styles.wrapper), __jsx("div", Object(withStyles["a" /* css */])(styles.container), __jsx(Card["a" /* default */], {
      vertical: 2,
      horizontal: 2
    }, children))));
  }

}

/* harmony default export */ var doit_ui_Modal = (Object(withStyles["b" /* withStyles */])(() => ({
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
}))(Modal_Modal));
// CONCATENATED MODULE: ./src/doit-ui/Modal/create.js
var create_jsx = external_react_default.a.createElement;

function create_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




function createModalProvider(ContentMap = {}) {
  return class ModalProvider extends external_react_["PureComponent"] {
    constructor(...args) {
      super(...args);

      create_defineProperty(this, "state", {
        showModal: false
      });

      create_defineProperty(this, "handleOpen", (contentId, modalProps) => {
        this.contentId = contentId;
        this.modalProps = modalProps;
        this.setState({
          showModal: true
        });
      });

      create_defineProperty(this, "handleClose", () => {
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
      return create_jsx(context["b" /* Provider */], {
        value: {
          openModal: this.handleOpen,
          closeModal: this.handleClose
        }
      }, children, showModal && ModalContent && create_jsx(doit_ui_Modal, null, create_jsx(ModalContent, this.modalProps)));
    }

  };
}
// EXTERNAL MODULE: ./src/08/constants/modals.js
var modals = __webpack_require__("ww+x");

// EXTERNAL MODULE: ./src/doit-ui/Form.jsx
var Form = __webpack_require__("VCIE");

// EXTERNAL MODULE: ./src/doit-ui/Spacing.jsx + 1 modules
var Spacing = __webpack_require__("pCF0");

// EXTERNAL MODULE: ./src/doit-ui/Text.jsx
var Text = __webpack_require__("aS7l");

// EXTERNAL MODULE: ./src/doit-ui/Input.jsx
var Input = __webpack_require__("fzRT");

// EXTERNAL MODULE: ./src/doit-ui/InlineList.jsx
var InlineList = __webpack_require__("Hsxp");

// EXTERNAL MODULE: ./src/doit-ui/Button.jsx
var Button = __webpack_require__("M9WK");

// EXTERNAL MODULE: external "moment"
var external_moment_ = __webpack_require__("wy2R");
var external_moment_default = /*#__PURE__*/__webpack_require__.n(external_moment_);

// CONCATENATED MODULE: ./src/08/components/main/TradeCoinPage01.jsx
var TradeCoinPage01_jsx = external_react_default.a.createElement;

function TradeCoinPage01_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }











class TradeCoinPage01_TradeCoinPage extends external_react_["PureComponent"] {
  constructor(...args) {
    super(...args);

    TradeCoinPage01_defineProperty(this, "handleSubmit", (values, closeModal) => {
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
        dateTime: external_moment_default()().format('YYYY/MM/DD HH:mm:ss')
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
    return TradeCoinPage01_jsx(context["a" /* Consumer */], null, ({
      closeModal
    }) => TradeCoinPage01_jsx(Form["a" /* default */], {
      onSubmit: values => this.handleSubmit(values, closeModal),
      initValues: {
        currentPrice: price
      }
    }, TradeCoinPage01_jsx(Form["a" /* default */].Consumer, null, ({
      onChange,
      values
    }) => TradeCoinPage01_jsx(Spacing["a" /* default */], {
      horizontal: 4,
      vertical: 8
    }, TradeCoinPage01_jsx(Text["a" /* default */], {
      xlarge: true,
      bold: true
    }, name, " ", typeName), TradeCoinPage01_jsx(Spacing["a" /* default */], {
      bottom: 2
    }, TradeCoinPage01_jsx(Input["a" /* default */], {
      name: "currentPrice",
      label: "\uAE08\uC561",
      value: values['currentPrice'],
      onChange: onChange
    })), TradeCoinPage01_jsx(Spacing["a" /* default */], {
      bottom: 2
    }, TradeCoinPage01_jsx(Input["a" /* default */], {
      name: "amount",
      label: "\uC218\uB7C9",
      value: values['amount'],
      onChange: onChange
    })), TradeCoinPage01_jsx(InlineList["a" /* default */], {
      spacingBetween: 1
    }, TradeCoinPage01_jsx(Button["a" /* default */], {
      primary: true,
      disabled: loading
    }, loading ? '거래 처리중' : typeName), TradeCoinPage01_jsx(Button["a" /* default */], {
      onPress: closeModal,
      disabled: loading
    }, "\uCDE8\uC18C"))))));
  }

}

/* harmony default export */ var TradeCoinPage01 = (TradeCoinPage01_TradeCoinPage);
// CONCATENATED MODULE: ./src/08/containers/main/TradeCoinPageContainer.js




const mapStateToProps = state => {
  const {
    loadingState
  } = state.transactions;
  const loading = loadingState[transactionPackActions["a" /* CREATE_TRANSACTION */]];
  return {
    loading
  };
};

/* harmony default export */ var TradeCoinPageContainer = (Object(external_react_redux_["connect"])(mapStateToProps, {
  createTransaction: transactionPackActions["c" /* createTransaction */],
  requestTransactionList: transactionPackActions["d" /* requestTransactionList */]
})(TradeCoinPage01));
// EXTERNAL MODULE: ./src/11/api-redux-pack/createSelectors.js
var createSelectors = __webpack_require__("BUWp");

// CONCATENATED MODULE: ./src/08/selectors/userSelectors.js

const {
  createLoadingStateSelector: userCreateLoadingStateSelector
} = Object(createSelectors["a" /* default */])('users');
// EXTERNAL MODULE: ./src/11/api-redux-pack/createActions.js + 1 modules
var createActions = __webpack_require__("dWw4");

// CONCATENATED MODULE: ./src/08/actions/userActions.js

const {
  create
} = Object(createActions["a" /* default */])('users');
function createUser(data, onComplete) {
  return create(data, {}, {
    notification: {
      success: '회원 가입이 성공적으로 완료되었습니다.'
    },
    onSuccess: onComplete
  });
}
// CONCATENATED MODULE: ./src/08/components/signup/RegisterPage.jsx
var RegisterPage_jsx = external_react_default.a.createElement;

function RegisterPage_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }










class RegisterPage_RegisterPage extends external_react_["PureComponent"] {
  constructor(...args) {
    super(...args);

    RegisterPage_defineProperty(this, "handleSubmit", (values, closeModal) => {
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
    return RegisterPage_jsx(context["a" /* Consumer */], null, ({
      closeModal
    }) => RegisterPage_jsx(Form["a" /* default */], {
      onSubmit: values => this.handleSubmit(values, closeModal)
    }, RegisterPage_jsx(Form["a" /* default */].Consumer, null, ({
      onChange,
      values
    }) => RegisterPage_jsx(Spacing["a" /* default */], {
      horizontal: 4,
      vertical: 8
    }, RegisterPage_jsx(Text["a" /* default */], {
      xlarge: true,
      bold: true
    }, "\uD68C\uC6D0 \uB4F1\uB85D"), RegisterPage_jsx(Spacing["a" /* default */], {
      bottom: 2
    }, RegisterPage_jsx(Input["a" /* default */], {
      name: "totalAmount",
      type: "number",
      label: "\uC790\uC0B0 \uCD1D\uC561",
      onChange: onChange,
      value: values['totalAmount']
    })), RegisterPage_jsx(InlineList["a" /* default */], {
      spacingBetween: 1
    }, RegisterPage_jsx(Button["a" /* default */], {
      type: "submit",
      primary: true,
      disabled: loading
    }, "\uD68C\uC6D0 \uB4F1\uB85D"), RegisterPage_jsx(Button["a" /* default */], {
      onPress: closeModal,
      disabled: loading
    }, "\uCDE8\uC18C"))))));
  }

}

/* harmony default export */ var signup_RegisterPage = (RegisterPage_RegisterPage);
// CONCATENATED MODULE: ./src/08/containers/main/RegisterPageContainer.jsx




/* harmony default export */ var RegisterPageContainer = (Object(external_react_redux_["connect"])(state => ({
  loading: userCreateLoadingStateSelector(state)
}), () => ({
  createUser: createUser
}))(signup_RegisterPage));
// CONCATENATED MODULE: ./src/08/ModalProvider.jsx




/* harmony default export */ var _08_ModalProvider = (createModalProvider({
  [modals["b" /* TRADE_COIN_MODAL */]]: TradeCoinPageContainer,
  [modals["a" /* REGISTER_USER_MODAL */]]: RegisterPageContainer
}));
// EXTERNAL MODULE: ./src/doit-ui/Heading.jsx
var Heading = __webpack_require__("UhNW");

// CONCATENATED MODULE: ./src/08/components/AppNav.jsx
var AppNav_jsx = external_react_default.a.createElement;

function AppNav_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function AppNav_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { AppNav_ownKeys(Object(source), true).forEach(function (key) { AppNav_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { AppNav_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function AppNav_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }







const HEIGHT = 64;

class AppNav_AppNav extends external_react_["PureComponent"] {
  render() {
    const {
      styles
    } = this.props;
    return AppNav_jsx("div", Object(withStyles["a" /* css */])(styles.wrapper), AppNav_jsx("div", Object(withStyles["a" /* css */])(styles.container), AppNav_jsx("div", Object(withStyles["a" /* css */])(styles.title), AppNav_jsx("img", _extends({}, Object(withStyles["a" /* css */])(styles.img), {
      src: "logo.jpg",
      alt: "logo"
    })), AppNav_jsx(Heading["a" /* default */], {
      level: 3,
      inverse: true
    }, "\uB450\uC787 \uCF54\uC778 \uAC70\uB798\uC18C")), AppNav_jsx(context["a" /* Consumer */], null, ({
      openModal
    }) => AppNav_jsx(Button["a" /* default */], {
      inverse: true,
      bold: true,
      large: true,
      onPress: () => openModal(modals["a" /* REGISTER_USER_MODAL */], {
        totalAmount: 0
      })
    }, "\uD68C\uC6D0 \uAC00\uC785"))));
  }

}

/* harmony default export */ var components_AppNav = (Object(withStyles["b" /* withStyles */])(({
  color,
  depth,
  unit
}) => {
  return {
    wrapper: AppNav_objectSpread({}, depth.level1, {
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
})(AppNav_AppNav));
// CONCATENATED MODULE: ./src/08/components/AppLayout.jsx
var AppLayout_jsx = external_react_default.a.createElement;




class AppLayout_AppLayout extends external_react_["PureComponent"] {
  render() {
    const {
      children,
      styles
    } = this.props;
    return AppLayout_jsx("div", Object(withStyles["a" /* css */])(styles.wrapper), AppLayout_jsx(components_AppNav, null), AppLayout_jsx("div", Object(withStyles["a" /* css */])(styles.body), children));
  }

}

/* harmony default export */ var components_AppLayout = (Object(withStyles["b" /* withStyles */])(({
  unit
}) => ({
  wrapper: {
    marginTop: HEIGHT,
    maxWidth: '1080px',
    margin: '0 auto'
  },
  body: {
    padding: unit * 4,
    marginTop: HEIGHT
  }
}))(AppLayout_AppLayout));
// CONCATENATED MODULE: ./src/doit-ui/Toast.jsx
var Toast_jsx = external_react_default.a.createElement;

function Toast_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function Toast_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { Toast_ownKeys(Object(source), true).forEach(function (key) { Toast_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { Toast_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function Toast_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





class Toast_Toast extends external_react_["PureComponent"] {
  render() {
    const {
      message,
      styles,
      warning
    } = this.props;
    return Toast_jsx("div", Object(withStyles["a" /* css */])(styles.overlay), Toast_jsx("div", Object(withStyles["a" /* css */])(styles.wrapper, warning && styles.warning), Toast_jsx(Spacing["a" /* default */], {
      vertical: 4,
      horizontal: 8
    }, message)));
  }

}

/* harmony default export */ var doit_ui_Toast = (Object(withStyles["b" /* withStyles */])(({
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
  wrapper: Toast_objectSpread({}, depth.level1, {
    borderRadius: unit,
    backgroundColor: color.secondary,
    padding: unit * 2,
    marginBottom: unit * 4,
    color: 'ivory'
  }),
  warning: {
    backgroundColor: color.error
  }
}))(Toast_Toast));
// CONCATENATED MODULE: ./src/08/components/Notification.jsx
var Notification_jsx = external_react_default.a.createElement;



class Notification_Notification extends external_react_["PureComponent"] {
  render() {
    const {
      message,
      warning,
      showMessage
    } = this.props;
    return Notification_jsx(external_react_default.a.Fragment, null, showMessage && Notification_jsx(doit_ui_Toast, {
      message: message,
      warning: warning
    }));
  }

}

/* harmony default export */ var components_Notification = (Notification_Notification);
// CONCATENATED MODULE: ./src/08/containers/NotificationContainer.jsx



const NotificationContainer_mapStateToProps = state => {
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

/* harmony default export */ var NotificationContainer = (Object(external_react_redux_["connect"])(NotificationContainer_mapStateToProps)(components_Notification));
// EXTERNAL MODULE: external "react-router"
var external_react_router_ = __webpack_require__("MGin");

// EXTERNAL MODULE: external "react-router-dom"
var external_react_router_dom_ = __webpack_require__("oncg");

// EXTERNAL MODULE: external "recompose/compose"
var compose_ = __webpack_require__("s1hs");
var compose_default = /*#__PURE__*/__webpack_require__.n(compose_);

// CONCATENATED MODULE: ./src/08/containers/RouterStateContainer.jsx






class RouterStateContainer_RouterState extends external_react_["PureComponent"] {
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

/* harmony default export */ var RouterStateContainer = (compose_default()(Object(external_react_redux_["connect"])(null, {
  setLocation: setLocation
}), external_react_router_dom_["withRouter"])(RouterStateContainer_RouterState));
// CONCATENATED MODULE: ./pages/_app.js
var _app_jsx = external_react_default.a.createElement;

function _app_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }











const isServer = true;

class _app_MyApp extends app_default.a {
  constructor(...args) {
    super(...args);

    _app_defineProperty(this, "store", configureStore());
  }

  render() {
    const {
      Component,
      router,
      pageProps
    } = this.props;
    const Router = isServer ? external_react_router_["StaticRouter"] : external_react_router_dom_["BrowserRouter"];
    const routerProps = isServer ? {
      location: router.asPath
    } : {};
    return _app_jsx(app["Container"], null, _app_jsx(external_react_redux_["Provider"], {
      store: this.store
    }, _app_jsx(Router, routerProps, _app_jsx(RouterStateContainer, null), _app_jsx(_08_ModalProvider, null, _app_jsx(components_AppLayout, null, _app_jsx(Component, pageProps), _app_jsx(NotificationContainer, null))), _app_jsx(NotificationContainer, null))));
  }

}

/* harmony default export */ var _app = __webpack_exports__["default"] = (_app_MyApp);

/***/ }),

/***/ "8Bbg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("B5Ud")


/***/ }),

/***/ "8sXK":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return FETCH_LIST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return FETCH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return UPDATE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CREATE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return RESET; });
const FETCH_LIST = 'api-redux-pack/FETCH_LIST';
const FETCH = 'api-redux-pack/FETCH';
const UPDATE = 'api-redux-pack/UPDATE';
const CREATE = 'api-redux-pack/CREATE';
const RESET = 'api-redux-pack/RESET';

/***/ }),

/***/ "AroE":
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "B5Ud":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("AroE");

exports.__esModule = true;
exports.Container = Container;
exports.createUrl = createUrl;
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _utils = __webpack_require__("g/15");

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

if (false) {} // @deprecated noop for now until removal


function Container(p) {
  if (false) {}
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
      if (false) {}
      return query;
    },

    get pathname() {
      if (false) {}
      return pathname;
    },

    get asPath() {
      if (false) {}
      return asPath;
    },

    back: () => {
      if (false) {}
      router.back();
    },
    push: (url, as) => {
      if (false) {}
      return router.push(url, as);
    },
    pushTo: (href, as) => {
      if (false) {}
      var pushRoute = as ? href : '';
      var pushUrl = as || href;
      return router.push(pushRoute, pushUrl);
    },
    replace: (url, as) => {
      if (false) {}
      return router.replace(url, as);
    },
    replaceTo: (href, as) => {
      if (false) {}
      var replaceRoute = as ? href : '';
      var replaceUrl = as || href;
      return router.replace(replaceRoute, replaceUrl);
    }
  };
}

/***/ }),

/***/ "BUWp":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return createSelectors; });
/* harmony import */ var reselect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("MWqi");
/* harmony import */ var reselect__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(reselect__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _actionTypes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("8sXK");


function createSelectors(resourceName) {
  const resourceSelector = state => state[resourceName];

  const entitiesSelector = state => resourceSelector(state).entities;

  const collectionSelector = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])([resourceSelector], ({
    ids,
    entities
  }) => ids.map(id => entities[id]));

  const loadingStateSelector = state => resourceSelector(state).loadingState;

  const errorStateSelector = state => resourceSelector(state).errorState;

  const collectionLoadingStateSelector = state => loadingStateSelector(state)[`${_actionTypes__WEBPACK_IMPORTED_MODULE_1__[/* FETCH_LIST */ "c"]}/${resourceName}`];

  const createLoadingStateSelector = state => loadingStateSelector(state)[`${_actionTypes__WEBPACK_IMPORTED_MODULE_1__[/* CREATE */ "a"]}/${resourceName}`];

  const updateLoadingStateSelector = state => loadingStateSelector(state)[`${_actionTypes__WEBPACK_IMPORTED_MODULE_1__[/* UPDATE */ "e"]}/${resourceName}`];

  const memberLoadingStateSelector = state => loadingStateSelector(state)[`${_actionTypes__WEBPACK_IMPORTED_MODULE_1__[/* FETCH */ "b"]}/${resourceName}`];

  const collectionErrorStateSelector = state => errorStateSelector(state)[`${_actionTypes__WEBPACK_IMPORTED_MODULE_1__[/* FETCH_LIST */ "c"]}/${resourceName}`];

  const createErrorStateSelector = state => errorStateSelector(state)[`${_actionTypes__WEBPACK_IMPORTED_MODULE_1__[/* CREATE */ "a"]}/${resourceName}`];

  const updateErrorStateSelector = state => errorStateSelector(state)[`${_actionTypes__WEBPACK_IMPORTED_MODULE_1__[/* UPDATE */ "e"]}/${resourceName}`];

  const memberErrorStateSelector = state => errorStateSelector(state)[`${_actionTypes__WEBPACK_IMPORTED_MODULE_1__[/* FETCH */ "b"]}/${resourceName}`];

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

/***/ "DOFU":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CREATE_TRANSACTION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return FETCH_TRANSACTION_LIST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return resetTransactionList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return requestTransactionList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return createTransaction; });
/* harmony import */ var _11_api_redux_pack_createActions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("dWw4");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const CREATE_TRANSACTION = 'transaction/CREATE_TRANSACTION';
const FETCH_TRANSACTION_LIST = 'transaction/FETCH_TRANSACTION_LIST';
const {
  collection,
  create,
  reset
} = Object(_11_api_redux_pack_createActions__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])('transactions');
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

/***/ "Hsxp":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _withStyles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("Ice+");
/* harmony import */ var _Theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("ZlW2");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




class InlineList extends react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"] {
  render() {
    const {
      align,
      children,
      styles,
      spacingBetween,
      verticalAlign
    } = this.props;
    return __jsx("div", Object(_withStyles__WEBPACK_IMPORTED_MODULE_1__[/* css */ "a"])(styles.wrapper, align === 'center' && styles.alignCenter, align === 'right' && styles.alignRight, verticalAlign === 'top' && styles.verticalAlignTop, verticalAlign === 'bottom' && styles.verticalAlignBotttom), react__WEBPACK_IMPORTED_MODULE_0___default.a.Children.map(children, child => __jsx("div", Object(_withStyles__WEBPACK_IMPORTED_MODULE_1__[/* css */ "a"])({
      marginRight: spacingBetween * _Theme__WEBPACK_IMPORTED_MODULE_2__[/* unit */ "b"]
    }), child)));
  }

}

InlineList.defaultProps = {
  spacingBetween: 1
};
/* harmony default export */ __webpack_exports__["a"] = (Object(_withStyles__WEBPACK_IMPORTED_MODULE_1__[/* withStyles */ "b"])(() => ({
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

/***/ "Ice+":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react_with_styles_lib_ThemedStyleSheet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("VnKK");
/* harmony import */ var react_with_styles_lib_ThemedStyleSheet__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_with_styles_lib_ThemedStyleSheet__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_with_styles_interface_aphrodite_lib_aphroditeInterface__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("SIaS");
/* harmony import */ var react_with_styles_interface_aphrodite_lib_aphroditeInterface__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_with_styles_interface_aphrodite_lib_aphroditeInterface__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_with_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("zoyD");
/* harmony import */ var react_with_styles__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_with_styles__WEBPACK_IMPORTED_MODULE_2__);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "a", function() { return react_with_styles__WEBPACK_IMPORTED_MODULE_2__["css"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "b", function() { return react_with_styles__WEBPACK_IMPORTED_MODULE_2__["withStyles"]; });

/* harmony import */ var _Theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("ZlW2");




react_with_styles_lib_ThemedStyleSheet__WEBPACK_IMPORTED_MODULE_0___default.a.registerInterface(react_with_styles_interface_aphrodite_lib_aphroditeInterface__WEBPACK_IMPORTED_MODULE_1___default.a);
react_with_styles_lib_ThemedStyleSheet__WEBPACK_IMPORTED_MODULE_0___default.a.registerTheme(_Theme__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"]);


/***/ }),

/***/ "KYDP":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _withStyles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("Ice+");
/* harmony import */ var _Spacing__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("pCF0");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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

    return __jsx("div", Object(_withStyles__WEBPACK_IMPORTED_MODULE_1__[/* css */ "a"])(styles.wrapper), __jsx(_Spacing__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], spacingProps, children));
  }

}

/* harmony default export */ __webpack_exports__["a"] = (Object(_withStyles__WEBPACK_IMPORTED_MODULE_1__[/* withStyles */ "b"])(({
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

/***/ "M9WK":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _withStyles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("Ice+");
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
    return __jsx("button", _extends({}, Object(_withStyles__WEBPACK_IMPORTED_MODULE_1__[/* css */ "a"])(styles.default, xsmall && styles.xsmall, small && styles.small, large && styles.large, xlarge && styles.xlarge, secondary && styles.secondary, primary && styles.primary, disabled && styles.disabled), {
      disabled: disabled,
      type: type,
      onClick: onPress
    }), children);
  }

}

Button.defaultProps = {
  onPress: () => {},
  xsmall: false,
  small: false,
  large: false,
  xlarge: false,
  secondary: false,
  primary: false
};
/* harmony default export */ __webpack_exports__["a"] = (Object(_withStyles__WEBPACK_IMPORTED_MODULE_1__[/* withStyles */ "b"])(({
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

/***/ "MGin":
/***/ (function(module, exports) {

module.exports = require("react-router");

/***/ }),

/***/ "MWqi":
/***/ (function(module, exports) {

module.exports = require("reselect");

/***/ }),

/***/ "SIaS":
/***/ (function(module, exports) {

module.exports = require("react-with-styles-interface-aphrodite/lib/aphroditeInterface");

/***/ }),

/***/ "UhNW":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _withStyles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("Ice+");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


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
    return __jsx(HeadingTag, Object(_withStyles__WEBPACK_IMPORTED_MODULE_1__[/* css */ "a"])(styles.default, xsmall && styles.xsmall, small && styles.small, large && styles.large, xlarge && styles.xlarge, secondary && styles.secondary, primary && styles.primary, bold && styles.bold, light && styles.light, inverse && styles.inverse), children);
  }

}

Heading.defaultProps = {
  level: 1
};
/* harmony default export */ __webpack_exports__["a"] = (Object(_withStyles__WEBPACK_IMPORTED_MODULE_1__[/* withStyles */ "b"])(({
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

/***/ "VCIE":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
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
      }
    }, __jsx("form", {
      onSubmit: this.handleSubmit
    }, this.props.children));
  }

}

_defineProperty(FormProvider, "Consumer", Consumer);

FormProvider.defaultProps = {
  initValues: {},
  validate: () => ({})
};
/* harmony default export */ __webpack_exports__["a"] = (FormProvider);

/***/ }),

/***/ "VnKK":
/***/ (function(module, exports) {

module.exports = require("react-with-styles/lib/ThemedStyleSheet");

/***/ }),

/***/ "ZSx1":
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ }),

/***/ "ZlW2":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export LARGE_AND_ABOVE */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return unit; });
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
/* harmony default export */ __webpack_exports__["a"] = ({
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

/***/ "aS7l":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _withStyles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("Ice+");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



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
    return __jsx("span", Object(_withStyles__WEBPACK_IMPORTED_MODULE_1__[/* css */ "a"])(styles.default, xsmall && styles.xsmall, small && styles.small, large && styles.large, xlarge && styles.xlarge, secondary && styles.secondary, primary && styles.primary, bold && styles.bold, light && styles.light, inverse && styles.inverse), children);
  }

}

/* harmony default export */ __webpack_exports__["a"] = (Object(_withStyles__WEBPACK_IMPORTED_MODULE_1__[/* withStyles */ "b"])(({
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

/***/ "bzos":
/***/ (function(module, exports) {

module.exports = require("url");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "dWw4":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./src/11/api-redux-pack/actionTypes.js
var actionTypes = __webpack_require__("8sXK");

// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__("zr5I");
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);

// CONCATENATED MODULE: ./src/08/Api.js

const isDev = false;
const Api = external_axios_default.a.create({
  baseURL: isDev ? 'http://localhost:4000' : '/api/'
});
/* harmony default export */ var _08_Api = (Api);
// CONCATENATED MODULE: ./src/11/api-redux-pack/createActions.js
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



/* harmony default export */ var createActions = __webpack_exports__["a"] = ((resourceName, key = 'id') => ({
  collection: (params = {}, meta = {}) => ({
    type: actionTypes["c" /* FETCH_LIST */],
    promise: _08_Api.get(resourceName, {
      params
    }),
    meta: _objectSpread({}, meta, {
      key,
      resourceName
    })
  }),
  member: (id, params = {}, meta = {}) => ({
    type: actionTypes["b" /* FETCH */],
    promise: _08_Api.get(`${resourceName}/${id}`, {
      params
    }),
    meta: _objectSpread({}, meta, {
      key,
      resourceName
    })
  }),
  create: (data, params = {}, meta = {}) => ({
    type: actionTypes["a" /* CREATE */],
    promise: _08_Api.post(resourceName, data, {
      params
    }),
    meta: _objectSpread({}, meta, {
      key,
      resourceName
    })
  }),
  update: (id, data, params = {}, meta = {}) => ({
    type: actionTypes["e" /* UPDATE */],
    promise: _08_Api.put(`${resourceName}/${id}`, data, {
      params
    }),
    meta: _objectSpread({}, meta, {
      key,
      resourceName
    })
  }),
  reset: () => ({
    type: actionTypes["d" /* RESET */],
    meta: {
      resourceName
    }
  })
}));

/***/ }),

/***/ "fzRT":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _withStyles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("Ice+");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

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
    return __jsx("fieldset", Object(_withStyles__WEBPACK_IMPORTED_MODULE_1__[/* css */ "a"])(styles.wrapper), __jsx("label", _extends({
      htmlFor: `input_${name}`
    }, Object(_withStyles__WEBPACK_IMPORTED_MODULE_1__[/* css */ "a"])(styles.label, errorMessage && styles.errorLabel)), errorMessage || label), __jsx("input", _extends({}, Object(_withStyles__WEBPACK_IMPORTED_MODULE_1__[/* css */ "a"])(styles.input, errorMessage && styles.error, xsmall && styles.xsmall, small && styles.small, large && styles.large, xlarge && styles.xlarge), {
      id: `input_${name}`,
      ref: this.setRef,
      onChange: this.handleChange,
      value: value || '',
      type: type
    })));
  }

}

Input.defaultProps = {
  onChange: () => {},
  autoFocus: false
};
/* harmony default export */ __webpack_exports__["a"] = (Object(_withStyles__WEBPACK_IMPORTED_MODULE_1__[/* withStyles */ "b"])(({
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

/***/ "g/15":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__("bzos");
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

  if (false) {} // when called from _app `ctx` is nested in `ctx`


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

  if (false) {}

  return props;
}

exports.loadGetInitialProps = loadGetInitialProps;
exports.urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];

function formatWithValidation(url, options) {
  if (false) {}

  return url_1.format(url, options);
}

exports.formatWithValidation = formatWithValidation;
exports.SP = typeof performance !== 'undefined';
exports.ST = exports.SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';

/***/ }),

/***/ "gz18":
/***/ (function(module, exports) {

module.exports = require("redux-pack");

/***/ }),

/***/ "h74D":
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "oncg":
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),

/***/ "pCF0":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// UNUSED EXPORTS: propTypes

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "prop-types"
var external_prop_types_ = __webpack_require__("rf6O");
var external_prop_types_default = /*#__PURE__*/__webpack_require__.n(external_prop_types_);

// EXTERNAL MODULE: ./src/doit-ui/Theme.js
var Theme = __webpack_require__("ZlW2");

// EXTERNAL MODULE: external "react-with-styles/lib/ThemedStyleSheet"
var ThemedStyleSheet_ = __webpack_require__("VnKK");
var ThemedStyleSheet_default = /*#__PURE__*/__webpack_require__.n(ThemedStyleSheet_);

// EXTERNAL MODULE: external "react-with-styles-interface-aphrodite/lib/aphroditeInterface"
var aphroditeInterface_ = __webpack_require__("SIaS");
var aphroditeInterface_default = /*#__PURE__*/__webpack_require__.n(aphroditeInterface_);

// EXTERNAL MODULE: external "react-with-styles"
var external_react_with_styles_ = __webpack_require__("zoyD");

// CONCATENATED MODULE: ./src/04/withStyles.js




ThemedStyleSheet_default.a.registerTheme(Theme["a" /* default */]);
ThemedStyleSheet_default.a.registerInterface(aphroditeInterface_default.a);

/* harmony default export */ var withStyles = (external_react_with_styles_["withStyles"]);
// CONCATENATED MODULE: ./src/doit-ui/Spacing.jsx
var __jsx = external_react_default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





const propTypes = {
  top: external_prop_types_default.a.number,
  left: external_prop_types_default.a.number,
  right: external_prop_types_default.a.number,
  bottom: external_prop_types_default.a.number,
  vertical: external_prop_types_default.a.number,
  horizontal: external_prop_types_default.a.number
};

class Spacing_Spacing extends external_react_["PureComponent"] {
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
      marginTop: computedTop * Theme["b" /* unit */]
    }, {}, computedBottom && {
      marginBottom: computedBottom * Theme["b" /* unit */]
    }, {}, computedLeft && {
      marginLeft: computedLeft * Theme["b" /* unit */]
    }, {}, computedRight && {
      marginRight: computedRight * Theme["b" /* unit */]
    });

    return __jsx("div", Object(external_react_with_styles_["css"])(computedStyle), children);
  }

}

/* harmony default export */ var doit_ui_Spacing = __webpack_exports__["a"] = (Spacing_Spacing);

/***/ }),

/***/ "rKB8":
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "rf6O":
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "s1hs":
/***/ (function(module, exports) {

module.exports = require("recompose/compose");

/***/ }),

/***/ "ufKq":
/***/ (function(module, exports) {

module.exports = require("redux-devtools-extension");

/***/ }),

/***/ "usfy":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Provider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Consumer; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const {
  Provider,
  Consumer
} = react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext({});

/***/ }),

/***/ "ww+x":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return TRADE_COIN_MODAL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return REGISTER_USER_MODAL; });
const TRADE_COIN_MODAL = 'modal/TRADE_COIN_MODAL';
const REGISTER_USER_MODAL = 'modal/REGISTER_USER_MODAL';

/***/ }),

/***/ "wy2R":
/***/ (function(module, exports) {

module.exports = require("moment");

/***/ }),

/***/ "zoyD":
/***/ (function(module, exports) {

module.exports = require("react-with-styles");

/***/ }),

/***/ "zr5I":
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ })

/******/ });