import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

export default function HeaderButtonTabs(props) {
    return (
        <TouchableOpacity style={[styles.container, { backgroundColor: props.activeTab === props.text ? "white" : "#f1f1f1" }]} onPress={() => (props.setActiveTab(props.text))}>
            <Text style={[styles.textStyle, props.checkout && { marginTop: 3, fontWeight: "500" }]}>{props.text}</Text>
            {!props.checkout && (
                <Text style={{ textAlign: "center" }}>{props.description}</Text>
            )}
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        width: "50%",
        padding: 5,
        borderRadius: 30
    },
    textStyle: {
        fontSize: 15,
        fontWeight: "600",
        color: "black",
        textAlign: "center"
    }
});