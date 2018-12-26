"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _react = _interopRequireWildcard(require("react"));

var _antd = require("antd");

require("./index.css");

var SearchDefault =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2.default)(SearchDefault, _Component);

  function SearchDefault() {
    (0, _classCallCheck2.default)(this, SearchDefault);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(SearchDefault).apply(this, arguments));
  }

  (0, _createClass2.default)(SearchDefault, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.searchItemEl.scrollHeight > 40) {
        if (this.props.onShowViewMore) {
          this.props.onShowViewMore();
        }
      }
    }
  }, {
    key: "getSearchItemHeight",
    value: function getSearchItemHeight(more) {
      if (more && this.searchItemEl) {
        return this.searchItemEl.scrollHeight;
      }

      return 40;
    }
  }, {
    key: "render",
    value: function render() {
      var _this = this;

      var _this$props = this.props,
          children = _this$props.children,
          _this$props$more = _this$props.more,
          more = _this$props$more === void 0 ? false : _this$props$more;
      var boxStyle = {
        height: "".concat(this.getSearchItemHeight(more), "px")
      };
      return _react.default.createElement("div", {
        ref: function ref(el) {
          return _this.searchItemEl = el;
        },
        style: boxStyle,
        className: "Kako-Layout-SearchDefault"
      }, _react.default.Children.map(children, function (child, index) {
        return child;
      }));
    }
  }]);
  return SearchDefault;
}(_react.Component);

exports.default = SearchDefault;