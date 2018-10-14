import React, { Component } from 'react';
import { Grid } from './components/Layout';
import { SAList } from './components/Animation';

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
        { config.items.map( (itemConfig,index) => {
          return getItem(itemConfig,index);
        } ) }
      </MainLayout>
    );
  }
}

function getMainLayout(layoutName){
  const layoutMap = {
    Grid,
  };
  return layoutMap[layoutName] || layoutMap['Grid'];
}

function getItem(itemConfig,index){
  const { support, component, ...restConfig } = itemConfig;
  const supportMap = {
    list: SAList,
  };
  const contentMap = {
    List: () => <div>List</div>,
  };
  const Support = supportMap[support] || supportMap['list'];
  const Content = contentMap[component] || contentMap['List'];
  return <Support { ...restConfig } key={ index }>
    <Content />
  </Support>;
}