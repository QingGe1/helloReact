import React from 'react';
// import { Route, Redirect } from './copyRouter';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux'
function PrivateRoutes({ isLogin, component: Component, path, redirect, ...restProps }) {
  return (
    <Route
      {...restProps}
      render={(props) => isLogin
        ? <Component {...props} />
        : <Redirect to={{ pathname: redirect, state: { form: props.location.pathname } }} />
      }
    />
  )
}
export default connect(({ user }) => ({ isLogin: user.isLogin }))(PrivateRoutes)
