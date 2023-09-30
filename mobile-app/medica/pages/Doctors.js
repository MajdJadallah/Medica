import React,{useEffect,useState} from "react";
import {View,Text,StyleSheet,FlatList,TouchableOpacity,Image,ScrollView,} from "react-native";
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import axios from 'axios';

 const filterDoctor = ["All", "General", "Neurologist", "Cardiologist", "Dermatologist", "Gastroenterologist", "Orthopedic Surgeon"];
 const filterLocation=[  "Amman","Zarqa","Irbid","Balqa","Mafraq","Jerash","Ajloun","Karak","Tafilah","Ma'an","Aqaba","Madaba"];

function Doctors({ route }) {
  const { category } = route.params;
  const [doctors,setDoctors]=useState([]);
  const [filters,setFilters]=useState([]);

  useEffect(() => {
    axios.get(" https://6e2e-2a01-9700-159d-7900-81ed-c2e1-1e39-b52.ngrok-free.app/api/doctors")
      .then((response) => {
        const allDoctors = response.data;
        console.log(allDoctors);
        let filteredDoctors = [];
        if (category === "Nutrition") {
          filteredDoctors = allDoctors.filter((doctor) => doctor.type === "Nutrition");
          setFilters(filterLocation);
        } else if (category === "Physiology") {
          filteredDoctors = allDoctors.filter((doctor) => doctor.type === "Physiology");
          setFilters(filterLocation);
        } else {
          filteredDoctors = allDoctors.filter((doctor) => doctor.type === "Medical");
          setFilters(filterDoctor);
        }
        setDoctors(filteredDoctors);
        console.log('Data received:', filteredDoctors);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }, [category]);

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.card}>
      <View style={styles.iconContainer}>
        <Image source={{ uri:item.avatar }} style={styles.image} />
        <View style={styles.text}>
          <View style={styles.like}>
          <Text style={styles.nameDoctor}>{item.name}</Text>
          <TouchableOpacity>
          <FontAwesomeIcon name="heart-o" size={20} color="#5774CB"/>
          </TouchableOpacity>
          </View>
          <View style={styles.smallText}>
          <Text style={styles.specialist}>{item.specialitst}</Text>
          <Text style={styles.center}>{item.currentEmployer}</Text>
          </View>
          <Text style={styles.reviewed}>( {item.review} reviews ) </Text>
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
        data={doctors}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

export default Doctors;

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
    width: 100,
    height:100,

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
    minHeight:50,
    height:50
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
