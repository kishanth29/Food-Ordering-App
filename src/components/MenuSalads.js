import React from "react";
import { View, Text, StyleSheet, Pressable, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function MenuSalads({ salads, restName, image, address }) {
    const navigation = useNavigation();
    return (
        <>
            {salads.map((salad, index) => (
                <Pressable key={index} onPress={() => navigation.navigate("Cart", {
                    name: salad.title,
                    description: salad.description,
                    restName: restName,
                    restimage: image,
                    restAddress: address,
                    image: salad.image,
                    price: salad.price,
                    notfood: false,
                    food: salad,
                    information: false,
                    instruction: true
                })}>
                    <View style={styles.menuItemContainerStyle}>
                        <FoodInfo salad={salad} />
                        <FoodImage salad={salad} />
                    </View>
                </Pressable>
            ))}
        </>
    );
}
const FoodInfo = (props) => (
    <View style={{ width: 230 }}>
        <Text style={styles.titleStyle}>{props.salad.title}</Text>
        <Text style={{ marginTop: 5 }}>{"\u00A3"}{props.salad.price}</Text>
    </View>
);
const FoodImage = (props) => (
    <View style={{ marginLeft: 15 }}>
        <Image source={{ uri: props.salad.image }} style={styles.imageStyle} />
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