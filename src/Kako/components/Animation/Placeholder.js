import React,{ Component } from 'react';
import QueueAnim from 'rc-queue-anim';
import './index.css';

// TODO: 传入 loading 就改为 loading 的动画
export default class Placeholder extends Component {
  state = {
    ready: true,
  };
  render(){
    const { suppor, mark, children, ...restProps } = this.props;
    const { ready } = this.state;

    return <div>
        { React.cloneElement(children,{
            key: 'content',
            ...restProps,
            onReady: this.handleOnReady,
        }) }
      {/* <QueueAnim
        interval={ 0 }
        animConfig={ [
          { opacity: [1, 0], translateY: [0, 40] },
        ] }
        animatingClassName={
          ['queue-anim-entering', 'Kako-display-none']
        }
      >
          { ready ?
            null
            : React.createElement(suppor,{
            key: mark,
          }) }
          <div style={ contentStyle }>
            { React.cloneElement(children,{
                key: 'content',
                ...restProps,
                onReady: this.handleOnReady,
            }) }
          </div>
      </QueueAnim> */}
    </div>
  }
}