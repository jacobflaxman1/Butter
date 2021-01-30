import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  fetchSpotifyData,
  getPosts,
  submitPost,
  fetchSingleTrackData,
} from "../../Services/Posts";
import { track, CustomError } from "../../Models/models";
import { AsyncActionError, AsyncActionStatus } from "../utils";
import { sub } from "react-native-reanimated";
import { spotifyToken } from "../selectors/selectors";
import thunk from "redux-thunk";

interface PostSliceState {
  posts: Array<string>;
  statusMap: {
    fetchAllPosts: AsyncActionStatus;
    fetchTrackData: AsyncActionStatus;
    submitNewPost: AsyncActionStatus;
  };
  errorMap: {
    fetchAllPosts: AsyncActionError;
    fetchTrackData: AsyncActionError;
    submitNewPost: AsyncActionError;
  };
}

export const initialState: PostSliceState = {
  posts: [],
  statusMap: {
    fetchAllPosts: "idle",
    fetchTrackData: "idle",
    submitNewPost: "idle",
  },
  errorMap: {
    fetchAllPosts: undefined,
    fetchTrackData: undefined,
    submitNewPost: undefined,
  },
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
      thunkApi.dispatch(setTrackData(response.data));
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
      return { user, uri };
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
      state.posts = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTrackData.fulfilled, (state, action) => {
        state.statusMap.fetchTrackData = "succeeded";
        state.posts = action.payload;
      })
      .addCase(fetchTrackData.pending, (state) => {
        state.statusMap.fetchTrackData = "loading";
      })
      .addCase(fetchTrackData.rejected, (state, action) => {
        state.statusMap.fetchAllPosts = "failed";
        state.errorMap.fetchTrackData = action.error.message;
      })
      .addCase(submitNewPost.pending, (state, action) => {
        state.statusMap.submitNewPost = "loading";
      })
      .addCase(submitNewPost.fulfilled, (state, action) => {
        state.statusMap.submitNewPost = "succeeded";
        // state.posts.push({action.payload});
      })
      .addCase(submitNewPost.rejected, (state, action) => {
        state.statusMap.submitNewPost = "failed";
        state.errorMap.submitNewPost = action.error.message;
      })
      .addCase(fetchAllPosts.pending, (state) => {
        state.statusMap.fetchAllPosts = "loading";
      })
      .addCase(fetchAllPosts.fulfilled, (state, action) => {
        state.statusMap.fetchAllPosts = "succeeded";
        state.posts = action.payload;
      })
      .addCase(fetchAllPosts.rejected, (state, action) => {
        state.statusMap.fetchAllPosts = "failed";
        state.errorMap.fetchAllPosts = action.error.message;
      });
  },
});

const { actions, reducer } = postSlice;
export const { setTrackData } = actions;
export default reducer;
