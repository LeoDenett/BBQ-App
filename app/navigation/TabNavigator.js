import  React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';

//Screens
import HomeScreen from '../screens/HomeScreen';
import FireTipsScreen from '../screens/FireTipsScreen';

const Tab = createMaterialBottomTabNavigator();

export default function TabNavigator() {
  const forFade = ({ current }) => ({
    cardStyle: {
      opacity: current.progress,
    },
  });
  return (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor="#E0C097"
      inactiveColor="#B85C38"
      barStyle={{ backgroundColor: '#5C3D2E' }}
      labelStyle={{ fontSize: 12 }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          cardStyleInterpolator: forFade,
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <Icon name="home-outline"  color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Fire"
        component={FireTipsScreen}
        options={{
          cardStyleInterpolator: forFade,
          tabBarLabel: 'Fire',
          tabBarIcon: ({ color }) => (
            <Icon name="flame" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
