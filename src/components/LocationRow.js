import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Entypo from "react-native-vector-icons/Entypo";

const LocationRow = ({ data }) => {
    return (
        <View style={styles.palcesrow}>
            <View style={data.description === "Home" ? { ...styles.placesiconcontainer, backgroundColor: "#1065e9" } : styles.placesiconcontainer}>
                {data.description === "Home" ? <Entypo name={"home"} size={20} color={"white"} /> : <Entypo name={"location-pin"} size={20} color={"white"} />}
            </View>
            <Text style={styles.placestext}>{data.description || data.vicinity}</Text>
        </View>
    );
}

export default LocationRow;

const styles = StyleSheet.create({
    palcesrow: {
        marginVertical: 10,
        flexDirection: "row",
        alignItems: "center"
    },
    placesiconcontainer: {
        padding: 5,
        marginRight: 15,
        backgroundColor: "lightgrey",
        borderRadius: 50
    }
});