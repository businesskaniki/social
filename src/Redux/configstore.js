import { configureStore, combineReducers } from "@reduxjs/toolkit";
import thunk from "redux-thunk";

import myreducer from "./Api";

const rootReducer = combineReducers({myreducer:myreducer})
const Store = configureStore({ reducer: rootReducer, middleware: [thunk] });
export default Store;