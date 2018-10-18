import React from 'react';
import { Grid } from '../components/Layout';
import { SASearch, SAList } from '../components/Animation';
import * as BaseComponentSet from '../components/BaseComponent';

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
    ...BaseComponentSet,
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