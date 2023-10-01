import { configureStore } from '@reduxjs/toolkit';

import interactionReducer from './reducers/interaction';

const store = configureStore({
  reducer: {
    interaction: interactionReducer,
  },
});

export default store;

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
