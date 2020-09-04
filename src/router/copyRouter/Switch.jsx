import React, { Component } from 'react';
import { RouterContext } from './RouterContext';
import matchPath from './matchPath';

// 遍历 children 找到匹配的元素
export default class Switch extends Component {

  render() {
    let match; // 匹配后的 match 对象
    let element; // 匹配的元素
    const { children } = this.props // Switch 中的 Route

    return <RouterContext.Consumer>
      {context => {
        const { location } = context;
        React.Children.forEach(children, child => {
          if (match == null && React.isValidElement(child)) {
            element = child;
            const { path } = child.props;
            // 存在 path 并且匹配，或不存在 path 终止循环
            match = path ? matchPath(location.pathname, child.props) : context.match;
          }
        });
        // 没有 match 表示没有匹配的路由 且 没有不设置 path (例如404页面)的路由
        return match ? React.cloneElement(element, { computedMatch: match }) : null;
      }}
    </RouterContext.Consumer>

  }
}