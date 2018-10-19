"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _queryString = _interopRequireDefault(require("query-string"));

var _ListEvenSet = require("./ListEvenSet");

var _format = require("../../../utils/format");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var ListEvenProxy =
/*#__PURE__*/
function (_Component) {
  _inherits(ListEvenProxy, _Component);

  function ListEvenProxy(props) {
    var _this;

    _classCallCheck(this, ListEvenProxy);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ListEvenProxy).call(this, props));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleGetListData", function (current, pageSize) {
      var _assertThisInitialize = _assertThisInitialized(_assertThisInitialized(_this)),
          dispatch = _assertThisInitialize.dispatch,
          namespace = _assertThisInitialize.namespace;

      dispatch({
        type: "".concat(namespace, "/getList"),
        payload: {
          current: current,
          pageSize: pageSize
        }
      }).then(function (rst) {// TODO set ready status
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleTableChange", function (current, pageSize) {
      _this.handleGetListData(current, pageSize);
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleTableRefresh", function () {
      var _this$props$modelStat = _this.props.modelStatus.listData,
          listData = _this$props$modelStat === void 0 ? {} : _this$props$modelStat;
      var _listData$current = listData.current,
          current = _listData$current === void 0 ? 1 : _listData$current,
          _listData$pageSize = listData.pageSize,
          pageSize = _listData$pageSize === void 0 ? 10 : _listData$pageSize;

      _this.handleGetListData(current, pageSize);
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleEdit", function (record) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var history = _this.props.history;
      var path = options.path,
          _options$field = options.field,
          field = _options$field === void 0 ? 'id' : _options$field;

      if (history && path) {
        history.push({
          pathname: path,
          search: _queryString.default.stringify({
            type: 'edit',
            id: record[field]
          })
        });
      }

      console.log('on Edit', record, options);
    });

    _this.namespace = props.namespace;
    _this.dispatch = props.dispatch;
    return _this;
  }

  _createClass(ListEvenProxy, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.handleGetListData(1, 10);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          _this$props$config = _this$props.config,
          config = _this$props$config === void 0 ? {} : _this$props$config,
          _this$props$modelStat2 = _this$props.modelStatus,
          modelStatus = _this$props$modelStat2 === void 0 ? {} : _this$props$modelStat2,
          children = _this$props.children;
      var fields = config.fields,
          operation = config.operation,
          _config$pagination = config.pagination,
          pagination = _config$pagination === void 0 ? true : _config$pagination;

      var _ref = modelStatus.listData || {},
          _ref$data = _ref.data,
          data = _ref$data === void 0 ? [] : _ref$data,
          restListProps = _objectWithoutProperties(_ref, ["data"]);

      var paginationProps = pagination ? _objectSpread({}, restListProps, {
        // current, pageSize, total
        onChange: this.handleTableChange,
        onShowSizeChange: this.handleTableChange,
        showQuickJumper: true,
        showSizeChanger: true
      }) : false;
      var evenSet = {
        onCurrentChange: this.handleTableChange,
        onPageSizeChange: this.handleTableChange,
        onRefresh: this.handleTableRefresh,
        onEdit: this.handleEdit
      };
      console.log('ListEvenProxy Props:', this.props);
      return _react.default.createElement(_ListEvenSet.Provider, {
        value: evenSet
      }, _react.default.cloneElement(children, {
        rowKey: 'id',
        columns: (0, _format.formatTableFields)(fields, operation),
        dataSource: data,
        pagination: paginationProps
      }));
    }
  }]);

  return ListEvenProxy;
}(_react.Component);

exports.default = ListEvenProxy;