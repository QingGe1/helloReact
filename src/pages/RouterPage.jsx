/* eslint-disable no-unused-vars */
import React, { Component, useEffect } from "react";
// import {
//   Link,
//   Route,
//   Switch,
//   // Prompt,
//   useRouteMatch,
//   useHistory,
//   useLocation,
//   useParams,
//   // withRouter
// } from "../router/copyRouter";
import {
  Link,
  Route,
  Switch,
  // Prompt,
  useRouteMatch,
  useHistory,
  useLocation,
  useParams,
  // withRouter
} from "react-router-dom";

import PrivateRoutes from '../router/PrivateRoutes'
import ReduxPage from "./ReduxPage";
import LoginPage from "./LoginPage";
export default class RouterPage extends Component {
  constructor(props) {
    super(props)
    this.state = { count: 1 }
  }
  render() {
    const { count } = this.state
    return (
      <div>
        <h1>RouterPage</h1>
        <div>
          <button onClick={() => this.setState({ count: count + 1 })}> 当前count：{count}</button>
        </div>
        <nav>
          <Link to="/RouterPage">⾸页</Link> |
          <Link to="/RouterPage/user">⽤户中心</Link> |
          <Link to="/RouterPage/login">登录</Link> |
          <Link to="/RouterPage/id/1">id:1</Link> |
          <Link to="/RouterPage/ClassChild">ClassChild</Link> |
          <Link to="/RouterPage/FunctionChild">FunctionChild</Link> |
          <Link to="/RouterPage/render">render</Link> |
          <Link to="/RouterPage/404">404</Link>
        </nav>
        {/* <Prompt
            when={true}
            message="Are you sure you want to leave?"
          /> */}
        <Switch>
        <Route exact path="/RouterPage" component={ReduxPage} />
        <PrivateRoutes exact path="/RouterPage/user" component={ReduxPage} redirect='/RouterPage/login' />
        <Route path="/RouterPage/login" component={LoginPage} />
        <Route
          path="/RouterPage/id/:id"
          component={IdComponent}
        />
        <Route path="/RouterPage/ClassChild" render={() => <ClassChild count={count} />} />
        <Route path="/RouterPage/FunctionChild" render={() => <FunctionChild count={count} />} />
        <Route path="/RouterPage/render" render={routeProps => <RouteCallRenderComponent {...routeProps} />} />
        <Route render={routeProps => <Page404 {...routeProps} />} />
        </Switch>
      </div>
    );
  }
}


function RouteCallChildrenComponent(props) {
  return <div>
    <p>Route.children</p>
    <p>不管location是否匹配都会被渲染，一般用于导航组件等需要一直显示的组件</p>
    <p>写在Switch中时，由于精确匹配 children 在不匹配情况下不会渲染</p>
  </div>
}

function RouteCallComponentComponent(props) {
  const history = useHistory();
  const match = useRouteMatch();
  const location = useLocation();
  const params = useParams();
  console.log('hook', history, match, location, params);
  return <code>
    &lt;Route component&gt;
  </code>
}
// @withRouter
// class TComponent extends Component {
//   render() {
//     console.log(this.props);
//     return <div>component</div>
//   }
// }
function RouteCallRenderComponent(props) {
  console.log('Route render props', props);
  return (
    <div>
      <code>
        &lt;Route render&gt;
      </code>
      <p>能访问到所有的[route props]</p>
    </div>
  )
}

function Page404(props) {
  // console.log('404 props', props);
  const history = useHistory();
  const match = useRouteMatch();
  const location = useLocation();
  const params = useParams();
  // console.log('hook', history, match, location, params);
  return <div>
    <p>RouterPage Components 404 page</p>
  </div>
}


class ClassChild extends Component {
  componentDidMount() {
    console.log("ClassChild componentDidMount"); //sy-log
  }
  componentWillUnmount() {
    console.log("ClassChild componentWillUnmount"); //sy-log
  }
  render() {
    return <div>child-{this.props.count}</div>;
  }
}


function FunctionChild(props) {
  useEffect(() => {
    return () => {
      console.log("FunctionChild WillUnmount"); //sy-log
    };
  }, []);
  return <div>child-{props.count}</div>;
}

function IdComponent() {
  return <div>1</div>
}

