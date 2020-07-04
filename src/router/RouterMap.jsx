import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Loading from './Loading'

const RouterList = [
  {
    component: React.lazy(() => import(/* webpackChunkName: "App"*/ '../App.js')),
    path: '/'
  },
]
const RouteMap = () => (
  <BrowserRouter>
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
      </Switch>
    </React.Suspense>
  </BrowserRouter>
)

export default RouteMap