"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SAList = exports.SASearch = void 0;

var _react = _interopRequireDefault(require("react"));

var _Placeholder = _interopRequireDefault(require("./Placeholder"));

var _Support = require("../Support");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SAList = function SAList(props) {
  return _react.default.createElement(_Placeholder.default, _extends({}, props, {
    mark: "SupportList",
    suppor: _Support.List
  }));
};

exports.SAList = SAList;

var SASearch = function SASearch(props) {
  return _react.default.createElement(_Placeholder.default, _extends({}, props, {
    mark: "SupportSearch",
    suppor: _Support.Search
  }));
};

exports.SASearch = SASearch;