import React,{useEffect,useState} from "react";
import {View,Text,StyleSheet,TextInput,Image, ScrollView} from 'react-native'
import axios from 'axios';

function KnoeIllnes() {
  const id="6505c3eafc832b651cd33f74"
    const healthissue={
        id:"1",
        title:"Rheumatiod artheitis (RA)",
        content:"Rheumatoid arthritis (RA) is a chronic autoimmune disease that affects the joints.The body's immune system mistakenly attacks its own joint tissues, causing inflammation,pain, and potential joint damage. Commonly affected areas are hands, wrists, and feet,leading to swelling, stiffness, and redness. RA can also impact other body systems.Treatment focuses on symptom management, inflammation reduction, and preventing jointdamage through medications, physical therapy, and lifestyle changes. Early diagnosisand ongoing medical care are vital for effectively managing RA and maintaining a good quality of life.",
        date:"July/2023",
        avatar:require("../assets/issue.png")
    }
const [issue,setIssue] = useState("");
const [issues,setIssues] = useState("");
    useEffect(() => {
      axios.get(" https://6e2e-2a01-9700-159d-7900-81ed-c2e1-1e39-b52.ngrok-free.app/api/illenese")
      .then((response) => {
      const issues = response.data.Illenses;
      const filteredissue = issues.find((issue) => issue._id === id)
      console.log(issues);
      setIssues(issues);
      setIssue(filteredissue)
      })
      .catch((error) => {
      console.error('Error:', error);
      });
    }, []);
  return (
    <View style={styles.container}>
      <TextInput style={styles.input}
        placeholder='Search about the health Issues...'
      />
      <ScrollView>
      <Text style={styles.title}>In minutes</Text>
      <Image source={require('../assets/issue.png')} style={styles.image}/>
      <Text style={styles.h2}>Know more</Text>
      <Text style={styles.issueTitle}>{issue.title}</Text>
      <Text style={styles.date}>{issue.date}</Text>
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
 width: "100%",
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
 color:"#B5B5B5"
},
issueTitle:{
 fontWeight:"bold",
 fontSize:16,
 marginTop:30
}
})