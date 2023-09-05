import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';

const categories = [
  {id: "1",name: "Focus on Positive Coping Strategies",image: require("../assets/advice1.png"),date: "Dec 22, 2022",reviewed:4267},
  {id: "2",name: "Educate Yourself",image: require("../assets/advice2.png"),date: "Dec 22, 2022",reviewed:4942},
  {id: "3",name: "Practice Mindfulness and Meditation",image: require("../assets/advice3.png"),date: "Dec 22, 2022",reviewed:6362},
  {id: "4",name: "Communicate with Healthcare Providers",image: require("../assets/advice1.png"),date: "Dec 22, 2022",reviewed:2504},
  {id: "5",name: "Focus on Positive Coping Strategies",image: require("../assets/advice4.png"),date: "Dec 22, 2022",reviewed:3837},
  ];

  const filters = ["All", "Newset"];

function Hospitals() {
  const navigation = useNavigation();

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.card} onPress={()=>{navigation.navigate('AdviceDetails')}}>
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

  const renderFilter = (filter) => (
    <TouchableOpacity style={styles.filter} key={filter}>
      <Text style={styles.textFilter}>{filter}</Text>
    </TouchableOpacity>
  );
  return (
    <View style={styles.container}>
        <ScrollView style={styles.filters} horizontal>
        {filters.map((filter) => renderFilter(filter))}
      </ScrollView>
      <FlatList
        data={categories}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

export default Hospitals;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "start",
    justifyContent: "start",
    padding: 10,
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
    padding: 16,
    margin: 8,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  text:{
    width: "55%",
  },
  image:{
    borderRadius: 10,
  },
  iconContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 30,
  },
  specialist: {
    width: "50%",
    fontSize:10,
  },
  center:{
    fontSize:10,
    paddingLeft:10
  },
  smallText:{
    flexDirection:"row",
    justifyContent: "space-between",
    width: "100%",
    alignContent:"center",
  },
  nameDoctor: {
    paddingBottom: 10,
    fontSize: 12,
    fontWeight: "bold",
  },
  filters: {
    flexDirection: "row",
    marginBottom: 20,
    minHeight:50
  },
  filter: {
    borderWidth: 2,
    borderColor: "#5774CB",
    padding: 8,
    borderRadius: 10,
    margin: 5,
    textAlign:"center",
  },
  textFilter: {
    color: "#5774CB",
    fontWeight: "bold",
  },
  like:{
    flexDirection:"row",
    justifyContent: "space-between",
    borderBottomColor: "#eee",
    borderBottomWidth: 2,
    marginBottom:10
  },reviewed:{
    fontSize:10,
    marginTop:10,
    color: "#5774CB",
    fontWeight:"bold",
  }
});
