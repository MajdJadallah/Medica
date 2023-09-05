import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,Image, TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';
const second = require( '../assets/second.png');


function Second() {
    const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View>
      <Image source={second} style={styles.image}/>
       <Text style={styles.text}> Connect, Share, and Thrive Together in the Medica Community!</Text>
       <StatusBar backgroundColor='#5774CB' barStyle='light-content'/>
      </View>

    <View>
    <TouchableOpacity style={styles.button}
      onPress={() => navigation.navigate('Third')}
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
export default Second
