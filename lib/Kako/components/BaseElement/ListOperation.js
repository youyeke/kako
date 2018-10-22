"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _antd = require("antd");

var _ListEvenSet = require("../EvenProxy/List/ListEvenSet");

require("./index.css");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var _default = function _default(props) {
  return _react.default.createElement(_ListEvenSet.Consumer, null, function (context) {
    return _react.default.createElement(ListOperation, _extends({}, props, {
      context: context
    }));
  });
};

exports.default = _default;

var ListOperation =
/*#__PURE__*/
function (_Component) {
  _inherits(ListOperation, _Component);

  function ListOperation() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, ListOperation);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(ListOperation)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      visible: false
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "actionMap", function (type, actionOts) {
      var _this$props = _this.props,
          text = _this$props.text,
          record = _this$props.record,
          index = _this$props.index,
          operation = _this$props.operation,
          context = _this$props.context;
      type = type.replace(/( |^)[a-z]/g, function (L) {
        return L.toUpperCase();
      });

      if (context["on".concat(type)]) {
        if (type === 'Delete') {
          _this.setState({
            visible: true
          });
        } else {
          context["on".concat(type)](record, actionOts);
        }
      } else {
        console.warn("\u672A\u6CE8\u518C\u7684\u4E8B\u4EF6\uFF1A on".concat(type));
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleCancel", function () {
      _this.setState({
        visible: false
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleConfirm", function () {
      var _this$props2 = _this.props,
          record = _this$props2.record,
          context = _this$props2.context;
      context["onDelete"](record);

      _this.handleCancel();
    });

    return _this;
  }

  _createClass(ListOperation, [{
    key: "render",
    value: function render() {
      var _this$props3 = this.props,
          record = _this$props3.record,
          operation = _this$props3.operation;
      var visible = this.state.visible;
      var popconfirmProps = {
        title: '确定要删除该项吗？',
        visible: visible,
        onCancel: this.handleCancel,
        onConfirm: this.handleConfirm
      };
      return _react.default.createElement(_antd.Popconfirm, popconfirmProps, _react.default.createElement(_antd.Dropdown, {
        overlay: renderMemu(record, operation, this.actionMap),
        trigger: ['click'],
        placement: "bottomRight"
      }, _react.default.createElement(_antd.Icon, {
        style: {
          fontSize: '24px'
        },
        type: "ellipsis"
      })));
    }
  }]);

  return ListOperation;
}(_react.Component); // const ListOperation = ({ text, record, index, operation, context }) => {
//   function actionMap(type, actionOts) {
//     type = type.replace(/( |^)[a-z]/g, (L) => L.toUpperCase());
//     if( context[`on${type}`] ){
//       context[`on${type}`](record,actionOts);
//     }else{
//       console.warn(`未注册的事件： on${type}`)
//     }
//   }
//   return 
// }


function renderMemu(record, operation, actionMap) {
  var menuItemList = operation.map(function (v, i, a) {
    v.options = v.options || {};
    return operationMap['defaults'].bind(null, v, i, a, record, actionMap)();
  }).filter(function (item) {
    return item;
  });

  if (menuItemList.length === 0) {
    menuItemList.push(_react.default.createElement(_antd.Menu.Item, {
      key: "99",
      disabled: true
    }, "\u6682\u65E0"));
  }

  var menu = _react.default.createElement(_antd.Menu, null, menuItemList);

  return menu;
}

var operationMap = {
  'defaults': function defaults(v, i, a, record, actionMap) {
    if (!testValue(record, v.options)) {
      return null;
    }

    var iconMap = {
      'edit': 'form',
      'query': 'file-text',
      'delete': 'delete',
      'default': 'right'
    };
    var iconColorMap = {
      'edit': '#1890ff',
      'query': '#666',
      'delete': '#f5222d',
      'default': '#666'
    };
    return _react.default.createElement(_antd.Menu.Item, {
      key: i,
      className: "Kako-table-action-menuItem",
      onClick: actionMap.bind(null, v.action, v.options)
    }, _react.default.createElement("span", null, _react.default.createElement(_antd.Icon, {
      type: iconMap[v.action] || iconMap['default'],
      style: {
        color: "".concat(iconColorMap[v.action] || iconColorMap['default'])
      }
    }), v.title));
  } // 检测该行数据的字段的值 是否符合预期

};

function testValue(record, options) {
  var rulesMap = {
    'IS_NOT_NULL': /\S+/g
  };
  var expectedField = options.expectedField,
      expectedValue = options.expectedValue;
  var fieldList = expectedField instanceof Array ? expectedField : [expectedField];
  var valueList = expectedValue instanceof Array ? expectedValue : [expectedValue];
  return fieldList.every(function (field, i) {
    var value = valueList[i]; // 若不是简单的相等关系的话

    if (record[field] !== value) {
      // 先看看 expectedValue 是不是预设关键字
      if (rulesMap[value]) {
        if (!rulesMap[value].test(record[field])) {
          return false;
        }
      } else {
        // 再看看 expectedValue 是不是传入了正则表达式
        try {
          value = new RegExp(value, 'g');
        } catch (error) {
          return false;
        }

        if (value instanceof RegExp) {
          if (!value.test(record[field])) {
            return false;
          }
        } else {
          return false;
        }
      }
    }

    return true;
  });
}