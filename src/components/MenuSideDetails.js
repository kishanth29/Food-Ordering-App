import React from "react";
import { View, Text, StyleSheet } from "react-native";
import BouncyCheckbox from "react-native-bouncy-checkbox";

const sides = [
    {
        title: "Cabbage",
        selectedText: "Popular",
        show: true
    },
    {
        title: "Corn",
        show: true
    },
    {
        title: "Fried Okra",
        show: true
    },
    {
        title: "Green Beans with Bacon",
        show: true
    },
    {
        title: "Mac and Cheese",
        show: true
    },
    {
        title: "Mashed Potato",
        show: true
    },
    {
        title: "Mashed Potato with Brown Gravy",
        show: true
    },
    {
        title: "Mashed Potato Cream Gravy",
        show: false
    }
];

const MenuSideDetails = () => {
    return (
        <View style={{ marginLeft: 15 }}>
            <Text style={styles.textStyle}>Side</Text>
            {sides.map((side, index) => (
                <View key={index} style={[styles.container, side.show && { borderBottomColor: "#eee", borderBottomWidth: 1 }]}>
                    <View style={{ marginBottom: 15 }}>
                        <Text style={styles.titleTextStyle}>{side.title}</Text>
                        {side.selectedText && (
                            <Text style={styles.selectedTextStyle}>{side.selectedText}</Text>
                        )}
                    </View>
                    <View style={styles.bouncyCheckboxContainerStyle}>
                        <BouncyCheckbox fillColor="black" size={20} innerIconStyle={{ borderWidth: 2 }} />
                    </View>
                </View>
            ))}
        </View>
    );
}

export default MenuSideDetails;

const styles = StyleSheet.create({
    textStyle: {
        marginTop: 15,
        marginBottom: 5,
        fontSize: 20,
        fontWeight: "500"
    },
    container: {
        marginTop: 15,
        flexDirection: "row",
        alignItems: "center"
    },
    titleTextStyle: {
        fontSize: 16,
        fontWeight: "500"
    },
    selectedTextStyle: {
        marginTop: 5,
        fontSize: 14,
        fontWeight: "500",
        color: "green"
    },
    bouncyCheckboxContainerStyle: {
        marginLeft: "auto",
        marginBottom: 15
    }
});