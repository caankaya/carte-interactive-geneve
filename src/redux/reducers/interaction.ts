import { createAction, createReducer } from '@reduxjs/toolkit';

interface InteractionState {
  test: [];
  menuBurger: boolean;
  sidebar: boolean;
}

const initialState: InteractionState = {
  test: [],
  menuBurger: false,
  sidebar: true,
};

export const test = createAction<[]>('interaction/test');
export const toggleMenuBurger = createAction('Menu burger toggled');
export const toggleSidebar = createAction<boolean>('Sidebar toggled');

const interactionReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(test, (state, action) => {
      state.test = action.payload;
    })
    .addCase(toggleMenuBurger, (state) => {
      state.menuBurger = !state.menuBurger;
    })
    .addCase(toggleSidebar, (state) => {
      state.sidebar = !state.sidebar;
    });
});

export default interactionReducer;
