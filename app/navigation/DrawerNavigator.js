import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from "@react-navigation/drawer";
import { StyleSheet } from 'react-native';
import firebase from 'firebase';

//Screens
import TabNavigator from './TabNavigator';
import DrawerContent from '../screens/DrawerContent';

//Import Recepis Screens
import GrilledWholeChicken from '../screens/recepis/GrilledWholeChicken'
import BeefBrisket from '../screens/recepis/BeefBrisket'
import GrilledBeerChickenLegs from '../screens/recepis/GrilledBeerChickenLegs'
import GrilledBeefRibs from '../screens/recepis/GrilledBeefRibs'
import GrilledRibeyeSteack from '../screens/recepis/GrilledRibeyeSteack'
import GrilledFlankSteak from '../screens/recepis/GrilledFlankSteak'

const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  //Firebase Auth
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
    }

    useEffect(() => {
        const subscriber = firebase.auth().onAuthStateChanged(onAuthStateChanged);
        return subscriber; // unsubscribe on unmount
    }, []);

    if (initializing) return null;

    //Logout
    const signoff = () =>{
        firebase.auth()
            .signOut()
            .then(() => navigation.navigate('SignIn'),console.log('User signed out!'));
    }

    const forFade = ({ current }) => ({
      cardStyle: {
        opacity: current.progress,
      },
    });

  return (
        <NavigationContainer>
          <Drawer.Navigator
            screenOptions={{
              drawerStyle: {
                backgroundColor: '#5C3D2E',
              },
              headerStyle: {
                backgroundColor: '#5C3D2E',
              },
              headerTintColor: "#E0C097",
            }}
            drawerContent={props => <DrawerContent {...props}
            />}>
            <Drawer.Screen name="Menu" component={TabNavigator} options={{
              title:"BBQ Recepis",
              drawerLabelStyle: {
                color: 'red'
              },
              cardStyleInterpolator: forFade
              }} />

            <Drawer.Screen name="GrilledWholeChicken" component={GrilledWholeChicken} options={{ cardStyleInterpolator: forFade }} />
            <Drawer.Screen name="BeefBrisket" component={BeefBrisket} options={{ cardStyleInterpolator: forFade }} />
            <Drawer.Screen name="GrilledBeerChickenLegs" component={GrilledBeerChickenLegs} options={{ cardStyleInterpolator: forFade }} />
            <Drawer.Screen name="GrilledBeefRibs" component={GrilledBeefRibs} options={{ cardStyleInterpolator: forFade }} />
            <Drawer.Screen name="GrilledRibeyeSteack" component={GrilledRibeyeSteack} options={{ cardStyleInterpolator: forFade }} />
            <Drawer.Screen name="GrilledFlankSteak" component={GrilledFlankSteak} options={{ cardStyleInterpolator: forFade }} />
          </Drawer.Navigator>
        </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  search: {
    marginRight: 20,
  },
});

export default DrawerNavigator;