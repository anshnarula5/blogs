import {combineReducers} from "redux";

import blogs from "./blogs";
import authReducer from "./auth";

const reducers = combineReducers({
    blogs,
    authReducer 
})

export default reducers