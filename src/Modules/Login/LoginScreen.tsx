import React, { useState, useRef } from "react";
import { View, StyleSheet, Button } from "react-native";
import t, { FormRef, TCombFormOptions } from "tcomb-form-native";
import { formStyleSheet } from "../../Styles/styles";
import { useDispatch } from "react-redux";
import { logUserIn } from "../../State/actions/userActions";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../Navigator/index";

interface LoginForm {
  name: string;
  email: string;
  password: string;
}

interface LoginScreenProps {
  navigation: StackNavigationProp<RootStackParamList, "Login">;
}

const { Form } = t.form;

export default function LoginScreen(props: LoginScreenProps) {
  const [formVal, setFormVal] = useState({ email: "", password: "" });
  const formRef = useRef<FormRef>(null);
  const dispatch = useDispatch();
  const navigation = useNavigation();

  let FormModel: any = t.struct({
    email: t.String,
    password: t.String,
  });

  const formOptions: TCombFormOptions = {
    stylesheet: formStyleSheet,
    auto: "placeholders",
    fields: {
      email: {
        type: "email",
      },
      password: {
        password: true,
        secureTextEntry: true,
      },
    },
  };

  const handleLogIn = () => {
    dispatch(logUserIn(formVal.email, formVal.password));
  };
  return (
    <View style={styles.container}>
      <Form
        ref={formRef}
        options={formOptions}
        type={FormModel}
        value={formVal}
        onChange={(f: LoginForm) => setFormVal(f)}
        //auto cap is not working
        autoCapitalize="none"
      />
      <Button title="Log In" onPress={() => handleLogIn()} />
      <View style={styles.signUpButton}>
        <Button
          title="Sign Up"
          onPress={() => navigation.navigate("Register")}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignSelf: "center",
    width: 254,
    flex: 1,
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "center",
  },
  signUpButton: {
    justifyContent: "flex-end",
  },
});
