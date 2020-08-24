import { combineReducers } from "redux";
import counter from "./counter";
import index from "./todos";
import github from "./github";

const rootReducer = combineReducers({
    counter,
    todos: index,
    github
});

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;
