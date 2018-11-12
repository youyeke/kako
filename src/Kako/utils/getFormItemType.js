import React, { Component } from 'react';
import { Input, Select } from 'antd';

let extendsFormItemType = {};
const baseType = {
  input: Input,
  select: class SelectWrapped extends Component {
    render() {
      const { options = [], ...restProps } = this.props;
      return <Select {...restProps}>
        {options.map((option, i) =>
          <Select.Option value={option.value} key={i}>
            {option.title}
          </Select.Option>)}
      </Select>;
    }
  }
};

export function getFormItemType(type, props) {
  // props : placeholder styles className ...
  const typeMap = {
    ...baseType,
    ...extendsFormItemType,
  };
  const MatchType = typeMap[type] || typeMap['input'];
  return <MatchType {...props} />;
}
export function setFormItemTypeExtends(extendsObj) {
  extendsFormItemType = {
    ...extendsFormItemType,
    ...extendsObj,
  };
}