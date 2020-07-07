import React, { Component } from "react";
// import { BrowserRouter, Link, Route } from "react-router-dom";
import {
  BrowserRouter,
  Link,
  Route,
  Switch,
  // Prompt,
  useRouteMatch,
  useHistory,
  useLocation,
  useParams,
  // withRouter
} from "../router/myRouter";

import PrivateRoutes from '../router/PrivateRoutes'
import AntdForm from "./AntdForm";
import ReduxPage from "./ReduxPage";
import LoginPage from "./LoginPage";
export default class RouterPage extends Component {
  render() {
    return (
      <div>
        <h1>RouterPage</h1>

        <BrowserRouter>
          <nav>
            <Link to="/">⾸页</Link>
            <Link to="/user">⽤户中心</Link>
            <Link to="/test/1">test</Link>
            <Link to="/404">404</Link>
          </nav>
          {/* <Prompt
            when={true}
            message="Are you sure you want to leave?"
          /> */}
          <Switch>
            <Route
              path="/test/:id"
              children={Children}
              component={_Component}
              render={render}
            />
            <Route exact path="/" component={AntdForm} />
            <PrivateRoutes path="/user" component={ReduxPage} redirect='/login' />
            <Route path="/login" component={LoginPage} />
            <Route render={() => <Page404 />} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

function Children() {
  return <div>children</div>
}

function _Component(props) {
  const history = useHistory();
  const match = useRouteMatch();
  const location = useLocation();
  const params = useParams();
  console.log('hook', history, match, location, params);
  return <div>component</div>
}
// @withRouter
// class TComponent extends Component {
//   render() {
//     console.log(this.props);
//     return <div>component</div>
//   }
// }
function render() {
  return <div>render</div>
}

function Page404(props) {
  console.log('404 props', props);
  const history = useHistory();
  const match = useRouteMatch();
  const location = useLocation();
  const params = useParams();
  console.log('hook', history, match, location, params);

  return <div>404</div>
}


