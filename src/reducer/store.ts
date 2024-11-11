import { configureStore } from '@reduxjs/toolkit';
import favoritesReducer from '../reducer/redux';

const store = configureStore({
  reducer: {
    favorites: favoritesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>; store
export type AppDispatch = typeof store.dispatch;

export default store;
