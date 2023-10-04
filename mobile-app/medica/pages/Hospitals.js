import React,{useEffect,useState} from "react";
import {View,Text,StyleSheet,FlatList,TouchableOpacity,Image,ScrollView,} from "react-native";
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import axios from 'axios';


const filters = ["All", "Amman","Zarqa","Irbid", "Ajloun", "Salt"];

function Hospitals({ route }){
  const { category } = route.params;
  console.log(category);
  const [hospitals,setHospitals]=useState([]);
  const [valueFilters,setValueFilters]=useState('All');

  useEffect(() => {
    axios.get(" https://6e2e-2a01-9700-159d-7900-81ed-c2e1-1e39-b52.ngrok-free.app/api/hospitals")
      .then((response) => {
        const allHospitals = response.data.hospitals;
        console.log('Data received:', allHospitals);

        let filteredHospitals = [];

        if (category === "Nutrition" ) {
          filteredHospitals = allHospitals.filter((hospital) => hospital.nutrition === true  && (valueFilters == "All" || hospital.location == valueFilters));
          setHospitals(filteredHospitals);
        }
        else if( category === "Physiology"){
          filteredHospitals = allHospitals.filter((hospital) => hospital.phesylogy === true && (valueFilters == "All" || hospital.location == valueFilters));
          setHospitals(filteredHospitals);
        }
        else {
          filteredHospitals = allHospitals.filter((hospital) => hospital.medical === true && (valueFilters == "All" || hospital.location == valueFilters));
        }
        setHospitals(filteredHospitals);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }, [category,valueFilters]);

 const renderItem = ({ item }) => (
 <TouchableOpacity style={styles.card}>
  <View style={styles.iconContainer}>
   <Image source={{ uri:item.avatar }} style={styles.image} />
   <View style={styles.text}>
    <View style={styles.like}>
      <Text style={styles.nameHospital}>{item.name}</Text>
      {/* <TouchableOpacity>
//<FontAwesomeIcon name="plus" size={20} color="#5774CB"/>
      </TouchableOpacity> */}
    </View>
    <Text style={styles.location}>{item.timeWorking}</Text>
   </View>
  </View>
 </TouchableOpacity>
 );


 const renderFilter = (filter) => (
  <TouchableOpacity
    style={[
      styles.filter,
      valueFilters === filter ? styles.activeFilter : null,
    ]}
    key={filter}
    onPress={() => {
      setValueFilters(filter);
    }}>
    <Text style={[styles.textFilter, valueFilters === filter ? styles.activeText : null]}>{filter}</Text>
  </TouchableOpacity>
);
 return (
 <View style={styles.container}>
   <ScrollView style={styles.filters} horizontal>
     {filters.map((filter) => renderFilter(filter))}
   </ScrollView>
   <FlatList
   data={hospitals}
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
marginBottom: 8,
flexDirection: "row",
alignItems: "center",
justifyContent: "space-between",
},
text:{
width: "50%",
},
image: {
borderRadius: 10,
width: 100,
height:100,
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
fontSize: 15,
fontWeight: "bold",
borderBottomColor: "#eee",
borderBottomWidth: 1,
},
filters: {
flexDirection: "row",
marginBottom: 20,
maxHeight:60,
},
filter: {
borderWidth: 2,
borderColor: "#5774CB",
padding: 10,
borderRadius: 10,
margin: 5,
height:45
},
textFilter: {
color: "#5774CB",
fontWeight: "bold",
},
activeFilter: {
backgroundColor: "#5774CB",
},
activeText: {
color: "#fff",
},
like:{
flexDirection:"row",
justifyContent: "space-between",
borderBottomColor: "#eee",
borderBottomWidth: 1,
marginBottom:10
}
});
