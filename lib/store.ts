import { configureStore } from '@reduxjs/toolkit';
// import ExampleSlice from '@/lib/features/ExampleState/ExampleSlice';

export const makeStore = () => {
  return configureStore({
    reducer: {
      //example: ExampleSlice,
    },
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
