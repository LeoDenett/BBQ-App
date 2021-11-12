import React from 'react';
import { View, StyleSheet } from 'react-native';
import { DrawerItem, DrawerContentScrollView } from '@react-navigation/drawer';
import { Drawer } from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';
import firebase from '../firebase/fire';

import Logo from '../components/Logo'

export default function DrawerContent({...props}) {

    //Logout
    const signoff = () =>{
        firebase.auth()
            .signOut()
            .then(() => props.navigation.goBack(),console.log('User signed out!'));
    }

    return (
        <View style={{flex:1}}>
            <DrawerContentScrollView {...props}>
                <View style={styles.drawerContent}>
                    <View style={styles.userInfoSection}>
                         {/* Avatar */}
                        <View style={{flexDirection: 'row', marginTop: 15}}>
                            <View>
                                <Logo/>
                            </View>
                        </View>
                    </View>

                    {/* List Item */}
                    <Drawer.Section style={{marginTop: 16}}>
                        <DrawerItem
                            icon={({size}) => (
                                <Icon
                                    name="home-outline"
                                    color="#E0C097"
                                    size= {size}
                                />
                            )}
                            label="All Recipes"
                            labelStyle= {{color: "#E0C097"}}
                            onPress={() => {props.navigation.navigate('Home')}}
                        />
                        <DrawerItem
                            icon={({size}) => (
                                <Icon
                                    name="logo-instagram"
                                    color="#E0C097"
                                    size= {size}
                                />
                            )}
                            label="Follow Us"
                            labelStyle= {{color: "#E0C097"}}
                            onPress={() => {}}
                        />
                    </Drawer.Section>
                </View>
            </DrawerContentScrollView>
            <Drawer.Section style={styles.bottomDrawerSection}>
                <DrawerItem
                    icon={({size}) => (
                    <Icon
                        name="arrow-undo-outline"
                        color="#E0C097"
                        size= {size}
                        />
                )}
                label="Sign out"
                labelStyle= {{color: "#E0C097"}}
                onPress={() => signoff()}
                />
            </Drawer.Section>
        </View>
    )
}

const styles = StyleSheet.create({
    drawerContent: {
      flex: 1,
    },
    userInfoSection: {
        paddingLeft: 20
    },
    title: {
        fontSize: 16,
        marginTop: 3,
        fontWeight: 'bold',
    },
    caption: {
        fontSize: 14,
        lineHeight: 14
    },
    row: {
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center',
    },
    section: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 15,
    },
    paragraph: {
        fontWeight: 'bold',
        marginRight: 3
    },
    drawerSection: {
        marginTop: 15
    },
    bottomDrawerSection: {
        marginBottom: 15,
        borderTopColor: '#f4f4f4',
        borderTopWidth: 1
    },
    preference : {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 12,
        paddingHorizontal: 16,
    },
  });