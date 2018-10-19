"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getMainLayout = getMainLayout;
exports.getItem = getItem;
exports.getFormItem = getFormItem;
exports.setBaseComponentExtends = setBaseComponentExtends;
exports.setLayoutExtends = setLayoutExtends;

var _react = _interopRequireDefault(require("react"));

var _antd = require("antd");

var LayoutSet = _interopRequireWildcard(require("../components/Layout"));

var _Animation = require("../components/Animation");

var BaseComponentSet = _interopRequireWildcard(require("../components/BaseComponent"));

var _getFormItemType = require("./getFormItemType");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var FormItem = _antd.Form.Item;
var extendsComponent = {};
var extendsLayout = {};

function getMainLayout(layoutName) {
  var layoutMap = _objectSpread({}, LayoutSet, extendsLayout);

  return layoutMap[layoutName] || layoutMap['Grid'];
}

function getItem(itemConfig, index, props) {
  var support = itemConfig.support,
      component = itemConfig.component,
      restConfig = _objectWithoutProperties(itemConfig, ["support", "component"]);

  var supportMap = {
    Search: _Animation.SASearch,
    List: _Animation.SAList
  };

  var contentMap = _objectSpread({}, BaseComponentSet, extendsComponent);

  var Support = supportMap[support] || supportMap['Search'];
  var Content = contentMap[component] || contentMap['BaseList'];
  return _react.default.createElement(Support, _extends({}, restConfig, {
    key: index
  }), _react.default.createElement(Content, props));
}

function getFormItem(getFieldDecorator, field) {
  var fieldName = field.field,
      label = field.label,
      value = field.value,
      type = field.type,
      span = field.span,
      rest = _objectWithoutProperties(field, ["field", "label", "value", "type", "span"]);

  return _react.default.createElement(FormItem, {
    key: fieldName,
    label: label || fieldName,
    hasFeedback: true,
    span: span
  }, getFieldDecorator(fieldName, {
    initialValue: value,
    rules: [// { required: true, message: '该项是必填的' }
    ]
  })((0, _getFormItemType.getFormItemType)(type, rest)));
}
/**
 *
 * 对外暴露的方法，用于添加额外的 Base Component 或者覆盖原有的 Base Component
 * @export
 * @param {*} extendsObj
 */


function setBaseComponentExtends(extendsObj) {
  extendsComponent = extendsObj;
}
/**
 *
 * 对外暴露的方法，用于添加额外的 Layout 或者覆盖原有的 Layout
 * @export
 * @param {*} extendsObj
 */


function setLayoutExtends(extendsObj) {
  extendsLayout = extendsObj;
}