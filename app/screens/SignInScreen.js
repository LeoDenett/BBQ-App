import React from 'react';
import firebase from '../firebase/fire';
import { Text, View, StyleSheet, TextInput, TouchableOpacity, ImageBackground, SafeAreaView, StatusBar} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

//Components
import Logo from '../components/Logo';

//Form Config
import { Formik } from 'formik';
import * as yup from 'yup';
import { isEmpty } from 'lodash';

const Loginschema = yup.object().shape({
    email: yup.string().email("Invalid email").required(),
    password: yup.string().min(6, "Password min 6 characteres").max(50, "Password max 50 characteres").required(),
  });

const SignInScreen = ({navigation})=>{

    onLoginButtonPressed = async values => {
        const { email, password } = values
        try {
          const response = await firebase.auth().signInWithEmailAndPassword(email, password)

          if (response.user) {
            navigation.navigate('Menu')
          }

        } catch (error) {
          console.error(error)
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
                        <Formik
                            validationSchema={Loginschema}
                            initialValues={{ email: '', password: '' }}
                            onSubmit={(values) => {
                                this.onLoginButtonPressed(values);
                            }}
                        >
                            {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
                            <View style={styles.containerLogin}>
                                {/*---Logo---*/}
                                <View style={styles.logo}>
                                    <Logo/>
                                </View>

                                {/*---Inputs---*/}
                                <View style={styles.InputSection}>
                                    <Icon style={styles.Icon} name="person-outline" size={30} color="#B85C38" />
                                    <TextInput
                                            placeholder="Email"
                                            style={styles.input}
                                            onChangeText={handleChange('email')}
                                            onBlur={handleBlur('email')}
                                            value={values.email}
                                    />
                                </View>
                                <Text style={styles.textError}>{touched.email && errors.email}</Text>

                                <View style={styles.InputSection}>
                                    <Icon style={styles.Icon} name="lock-closed-outline" size={30} color="#B85C38" />
                                    <TextInput
                                        placeholder="Password"
                                        style={styles.input}
                                        onChangeText={handleChange('password')}
                                        onBlur={handleBlur('password')}
                                        value={values.password}
                                        secureTextEntry
                                    />
                                </View>
                                <Text style={styles.textError}>{touched.password && errors.password}</Text>

                                <TouchableOpacity
                                    disable={isEmpty(errors) ? false : true}
                                    onPress={handleSubmit}
                                >
                                    <Text style={[styles.button, styles.text, {backgroundColor: isEmpty(errors) ? '#E0C097' : '#999999'}]}>Sign in</Text>
                                </TouchableOpacity>
                                <TouchableOpacity title="sign up" onPress={() => navigation.navigate('SignUp')}><Text style={styles.textSignUp}>Don't you have an account? Sign Up</Text></TouchableOpacity>
                            </View>
                            )}
                        </Formik>
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
        backgroundColor: "#E0C097",
        borderRadius: 4,
        borderColor: "#B85C38",
        borderWidth: 1,
        marginHorizontal: 16
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
        marginBottom: 30,
        textAlign: "center",
    },
    textSignUp: {
        color: '#B85C38',
        fontSize: 12,
        marginTop: 24,
        marginBottom: 16,
        marginHorizontal: 16
    },
    link: {
        marginTop: 20,
        color: "white",
        textDecorationLine: "underline"
    },
    images: {
        height: "100%",
    },
  });

export default SignInScreen;