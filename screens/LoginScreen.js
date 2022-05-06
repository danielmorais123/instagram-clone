import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  TextInput,
  Dimensions,
  Image,
} from "react-native";
import React, { useEffect, useState,useRef } from "react";
import { signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";
import LottieView from 'lottie-react-native';
import { getAuth, signInWithPopup, FacebookAuthProvider } from "firebase/auth";

const LoginScreen = ({navigation}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const animation = useRef(null);
  const provider = new FacebookAuthProvider();

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

  useEffect(() => {
    // You can control the ref programmatically, rather than using autoPlay
     animation.current?.play();
  }, []);

  const handleSignInWithFacebook = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        // The signed-in user info.
        const user = result.user;

        // This gives you a Facebook Access Token. You can use it to access the Facebook API.
        const credential = FacebookAuthProvider.credentialFromResult(result);
        const accessToken = credential.accessToken;

      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.email;
        // The AuthCredential type that was used.
        const credential = FacebookAuthProvider.credentialFromError(error);

      
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
      <LottieView
        autoPlay
        ref={animation}
        style={{
          width: 238,
          height: 219,
         
        }}
        // Find more Lottie files at https://lottiefiles.com/featured
        source={require('../assets/animations/login2.json')}
      />
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
        <TouchableOpacity style={styles.buttonLogin} onPress={handleSignIn}>
          <Text
            style={{
              color: "white",
            }}
          >
            Iniciar Sessão
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
          Não tens conta ainda?
        </Text>
        <TouchableOpacity onPress={() => navigation.navigate("Register")}>
          <Text
            style={{
              fontWeight: "bold",
            }}
          >
            Regista-te
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

export default LoginScreen;
