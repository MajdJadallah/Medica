import React,{useEffect,useState} from "react";
import {View ,Text,Image,StyleSheet,TouchableOpacity,FlatList} from 'react-native'
import home from '../assets/home.png'
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from "@react-navigation/native";
import profile from '../assets/user.png'
import axios from 'axios';
import { useRoute } from "@react-navigation/native";

const categories = [
 { id: '1', name: 'Medical', iconName: 'stethoscope',navigation:"Medical Services" },
 { id: '2', name: 'Community', iconName: 'users',navigation:"Communities" },
 { id: '3', name: 'Nutrition', iconName: 'apple',navigation:"Nutrition"  },
 { id: '4', name: 'Phsyology', iconName: 'heart-o',navigation:"Phsyology serviecs"  },
];
function Home() {
  const route = useRoute();
const { adminId, role , userData} = route.params;
const navigation = useNavigation();

console.log(role);

// Define the base URL based on the role
let url = "https://6e2e-2a01-9700-159d-7900-81ed-c2e1-1e39-b52.ngrok-free.app/api/users/";

if (role === 'doctor') {
  url = "https://6e2e-2a01-9700-159d-7900-81ed-c2e1-1e39-b52.ngrok-free.app/api/doctors/";
}

const [username, setUsername] = useState('');
const [avatar, setAvatar] = useState('');
const [user, setUser] = useState('');

useEffect(() => {
  axios.get(`${url}${adminId}`)
    .then((response) => {
      console.log('Response Data:', response.data);
      const userData = role === 'doctor' ? response.data.doctor : response.data.user;
      console.log(`userData is :`);
      console.log(userData);

      if (role==='user'&& userData && userData.username) {
        setUsername(userData.username);
        setAvatar(userData.avatar);
        setUser(userData);
        console.log(`the avatar is :${userData.avatar}`);
      } else if((role==='doctor'&& userData && userData.name)){
        setUsername(userData.name);
        setAvatar(userData.avatar);
        setUser(userData);
        console.log(`the avatar is :${userData.avatar}`);
      }else{
        console.error('User data or name not found in response');
      }
    })
    .catch((error) => {
      console.error('Error:', error);
    });
}, []);


const renderItem = ({ item }) => (
  <TouchableOpacity style={styles.card} onPress={()=>{navigation.navigate(item.navigation, { category: item.name ,userData})}}>
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
<Image source={{ uri:avatar }} style={styles.profile} />
 <View>
  <Text style={styles.welcome}>Welcome👋</Text>
  <Text style={styles.name}>{username}</Text>
  </View>
  </View>
  <View style={styles.icons}>
  <TouchableOpacity
   onPress={() => {
    navigation.navigate('Settings', {user: user });
  }}  >
  <FontAwesomeIcon name='user-o' color='#5774CB' size={25}/>
  </TouchableOpacity>
  <FontAwesomeIcon name='heart-o' color='#5774CB' size={25}/>
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
      numColumns={2}
      columnWrapperStyle={styles.columnWrapper}
      />
    </View>
    {/* <BottomTab /> */}
  </View>
  )
}

export default Home
const styles =StyleSheet.create({
container:{
flex: 1,
backgroundColor: '#fff',
padding:16
},
profile:{
width: 70,
height: 70,
borderRadius:70/2,
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
},
welcome:{
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
justifyContent: 'space-between',
},
})