import React from 'react';
import Placeholder from './Placeholder';
import { Search, List } from '../Support';

const SAList = props => {
  return <Placeholder { ...props } mark="SupportList" suppor={ List } />;
}
const SASearch = props => {
  return <Placeholder { ...props } mark="SupportSearch" suppor={ Search } />;
}

export {
  SASearch,
  SAList,
}