import React,{ Component } from 'react';
import QueueAnim from 'rc-queue-anim';
import './index.css';

export default class Placeholder extends Component {
  state = {
    ready: true,
  };
  render(){
    const { suppor, mark, children, ...restProps } = this.props;
    const { ready } = this.state;

    return <QueueAnim
      interval={ 0 }
      { ...ready ? 
        {
          animConfig: [
            { opacity: [1, 0], translateX: [0, 60] },
          ]
        }
        : {
          animConfig: [
              { opacity: [1, 0], translateY: [0, 40] },
            ]
          }
      }
      animatingClassName={
        ['queue-anim-entering', 'Kako-display-none']
      }
    >
        { ready ?
          (
            React.cloneElement(children,{
              key: 'content',
              ...restProps,
            })
          )
          : React.createElement(suppor,{
            key: mark,
          })
        }
    </QueueAnim>
  }
}