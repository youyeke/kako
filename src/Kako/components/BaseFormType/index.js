import React, { Component } from 'react';
import { Input, Select, Radio } from 'antd';
import Number from './Number';
import TextArea from './TextArea';
import Group from './Group';

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
  radio: class RadioWrapped extends Component {
    render() {
      const { options = [], ...restProps } = this.props;
      return <Radio.Group {...restProps}>
        {options.map((option, i) =>
          <Radio value={option.value} key={i}>
            {option.title}
          </Radio>)}
      </Radio.Group>;
    }
  },
  number: Number,
  textArea: TextArea,
  group: Group,
}