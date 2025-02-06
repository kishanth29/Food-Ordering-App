import React from "react";
import { View, Text, StyleSheet } from "react-native";
import GroceryResturants from "./GroceryResturants";

const CategoriesGrocery = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.titleTextStyle}>All stores</Text>
            <GroceryResturants />
            <View style={styles.descriptionTextContainer}>
                <Text style={styles.descriptionTextStyle}>Uva Eats is paid by merchants for marketing and promotion, which influences the personalised recommendations you see. Learn more or change settings</Text>
            </View>
        </View>
    );
}

export default CategoriesGrocery;

const styles = StyleSheet.create({
    container: {
        marginTop: 18,
        borderTopColor: "#f4f4f4",
        borderTopWidth: 8
    },
    titleTextStyle: {
        marginLeft: 15,
        marginTop: 10,
        fontSize: 24,
        fontWeight: "700"
    },
    descriptionTextContainer: {
        marginBottom: 15,
        marginTop: 12,
        borderTopColor: "#f4f4f4",
        borderTopWidth: 8
    },
    descriptionTextStyle: {
        marginLeft: 16,
        marginTop: 18,
        maxWidth: 360,
        fontSize: 15,
        lineHeight: 22
    }
});