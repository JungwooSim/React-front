import { combineReducers } from "redux";
import counter from "./counter";
import index from "./todos";

const rootReducer = combineReducers({
    counter,
    todos: index
});

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;
