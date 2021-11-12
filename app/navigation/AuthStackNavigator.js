import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SignInScreen from '../screens/SignInScreen';
import SignUpScreen from '../screens/SignUpScreen';
import HomeScreen from './DrawerNavigator';

//Drawer

const AuthStack = createNativeStackNavigator();
function AuthStackNavigator() {
  const forFade = ({ current }) => ({
    cardStyle: {
      opacity: current.progress,
    },
  });
  return (
    <NavigationContainer>
      <AuthStack.Navigator screenOptions={{
        headerShown: false,
      }}
      >
        <AuthStack.Screen name="SignIn" component={SignInScreen} options={{ cardStyleInterpolator: forFade }} />
        <AuthStack.Screen name="SignUp" component={SignUpScreen} options={{ cardStyleInterpolator: forFade }} />
        <AuthStack.Screen name="Menu" component={HomeScreen} options={{ cardStyleInterpolator: forFade }} />
      </AuthStack.Navigator>
    </NavigationContainer>
    )
}

export default AuthStackNavigator;