import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function Categories({ items, marginTop, width, height }) {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <TouchableOpacity activeOpacity={1} key={items.id} onPress={() => navigation.navigate("SearchItems", {
                name: items.text,
                title: items.title
            })}>
                <View style={styles.subContainer}>
                    <Image source={items.image} style={[{ resizeMode: "contain" }, { width: width, height: height }]} />
                    <Text style={[styles.textStyle, { marginTop: marginTop }]}>{items.text}</Text>
                </View>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: 10,
        paddingVertical: 10,
        paddingLeft: 20,
        backgroundColor: "white"
    },
    subContainer: {
        marginRight: 20,
        alignItems: "center"
    },
    textStyle: {
        fontSize: 14,
        fontWeight: "500",
        color: "#292929"
    }
});