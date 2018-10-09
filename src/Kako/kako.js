import React, { Component } from 'react';
import QueueAnim from 'rc-queue-anim';
import { List as SupportList } from './components/Support';
import './index.css';

export default class Kako extends Component {
  state = {
    ready: false,
  }
  componentDidMount(){
    setTimeout( _=> {
      this.setState({
        ready: true,
      });
    }, 1000);
  }
  render() {
    const { config, ...restProps } = this.props;
    const { ready } = this.state;
    return (
      <>
        <QueueAnim
          interval={ 0 }
          animConfig={[
            { opacity: [1, 0], translateY: [0, 50] },
          ]}
          animatingClassName={
            ['queue-anim-entering', 'Kako-display-none']
          }
        >
            { ready ?
              (
                <SupportList key="test" />
              )
              :(
                <SupportList key="SupportList" />
              )
            }
        </QueueAnim>
      </>
    );
  }
}