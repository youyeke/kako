import React from 'react';

export default ({ children, style = {}, className = '', flex = '0 1 auto' }) => {
  const defaultStyle = {
    ...style,
    flex,
  }
  const defaultClassName = className;
  return <div style={ defaultStyle } className={ defaultClassName }>
    { children }
  </div>
}