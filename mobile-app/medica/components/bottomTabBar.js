import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from 'react-native-vector-icons/Ionicons';

//Screens
import HomeScreen from '../pages/Home'
import ArticlesScreen from '../pages/Articles'
import AdvicesScreen from '../pages/Advices'
import ProfileScreen from '../pages/Profile'


//Screens Name
const Home ='Home'
const Articles ='Articles'
const Advices ='Advices'
const Profile ='Profile'


const Tab =createBottomTabNavigator();

export default function BottomTabBar(){
return(
        <Tab.Navigator
        initialRouteName={Home}
        screenOptions={({route})=>({
            tabBarIcon:({focused, color, size})=>{
                let iconName;
                let rn = route.name;

                if(rn===Home){
                    iconName=focused ? 'home':'home-outline'
                }else if(rn===Articles){
                    iconName=focused ? 'newspaper':'newspaper-outline'
                }else if(rn===Advices){
                    iconName=focused ? 'bulb':'bulb-outline'
                }else if(rn===Profile){
                    iconName=focused ? 'person-circle':'person-circle-outline'
                }
                return <Ionicons name={iconName} size={size} color='#5774CB' />;

            },
        })}>

        <Tab.Screen name={Home} component={HomeScreen}/>
        <Tab.Screen name={Advices} component={AdvicesScreen}/>
        <Tab.Screen name={Articles} component={ArticlesScreen}/>
        <Tab.Screen name={Profile} component={ProfileScreen}/>
        </Tab.Navigator>
)
}