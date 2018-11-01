import React, { Component } from 'react';
const { Provider, Consumer } = React.createContext();

let pageRef = null;

class PageProvider extends Component {
  constructor(props) {
    super(props);
    pageRef = this;
    this.state = props.value;
  }
  render() {
    return <Provider value={this.state}>
      {this.props.children}
    </Provider>
  }
}

const PageConsumer = ({ children, ...restProps }) => {
  return <Consumer>
    {pageContext => React.cloneElement(children, {
      ...restProps,
      pageContext,
    })}
  </Consumer>
};

function setPageContext(key, value) {
  if (pageRef) {
    pageRef.setState({
      [key]: value,
    })
  }
}
function getPageContext() {
  if (pageRef) {
    return pageRef.state;
  }
  return {};
}

export {
  PageProvider,
  PageConsumer,

  setPageContext,
  getPageContext,
}