import React, { Component } from 'react';
import { Provider } from './SearchEventSet';
import { getPageContext } from '../PageContext';

export default class SearchEventProxy extends Component {
  constructor(props) {
    super(props);
  }
  handleFieldsChange = (fields) => {
    const { dispatch, modelStatus } = this.props;
    const { searchData = {} } = modelStatus || {};

    dispatch.save({
      payload: {
        searchData: {
          ...searchData,
          ...fields
        },
      }
    })
  }
  handleRefresh = () => {
    const pageContext = getPageContext();
    if(pageContext.listRefresh){
      pageContext.listRefresh();
    }
  }
  handleSubmit = (values) => {
    const pageContext = getPageContext();
    if(pageContext.listFetch){
      pageContext.listFetch({},values);
    }
  }

  render() {
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

    console.log('SearchEventProxy Props:', this.props);
    return <Provider
      value={EventSet}
    >
      {React.cloneElement(children, {
        fields,
        actions,
        layout,
        searchData,
        onRefresh: this.handleRefresh,
        onSubmit: this.handleSubmit,
        onFieldsChange: this.handleFieldsChange,
      })}
    </Provider>
  }
}