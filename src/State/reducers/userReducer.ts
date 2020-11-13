import { storeJWT, clearJWT } from "../../Helpers/AsyncStorageHelpers";

const defaultState = {
  loggedIn: false,
  user: {},
};

const userReducer = (
  state = defaultState,
  action: { type: string; payload: any }
) => {
  switch (action.type) {
    case "SET_USER":
      return {
        loggedIn: true,
        user: action.payload,
      };
    case "LOG_OUT":
      clearJWT();
      return {
        loggedIn: false,
        user: {},
      };
    default:
      return state;
  }
};

export default userReducer;
