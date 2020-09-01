import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
// import { BrowserRouter, Route } from './myRouter'
import Loading from './Loading'

const RouterList = [
  {
    component: React.lazy(() => import(/* webpackChunkName: "App"*/ '../pages/App/App')),
    path: '/'
  },
  {
    component: React.lazy(() => import(/* webpackChunkName: "AntdForm"*/ '../pages/AntdForm')),
    path: '/AntdForm'
  },
  {
    component: React.lazy(() => import(/* webpackChunkName: "RCFormPage"*/ '../pages/RCFormPage')),
    path: '/RCFormPage'
  },
  {
    component: React.lazy(() => import(/* webpackChunkName: "CopyAntd3Form"*/ '../pages/CopyAntd3Form')),
    path: '/CopyAntd3Form'
  },
  {
    component: React.lazy(() => import(/* webpackChunkName: "UseCallbackPage"*/ '../pages/UseCallbackPage')),
    path: '/UseCallbackPage'
  },
  {
    component: React.lazy(() => import(/* webpackChunkName: "UseMemoPage"*/ '../pages/UseMemoPage')),
    path: '/UseMemoPage'
  },
  {
    component: React.lazy(() => import(/* webpackChunkName: "DialogPage"*/ '../pages/DialogPage')),
    path: '/DialogPage'
  },
  {
    component: React.lazy(() => import(/* webpackChunkName: "ContextPage"*/ '../pages/ContextPage')),
    path: '/ContextPage'
  },
]

// const roleRoute = [
//   {
//     component: React.lazy(() => import(/* webpackChunkName: "App"*/ '../pages/AntdForm')),
//     path: '/AntdForm'
//   },
// ]
// const unroleRoute = [
//   {
//     component: React.lazy(() => import(/* webpackChunkName: "App"*/ '../pages/App/App')),
//     path: '/'
//   },
// ]
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
      {/* {RouterList.map(item => (
        <Route
          key={item.path}
          exact={true}
          path={item.path}
          component={item.component}
        />
      ))} */}
      {/* <Route render={() => <div>404 page</div>} /> */}
    </React.Suspense>
  </BrowserRouter>
)

export default RouteMap