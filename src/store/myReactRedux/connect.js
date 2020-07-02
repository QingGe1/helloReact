import React, { useContext, useLayoutEffect, useReducer } from 'react';
import { bindActionCreators } from 'redux'
import Context from './context'

const connect = (
  mapStateToProps = state => state,
  mapDispatchToProps
) => WrappendComponent => props => {
  const store = useContext(Context);
  const { getState, dispatch, subscribe } = store;

  const stataProp = mapStateToProps(getState());

  let dispatchProp = { dispatch };
  if (typeof mapDispatchToProps === 'function') {
    dispatchProp = mapDispatchToProps(dispatch)
  } else if (typeof mapDispatchToProps === 'object') {
    dispatchProp = bindActionCreators(mapDispatchToProps, dispatch)
  }

  const [, forceUpdate] = useReducer(x => x + 1, 0);
  useLayoutEffect(() => {
    const unsubscribe = subscribe(() => {
      forceUpdate();
    })
    return () => {
      if (unsubscribe) unsubscribe()
    }
  }, [subscribe]);
  return <WrappendComponent {...props} {...stataProp} {...dispatchProp} />
}

export default connect;