import React from 'react'
import {View,Text,StyleSheet,FlatList,TouchableOpacity, TextInput,Image, ScrollView} from 'react-native'
import { useNavigation } from '@react-navigation/native';

function KnoeIllnes() {
    const issue={
        id:"1",
        healthIssueName:"Rheumatiod artheitis (RA)",
        essay:"Rheumatoid arthritis (RA) is a chronic autoimmune disease that affects the joints.The body's immune system mistakenly attacks its own joint tissues, causing inflammation,pain, and potential joint damage. Commonly affected areas are hands, wrists, and feet,leading to swelling, stiffness, and redness. RA can also impact other body systems.Treatment focuses on symptom management, inflammation reduction, and preventing jointdamage through medications, physical therapy, and lifestyle changes. Early diagnosisand ongoing medical care are vital for effectively managing RA and maintaining a good quality of life.",
        date:"July/2023",
        vedio:require("../assets/issue.png")
    }
  return (
    <View style={styles.container}>
      <TextInput style={styles.input}
        placeholder='Search about the health Issues...'
      />
      <ScrollView>
      <Text style={styles.title}>In minutes</Text>
      <Image source={issue.vedio} style={styles.image}/>
      <Text style={styles.h2}>Know more</Text>
      <Text style={styles.issueTitle}>{issue.healthIssueName}</Text>
      <Text style={styles.date}>{issue.date}</Text>
      <Text style={styles.essay}>{issue.essay}</Text>
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