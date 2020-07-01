// import { createStore, applyMiddleware, combineReducers  } from "redux";
import { createStore, applyMiddleware, combineReducers } from "./mystore";
import { countReducer } from './reducer/countReducer'
import { firstNamedReducer } from './reducer/firstNamedReducer'
import logger from "redux-logger";
import thunk from "redux-thunk";
// import logger from "./middleware/logger";
// import thunk from "./middleware/thunk";

const combined = combineReducers({countReducer, firstNamedReducer})

const store = createStore(combined, applyMiddleware(thunk))

export default store