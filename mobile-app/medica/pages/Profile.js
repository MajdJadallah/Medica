import React, { useState,useEffect } from 'react';
import { Picker } from '@react-native-picker/picker';
import {View,Text,TouchableOpacity,TextInput,StyleSheet,ScrollView,Image} from 'react-native';
import { useRoute } from '@react-navigation/native';
import axios from "axios";


function Profile({ navigation }) {
  const route = useRoute();
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [healthIssue, setHealthIssue] = useState('Rheumatoid Arthritis'); // Initialize with a default value
  const [dob, setDob] = useState('');
  const [role, setRole] = useState(route.params.role);
  const [workingTime, setWorkingTime] = useState('');
  const [employer, setEmployer] = useState('');
  const [about, setAbout] = useState('');


  const { adminId } = route.params;
  console.log(adminId);
  const handleImageUpload = () => {
    console.log("hello profile image");
  };

const savePress=async()=>{
   console.log("update profile");
  const userData = {
  name: name,
  username: name,
  phone: phone,
  healthIssue: healthIssue,
  dob: dob,
  role: role,
  workingTime: workingTime,
  employer: employer,
  about: about,
  };
    try {
      console.log(`health issue:${healthIssue}`)
      let apiUrl =
        role === 'doctor'
          ? `https://6e2e-2a01-9700-159d-7900-81ed-c2e1-1e39-b52.ngrok-free.app/api/doctors/edit/${adminId}`
          : `https://6e2e-2a01-9700-159d-7900-81ed-c2e1-1e39-b52.ngrok-free.app/api/users/edit/${adminId}`;


      const response = await axios.patch(apiUrl, userData);
      if (response.status === 200) {
        console.log('User data updated successfully:', response.data);
        // Redirect to the home screen or perform any other action you need
        navigation.navigate('Home', { adminId, role ,userData});
      } else {
        console.error('Failed to update user data:', response.data);
      }
    } catch (error) {
      console.error('Error updating user data:', error);
    }

    navigation.navigate("Home", { adminId , role ,userData});
  }



  const id={adminId};

  return (
    <View style={styles.container}>

  <ScrollView contentContainerStyle={styles.scrollContent}>
   <View style={styles.imageContainer}>
     <Image
       source={{uri:'https://res.cloudinary.com/dvmodwtsk/image/upload/v1696321873/nv1uea2glgphswm4yadw.jpg'}}
       style={styles.profileImage}
     />
     <TouchableOpacity style={styles.upload} onPress={handleImageUpload}>
        <Text style={styles.uploadText}>Upload</Text>
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
   <TextInput
     style={styles.input}
     placeholder="Date of Birth"
     value={dob}
     onChangeText={(text) => setDob(text)}
   />
   <Picker
   style={styles.input}
   selectedValue={healthIssue}
   onValueChange={(itemValue) => setHealthIssue(itemValue)}
   >
   <Picker.Item label="Rheumatoid Arthritis" value="Rheumatoid Arthritis" />
   <Picker.Item label="Addison's Disease" value="Addison's Disease" />
   <Picker.Item label="Muscle Atrophy" value="Muscle Atrophy" />
   <Picker.Item label="Multiple Sclerosis" value="Multiple Sclerosis" />
   <Picker.Item label="Parkinson's Disease" value="Parkinson's Disease" />
  </Picker>

{/**********************Additional fields for doctors *****************************/}
      {role !== 'doctor' ? null : (
        <>
          <TextInput
            style={styles.input}
            placeholder="Specialist"
            value={role}
            onChangeText={(text) => setRole(text)}
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
    <TouchableOpacity style={styles.saveButton}
    onPress={savePress}>
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
