import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Alert } from "react-native";
import { Input, Button } from "react-native-elements";
import { auth } from "../firebase";

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        var uid = user.uid;
        // navigation.reset({
        //   routes: [
        //     {
        //       name: "Chat",
        //       // params: { data: auth.currentUser.photoURL },
        //     },
        //   ],
        // });
        navigation.replace("Chat");
        // ...
      } else {
        // User is signed out
        // ...
      }
    });
    return unsubscribe;
  }, []);
  const SignIn = () => {
    auth
      .signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        console.log("Signed in!");
        Alert.alert("Signed!");
        const user = userCredential.user;
        console.log("로그인스크린에서 출력합니다 :", user);
        navigation.reset({
          routes: [
            {
              name: "Chat",
              // params: { data: auth.currentUser.photoURL },
            },
          ],
        });
      })
      .catch((error) => {
        console.log(error);
        Alert.alert("Not found");
      });
  };

  return (
    <View style={S.container}>
      <Input
        placeholder="Enter your email"
        label="Email"
        leftIcon={{ type: "material", name: "email" }}
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
      <Input
        placeholder="Enter your password"
        label="Password"
        leftIcon={{ type: "material", name: "lock" }}
        value={password}
        onChangeText={(text) => setPassword(text)}
        secureTextEntry
      />

      <Button title="sign in" style={S.button} onPress={SignIn} />
      <Button
        title="register"
        style={S.button}
        onPress={() => navigation.navigate("Register")}
      />
    </View>
  );
};

const S = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 10,
  },
  button: {
    width: 200,
    marginTop: 10,
  },
});

export default LoginScreen;
