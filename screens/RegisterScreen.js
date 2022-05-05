import { View, Button, Text, StyleSheet, TextInput ,Image} from "react-native";
import React, { useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import { auth,db } from "../firebase";
import { useNavigation } from "@react-navigation/native";
import { collection, addDoc } from "firebase/firestore";




const RegisterScreen = (props) => {


  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [displayName,setDisplayName] = useState("");
  const navigation = useNavigation();

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        navigation.navigate("Home");
      } else {
      }
    });
    return () => unSubscribe();
  },[]);

  const handleSignUp =  () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then( async (userCredential) => {
        const user = userCredential.user;
        try {
          const docRef = await addDoc(collection(db, "users"), {
            email: email,
            displayName: displayName
          });
          console.log("Document written with ID: ", docRef.id);
        } catch (e) {
          console.error("Error adding document: ", e);
        }
        navigation.navigate("Home");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage)
        // ..
      });
  };

  return (
    <View style={styles.containerView}>
      <TextInput placeholder="Display Name" value={displayName} onChangeText={(text)=> setDisplayName(text)} />
      <View style={{position:"relative"}}>
        <Image style={{width:20,height:20,position:"absolute", bottom:8,left:15 }} source={{uri: "https://cdn-icons.flaticon.com/png/512/2692/premium/2692790.png?token=exp=1651658429~hmac=7cede0af21dbcada1738ffdb88ad5490" }}/>
        <TextInput
      style={{
        
        borderBottomWidth:1,
        borderBottomColor:"#6C63FF",
        color:"black",
        paddingHorizontal:50,
        borderRadius:50,
        paddingVertical:5,
        
      }}
        placeholder="Email"
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
      </View>
      
      <TextInput
        secureTextEntry
        placeholder="Password"
        value={password}
        onChangeText={(text) => setPassword(text)}
      />
      <Button title="Register" onPress={handleSignUp} />
      <View>
        <Text>Already have an Account?</Text>
        <Button style={styles.buttons} title="Login" onPress={() => navigation.navigate("Login")}/>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  containerView: {
    flex: 1,
    
    justifyContent: "center",
    alignItems: "center",
  },
  buttons: {
    padding:5,
    borderRadius:50,
    backgroundColor:"red"
  }
});

export default RegisterScreen;
