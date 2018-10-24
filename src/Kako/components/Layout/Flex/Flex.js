import React from 'react';
import './index.css';

/**
 * @param 
 * [align] <String> 子项的对齐方式，默认 center。可选 flex-start | flex-end 等
 */
export default ({ children, style = {}, className = '', align = 'center' }) => {
  const defaultStyle = {
    alignItems: align,
    ...style,
  }
  const defaultClassName = `kqd-flex-layout ${className}`;
  return <div style={ defaultStyle } className={ defaultClassName }>
    { children }
  </div>
}