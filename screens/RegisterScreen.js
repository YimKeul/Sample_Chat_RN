import React, { useState } from "react";
import { View, Text, StyleSheet, Alert } from "react-native";
import { Input, Button } from "react-native-elements";
import { auth } from "../firebase";
// import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
// import AsyncStorage from "@react-native-async-storage/async-storage";

const RegisterScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [imageURL, setImageUrl] = useState("");
  const [password, setPassword] = useState("");

  const register = () => {
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Signed in
        console.log("Account created!");
        const user = userCredential.user;
        console.log(user);

        user
          .updateProfile({
            displayName: name,
            photoURL: imageURL
              ? imageURL
              : "https://media.istockphoto.com/vectors/user-avatar-profile-icon-black-vector-illustration-vector-id1209654046?k=20&m=1209654046&s=612x612&w=0&h=Atw7VdjWG8KgyST8AXXJdmBkzn0lvgqyWod9vTb2XoE=",
          })
          .then(() => {
            // Profile updated!
            // ...
            Alert.alert("Create Account!");
          })
          .catch((error) => {
            // An error occurred
            // ...
          });
      })
      .catch((error) => {
        // const errorCode = error.code;
        // const errorMessage = error.message;
        // ..
        console.log(error);
        Alert.alert(error.message);
      });
  };

  return (
    <View style={S.container}>
      <Input
        placeholder="Enter your name"
        label="Name"
        leftIcon={{ type: "material", name: "badge" }}
        value={name}
        onChangeText={(text) => setName(text)}
      />
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
      <Input
        placeholder="Enter your image Url"
        label="Profile Picture"
        leftIcon={{ type: "material", name: "face" }}
        value={imageURL}
        onChangeText={(text) => setImageUrl(text)}
      />
      <Button title="register" style={S.button} onPress={register} />
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

export default RegisterScreen;
