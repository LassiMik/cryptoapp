import { View, StyleSheet, Text, KeyboardAvoidingView, TextInput, TouchableOpacity, Image } from 'react-native';
import styles from '../styles/StyleSheet'
import { useEffect, useState, useContext } from "react";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../../Firebase'
import loginImage from '../../assets/bitcoin1.png';


function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  //Handle new user signup
  const handleSignUp = () => {
    createUserWithEmailAndPassword(auth, email, password)
    .then(userCredentials => {
        const user = userCredentials.user;
        console.log('Registered with:', user.email);
    })
    .catch(error => alert(error.message))
  }

  //Handle existing user login
  const handleLogin = () => {
    signInWithEmailAndPassword(auth, email, password)
    .then(userCredentials => {
        const user = userCredentials.user;
        console.log('Logged in with:', user.email);
    })
    .catch(error => alert(error.message))

  }

    return (
        <KeyboardAvoidingView
            style={styles.container}
            behavior='padding'
        >
            <Image
                source={loginImage}
                style={styles.image}
            />
            <View style={styles.inputContainer}>
                <TextInput
                    placeholder='Email'
                    value={email}
                    onChangeText={text => setEmail(text)}
                    style={styles.input}
                />
                <TextInput
                    placeholder='Password'
                    value={password}
                    onChangeText={text => setPassword(text)}
                    style={styles.input}
                    secureTextEntry
                />
            </View>
            <View style={styles.buttonContainer}>
                <TouchableOpacity
                    onPress={handleLogin}
                    style={styles.button}
                >
                    <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={handleSignUp}
                    style={[styles.button, styles.buttonOutline]}
                >
                    <Text style={styles.buttonOutlineText}>Register</Text>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    )
}
export default Login;