import React from 'react';
import { Row, Col } from 'antd';
import './index.css';

export default ({ col, children }) => {
  return <Row>
    {React.Children.map(children, (child, index) => {
      return <Col sm={col && (24 / col) || child.props && child.props.span || 12} xs={24} key={index}>
        <div className="Kako-Layout-FormInline">
          {child}
        </div>
      </Col>
    })}
  </Row>
}