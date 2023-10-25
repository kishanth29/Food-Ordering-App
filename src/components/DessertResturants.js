import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const data = [
    {
        title: "Delight Desserts",
        image: "https://d1ralsognjng37.cloudfront.net/b08b4633-5b7e-4baa-88d2-1aefc983b9f2.jpeg",
        time: "10-20 min",
        selectedText: "",
        rating: "4.6",
        review: "352",
        categories: "Desserts",
        address: "415 Parliament St"
    },
    {
        title: "Gigi's Desserts",
        image: "https://d1ralsognjng37.cloudfront.net/e9abb08b-225c-4934-83e8-b831ab7dfc48.jpeg",
        time: "15-25 min",
        selectedText: "",
        rating: "4.5",
        review: "144",
        categories: "Desserts",
        address: "250 Centrum Blvd"
    },
    {
        title: "Davey's Ice Cream",
        image: "https://d1ralsognjng37.cloudfront.net/8d8ea9a7-2948-436b-bd49-1bf2f10d0344.jpeg",
        time: "5-15 min",
        selectedText: "",
        rating: "4.8",
        review: "39",
        categories: "Ice Cream + Frozen Yogurt",
        address: "74 Meserole Ave Brooklyn"
    },
    {
        title: "D Spot Dessert",
        image: "https://d1ralsognjng37.cloudfront.net/c3789eae-f39d-482a-a444-783e1c5aa1db.jpeg",
        time: "5-15 min",
        selectedText: "Spend \u00A315, save \u00A33",
        rating: "4.5",
        review: "73",
        categories: "Desserts",
        address: "5165 Dixie Rd Mississauga"
    },
    {
        title: "Snowy Dessert",
        image: "https://d1ralsognjng37.cloudfront.net/1e48729c-265c-40d7-aead-301edcfbb768.jpeg",
        time: "10-20 min",
        selectedText: "",
        rating: "4.6",
        review: "609",
        categories: "Coffee & tea",
        address: "10209 82 Avenue Northwest"
    },
    {
        title: "Desserts 2 Night",
        image: "https://d1ralsognjng37.cloudfront.net/f365e870-c41b-49c6-9e67-e81268244f48.jpeg",
        time: "15-25 min",
        selectedText: "",
        rating: "4.4",
        review: "512",
        categories: "Desserts",
        address: "57 Canterbury Road Margate"
    },
    {
        title: "Martin Dessert",
        image: "https://d1ralsognjng37.cloudfront.net/2e9da310-8d11-4d9d-bd4c-df7d17d90bb4.jpeg",
        time: "5-15 min",
        selectedText: "",
        rating: "4.5",
        review: "46",
        categories: "Speciality foods",
        address: "665 Rue Des Rocailles"
    },
    {
        title: "Sugar Pillow",
        image: "https://d1ralsognjng37.cloudfront.net/d487c475-27e8-4c65-a0e3-ae05ed680e44.jpeg",
        time: "10-20 min",
        selectedText: "Save on selected items",
        rating: "4.6",
        review: "36",
        categories: "Desserts",
        address: "7166 Black Walnut Trail"
    }
];

const DessertResturants = ({ title }) => {
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
                    discount: data.selectedText,
                    title: title
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

export default DessertResturants;

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