import { useContext, useReducer, useLayoutEffect } from 'react'
import Context from './context'

export function useSelector(selector) {
  const store = useStore()
  const { getState, subscribe } = store;
  const selectedState = selector(getState());
  const [, forceUpdate] = useReducer(x => x + 1, 0)
  useLayoutEffect(() => {
    const unsubscribe = subscribe(() => {
      forceUpdate()
    })
    return () => {
      if (unsubscribe) unsubscribe()
    }
  }, [subscribe])
  return selectedState;
}
export function useDispatch() {
  const store = useStore();
  return store.dispatch;
}

function useStore() {
  const store = useContext(Context);
  return store;
}