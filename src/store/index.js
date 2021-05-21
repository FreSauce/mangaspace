import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { queryReducer } from "./reducers";

const rootReducer = combineReducers({
  manga: queryReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
