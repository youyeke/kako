import React, { Component } from 'react';
import { Row } from 'antd';
import './index.css';

export default class SearchDefault extends Component {
  getSearchItemHeight(more){    
    if(more && this.searchItemEl){
      return this.searchItemEl.scrollHeight;
    }
    return 40;
  }
  render() {
    const { children, more = false } = this.props;
    const boxStyle = {
      height: `${ this.getSearchItemHeight(more) }px`,
    };
    
    return <Row>
      {React.Children.map(children, (child, index) => {
        return <div ref={ el => this.searchItemEl = el } style={ boxStyle } className="Kako-Layout-SearchDefault">
          {child}
        </div>
      })}
    </Row>
  }
}