import Axios from "axios";

const BASE_URL = "http://192.168.0.101:3000/api";

export function getAllPosts() {
  return new Promise((resolve, reject) => {
    Axios.get(`${BASE_URL}/post`)
      .then((res) => resolve(res))
      .catch((err) => reject(err));
  });
}

export function getPostById(id: number) {
  return new Promise((resolve, reject) => {
    Axios.get(`${BASE_URL}/post/${id}`)
      .then((res) => resolve(res))
      .catch((err) => reject(err));
  });
}

export function submitPost(uri: String, description: String, token: String) {
  return new Promise((resolve, reject) => {
    Axios.post(
      `${BASE_URL}/post`,
      {
        uri,
        description,
      },
      {
        headers: {
          "Auth-Token": token,
        },
      }
    )
      .then((res) => resolve(res))
      .catch((err) => {
        console.log(err);
        reject(err);
      });
  });
}

export function getPosts(token: String) {
  return new Promise((resolve, reject) => {
    Axios.get(`${BASE_URL}/tracks`, { headers: { "Auth-Token": token } })
      .then((res) => resolve(res))
      .catch((err) => console.log(err));
  });
}
// TODO no user here add user to backend
export const fetchSpotifyData = async (
  user: string,
  trackIds: any,
  spotifyToken: string
) => {
  const allTracks = trackIds.map(async (d: any) => {
    let track = {
      album: "",
      image: "",
      artist: "",
      trackName: "",
      externalUrl: "",
      user: "",
    };
    const incomingTrack = await Axios.get(
      `https://api.spotify.com/v1/tracks/${d.uri}`,
      {
        headers: {
          Authorization: `Bearer ${spotifyToken}`,
        },
      }
    );
    track.album = incomingTrack.data.album.name;
    track.image = incomingTrack.data.album.images[0].url;
    track.artist = incomingTrack.data.artists[0].name;
    track.trackName = incomingTrack.data.name;
    track.externalUrl = incomingTrack.data.external_urls.spotify;
    track.user = user;
    return track;
  });
  const allTracksSync = await Promise.all(allTracks);
  return allTracksSync;
};

export const fetchSingleTrackData = async (
  spotifyToken: string,
  trackId: string,
  user: any
) => {
  let track = {
    album: "",
    image: "",
    artist: "",
    trackName: "",
    externalUrl: "",
    user: "",
  };
  const incomingTrack = await Axios.get(
    `https://api.spotify.com/v1/tracks/${trackId}`,
    {
      headers: {
        Authorization: `Bearer ${spotifyToken}`,
      },
    }
  );
  track.album = incomingTrack.data.album.name;
  track.image = incomingTrack.data.album.images[0].url;
  track.artist = incomingTrack.data.artists[0].name;
  track.trackName = incomingTrack.data.name;
  track.externalUrl = incomingTrack.data.external_urls.spotify;
  track.user = user;
  return track;
};
