"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _antd = require("antd");

var _ListEvenSet = require("../EvenProxy/List/ListEvenSet");

require("./index.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var _default = function _default(props) {
  return _react.default.createElement(_ListEvenSet.Consumer, null, function (context) {
    return _react.default.createElement(ListOperation, _extends({}, props, {
      context: context
    }));
  });
};

exports.default = _default;

var ListOperation = function ListOperation(_ref) {
  var text = _ref.text,
      record = _ref.record,
      index = _ref.index,
      operation = _ref.operation,
      context = _ref.context;

  function actionMap(type, actionOts) {
    type = type.replace(/( |^)[a-z]/g, function (L) {
      return L.toUpperCase();
    });

    if (context["on".concat(type)]) {
      context["on".concat(type)](record, actionOts);
    } else {
      console.warn("\u672A\u6CE8\u518C\u7684\u4E8B\u4EF6\uFF1A on".concat(type));
    }
  }

  return _react.default.createElement(_antd.Dropdown, {
    overlay: renderMemu(record, operation, actionMap),
    trigger: ['click'],
    placement: "bottomRight"
  }, _react.default.createElement(_antd.Icon, {
    style: {
      fontSize: '24px'
    },
    type: "ellipsis"
  }));
};

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