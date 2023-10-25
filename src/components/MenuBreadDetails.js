import React from "react";
import { View, Text, StyleSheet } from "react-native";
import BouncyCheckbox from "react-native-bouncy-checkbox";

const breads = [
    {
        title: "White",
        selectedText: "Popular",
        show: true
    },
    {
        title: "Wheat",
        show: true
    },
    {
        title: "Cornbread",
        show: true
    },
    {
        title: "Jalapeno Cornbread",
        show: true
    },
    {
        title: "None",
        show: false
    }
];

const MenuBreadDetails = () => {
    return (
        <View style={{ marginLeft: 15 }}>
            <Text style={styles.textStyle}>Bread</Text>
            {breads.map((bread, index) => (
                <View key={index} style={[styles.container, bread.show && { borderBottomColor: "#eee", borderBottomWidth: 1 }]}>
                    <View style={{ marginBottom: 15 }}>
                        <Text style={styles.titleTextStyle}>{bread.title}</Text>
                        {bread.selectedText && (
                            <Text style={styles.selectedTextStyle}>{bread.selectedText}</Text>
                        )}
                    </View>
                    <View style={styles.bouncyCheckBoxContainerStyle}>
                        <BouncyCheckbox fillColor="black" size={20} innerIconStyle={{ borderWidth: 2 }} />
                    </View>
                </View>
            ))}
        </View>
    );
}

export default MenuBreadDetails;

const styles = StyleSheet.create({
    textStyle: {
        marginTop: 15,
        marginBottom: 5,
        fontSize: 20,
        fontWeight: "500"
    },
    container: {
        marginTop: 10,
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
    bouncyCheckBoxContainerStyle: {
        marginLeft: "auto",
        marginBottom: 15
    }
});