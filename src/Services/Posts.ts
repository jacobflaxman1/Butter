import Axios from "axios";
import { getJWT } from "../Helpers/AsyncStorageHelpers";

const BASE_URL = "http://192.168.1.104:3000/api";

const JWT = getJWT();

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

// TODO: Add image here so a user can add images to a post
// Note that need to find a system to store imags in database
// Either encrypting them and saving them directly or uploading them and saving the file path
export function submitPost(title: String, body: String, user: String) {
  return new Promise((resolve, reject) => {
    Axios.post(
      `${BASE_URL}/post`,
      {
        title,
        body,
        user,
      },
      {
        headers: {
          JWT,
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
