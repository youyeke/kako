import React, { Component } from 'react';
import { Button } from 'antd';
import { Consumer } from '../EventProxy/Global/GlobalSet';
import './index.css';

export default props => (
  <Consumer>
    { context => <ListAction {...props} context={ context } />}
  </Consumer>
);

class ListAction extends Component{
  handleClick = (itemOption) => {
    const { context } = this.props;
    const { type, modalConfig } = itemOption;
    if(type === 'formModal'){
      context.switchPageModalVisible({ modalConfig });
    }
  }
  render(){
    const { actions } = this.props;
    return <div>
      { actions.map( (item,i) => <Button type="primary" onClick={ this.handleClick.bind(this,item) } key={i}>{ item.title }</Button> ) }
    </div>
  }
}