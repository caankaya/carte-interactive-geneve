import { createAction, createReducer } from '@reduxjs/toolkit';

interface InteractionState {
  test: [];
}

const initialState: InteractionState = {
  test: [],
};

export const test = createAction<[]>('interaction/test');

const interactionReducer = createReducer(initialState, (builder) => {
  builder.addCase(test, (state, action) => {
    state.test = action.payload;
  });
});

export default interactionReducer;
