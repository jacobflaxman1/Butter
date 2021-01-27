export type Opaque<T, K> = T & { __brand__: K };

export interface track {
  album: string;
  image: string;
  artist: string;
  trackName: string;
  externalUrl: string;
}

export enum CustomError {
  ERROR_FETCHING_SPOTIFY_DATA = "ERROR_FETCHING_SPOTIFY_DATA",
  NO_SPOTIFY_TOKEN = "NO_SPOTIFY_TOKEN",
  AUTH_FAILED = "AUTH_FAILED",
  REGISTRATION_ERROR = "REGISTRATIO_ERROR",
  ERROR_ON_LOGIN_PROCCESS = "ERROR_ON_LOGIN_PROCCESS",
  ERROR_FETCHING_POSTS = "ERROR_FETCHING_POSTS",
}

export interface spotifyToken {
  access_token: string;
  expires_in: number;
  scope: string;
  token_type: string;
}

export interface user {
  spotifyToken: spotifyToken;
  token: string;
  user: string;
}

export type Jwt = Opaque<string, "Jwt">;
export type email = string;
