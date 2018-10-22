"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _antd = require("antd");

var _readConfig = require("../../../utils/readConfig");

var _FormEvenProxy = _interopRequireDefault(require("../../EvenProxy/Form/FormEvenProxy"));

var _coreJs = require("core-js");

require("./index.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var BaseForm =
/*#__PURE__*/
function (_Component) {
  _inherits(BaseForm, _Component);

  function BaseForm() {
    _classCallCheck(this, BaseForm);

    return _possibleConstructorReturn(this, _getPrototypeOf(BaseForm).apply(this, arguments));
  }

  _createClass(BaseForm, [{
    key: "render",
    value: function render() {
      return _react.default.createElement(_FormEvenProxy.default, this.props, _react.default.createElement(FormWrapped, null));
    }
  }]);

  return BaseForm;
}(_react.Component);

exports.default = BaseForm;

var FormWrapped =
/*#__PURE__*/
function (_Component2) {
  _inherits(FormWrapped, _Component2);

  function FormWrapped() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, FormWrapped);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(FormWrapped)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleReset", function () {
      _this.props.form.resetFields();

      _this.props.onRefresh();
    });

    return _this;
  }

  _createClass(FormWrapped, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          layout = _this$props.layout,
          form = _this$props.form,
          fields = _this$props.fields;
      var MainLayout = (0, _readConfig.getMainLayout)(layout);
      var getFieldDecorator = form.getFieldDecorator;
      return _react.default.createElement(_antd.Form, {
        layout: "inline"
      }, _react.default.createElement(MainLayout, null, fields.map(function (field) {
        return (0, _readConfig.getFormItem)(getFieldDecorator, field);
      })), _react.default.createElement("div", {
        className: "Kako-BaseForm-textALignRight"
      }, _react.default.createElement(_antd.Button, {
        onClick: this.handleReset
      }, "\u91CD\u7F6E"), _react.default.createElement(_antd.Button, {
        type: "primary",
        htmlType: "submit"
      }, "\u4FDD\u5B58")));
    }
  }]);

  return FormWrapped;
}(_react.Component);

;
FormWrapped = _antd.Form.create({
  mapPropsToFields: function mapPropsToFields(props) {
    var _props$formData = props.formData,
        formData = _props$formData === void 0 ? {} : _props$formData;
    var newFields = {};

    _coreJs.Object.keys(formData).forEach(function (field) {
      newFields[field] = _antd.Form.createFormField({
        value: formData[field]
      });
    });

    return newFields;
  },
  onFieldsChange: function onFieldsChange(props, fields) {
    if (props.onFieldsChange) {
      var changeField = {};

      _coreJs.Object.keys(fields).forEach(function (key) {
        changeField[key] = fields[key].value;
      });

      props.onFieldsChange(changeField);
    }
  }
})(FormWrapped);