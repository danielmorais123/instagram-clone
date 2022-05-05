import { View, Text, Button, Image, StyleSheet,TouchableOpacity } from "react-native";
import React from "react";
import app from "../../firebase";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigation } from "@react-navigation/native";


const Footer = () => {
  const navigation = useNavigation();
  return (
    <View
      style={{
        flexDirection: "row",
        backgroundColor: "white",
        padding: 10,
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <TouchableOpacity>
        <Image style={styles.icons} source={require("../../assets/home.png")} />
      </TouchableOpacity>
      <TouchableOpacity>
        <Image
          style={styles.icons}
          source={require("../../assets/search.png")}
        />
      </TouchableOpacity>
      <TouchableOpacity>
        <Image style={styles.icons} source={require("../../assets/mark.png")} />
      </TouchableOpacity>
      <TouchableOpacity>
        <Image
          style={styles.icons}
          source={require("../../assets/gostar.png")}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("Login")}>
        <Image
          style={styles.icons}
          source={require("../../assets/businessman.png")}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  icons: {
    width: 25,
    height: 25,
  },
});

export default Footer;
