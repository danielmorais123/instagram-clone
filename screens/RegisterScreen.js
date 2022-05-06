import {
  View,
  Button,
  Text,
  StyleSheet,
  TextInput,
  Image,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import { auth, db } from "../firebase";

import {
  collection,
  getDocs,
  doc,
  where,
  query,
  addDoc,
  getDoc
} from "firebase/firestore";

const RegisterScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [displayName, setDisplayName] = useState("");

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        navigation.navigate("Home");
      } else {
      }
    });
    return () => unSubscribe();
  }, []);


  const handleSignUp = () => {
    
    createUserWithEmailAndPassword(auth, email, password)
      .then( async (userCredential) => {
        const user = userCredential.user;
        try {
          const docRef = await addDoc(collection(db, "users"), {
            email: email,
            displayName: displayName,
          });
          console.log("Document written with ID: ", docRef.id);
        } catch (e) {
          console.error("Error adding document: ", e);
        }
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
        // ..
      });
  };

  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        backgroundColor: "white",
        justifyContent: "space-between",
      }}
    >
      <View
        style={{
          marginTop: 35,
        }}
      >
        <TouchableOpacity onPress={() => navigation.navigate("Home")}>
          <Image
            style={{
              width: 50,
              height: 50,
            }}
            source={require("../assets/home.png")}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.containerView}>
        <Text
          style={{
            marginBottom: 10,
            fontSize: 40,
            fontWeight: "bold",
          }}
        >
          Instagram
        </Text>
        <View
          style={{
            width: Dimensions.get("window").width - 40,
            borderColor: "#E2E2E2",
            borderWidth: 2,
            marginVertical: 5,
            paddingVertical: 7,
            backgroundColor: "#fafafa",
          }}
        >
          <TextInput
            style={styles.inputFields}
            placeholder="Display Name"
            value={displayName}
            onChangeText={(text) => setDisplayName(text)}
          />
        </View>
        <View
          style={{
            width: Dimensions.get("window").width - 40,
            borderColor: "#E2E2E2",
            borderWidth: 2,
            marginVertical: 5,
            paddingVertical: 7,
            backgroundColor: "#fafafa",
          }}
        >
          <TextInput
            style={styles.inputFields}
            placeholder="Email"
            value={email}
            onChangeText={(text) => setEmail(text)}
          />
        </View>
        <View
          style={{
            width: Dimensions.get("window").width - 40,
            borderColor: "#E2E2E2",
            borderWidth: 2,
            marginVertical: 5,
            paddingVertical: 7,
          }}
        >
          <TextInput
            style={styles.inputFields}
            secureTextEntry
            placeholder="Password"
            value={password}
            onChangeText={(text) => setPassword(text)}
          />
        </View>
        <TouchableOpacity style={styles.buttonLogin} onPress={handleSignUp}>
          <Text
            style={{
              color: "white",
            }}
          >
            Registar
          </Text>
        </TouchableOpacity>

        {/*  <TouchableOpacity
          style={styles.buttonLogin}
          onPress={handleSignInWithFacebook}
        >
          <Text
            style={{
              color: "white",
            }}
          >
            Iniciar sessão com Facebook
          </Text>
        </TouchableOpacity>  */}
      </View>
      <View
        style={{
          borderWidth: 1,
          width: Dimensions.get("window").width,
          justifyContent: "center",
          padding: 10,
          borderLeftWidth: 0,
          borderRightWidth: 0,
          borderBottomWidth: 0,
          flexDirection: "row",
          marginBottom: 5,
          marginHorizontal: 5,
        }}
      >
        <Text
          style={{
            marginHorizontal: 5,
          }}
        >
          Já tens uma conta?
        </Text>
        <TouchableOpacity onPress={() => navigation.navigate("Login")}>
          <Text
            style={{
              fontWeight: "bold",
            }}
          >
            Inicia Sessão
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  containerView: {
    width: Dimensions.get("window").width,
    flex: 1,

    justifyContent: "center",
    alignItems: "center",
  },
  buttonLogin: {
    marginTop: 5,
    borderRadius: 4,
    paddingVertical: 10,
    width: Dimensions.get("window").width - 40,
    backgroundColor: "#0095F6",
    justifyContent: "center",
    flexDirection: "row",
  },
  inputFields: {
    marginLeft: 10,
  },
});

export default RegisterScreen;
