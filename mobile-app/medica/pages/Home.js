import React from 'react';
import {View ,Text,Image,StyleSheet,TextInput,TouchableOpacity, ScrollView,FlatList} from 'react-native'
import home from '../assets/home.png'
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';
import profile from '../assets/user.png'


const categories = [
 { id: '1', name: 'Medical', iconName: 'stethoscope',navigation:"Medical Services" },
 { id: '2', name: 'Community', iconName: 'users',navigation:"Communities" },
 { id: '3', name: 'Nutrition', iconName: 'apple',navigation:"Nutrition"  },
 { id: '4', name: 'Phsyology', iconName: 'heart-o',navigation:"Phsyology serviecs"  },
];
function Home() {
    const navigation = useNavigation();

    const renderItem = ({ item }) => (
        <TouchableOpacity style={styles.card} onPress={()=>{navigation.navigate(item.navigation, { category: item.name })}}>
            <View style={styles.iconContainer}>
                <FontAwesomeIcon name={item.iconName} size={40} color="#5774CB" />
            </View>
            <Text style={styles.cardTitle}>{item.name}</Text>
        </TouchableOpacity>
    );

  return (
    <View style={styles.container}>
<View style={styles.user}>
    <View style={styles.nameView}>
    <Image source={profile}/>
    <View>
        <Text style={styles.welcome}>Good Morning 👋</Text>
        <Text style={styles.name}>Majd Jadallah</Text>
    </View>
    </View>
    <View style={styles.icons}>
    <FontAwesomeIcon name='bell-o' color='#5774CB' size={20}/>
    <FontAwesomeIcon name='heart-o' color='#5774CB' size={20}/>
    </View>
    </View>
        <View style={styles.image}>
        <Image source={home}/>
        </View>
      <View>
      <Text style={styles.category}>Categories</Text>
      <FlatList
        data={categories}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        numColumns={2} // Display 2 columns
        columnWrapperStyle={styles.columnWrapper}
        />
      </View>
    </View>
  )
}

export default Home
const styles =StyleSheet.create({
    container:{
        flex: 1,
        // flexDirection: "column",
        backgroundColor: '#fff',
        // alignItems: 'start',
        // justifyContent: 'space-between',
        padding:16
    },
    image:{
    flexDirection:"row",
    justifyContent: "center",
    },
  category:{
    fontWeight:"bold",
    fontSize:24,
    marginBottom:10
  },
  card:{
    flexDirection: 'column',
    alignItems:"center",
    justifyContent: "center",
  },
  user:{
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:"center",
    gap:80
  }
  ,icons:{
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:"center",
    gap:10
  },
  nameView:{
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:"center",
    gap:20
  },
  name:{
    fontSize:20,
    fontWeight:"bold"
  },welcome:{
    color:"#757575",
    fontSize:16,
  },card: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    borderRadius: 24,
    padding: 16,
    margin: 8,
    alignItems: 'center',
},
iconContainer: {
    backgroundColor: '#E6E8EE',
    borderRadius: 50,
    padding: 16,
    marginBottom: 8,
},
cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
},
columnWrapper: {
    justifyContent: 'space-between', // Align items in two columns
},
})