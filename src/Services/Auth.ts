import axios from "axios";

const BASE_URL = "http://192.168.2.101:3000/api/user";

export function registerLocalUser(
  name: String,
  email: String,
  password: String
) {
  return new Promise((resolve, reject) => {
    axios
      .post(`${BASE_URL}/register`, {
        name,
        email,
        password,
      })
      .then((res) => resolve(res))
      .catch((err) => reject(err));
  });
}

export function loginUser(email: String, password: String) {
  return new Promise((resolve, reject) => {
    axios
      .post(`${BASE_URL}/login`, {
        email,
        password,
      })
      .then((res) => resolve(res))
      .catch((err) => reject(err));
  });
}
