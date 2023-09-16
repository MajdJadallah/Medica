import React from 'react'
import {View,Text,StyleSheet,FlatList,TouchableOpacity} from 'react-native'
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import { useNavigation  ,useRoute} from '@react-navigation/native';


const categories = [
    { id: '1', name: 'Articles', iconName: 'file-text-o',navigation:"Articles"  },
    { id: '2', name: 'Specialiest', iconName: 'user-md',navigation:"Doctors" },
    { id: '3', name: 'Nutrition centers', iconName: 'hospital-o',navigation:"Hospitals"  },
    { id: '4', name: 'Relation', iconName: 'users',navigation:"Advices" },
];
function Nutrition () {
    const navigation = useNavigation();

    const route = useRoute()
    const categoryName = route.params?.category;

    const renderItem = ({ item }) => (
        <TouchableOpacity style={styles.card} onPress={()=>{navigation.navigate(item.navigation, { category: "Nutrition" })}}>
            <View style={styles.iconContainer}>
                <FontAwesomeIcon name={item.iconName} size={40} color="#5774CB" />
            </View>
            <Text style={styles.cardTitle}>{item.name}</Text>
        </TouchableOpacity>
    );
  return (
    <View style={styles.container}>
      <Text style={styles.category}>Categories</Text>
      <FlatList
                data={categories}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                numColumns={2} // Display 2 columns
                columnWrapperStyle={styles.columnWrapper}
            />
    </View>
  )
}

export default Nutrition
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        backgroundColor: '#fff',
        alignItems: 'start',
        justifyContent: 'start',
        padding:30
      },
      category:{
        fontSize:24,
        fontWeight:"bold",
        marginBottom:30
      },card: {
        flex: 1,
        backgroundColor: '#F5F5F5',
        borderRadius: 10,
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