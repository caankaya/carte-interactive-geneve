import { createAction, createReducer } from '@reduxjs/toolkit';

interface InteractionState {
  test: [];
  menuBurger: boolean;
  sidebar: boolean;
  aboutModal: boolean;
  themeId: number | null;
}

const initialState: InteractionState = {
  test: [],
  menuBurger: false,
  sidebar: true,
  aboutModal: false,
  themeId: null,
};

export const test = createAction<[]>('interaction/test');
export const toggleMenuBurger = createAction('Menu burger toggled');
export const toggleSidebar = createAction<boolean>('Sidebar toggled');
export const openAboutModal = createAction('About modal toggled');
export const getThemeId = createAction<number>('Getting the theme id');

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
    })
    .addCase(getThemeId, (state, action) => {
      state.themeId = action.payload;
    });
});

export default interactionReducer;
