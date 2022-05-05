import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  TextInput,
  Dimensions,
} from "react-native";
import React, { useEffect, useState } from "react";
import { signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigation } from "@react-navigation/native";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation();

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        navigation.navigate("Home");
      } else {
      }
    });

    return () => unSubscribe();
  }, []);

  const handleSignIn = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        navigation.navigate("Home");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(
          "error code: " + errorCode + "error message:" + errorMessage
        );
        // ..
      });
  };

  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        backgroundColor:"white"
      }}
    >
      <View
        style={{
          marginTop: 35,
        }}
      >
        <Text>Idioma</Text>
      </View>
      <View style={styles.containerView}>
        <Text style={{
          marginBottom:10,
         fontSize:40
        }}>
          Instagram
        </Text>
        <View style={{
width: Dimensions.get("window").width - 40,
borderColor: "#E2E2E2",
borderWidth: 4,
marginVertical: 5,
paddingVertical:7,
backgroundColor:"#fafafa"
        }}>
          <TextInput
            style={styles.inputFields}
            placeholder="Email"
            value={email}
            onChangeText={(text) => setEmail(text)}
          />
          </View>
          <View style={{
width: Dimensions.get("window").width - 40,
borderColor: "#E2E2E2",
borderWidth: 4,
marginVertical: 5,
paddingVertical:7
}}>
          <TextInput
            style={styles.inputFields}
            secureTextEntry
            placeholder="Password"
            value={password}
            onChangeText={(text) => setPassword(text)}
          />
        </View>
        <TouchableOpacity style={styles.buttonLogin} onPress={handleSignIn}>
          <Text
            style={{
              color: "white",
            }}
          >
            Iniciar Sessão
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
    borderRadius: 4,
    paddingVertical: 10,
    width: Dimensions.get("window").width - 40,
    backgroundColor: "#0095F6",
    justifyContent: "center",
    flexDirection: "row",
  },
  inputFields: {
    marginLeft:10,
  },
});

export default LoginScreen;
