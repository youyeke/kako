"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = {
  layout: 'Grid',
  items: [{
    span: 24,
    layout: 'SearchDefault',
    component: 'BaseSearch',
    config: {
      fields: [{
        field: 'name',
        label: '姓名'
      }, {
        field: 'address',
        label: '联系地址'
      }, {
        field: 'name1',
        label: '姓名'
      }, {
        field: 'address2',
        label: '联系地址'
      }]
    }
  }, {
    span: 24,
    component: 'BaseList',
    config: {
      fields: [{
        field: 'id',
        label: 'ID'
      }, {
        field: 'name',
        label: '姓名'
      }],
      operation: [{
        title: '编辑',
        action: 'edit',
        options: {
          path: '/testPage/form'
        }
      }, {
        title: '删除',
        action: 'delete'
      }]
    }
  }]
};
exports.default = _default;