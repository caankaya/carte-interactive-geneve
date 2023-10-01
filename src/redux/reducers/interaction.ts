import { createAction, createReducer } from '@reduxjs/toolkit';

interface InteractionState {
  test: [];
  menuBurger: boolean;
  sidebar: boolean;
  aboutModal: boolean;
}

const initialState: InteractionState = {
  test: [],
  menuBurger: false,
  sidebar: true,
  aboutModal: false,
};

export const test = createAction<[]>('interaction/test');
export const toggleMenuBurger = createAction('Menu burger toggled');
export const toggleSidebar = createAction<boolean>('Sidebar toggled');
export const openAboutModal = createAction('About modal toggled');

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
    })
    .addCase(openAboutModal, (state) => {
      state.aboutModal = !state.aboutModal;
    });
});

export default interactionReducer;
