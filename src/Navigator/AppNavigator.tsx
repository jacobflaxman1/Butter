import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import ExpandedPost from "../Modules/Post/ExpandedPost";
import LoginScreen from "../Modules/Login/LoginScreen";
import Register from "../Modules/Register/Register";
import BottomTabNavigator from "./BottomTabNav";
import { useSelector } from "react-redux";
import { isSignedIn } from "../State/selectors/selectors";
const Stack = createStackNavigator();

// TODO: DEFINE SELECTORS AND SELECT isSignedIn from Redux conditionally rennder the correct screens based on if signed in or not

const AppNavigator = () => {
  const isLoggedIn = useSelector(isSignedIn);

  return isLoggedIn ? (
    <Stack.Navigator initialRouteName="PostList">
      <Stack.Screen
        name="Home"
        component={BottomTabNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ExpandedPost"
        component={ExpandedPost}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  ) : (
    <Stack.Navigator>
      <Stack.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={{ title: "Login" }}
      />
      <Stack.Screen
        name="Register"
        component={Register}
        options={{ title: "Register" }}
      />
    </Stack.Navigator>
  );
};

export default AppNavigator;
