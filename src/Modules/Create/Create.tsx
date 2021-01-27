import React, { useState, useRef } from "react";
import { StyleSheet, TouchableWithoutFeedback, Keyboard } from "react-native";
import { TextInput, Button } from "react-native-paper";
import { submitPost } from "../../Services/Posts";
import { useSelector } from "react-redux";
import { getUser } from "../../State/selectors/selectors";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import { submitNewPost } from "../../State/slices/postSlice";
import { useAppDispatch } from "../../State/utils";

export default function Create() {
  const user: any = useSelector(getUser);
  const navigation = useNavigation();
  const [uri, setUri] = useState("");
  const [description, setDescription] = useState("");
  const dispatch = useAppDispatch();

  const { token } = user;
  const handleSubmit = async () => {
    dispatch(submitNewPost({ uri, description, token }))
      .then((res: any) => {
        navigation.navigate("Posts");
      })
      .then(() => {
        setUri("");
        setDescription("");
      });
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <LinearGradient colors={["#FFBE88", "#47CACC"]} style={styles.container}>
        <TextInput
          label="Song Url (spotify uri)"
          value={uri}
          onChangeText={(t) => setUri(t)}
          style={styles.textInput}
        />
        <TextInput
          label="description"
          value={description}
          onChangeText={(t) => setDescription(t)}
          style={{ ...styles.textInput, height: 300 }}
          multiline
        />
        <Button
          mode="contained"
          onPress={() => handleSubmit()}
          style={styles.button}
        >
          Submit
        </Button>
      </LinearGradient>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // alignItems: "center",
    justifyContent: "center",
  },
  textInput: {
    margin: 10,
    padding: 5,
    color: "#FFBE88",
  },
  button: {
    margin: 10,
    padding: 5,
    backgroundColor: "#FFBE88",
  },
});
