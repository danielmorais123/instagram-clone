import { View, ScrollView, Image, StyleSheet, Text } from "react-native";
import React from "react";

const StoriesTab = () => {
  return (
    <View style={styles.viewContainer}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <Storie />
        <Storie />
        <Storie />
        <Storie />
        <Storie />
        <Storie />
        <Storie />
        <Storie />
        <Storie />
      </ScrollView>
    </View>
  );
};

const Storie = () => (
  <View style={styles.storieContainer}>
    <View
      style={{
        borderColor: "#FF3D00",
        borderWidth: 4,
        padding: 5,
        borderRadius: 50,
        alignItems: "center",
      }}
    >
      <Image
        source={require("../../assets/businessman.png")}
        style={styles.imgStorie}
      />
    </View>
  </View>
);

const styles = StyleSheet.create({
  viewContainer: {
    marginTop: 10,
  },
  storieContainer: {
    marginLeft: 10,
    width: 70,
  },
  scroolContainer: {
    flexDirection: "row",
  },
  imgStorie: {
    padding: 20,
    width: 50,
    height: 50,
  },
});

export default StoriesTab;
