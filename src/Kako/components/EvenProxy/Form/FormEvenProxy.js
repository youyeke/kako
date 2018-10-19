import React, { Component } from 'react';
import queryString from 'query-string';
import { Provider } from './FormEvenSet';
// import { formatTableFields } from '../../utils/format';

export default class FormEvenProxy extends Component {
  constructor(props){
    super(props);
    this.namespace = props.namespace;
    this.dispatch = props.dispatch;
    this.type = queryString.parse(props.location.search).type;
  }
  componentDidMount(){
    if(this.type === 'edit'){
      this.handleGetData();
    }
  }
  handleGetData = () => {
    const { dispatch, namespace } = this;
    const id = queryString.parse(this.props.location.search).id;

    dispatch({
      type: `${namespace}/getOne`,
      payload: {
        id,
      },
    });
  }
  handleFieldsChange = (fields) => {
    const { dispatch, namespace } = this;
    const { formData = {} } = this.props.modelStatus || {};
    
    dispatch({
      type: `${namespace}/save`,
      payload: {
        formData: {
          ...formData,
          ...fields
        },
      },
    });
  }

  render(){
    const {
      fields = [], layout, modelStatus = {},
      children,
    } = this.props;
    const { formData } = modelStatus || {};

    const evenSet = {
            onRefresh: this.handleGetData,
            onFieldsChange: this.handleFieldsChange,
            onSubmit: this.handleSubmit,
          };
    
    console.log('FormEvenProxy Props:',this.props);
    return <Provider
      value={ evenSet }
    >
      { React.cloneElement(children,{
          fields,
          layout,
          formData,
          onRefresh: this.handleGetData,
          onSubmit: this.handleSubmit,
          onFieldsChange: this.handleFieldsChange,
      }) }
    </Provider>
  }
}