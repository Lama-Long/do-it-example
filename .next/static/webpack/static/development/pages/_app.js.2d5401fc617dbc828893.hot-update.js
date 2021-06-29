webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./src/08/components/AppNav.jsx":
/*!**************************************!*\
  !*** ./src/08/components/AppNav.jsx ***!
  \**************************************/
/*! exports provided: HEIGHT, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HEIGHT", function() { return HEIGHT; });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _doit_ui_withStyles__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../doit-ui/withStyles */ "./src/doit-ui/withStyles.js");
/* harmony import */ var _doit_ui_Heading__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../doit-ui/Heading */ "./src/doit-ui/Heading.jsx");
/* harmony import */ var _doit_ui_Modal_context__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../doit-ui/Modal/context */ "./src/doit-ui/Modal/context.js");
/* harmony import */ var _doit_ui_Button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../doit-ui/Button */ "./src/doit-ui/Button.jsx");
/* harmony import */ var _constants_modals__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../constants/modals */ "./src/08/constants/modals.js");







var _jsxFileName = "/Volumes/Workstation/dev_wooseok/react/do-it-example/src/08/components/AppNav.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }







var HEIGHT = 64;

var AppNav = /*#__PURE__*/function (_PureComponent) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(AppNav, _PureComponent);

  var _super = _createSuper(AppNav);

  function AppNav() {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, AppNav);

    return _super.apply(this, arguments);
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(AppNav, [{
    key: "render",
    value: function render() {
      var _this = this;

      var styles = this.props.styles;
      return __jsx("div", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, Object(_doit_ui_withStyles__WEBPACK_IMPORTED_MODULE_8__["css"])(styles.wrapper), {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14,
          columnNumber: 7
        }
      }), __jsx("div", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, Object(_doit_ui_withStyles__WEBPACK_IMPORTED_MODULE_8__["css"])(styles.container), {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15,
          columnNumber: 9
        }
      }), __jsx("div", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, Object(_doit_ui_withStyles__WEBPACK_IMPORTED_MODULE_8__["css"])(styles.title), {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16,
          columnNumber: 11
        }
      }), __jsx("img", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, Object(_doit_ui_withStyles__WEBPACK_IMPORTED_MODULE_8__["css"])(styles.img), {
        src: "logo.jpg",
        alt: "logo",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17,
          columnNumber: 13
        }
      })), __jsx(_doit_ui_Heading__WEBPACK_IMPORTED_MODULE_9__["default"], {
        level: 3,
        inverse: true,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18,
          columnNumber: 13
        }
      }, "\uB450\uC787 \uCF54\uC778 \uAC70\uB798\uC18C")), __jsx(_doit_ui_Modal_context__WEBPACK_IMPORTED_MODULE_10__["Consumer"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22,
          columnNumber: 11
        }
      }, function (_ref) {
        var openModal = _ref.openModal;
        return __jsx(_doit_ui_Button__WEBPACK_IMPORTED_MODULE_11__["default"], {
          inverse: true,
          bold: true,
          large: true,
          onPress: function onPress() {
            return openModal(_constants_modals__WEBPACK_IMPORTED_MODULE_12__["REGISTER_USER_MODAL"], {
              totalAmount: 0
            });
          },
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 24,
            columnNumber: 15
          }
        }, "\uD68C\uC6D0 \uAC00\uC785");
      })));
    }
  }]);

  return AppNav;
}(react__WEBPACK_IMPORTED_MODULE_7__["PureComponent"]);

AppNav.propTypes = _objectSpread({}, _doit_ui_withStyles__WEBPACK_IMPORTED_MODULE_8__["withStylesPropTypes"]);
/* harmony default export */ __webpack_exports__["default"] = (Object(_doit_ui_withStyles__WEBPACK_IMPORTED_MODULE_8__["withStyles"])(function (_ref2) {
  var color = _ref2.color,
      depth = _ref2.depth,
      unit = _ref2.unit;
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

/***/ })

})
//# sourceMappingURL=_app.js.2d5401fc617dbc828893.hot-update.js.map