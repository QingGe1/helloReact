import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Loading from './Loading'

const RouterList = [
  {
    component: React.lazy(() => import(/* webpackChunkName: "App"*/ '../App')),
    path: '/'
  },
  {
    component: React.lazy(() => import(/* webpackChunkName: "App"*/ '../pages/AntdForm')),
    path: '/AntdForm'
  },
  {
    component: React.lazy(() => import(/* webpackChunkName: "App"*/ '../pages/AntdForm')),
    path: '/AntdForm'
  },
]
// const getConfirmation = (message, callback) => {
//   const allowTransition = window.confirm(message)
//   callback && callback(allowTransition)
// }
const RouteMap = () => (
  <BrowserRouter
    // getUserConfirmation={getConfirmation('Are you sure?')}
  >
    <React.Suspense fallback={Loading()}>
      <Switch>
        {RouterList.map(item => (
          <Route
            key={item.path}
            exact={true}
            path={item.path}
            component={item.component}
          />
        ))}
        <Route render={() => <div>404 page</div>} />
      </Switch>
    </React.Suspense>
  </BrowserRouter>
)

export default RouteMap