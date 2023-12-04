import { createAction, createReducer } from "@reduxjs/toolkit";

interface InteractionState {
  menuBurger: boolean;
  sidebar: boolean;
  aboutModal: boolean;
  articleId: number | null;
}

const initialState: InteractionState = {
  menuBurger: false,
  sidebar: false,
  aboutModal: false,
  articleId: null,
};

export const toggleMenuBurger = createAction("Menu burger toggled");
export const toggleSidebar = createAction<boolean>("Sidebar toggled");
export const openAboutModal = createAction("About modal toggled");
export const getArticleId = createAction<number>("Getting the theme id");

const interactionReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(toggleMenuBurger, (state) => {
      state.menuBurger = !state.menuBurger;
    })
    .addCase(toggleSidebar, (state) => {
      state.sidebar = !state.sidebar;
    })
    .addCase(openAboutModal, (state) => {
      state.aboutModal = !state.aboutModal;
    })
    .addCase(getArticleId, (state, action) => {
      state.articleId = action.payload;
    });
});

export default interactionReducer;
