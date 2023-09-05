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

const categories = [
  {id: "1",name: "Dr. Randy Wigham",image: require("../assets/doctor1.png"),specialist: "Neurologist",center:"The Valley Hospital",reviewed:4267},
  {id: "2",name: "Dr. Jenny Watson",image: require("../assets/doctor2.png"),specialist: "Dermatologist",center:"Christ Hospital",reviewed:4942},
  {id: "3",name: "Dr. Raul Zirkind",image: require("../assets/doctor3.png"),specialist: "Cardiologist",center:"Franklin Hospital",reviewed:6362},
  {id: "4",name: "Dr. Elijah Baranick",image: require("../assets/doctor4.png"),specialist: "General",center:"JFK Medical Center",reviewed:2504},
  {id: "5",name: "Dr. Stephen Shute",image: require("../assets/doctor5.png"),specialist: "Neurologist",center:"Alka Hospital",reviewed:3837},
  ];

  const filters = ["All", "General", "Neurologist", "Cardiologist", "Dermatologist", "Gastroenterologist", "Orthopedic Surgeon"];

function Hospitals() {
  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.card}>
      <View style={styles.iconContainer}>
        <Image source={item.image} style={styles.image} />
        <View style={styles.text}>
          <View style={styles.like}>
          <Text style={styles.nameDoctor}>{item.name}</Text>
          <TouchableOpacity>
          <FontAwesomeIcon name="heart-o" size={20} color="#5774CB"/>
          </TouchableOpacity>
          </View>
          <View style={styles.smallText}>
          <Text style={styles.specialist}>{item.specialist}</Text>
          <Text style={styles.center}>{item.center}</Text>
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
    borderRightWidth:1,
    borderRightColor: "#000",
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
