import React, { useState, useRef } from "react";
import { View, StyleSheet } from "react-native";
import { Button, TextInput } from "react-native-paper";

import { useDispatch } from "react-redux";
import { registerUser } from "../../State/actions/userActions";
import { useNavigation } from "@react-navigation/native";

interface RegistrationForm {
  name: string;
  email: string;
  password: string;
}

// TODO: Change the login screen to a register screen change appnavigatro to render appropriately

export default function LoginScreen(props: any) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const handleRegistration = () => {
    dispatch(registerUser(name, email, password));
    navigation.navigate("LoginScreen", { name, email, password });
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textInput}
        placeholder="username"
        value={name}
        onChangeText={(t) => setName(t)}
        underlineColor="#FFBE88"
        selectionColor="#FFBE88"
        mode="outlined"
        theme={{
          roundness: 10,
          colors: { accent: "#FFBE88", primary: "#FFBE88" },
        }}
      />
      <TextInput
        style={styles.textInput}
        placeholder="email"
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
        mode="contained"
        onPress={() => handleRegistration()}
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
