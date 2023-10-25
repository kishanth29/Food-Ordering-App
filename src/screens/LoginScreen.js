import "expo-dev-client";
import React, { useState, useEffect } from "react";
import { Image, StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { GoogleSignin } from "@react-native-google-signin/google-signin";
import auth from "@react-native-firebase/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";

const LoginScreen = () => {
    const navigation = useNavigation();
    const [initializing, setInitializing] = useState(true);
    const [user, setUser] = useState();
    GoogleSignin.configure({
        webClientId: "1056296867501-g66koo12mvr0t0cd9csuhsuske4i8smf.apps.googleusercontent.com"
    });
    function onAuthStateChanged(user) {
        setUser(user);
        AsyncStorage.setItem("SignedUserData", JSON.stringify({ user, loggedIn: true }));
        if (initializing) setInitializing(false);
    }
    useEffect(() => {
        const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
        return subscriber;
    }, []);
    useEffect(() => {
        if (user) {
            navigation.navigate("Home");
        }
    }, [user]);
    const signInWithGoogle = async () => {
        await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });
        const { idToken } = await GoogleSignin.signIn();
        const googleCredential = auth.GoogleAuthProvider.credential(idToken);
        const signedInUser = auth().signInWithCredential(googleCredential);
        signedInUser.then((user) => {
            console.log(user);
        }).catch((error) => {
            console.log(error);
        });
        if (user) {
            navigation.navigate("Home");
        }
    };
    return (
        <View>
            <Image source={require("../../assets/images/background.jpg")} style={styles.imageStyle} />
            <View>
                <Text style={styles.textStyle}>Get Started with Uber Eats</Text>
                <TouchableOpacity style={styles.buttonContainer}
                    onPress={() => signInWithGoogle()}>
                    <Text style={styles.buttonText}>Sign in with Google</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default LoginScreen;

const styles = StyleSheet.create({
    imageStyle: {
        marginTop: 5,
        height: "85%",
        width: "100%"
    },
    textStyle: {
        marginTop: 5,
        marginLeft: 18,
        fontSize: 23.5,
        fontWeight: "bold"
    },
    buttonContainer: {
        marginTop: 18,
        width: "92%",
        height: 55,
        alignItems: "center",
        alignSelf: "center",
        justifyContent: "center",
        backgroundColor: "#05ae5d",
        borderRadius: 5
    },
    buttonText: {
        fontSize: 16,
        fontWeight: "500",
        color: "white"
    }
});