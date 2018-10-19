import React,{ Component } from 'react';
import { Table } from 'antd';
import FormEvenProxy from '../../EvenProxy/List/ListEvenProxy';

export default class BaseList extends Component{
  render(){
    return <FormEvenProxy { ...this.props }>
      <Table />
    </FormEvenProxy>
  }
}