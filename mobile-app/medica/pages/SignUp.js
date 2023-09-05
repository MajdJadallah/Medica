import React, { useState }from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,Image, TouchableOpacity,TextInput,Button, ScrollView} from 'react-native';
import { useNavigation } from '@react-navigation/native';
const logo = require( '../assets/logo.png');

function SignUp() {
    const navigation = useNavigation();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleFormSubmit = () => {
      navigation.navigate('SignIn')
      // console.log('Name:', name);
      // console.log('Email:', email);
      // console.log('Password:', password);
      };

    return (
    <View style={styles.container}>
    <Image source={logo}/>
    <Text style={styles.text}>Create New Account</Text>
    <StatusBar backgroundColor='#5774CB' barStyle='light-content'/>

    <ScrollView style={styles.form}>
    <TextInput
        placeholder="Enter your name"
        value={name}
        onChangeText={setName}
        style={styles.input}
      />

     
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
      onPress={handleFormSubmit}
      >
        <Text style={styles.btnText}>Sign Up</Text>
      </TouchableOpacity>
      <View style={styles.lastText}>
      <Text style={styles.gray}>Already have an account ?  </Text>
      <TouchableOpacity
      onPress={()=>{navigation.navigate('SignIn')}}
      >
      <Text style={styles.blue}> Sign In</Text>
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
    width:"100%",
    },
    input:{
    backgroundColor:"#FAFAFA",
    color:"#000",
    padding:15,
    borderRadius:15,
    width:"100%",
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
  });
export default SignUp
