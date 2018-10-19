import React from 'react';
import { Row, Col } from 'antd';
import './index.css';

export default ({ children }) => {
  return <Row>
    { React.Children.map( children, (child,index) => {
      return <Col sm={ 12 } xs={ 24 } key={ index }>
        <div className="Kako-Layout-FormDefault">
          { child }
        </div>
      </Col>
    } ) }
  </Row>
}