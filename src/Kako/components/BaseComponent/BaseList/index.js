import React,{ Component } from 'react';
import { Table } from 'antd';
import ListEventProxy from '../../EventProxy/List/ListEventProxy';

export default class BaseList extends Component{
  render(){
    return <ListEventProxy { ...this.props }>
      <Table />
    </ListEventProxy>
  }
}