import React, { useState ,useContext}from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,Image, TouchableOpacity,TextInput,Button, ScrollView} from 'react-native';
import { useNavigation } from '@react-navigation/native';
const logo = require( '../assets/logo.png');
import axios from 'axios';
import jwtDecode from 'jwt-decode';


function SignIn() {
 const navigation = useNavigation();
 const [email, setEmail] = useState('');
 const [password, setPassword] = useState('');
 const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [loginError, setLoginError] = useState(""); // New state for login error
  // const { setData } = useContext(AppContext);
 const handleFormSubmit = () => {
  navigation.navigate('Home')
  };

  const validateEmail = () => {
    if (!email) {
      setEmailError("Email is required");
      return false;
    }
    if (!isValidEmail(email)) {
      setEmailError("Invalid email format");
      return false;
    }
    setEmailError("");
    return true;
  };

  const validatePassword = () => {
    if (!password) {
      setPasswordError("Password is required");
      return false;
    }
    setPasswordError("");
    return true;
  };

  const isValidEmail = (email) => {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(email);
  };

  const fetchPost = async () => {
    if (validateEmail() && validatePassword()) {

    try {
      const response = await axios.post(
        'https://465d-2a01-9700-159d-7900-1d25-39c0-9c3f-fd0f.ngrok-free.app/api/users/login',
        { email, password }
      );
      console.log(response.data);
      if (response.status === 200) {
        // Registration successful
      // const decodedToken = jwtDecode(token);
      const { adminId } = response.data;
      console.log("adminId", adminId);
      navigation.navigate('Home', { adminId });
      } else{
        setError("email or password not correct");
        navigation.navigate('SignIn');
        console.error('signin  failed');
      }
    } catch (error) {
      console.error('Error:', error);
      console.error('Error response:', error.response);
      // Handle network errors or other exceptions
    }
  }
  };



return (
 <View style={styles.container}>
 <Image source={logo}/>
 <Text style={styles.text}>Login to your Account</Text>
 <StatusBar backgroundColor='#5774CB' barStyle='light-content'/>
 <ScrollView style={styles.form}>
   <TextInput
     placeholder="Enter your email"
     value={email}
     onChangeText={setEmail}
     keyboardType="email-address"
     style={styles.input}
   />
   <TextInput
     placeholder="Enter your password"
     value={password}
     onChangeText={setPassword}
     secureTextEntry={true}
     style={styles.input}
   />
 <TouchableOpacity style={styles.button}
  onPress={fetchPost}
  >
  <Text style={styles.btnText}>Sign In</Text>
  </TouchableOpacity>
  <View style={styles.lastText}>
  <Text style={styles.gray}>Don’t have an account? </Text>
  <TouchableOpacity
  onPress={()=>{navigation.navigate('Home')}}
  >
  <Text style={styles.blue}> Sign Up</Text>
  </TouchableOpacity>
  </View>
  </ScrollView>
  
  </View>
)
}

const styles = StyleSheet.create({
container: {
flex: 1,
flexDirection: "column",
backgroundColor: '#fff',
alignItems: 'center',
justifyContent: 'space-evenly',
padding:30
},
image:{
width:300,
height:300,
},
text:{
color:"#000",
fontSize:30,
fontWeight:"bold",
textAlign:"center",
marginTop:30
},
btnText:{
color:"#fff",
fontSize:24,
textAlign:"center"
},
button:{
backgroundColor:"#5774CB",
borderRadius:15,
padding:10,
// width:"100%",
},
input:{
backgroundColor:"#FAFAFA",
color:"#000",
padding:15,
borderRadius:15,
// width:"100%",
margin:15
},
form:{
width:"100%",
height:"70%"
},
lastText:{
flex: 1,
flexDirection: "row",
alignItems: 'center',
justifyContent: 'center',
padding:20
},
gray:{
color:"#9E9E9E"
},blue:{
color:"#5774CB"
}
}) ;
export default SignIn;
