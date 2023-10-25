import React from "react";
import { StyleSheet, View } from "react-native";
import HeaderButtonTabs from "./HeaderButtonTabs";

function ButtonTabs(props) {
    return (
        <View style={[styles.buttontabsContainer, props.checkout && { width: "90%", height: 50 }]}>
            <HeaderButtonTabs
                text="Delivery"
                description={`35 - 50 min • \u00A30.49`}
                btnColor="white"
                textColor="white"
                activeTab={props.activeTab}
                setActiveTab={props.setActiveTab}
                checkout={props.checkout}
            />
            <HeaderButtonTabs
                text="Pickup"
                description="20-35 min"
                btnColor="white"
                textColor="black"
                activeTab={props.activeTab}
                setActiveTab={props.setActiveTab}
                checkout={props.checkout}
            />
        </View>
    );
}

export default ButtonTabs;

const styles = StyleSheet.create({
    buttontabsContainer: {
        marginTop: 5,
        width: "95%",
        padding: 5,
        flexDirection: "row",
        alignSelf: "center",
        justifyContent: "space-between",
        backgroundColor: "#f1f1f1",
        borderRadius: 30
    }
});