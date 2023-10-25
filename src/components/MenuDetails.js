import React from "react";
import { useNavigation } from "@react-navigation/native";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

function MenuDetails({ menuitems }) {
    const navigation = useNavigation();
    return (
        <TouchableOpacity style={styles.container} onPress={() => navigation.navigate("Menu", {
            id: menuitems.id
        })}>
            <View style={{ flex: 1 }}>
                <Text style={styles.nameTextStyle}>{menuitems.name}</Text>
                <Text style={styles.descriptionTextStyle} numberOfLines={2}>{menuitems.description}</Text>
                <Text style={{ fontSize: 16 }}>$ {menuitems.price}</Text>
            </View>
            {menuitems.image && (<Image source={{ uri: menuitems.image }} style={styles.imageStyle} />)}
        </TouchableOpacity>
    );
}

export default MenuDetails;

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 20,
        paddingVertical: 10,
        flexDirection: "row",
        borderBottomWidth: 1,
        borderBottomColor: "lightgrey"
    },
    nameTextStyle: {
        fontSize: 16,
        fontWeight: "600",
        letterSpacing: 0.5
    },
    descriptionTextStyle: {
        marginVertical: 5,
        color: "gray"
    },
    imageStyle: {
        height: 75,
        aspectRatio: 1,
        borderRadius: 5
    }
});