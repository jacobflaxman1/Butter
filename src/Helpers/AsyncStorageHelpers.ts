import AsyncStorage from "@react-native-async-storage/async-storage";

export const storeJWT = async (value: string) => {
  try {
    await AsyncStorage.setItem("JWT_TOKEN", value);
  } catch (e) {
    // saving error
  }
};

export const storeSpotifyToken = async (value: string) => {
  try {
    await AsyncStorage.setItem("SPOTIFY_TOKEN", value);
  } catch (e) {
    // saving error
  }
};

export const getJWT = async () => {
  try {
    const value = await AsyncStorage.getItem("JWT_TOKEN");
    return value;
  } catch (e) {
    // error reading value
  }
};
export const getSpotifyToken = async () => {
  try {
    const value = await AsyncStorage.getItem("SPOTIFY_TOKEN");
    return value;
  } catch (e) {
    // error reading value
  }
};

export const clearJWT = async () => {
  try {
    await AsyncStorage.removeItem("JWT_TOKEN");
  } catch (e) {
    // remove error
  }
  console.log("Done.");
};
