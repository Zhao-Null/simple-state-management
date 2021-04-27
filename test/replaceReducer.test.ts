import replaceReducer from "../src/replaceReducer";
import { changeText } from "./helpers/actionCreators";
import { moreCreateStore } from "./helpers/morecreatestore";
import {
    createReducerTest,
    createReducerTestNotReturn,
    replaceReducerTest,
    replaceTodosReverse,
} from "./helpers/reducers";
import { reducerStore } from "./helpers/store";

describe("replaceReducer", () => {
    it("newReducerFun is not function", () => {
        let r = replaceReducer(new Map());
        expect(() => r(1 as any, 2 as any)).toThrowError(
            "Expected the nextReducer to be a function."
        );
    });
    it("no store", () => {
        let r = replaceReducer(new Map());
        expect(() => r(1 as any, replaceTodosReverse as any)).toThrowError(
            "You must specify a store."
        );
    });
    it("When the reducer is the array is the replacement", () => {
        let create = new moreCreateStore();
        const store = create.createStore(reducerStore, { defaultKeyIndex: 3 });
        store.createReducer([createReducerTest]);
        store.replaceReducer(createReducerTest, replaceReducerTest);
        store.dispatch(changeText("world"));
        expect(store.getStateCut()).toEqual({
            x: "helloworld",
        });
    });
    it("When the reducer is the array is the replacement", () => {
        let create = new moreCreateStore();
        const store = create.createStore(reducerStore, { defaultKeyIndex: 3 });
        store.createReducer([createReducerTest]);
        expect(() =>
            store.replaceReducer(createReducerTestNotReturn, replaceReducerTest)
        ).toThrowError("The reducer to be replaced was not found");
    });
});
