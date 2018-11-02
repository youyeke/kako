import React from 'react';
import { Form, Button } from 'antd';
import * as LayoutSet from '../components/Layout';
import { BaseEnter } from '../components/Animation';

import { getFormItemType } from './getFormItemType';

const FormItem = Form.Item;

let extendsComponent = {};
let extendsLayout = {};

export function getMainLayout(layoutName) {
  const layoutMap = {
    ...LayoutSet,
    ...extendsLayout,
  };
  return layoutMap[layoutName] || layoutMap['Grid'];
}

export function getItem(itemConfig, index, props) {
  const { component, ...restConfig } = itemConfig;
  const contentMap = {
    ...extendsComponent,
  };
  const Content = contentMap[component] || contentMap['BaseList'];
  return <BaseEnter {...restConfig} key={index}>
    <Content {...props} />
  </BaseEnter>
}

export function getFormItem(getFieldDecorator, field) {
  const { field: fieldName, label, value, type, span, ...rest } = field;
  return <FormItem
    key={fieldName}
    label={label || fieldName}
    hasFeedback={true}
    span={span}
  >
    {getFieldDecorator(fieldName, {
      initialValue: value,
      rules: [
        // { required: true, message: '该项是必填的' }
      ],
    })(
      getFormItemType(type, rest)
    )}
  </FormItem>
}

/**
 *
 * 对外暴露的方法，用于添加额外的 Base Component 或者覆盖原有的 Base Component
 * @export
 * @param {*} extendsObj
 */
export function setBaseComponentExtends(extendsObj) {
  extendsComponent = {
    ...extendsComponent,
    ...extendsObj,
  };
}

/**
 *
 * 对外暴露的方法，用于添加额外的 Layout 或者覆盖原有的 Layout
 * @export
 * @param {*} extendsObj
 */
export function setLayoutExtends(extendsObj) {
  extendsLayout = {
    ...extendsLayout,
    ...extendsObj,
  };
}