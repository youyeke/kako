"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _queryString = _interopRequireDefault(require("query-string"));

var _SearchEventSet = require("./SearchEventSet");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var SearchEventProxy =
/*#__PURE__*/
function (_Component) {
  _inherits(SearchEventProxy, _Component);

  function SearchEventProxy(props) {
    var _this;

    _classCallCheck(this, SearchEventProxy);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(SearchEventProxy).call(this, props));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleFieldsChange", function (fields) {
      var _assertThisInitialize = _assertThisInitialized(_assertThisInitialized(_this)),
          dispatch = _assertThisInitialize.dispatch,
          namespace = _assertThisInitialize.namespace;

      var _ref = _this.props.modelStatus || {},
          _ref$searchData = _ref.searchData,
          searchData = _ref$searchData === void 0 ? {} : _ref$searchData;

      dispatch({
        type: "".concat(namespace, "/save"),
        payload: {
          searchData: _objectSpread({}, searchData, fields)
        }
      });
    });

    _this.namespace = props.namespace;
    _this.dispatch = props.dispatch;
    return _this;
  }

  _createClass(SearchEventProxy, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          _this$props$config = _this$props.config,
          config = _this$props$config === void 0 ? {} : _this$props$config,
          layout = _this$props.layout,
          _this$props$modelStat = _this$props.modelStatus,
          modelStatus = _this$props$modelStat === void 0 ? {} : _this$props$modelStat,
          children = _this$props.children;

      var _ref2 = modelStatus || {},
          searchData = _ref2.searchData;

      var _config$fields = config.fields,
          fields = _config$fields === void 0 ? [] : _config$fields;
      var EventSet = {
        onRefresh: this.handleGetData,
        onFieldsChange: this.handleFieldsChange,
        onSubmit: this.handleSubmit
      };
      console.log('SearchEventProxy Props:', this.props);
      return _react.default.createElement(_SearchEventSet.Provider, {
        value: EventSet
      }, _react.default.cloneElement(children, {
        fields: fields,
        layout: layout,
        searchData: searchData,
        onRefresh: this.handleGetData,
        onSubmit: this.handleSubmit,
        onFieldsChange: this.handleFieldsChange
      }));
    }
  }]);

  return SearchEventProxy;
}(_react.Component);

exports.default = SearchEventProxy;