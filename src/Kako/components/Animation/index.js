import React from 'react';
import Placeholder from './Placeholder';
import { List } from '../Support';

const SAList = props => {
  return <Placeholder { ...props } mark="SupportList" suppor={ List } />;
}

export {
  SAList,
}