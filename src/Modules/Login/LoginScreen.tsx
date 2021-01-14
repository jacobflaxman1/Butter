import React, { useState, useRef } from "react";
import { View, StyleSheet } from "react-native";
import { Button, TextInput } from "react-native-paper";
import { useDispatch } from "react-redux";
import { logUserIn } from "../../State/actions/userActions";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../Navigator/index";
import { Colors } from "react-native/Libraries/NewAppScreen";

interface LoginForm {
  name: string;
  email: string;
  password: string;
}

interface LoginScreenProps {
  navigation: StackNavigationProp<RootStackParamList, "Login">;
}

export default function LoginScreen(props: LoginScreenProps) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const navigation = useNavigation();

  const handleLogIn = () => {
    dispatch(logUserIn(username, password));
  };
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textInput}
        placeholder="username"
        value={username}
        onChangeText={(t) => setUsername(t)}
        underlineColor="#FFBE88"
        selectionColor="#FFBE88"
        mode="outlined"
        theme={{
          roundness: 10,
          colors: { accent: "#FFBE88", primary: "#FFBE88" },
        }}
      />
      <TextInput
        underlineColor="#FFBE88"
        selectionColor="#FFBE88"
        style={styles.textInput}
        placeholder="password"
        value={password}
        onChangeText={(t) => setPassword(t)}
        mode="outlined"
        theme={{
          roundness: 10,
          colors: { accent: "#FFBE88", primary: "#FFBE88" },
        }}
      />
      <Button
        style={styles.button}
        onPress={() => handleLogIn()}
        mode="contained"
      >
        {" "}
        Login{" "}
      </Button>
      <Button
        style={styles.button}
        mode="contained"
        onPress={() => navigation.navigate("Register")}
      >
        Sign Up
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#63BCC9",
    justifyContent: "center",
  },
  button: {
    margin: 10,
    padding: 5,
    backgroundColor: "#FFBE88",
  },
  textInput: {
    margin: 10,
    padding: 5,
    color: "#FFBE88",
  },
});
