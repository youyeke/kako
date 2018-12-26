"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _antd = require("antd");

require("./index.css");

var _default = function _default(_ref) {
  var col = _ref.col,
      children = _ref.children;
  return _react.default.createElement(_antd.Row, null, _react.default.Children.map(children, function (child, index) {
    return _react.default.createElement(_antd.Col, {
      sm: col && 24 / col || child.props && child.props.span || 12,
      xs: 24,
      key: index
    }, _react.default.createElement("div", {
      className: "Kako-Layout-FormInline"
    }, child));
  }));
};

exports.default = _default;