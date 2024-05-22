import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: { counter: 1 },
  reducers: {
    decrement(state) {
      if (state.counter === 1) {
        state.counter = 1025;
      } else {
        state.counter--;
      }
    },
    increment(state) {
      if (state.counter === 1025) {
        state.counter = 1;
      } else {
        state.counter++;
      }
    },
    setCounter(state, action) {
      state.counter = action.payload;
    },
  },
});

export const counterActions = counterSlice.actions;

export default counterSlice;
