export default function applyMiddleware(...middlewares) {
  return createStore => reducer => {
    const store = createStore(reducer);
    let dispatch = store.dispatch;
    // middleware 第一层需要的参数
    const midApi = {
      getState: store.getState,
      dispatch: (action, ...args) => dispatch(action, ...args),
    }
    const middlewareChain = middlewares.map(middleware => middleware(midApi));
    // next => {} 被执行
    dispatch = compose(...middlewareChain)(store.dispatch)
    return {
      ...store,
      dispatch
    };
  };
}

function compose(...funcs) {
  if (funcs.length === 0) {
    return arg => arg;
  }
  if (funcs.length === 1) {
    return funcs[0];
  }
  return funcs.reduce((a, b) => (...args) => a(b(...args)));
}