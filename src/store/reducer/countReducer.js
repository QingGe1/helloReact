const countState = {
  count: 0
}
export const countReducer = (state = countState, action) => {
  switch (action.type) {
    case "ADD":
      return { ...state, count: state.count + 1 };
    case "MINUS":
      return { ...state, count: state.count - (action.payload || 1) };
    case "EMPTY":
      return state;
    default:
      return state;
  }
}