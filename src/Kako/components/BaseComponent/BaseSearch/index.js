import React, { Component } from 'react';
import { Flex } from '../../Layout';
import { Form, Button, Icon } from 'antd';
import { getMainLayout, getFormItem } from '../../../utils/readConfig';
import SearchEventProxy from '../../EventProxy/Search/SearchEventProxy';
import ListAction from '../../BaseElement/ListAction';
import { Object } from 'core-js';
import './index.css';

const { FlexItem } = Flex;

export default class BaseSearch extends Component {
  render() {
    return <SearchEventProxy {...this.props}>
      <SearchWrapped />
    </SearchEventProxy>
  }
}

class SearchWrapped extends Component {
  state = {
    visibleViewMore: false,
    more: false,
  }
  onShowViewMore = () => {
    this.setState({
      visibleViewMore: true,
    });
  }
  switchViewMore = () => {
    this.setState({
      more: !this.state.more,
    });
  }
  handleReset = () => {
    this.props.form.resetFields();
    this.props.onRefresh();
  }

  render() {
    const { layout, form, fields, actions } = this.props;
    const { visibleViewMore, more } = this.state;
    const MainLayout = getMainLayout(layout);
    const { getFieldDecorator } = form;

    return <Form layout="inline">
      <Flex align="flex-start">
        <FlexItem flex={ 1 }>
          <MainLayout more={more} onShowViewMore={this.onShowViewMore}>
            <Flex align="flex-start">
              <FlexItem>
                {fields.map(field => getFormItem(getFieldDecorator, field))}
              </FlexItem>
              <FlexItem flex={1}>
                <div className="Kako-BaseSearc-operation">
                  <Button onClick={this.handleReset}>重置</Button>
                  <Button type="primary" htmlType="submit">搜索</Button>
                  {visibleViewMore ?
                    (
                      <span onClick={this.switchViewMore} className="Kako-BaseSearc-viewMore">
                        {more ? (
                          <span> 收起 <Icon type="up" theme="outlined" /></span>
                        )
                          : (
                            <span> 展开 <Icon type="down" theme="outlined" /></span>
                          )
                        }
                      </span>
                    )
                    : null
                  }
                </div>
              </FlexItem>
            </Flex>
          </MainLayout>
        </FlexItem>
        <FlexItem>
          <ListAction actions={ actions } />
        </FlexItem>
      </Flex>
    </Form>
  }
};

SearchWrapped = Form.create({
  mapPropsToFields: (props) => {
    const { formData = {} } = props;
    const newFields = {};
    Object.keys(formData).forEach(field => {
      newFields[field] = Form.createFormField({
        value: formData[field],
      })
    })
    return newFields;
  },
  onFieldsChange: (props, fields) => {
    if (props.onFieldsChange) {
      const changeField = {};
      Object.keys(fields).forEach(key => {
        changeField[key] = fields[key].value;
      })
      props.onFieldsChange(changeField);
    }
  }
})(SearchWrapped);