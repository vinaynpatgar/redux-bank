import { combineReducers } from "redux";
import amountReduces from "./amountReducers";

const reducers = combineReducers({
    amount: amountReduces
})

export default reducers ;