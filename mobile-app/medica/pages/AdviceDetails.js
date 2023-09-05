import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, FlatList, TouchableOpacity } from 'react-native';
import image from '../assets/article.png';
import { useNavigation } from '@react-navigation/native';

const categories = [
    {id: "1",name: "Focus on Positive Coping Strategies",image: require("../assets/advice1.png"),date: "Dec 22, 2022",reviewed:4267},
    {id: "2",name: "Educate Yourself",image: require("../assets/advice2.png"),date: "Dec 22, 2022",reviewed:4942},
    {id: "3",name: "Practice Mindfulness and Meditation",image: require("../assets/advice3.png"),date: "Dec 22, 2022",reviewed:6362},
    {id: "4",name: "Communicate with Healthcare Providers",image: require("../assets/advice1.png"),date: "Dec 22, 2022",reviewed:2504},
    {id: "5",name: "Focus on Positive Coping Strategies",image: require("../assets/advice4.png"),date: "Dec 22, 2022",reviewed:3837},
    ];
    function ArticleDetails() {
        const navigation = useNavigation();

        const renderItem = ({ item }) => (
          <TouchableOpacity style={styles.card} onPress={() => { navigation.navigate('AdviceDetails') }}>
            <View style={styles.iconContainer}>
              <Image source={item.image} style={styles.image} />
              <View style={styles.text}>
                <View style={styles.like}>
                  <Text style={styles.nameDoctor}>{item.name}</Text>
                </View>
                <View style={styles.smallText}>
                  <Text style={styles.specialist}>{item.date}</Text>
                </View>
                <Text style={styles.reviewed}>( {item.reviewed} reviews ) </Text>
              </View>
            </View>
          </TouchableOpacity>
        );

        return (
          <ScrollView style={styles.container}>
            <View style={styles.content}>
            <Image source={image} style={styles.imageArtile} />
            <View>
              <Text style={styles.Advice}>Psychological health and rheumatoid arthritis </Text>
              <Text style={styles.Date}>Dec 22, 2022</Text>
            </View>
            <Text style={styles.article}> Develop healthy coping mechanisms to deal with stress and difficult emotions. Engage in activities you enjoy, such as hobbies, reading, or spending time in nature, to distract yourself from negative thoughts..</Text>
            <Text style={styles.ForYou}>For You</Text>
            <FlatList
              data={categories}
              renderItem={renderItem}
              keyExtractor={(item) => item.id}
            />
            </View>
          </ScrollView>
        )
      }
      export default ArticleDetails;
    //   const styles = StyleSheet.create({
    //     container: {
    //       flex: 1,
    //       backgroundColor: '#fff',
    //       padding: 30,
    //     },
    //     content:{
    // flexDirection: "column",
    // justifyContent: "center",
    // alignItems: "center",
    //     },
    //     image: {
    //       borderRadius: 24,
    //       marginBottom: 20,
    //     },
    //     imageArtile: {
    //       borderRadius: 16,
    //       marginBottom: 20,
    //       width:"100%"
    //     },
    //     Advice: {
    //       fontSize: 18,
    //       fontWeight: "bold",
    //       marginBottom: 10
    //     },
    //     Date: {
    //       textAlign: "justify",
    //       paddingBottom: 10,
    //       fontSize: 10,
    //       borderBottomColor: "#EEEEEE",
    //       borderBottomWidth: 2,
    //       marginBottom: 5,
    //     },
    //     article: {
    //       textAlign: "justify",
    //       lineHeight: 25,
    //       paddingTop: 10
    //     },
    //     ForYou: {
    //       fontSize: 18,
    //       fontWeight: "bold",
    //     },
    //     category: {
    //       fontSize: 24,
    //       fontWeight: "bold",
    //       marginBottom: 30,
    //     },
    //     card: {
    //       flex: 1,
    //       backgroundColor: "#FDFDFD",
    //       borderRadius: 10,
    //       padding: 16,
    //       margin: 8,
    //       flexDirection: "row",
    //       alignItems: "center",
    //       justifyContent: "space-between",
    //     },
    //     text: {
    //       width: "55%",
    //     },
    //     iconContainer: {
    //       flexDirection: "row",
    //       alignItems: "center",
    //       justifyContent: "space-between",
    //       gap: 30,
    //     },
    //     specialist: {
    //       width: "50%",
    //       fontSize: 10,
    //     },
    //     center: {
    //       fontSize: 10,
    //       paddingLeft: 10
    //     },
    //     smallText: {
    //       flexDirection: "row",
    //       justifyContent: "space-between",
    //       width: "100%",
    //       alignContent: "center",
    //     },
    //     nameDoctor: {
    //       paddingBottom: 10,
    //       fontSize: 12,
    //       fontWeight: "bold",
    //     },
    //     like: {
    //       flexDirection: "row",
    //       justifyContent: "space-between",
    //       borderBottomColor: "#eee",
    //       borderBottomWidth: 2,
    //       marginBottom: 10
    //     },
    //     reviewed: {
    //       fontSize: 10,
    //       marginTop: 10,
    //       color: "#5774CB",
    //       fontWeight: "bold",
    //     }
    //   })
    const styles = StyleSheet.create({
        container: {
          flex: 1,
        //   backgroundColor: '#E7E7E7',
          padding: 30,
        },
        content:{
    flexDirection: "column",
    // justifyContent: "start",
    // alignItems: "center",
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
          width:"100%"
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