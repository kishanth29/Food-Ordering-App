import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const data = [
    {
        title: "Target",
        image: "https://tb-static.uber.com/prod/image-proc/processed_images/8e3daa2f4bc266d05bab636f9fa97ba0/c73ecc27d2a9eaa735b1ee95304ba588.jpeg",
        time: "5-70 min",
        selectedText: "Save on selected items",
        rating: "4.0",
        review: "764",
        categories: "Grocery",
        address: "112 W 34th St"
    },
    {
        title: "Costco Wholesale",
        image: "https://tb-static.uber.com/prod/image-proc/processed_images/ab9f32e3278b7b3e1d79e0bcef944aa9/3ac2b39ad528f8c8c5dc77c59abb683d.jpeg",
        time: "10-25 min",
        selectedText: "Offers available",
        rating: "4.3",
        review: "10T+",
        categories: "Grocery",
        address: "976 3rd Ave Brooklyn"
    }
];

const GroceryResturants = () => {
    const navigation = useNavigation();
    function truncate(string, n) {
        return string?.length > n ? string.substr(0, n - 1) + ".." : string;
    };
    return (
        <>
            {data.map((data, index) => (
                <Pressable style={styles.container} key={index} onPress={() => navigation.navigate("CategoriesResturant", {
                    name: data.title,
                    image: data.image,
                    review: data.review,
                    rating: data.rating,
                    categories: data.categories,
                    address: data.address,
                    discount: data.selectedText
                })}>
                    <View style={styles.subContainer}>
                        <Image source={{ uri: data.image }} style={styles.imageStyle} />
                        <View style={[styles.informationContainer, data.selectedText === "" && { marginTop: 10, marginBottom: 0 }]}>
                            <Text style={[styles.titleTextStyle]}>{truncate(data.title, 30)}</Text>
                            <Text style={{ color: "grey" }}>{data.time}</Text>
                            <Text style={[styles.selectedTextStyle]}>{data.selectedText}</Text>
                        </View>
                        <TouchableOpacity style={styles.iconContainer} >
                            <MaterialCommunityIcons name="heart-outline" size={25} color="grey" />
                        </TouchableOpacity>
                    </View>
                </Pressable>
            ))}
        </>
    );
}

export default GroceryResturants;

const styles = StyleSheet.create({
    container: {
        marginTop: 20,
        marginLeft: 15
    },
    subContainer: {
        flexDirection: "row",
        alignItems: "center"
    },
    imageStyle: {
        width: 65,
        height: 65,
        resizeMode: "contain",
        borderRadius: 50
    },
    informationContainer: {
        marginBottom: 4,
        marginLeft: 15
    },
    titleTextStyle: {
        fontSize: 16,
        fontWeight: "500"
    },
    selectedTextStyle: {
        fontSize: 14,
        fontWeight: "500",
        color: "green"
    },
    iconContainer: {
        right: 20,
        bottom: 20,
        marginLeft: "auto",
        fontWeight: "bold"
    }
});