export default function applyMiddleware(...middlewares) {
  return createStore => reducer => {
    const store = createStore(reducer);
    const midApi = {
      getState: store.getState,
      dispatch: store.dispatch,
    }
    const middlewareChain = middlewares.map(middleware => middleware(midApi));
    // next => {} 被执行
    const dispatch = compose(...middlewareChain)(store.dispatch)
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