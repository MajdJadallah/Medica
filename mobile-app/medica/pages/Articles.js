import React,{useEffect,useState} from "react";
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';

function Articles({ route }) {
  const { category } = route.params;
  const [articles,setArticles]=useState([]);
  const [trending,setTrending]=useState([]);
  const [filters,setFilters]=useState([]);

  useEffect(() => {
    axios.get(" https://6e2e-2a01-9700-159d-7900-81ed-c2e1-1e39-b52.ngrok-free.app/api/articles")
      .then((response) => {
        const allArticles = response.data.Articles;
        console.log(allArticles);
        let filteredArticles = [];
        if (category === "Nutrition") {
          filteredArticles = allArticles.filter((article) => article.type === "nutrition");
          trendingArticles=filteredArticles.filter((trendArticle)=>trendArticle.trending===true)
        } else if (category === "Physiology") {
          filteredArticles = allArticles.filter((article) => article.type === "physiology");
          trendingArticles=filteredArticles.filter((trendArticle)=>trendArticle.trending===true)
        }
        setArticles(filteredArticles);
        setTrending(trendingArticles);
        console.log('Data received:', filteredArticles);
        console.log('Data received trendingArticles:', trendingArticles);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }, [category]);
  const renderArticle = ({ item }) => (
    <TouchableOpacity style={styles.articleContainer} key={item.id} onPress={()=>{navigation.navigate('ArticleDetails',{ articleID: item._id })}}>
      <View style={styles.article}>
        <Image source={require('../assets/article.png')} style={styles.image} />
        <Text style={styles.articleName}>{item.title}</Text>
      </View>
    </TouchableOpacity>
  );
  const renderNews= ({ item }) => (
    <TouchableOpacity style={styles.articleContainer} key={item.id} onPress={()=>{navigation.navigate('ArticleDetails',{ articleID: item._id })}}>
      <View style={styles.articleNew}>
        <Image source={require('../assets/article2.png')} style={styles.imageNew} />
        <View>
        <Text style={styles.date}>{item.publishedDate}</Text>
        <Text style={styles.articleName}>{item.title}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Trending</Text>
      <FlatList
        data={trending}
        renderItem={renderArticle}
        keyExtractor={(article) => article.id}
        horizontal
        style={{minHeight:220}}
      />
      <Text style={styles.titleNewest}>Newest</Text>
      <FlatList
        data={articles}
        renderItem={renderNews}
        keyExtractor={(article) => article.id}
      />
    </View>
  )
}

export default Articles;

const styles = StyleSheet.create({
 container: {
  flex: 1,
  flexDirection: "column",
  backgroundColor: '#fff',
  alignItems: 'start',
  justifyContent: 'start',
  padding: 30,
 },
 title: {
  fontWeight: "bold",
  fontSize: 20,
 },
 articleContainer: {
  marginHorizontal: 5,
 },
 article: {
  backgroundColor: '#fff',
  borderRadius: 10,
  padding: 10,
  width: 200,
  },
  articleNew: {
  flexDirection: "row",
  justifyContent:"space-between",
  gap:30,
  backgroundColor: '#fff',
  borderRadius: 10,
  padding: 10,
  width: 200,
  },
 image: {
  width: '100%',
  height: 100,
  borderRadius: 10,
  },
  imageNew: {
  width: '50%',
  height: 80,
  borderRadius: 10,
 },
 articleName: {
  marginTop: 10,
  fontSize: 14,
  fontWeight: "bold",
 },
 date:{
  fontSize: 10,
  color:"#3A3A3A"
 },
 titleNewest:{
  fontWeight: "bold",
  fontSize: 20,
  marginBottom:30,
 }
});
