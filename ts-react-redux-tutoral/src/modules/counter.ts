import { ActionType, createReducer, createAction } from "typesafe-actions";

const INCREASE = 'counter/INCREASE';
const DECREASE = 'counter/DECREASE';
const INCREASE_BY = 'counter/INCREASE_BY';

////// typesafe-actions 라이브러리 추가하여 개선
export const increase = createAction(INCREASE)()
export const decrease = createAction(DECREASE)()
export const increaseBy = createAction(INCREASE_BY)<number>()

// export const increase = () => ({ type: INCREASE });
// export const decrease = () => ({ type: DECREASE });
// export const increaseBy = (diff: number) => ({
//     type: INCREASE_BY,
//     payload: diff
// });

//////

type CounterState = {
    count: number;
};

const initialState: CounterState = {
    count: 0
};

////// typesafe-actions 라이브러리 추가하여 개선
const actions = { increase, decrease, increaseBy }

type CounterAction = ActionType<typeof actions>;

// type CounterAction =
//     | ReturnType<typeof increase>
//     | ReturnType<typeof decrease>
//     | ReturnType<typeof increaseBy>
/////

////// typesafe-actions 라이브러리 추가하여 개선
// 방법1
const counter = createReducer<CounterState, CounterAction>(initialState, {
    [INCREASE]: state => ({ count: state.count + 1 }),
    [DECREASE]: state => ({ count: state.count - 1 }),
    [INCREASE_BY]: (state, action) => ({ count: state.count + action.payload }),
});

// 방법2
// const counter = createReducer<CounterState>(initialState)
//     .handleAction(increase, (state: { count: number; }) => ({ count: state.count + 1 }))
//     .handleAction(decrease, (state: { count: number; }) => ({ count: state.count - 1 }))
//     .handleAction(increaseBy, (state: { count: number; }, action: { payload: number; }) => ({
//         count: state.count + action.payload
//     }));


// function counter(state: CounterState = initialState, action: any): CounterState {
//     switch (action.type) {
//         case INCREASE:
//             return { count: state.count + 1 };
//         case DECREASE:
//             return { count: state.count - 1 };
//         case INCREASE_BY:
//             return { count: state.count + action.payload };
//         default:
//             return state;
//     }
// };

//////

export default counter;
