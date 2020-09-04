import { createStore, applyMiddleware, combineReducers } from "redux";
// import { createStore, applyMiddleware, combineReducers } from "./copyRedux";
import logger from "redux-logger";
// import logger from "./middleware/logger";
// import thunk from "redux-thunk";
// import thunk from "./middleware/thunk";
import createSagaMiddleware from 'redux-saga'
import rootSaga from './saga/rootSaga'

import { countReducer } from './reducer/countReducer'
import { loginReducer } from './reducer/loginReducer'

const sagaMiddleware = createSagaMiddleware();

const combined = combineReducers({ countReducer, user: loginReducer })

const store = createStore(combined, applyMiddleware(sagaMiddleware, logger))

sagaMiddleware.run(rootSaga)

export default store