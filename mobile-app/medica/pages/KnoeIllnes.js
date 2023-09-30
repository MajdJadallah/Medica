import React,{useEffect,useState} from "react";
import {View,Text,StyleSheet,TextInput,Image, ScrollView} from 'react-native'
import axios from 'axios';
import { useRoute  } from '@react-navigation/native';

function KnoeIllnes() {
  const id="6517dab1fc832b651cd33f96";
  const route = useRoute()

  const {userData} = route.params;
  console.log("userData is:-", userData.healthIssue);
const [issue,setIssue] = useState("");
const [issues,setIssues] = useState("");
    useEffect(() => {
      axios.get(" https://6e2e-2a01-9700-159d-7900-81ed-c2e1-1e39-b52.ngrok-free.app/api/illenese")
      .then((response) => {
      const issues = response.data.Illenses;
      console.log(issues);
      const filteredissue = issues.find((issue) => issue.title === userData.healthIssue)
      console.log(`filtered issues :${filteredissue}`);
      setIssues(issues);
      setIssue(filteredissue)
      })
      .catch((error) => {
      console.error('Error:', error);
      });
    }, []);
    const formatDate = (dateString) => {
      const options = { day: 'numeric', month: 'long', year: '2-digit' };
      const date = new Date(dateString);
      return date.toLocaleDateString('en-GB', options);
    };
  return (
    <View style={styles.container}>
      <TextInput style={styles.input}
        placeholder='Search about the health Issues...'
      />
      <ScrollView>
      <Text style={styles.title}>In minutes</Text>
      <Image source={{ uri:issue.avatar }} style={styles.image}/>
      <Text style={styles.h2}>Know more</Text>
      <Text style={styles.issueTitle}>{issue.title}</Text>
      <Text style={styles.date}>{formatDate(issue.date)}</Text>
      <Text style={styles.essay}>{issue.content}</Text>
      </ScrollView>
    </View>
  )
}

export default KnoeIllnes
const styles = StyleSheet.create({
container: {
 flex: 1,
 flexDirection: "column",
 backgroundColor: '#fff',
 alignItems: 'start',
 justifyContent: 'start',
 padding:20,
},
input:{
 backgroundColor:"#F5F5F5",
 padding:10,
 borderRadius:10,
},
image:{
 borderRadius:10,
 marginTop:20,
 width: 400,
 height:225,
},
title:{
 fontSize:24,
 fontWeight:"bold",
 marginTop:20,
},
h2:{
 fontSize:24,
 fontWeight:"bold",
},
essay:{
 fontSize:16,
 textAlign:"justify",
 lineHeight:20,
},
date:{
 color:"#B5B5B5",
 marginBottom:10,
},
issueTitle:{
 fontWeight:"bold",
 fontSize:16,
 marginTop:30
}
})