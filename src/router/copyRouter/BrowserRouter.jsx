import React, { Component } from 'react';
import { createBrowserHistory } from 'history';
import Router from './Router';
/**
 * 历史记录管理对象history初始化及向下传递
 */
export default class BrowserRouter extends Component {
  constructor(props) {
    super(props)
    this.history = createBrowserHistory();
  }
  render() {
    const { children } = this.props;
    const history = this.history;
    return <Router children={children} history={history} />
  }

}