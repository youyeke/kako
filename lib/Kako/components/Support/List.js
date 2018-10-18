'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

require('./index.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      'div',
      { className: 'Kako-Support-container' },
      _react2.default.createElement(
        'div',
        { className: 'Kako-Support-flex' },
        _react2.default.createElement('div', { className: 'Kako-Support-flex' }),
        _react2.default.createElement('span', { className: 'Kako-Support-button' })
      ),
      _react2.default.createElement('br', null),
      _react2.default.createElement(
        'div',
        { className: 'Kako-Support-flex' },
        _react2.default.createElement('span', { className: 'Kako-Support-table-header' })
      ),
      _react2.default.createElement('div', { className: 'Kako-Support-table-items' }),
      _react2.default.createElement('div', { className: 'Kako-Support-table-items' }),
      _react2.default.createElement('div', { className: 'Kako-Support-table-items' }),
      _react2.default.createElement('div', { className: 'Kako-Support-table-items' })
    )
  );
};