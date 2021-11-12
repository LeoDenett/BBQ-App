import React, { useState } from 'react';
import { ImageBackground, TouchableOpacity } from 'react-native';
import { TextInput, Text, View, StyleSheet, SafeAreaView, StatusBar } from 'react-native';
import firebase from '../firebase/fire';
import Icon from 'react-native-vector-icons/Ionicons';

//Components
import Logo from '../components/Logo';

const SignUpScreen = ({ navigation }) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const signUp = async () => {
        try {
            const response = await firebase.auth().createUserWithEmailAndPassword(email, password);
            navigation.navigate('SignIn');
            console.log('User account created & signed in!');
        } catch (err) {
            setError(err.message);
        }
    }

    return (
        <View style={styles.box}>
            <SafeAreaView>
                <StatusBar
                    animated={true}
                    backgroundColor= "#E0C097"/>
            </SafeAreaView>
            <ImageBackground
                source={require('../images/Background/backgroundfuego.jpeg')}
                resizeMode="cover" style={styles.images}
                imageStyle={{ position: "absolute"}}>
                <View style={styles.container}>
                    <View style={styles.containerLogin}>
                        {/*---Logo---*/}
                        <View style={styles.logo}>
                            <Logo/>
                        </View>

                        <View style={styles.InputSection}>
                            <Icon style={styles.Icon} name="person-outline" size={30} color="#B85C38" />
                            <TextInput
                                placeholder="Email"
                                value={email}
                                onChangeText={setEmail}
                                style={styles.input}
                            />
                        </View>
                        <View style={styles.InputSection}>
                            <Icon style={styles.Icon} name="lock-closed-outline" size={30} color="#B85C38" />
                            <TextInput
                                placeholder="Password"
                                value={password}
                                onChangeText={setPassword}
                                secureTextEntry
                                style={styles.input}
                            />
                        </View>
                        <Text style={styles.textError}>{error}</Text>

                        <TouchableOpacity
                            onPress={() => signUp()}
                        >
                            <Text style={[styles.button, styles.text]}>Create Count</Text>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
                            <Text style={styles.textSignIn}>Already have an account? Sign In</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ImageBackground>
        </View>
    )
};

const styles = StyleSheet.create({
    box: {
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center',
    },
    container: {
        width: '80%',
        marginHorizontal: 40,
        marginVertical: 100,
        backgroundColor: 'rgba(255,255,255,0.9)',
        borderColor: "#B85C38",
        borderWidth: 1,
        position: 'absolute',
        justifyContent: 'center',
        borderRadius: 3,
    },
    containerLogin: {
        backgroundColor: 'transparent',
        justifyContent: 'center',
        alignContent: 'center'
    },
    logo: {
        marginBottom: 48,
    },
    InputSection: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'transparent',
    },
    Icon: {
        padding: 10,
    },
    button: {
        padding: 10,
        backgroundColor: "#B85C38",
        backgroundColor: "#E0C097",
        borderRadius: 4,
        borderColor: "#B85C38",
        borderWidth: 1,
        marginHorizontal: 16,
        marginTop: 32
    },
    input: {
        flex: 1,
        borderBottomWidth: 1,
        padding: 10,
        borderBottomColor: '#B85C38',
        fontSize: 18,
        fontWeight: "bold",
        color: "#B85C38",
        textAlign: "left",
        marginRight: 16,
    },
    text: {
        color: "#B85C38",
        textAlign: "center",
        fontSize: 18,
        fontWeight: "bold",
    },
    textError: {
        color: "#B85C38",
        marginTop: 16,
        textAlign: "center",
    },
    textSignIn: {
        color: '#B85C38',
        fontSize: 12,
        marginTop: 24,
        marginBottom: 16,
        marginHorizontal: 16
    },
    images: {
        height: "100%",
    },
  });

export default SignUpScreen;

