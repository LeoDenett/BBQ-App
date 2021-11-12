import React from 'react'
import { Image, StyleSheet, View } from 'react-native'
import { Avatar } from 'react-native-paper';

export default function Logo() {
    return (
      <View style={styles.box}>
        <Image source={require('../images/Logo/logo.jpeg')}  style={styles.logo}/>
      </View>
    )
}


const styles = StyleSheet.create({
    box: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'transparent',
    },
    logo: {
      width: 150,
      height: 150,
      borderRadius: 100,
      borderWidth: 1,
      borderColor: "#B85C38",
      marginTop: 16
    },
  });
