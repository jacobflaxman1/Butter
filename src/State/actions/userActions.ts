import { loginUser, registerLocalUser } from "../../Services/Auth";
import { storeJWT } from "../../Helpers/AsyncStorageHelpers";

const setUser = (payload: any) => ({ type: "SET_USER", payload });

export const logUserOut = () => ({ type: "LOG_OUT" });

export const logUserIn = (email: String, password: String) => (
  dispatch: any
) => {
  loginUser(email, password).then((res: any) => {
    storeJWT(res.data.data.token);
    dispatch(setUser(res.data.data.user));
  });
};

export const registerUser = (name: String, email: String, password: String) => (
  dispatch: any
) => {
  registerLocalUser(name, email, password);
};
