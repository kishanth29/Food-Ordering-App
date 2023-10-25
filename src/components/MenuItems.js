import React from "react";
import { View, Text, StyleSheet, Pressable, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function MenuItems({ foods, restName, image, address, marginLeft, information, instruction }) {
    const navigation = useNavigation();
    function truncate(string, n) {
        return string?.length > n ? string.substr(0, n - 1) + ".." : string;
    };
    return (
        <>
            {foods.map((food, index) => (
                <Pressable key={index} onPress={() => navigation.navigate("Cart", {
                    name: food.title,
                    description: food.description,
                    restName: restName,
                    restimage: image,
                    restAddress: address,
                    image: food.image,
                    price: food.price,
                    notfood: false,
                    food: food,
                    information: information,
                    instruction: instruction
                })}>
                    <View style={[styles.menuItemContainerStyle, food.image && { marginTop: 15 }]}>
                        <FoodInfo food={food} truncate={truncate} />
                        <FoodImage food={food} marginLeft={marginLeft} />
                    </View>
                </Pressable>
            ))}
        </>
    );
}
const FoodInfo = (props) => (
    <View style={[styles, props.food.image && { width: 230 }]}>
        <Text style={styles.titleStyle}>{props.food.title}</Text>
        <Text style={{ marginTop: 5 }}>{"\u00A3"}{props.food.price}</Text>
        <Text style={styles.descriptionTextStyle}>{props.food.description}</Text>
    </View>
);
const FoodImage = ({ marginLeft, ...props }) => (
    <View style={{ marginLeft: marginLeft }}>
        {props.food.image && (
            <Image source={{ uri: props.food?.image }} style={styles.imageStyle} />
        )}
    </View>
);

const styles = StyleSheet.create({
    menuItemContainerStyle: {
        margin: 10,
        marginTop: 15,
        flexDirection: "row",
        justifycontent: "space-between"
    },
    descriptionTextStyle: {
        maxWidth: 220,
        fontSize: 14,
        color: "#8f8f8f"
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