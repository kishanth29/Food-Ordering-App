import React from "react";
import { View, Text, StyleSheet, Pressable, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function MenuDesserts({ desserts, restName, image, address }) {
    const navigation = useNavigation();
    return (
        <>
            {desserts.map((dessert, index) => (
                <Pressable key={index} onPress={() => navigation.navigate("Cart", {
                    name: dessert.title,
                    description: dessert.description,
                    restName: restName,
                    restimage: image,
                    restAddress: address,
                    image: dessert.image,
                    price: dessert.price,
                    notfood: false,
                    food: dessert,
                    information: false,
                    instruction: false
                })}>
                    <View style={styles.menuItemContainerStyle}>
                        <FoodInfo dessert={dessert} />
                        <FoodImage dessert={dessert} />
                    </View>
                </Pressable>
            ))}
        </>
    );
}
const FoodInfo = (props) => (
    <View style={{ width: 230 }}>
        <Text style={styles.titleStyle}>{props.dessert.title}</Text>
        <Text style={{ marginTop: 5 }}>{"\u00A3"}{props.dessert.price}</Text>
    </View>
);
const FoodImage = (props) => (
    <View style={{ marginLeft: 15 }}>
        <Image source={{ uri: props.dessert.image }} style={styles.imageStyle} />
    </View>
);

const styles = StyleSheet.create({
    menuItemContainerStyle: {
        margin: 10,
        marginTop: 10,
        flexDirection: "row",
        justifycontent: "space-between"
    },
    titleStyle: {
        fontSize: 17,
        fontWeight: "500"
    },
    imageStyle: {
        width: 110,
        height: 110
    }
});