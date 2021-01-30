import { RootState } from "../store";

export const isSignedIn = (state: RootState) => !!state.user.user;
export const getUser = (state: RootState) => state.user.user;
export const spotifyToken = (state: RootState) => state.user.user?.spotifyToken;
export const authToken = (state: RootState) => state.user.user?.token;

export const postData = (state: RootState) => state.posts.posts;
export const selectState = (state: RootState) => state;
