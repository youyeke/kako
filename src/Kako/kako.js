import React, { Component } from 'react';
import { SAList } from './components/Animation';

export default class Kako extends Component {
  state = {
    ready: false,
  }
  componentDidMount(){
    setTimeout( _=> {
      this.setState({
        ready: true,
      });
    }, 1500);
  }
  render() {
    const { config, ...restProps } = this.props;
    const { ready } = this.state;
    return (
      <>
        <SAList ready={ ready }>
         <div>ready</div>
        </SAList>
      </>
    );
  }
}