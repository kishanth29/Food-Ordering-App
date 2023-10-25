import React from "react";
import { View, Text, StatusBar, StyleSheet } from "react-native";
import LottieView from "lottie-react-native";
import OrderItems from "../components/OrderItems";

const OrderCompletedScreen = ({ route }) => {
    const { item, getTotal } = route.params;
    return (
        <>
            <StatusBar barStyle="light-content" backgroundColor="transparent" hidden={false} translucent={true} />
            <View style={{ marginTop: 50 }}>
                <LottieView source={require("../../assets/animations/check-mark.json")} style={styles.checkLottieStyle}
                    autoPlay
                    speed={0.5}
                    loop={false} />
                <Text style={styles.textStyle}>Your order at {item.resturantName} has been placed for {"\u00A3"}{(getTotal).toFixed(2)}</Text>
                <OrderItems item={item} />
                <LottieView source={require("../../assets/animations/cooking.json")} style={styles.cookingLottieStyle}
                    autoPlay
                    speed={0.5}
                    loop={true} />
            </View>
        </>
    );
}

export default OrderCompletedScreen;

const styles = StyleSheet.create({
    checkLottieStyle: {
        height: 100,
        marginBottom: 40,
        alignSelf: "center"
    },
    textStyle: {
        marginLeft: 15,
        marginRight: 3,
        fontSize: 22,
        fontWeight: "500",
        lineHeight: 28
    },
    cookingLottieStyle: {
        marginTop: "auto",
        height: 180,
        alignSelf: "center"
    }
});