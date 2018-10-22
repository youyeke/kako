import React,{ Component } from 'react';
import { Form, Button } from 'antd';
import { getMainLayout, getFormItem } from '../../../utils/readConfig';
import SearchEventProxy from '../../EventProxy/Search/SearchEventProxy';
import { Object } from 'core-js';
import './index.css';

export default class BaseSearch extends Component{
  render(){
    return <SearchEventProxy { ...this.props }>
      <SearchWrapped />
    </SearchEventProxy>
  }
}

class SearchWrapped extends Component{
  handleReset = () => {
    this.props.form.resetFields();
    this.props.onRefresh();
  }

  render(){
    const { layout, form, fields } = this.props;
    const MainLayout = getMainLayout(layout);
    const { getFieldDecorator } = form;
    return <Form layout="inline">
    <MainLayout>
      { fields.map( field => getFormItem(getFieldDecorator,field) ) }
      <div className="Kako-BaseSearc-operation">
        <Button onClick={ this.handleReset }>重置</Button>
        <Button type="primary" htmlType="submit">搜索</Button>
      </div>
    </MainLayout>
  </Form>
  }
};

SearchWrapped = Form.create({
  mapPropsToFields: (props) => {
    const { formData = {} } = props;
    const newFields = {};
    Object.keys(formData).forEach( field => {
      newFields[field] =  Form.createFormField({
        value: formData[field],
      })
    } )
    return newFields;
  },
  onFieldsChange: (props, fields) => {
    if(props.onFieldsChange){
      const changeField = {};
      Object.keys(fields).forEach( key => {
        changeField[key] = fields[key].value;
      } )
      props.onFieldsChange(changeField);
    }
  }
})(SearchWrapped);