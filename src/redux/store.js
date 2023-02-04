import {
  configureStore,
  createSlice,
} from '@reduxjs/toolkit';

import { mySliceItems } from './items/slice';

import { mySlice } from './myValue/slice';
import { userSlice } from './user/userSlice';

// SLICE


// export const increment = createAction('myValue/increment');
// export const decrement = createAction('myValue/decrement');

// console.log(increment.toString());
// console.log(decrement.toString());

// const myReducer = createReducer(100, {
//   [increment]: (state, action) => state + action.payload,
//   [decrement]: (state, action) => state - action.payload,
// });


// export const add = createAction('items/add');
// export const remove = createAction('items/remove');

// IMMER
// const itemsReducer = createReducer([], {
//   [add]: (state, action) => state.push(action.payload),
//   [remove]: (state, action) => state.filter(item => item.id !== action.payload),
// });

export const store = configureStore({
  reducer: {
    myValue: mySlice.reducer,
        items: mySliceItems.reducer,
    user: userSlice.reducer,
  },
});

console.log('Store', store);

// export const increment = createAction('myValue/increment')
// export const decrement = createAction('myValue/decrement')

// console.log(increment.toString());
// console.log(decrement.toString());

// const myReducer = createReducer(100, {
//     [increment]: (state, action) => state + action.payload,
//     [decrement]: (state, action) => state - action.payload,
// });

// export const store = configureStore({
//     reducer: {
//         myValue: myReducer,
// },
// });

// console.log('Store',store)
