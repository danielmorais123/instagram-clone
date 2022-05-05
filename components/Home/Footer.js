import { View, Text, Button, Image, StyleSheet,TouchableOpacity } from "react-native";
import React,{useState,useEffect} from "react";

import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth, db } from "../../firebase";
import { useNavigation } from "@react-navigation/native";


const Footer = () => {
  const navigation = useNavigation();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });
    return () => unSubscribe();
  }, []);

  const signOutButton = () => {
    signOut(auth)
      .then(() => {
        setUser(null);
      })
      .catch((error) => {
        console.log(error);
      });
  };

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
      { !user ? 
      <TouchableOpacity onPress={() => navigation.navigate("Login")}>
        <Image
          style={styles.icons}
          source={require("../../assets/businessman.png")}
        />
      </TouchableOpacity>
      :
      <TouchableOpacity onPress={signOutButton}>
        <Image
          style={styles.icons}
          source={require("../../assets/businessman.png")}
        />
      </TouchableOpacity>
      }
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
