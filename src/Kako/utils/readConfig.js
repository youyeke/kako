import React from 'react';
import { Form, Input } from 'antd';
import * as LayoutSet from '../components/Layout';
import { SASearch, SAList } from '../components/Animation';
import * as BaseComponentSet from '../components/BaseComponent';

import { getFormItemType } from './getFormItemType';

const FormItem = Form.Item;

let extendsComponent = {};
let extendsLayout = {};

export function getMainLayout(layoutName){
  const layoutMap = {
    ...LayoutSet,
    ...extendsLayout,
  };
  return layoutMap[layoutName] || layoutMap['Grid'];
}

export function getItem(itemConfig,index,props){
  const { support, component, ...restConfig } = itemConfig;
  const supportMap = {
    Search: SASearch,
    List: SAList,
  };
  const contentMap = {
    ...BaseComponentSet,
    ...extendsComponent,
  };
  const Support = supportMap[support] || supportMap['Search'];
  const Content = contentMap[component] || contentMap['BaseList'];
  return <Support { ...restConfig } key={ index }>
    <Content { ...props } />
  </Support>;
}

export function getFormItem(getFieldDecorator,field){
  const { field: fieldName, label, value, type, span, ...rest } = field;
  return <FormItem
          key={ fieldName }
          label={ label || fieldName }
          hasFeedback={ true }
          span={ span }
        >
          {getFieldDecorator( fieldName , {
            initialValue: value,
            rules: [
              // { required: true, message: '该项是必填的' }
            ],
          })(
            getFormItemType(type,rest)
          )}
  </FormItem>
}

/**
 *
 * 对外暴露的方法，用于添加额外的 Base Component 或者覆盖原有的 Base Component
 * @export
 * @param {*} extendsObj
 */
export function setBaseComponentExtends(extendsObj){
  extendsComponent = extendsObj;
}

/**
 *
 * 对外暴露的方法，用于添加额外的 Layout 或者覆盖原有的 Layout
 * @export
 * @param {*} extendsObj
 */
export function setLayoutExtends(extendsObj){
  extendsLayout = extendsObj;
}