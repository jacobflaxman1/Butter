import { Action, ActionCreator, Dispatch } from "redux";
import { ThunkAction } from "redux-thunk";
import {
  createAsyncThunk,
  createSlice,
  isRejectedWithValue,
} from "@reduxjs/toolkit";
import { user, CustomError, Jwt, email } from "../../Models/models";
import { AsyncActionError, AsyncActionStatus } from "../utils";
import { loginUser, registerLocalUser } from "../../Services/Auth";
import store, { AppDispatch, RootState } from "../store";
import { storeJWT, storeSpotifyToken } from "../../Helpers/AsyncStorageHelpers";
import { fetchTrackData } from "./postSlice";
import * as JwtDecode from "jwt-decode";

interface UserSliceState {
  user: user | undefined;
  statusMap: {
    onLogin: AsyncActionStatus;
    login: AsyncActionStatus;
    registerUser: AsyncActionStatus;
  };
  errorMap: {
    login: AsyncActionError;
    register: AsyncActionError;
  };
}

export const initialState: UserSliceState = {
  user: undefined,
  statusMap: {
    onLogin: "idle",
    login: "idle",
    registerUser: "idle",
  },
  errorMap: {
    login: undefined,
    register: undefined,
  },
};

export const login = createAsyncThunk(
  "user/login",
  async ({ email, password }: any, thunkApi) => {
    try {
      const response: any = await loginUser(email, password);
      const { token, user } = response.data.data;
      const spotifyToken = response.data.data.spotifyToken.access_token;
      if (!token || !spotifyToken) {
        return thunkApi.rejectWithValue({
          type: CustomError.AUTH_FAILED,
          reason: "No token returned from server",
        });
      }
      const decoded = JwtDecode.default(token);
      Promise.all([storeJWT(token)]);
      return { token, user, decoded, spotifyToken };
    } catch (err) {
      return thunkApi.rejectWithValue({
        type: CustomError.AUTH_FAILED,
        reason: "Could not login",
      });
    }
  }
);

export const register = createAsyncThunk(
  "user/register",
  async ({ name, email, password }: any, thunkApi) => {
    try {
      const response: any = await registerLocalUser(name, email, password);
      return response.data;
    } catch (err) {
      return thunkApi.rejectWithValue({
        type: CustomError.REGISTRATION_ERROR,
      });
    }
  }
);

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.statusMap.login = "loading";
      })
      .addCase(login.fulfilled, (state, action) => {
        state.statusMap.login = "succeeded";
        state.user = action.payload;
      })
      .addCase(login.rejected, (state, action) => {
        state.statusMap.login = "failed";
        state.errorMap.login = action.error.message;
      })
      .addCase(register.pending, (state) => {
        state.statusMap.registerUser = "loading";
      })
      .addCase(register.fulfilled, (state) => {
        state.statusMap.registerUser = "succeeded";
      })
      .addCase(register.rejected, (state, action) => {
        state.statusMap.registerUser = "failed";
        state.errorMap.register = action.error.message;
      });
  },
});

const { reducer } = userSlice;
export default reducer;
