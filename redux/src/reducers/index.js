import {combineReducers} from "redux";
import { articleReducer } from "./article";
import { userReducer } from "./user";

export default combineReducers({
    articleReducer , 
    userReducer
})