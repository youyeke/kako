import React, { Component } from 'react';
import './index.css';

export default class Group extends Component{
  render(){
    const { id } = this.props;
    return <div className="Kako-Group">
      { id }
    </div>;
  }
};