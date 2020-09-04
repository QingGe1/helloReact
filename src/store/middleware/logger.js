const logger = ({ getState }) => next => action => {
  console.group('action', action.type);
  const prevState = getState();
  console.log("prev state", prevState);
  const returnValue = next(action);
  const nextState = getState();
  console.log("next state", nextState);
  console.groupEnd();
  return returnValue;
}

export default logger;