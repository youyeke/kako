import React from 'react';

/**
 * @param 
 * [flex] <String> 子项占据的空间，默认 '0 1 auto'
 */
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