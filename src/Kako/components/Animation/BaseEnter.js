import React,{ Component } from 'react';
import QueueAnim from 'rc-queue-anim';
import './index.css';

export default class BaseEnter extends Component {
  render(){
    const { children, ...restProps } = this.props;

    return <QueueAnim
      interval={ 0 }
      animConfig={ [
        { opacity: [1, 0], translateY: [0, 40] },
      ] }
      animatingClassName={
        ['queue-anim-entering', 'Kako-display-none']
      }
    >
        { React.cloneElement(children,{
            key: 'content',
            ...restProps,
        }) }
  </QueueAnim>
  }
}