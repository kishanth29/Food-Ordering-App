import React from "react";
import { Image, Text, View, Pressable, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

function TopCategoriesRow(props) {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <Pressable style={[styles.subContainer, { marginLeft: 20 }]} onPress={() => navigation.navigate("SearchItems", {
                name: props.name1,
                title: props.title1
            })}>
                <Image source={{ uri: props.location1 }} style={styles.imageStyle} />
                <View style={styles.textContainerStyle}>
                    <Text style={{ fontWeight: "500" }}>{props.name1}</Text>
                </View>
            </Pressable>
            <Pressable style={[styles.subContainer, { marginRight: 20 }]} onPress={() => navigation.navigate("SearchItems", {
                name: props.name2,
                title: props.title2
            })}>
                <Image source={{ uri: props.location2 }} style={styles.imageStyle} />
                <View style={styles.textContainerStyle}>
                    <Text style={{ fontWeight: "500" }}>{props.name2}</Text>
                </View>
            </Pressable>
        </View>
    );
}

export default TopCategoriesRow;

const styles = StyleSheet.create({
    container: {
        marginTop: 15,
        flexDirection: "row",
        justifyContent: "space-between"
    },
    subContainer: {
        width: 170,
        height: 140,
        backgroundColor: "white",
        borderWidth: 1,
        borderColor: "#d7d7d7",
        borderRadius: 16
    },
    imageStyle: {
        height: 100,
        width: 168,
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15
    },
    textContainerStyle: {
        marginTop: 9,
        alignItems: "center"
    }
});