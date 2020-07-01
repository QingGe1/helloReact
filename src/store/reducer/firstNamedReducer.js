const countState = {
  count: 0
}
export const firstNamedReducer = (state = countState, action) => {
  switch (action.type) {
    case "firstNamed/ADD":
      return { ...state, count: state.count + 1 };
    case "firstNamed/MINUS":
      return { ...state, count: state.count - 1 };
    default:
      return state;
  }
}