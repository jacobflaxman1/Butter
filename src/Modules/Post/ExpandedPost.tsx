import React, { useEffect, useState } from "react";
import { StyleSheet, Text, Button, Image, View } from "react-native";
import { getPostById } from "../../Services/Posts";
import { useNavigation } from "react-redux";

export default function ExpandedPost({ navigation, route }) {
  const { id } = route.params;
  const [post, setPost] = useState();
  const [isLoading, setIsLoading] = useState(false);
  // fetch data based on id passed from params -> fill in the data from the fetch call
  // useEffect to get the data on load
  useEffect(() => {
    getPostById(id)
      .then((res) => {
        console.log(res.data);
        setPost(res.data);
      })
      .then(() => setIsLoading(true));
  }, []);

  return isLoading ? (
    <View style={styles.container}>
      <Button title="Home" onPress={() => navigation.navigate("Home")} />
      <Image
        source={{ uri: "https://picsum.photos/200/300" }}
        style={styles.thumbnail}
      />
      <View>
        <Text style={styles.post}>{post.title}</Text>
        <Text> {post.body}</Text>
      </View>
    </View>
  ) : null;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderBottomColor: "black",
    borderBottomWidth: 1,
    flexDirection: "column",
    justifyContent: "center",
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
