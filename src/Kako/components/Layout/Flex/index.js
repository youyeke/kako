import React from 'react';
import Flex from './Flex';
import FlexItem from './FlexItem';


export default ({ children }) => {
  return <Flex>
    {React.Children.map(children, (child, index) => {
      const span = child.props.span || '';
      const style = {};
      const flex = isNaN(Number(span)) ? undefined: Number(span);
      if (flex === undefined) {
        style.width = span;
      }
      return <FlexItem flex={flex} style={style}>
        {child}
      </FlexItem>
    })}
  </Flex>
};