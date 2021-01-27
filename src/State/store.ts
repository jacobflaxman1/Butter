import { createStore } from "redux";
import { combineReducers } from "redux";
import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { createLogger } from "redux-logger";
import promise from "redux-promise-middleware";
import postReducer, {
  initialState as postSliceInitialState,
} from "./slices/postSlice";
import userReducer, {
  initialState as userSliceInitialState,
} from "./slices/userSlice";

const rootReducer = combineReducers({
  posts: postReducer,
  user: userReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export const rootInitialState: RootState = {
  posts: postSliceInitialState,
  user: userSliceInitialState,
};

const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware().concat([
    promise,
    createLogger({
      level: {
        prevState: false,
        nextState: false,
        action: "info",
        error: "error",
      },
      diff: true,
    }),
  ]),
});

export default store;
export type AppDispatch = typeof store.dispatch;
