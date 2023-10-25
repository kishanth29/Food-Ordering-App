import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

export default function ResturantDetail({ resturantData, isList, discount, marginTop, left, top }) {
    const navigation = useNavigation();
    function truncate(string, n) {
        return string?.length > n ? string.substr(0, n - 1) + ".." : string;
    };
    return (
        <>
            <TouchableOpacity activeOpacity={1} onPress={() => navigation.push("Resturant", {
                name: resturantData.name,
                image: resturantData.image_url,
                price: resturantData.price,
                reviews: resturantData.review_count,
                rating: resturantData.rating,
                categories: resturantData.categories,
                address: resturantData.location.address1,
                city: resturantData.location.city,
                discount: discount,
                latitude: resturantData.coordinates.latitude,
                longitude: resturantData.coordinates.longitude
            })} style={styles.container}>
                <View style={[styles.subContainer, { marginTop: marginTop }]}>
                    <ResturantImage image={resturantData.image_url} discount={discount} isList={isList} top={top} left={left} />
                    <ResturantInfo name={resturantData.name} rating={resturantData.rating} address={resturantData.location.address1} truncate={truncate} isList={isList} />
                </View>
            </TouchableOpacity>
        </>
    );
}
const ResturantImage = (props) => (
    <>
        <Image source={{ uri: props.image }} style={[styles.imageStyle, props.isList === "true" && { width: 280, height: 150 }]} />
        {props.discount && (
            <View style={[styles.discountContainer, { top: props.top, left: props.left, }]}>
                <Text style={styles.discountTextStyle}>Spend {"\u00A3"}30, save {"\u00A3"}5</Text>
            </View>
        )}
        <TouchableOpacity style={styles.iconContainer}>
            <MaterialCommunityIcons name="heart-outline" size={25} color="#fff" />
        </TouchableOpacity>
    </>
);

const ResturantInfo = (props) => (
    <View style={styles.informationContainer}>
        <View>
            <View style={styles.informationSubContainer}>
                {props.isList === "true" ? (
                    <Text style={styles.nameTextStyle}>{props.truncate(props.name, 10)}</Text>
                ) : (<Text style={styles.nameTextStyle}>{props.truncate(props.name, 25)}</Text>)}
                <Text style={styles.addressTextStyle}>({props.truncate(props.address, 15)})</Text>
            </View>
            <View style={{ flexDirection: "row" }}>
                <Text style={{ color: "gray" }}>{"\u00A3"}0.49 Delivery Fee • </Text>
                {props.isList === "false" && (
                    <Text style={{ color: "gray" }}>30-45 • min</Text>
                )}
            </View>
        </View>
        <View style={styles.ratingTextContainerStyle}>
            <Text>{props.rating}</Text>
        </View>
    </View>
);

const styles = StyleSheet.create({
    container: {
        marginLeft: 15,
        marginRight: 15
    },
    subContainer: {
        backgroundColor: "white"
    },
    imageStyle: {
        width: "100%",
        height: 180
    },
    discountContainer: {
        position: "absolute",
        padding: 5,
        width: 170,
        backgroundColor: "#3cb043",
        borderTopRightRadius: 50,
        borderBottomRightRadius: 50
    },
    discountTextStyle: {
        marginLeft: 12,
        fontSize: 15,
        fontWeight: "500",
        color: "white"
    },
    iconContainer: {
        position: "absolute",
        top: 5,
        right: 10,
        fontWeight: "bold"
    },
    informationContainer: {
        marginTop: 10,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    informationSubContainer: {
        flexDirection: "row",
        alignItems: "center"
    },
    nameTextStyle: {
        fontSize: 16,
        fontWeight: "500"
    },
    addressTextStyle: {
        marginHorizontal: 5,
        fontSize: 16,
        fontWeight: "500"
    },
    ratingTextContainerStyle: {
        height: 30,
        width: 30,
        backgroundColor: "#eee",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 15
    }
});