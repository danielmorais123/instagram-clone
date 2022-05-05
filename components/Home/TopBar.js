import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const TopBar = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.leftTopBar}>
        <Text style={styles.logoText}>Instagram</Text>
      </View>
      <View style={styles.rightbuttons}>
        <TouchableOpacity>
          <Image
            source={require("../../assets/gostar.png")}
            style={styles.icons}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={()=> navigation.navigate("Messages")} style={{ position: "relative" }}>
          <Image
            source={require("../../assets/instagram-direto.png")}
            style={styles.icons}
          />
          <View style={{
            width:15,
            height:16,
            backgroundColor:"red",
            position:"absolute",
            right:8,
            top:-2,
            borderRadius:50
          }}>
            <Text style={{
              left:4,
              top:-2,
              fontWeight:"bold",
              color:"white"
            }}>
              6
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  leftTopBar: {
    marginLeft: 5,
  },
  logoText: {
    fontSize: 20,
    fontWeight: "bold",
  },
  container: {
    padding:5,
    flexDirection: "row",
    marginTop: 35,
    justifyContent: "space-between",
    alignItems: "center",
  },
  logoimg: {
    width: 50,
    height: 50,
  },
  icons: {
    padding:8,
    marginRight: 15,
    width: 24,
    height: 24,
  },
  rightbuttons: {
    flexDirection: "row",
    alignItems: "center",
  },
});
export default TopBar;
