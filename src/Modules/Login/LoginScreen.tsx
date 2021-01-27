import React, { useState, useRef } from "react";
import { View, StyleSheet } from "react-native";
import { Button, TextInput } from "react-native-paper";
// import { logUserIn } from "../../State/actions/userActions";
import { login } from "../../State/slices/userSlice";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../Navigator/index";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { useAppDispatch } from "../../State/utils";
interface LoginForm {
  name: string;
  email: string;
  password: string;
}

interface LoginScreenProps {
  navigation: StackNavigationProp<RootStackParamList, "Login">;
}

export default function LoginScreen(props: LoginScreenProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useAppDispatch();
  const navigation = useNavigation();

  const handleLogIn = async () => {
    const resultAction = await dispatch(login({ email, password }));
    console.log(resultAction);
  };
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textInput}
        placeholder="username"
        value={email}
        onChangeText={(t) => setEmail(t)}
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
