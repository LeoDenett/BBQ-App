import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ImageBackground, StatusBar, SafeAreaView, FlatList} from 'react-native';
import { Title } from 'react-native-paper';
import firebase from '../firebase/fire';

export default function HomeScreen({navigation}) {
    //Firebase Firestore
    const [ loading, setLoading ] = useState(true);
    const [homeRecepis, setHomeRecepis] = useState([]);
    const homeRecepisCollectionRef = firebase.firestore().collection('homeRecepis').get();

    useEffect(() => {
        const showRecepis = firebase.firestore()
          .collection('homeRecepis')
          .onSnapshot(querySnapshot => {
            const homeRecepis = [];

            querySnapshot.forEach(documentSnapshot => {
                homeRecepis.push({
                ...documentSnapshot.data(),
                key: documentSnapshot.id,
              });
            });

            setHomeRecepis(homeRecepis);
            setLoading(false);
          });
      }, []);

    //HomeScreen
    return (
        <View style={styles.container}>

            <SafeAreaView>
                <StatusBar
                    animated={true}
                    backgroundColor= "#E0C097"/>
            </SafeAreaView>
            <FlatList
                style={styles.box}
                data={homeRecepis}
                renderItem={({ item }) => (
                    <View style={styles.containerContent}>
                        <View style={styles.boxContent}>
                            <ImageBackground
                            source={{uri: item.image}}
                            resizeMode="cover"
                            style={styles.images}
                            imageStyle={{ borderRadius: 20, borderWidth: 2, borderColor: "black"}}>
                                <View style={styles.infoContainer}>
                                    <TouchableOpacity onPress={() => navigation.navigate(item.navigation)}>
                                        <Title style={styles.recepisTitle}>{item.recepiName}</Title>
                                    </TouchableOpacity>
                                    <Text style={styles.time}>{item.recepiTime}</Text>
                                </View>
                            </ImageBackground>
                        </View>
                    </View>
                )}
            />
        </View>
    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#2B2B2B",
    },
    box: {
        margin: 16
    },
    containerContent: {
        flex: 1,
        backgroundColor: "#2B2B2B",
    },
    boxContent: {
        marginVertical: 8
    },
    images: {
        height: 150,
    },
    infoContainer: {
        position: 'absolute',
        top: 16,
        left: 0,
        right: 0,
        bottom: 0,
        justifyContent: 'center',
        alignItems: 'center',
    },
    recepisTitle: {
        color: "#E0C097",
        textShadowColor: 'rgba(0, 0, 0, 0.90)',
        textShadowOffset: {width: -1, height: 1},
        textShadowRadius: 20,
        backgroundColor: "#5C3D2E",
        opacity: 1,
        borderRadius: 25,
        padding: 5,
        borderColor: "black",
        borderWidth: 1.8,
        opacity: 0.90
    },
    time: {
        justifyContent: 'flex-end',
        left: 140,
        color: "#E0C097",
        backgroundColor: 'black',
        borderBottomRightRadius: 8,
        borderTopLeftRadius: 8,
        padding: 3,
    },
});


