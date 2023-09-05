import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,Image, TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const first = require( '../assets/first.png');


function First() {
    const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View>
      <Image source={first} style={styles.image}/>
       <Text style={styles.text}>Connect with Thousands of Doctors and Experts for  Health</Text>
       <StatusBar backgroundColor='#5774CB' barStyle='light-content'/>
      </View>

    <View>
    <TouchableOpacity style={styles.button}
      onPress={() => navigation.navigate('Second')}
      >
        <Text style={styles.btnText}>Next</Text>
      </TouchableOpacity>
    </View>

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
    color:"#5774CB",
    fontSize:30,
    fontWeight:"bold",
    textAlign:"center",
    },
    btnText:{
    color:"#fff",
    fontSize:24
    },
    button:{
    backgroundColor:"#5774CB",
    borderRadius:15,
    padding:15,
    }
  });
export default First
