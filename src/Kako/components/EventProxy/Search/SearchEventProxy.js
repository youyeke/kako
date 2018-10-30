import React, { Component } from 'react';
import queryString from 'query-string';
import { Provider } from './SearchEventSet';

export default class SearchEventProxy extends Component {
  constructor(props){
    super(props);
    this.namespace = props.namespace;
    this.dispatch = props.dispatch;
  }
  handleFieldsChange = (fields) => {
    const { dispatch, namespace } = this;
    const { searchData = {} } = this.props.modelStatus || {};
    
    dispatch({
      type: `${namespace}/save`,
      payload: {
        searchData: {
          ...searchData,
          ...fields
        },
      },
    });
  }

  render(){
    const {
      config = {}, layout, modelStatus = {},
      children,
    } = this.props;
    const { searchData } = modelStatus || {};
    const { fields = [], actions = [] } = config;

    const EventSet = {
            onRefresh: this.handleGetData,
            onFieldsChange: this.handleFieldsChange,
            onSubmit: this.handleSubmit,
          };
    
    console.log('SearchEventProxy Props:',this.props);
    return <Provider
      value={ EventSet }
    >
      { React.cloneElement(children,{
          fields,
          actions,
          layout,
          searchData,
          onRefresh: this.handleGetData,
          onSubmit: this.handleSubmit,
          onFieldsChange: this.handleFieldsChange,
      }) }
    </Provider>
  }
}