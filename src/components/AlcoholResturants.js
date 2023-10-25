import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const data = [
    {
        title: "Gopuff - Groceries, Alcohol & More",
        image: "https://tb-static.uber.com/prod/image-proc/processed_images/b409ed455208de8b670caa1a0db76410/3ac2b39ad528f8c8c5dc77c59abb683d.jpeg",
        time: "30-50 min",
        selectedText: "",
        rating: "4.8",
        review: "200+",
        categories: "Snacks",
        address: "5135 International Dr"
    },
    {
        title: "7-Eleven",
        image: "https://d1ralsognjng37.cloudfront.net/0e9dfbc2-0d7c-40ce-a9b4-f314ec9e59bc.jpeg",
        time: "10-25 min",
        selectedText: "Save on selected items",
        rating: "4.6",
        review: "39",
        categories: "Convenience",
        address: "2401 US-9 Old Bridge"
    },
    {
        title: "Gopuff Alcohol & Snacks",
        image: "https://tb-static.uber.com/prod/image-proc/processed_images/2d7bc819a762cbf9089723f4b1f72c41/3ac2b39ad528f8c8c5dc77c59abb683d.jpeg",
        time: "30-50 min",
        selectedText: "",
        rating: "4.3",
        review: "19",
        categories: "Convenience",
        address: "Unit 13 Maybrook Industrial Prk"
    },
    {
        title: "Prince Food Mart",
        image: "https://tb-static.uber.com/prod/image-proc/processed_images/d2d42bf6c7d08ba5c9f5eea9772df321/3ac2b39ad528f8c8c5dc77c59abb683d.jpeg",
        time: "30-45 min",
        selectedText: "",
        rating: "4.8",
        review: "16",
        categories: "Convenience",
        address: "103 S Coulter"
    },
    {
        title: "Beer Central - Clark Ave",
        image: "https://tb-static.uber.com/prod/image-proc/processed_images/6c0fcbab531dac3330f57ad8abb6c092/3ac2b39ad528f8c8c5dc77c59abb683d.jpeg",
        time: "30-45 min",
        selectedText: "Spend \u00A315, save \u00A33",
        rating: "4.6",
        review: "500",
        categories: "Beer",
        address: "742 N Clark St Chicago"
    },
    {
        title: "Riverwalk Wine & Spirits",
        image: "https://tb-static.uber.com/prod/image-proc/processed_images/b90dd083d20ea7ab4c95a67ee8f02d19/3ac2b39ad528f8c8c5dc77c59abb683d.jpeg",
        time: "Available at 11:00 am",
        selectedText: "",
        rating: "4.6",
        review: "56",
        categories: "Wings",
        address: "34295 US-6 Edwards"
    },
    {
        title: "Gabriel's Wine & Spirits",
        image: "https://tb-static.uber.com/prod/image-proc/processed_images/73e70e08c741da910a39e0dbeefc6aea/3ac2b39ad528f8c8c5dc77c59abb683d.jpeg",
        time: "Available at 11:00 am",
        selectedText: "",
        rating: "4.4",
        review: "512",
        categories: "Alcohol",
        address: "6915 S Zarzamora St"
    },
    {
        title: "8 Liquor",
        image: "https://tb-static.uber.com/prod/image-proc/processed_images/d5ffd4ec215f4886e5247af1ee7e83e2/719c6bd2757b08684c0faae44d43159d.jpeg",
        time: "Available in 50 min",
        selectedText: "",
        rating: "5.0",
        review: "101",
        categories: "Alcohol",
        address: "5460 Babcock Rd Suite C100"
    },
    {
        title: "D & B Liquor",
        image: "https://tb-static.uber.com/prod/image-proc/processed_images/ad5226a5dfa081e7a274538840a61c3c/3ac2b39ad528f8c8c5dc77c59abb683d.jpeg",
        time: "Available at 11:00 am",
        selectedText: "",
        rating: "4.4",
        review: "43",
        categories: "Alcohol",
        address: "201 W Commerce St"
    },
    {
        title: "D & B Liquor",
        image: "https://tb-static.uber.com/prod/image-proc/processed_images/4e8bd1517ce053bd141df4204d251a7b/a70f5c9df440d10213e93244e9eb7cad.jpeg",
        time: "Available at 11:00 am",
        selectedText: "",
        rating: "4.8",
        review: "24",
        categories: "Alcohol",
        address: "50 Ann Mary St"
    },
    {
        title: "Total Wine & More",
        image: "https://d1ralsognjng37.cloudfront.net/6ca1894d-2caf-4a07-b254-cc92407797bf.jpeg",
        time: "Available at 11:00 am",
        selectedText: "",
        rating: "5.0",
        review: "140",
        categories: "Off-licences",
        address: "125 NW Loop 410 Ste 260"
    }
];

const AlcoholResturants = () => {
    const navigation = useNavigation();
    function truncate(string, n) {
        return string?.length > n ? string.substr(0, n - 1) + ".." : string;
    };
    return (
        <>
            {data.map((data, index) => (
                <Pressable style={styles.container} key={index}
                    onPress={() => navigation.navigate("CategoriesResturant", {
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
                            <Text style={styles.titleTextStyle}>{truncate(data.title, 30)}</Text>
                            <Text style={{ color: "grey" }}>{data.time}</Text>
                            <Text style={styles.selectedTextStyle}>{data.selectedText}</Text>
                        </View>
                        <TouchableOpacity style={styles.iconContainerStyle} >
                            <MaterialCommunityIcons name="heart-outline" size={25} color="grey" />
                        </TouchableOpacity>
                    </View>
                </Pressable>
            ))}
        </>
    );
}

export default AlcoholResturants;

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
    iconContainerStyle: {
        right: 20,
        bottom: 20,
        marginLeft: "auto",
        fontWeight: "bold"
    }
});