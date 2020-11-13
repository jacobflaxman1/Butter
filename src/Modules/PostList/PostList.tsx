import React, { useEffect, useState } from "react";
import { StyleSheet, View, FlatList, Text } from "react-native";
import Post from "../Post/Post";
import Header from "../Header/Header";
import { getAllPosts } from "../../Services/Posts";

export default function PostList() {
  useEffect(() => {
    getAllPosts().then((res: any) => setPosts(res.data));
  }, []);
  const [posts, setPosts] = useState();
  return (
    <View style={styles.container}>
      <Header />
      <FlatList
        data={posts}
        renderItem={({ item }) => (
          <Post
            title={item.title}
            body={item.body}
            key={item.id}
            id={item._id}
          />
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
