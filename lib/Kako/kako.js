"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _react = _interopRequireWildcard(require("react"));

var _readConfig = require("./utils/readConfig");

var Kako =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2.default)(Kako, _Component);

  function Kako() {
    (0, _classCallCheck2.default)(this, Kako);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Kako).apply(this, arguments));
  }

  (0, _createClass2.default)(Kako, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          config = _this$props.config,
          restProps = (0, _objectWithoutProperties2.default)(_this$props, ["config"]);
      var MainLayout = (0, _readConfig.getMainLayout)(config.layout);
      return _react.default.createElement(MainLayout, (0, _extends2.default)({
        key: "mainLayout"
      }, config.config || {}), config.items && config.items.map(function (itemCfg, index) {
        return (0, _readConfig.getItem)(itemCfg, index, restProps);
      }));
    }
  }]);
  return Kako;
}(_react.Component);

exports.default = Kako;