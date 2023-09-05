import React from 'react'
import {View,Text,Image,StyleSheet,ScrollView} from 'react-native'
import image from '../assets/article.png'
function ArticleDetails() {
  return (
    <View style={styles.container}>
    <Image source={image} style={styles.image}/>
      <View>
        <Text style={styles.text}>Psychological health and rheumatoid arthritis </Text>
      <Text style={styles.Date}>Dec 22, 2022</Text>
      </View>
      <ScrollView>
      <Text style={styles.article}>Mental health issues are not something that immediately comes to mind when you
      think of leprosy or lymphatic filariasis (LF). It is only right that we concern ourselves with the physical
      effects of the condition first and foremost, but the social and financial effects are immense too and
      contribute significantly to the wellbeing of people affected.
      At Lepra, we believe good mental health is critical for people affected by leprosy or LF, we believe in whole-person care,
       and we believe it’s essential that mental wellbeing support is provided together with physical health care.
      Why mental health matters
      One in two people who receive a diagnosis of leprosy or LF will also be affected by mental health problems. Mental health
      problems are especially high among people who develop disabilities as a result of their disease. This includes severe
       depression and anxiety and low self-esteem.
      We have worked with leprosy for nearly one hundred years; time and time again we have observed how people’s
      lives change when they are diagnosed, or even suspect they are affected, with leprosy. They can be keenly
      aware of very real prejudice and discrimination, scared of potential disability or what their friends, family,
      and neighbours will think. It is also the same for people affected by LF.</Text>
      </ScrollView>
      
    </View>
  )
}

export default ArticleDetails

const styles = StyleSheet.create({
 container: {
  flex: 1,
  flexDirection: "column",
  backgroundColor: '#fff',
  alignItems: 'center',
  padding: 30,
 },
 image:{
 borderRadius: 24,
 marginBottom:20
 },
 text:{
 fontSize:18,
 fontWeight:"bold",
 marginBottom:10
 },
 Date:{
 textAlign:"justify",
 paddingBottom:10,
 fontSize:10,
 borderBottomColor:"#EEEEEE",
 borderBottomWidth:2,
 marginBottom:5,

 },
 article:{
 textAlign:"justify",
 lineHeight:25,

 paddingTop:10
 }
})