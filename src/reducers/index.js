import { combineReducers } from "redux";
import  modalReducers  from "./lib/modalReducers";

export default combineReducers({
	modal: modalReducers
});
