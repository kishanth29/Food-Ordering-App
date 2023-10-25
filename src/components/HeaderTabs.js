import React from "react";
import { View, StyleSheet } from "react-native";
import HeaderButton from "./HeaderButton";

export default function HeaderTabs(props) {
    return (
        <View style={styles.container}>
            <HeaderButton
                text="Delivery"
                btnColor="black"
                textColor="white"
                activeTab={props.activeTab}
                setActiveTab={props.setActiveTab}
                iconname="bike-fast"
            />
            <HeaderButton
                text="Pickup"
                btnColor="white"
                textColor="black"
                activeTab={props.activeTab}
                setActiveTab={props.setActiveTab}
                iconname="run-fast"
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignSelf: "center",
        backgroundColor: "#f1f1f1",
        borderRadius: 50
    }
});