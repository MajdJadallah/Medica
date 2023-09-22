import React, { useEffect } from "react";
import { View, Text } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

function Profile({ route, navigation }) {
    
  const { adminId } = route.params;

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

    // You can add any other code related to your Profile component here
  }, []);
  const id={adminId};
  return (
    <View>
      <Text>Welcome to the Profile Page!</Text>
      {/* Add your profile content here */}
    </View>
  );
}

export default Profile;
