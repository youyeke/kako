"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _rcQueueAnim = _interopRequireDefault(require("rc-queue-anim"));

require("./index.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var _default = function _default(props) {
  var _props$ready = props.ready,
      ready = _props$ready === void 0 ? false : _props$ready,
      suppor = props.suppor,
      mark = props.mark,
      children = props.children;
  return _react.default.createElement(_rcQueueAnim.default, _extends({
    interval: 0
  }, ready ? {
    animConfig: [{
      opacity: [1, 0],
      translateX: [0, 60]
    }]
  } : {
    animConfig: [{
      opacity: [1, 0],
      translateY: [0, 40]
    }]
  }, {
    animatingClassName: ['queue-anim-entering', 'Kako-display-none']
  }), ready ? _react.default.cloneElement(children, {
    key: 'content'
  }) : _react.default.createElement(suppor, {
    key: mark
  }));
};

exports.default = _default;