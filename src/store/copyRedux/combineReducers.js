export default function combineReducers(reducers) {
  return function combination(state = {}, action) {
    const reducerKeys = Object.keys(reducers)
    let nextState = {};
    let hasChanged = false;
    reducerKeys.forEach(key => {
      const reducer = reducers[key];
      const previousStateForKey = state[key]
      const nextStateForKey = reducer(previousStateForKey, action)
      nextState[key] = nextStateForKey;
      // 判断新旧 State 是否相同
      hasChanged = hasChanged || nextStateForKey !== previousStateForKey
    })
    // 判断是否有新属性增加
    hasChanged = hasChanged || Object.keys(nextState).length !== Object.keys(state).length;
    return hasChanged ? nextState : state
  }
}