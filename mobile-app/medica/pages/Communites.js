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
  {id: "1",name: "Community one",image: require("../assets/community1.png"),specialist: "CFS",members:4267},
  {id: "2",name: "Community two",image: require("../assets/community2.png"),specialist: "CKD",members:4942},
  {id: "3",name: "Community three",image: require("../assets/community3.png"),specialist: "MS",members:6362},
  {id: "4",name: "Community four",image: require("../assets/community4.png"),specialist: "SLE",members:2504},
  {id: "5",name: "Community five",image: require("../assets/doctor5.png"),specialist: "CFS",members:3837},
  ];

  const filters = ["All", "SLE", "MS", "CKD", "CFS"];

function Hospitals() {
  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.card}>
      <View style={styles.iconContainer}>
        <Image source={item.image} style={styles.image} />
        <View style={styles.text}>
          <View style={styles.like}>
          <Text style={styles.nameCommunity}>{item.name}</Text>
          <TouchableOpacity>
          <FontAwesomeIcon name="plus" size={20} color="#5774CB"/>
          </TouchableOpacity>
          </View>
          <View style={styles.smallText}>
          <Text style={styles.specialist}>{item.specialist}</Text>
          <Text style={styles.reviewed}>( {item.members} members ) </Text>
          </View>
          {/* <Text style={styles.reviewed}>( {item.members} members ) </Text> */}
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
    fontSize:14,
    fontWeight:"bold"
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
  nameCommunity: {
    paddingBottom: 10,
    fontSize: 16,
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
    paddingHorizontal:16,
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
    color: "#5774CB",
    fontWeight:"bold",
    paddingLeft:10
  }
});
