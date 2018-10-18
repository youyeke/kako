'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.router = router;

var _queryString = require('query-string');

var _queryString2 = _interopRequireDefault(_queryString);

var _readConfig = require('./readConfig');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var index = 0;
var prevRouterType = '';
var prevPage = [];
var history = [];
var keepLiveCache = {
  // 'default': {
  //   '0': <ReactComonent />
  // }
};

/**
 *
 *
 * @export
 * @param {Object} location
 * @param {Object} config
 * @returns
 */
function router(location, config) {
  var queryObj = _queryString2.default.parse(location.search);

  return renderRoute(switchRoute(queryObj.routerType, config), queryObj.routerType);
}

function switchRoute() {
  var routerType = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'default';
  var config = arguments[1];

  return config[routerType];
}

function renderRoute() {
  var items = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var routerType = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'default';

  if (routerType !== prevRouterType) {
    prevPage = items.map(function (itemConfig, index) {
      if (itemConfig.keepLive === true) {
        ;
      }
      return (0, _readConfig.getItem)(itemConfig, index);
    });
    prevRouterType = prevPage;
  }
  return prevPage;
}