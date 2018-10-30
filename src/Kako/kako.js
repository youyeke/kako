import React, { Component } from 'react';
import { Provider } from './components/EventProxy/Global/GlobalSet';
import { Modal } from 'antd';
import { getMainLayout, getItem } from './utils/readConfig';


export default class Kako extends Component {
  state = {
    pageModalVisible: false,
  }
  switchPageModalVisible = ({ modalConfig = {} }) => {
    this.setState({
      modalConfig,
      pageModalVisible: !this.state.pageModalVisible,
    })
  }

  render() {
    const { config, ...restProps } = this.props;
    const { pageModalVisible, modalConfig } = this.state;
    const MainLayout = getMainLayout(config.layout);
    return (
      <Provider
        value={{
          dispatch: this.props.dispatch,
          namespace: this.props.namespace,
          history: this.props.history,
          switchPageModalVisible: this.switchPageModalVisible,
        }}
      >
        <MainLayout key="mainLayout">
          {config.items.map((itemCfg, index) => getItem(itemCfg, index, restProps))}
        </MainLayout>
        <Modal
          visible={pageModalVisible}
          onCancel={this.switchPageModalVisible}
          footer={null}
          width={620}
          destroyOnClose={true}
          closable={false}
        >
          {pageModalVisible && getItem(modalConfig, 0, restProps)}
        </Modal>
      </Provider>
    );
  }
}