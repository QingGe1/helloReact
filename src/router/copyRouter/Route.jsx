import React, { Component } from 'react';
import { RouterContext } from './RouterContext';
import matchPath from './matchPath';
/**
 * 路由配置
 * 匹配检测
 * 内容渲染
 * 覆盖match、location
 */
export default class Route extends Component {

  render() {
    return <RouterContext.Consumer>
      {context => {
        const { location } = context;
        const {
          path,
          // exact,
          children,
          component,
          render,
          computedMatch
        } = this.props;
        // 如果 Switch 中已经匹配过 match，这里直接使用不用再次匹配
        const match = computedMatch
          ? computedMatch
          : path
            ? matchPath(location.pathname, this.props)
            : context.match;
        const props = { ...context, location, match }
        // 覆盖 RouterContext 中的 location 和 match，否则子组件中的 location 和 match 还是默认值
        return <RouterContext.Provider value={props}>
          {match // 是否匹配
            ? children // 匹配 children是否存在
              ? typeof children === 'function' // 判断 children 数据类型，
                ? children(props)
                : children
              : component // 匹配 children 不存在， component 是否存在
                ? React.createElement(component, props) // component 存在 使用 component
                : render // component 不存在 判断 render
                  ? render(props)
                  : null
            : typeof children === 'function' // 不匹配 判断 children类型
              ? children(props)
              : null}
        </RouterContext.Provider>
      }}
    </RouterContext.Consumer>
  }
}