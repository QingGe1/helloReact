import React from 'react';
import { Route, Redirect } from './myRouter';
import { connect } from 'react-redux'
export default connect(
  ({ user }) => ({ isLogin: user.isLogin })
)(function PrivateRoutes({ isLogin, component: Component, path, redirect, ...restProps }) {
  return (
    <Route
      {...restProps}
      render={(props) => isLogin
        ? <Component {...props} />
        : <Redirect to={{ pathname: redirect, state: { form: props.location.pathname } }} />
      }
    />
  )
})
