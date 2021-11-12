import React from 'react';
import firebase from '../firebase/fire';
import { useEffect, useState } from 'react';
import AuthStackNavigator from './AuthStackNavigator';
import DrawerNavigator from './DrawerNavigator';

function Navigator() {

  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  // Handle user state changes
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

  if (!user) {
    return (
      <AuthStackNavigator/>
    );
  }

  return (
    <DrawerNavigator/>
  );
}

export default Navigator;