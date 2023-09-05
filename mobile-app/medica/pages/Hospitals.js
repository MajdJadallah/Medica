import React from "react";
import {View,Text,StyleSheet,FlatList,TouchableOpacity,Image,ScrollView,} from "react-native";
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';


const categories = [
  {id: "1",name: "Center one",image: require("../assets/hospital1.png"),location: "Amman",},
  {id: "2",name: "Center two",image: require("../assets/hospital2.png"),location: "Amman",},
  {id: "3",name: "Center three",image: require("../assets/hospital3.png"),location: "Amman",},
  {id: "4",name: "Center four",image: require("../assets/hospital4.png"),location: "Amman",},
];
const filters = ["All", "Amman", "Irbid", "Ajloun", "Zarqa", "Salt"];

function Hospitals() {
 const renderItem = ({ item }) => (
 <TouchableOpacity style={styles.card}>
  <View style={styles.iconContainer}>
   <Image source={item.image} style={styles.image} />
   <View style={styles.text}>
    <View style={styles.like}>
      <Text style={styles.nameHospital}>{item.name}</Text>
      <TouchableOpacity>
      <FontAwesomeIcon name="plus" size={20} color="#5774CB"/>
      </TouchableOpacity>
    </View>
    <Text style={styles.location}>{item.location}</Text>
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
 paddingHorizontal: 20,
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
},text:{
width: "50%",
},
image: {
 borderRadius: 10,
},
iconContainer: {
 flexDirection: "row",
 alignItems: "center",
 justifyContent: "space-between",
 gap: 30,
},
location: {
 paddingTop: 10,
},
nameHospital: {
 width:"100%",
 paddingBottom: 10,
 fontSize: 18,
 fontWeight: "bold",
 borderBottomColor: "#eee",
 borderBottomWidth: 1,
},
filters: {
 flexDirection: "row",
//  marginBottom: 20,
 paddingVertical:20,
},
filter: {
 borderWidth: 2,
 borderColor: "#5774CB",
 padding: 10,
 borderRadius: 10,
 margin: 5,
},
textFilter: {
 color: "#5774CB",
 fontWeight: "bold",
},
like:{
 flexDirection:"row",
 justifyContent: "space-between",
 borderBottomColor: "#eee",
 borderBottomWidth: 1,
 marginBottom:10
}
});
