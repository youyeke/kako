import React, { Component } from 'react';
import queryString from 'query-string';
import { Provider } from './FormEventSet';
// import { formatTableFields } from '../../utils/format';

export default class FormEventProxy extends Component {
  constructor(props) {
    super(props);

    const { getAPI, createAPI, updateAPI } = props;
    props.dispatch.setAPI('getAPI', getAPI);
    props.dispatch.setAPI('createAPI', createAPI);
    props.dispatch.setAPI('updateAPI', updateAPI);

    this.type = queryString.parse(props.location.search.replace('?','')).type;
  }
  componentDidMount() {
    if (this.type === 'edit') {
      this.handleGetData();
    }
  }
  handleGetData = () => {
    const { dispatch } = this.props;
    const id = queryString.parse(this.props.location.search.replace('?','')).id;

    dispatch.fetchOne({
      payload: {
        id,
      }
    })
  }
  handleFieldsChange = (fields) => {
    const { dispatch } = this.props;
    const { formData = {} } = this.props.modelStatus || {};

    dispatch.save({
      payload: {
        formData: {
          ...formData,
          ...fields
        },
      }
    });
  }

  render() {
    const {
      config = {}, layout, modelStatus = {},
      children,
    } = this.props;
    const { formData } = modelStatus || {};
    const { fields = [] } = config;

    const EventSet = {
      onRefresh: this.handleGetData,
      onFieldsChange: this.handleFieldsChange,
      onSubmit: this.handleSubmit,
    };

    console.log('FormEventProxy Props:', this.props);
    return <Provider
      value={EventSet}
    >
      {React.cloneElement(children, {
        fields,
        layout,
        formData,
        onRefresh: this.handleGetData,
        onSubmit: this.handleSubmit,
        onFieldsChange: this.handleFieldsChange,
      })}
    </Provider>
  }
}