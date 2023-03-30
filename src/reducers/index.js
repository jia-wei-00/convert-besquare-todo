import todoReducer from "./todoReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  todoState: todoReducer,
});

export default rootReducer;
