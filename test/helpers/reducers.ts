import {
    ADD_NUM,
    ADD_NUM_RETURN,
    CHANGE_NUM,
    CHANGE_TEXT,
} from "./actionTypes";
import { ReducerOneStore } from "./store";

export interface Todo {
    num: number;
}
export type TodoAction = { type: "ADD_NUM" | "ADD_NUM_RETURN"; num: number };
export function todosReverse(state: Todo, action: TodoAction) {
    switch (action.type) {
        case ADD_NUM:
            state.num += action.num;
            return state;
        case ADD_NUM_RETURN:
            return { num: (state.num += action.num) };
        default:
            return state;
    }
}
export function replaceTodosReverse(state: Todo, action: TodoAction) {
    switch (action.type) {
        case ADD_NUM:
            state.num -= action.num;
            return state;
        case ADD_NUM_RETURN:
            return { num: (state.num -= action.num) };
        default:
            return state;
    }
}
export interface TodoReducerStoreAction {
    type: string;
    text?: string;
}
export function createReducerTest(
    state: ReducerOneStore | number,
    action: TodoReducerStoreAction
) {
    state = state as ReducerOneStore;
    switch (action.type) {
        case CHANGE_TEXT:
            state.x = action.text;
            return state;
        default:
            return state;
    }
}
export interface TodoReducerStoreActionNumber {
    type: string;
    num?: 123;
}
export function createReducerTestNumber(
    state: ReducerOneStore | number,
    action: TodoReducerStoreActionNumber
) {
    state = state as number;
    switch (action.type) {
        case CHANGE_NUM:
            state += action.num;
            return state;
        default:
            return state;
    }
}