import { createStore, applyMiddleware, combineReducers } from "redux";
import logger from "redux-logger";
// import thunk from "redux-thunk";
import createSagaMiddleware from 'redux-saga'
// import { createStore, applyMiddleware, combineReducers } from "./myRedux";
// import logger from "./middleware/logger";
// import thunk from "./middleware/thunk";
import rootSaga from './action/rootSaga'

import { countReducer } from './reducer/countReducer'
import { loginReducer } from './reducer/loginReducer'

const sagaMiddleware = createSagaMiddleware();

const combined = combineReducers({ countReducer, user: loginReducer })

const store = createStore(combined, applyMiddleware(sagaMiddleware, logger))

sagaMiddleware.run(rootSaga)

export default store