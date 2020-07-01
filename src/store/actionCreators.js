import store from './index'
export const add = () => {
  store.dispatch({ type: "ADD" });
};
export const minus = (value) => {
  store.dispatch({ type: "MINUS", payload:value });
};
export const empty = () => {
  store.dispatch({ type: "EMPTY" });
};

export const firstNamedadd = () => {
  store.dispatch({ type: "firstNamed/ADD" });
};
export const firstNamedminus = () => {
  store.dispatch({ type: "firstNamed/MINUS" });
};