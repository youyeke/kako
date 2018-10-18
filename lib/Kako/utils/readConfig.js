'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.getMainLayout = getMainLayout;
exports.getItem = getItem;
exports.setExtends = setExtends;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Layout = require('../components/Layout');

var _Animation = require('../components/Animation');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var extendsComponent = {};

function getMainLayout(layoutName) {
  var layoutMap = {
    Grid: _Layout.Grid
  };
  return layoutMap[layoutName] || layoutMap['Grid'];
}

function getItem(itemConfig, index) {
  var support = itemConfig.support,
      component = itemConfig.component,
      restConfig = _objectWithoutProperties(itemConfig, ['support', 'component']);

  var supportMap = {
    search: _Animation.SASearch,
    list: _Animation.SAList
  };
  var contentMap = _extends({
    Search: function Search() {
      return _react2.default.createElement(
        'div',
        null,
        'Search'
      );
    },
    List: function List() {
      return _react2.default.createElement(
        'div',
        null,
        'List'
      );
    }
  }, extendsComponent);
  var Support = supportMap[support] || supportMap['list'];
  var Content = contentMap[component] || contentMap['List'];
  return _react2.default.createElement(
    Support,
    _extends({}, restConfig, { key: index }),
    _react2.default.createElement(Content, null)
  );
}

function setExtends(extendsObj) {
  extendsComponent = extendsObj;
}