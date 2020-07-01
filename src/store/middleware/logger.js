export default function logger({ getState, dispatch }) {
  // next: dispatch
  return next => action => {
    console.group('action', action.type);
    const prevState = getState();
    console.log("prev state", prevState);
    // next/dispatch 返回的是 action
    const returnValue = next(action);
    const nextState = getState();
    console.log("next state", nextState);
    console.groupEnd();
    return returnValue;
  }
}