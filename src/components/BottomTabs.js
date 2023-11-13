import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

export default function BottomTabs() {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <TouchableOpacity activeOpacity={1} onPress={() => navigation.navigate("Home")}><Icon icon="home" text="Home" /></TouchableOpacity>
            <TouchableOpacity activeOpacity={1} onPress={() => navigation.navigate("Search")}><Icon icon="search" text="Browse" /></TouchableOpacity>
            <TouchableOpacity activeOpacity={1} onPress={() => navigation.navigate("Basket")}><Icon icon="shopping-cart" text="Baskets" /></TouchableOpacity>
            <TouchableOpacity activeOpacity={1} onPress={() => navigation.navigate("Profile")}><Icon icon="user-alt" text="Account" /></TouchableOpacity>
        </View>
    );
}
const Icon = (props) => (
    <View style={{ alignItems: "center" }}>
        <FontAwesome5 name={props.icon} size={22} color="grey" style={styles.iconStyle} />
        <Text style={styles.textStyle}>{props.text}</Text>
    </View>
);

const styles = StyleSheet.create({
    container: {
        margin: 9,
        marginHorizontal: 30,
        flexDirection: "row",
        justifyContent: "space-between"
    },
    iconStyle: {
        marginBottom: 3,
        alignSelf: "center"
    },
    textStyle: {
        fontSize: 13,
        fontWeight: "400",
        color: "grey"
    }
});