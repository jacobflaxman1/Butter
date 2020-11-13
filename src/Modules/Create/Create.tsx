import React, { useState, useRef } from "react";
import { StyleSheet, Button, View } from "react-native";
import t, { FormRef, TCombFormOptions } from "tcomb-form-native";
import { formStyleSheet, createStyleSheet } from "../../Styles/styles";
import { submitPost } from "../../Services/Posts";
import { useSelector } from "react-redux";
import { getUser } from "../../State/selectors/selectors";
import { useNavigation } from "@react-navigation/native";

const { Form } = t.form;

interface CreateForm {
  title: string;
  body: string;
}

export default function Create() {
  const [form, setForm] = useState({ title: "", body: "" });
  const formRef = useRef<FormRef>(null);
  const user = useSelector(getUser);
  const navigation = useNavigation();

  let FormModel: any = t.struct({
    title: t.String,
    body: t.String,
  });

  const formOptions: TCombFormOptions = {
    auto: "placeholders",
    fields: {
      title: {
        type: "title",
        stylesheet: formStyleSheet,
      },
      body: {
        type: "body",
        stylesheet: createStyleSheet,
        multiline: true,
      },
    },
  };

  const handleSubmit = (title: string, body: string, user: string) => {
    submitPost(title, body, user)
      .then((res: any) => {
        navigation.navigate({
          name: "ExpandedPost",
          params: { id: res.data.id },
        });
      })
      .then(() => setForm({ title: "", body: "" }));
  };

  const { title, body } = form;

  return (
    <View style={styles.container}>
      <Form
        ref={formRef}
        options={formOptions}
        type={FormModel}
        value={form}
        onChange={(f: CreateForm) => setForm(f)}
      />
      <Button title="Submit" onPress={() => handleSubmit(title, body, user)} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
