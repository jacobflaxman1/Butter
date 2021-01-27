import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  fetchSpotifyData,
  getPosts,
  submitPost,
  fetchSingleTrackData,
} from "../../Services/Posts";
import { track, CustomError } from "../../Models/models";
import { AsyncActionError } from "../utils";
import { sub } from "react-native-reanimated";
import { spotifyToken } from "../selectors/selectors";

interface PostSliceState {
  posts: Array<string>;
  status: string;
  error: AsyncActionError;
}

export const initialState: PostSliceState = {
  posts: [],
  status: "idle",
  error: undefined,
};

export const fetchAllPosts = createAsyncThunk(
  "posts/fetchAllTrackIds",
  async ({ token }: any, thunkApi) => {
    try {
      const response: any = await getPosts(token);
      // thunkApi.dispatch(fetchTrackData({}))
      return response.data;
    } catch (err) {
      return thunkApi.rejectWithValue({
        type: CustomError.ERROR_FETCHING_POSTS,
      });
    }
  }
);

export const fetchTrackData = createAsyncThunk(
  "posts/fetchAllTracksData",
  // data is all of the track id's that are in the database
  async ({ user, postsData }: any, thunkApi: any) => {
    try {
      const spotifyToken = user.spotifyToken;
      if (!spotifyToken)
        return thunkApi.rejectWithValue({
          type: CustomError.NO_SPOTIFY_TOKEN,
        });
      const response: any = await fetchSpotifyData(
        user.decoded.name,
        postsData,
        spotifyToken
      );
      return response;
    } catch (err) {
      thunkApi.rejectWithValue({
        type: CustomError.ERROR_FETCHING_SPOTIFY_DATA,
        reason: err.response,
      });
    }
  }
);

export const submitNewPost = createAsyncThunk(
  "posts/submitNewPost",
  async ({ uri, description, user }: any, thunkApi) => {
    try {
      // TODO : trim the uri to just save the id not the http://open etc
      const token = user.token;
      const response: any = await submitPost(uri, description, token);
      console.log("RESPONSE", response);
      thunkApi.dispatch(fetchSingleTrack({ user, uri }));
    } catch (err) {
      return thunkApi.rejectWithValue({});
    }
  }
);

export const fetchSingleTrack = createAsyncThunk(
  "posts/fetchSingleTrack",
  async ({ user, trackId }: any, thunkApi) => {
    try {
      const spotifyToken = user.spotifyToken;
      const response = await fetchSingleTrackData(
        spotifyToken,
        trackId,
        user.decoded.name
      );
      console.log(response);
    } catch (err) {}
  }
);

const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    setTrackData(state, action) {
      state.posts = [...action.payload];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTrackData.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.posts = action.payload;
      })
      .addCase(fetchTrackData.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchTrackData.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(submitNewPost.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(submitNewPost.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.posts.push(action.payload);
      })
      .addCase(submitNewPost.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

const { actions, reducer } = postSlice;
export const { setTrackData } = actions;
export default reducer;
