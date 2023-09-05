import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

function Articles() {
  const ArticlesTrending = [
    { id: "1", name: "Stress and autoimmune diseases", image: require('../assets/article1.png') },
    { id: "2", name: "Mind-body connection in chronic illnesses", image: require('../assets/article2.png') },
    { id: "3", name: "Stress and autoimmune diseases", image: require('../assets/article1.png') },
    { id: "4", name: "Mind-body connection in chronic illnesses", image: require('../assets/article2.png') },
    { id: "5", name: "Stress and autoimmune diseases", image: require('../assets/article1.png') }
  ];
  const Articles = [
    { id: "1", name: "Stress and autoimmune diseases", image: require('../assets/article.png') ,Date:"Dec 22, 2022"},
    { id: "2", name: "Mind-body connection in chronic illnesses", image: require('../assets/article4.png'),Date:"Dec 22, 2022" },
    { id: "3", name: "Stress and autoimmune diseases", image: require('../assets/article1.png'),Date:"Dec 22, 2022" },
    { id: "4", name: "Mind-body connection in chronic illnesses", image: require('../assets/article2.png'),Date:"Dec 22, 2022" },
    { id: "5", name: "Stress and autoimmune diseases", image: require('../assets/article1.png'),Date:"Dec 22, 2022" }
  ];

  const renderArticle = ({ item }) => (
    <TouchableOpacity style={styles.articleContainer} key={item.id} onPress={()=>{navigation.navigate('ArticleDetails')}}>
      <View style={styles.article}>
        <Image source={item.image} style={styles.image} />
        <Text style={styles.articleName}>{item.name}</Text>
      </View>
    </TouchableOpacity>
  );
  const renderNews= ({ item }) => (
    <TouchableOpacity style={styles.articleContainer} key={item.id} onPress={()=>{navigation.navigate('ArticleDetails')}}>
      <View style={styles.articleNew}>
        <Image source={item.image} style={styles.imageNew} />
        <View>
        <Text style={styles.date}>{item.Date}</Text>
        <Text style={styles.articleName}>{item.name}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Trending</Text>
      <FlatList
        data={ArticlesTrending}
        renderItem={renderArticle}
        keyExtractor={(article) => article.id}
        horizontal
        style={{minHeight:220}}
      />
      <Text style={styles.titleNewest}>Newest</Text>
      <FlatList
        data={Articles}
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
