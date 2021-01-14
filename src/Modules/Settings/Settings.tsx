import React from "react";
import { StyleSheet, Button, View } from "react-native";
import { logUserOut } from "../../State/actions/userActions";
import { useDispatch } from "react-redux";

export default function Settings() {
  const dispatch = useDispatch();
  
  return (
    <View style={styles.container}>
      <Button title="Log Out" onPress={() => dispatch(logUserOut())} />
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
