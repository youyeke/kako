import React from 'react';
import { Grid } from '../components/Layout';
import { SASearch, SAList } from '../components/Animation';

let extendsComponent = {};

export function getMainLayout(layoutName){
  const layoutMap = {
    Grid,
  };
  return layoutMap[layoutName] || layoutMap['Grid'];
}

export function getItem(itemConfig,index,props){
  const { support, component, ...restConfig } = itemConfig;
  const { ready = {} } = props;
  const supportMap = {
    Search: SASearch,
    List: SAList,
  };
  const contentMap = {
    Search: () => <div>Search</div>,
    List: () => <div>List</div>,
    ...extendsComponent,
  };
  const Support = supportMap[support] || supportMap['Search'];
  const Content = contentMap[component] || contentMap['List'];
  return <Support ready={ ready[index] } { ...restConfig } key={ index }>
    <Content { ...props } />
  </Support>;
}

export function setExtends(extendsObj){
  extendsComponent = extendsObj;
}