'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _readConfig = require('./utils/readConfig');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Kako = function (_Component) {
  _inherits(Kako, _Component);

  function Kako() {
    _classCallCheck(this, Kako);

    return _possibleConstructorReturn(this, (Kako.__proto__ || Object.getPrototypeOf(Kako)).apply(this, arguments));
  }

  _createClass(Kako, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          config = _props.config,
          restProps = _objectWithoutProperties(_props, ['config']);

      var MainLayout = (0, _readConfig.getMainLayout)(config.layout);
      return _react2.default.createElement(
        MainLayout,
        { key: 'mainLayout' },
        config.items.map(function (itemCfg, index) {
          return (0, _readConfig.getItem)(itemCfg, index);
        })
      );
    }
  }]);

  return Kako;
}(_react.Component);

exports.default = Kako;