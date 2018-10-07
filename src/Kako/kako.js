import React, { Component } from 'react';
import { List } from './components/Support';

export default class Kako extends Component {
  state = {
    ready: false,
  }
  componentDidMount(){
    this.setState({
      ready: true,
    });
  }
  render() {
    const { config, ...restProps } = this.props;
    return (
      <>
        <List />
      </>
    );
  }
}