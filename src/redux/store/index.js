import {createStore,applyMiddleware} from "redux";
import logger from "redux-logger";
import createSagaMiddleware from "redux-saga";
import { mySaga } from "../sagas";
import thunk from "redux-thunk";
import reducers from "../reducers";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    reducers,
    applyMiddleware(
      logger,
      thunk,
      sagaMiddleware
    )
);

sagaMiddleware.run(mySaga);

export default store;
