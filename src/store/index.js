import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { mangaReducer } from "./reducers";

const rootReducer = combineReducers({
  manga: mangaReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
