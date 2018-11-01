import React, { Component } from 'react';
import { Button } from 'antd';
import { PageConsumer } from '../EventProxy/PageContext';
import './index.css';

export default props => (
  <PageConsumer>
    <ListAction {...props} />
  </PageConsumer>
);

class ListAction extends Component {
  handleClick = (itemOption) => {
    const { pageContext } = this.props;
    const { type, modalConfig } = itemOption;
    if (type === 'formModal') {
      pageContext.switchPageModalVisible({ modalConfig });
    }
  }
  render() {
    const { actions } = this.props;
    return <div>
      {actions.map((item, i) => <Button type="primary" onClick={this.handleClick.bind(this, item)} key={i}>{item.title}</Button>)}
    </div>
  }
}