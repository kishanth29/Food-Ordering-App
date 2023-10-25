import React from "react";
import { TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

export default function HeaderButton(props) {
    const navigation = useNavigation();
    const onPress = () => {
        if (props.text === "Delivery") {
            navigation.navigate("Home");
        }
        else if (props.text === "Pickup") {
            navigation.navigate("Pickup");
        }
    };
    return (
        <TouchableOpacity style={[styles.container, { backgroundColor: props.activeTab === props.text ? "black" : "#f1f1f1" }]} onPress={onPress}>
            {props.activeTab === props.text ? (
                <MaterialCommunityIcons name={props.iconname} size={18} color={props.activeTab === props.text ? "white" : "black"} />
            ) : (
                <MaterialCommunityIcons name={props.iconname} size={20} color={props.activeTab === props.text ? "white" : "black"} />
            )}
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        width: 50,
        height: 40,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 50
    }
});