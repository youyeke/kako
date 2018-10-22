import React, { Component } from 'react';
import { Row, Col } from 'antd';
import './index.css';

export default class SearchDefault extends Component{
  render(){
    const { children } = this.props;
    console.log(111,this.props)
    return< Row>
      { React.Children.map( children, (child,index) => {
        return <Col sm={ 8 } xs={ 24 } key={ index }>
          <div className="Kako-Layout-SearchDefault">
            { child }
          </div>
        </Col>
      } ) }
    </Row>
  }
}