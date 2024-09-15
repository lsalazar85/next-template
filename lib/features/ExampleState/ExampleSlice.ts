import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface CounterState {
  value: number;
}

const initialState: CounterState = {
  value: 0,
};
export const ExampleSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state, action: PayloadAction<number | undefined>) => {
      const incrementBy = action.payload !== undefined ? action.payload : 1;
      state.value += incrementBy;
    },
    decrement: (state, action: PayloadAction<number | undefined>) => {
      const incrementBy = action.payload !== undefined ? action.payload : 1;
      state.value -= incrementBy;
    },
    resetState: (state) => {
      state.value = 0;
    },
  },
});

export const { increment, decrement, resetState } = ExampleSlice.actions;
export default ExampleSlice.reducer;
