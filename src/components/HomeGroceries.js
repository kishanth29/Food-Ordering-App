import React from "react";
import { View, Text, Image, StyleSheet, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";

const HomeGroceries = ({ groceriesData }) => {
    const navigation = useNavigation();
    return (
        <View style={{ marginLeft: 15 }}>
            <Pressable onPress={() => navigation.navigate("CategoriesResturant", {
                name: groceriesData.text,
                image: groceriesData.image,
                review: groceriesData.review,
                rating: groceriesData.rating,
                categories: groceriesData.categories,
                address: groceriesData.address,
                discount: groceriesData.selectedText
            })}>
                <View style={[styles.subContainer, { backgroundColor: groceriesData.color }]}>
                    <View style={{ alignItems: "center" }}>
                        <Image source={{ uri: groceriesData.uri }} style={[styles.imageStyle, groceriesData.text === "Walgreens" && { width: 90 }, groceriesData.text === "Total Wine & More" && { width: 150 }, groceriesData.text === "Costco" && { width: 150 }, groceriesData.text === "Gopuff" && { width: 120 }]} />
                    </View>
                    <View style={[styles.textContainerStyle, groceriesData.selectedText === "" && { marginTop: 8 }]}>
                        <Text style={styles.textStyle}>{groceriesData.text}</Text>
                        <Text style={[styles.timeTextStyle, groceriesData.selectedText === "" && { marginTop: 6 }]}></Text>
                        <Text style={styles.selectedTextStyle}></Text>
                    </View>
                </View>
            </Pressable>
        </View>
    );
}

export default HomeGroceries;

const styles = StyleSheet.create({
    subContainer: {
        marginTop: 15,
        width: 160,
        height: 185,
        borderRadius: 10
    },
    imageStyle: {
        height: 100,
        width: 135,
        resizeMode: "contain"
    },
    textContainerStyle: {
        alignItems: "center"
    },
    textStyle: {
        fontSize: 17,
        fontWeight: "500"
    },
    timeTextStyle: {
        marginTop: 8,
        maxWidth: 120,
        textAlign: "center",
        color: "#7a7a7a"
    },
    selectedTextStyle: {
        marginTop: 2,
        fontSize: 12,
        fontWeight: "500",
        color: "green"
    }
});