import React,{ Component } from 'react';
import { Table } from 'antd';
import { formatTableFields } from '../../../utils/format';

export default class List extends Component{
  render(){
    const { config = {}, listData = [] } = this.props;
    const { fields, options } = config;
    return <>
      <Table
        columns={ formatTableFields(fields,options) }
        dataSource={ listData }
        rowKey="id"
      />
    </>
  }
}