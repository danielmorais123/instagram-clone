import {
  View,
  Text,
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";

const messagesFromUser = [
  {
    userName: "Natacha Azevedo",
    messageText: "ÉS TODO BOM NA CAMA",
    photoProfile: require('../assets/natacha.png'),
  }, {
    userName: "Paulo Alberto",
    messageText: "Piteira <3",
    photoProfile: require('../assets/paulo.png'),
  },
  {
    userName: "Gonçalo Baião",
    messageText: "Bora jogar",
    photoProfile: require('../assets/baiao.png'),
  },
 
  {
    userName: "Chico da Tina",
    messageText: "Vamos enrabar o Paulo",
    photoProfile: require('../assets/chico.png'),
  },
];

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
        <View
          style={{
            marginTop: 5,
          }}
        >
          {messagesFromUser.map((message, index) => (
            <EachMessage key={index} message={message} />
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

const EachMessage = ({ message }) => (
  <View
    style={{
      marginHorizontal: 20,
      marginVertical: 13,
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
    }}
  >
    <View
      style={{
        flexDirection: "row",
      }}
    >
      <Image
        style={styles.messageUserIcon}
        source={message.photoProfile}
      />
      <View
        style={{
          justifyContent: "space-evenly",
          marginLeft: 8,
        }}
      >
        <Text style={styles.messageAndUser}>{message.userName}</Text>
        <Text >{message.messageText}</Text>
      </View>
    </View>
    <View>
      <Image
        style={styles.icons}
        source={require("../assets/cam-recorder.png")}
      />
    </View>
  </View>
);

const styles = StyleSheet.create({
  icons: {
    width: 30,
    height: 30,
    marginRight: 10,
  },
  messageUserIcon: {
    width: 45,
    height: 45,
    borderRadius: 50,
  },
  messageAndUser: {
    fontWeight: "bold",
  },
  messageText:{

  }
});

export default MessagesScreen;
