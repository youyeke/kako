import React, { Component } from 'react';
import { DatePicker } from 'antd';
import moment from 'moment';
import styles from './index.css';

const { WeekPicker, MonthPicker } = DatePicker;
const componentMap = {
  'date': DatePicker,
  'week': WeekPicker,
  'month': MonthPicker,
};
const formatMap = {
  'date': 'YYYY-MM-DD',
  'week': 'YYYY-W',
  'month': 'YYYY-MM',
}

export default (componentName) => {
  const Match = componentMap[componentName];
  return class DateWrapped extends Component {
    constructor(props) {
      super(props);
      const { value, options = {} } = props;
      const { nowTime = true } = options;
      this.state = {
        originalValue: value,
        value: initTime({
          value,
          nowTime,
        }),
      }
    }
    static getDerivedStateFromProps(nextProps, prevState) {
      if (prevState.originalValue !== nextProps.value) {
        const { value, options = {} } = nextProps;
        const { nowTime = true } = options;
        return {
          originalValue: value,
          value: initTime({
            value,
            nowTime,
          }),
        };
      }
      return null;
    }
    componentDidMount() {
      const { originalValue, value } = this.state;

      // 初始值为空且 nowTime !== false 的情况下，保存当前时间到 model
      if (!originalValue && value) {
        const { onChange, options = {} } = this.props;
        const { format = formatMap[componentName] } = options;

        onChange(value.format(format));
      }
    }

    onChange = (moment, dateString) => {
      const { onChange, options = {} } = this.props;
      if (onChange) {
        onChange(dateString);
      }
    }
    render() {
      const { options = {}, ...restProps } = this.props;
      const { format = formatMap[componentName] } = options;
      const { value } = this.state;
      const props = {
        showToday: true,
        ...restProps,
        value,
        format,
        allowClear: false,
        onChange: this.onChange,
      };

      return <Match {...props} />;
    }
  };
}

function initTime({ value, nowTime }) {
  if (value instanceof moment) {
    return value;
  }
  if (value) {
    return moment(value);
  } else {
    return nowTime ? moment() : undefined;
  }
}