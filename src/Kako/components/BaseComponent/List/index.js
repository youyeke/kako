import React,{ Component } from 'react';
import { Table } from 'antd';
import ListEvenProxy from '../../EvenProxy/ListEvenProxy';
import { formatTableFields } from '../../../utils/format';

export default class List extends Component{
  render(){
    const {
      config = {}, listData = {},
      onCurrentChange,
      onPageSizeChange,
    } = this.props;
    const { fields, options, pagination = true } = config;
    const { data = [], ...restListProps } = listData;

    const paginationProps = pagination ?
          {
            ...restListProps, // current, pageSize, total
            onChange: onCurrentChange,
            onShowSizeChange: onPageSizeChange,
            showQuickJumper: true,
            showSizeChanger: true,
          }
          : false;

    return <ListEvenProxy>
      <Table
        columns={ formatTableFields(fields,options) }
        dataSource={ data }
        rowKey="id"
        pagination={ paginationProps }
      />
    </ListEvenProxy>
  }
}