import React, { Component } from 'react';
import { Input, Select } from 'antd';
import Number from './Number';

export default {
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
  },
  number: Number,
}