import { combineReducers as reducer, configureStore } from "@reduxjs/toolkit";
import sliderReducer from "./redux/changeSlider";
import userReducer from "./redux/authUser";
import cartReducer from "./redux/cartItem";
import registerReducer from "./redux/regUser";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  version: 1,
  storage,
};

const rootReducer = reducer({
  user: userReducer,
  cart: cartReducer,
  slider: sliderReducer,
  register: registerReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export let persistor = persistStore(store);
