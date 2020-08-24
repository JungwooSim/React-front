import {createAction} from "typesafe-actions";

export const ADD_TODO = 'index/ADD_TODO' as const;
export const TOGGLE_TODO = 'index/TOGGLE_TODO';
export const REMOVE_TODO = 'index/REMOVE_TODO';

let nextId = 1;

export const addTodo = (text: string) => ({
    type: ADD_TODO,
    payload: {
        id: nextId++,
        text
    }
});

export const toggleTodo = createAction(TOGGLE_TODO)<number>();
export const removeTodo = createAction(REMOVE_TODO)<number>();
