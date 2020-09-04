import React from 'react';
import { useContext } from 'react';
import { RouterContext } from './RouterContext';
// 传递 RouterContext
const withRouter = WarppedComponent => props => {
  const routerContext = useContext(RouterContext)
  return <WarppedComponent {...props} {...routerContext} />
}

export default withRouter