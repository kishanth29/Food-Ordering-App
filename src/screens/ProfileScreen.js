import React, { useState, useEffect } from "react";
import { Image, Pressable, ScrollView, Text, View, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Entypo from "react-native-vector-icons/Entypo";
import ProfileDetails from "../components/ProfileDetails";
import BottomTabs from "../components/BottomTabs";
import AsyncStorage from "@react-native-async-storage/async-storage";

function ProfileScreen() {
    const navigation = useNavigation();
    const [signedUser, setSignedUser] = useState();
    const getSignedUserData = async () => {
        const signedUserData = await AsyncStorage.getItem("SignedUserData");
        setSignedUser(JSON.parse(signedUserData));
    };
    useEffect(() => {
        getSignedUserData();
    }, []);
    return (
        <View style={{ marginTop: 30 }}>
            <View style={styles.headerContainer}>
                <Text style={styles.userNameTextStyle}>{signedUser?.user?.displayName}</Text>
                <View style={styles.iconContainer}>
                    <Pressable style={styles.iconSubContainer} onPress={() => navigation.navigate("ProfileSetting")}><Entypo name="user" size={30} color="#CDCDCD" /></Pressable>
                </View>
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.middleContainer}>
                    <View style={[styles.buttonContainer, { marginLeft: 15 }]}>
                        <Image source={require("../../assets/images/favourite.png")} style={{ width: 35, height: 45, resizeMode: "contain" }} />
                        <Text style={styles.buttonTextStyle}>Favourite</Text>
                    </View>
                    <View style={styles.buttonContainer}>
                        <Image source={require("../../assets/images/wallet.png")} style={{ width: 35, height: 45, resizeMode: "contain" }} />
                        <Text style={styles.buttonTextStyle}>Wallet</Text>
                    </View>
                    <Pressable style={[styles.buttonContainer, { marginRight: 15 }]} onPress={() => navigation.navigate("Order")}>
                        <Image source={require("../../assets/images/order.png")} style={{ width: 35, height: 45, resizeMode: "contain" }} />
                        <Text style={styles.buttonTextStyle}>Orders</Text>
                    </Pressable>
                </View>
                <View style={styles.profileDetailsContainer}>
                    <ProfileDetails />
                </View>
            </ScrollView>
            <View style={styles.bottomContainer}>
                <BottomTabs />
            </View>
        </View>
    );
}

export default ProfileScreen;

const styles = StyleSheet.create({
    headerContainer: {
        marginTop: 20,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    userNameTextStyle: {
        marginLeft: 20,
        fontSize: 34,
        fontWeight: "600"
    },
    iconContainer: {
        width: 65,
        height: 65,
        marginRight: 20,
        backgroundColor: "#eee",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 50
    },
    iconSubContainer: {
        width: 55,
        height: 55,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#f6f6f6",
        borderRadius: 50
    },
    middleContainer: {
        marginTop: 20,
        flexDirection: "row",
        justifyContent: "space-between"
    },
    buttonContainer: {
        width: 110,
        height: 100,
        backgroundColor: "#f6f6f6",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 15
    },
    buttonTextStyle: {
        fontSize: 15,
        fontWeight: "500"
    },
    profileDetailsContainer: {
        marginTop: 20,
        borderTopWidth: 7,
        borderTopColor: "#f1f1f1"
    },
    bottomContainer: {
        marginTop: "auto",
        backgroundColor: "white",
        borderTopColor: "#eee",
        borderTopWidth: 1
    }
});