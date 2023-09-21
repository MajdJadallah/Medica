import React,{useEffect,useState} from "react";
import { View, Text, Image, StyleSheet, ScrollView, FlatList, TouchableOpacity } from 'react-native';
import image from '../assets/article.png';
import image2 from '../assets/advice3.png';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';

function AdviceDetails({route}) {
  const { adviceID } = route.params;
  const [advice,setAdvice]=useState({});
  const [advices,setAdvices]=useState([]);


  useEffect(() => {
    axios.get("https://465d-2a01-9700-159d-7900-1d25-39c0-9c3f-fd0f.ngrok-free.app/api/advices")
    .then((response) => {
    console.log("response of one advice");
    const advices = response.data.Advices;
    const filteredAdvice = advices.find((advice) => advice._id === adviceID)
    console.log(filteredAdvice);
    console.log(adviceID)
    setAdvices(advices);
    setAdvice(filteredAdvice)
    })
    .catch((error) => {
    console.error('Error:', error);
    });
  }, [adviceID]);




  const navigation = useNavigation();
  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.card} onPress={() => { navigation.navigate('AdviceDetails',{ adviceID: item._id }) }}>
    <View style={styles.iconContainer}>
      <Image source={image2} style={styles.image} />
      <View style={styles.text}>
        <View style={styles.like}>
          <Text style={styles.nameDoctor}>{item.title}</Text>
        </View>
        <View style={styles.smallText}>
        <Text style={styles.specialist}>{item.Date}</Text>
      </View>
      <Text style={styles.reviewed}>( {item.review} reviews ) </Text>
    </View>
    </View>
  </TouchableOpacity>
  );
return (
  <ScrollView style={styles.container}>
    <View style={styles.content}>
      <Image source={image} style={styles.imageArtile} />
      <View>
        <Text style={styles.Advice}>{advice.title}</Text>
        <Text style={styles.Date}>{advice.Date}</Text>
      </View>
      <Text style={styles.article}>{advice.description}</Text>
      <Text style={styles.ForYou}>For You</Text>
      <FlatList
        data={advices}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  </ScrollView>
)
    }
export default AdviceDetails;
const styles = StyleSheet.create({
container: {
  flex: 1,
  padding: 30,
},
content:{
flexDirection: "column",
},
flat:{
    textAlign:"right",
    paddingTop:20,
},
image: {
  borderRadius: 24,
  marginBottom: 20,
},
imageArtile: {
  borderRadius: 16,
  marginBottom: 20,
  width:"100%",
  // minHeight:300
},
Advice: {
  fontSize: 18,
  fontWeight: "bold",
  marginBottom: 10
},
Date: {
  textAlign: "justify",
  paddingBottom: 10,
  fontSize: 10,
  borderBottomColor: "#E7E7E7",
  borderBottomWidth: 2,
  marginBottom: 5,
},
article: {
  textAlign: "justify",
  lineHeight: 25,
  paddingTop: 10,
  borderBottomColor:"#E7E7E7",
  borderBottomWidth: 2,
  paddingBottom:20,
},
ForYou: {
  fontSize: 18,
  fontWeight: "bold",
  textAlign:"left",
  paddingTop:20,
},
category: {
  fontSize: 24,
  fontWeight: "bold",
  marginBottom: 30,
},
card: {
  flex: 1,
  backgroundColor: "#fff",
  borderRadius: 10,
  padding: 8,
  marginVertical: 8,
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
},
text: {
  width: "55%",
},
iconContainer: {
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  gap: 30,
},
specialist: {
  width: "50%",
  fontSize: 10,
},
center: {
  fontSize: 10,
  paddingLeft: 10
},
smallText: {
  flexDirection: "row",
  justifyContent: "space-between",
  width: "100%",
  alignContent: "center",
},
nameDoctor: {
  paddingBottom: 10,
  fontSize: 12,
  fontWeight: "bold",
},
like: {
  flexDirection: "row",
  justifyContent: "space-between",
  borderBottomColor: "#eee",
  borderBottomWidth: 2,
  marginBottom: 10
},
reviewed: {
  fontSize: 10,
  marginTop: 10,
  color: "#5774CB",
  fontWeight: "bold",
}
})