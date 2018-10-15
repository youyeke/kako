import React, { Component } from 'react';
import { getMainLayout, getItem } from './utils/readConfig';

export default class Kako extends Component {
  state = {
    ready: false,
  }
  componentDidMount(){
    setTimeout( _=> {
      this.setState({
        ready: true,
      });
    }, 1500);
  }
  render() {
    const { config, ...restProps } = this.props;
    // const { ready } = this.state;
    const MainLayout = getMainLayout(config.layout);
    return (
      <MainLayout key="mainLayout">
        { config.default.map( (itemConfig,index) => {
          return getItem(itemConfig,index);
        } ) }
      </MainLayout>
    );
  }
}