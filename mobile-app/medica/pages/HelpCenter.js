import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import axios from 'axios';

function HelpCenter() {
  const [FAQS, setFAQS] = useState([]);

  useEffect(() => {
    axios
      .get('https://6e2e-2a01-9700-159d-7900-81ed-c2e1-1e39-b52.ngrok-free.app/api/faq')
      .then((res) => {
        setFAQS(res.data.FAQS);
        console.log(FAQS);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const navigation = useNavigation();
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
      <StatusBar backgroundColor="#5774CB" barStyle="light-content" />
      <View style={styles.questionTitle}>
        <Text style={styles.FAQ}>FAQ</Text>
      </View>
      {/* <TextInput placeholder="Search" style={styles.search}></TextInput> */}
      <ScrollView>
        {FAQS.map((FAQ) => (
          <View style={styles.card} key={FAQ._id}>
            <View style={styles.questionTitle}>
              <Text style={styles.question}>{FAQ.question}</Text>
              <TouchableOpacity onPress={() => toggleAccordion(FAQ._id)}>
                <Text style={styles.show}>
                  {openQuestions.includes(FAQ._id) ? (
                    <Ionicons name="arrow-up-circle" size={20} />
                  ) : (
                    <Ionicons name="arrow-down-circle" size={20} />
                  )}
                </Text>
              </TouchableOpacity>
            </View>
            {openQuestions.includes(FAQ._id) && (
              <Text style={styles.answer}>{FAQ.answer}</Text>
            )}
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    backgroundColor: '#F9F9F9',
  },
  FAQ: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 24,
    width: '100%',
    borderBottomWidth: 2,
    borderBottomColor: '#EEEEEE',
    color: '#5774CB',
    paddingBottom: 10,
  },
  search: {
    backgroundColor: '#F4F4F4',
    padding: 20,
    borderRadius: 15,
    width: '100%',
    marginLeft: 20,
    marginRight: 20,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 20,
    marginTop: 20,
  },
  questionTitle: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  question: {
    fontWeight: 'bold',
    fontSize: 18,
    padding: 10,
  },
  answer: {
    borderTopColor: '#EEEEEE',
    borderTopWidth: 2,
    padding: 10,
    fontSize: 15,
  },
  show: {
    color: '#000',
  },
});

export default HelpCenter;
