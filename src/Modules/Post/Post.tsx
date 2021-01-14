import React from "react";
import { StyleSheet, TouchableOpacity, Image, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Button, Text, Headline, Card } from "react-native-paper";
import * as Linking from "expo-linking";

function Post(props: any) {
  const navigation = useNavigation();

  const handleLinking = () => {
    Linking.openURL(
      "https://open.spotify.com/track/0vqwYyDykchn3bZrsc3SRi?si=EStvAl2LT9ybTMzyKIXlwQ"
    );
  };
  console.log("PROPS", props);
  return (
    <>
      <Card key={props.key} style={styles.container}>
        <Card.Title title={props.title} />
        <Card.Content>
          <Text style={styles.post}>{props.body}</Text>
        </Card.Content>
        <Card.Content>
          <Image source={{ uri: props.url }} style={styles.thumbnail} />
        </Card.Content>
        {/* <Text style={styles.text}>By {props.Author} </Text> */}
        <Button onPress={() => handleLinking()}>To Link</Button>
      </Card>
    </>
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
    height: 150,
    width: 150,
    margin: "2%",
  },
  text: {
    color: "black",
    margin: "2%",
  },
});

export default Post;
