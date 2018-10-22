import React, { Component } from 'react';
import queryString from 'query-string';
import { Provider } from './ListEventSet';
import { formatTableFields } from '../../../utils/format';

export default class ListEventProxy extends Component {
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
  handleDelete = (record) => {
    console.log('on Delete',record);
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

    const EventSet = {
            onCurrentChange: this.handleTableChange,
            onPageSizeChange: this.handleTableChange,
            onRefresh: this.handleTableRefresh,
            onEdit: this.handleEdit,
            onDelete: this.handleDelete,
          };
    
    console.log('ListEventProxy Props:',this.props);
    return <Provider
      value={ EventSet }
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