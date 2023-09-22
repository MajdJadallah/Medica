import React, { useState } from 'react';
import { StatusBar, StyleSheet, Text, View, Image, TouchableOpacity, TextInput, ScrollView, KeyboardAvoidingView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
const logo = require('../assets/logo.png');
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

function SignUp() {
  const navigation = useNavigation();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('user');
  const [usernameError, setUsernameError] = useState('');
  const [Error, setError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const fetchPost = async () => {
    let url = 'https://6e2e-2a01-9700-159d-7900-81ed-c2e1-1e39-b52.ngrok-free.app/api/users/createuser';

    if (role === 'doctor') {
      url = 'https://6e2e-2a01-9700-159d-7900-81ed-c2e1-1e39-b52.ngrok-free.app/api/doctors/createdoctors';
    }
    try {
      const dataToSend = {
        username,
        email,
        password,
        role,
        name:username, 
      };
      const response = await axios.post(
        url,dataToSend);

      if (response.status === 200) {
        // Registration successful
        const userData = { username, email, password };

        await AsyncStorage.setItem('user', JSON.stringify(userData));
        await AsyncStorage.setItem('profile', JSON.stringify(true));

        navigation.navigate('SignIn');
      } else if (response.status === 300) {
        setError("User already exists");
        navigation.navigate('SignIn');
      } else {
        console.error('Registration failed');
      }
    } catch (error) {
      console.error('Error:', error);
      console.error('Error response:', error.response);
    }
  };

  const onSignUpPress = async () => {
    let hasError = false;
    setUsernameError('');
    setEmailError('');
    setPasswordError('');

    if (!username) {
      setUsernameError('Username is required');
      hasError = true;
    }
    if (!email) {
      setEmailError('Email is required');
      hasError = true;
    } else if (!isValidEmail(email)) {
      setEmailError('Invalid email format');
      hasError = true;
    }
    if (!password) {
      setPasswordError('Password is required');
      hasError = true;
    }

    if (hasError) {
      return;
    }

    try {
      await fetchPost();
    } catch (error) {
      console.error(error);
    }
  };

  const isValidEmail = (email) => {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(email);
  };

  const removeData = async (user) => {
    try {
      await AsyncStorage.removeItem(user);
      console.log('Data removed successfully');
    } catch (error) {
      console.log('Error removing data:', error);
    }
  };

  return (
    <KeyboardAvoidingView style={styles.container}>
      <Image source={logo} />
      <Text style={styles.text}>Create New Account</Text>
      <StatusBar backgroundColor='#5774CB' barStyle='light-content' />

      <ScrollView style={styles.form}>
        <TextInput
          placeholder='Enter your name'
          value={username}
          onChangeText={setUsername}
          style={styles.input}
        />
        {usernameError && <Text style={styles.errorText}>{usernameError}</Text>}

        <TextInput
          placeholder='Enter your email'
          value={email}
          onChangeText={setEmail}
          keyboardType='email-address'
          style={styles.input}
        />
        {emailError && <Text style={styles.errorText}>{emailError}</Text>}

        <TextInput
          placeholder='Enter your password'
          value={password}
          onChangeText={setPassword}
          secureTextEntry={true}
          style={styles.input}
        />
        {passwordError && <Text style={styles.errorText}>{passwordError}</Text>}

        <View style={styles.roleContainer}>
          <Text style={styles.roleLabel}>Select Role:</Text>
          <View style={styles.radioGroup}>
            <TouchableOpacity
              style={[styles.radioButton, role === 'user' && styles.radioButtonSelected]}
              onPress={() => setRole('user')}
            >
              {role === 'user' && <View style={styles.radioSelected} />}
            </TouchableOpacity>
            <Text style={styles.radioText}>User</Text>
            <TouchableOpacity
              style={[styles.radioButton, role === 'doctor' && styles.radioButtonSelected]}
              onPress={() => setRole('doctor')}
            >
              {role === 'doctor' && <View style={styles.radioSelected} />}
            </TouchableOpacity>
            <Text style={styles.radioText}>Doctor</Text>
          </View>
        </View>

        <TouchableOpacity style={styles.button} onPress={onSignUpPress}>
          <Text style={styles.btnText}>Sign Up</Text>
        </TouchableOpacity>

        <View style={styles.lastText}>
          <Text style={styles.gray}>Already have an account ? </Text>
          <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
            <Text style={styles.blue}> Sign In</Text>
          </TouchableOpacity>
          {Error && <Text style={styles.errorText}>{Error}</Text>}
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
export default SignUp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    padding: 30,
  },
  image: {
    width: 300,
    height: 300,
  },
  text: {
    color: '#000',
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 30,
  },
  btnText: {
    color: '#fff',
    fontSize: 24,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#5774CB',
    borderRadius: 15,
    padding: 10,
    width: '100%',
  },
  input: {
    backgroundColor: '#FAFAFA',
    color: '#000',
    padding: 15,
    borderRadius: 15,
    width: '100%',
    margin: 10,
  },
  form: {
    width: '100%',
    height: '70%',
  },
  lastText: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  gray: {
    color: '#9E9E9E',
  },
  blue: {
    color: '#5774CB',
  },
  errorText: {
    color: 'red',
    fontSize: 14,
    marginBottom: 10,
    paddingHorizontal: 20,
  },
  roleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
    paddingHorizontal: 20,
    width: '100%',
  },
  roleLabel: {
    color: '#9E9E9E',
    marginRight: 10,
  },
  radioGroup: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
  },
  radioButton: {
    borderWidth: 1,
    borderColor: '#5774CB',
    borderRadius: 5,
    padding: 7,
    marginRight: 10,
  },
  radioButtonSelected: {
    backgroundColor: '#5774CB',
  },
  radioText: {
    color: '#5774CB',
    marginRight:30,
  },
  radioSelected: {
    // borderRadius: 100,
    backgroundColor: '#fff',
  },
});
