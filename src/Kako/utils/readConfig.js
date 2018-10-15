import React from 'react';
import { Grid } from '../components/Layout';
import { SASearch, SAList } from '../components/Animation';

export function getMainLayout(layoutName){
  const layoutMap = {
    Grid,
  };
  return layoutMap[layoutName] || layoutMap['Grid'];
}

export function getItem(itemConfig,index){
  const { support, component, ...restConfig } = itemConfig;
  const supportMap = {
    search: SASearch,
    list: SAList,
  };
  const contentMap = {
    Search: () => <div>Search</div>,
    List: () => <div>List</div>,
  };
  const Support = supportMap[support] || supportMap['list'];
  const Content = contentMap[component] || contentMap['List'];
  return <Support { ...restConfig } key={ index }>
    <Content />
  </Support>;
}