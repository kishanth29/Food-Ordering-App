import React from "react";
import { View, Text, StyleSheet, Pressable, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function MenuSides({ sides, restName, image, address }) {
    const navigation = useNavigation();
    return (
        <>
            {sides.map((side, index) => (
                <Pressable key={index} onPress={() => navigation.navigate("Cart", {
                    name: side.title,
                    description: side.description,
                    restName: restName,
                    restimage: image,
                    restAddress: address,
                    image: side.image,
                    price: side.price,
                    notfood: false,
                    food: side,
                    information: false,
                    instruction: true
                })}>
                    <View style={styles.menuItemContainerStyle}>
                        <FoodInfo side={side} />
                        <FoodImage side={side} />
                    </View>
                </Pressable>
            ))}
        </>
    );
}
const FoodInfo = (props) => (
    <View style={{ width: 230 }}>
        <Text style={styles.titleStyle}>{props.side.title}</Text>
        <Text style={{ marginTop: 5 }}>{"\u00A3"}{props.side.price}</Text>
    </View>
);
const FoodImage = (props) => (
    <View style={{ marginLeft: 15 }}>
        <Image source={{ uri: props.side.image }} style={styles.imageStyle} />
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