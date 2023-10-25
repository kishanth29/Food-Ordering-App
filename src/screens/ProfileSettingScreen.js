import React, { useEffect, useState } from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Feather from "react-native-vector-icons/Feather";
import Entypo from "react-native-vector-icons/Entypo";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Octicons from "react-native-vector-icons/Octicons";
import auth from "@react-native-firebase/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";

const ProfileSettingScreen = () => {
    const navigation = useNavigation();
    const [signedUser, setSignedUser] = useState();
    const getSignedUserData = async () => {
        const signedUserData = await AsyncStorage.getItem("SignedUserData");
        setSignedUser(JSON.parse(signedUserData));
    };
    useEffect(() => {
        getSignedUserData();
    }, []);
    const signOutWithGoogle = async () => {
        auth().signOut();
        navigation.navigate("Login");
    };
    return (
        <View style={{ marginTop: 50 }}>
            <Pressable style={{ marginLeft: 15 }} onPress={() => navigation.goBack()}>
                <Feather name="arrow-left" size={23} />
            </Pressable>
            <Text style={styles.titleTextStyle}>Settings</Text>
            <View style={styles.iconContainer}>
                <Pressable style={styles.iconSubContainer}>
                    <Entypo name="user" size={30} color="#CDCDCD" />
                </Pressable>
            </View>
            <View style={{ marginTop: 10 }}>
                <Text style={styles.userNameTextStyle}>{signedUser?.user?.displayName}</Text>
                <Text style={styles.editAccountTextStyle}>EDIT ACCOUNT</Text>
            </View>
            <View style={styles.middleContainer}>
                <Text style={styles.savedPlacesTextStyle}>Saved Places</Text>
                <View style={{ marginTop: 20 }}>
                    <View style={styles.textContainer}>
                        <View>
                            <Octicons name="home" size={21} />
                        </View>
                        <View style={{ marginLeft: 20 }}>
                            <Text style={{ fontSize: 15 }}>Home</Text>
                            <Text style={styles.textStyle}>Add Home</Text>
                        </View>
                    </View>
                    <View style={[styles.textContainer, { marginTop: 30 }]}>
                        <View>
                            <MaterialIcons name="work-outline" size={23} />
                        </View>
                        <View style={{ marginLeft: 20 }}>
                            <Text style={{ fontSize: 15 }}>Work</Text>
                            <Text style={styles.textStyle}>Add Work</Text>
                        </View>
                    </View>
                </View>
            </View>
            <View style={styles.bottomContainer}>
                <View style={styles.bottomSubContainer}>
                    <Text style={{ fontSize: 20 }}>Other Options</Text>
                    <Pressable onPress={() => signOutWithGoogle()}>
                        <Text style={styles.signOutTextStyle}>Sign Out</Text>
                    </Pressable>
                </View>
            </View>
        </View >
    );
}

export default ProfileSettingScreen;

const styles = StyleSheet.create({
    titleTextStyle: {
        marginLeft: 15,
        fontSize: 38,
        fontWeight: "400"
    },
    iconContainer: {
        width: 75,
        height: 75,
        marginTop: 20,
        backgroundColor: "#eee",
        alignItems: "center",
        alignSelf: "center",
        justifyContent: "center",
        borderRadius: 50
    },
    iconSubContainer: {
        width: 65,
        height: 65,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#f6f6f6",
        borderRadius: 50
    },
    userNameTextStyle: {
        fontSize: 18,
        textAlign: "center"
    },
    editAccountTextStyle: {
        marginTop: 10,
        fontSize: 14,
        fontWeight: "500",
        textAlign: "center",
        color: "green"
    },
    middleContainer: {
        marginHorizontal: 15,
        marginTop: 30,
        borderTopColor: "#f4f4f4",
        borderTopWidth: 1
    },
    savedPlacesTextStyle: {
        marginTop: 20,
        fontSize: 20
    },
    textContainer: {
        flexDirection: "row",
        alignItems: "center"
    },
    textStyle: {
        marginTop: 15,
        fontSize: 13,
        color: "grey"
    },
    bottomContainer: {
        marginTop: 18,
        borderTopColor: "#eaeaea",
        borderTopWidth: 4
    },
    bottomSubContainer: {
        marginTop: 20,
        marginLeft: 15
    },
    signOutTextStyle: {
        marginTop: 25,
        fontSize: 18,
        color: "green"
    }
});