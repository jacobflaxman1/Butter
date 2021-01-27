import React, { useEffect, useState } from "react";
import { StyleSheet, SafeAreaView, FlatList, Text, Image } from "react-native";
import Post from "../Post/Post";
import axios from "axios";
import { useSelector } from "react-redux";
import { getUser } from "../../State/selectors/selectors";
import { LinearGradient } from "expo-linear-gradient";
import { Searchbar, Card, Button } from "react-native-paper";
import { ScrollView } from "react-native-gesture-handler";
import { fetchTrackData } from "../../State/slices/postSlice";
import * as Linking from "expo-linking";
import { useAppDispatch } from "../../State/utils";
import { fetchSpotifyData, getPostById, getPosts } from "../../Services/Posts";
import { getJWT } from "../../Helpers/AsyncStorageHelpers";
import {
  spotifyToken,
  authToken,
  postData,
} from "../../State/selectors/selectors";

interface TrackObject {
  album: string;
  image: string;
  artist: string;
  trackName: string;
  externalUrl: string;
  user: string;
}
interface TrackData {
  array: TrackObject;
}

// get track ids -> get track data

export default function PostList() {
  const user = useSelector(getUser);
  const [search, setSearch] = useState("");
  const dispatch = useAppDispatch();
  const auth_token: any = useSelector(authToken);
  const posts: Array<string> = useSelector(postData);

  const handleFetchPosts = async (postsData: any) => {
    await dispatch(fetchTrackData({ user, postsData }));
    // TODO : error handling
  };

  useEffect(() => {
    getPosts(auth_token).then((posts: any) => handleFetchPosts(posts.data));
  }, []);

  const handleLinking = (url: string) => {
    Linking.openURL(url);
  };

  return (
    <LinearGradient style={styles.container} colors={["#FFBE88", "#47CACC"]}>
      <Searchbar
        placeholder="..."
        value={search}
        onChangeText={(t) => setSearch(t)}
      />
      <ScrollView>
        {posts &&
          posts.length > 0 &&
          posts.map((d: any) => {
            return (
              <Card
                style={styles.cardContainer}
                theme={{ roundness: 20 }}
                key={d.externalUrl}
              >
                <Card.Content style={styles.user}>
                  <Text>{d.user}</Text>
                </Card.Content>
                <Card.Title title={d.trackName} />
                <Card.Content>
                  <Text>{d.artist}</Text>
                </Card.Content>
                <Card.Content>
                  <Image source={{ uri: d.image }} style={styles.thumbnail} />
                </Card.Content>
                {/* <Text style={styles.text}>By {props.Author} </Text> */}
                <Button onPress={() => handleLinking(d.externalUrl)}>
                  To Link
                </Button>
              </Card>
            );
          })}
      </ScrollView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingTop: 75,
  },
  cardContainer: {
    margin: 15,
    marginTop: 50,
    justifyContent: "center",
  },
  post: {
    margin: "2%",
  },
  thumbnail: {
    height: 150,
    width: 150,
    margin: "2%",
    alignSelf: "flex-end",
  },
  text: {
    color: "black",
    margin: "2%",
  },
  user: {
    alignSelf: "flex-end",
  },
});
