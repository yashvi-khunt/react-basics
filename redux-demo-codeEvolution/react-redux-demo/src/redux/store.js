import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import cakeReducer from "./cake/cakeReducer";
import icecreamReducer from "./icecream/icecreamReducer";
import userReducer from "./user/userReducer";
import { combineReducers } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";
import { thunk } from "redux-thunk";

const root = combineReducers({
  cake: cakeReducer,
  icecream: icecreamReducer,
  user: userReducer,
});

const store = createStore(
  root,
  composeWithDevTools(applyMiddleware(logger, thunk))
);
export default store;
