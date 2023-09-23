import React, { useState,useEffect } from 'react';
import { Picker } from '@react-native-picker/picker';
import {View,Text,TouchableOpacity,TextInput,StyleSheet,ScrollView,Image} from 'react-native';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRoute } from '@react-navigation/native';


function Profile({ navigation }) {
  const route = useRoute();
  // const { role } = route.params;
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [healthIsuue, setHealthIssue] = useState('');
  const [dob, setDob] = useState('');
  const [role, setRole] = useState(route.params.role);
  const [workingTime, setWorkingTime] = useState('');
  const [employer, setEmployer] = useState('');
  const [about, setAbout] = useState('');
  
  const { adminId } = route.params;
  console.log(adminId);
  const handleImageUpload = () => {
    console.log("hello profile image");
    // Implement image upload logic here+
    // You can use libraries like react-native-image-picker or react-native-camera
  };

  const savePress=()=>{
    console.log("update profile");
    navigation.navigate("Home", { adminId , role });
  }
  // useEffect(() => {
  //   // Remove the profile data from AsyncStorage
  //   const removeProfileData = async () => {
  //     try {
  //       await AsyncStorage.removeItem("profile");
  //       console.log("Profile data removed from AsyncStorage");
  //     } catch (error) {
  //       console.log("Error removing profile data:", error);
  //     }
  //   };

    // removeProfileData();

  // }, []);
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
   <Picker
     style={styles.input}
     selectedValue={healthIsuue}
     onValueChange={(itemValue) => setHealthIssue(itemValue)}
   >
     <Picker.Item label="Health issue" value="" />
     <Picker.Item label="Male" value="male" />
     <Picker.Item label="Female" value="female" />
     <Picker.Item label="Female" value="female" />
     <Picker.Item label="Female" value="female" />
   </Picker>
   <TextInput
     style={styles.input}
     placeholder="Date of Birth"
     value={dob}
     onChangeText={(text) => setDob(text)}
   />
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
