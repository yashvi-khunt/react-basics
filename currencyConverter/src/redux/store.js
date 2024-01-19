import { createStore } from "redux";
import reducer from "./countryReducer";

const store = createStore(reducer);
export default store;
