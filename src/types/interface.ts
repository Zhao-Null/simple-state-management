export type AnyStore = { [key in string]: any };
export interface Action<T = any> {
    type: T;
}
export interface AnyAction extends Action {
    [key: string]: any;
}

export type ReducerFunObj<T, K extends keyof T> = {
    [P in K]?: Array<ReducerFun<T, P>>;
};
export type ReducerFun<T, K extends keyof T, A extends Action = AnyAction> = (
    state: T[K],
    action: A
) => T[keyof T];

export type DispatchFun<T, A extends Action = AnyAction> = (
    action: Action,
    storeKey?: keyof T
) => A;

export type MiddlewareFun<T, A extends Action = AnyAction> = (
    next: DispatchFun<T>
) => (action: A, storeKey?: keyof T) => any;

export type Middleware<T> = { [key in keyof T]: Array<MiddlewareFun<T>> };