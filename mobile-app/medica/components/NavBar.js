import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";

import Home from "../pages/Home";
import profile from "../pages/Profile";
import HelpCenter from "../pages/HelpCenter";

const Tab = createBottomTabNavigator();

const NavBar = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === "Home") {
            iconName = focused ? "home" : "home-outline";
          } else if (route.name === "Cart") {
            iconName = focused ? "cart" : "cart-outline";
          } else if (route.name === "Profile") {
            iconName = focused ? "person" : "person-outline";
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "#b7076b", // Added line
        tabBarInactiveTintColor: "#808080", // Added line
        tabBarLabelStyle: { paddingBottom: 10, fontSize: 14 },
        tabBarStyle: { padding: 10, height: 100 },
      })}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{ headerShown: true }}
      />
      <Tab.Screen
        name="Cart"
        component={profile}
        options={{ headerShown: true }}
      />
      <Tab.Screen
        name="Profile"
        component={HelpCenter}
        options={{ headerShown: true }}
      />
    </Tab.Navigator>
  );
};

export default NavBar;