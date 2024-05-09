import { combineReducers, configureStore, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Provider, useDispatch, useSelector } from 'react-redux';
import React from 'react';

// Define state interface
interface CounterStateType {
  value: number;
}

// Initial state
const initialState: CounterStateType = {
  value: 0,
};

// Create a slice
const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    // Action with payload
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
  },
});

// Export actions for easy access
export const { increment, decrement, incrementByAmount } = counterSlice.actions;

// Define root reducer
const counterReducer = counterSlice.reducer;

// Create Redux store
const rootReducer = combineReducers({
  counter: counterReducer
})

const store = configureStore({
  reducer: rootReducer,
});

// App component
const Redux: React.FC = () => {
  return (
    <Provider store={store}>
      <Counter />
    </Provider>
  );
};


// Counter component
const Counter: React.FC = () => {
  const dispatch = useDispatch();
  const {value} = useSelector((state: { counter: CounterStateType }) => state.counter);

  return (
    <div>
      <h2>Counter</h2>
      <p>Count: {value}</p>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(incrementByAmount(5))}>Increment by 5</button>
    </div>
  );
};

export default Redux;
