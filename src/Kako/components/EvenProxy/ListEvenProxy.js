import React, { Component } from 'react';
import { Provider } from './ListEvenSet';

export default class ListEvenProxy extends Component {
  constructor(props){
    super(props);
    this.namespace = props.namespace;
    this.dispatch = props.dispatch;
  }
  componentDidMount(){
    this.handleGetListData(1, 10);
  }

  handleGetListData = (current,pageSize) => {
    const { dispatch, namespace } = this;

    dispatch({
      type: `${namespace}/getList`,
      payload: {
        current,
        pageSize,
      },
    });
  }
  handleTableChange = (current,pageSize) => {
    this.handleGetListData(current,pageSize);
  }
  handleTableRefresh = () => {
    const { listData = {} } = this.props.modelStatus;
    const { current = 1, pageSize = 10 } = listData;
    this.handleGetListData(current,pageSize);
  }
  handleEdit = (record,options) => {
    console.log('on Edit',record,options);
  }

  render(){
    const { children } = this.props;
    const evenSet = {
      onCurrentChange: this.handleTableChange,
      onPageSizeChange: this.handleTableChange,
      onRefresh: this.handleTableRefresh,
      onEdit: this.handleEdit,
    };
    return <Provider
      value={ evenSet }
    >
      { React.cloneElement(children,{
        onCurrentChange: this.handleTableChange,
        onPageSizeChange: this.handleTableChange,
      }) }
    </Provider>
  }
}