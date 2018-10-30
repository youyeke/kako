import React,{ Component } from 'react';
import { Form, Button } from 'antd';
import { getMainLayout, getFormItem } from '../../../utils/readConfig';
import FormEventProxy from '../../EventProxy/Form/FormEventProxy';
import { Object } from 'core-js';
import './index.css';

export default class BaseForm extends Component{
  render(){
    return <FormEventProxy { ...this.props }>
      <FormWrapped />
    </FormEventProxy>
  }
}

class FormWrapped extends Component{
  handleReset = () => {
    this.props.form.resetFields();
    this.props.onRefresh();
  }
  handleOnSubmit = (e) => {
    e.preventDefault();
    const { form, onSubmit } = this.props;
    form.validateFields((err, values) => {
      if (!err) {
        onSubmit(values);
      }
    });
  }

  render(){
    const { layout, form, fields } = this.props;
    const MainLayout = getMainLayout(layout);
    const { getFieldDecorator } = form;
    return <Form layout="inline" onSubmit={ this.handleOnSubmit }>
    <MainLayout>
      { fields.map( field => getFormItem(getFieldDecorator,field) ) }
    </MainLayout>
    <div className="Kako-BaseForm-textALignRight">
      <Button onClick={ this.handleReset }>重置</Button>
      <Button type="primary" htmlType="submit">保存</Button>
    </div>
  </Form>
  }
};

FormWrapped = Form.create({
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
})(FormWrapped);