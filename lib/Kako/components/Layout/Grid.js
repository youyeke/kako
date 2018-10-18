'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _antd = require('antd');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (_ref) {
  var children = _ref.children;

  return _react2.default.createElement(
    _antd.Row,
    null,
    _react2.default.Children.map(children, function (child, index) {
      return _react2.default.createElement(
        _antd.Col,
        { sm: child.props.span, xs: 24 },
        child
      );
    })
  );
};