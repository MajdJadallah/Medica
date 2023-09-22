import React, { useState,useEffect } from 'react';
import { Picker } from '@react-native-picker/picker';
import {View,Text,TouchableOpacity,TextInput,StyleSheet,ScrollView,Image} from 'react-native';
import AsyncStorage from "@react-native-async-storage/async-storage";

function Profile({ route, navigation }) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  // const [gender, setGender] = useState('');
  const [dob, setDob] = useState('');
  const [specialist, setSpecialist] = useState('');
  const [workingTime, setWorkingTime] = useState('');
  const [employer, setEmployer] = useState('');
  const [about, setAbout] = useState('');
  
  const { adminId } = route.params;
  const handleImageUpload = () => {
    console.log("hello profile image");
    // Implement image upload logic here+
    // You can use libraries like react-native-image-picker or react-native-camera
  };
  useEffect(() => {
    // Remove the profile data from AsyncStorage
    const removeProfileData = async () => {
      try {
        await AsyncStorage.removeItem("profile");
        console.log("Profile data removed from AsyncStorage");
      } catch (error) {
        console.log("Error removing profile data:", error);
      }
    };

    removeProfileData();

  }, []);
  const id={adminId};
  return (
    <View style={styles.container}>

  <ScrollView contentContainerStyle={styles.scrollContent}>
   <View style={styles.imageContainer}>
     <Image
       source={require('../assets/advice1.png')}
       style={styles.profileImage}
     />
     <TouchableOpacity style={styles.upload} onPress={handleImageUpload}>
        <Text style={styles.uploadText}>Upload Imag</Text>
      </TouchableOpacity>
   </View>
   <TextInput
     style={styles.input}
     placeholder="Name"
     value={name}
     onChangeText={(text) => setName(text)}
   />
   <TextInput
     style={styles.input}
     placeholder="Phone"
     value={phone}
     onChangeText={(text) => setPhone(text)}
     keyboardType="phone-pad"
   />
   {/* <Picker
     style={styles.input}
     selectedValue={gender}
     onValueChange={(itemValue) => setGender(itemValue)}
   >
     <Picker.Item label="Select Gender" value="" />
     <Picker.Item label="Male" value="male" />
     <Picker.Item label="Female" value="female" />
   </Picker> */}
   <TextInput
     style={styles.input}
     placeholder="Date of Birth"
     value={dob}
     onChangeText={(text) => setDob(text)}
   />
{/**********************Additional fields for doctors *****************************/}
      {specialist !== 'doctor' ? null : (
        <>
          <TextInput
            style={styles.input}
            placeholder="Specialist"
            value={specialist}
            onChangeText={(text) => setSpecialist(text)}
          />
          <TextInput
            style={styles.input}
            placeholder="Working Time"
            value={workingTime}
            onChangeText={(text) => setWorkingTime(text)}
          />
          <TextInput
            style={styles.input}
            placeholder="Current Employer"
            value={employer}
            onChangeText={(text) => setEmployer(text)}
          />
          <TextInput
            style={styles.input}
            placeholder="About You"
            value={about}
            onChangeText={(text) => setAbout(text)}
            multiline
          />
        </>
      )}
      
    </ScrollView>
    <TouchableOpacity style={styles.saveButton}>
        <Text style={styles.saveButtonText}>Save</Text>
      </TouchableOpacity>
    </View>

  );
};

const styles = StyleSheet.create({
 container: {
 flex: 1,
 padding: 20,
 backgroundColor: '#fff',
 },
 scrollContent: {
   flexGrow: 1,
   padding: 20,
   paddingBottom: 100, // Adjust this value based on your needs
 },
 imageContainer: {
 alignItems: 'center',
 },
 profileImage: {
 width: 150,
 height: 150,
 borderRadius: 75,
 marginBottom: 20,
 },
 input: {
 borderBottomWidth: 1,
 borderColor: '#ccc',
 marginBottom: 20,
 paddingVertical: 10,
 },
 saveButton: {
 paddingVertical: 15,
 alignItems: 'center',
 backgroundColor: "#5774CB",
 borderRadius: 15,
 padding: 10,
 width: '100%',
 },
 saveButtonText: {
 fontWeight: 'bold',
 color: "#fff",
 fontSize: 20,
 textAlign: "center",
 },
 upload: {
  alignItems: 'center',
  backgroundColor: "#5774CB",
  borderRadius: 5,
  padding: 15,
  },
  uploadText: {
  color: "#fff",
  textAlign: "center",
  },
});

export default Profile;
