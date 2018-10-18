'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SAList = exports.SASearch = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Placeholder = require('./Placeholder');

var _Placeholder2 = _interopRequireDefault(_Placeholder);

var _Support = require('../Support');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SAList = function SAList(props) {
  return _react2.default.createElement(_Placeholder2.default, _extends({}, props, { mark: 'SupportList', suppor: _Support.List }));
};
var SASearch = function SASearch(props) {
  return _react2.default.createElement(_Placeholder2.default, _extends({}, props, { mark: 'SupportSearch', suppor: _Support.Search }));
};

exports.SASearch = SASearch;
exports.SAList = SAList;