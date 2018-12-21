import React, { Component } from 'react';
import { Row } from 'antd';
import './index.css';

export default class SearchDefault extends Component {
  componentDidMount() {
    if (this.searchItemEl.scrollHeight > 40) {
      if (this.props.onShowViewMore) {
        this.props.onShowViewMore();
      }
    }
  }
  getSearchItemHeight(more) {
    if (more && this.searchItemEl) {
      return this.searchItemEl.scrollHeight;
    }
    return 40;
  }
  render() {
    const { children, more = false } = this.props;
    const boxStyle = {
      height: `${this.getSearchItemHeight(more)}px`,
    };

    return <div ref={el => this.searchItemEl = el} style={boxStyle} className="Kako-Layout-SearchDefault">
      {React.Children.map(children, (child, index) => {
        return child;
      })}
    </div>
  }
}