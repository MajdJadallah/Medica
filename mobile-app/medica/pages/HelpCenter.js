import React, { useState }from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,TextInput, ScrollView, TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';


function SignUp() {
  const FAQS=[{
   id:1,
   question:"What is Medica?",
   answer:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
   },
   {
   id:2,
   question:"How to use Medica?",
   answer:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
   },
   {
   id:3,
   question:"How do I cancel an appointment?",
   answer:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
   }
   ]
    const navigation = useNavigation();
    // const [isOpen, setIsOpen] = useState(false);
    const [openQuestions, setOpenQuestions] = useState([]);

    const toggleAccordion = (id) => {
        if (openQuestions.includes(id)) {
          setOpenQuestions(openQuestions.filter((qid) => qid !== id));
        } else {
          setOpenQuestions([...openQuestions, id]);
        }
      };

    return (
    <View style={styles.container}>
    
    <StatusBar backgroundColor='#5774CB' barStyle='light-content'/>
    <View style={styles.questionTitle}>
    <Text style={styles.FAQ}>FAQ</Text>
    </View>
    <TextInput
    placeholder='Search'
    style={styles.search}
    ></TextInput>
    <ScrollView>
    {FAQS.map((FAQ) => (
      <View style={styles.card} key={FAQ.id}>
        <View style={styles.questionTitle}>
          <Text style={styles.question}>{FAQ.question}</Text>
          <TouchableOpacity onPress={() => toggleAccordion(FAQ.id)}>
            <Text style={styles.show}>{openQuestions.includes(FAQ.id) ?  (
    <Ionicons name="arrow-up-circle" size={20} />
  ) : (
    <Ionicons name="arrow-down-circle" size={20} />
  )}</Text>
          </TouchableOpacity>
        </View>
        {openQuestions.includes(FAQ.id) && <Text style={styles.answer}>{FAQ.answer}</Text>}
      </View>
    ))}
    </ScrollView> 
    <TouchableOpacity
      onPress={()=>{navigation.navigate('Home')}}><Text> Home</Text>
    </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: "column",
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'space-evenly',
    //   padding:30,
      backgroundColor:"#F9F9F9"
    },
    FAQ:{
    textAlign: 'center',
    fontWeight:"bold",
    fontSize:24,
    width:"100%",
    borderBottomWidth:2,
    borderBottomColor:"#EEEEEE",
    color:"#5774CB",
    paddingBottom:10
    },
    search:{
    backgroundColor:"#F4F4F4",
    padding:20,
    borderRadius:15,
    width:"100%",
    // marginTop:20,
    marginLeft:20,
    marginRight:20
    },
    card:{
    backgroundColor:"#fff",
    borderRadius:20,
    padding:20,
    marginTop:20
    },
    questionTitle:{
    flex:1,
    flexDirection:"row",
    justifyContent:'space-between',
    alignItems:"center",
    },
    question:{
    fontWeight: 'bold',
    fontSize:18,
    padding:10
    },
    answer:{
    borderTopColor:"#EEEEEE",
    borderTopWidth:2,
    padding:10,
    fontSize:16

    },
    show:{
    color:"#000"
    }
});
export default SignUp
