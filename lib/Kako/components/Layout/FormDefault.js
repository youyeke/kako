"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _antd = require("antd");

require("./index.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = function _default(_ref) {
  var children = _ref.children;
  return _react.default.createElement(_antd.Row, null, _react.default.Children.map(children, function (child, index) {
    return _react.default.createElement(_antd.Col, {
      sm: 12,
      xs: 24,
      key: index
    }, _react.default.createElement("div", {
      className: "Kako-Layout-FormDefault"
    }, child));
  }));
};

exports.default = _default;