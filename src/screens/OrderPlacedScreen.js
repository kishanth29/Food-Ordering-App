import React, { useState } from "react";
import {
  View,
  Text,
  Pressable,
  StatusBar,
  Image,
  StyleSheet,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import Feather from "react-native-vector-icons/Feather";
import firebase from "../../firebase";
import "firebase/compat/firestore";

const OrderPlacedScreen = ({ route }) => {
  const navigation = useNavigation();
  const [tipPrice, setTipPrice] = useState(4);
  const dispatch = useDispatch();
  const { item, getTotal } = route.params;
  const addOrderItemtoFirebase = (item) =>
    dispatch({
      type: "ADD_THE_ORDER",
      payload: {
        ...item,
        resturantName: item.resturantName,
        resturantImage: item.resturantImage,
        resturantAddress: item.resturantAddress,
        quantity: item.quantity,
        total: Number(getTotal) + tipPrice,
      },
    });
  const { items } = useSelector(
    (state) => state.cartReducer.selectedOrderItems
  );
  const db = firebase.firestore();
  db.collection("orders").add({
    items: items,
    createdAt: firebase.firestore.FieldValue.serverTimestamp(),
  });
  return (
    <>
      <StatusBar
        barStyle="light-content"
        backgroundColor="black"
        hidden={false}
        translucent={true}
      />
      <View style={{ marginTop: 50 }}>
        <Pressable
          style={styles.backButtonContainer}
          onPress={() => navigation.goBack()}
        >
          <Feather name="arrow-left" size={23} />
        </Pressable>
        <Text style={[styles.titleTextStyle, { marginTop: 5 }]}>
          Show your support
        </Text>
        <Text style={styles.titleTextStyle}>with a tip</Text>
        <View style={styles.descriptionTextContainer}>
          <Text style={styles.descriptionTextStyle}>
            100% of your tip goes to your courier. Tips are based on your order
            total of Rs.
            {getTotal} before any discounts or promotions.
          </Text>
        </View>
        <View style={styles.tipContainer}>
          <View style={styles.tipSubContainer}>
            <Image
              source={require("../../assets/images/star.png")}
              style={styles.imageStyle}
            />
            <Text style={styles.textStyle}>Cheers to you</Text>
          </View>
          <Pressable
            style={[
              styles.tipTextContainer,
              tipPrice === 2 && { backgroundColor: "black" },
            ]}
            onPress={() => setTipPrice(2)}
          >
            <Text
              style={[
                styles.tipTextStyle,
                tipPrice === 2 && { color: "white" },
              ]}
            >
              Rs. 2.00
            </Text>
          </Pressable>
        </View>
        <View style={styles.tipContainer}>
          <View style={styles.tipSubContainer}>
            <Image
              source={require("../../assets/images/yellowstar.png")}
              style={styles.imageStyle}
            />
            <Text style={styles.textStyle}>You 're great</Text>
          </View>
          <Pressable
            style={[
              styles.tipTextContainer,
              tipPrice === 3 && { backgroundColor: "black" },
            ]}
            onPress={() => setTipPrice(3)}
          >
            <Text
              style={[
                styles.tipTextStyle,
                tipPrice === 3 && { color: "white" },
              ]}
            >
              Rs. 3.00
            </Text>
          </Pressable>
        </View>
        <View style={styles.tipContainer}>
          <View style={styles.tipSubContainer}>
            <Image
              source={require("../../assets/images/blackstar.png")}
              style={styles.imageStyle}
            />
            <Text style={styles.textStyle}>Thank you so much</Text>
          </View>
          <Pressable
            style={[
              styles.tipTextContainer,
              tipPrice === 4 && { backgroundColor: "black" },
            ]}
            onPress={() => setTipPrice(4)}
          >
            <Text
              style={[
                styles.tipTextStyle,
                tipPrice === 4 && { color: "white" },
              ]}
            >
              Rs. 4.00
            </Text>
          </Pressable>
        </View>
        <View style={styles.borderStyle} />
        <View style={styles.bottomContainer}>
          <Text style={{ fontSize: 17 }}>Your tip: </Text>
          <Text style={styles.bottomTextStyle}>
            Rs.
            {tipPrice}.00
          </Text>
        </View>
        <Pressable
          style={styles.buttonContainer}
          onPress={() => {
            addOrderItemtoFirebase(item);
            navigation.navigate("OrderCompleted", {
              resturantName: item.resturantName,
              item: item,
              getTotal: Number(getTotal) + tipPrice,
            });
          }}
        >
          <Text style={styles.buttonTextStyle}>Thank You </Text>
        </Pressable>
      </View>
    </>
  );
};

export default OrderPlacedScreen;

const styles = StyleSheet.create({
  backButtonContainer: {
    marginLeft: 15,
    marginBottom: 10,
  },
  titleTextStyle: {
    marginLeft: 15,
    fontSize: 32,
    fontWeight: "600",
  },
  descriptionTextContainer: {
    marginLeft: 15,
    marginTop: 20,
    maxWidth: 360,
  },
  descriptionTextStyle: {
    fontSize: 15,
    lineHeight: 22,
    color: "grey",
  },
  tipContainer: {
    marginLeft: 15,
    marginTop: 30,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  tipSubContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  imageStyle: {
    width: 28,
    height: 28,
    resizeMode: "contain",
    borderRadius: 50,
  },
  textStyle: {
    marginLeft: 15,
    fontSize: 17,
    fontWeight: "500",
  },
  tipTextContainer: {
    width: 62,
    height: 34,
    marginRight: 16,
    backgroundColor: "#eee",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
  },
  tipTextStyle: {
    fontWeight: "500",
    color: "black",
  },
  borderStyle: {
    marginLeft: 20,
    marginRight: 20,
    marginTop: 25,
    borderBottomColor: "#e5e5e5",
    borderBottomWidth: 1,
  },
  bottomContainer: {
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  bottomTextStyle: {
    fontSize: 17,
    fontWeight: "500",
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
  buttonTextStyle: {
    fontSize: 18,
    fontWeight: "500",
    color: "white",
  },
});
