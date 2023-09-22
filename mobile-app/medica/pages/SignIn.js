import React, { useState } from "react";
import {StyleSheet,Text,View,Image,TouchableOpacity,TextInput,ScrollView} from "react-native";
import axios from "axios";
import { useNavigation } from "@react-navigation/native";
const logo = require("../assets/logo.png");
import AsyncStorage from '@react-native-async-storage/async-storage';

// import { getData } from  './SignUp';

function SignIn() {
  const navigation = useNavigation();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [loginError, setLoginError] = useState("");

  const getData = async (key) => {
    try {
      const value = await AsyncStorage.getItem(key);
      return JSON.parse(value); // Parse the value here
    } catch (error) {
      console.log('Error retrieving data:', error);
      return null;
    }
  };

  const validateEmail = (email) => {
    if (!email) {
      setEmailError("Email is required");
      return false;
    } else {
      const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
      if (!emailPattern.test(email)) {
        setEmailError("Invalid email format");
        return false;
      } else {
        setEmailError(""); // Clear any previous error
        return true;
      }
    }
  };

  const validatePassword = (password) => {
    if (!password) {
      setPasswordError("Password is required");
      return false;
    } else {
      setPasswordError(""); // Clear any previous error
      return true;
    }
  };
  const onSignInPress = async () => {
    validateEmail(email);
    validatePassword(password);
    if (validateEmail(email) && validatePassword(password)) {
      try {
        const response = await axios.post(
          "https://6e2e-2a01-9700-159d-7900-81ed-c2e1-1e39-b52.ngrok-free.app/api/users/login", // Replace with your actual API endpoint URL
          { email, password }
        );
        if (response.status === 200) {
        const { adminId } = response.data;

        const profile = await getData('profile');

        if (profile === true) { 
          navigation.navigate("Profile", { adminId });
          
        } else {
          navigation.navigate("Home", { adminId });
        }
        } else if (response.status === 404) {
          setLoginError("User not found. Sign up instead.");
        } else if (response.status === 400 || response.status === 401) {
          setLoginError(response.data.error);
        } else {
          setLoginError("Email or password not correct");
        }
      } catch (error) {
        if (error.response) {
          // Axios error with a response from the server
          if (error.response.status === 404) {
            setLoginError("User not found. Sign up instead.");
          } else if (error.response.status === 400 || error.response.status === 401) {
            setLoginError(error.response.data.error);
          } else {
            setLoginError("Email or password not correct");
          }
        } else {
          // Other network or client-side error
          console.log("Error:", error);
          // setLoginError("An error occurred during login");
        }
      }
    }
  };

  return (
    <View style={styles.container}>
    <Image source={logo} />
    <ScrollView style={styles.form}>
      <Text style={styles.text}>Login to your Account</Text>
      <TextInput
        placeholder="Enter your email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        style={styles.input}
      />
      {emailError ? <Text style={styles.errorText}>{emailError}</Text> : null}
      <TextInput
        placeholder="Enter your password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry={true}
        style={styles.input}
      />
      {passwordError ? <Text style={styles.errorText}>{passwordError}</Text> : null}

      {loginError ? <Text style={styles.errorText}>{loginError}</Text> : null}
      <TouchableOpacity style={styles.button} onPress={onSignInPress}>
        <Text style={styles.btnText}>Sign In</Text>
      </TouchableOpacity>
      <View style={styles.lastText}>
       <Text style={styles.gray}>Don’t have an account? </Text>
       <TouchableOpacity onPress={() => navigation.navigate("SignIn")}>
        <Text style={styles.blue}> Sign Up</Text>
       </TouchableOpacity>
      </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
container: {
 flex: 1,
 flexDirection: "column",
 backgroundColor: "#fff",
 alignItems: "center",
 justifyContent: "space-evenly",
 padding: 30,
},
image: {
 width: 300,
 height: 300,
},
text: {
 color: "#000",
 fontSize: 30,
 fontWeight: "bold",
 textAlign: "center",
 marginTop: 30,
},
btnText: {
  color: "#fff",
  fontSize: 24,
  textAlign: "center",
},
button: {
  backgroundColor: "#5774CB",
  borderRadius: 15,
  padding: 10,
  width: '100%',

},
input: {
  backgroundColor: "#FAFAFA",
  color: "#000",
  padding: 15,
  borderRadius: 15,
  margin: 10,
  width: '100%',

},
form: {
  width: "100%",
  height: "70%",

},
lastText: {
  flex: 1,
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
  padding: 20,
},
gray: {
  color: "#9E9E9E",
},
blue: {
  color: "#5774CB",
},
errorText: {
  color: "red",
  fontSize: 14,
  marginBottom: 10,
  paddingHorizontal: 20,
},
  });
export default SignIn;
