import { createStore, applyMiddleware, combineReducers  } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
// import { createStore, applyMiddleware, combineReducers } from "./mystore";
// import logger from "./middleware/logger";
// import thunk from "./middleware/thunk";

import { countReducer } from './reducer/countReducer'
import { firstNamedReducer } from './reducer/firstNamedReducer'

const combined = combineReducers({countReducer, firstNamedReducer})

const store = createStore(combined, applyMiddleware(thunk, logger))

export default store