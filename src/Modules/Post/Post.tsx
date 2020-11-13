import React from "react";
import { StyleSheet, Text, TouchableOpacity, Image, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
// TODO: how to load a single expanded post -> send post data as props to expanded post

function Post(props) {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() =>
        navigation.navigate({ name: "ExpandedPost", params: props.id })
      }
    >
      <View key={props.key}>
        <Text style={styles.post}>{props.title}</Text>
        <Text style={styles.post}>{props.body}</Text>
        {/* <Text style={styles.text}>By {props.Author} </Text> */}
      </View>
      <Image
        source={{ uri: "https://picsum.photos/200/300" }}
        style={styles.thumbnail}
      />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderBottomColor: "black",
    borderBottomWidth: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    margin: "3%",
  },
  post: {
    margin: "2%",
  },
  thumbnail: {
    height: 70,
    width: 70,
    margin: "2%",
  },
  text: {
    color: "black",
    margin: "2%",
  },
});

export default Post;
