import React, { useState, useRef } from "react";
import { View, StyleSheet, Button } from "react-native";
import t, { FormRef, TCombFormOptions } from "tcomb-form-native";
import { formStyleSheet } from "../../Styles/styles";
import { useDispatch } from "react-redux";
import { registerUser } from "../../State/actions/userActions";
import { useNavigation } from "@react-navigation/native";

interface RegistrationForm {
  name: string;
  email: string;
  password: string;
}

const { Form } = t.form;

// TODO: Change the login screen to a register screen change appnavigatro to render appropriately

export default function LoginScreen(props) {
  const [formVal, setFormVal] = useState({ name: "", email: "", password: "" });
  const formRef = useRef<FormRef>(null);
  const dispatch = useDispatch();
  const navigation = useNavigation();

  let FormModel: any = t.struct({
    name: t.String,
    email: t.String,
    password: t.String,
  });

  const formOptions: TCombFormOptions = {
    stylesheet: formStyleSheet,
    auto: "placeholders",
    fields: {
      name: {
        type: "name",
      },
      email: {
        type: "email",
      },
      password: {
        password: true,
        secureTextEntry: true,
      },
    },
  };

  const handleRegistration = () => {
    dispatch(registerUser(formVal.name, formVal.email, formVal.password));
    navigation.navigate("LoginScreen");
  };

  return (
    <View style={styles.container}>
      <Form
        ref={formRef}
        options={formOptions}
        type={FormModel}
        value={formVal}
        onChange={(f: RegistrationForm) => setFormVal(f)}
      />
      <Button title="Sign Up" onPress={() => handleRegistration()} />
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
});
