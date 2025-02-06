import React from "react";
import { Image, Text, View, StyleSheet, Pressable } from "react-native";

const items = {
    pharmacy: require("../../assets/images/pharmacy.png"),
    coffee: require("../../assets/images/coffee.png"),
    desserts: require("../../assets/images/dessert.png"),
    softdrink: require("../../assets/images/softdrink.png"),
    flowers: require("../../assets/images/flower.png"),
    resturant: require("../../assets/images/resturant.png"),
    grocery: require("../../assets/images/grocery.png"),
    alcohol: require("../../assets/images/alcohol.png"),
    // ride: require("../../assets/images/ride.png"),
    icecream: require("../../assets/images/icecream.png")
};

function ModalCategories(props) {
    return (
        <View style={[styles.container, { marginBottom: props.marginBottom }]}>
            {items[props.item1] && (
                <Pressable style={{ alignItems: "center" }}>
                    <View style={[styles.subContainer, { marginLeft: 12 }]}>
                        <View >
                            <Image source={items[props.item1]} style={[styles.imageStyle, props.text1 === "Alcohol" && { width: 40, height: 45 }, props.text1 === "Pharmacy" && { width: 40, height: 45, resizeMode: "cover" }]} />
                        </View>
                    </View>
                    <Text style={[styles.textStyle, { marginLeft: 12 }]}>{props.text1}</Text>
                </Pressable>
            )}
            {items[props.item2] && (
                <View style={{ alignItems: "center" }}>
                    <View style={styles.subContainer}>
                        <Image source={items[props.item2]} style={styles.imageStyle} />
                    </View>
                    <Text style={styles.textStyle}>{props.text2}</Text>
                </View>
            )}
            {items[props.item3] && (
                <View style={{ alignItems: "center" }}>
                    <View style={styles.subContainer}>
                        <Image source={items[props.item3]} style={styles.imageStyle} />
                    </View>
                    <Text style={styles.textStyle}>{props.text3}</Text>
                </View>
            )}
            {items[props.item4] && (
                <View style={{ alignItems: "center" }}>
                    <View style={[styles.subContainer, { marginRight: 12 }]}>
                        <Image source={items[props.item4]} style={styles.imageStyle} />
                    </View>
                    <Text style={styles.textStyle}>{props.text4}</Text>
                </View>
            )}
        </View >
    );
}

export default ModalCategories;

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "space-between"
    },
    subContainer: {
        width: 85,
        height: 70,
        padding: 10,
        marginTop: 10,
        backgroundColor: "#f6f6f6",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10
    },
    textStyle: {
        marginTop: 5,
        fontSize: 12,
        fontWeight: "500"
    },
    imageContainer: {
        marginLeft: 0,
        marginBottom: 0
    },
    imageStyle: {
        width: 40,
        height: 50,
        resizeMode: "contain"
    }
});