import AsyncStorage from "@react-native-async-storage/async-storage";

export const storeJWT = async (value: string) => {
  try {
    await AsyncStorage.setItem("JWT_TOKEN", value);
  } catch (e) {
    // saving error
  }
};

export const getJWT = async () => {
  try {
    const value = await AsyncStorage.getItem("JWT_TOKEN");
    if (value !== null) {
      // value previously stored
    }
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
