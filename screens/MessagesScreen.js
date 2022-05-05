import {
  View,
  Text,
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const MessagesScreen = () => {
  const navigation = useNavigation();
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "white",
      }}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: 35,
        }}
      >
        <View
          style={{
            marginLeft: 10,
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <TouchableOpacity onPress={() => navigation.navigate("Home")}>
            <Image
              style={styles.icons}
              source={require("../assets/back.png")}
            />
          </TouchableOpacity>
          <Text
            style={{
              fontSize: 17,
              fontWeight: "bold",
            }}
          >
            Daniel Morais
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginRight: 5,
          }}
        >
          <Image
            style={styles.icons}
            source={require("../assets/cam-recorder.png")}
          />
          <Image
            style={{
              width: 22,
              height: 22,
              marginRight: 5,
            }}
            source={require("../assets/edit.png")}
          />
        </View>
      </View>
      <ScrollView>
        <View
          style={{
            backgroundColor: "#EFEFEF",
            marginVertical: 10,
            marginHorizontal: 20,
            flexDirection: "row",
            justifyContent: "center",
            position: "relative",
            padding: 6,
          }}
        >
          <TextInput placeholder="Pesquisa" style={{ color: "black" }} />
          <Image
            style={{
              position: "absolute",
              width: 20,
              height: 20,
              top: 10,
              left: 15,
            }}
            source={require("../assets/search.png")}
          />
        </View>
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  icons: {
    width: 30,
    height: 30,
    marginRight: 10,
  },
});

export default MessagesScreen;
