import React, { useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux'

export default function ReduxPage() {
  const state = useSelector(state => state);
  const dispatch = useDispatch();

  const add = useCallback(() => {
    dispatch({ type: "ADD" });
  }, [dispatch]);
  const minus = useCallback(() => {
    dispatch({ type: "MINUS" });
  }, [dispatch]);

  return (
    <div>
      <h3>ReduxPage</h3>
      <p>{state.countReducer.count}</p>
      <button onClick={add}>add</button>
      <button onClick={minus}>minus</button>
    </div>
  )
}

