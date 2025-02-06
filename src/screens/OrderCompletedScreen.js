import React from "react";
import { View, Text, StatusBar, StyleSheet, Pressable } from "react-native";
import LottieView from "lottie-react-native";
import OrderItems from "../components/OrderItems";
import { useNavigation } from "@react-navigation/native";

const OrderCompletedScreen = ({ route }) => {
  const navigation = useNavigation();
  const { item, getTotal } = route.params;
  return (
    <>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        hidden={false}
        translucent={true}
      />
      <View style={{ marginTop: 50 }}>
        <LottieView
          source={require("../../assets/animations/check-mark.json")}
          style={styles.checkLottieStyle}
          autoPlay
          speed={0.5}
          loop={false}
        />
        <Text style={styles.textStyle}>
          Your order at {item.resturantName} has been placed for {"Rs"}
          {getTotal.toFixed(2)}
        </Text>
        <OrderItems item={item} />
        <LottieView
          source={require("../../assets/animations/cooking.json")}
          style={styles.cookingLottieStyle}
          autoPlay
          speed={0.5}
          loop={true}
        />
        <Pressable
          style={styles.buttonContainer}
          onPress={() => {
            navigation.navigate("Home", {});
          }}
        >
          <Text style={styles.buttonTextStyle}>Home </Text>
        </Pressable>
      </View>
    </>
  );
};

export default OrderCompletedScreen;

const styles = StyleSheet.create({
  checkLottieStyle: {
    height: 100,
    marginBottom: 40,
    alignSelf: "center",
  },
  textStyle: {
    marginLeft: 15,
    marginRight: 3,
    fontSize: 22,
    fontWeight: "500",
    lineHeight: 28,
  },
  cookingLottieStyle: {
    marginTop: "auto",
    height: 180,
    alignSelf: "center",
  },
  buttonTextStyle: {
    fontSize: 18,
    fontWeight: "500",
    color: "black",
  },
  buttonContainer: {
    width: "92%",
    height: 55,
    marginBottom: 15,
    marginTop: 240,
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#06c167",
    borderRadius: 10,
  },
});
