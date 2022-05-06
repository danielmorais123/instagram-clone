import { View, Button, StyleSheet, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth, db } from "../firebase";

import { collection, getDoc, doc, where, query } from "firebase/firestore";
import { useNavigation } from "@react-navigation/native";
import TopBar from "../components/Home/TopBar";
import StoriesTab from "../components/Home/StoriesTab";
import PostsTab from "../components/Home/PostsTab";
import LoginScreen from "./LoginScreen";
import Footer from "../components/Home/Footer";


const HomeScreen = () => {
  const [user, setUser] = useState(null);
  const navigation = useNavigation();

  const signOutButton = () => {
    signOut(auth)
      .then(() => {
        setUser(null);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
        navigation.navigate("Login");
      }
    });
    return () => unSubscribe();
  }, []);

  
  return (
    <View style={styles.container}>
      <TopBar />
      <ScrollView>
        <StoriesTab />
        <PostsTab />
        
      </ScrollView>
      <Footer />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FAFAFA",
  },
});

export default HomeScreen;
