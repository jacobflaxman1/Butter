import React, { useEffect, useState } from "react";
import { StyleSheet, SafeAreaView, FlatList, Text, Image } from "react-native";
import Post from "../Post/Post";
import axios from "axios";
import { useSelector } from "react-redux";
import { getUser } from "../../State/selectors/selectors";
import { LinearGradient } from "expo-linear-gradient";
import { Searchbar, Card, Button } from "react-native-paper";

export default function PostList() {
  const user = useSelector(getUser);
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const spotifyToken = user.data.spotifyToken.access_token;

  const fetchSpotifyData = async () => {
    // this is going to loop over all of the uris in the data base and push them into an arrary
    const data: any = new Promise((resolve: any, reject: any) => {
      axios
        .get("https://api.spotify.com/v1/tracks/7o5jLtd1oTSxtPPeRchT2j", {
          headers: {
            Authorization: `Bearer ${spotifyToken}`,
          },
        })
        .then((res) => resolve(res));
    });
    return data;
  };
  useEffect(() => {
    fetchSpotifyData()
      .then((res) => setData(res.data))
      .then(() => console.log(data.name));
  }, []);

  return (
    <LinearGradient colors={["#FFBE88", "#47CACC"]} style={styles.container}>
      <Searchbar placeholder="..." value={search} />
      {data && (
        <Card style={styles.cardContainer}>
          <Card.Title title={data.name} />
          <Card.Content>
            <Text>{data.artists[0].name}</Text>
          </Card.Content>
          <Card.Content>
            <Image
              source={{ uri: data.album.images[0].url }}
              style={styles.thumbnail}
            />
          </Card.Content>
          {/* <Text style={styles.text}>By {props.Author} </Text> */}
          {/* <Button onPress={() => handleLinking()}>To Link</Button> */}
        </Card>
      )}
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
