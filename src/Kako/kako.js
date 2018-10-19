import React, { Component } from 'react';
import { Provider } from './components/EvenProxy/Global/GlobalSet';
import { getMainLayout, getItem } from './utils/readConfig';


export default class Kako extends Component {
  render() {
    const { config, ...restProps } = this.props;
    const MainLayout = getMainLayout(config.layout);
    return (
      <Provider
        value={{
          dispatch: this.props.dispatch,
          namespace: this.props.namespace,
          history: this.props.history,
        }}
      >
        <MainLayout key="mainLayout">
          { config.items.map( (itemCfg,index) => getItem(itemCfg,index,restProps) ) }
        </MainLayout>
      </Provider>
    );
  }
}