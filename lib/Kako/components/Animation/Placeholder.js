'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _rcQueueAnim = require('rc-queue-anim');

var _rcQueueAnim2 = _interopRequireDefault(_rcQueueAnim);

require('./index.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (props) {
  var ready = props.ready,
      suppor = props.suppor,
      mark = props.mark,
      children = props.children;


  return _react2.default.createElement(
    _rcQueueAnim2.default,
    _extends({
      interval: 0
    }, ready ? {
      animConfig: [{ opacity: [1, 0], translateX: [0, 60] }]
    } : {
      animConfig: [{ opacity: [1, 0], translateY: [0, 40] }]
    }, {
      animatingClassName: ['queue-anim-entering', 'Kako-display-none']
    }),
    ready ? _react2.default.cloneElement(children, {
      key: 'content'
    }) : _react2.default.createElement(suppor, {
      key: mark
    })
  );
};