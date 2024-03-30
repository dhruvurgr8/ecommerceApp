import {
  applyMiddleware,
  combineReducers,
  legacy_createStore as createStore,
} from "redux";
import productReducer from "./productReducer";
import { thunk } from "redux-thunk";
import cartReducer from "./cartReducer";
const reducer = combineReducers({
  x: productReducer,
  y: cartReducer,
});
const store = createStore(reducer, applyMiddleware(thunk));
export default store;
