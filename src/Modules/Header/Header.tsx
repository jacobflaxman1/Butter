import React from "react";
import { StyleSheet, Text, TouchableOpacity, Image, View } from "react-native";

export default function Header() {
  return (
    <View style={styles.container}>
        <Text style={styles.headerText}>The Good Reader</Text>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        marginTop: '13%',
        marginBottom: '10%',
        alignItems: 'center',
        borderBottomWidth: 2,
        paddingBottom: '5%'
    },
    headerText: {
        fontSize: 16
    }
})