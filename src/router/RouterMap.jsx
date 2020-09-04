import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
// import { BrowserRouter, Route, Switch } from './copyRouter'
import Loading from './Loading'

const RouterList = [
  {
    component: React.lazy(() => import(/* webpackChunkName: "App"*/ '../pages/AntdForm')),
    path: '/',
    exact: true
  },
  {
    component: React.lazy(() => import(/* webpackChunkName: "App"*/ '../pages/App/App')),
    path: '/RouterPage',
  },
  // {
  //   component: React.lazy(() => import(/* webpackChunkName: "AntdForm"*/ '../pages/AntdForm')),
  //   path: '/AntdForm'
  // },
  // {
  //   component: React.lazy(() => import(/* webpackChunkName: "RCFormPage"*/ '../pages/RCFormPage')),
  //   path: '/RCFormPage'
  // },
  // {
  //   component: React.lazy(() => import(/* webpackChunkName: "CopyAntd3Form"*/ '../pages/CopyAntd3Form')),
  //   path: '/CopyAntd3Form'
  // },
  // {
  //   component: React.lazy(() => import(/* webpackChunkName: "UseCallbackPage"*/ '../pages/UseCallbackPage')),
  //   path: '/UseCallbackPage'
  // },
  // {
  //   component: React.lazy(() => import(/* webpackChunkName: "UseMemoPage"*/ '../pages/UseMemoPage')),
  //   path: '/UseMemoPage'
  // },
  // {
  //   component: React.lazy(() => import(/* webpackChunkName: "DialogPage"*/ '../pages/DialogPage')),
  //   path: '/DialogPage'
  // },
  // {
  //   component: React.lazy(() => import(/* webpackChunkName: "ContextPage"*/ '../pages/ContextPage')),
  //   path: '/ContextPage'
  // },
  // {
  //   component: React.lazy(() => import(/* webpackChunkName: "ReactReduxHookPage"*/ '../pages/ReactReduxHookPage')),
  //   path: '/ReactReduxHookPage'
  // },
  // {
  //   component: React.lazy(() => import(/* webpackChunkName: "ReactReduxPage"*/ '../pages/ReduxPage')),
  //   path: '/ReactReduxPage'
  // },
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
  // basename="/BrowserRouterBasename"
  // getUserConfirmation={getConfirmation('Are you sure?')}
  >
    {/* Suspense 让你的组件在渲染之前进行“等待”，并在等待时显示 fallback 的内容 */}
    <React.Suspense fallback={Loading()}>
      <Switch>
        {RouterList.map(item => (
          <Route
            key={item.path}
            exact={item.exact}
            path={item.path}
            component={item.component}
            routes={item.routes}
          />
        ))}
        <Route render={routeProps => <Page404 {...routeProps} />} />
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

function Page404(props) {
  console.log('404 props', props);
  return <div>
    <p>RouteMap 404 page</p>
  </div>
}

export default RouteMap