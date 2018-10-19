import React, { Component } from 'react';
import queryString from 'query-string';
import { Provider } from './ListEvenSet';
import { formatTableFields } from '../../../utils/format';

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
    }).then( (rst) => {
      // TODO set ready status
    } );
  }
  handleTableChange = (current,pageSize) => {
    this.handleGetListData(current,pageSize);
  }
  handleTableRefresh = () => {
    const { listData = {} } = this.props.modelStatus;
    const { current = 1, pageSize = 10 } = listData;
    this.handleGetListData(current,pageSize);
  }
  handleEdit = (record,options = {}) => {
    const { history } = this.props;
    const { path, field = 'id' } = options;
    if(history && path){
      history.push({
        pathname: path,
        search: queryString.stringify({
          type: 'edit',
          id: record[field],
        }),
      });
    }
    console.log('on Edit',record,options);
  }

  render(){
    const {
      config = {}, modelStatus = {},
      children,
    } = this.props;
    const { fields, operation, pagination = true } = config;
    const { data = [], ...restListProps } = modelStatus.listData || {};

    const paginationProps = pagination ?
          {
            ...restListProps, // current, pageSize, total
            onChange: this.handleTableChange,
            onShowSizeChange: this.handleTableChange,
            showQuickJumper: true,
            showSizeChanger: true,
          }
          : false;

    const evenSet = {
            onCurrentChange: this.handleTableChange,
            onPageSizeChange: this.handleTableChange,
            onRefresh: this.handleTableRefresh,
            onEdit: this.handleEdit,
          };
    
    console.log('ListEvenProxy Props:',this.props);
    return <Provider
      value={ evenSet }
    >
      { React.cloneElement(children,{
        rowKey: 'id',
        columns: formatTableFields(fields,operation),
        dataSource: data,
        pagination: paginationProps,
      }) }
    </Provider>
  }
}