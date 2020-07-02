import React, { useCallback } from 'react'
import { useSelector, useDispatch } from '../store/myReactRedux'

export default function ReactReduxHookPage() {
  const state = useSelector(state => state);
  const dispatch = useDispatch();

  const add = useCallback(() => {
    dispatch({ type: "ADD" });
  }, [dispatch]);
  const minus = useCallback(() => {
    dispatch({ type: "MINUS" });
  }, [dispatch]);

  return (
    <div className='contanier'>
      <h3>ReactReduxHookPage</h3>
      <div>{state.countReducer.count}</div>
      <button onClick={add}>add</button>
      <button onClick={minus}>minus</button>
    </div>
  )
}

