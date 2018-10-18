"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getMainLayout = getMainLayout;
exports.getItem = getItem;
exports.setExtends = setExtends;

var _react = _interopRequireDefault(require("react"));

var _Layout = require("../components/Layout");

var _Animation = require("../components/Animation");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var extendsComponent = {};

function getMainLayout(layoutName) {
  var layoutMap = {
    Grid: _Layout.Grid
  };
  return layoutMap[layoutName] || layoutMap['Grid'];
}

function getItem(itemConfig, index, props) {
  var support = itemConfig.support,
      component = itemConfig.component,
      restConfig = _objectWithoutProperties(itemConfig, ["support", "component"]);

  var _props$ready = props.ready,
      ready = _props$ready === void 0 ? {} : _props$ready;
  var supportMap = {
    Search: _Animation.SASearch,
    List: _Animation.SAList
  };

  var contentMap = _objectSpread({
    Search: function Search() {
      return _react.default.createElement("div", null, "Search");
    },
    List: function List() {
      return _react.default.createElement("div", null, "List");
    }
  }, extendsComponent);

  var Support = supportMap[support] || supportMap['Search'];
  var Content = contentMap[component] || contentMap['List'];
  return _react.default.createElement(Support, _extends({
    ready: ready[index]
  }, restConfig, {
    key: index
  }), _react.default.createElement(Content, props));
}

function setExtends(extendsObj) {
  extendsComponent = extendsObj;
}