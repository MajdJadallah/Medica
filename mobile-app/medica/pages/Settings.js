import React from 'react';
import {View,Text,TouchableOpacity,StyleSheet,ScrollView,Image} from 'react-native';
import axios from "axios";
import { useRoute } from "@react-navigation/native";
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from "@react-navigation/native";


function Settings() {
    const route = useRoute();
    const { user} = route.params;
    console.log(user);
    const navigation = useNavigation();

 return (
    <View style={styles.container}>

  <ScrollView contentContainerStyle={styles.scrollContent}>
  <View style={styles.imageContainer}>
     <Image
       source={{uri:user.avatar}}
       style={styles.profileImage}
     />
             <Text style={styles.name}>{user.username}</Text>

        <Text style={styles.phone}>{user.phone}</Text>
   </View>
   <View>

   <TouchableOpacity
    style={styles.label}
    onPress={() => {
    navigation.navigate('Profile',{role:user.role});
  }} >
    <View style={styles.vieww}>
    <FontAwesomeIcon name='user-o' style={{marginRight:20}} size={20}/>
    <Text style={styles.section}>Edit Profile</Text>
    </View>
    <FontAwesomeIcon name='chevron-right' color='#5774CB' size={15}/>
   </TouchableOpacity>

   <TouchableOpacity style={styles.label}
   onPress={() => {
    navigation.navigate('HelpCenter');
  }}
   >
   <View style={styles.vieww}>
   <FontAwesomeIcon name='question-circle-o' style={{marginRight:20}} size={25}/>
    <Text style={styles.section}>Help Center</Text>
   </View>
    <FontAwesomeIcon name='chevron-right' color='#5774CB' size={15}/>

   </TouchableOpacity>

   <TouchableOpacity
   style={styles.logout}
   onPress={() => {
    navigation.navigate('SignIn');
  }}>
      <FontAwesomeIcon name='sign-out' style={{marginRight:20, color:"red"}} size={25}/>
    <Text style={styles.log}>Log out</Text>
   </TouchableOpacity>
   </View>
    </ScrollView>
    </View>

  );
};

const styles = StyleSheet.create({
    container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
    },
    scrollContent: {
      flexGrow: 1,
      padding: 20,
      paddingBottom: 100,
    },
    imageContainer: {
    alignItems: 'center',
    borderBottomColor: "#eee",
    borderBottomWidth: 2,
    marginBottom:40
    },
    profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20,
    },
    input: {
    borderBottomWidth: 1,
    borderColor: '#ccc',
    marginBottom: 20,
    paddingVertical: 10,
    },
    saveButton: {
    paddingVertical: 15,
    alignItems: 'center',
    backgroundColor: "#5774CB",
    borderRadius: 15,
    padding: 10,
    width: '100%',
    },
    saveButtonText: {
    fontWeight: 'bold',
    color: "#fff",
    fontSize: 20,
    textAlign: "center",
    },
    upload: {
     alignItems: 'center',
     backgroundColor: "#5774CB",
     borderRadius: 5,
     padding: 15,
     },
     uploadText: {
     color: "#fff",
     textAlign: "center",
     },
     name:{
        fontSize:24
     },
     phone:{
        marginBottom:20
     },
     label:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom:30
     },
     section:{
        fontSize:18,
        fontWeight: "bold",
     },
     logout:{
        padding:10,
        borderRadius: 5,
        flexDirection: 'row',
        alignItems: 'center',
    },
    log:{
        color: "red",
        fontSize:18,
    },
    vieww:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    }
   });

export default Settings;
