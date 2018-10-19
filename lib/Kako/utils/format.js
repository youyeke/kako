"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.formatTableFields = formatTableFields;

var _react = _interopRequireDefault(require("react"));

var _BaseElement = require("../components/BaseElement");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/**
 *
 * 统一 Table columns 的格式
 * @export
 * @param {array} fields 标准化的 fields
 * @param {array} operation 对该行的操作
 * @returns antd Table columns
 */
function formatTableFields() {
  var fields = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var operation = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  var rst = fields.map(function (fieldCfg) {
    var field = fieldCfg.field,
        label = fieldCfg.label,
        rest = _objectWithoutProperties(fieldCfg, ["field", "label"]);

    return _objectSpread({
      dataIndex: field,
      title: label
    }, rest);
  });

  if (operation.length > 0) {
    rst.push({
      dataIndex: 'operation',
      title: '',
      width: 30,
      render: function render(text, record, index) {
        return _react.default.createElement(_BaseElement.ListOperation, {
          text: text,
          record: record,
          index: index,
          operation: operation
        });
      }
    });
  }

  return rst;
}