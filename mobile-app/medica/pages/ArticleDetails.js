import React,{useEffect,useState} from "react";
import {View,Text,Image,StyleSheet,ScrollView} from 'react-native'
import image from '../assets/article.png'
import axios from 'axios';



function ArticleDetails({route}) {
  const { articleID } = route.params;
  const [article,setArticle]=useState('');

  useEffect(() => {
    axios.get(`https://465d-2a01-9700-159d-7900-1d25-39c0-9c3f-fd0f.ngrok-free.app/api/articles/${articleID}`)
    .then((response) => {
    console.log("response of one article");
    const article = response.data.article;
    console.log(article);
    setArticle(article)
    })
    .catch((error) => {
    console.error('Error:', error);
    });
  }, [articleID]);

  return (
    <View style={styles.container}>
    <Image source={image} style={styles.image}/>
      <View>
      <Text style={styles.text}>{article.title} </Text>
      <Text style={styles.Date}>{article.publishedDate}</Text>
      </View>
      <ScrollView>
      <Text style={styles.article}>{article.content}</Text>
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
  padding: 10,
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