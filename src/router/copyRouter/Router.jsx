import React, { Component } from 'react';
import { RouterContext } from './RouterContext';

/**
 * history监听
 * 传递 location
 * 传递 match
 */
export default class Router extends Component {
  static computeRootMatch(pathname) {
    return { path: "/", url: "/", params: {}, isExact: pathname === "/" };
  }
  constructor(props) {
    super(props)
    const { history } = props;
    this.state = {
      location: history.location
    }
    // 监听 location 变化
    this.unlisten = history.listen((location) => {
      this.setState({ location })
    })
  }

  componentWillUnmount() {
    if (this.unlisten) {
      this.unlisten();
    }
  }

  render() {
    const { children, history } = this.props;
    const { location } = this.state;
    return <RouterContext.Provider
      value={{
        history,
        location,
        match: Router.computeRootMatch(location.pathname)
      }}
    >
      {children}
    </RouterContext.Provider>
  }
}