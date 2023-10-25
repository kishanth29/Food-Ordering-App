import React, { useState, useEffect } from "react";
import { Pressable, Text, View, StatusBar, ScrollView, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import Ionicons from "react-native-vector-icons/Ionicons";
import firebase from "../../firebase";
import "firebase/compat/firestore";
import OrderedItems from "../components/OrderedItems";

function OrdersDetailScreen() {
    const navigation = useNavigation();
    const [lastOrder, setLastOrder] = useState([]);
    useEffect(() => {
        const db = firebase.firestore();
        const unsubscribe = db.collection("orders").orderBy("createdAt", "desc").limit(1).onSnapshot((snapshot) => {
            snapshot.docs.map((doc) => {
                setLastOrder(doc.data());
            });
        });
        return () => unsubscribe();
    }, []);
    return (
        <>
            <StatusBar barStyle="light-content" backgroundColor="black" hidden={false} translucent={true} />
            <ScrollView showsVerticalScrollIndicator={false} style={[styles.container, lastOrder.items && { backgroundColor: "white" }]}>
                <View style={[styles.orderContainer, lastOrder.items && { backgroundColor: "#f6f6f6" }]}>
                    <Pressable style={{ right: 100 }} onPress={() => navigation.goBack()}>
                        <Ionicons name="arrow-back" size={25} />
                    </Pressable>
                    <Text style={styles.textStyle}>Your orders</Text>
                </View>
                {lastOrder.items ? (
                    <OrderedItems items={lastOrder.items} />
                ) : (
                    <View style={{ marginTop: 260 }}>
                        <View style={{ alignSelf: "center" }}>
                            <FontAwesome5 name="receipt" size={50} color="#d7d7d7" />
                        </View>
                        <View style={styles.orderDetailsContainer}>
                            <Text style={styles.orderDetailsTextStyle}>No orders yet</Text>
                            <View style={{ alignSelf: "center" }}>
                                <Text style={{ fontSize: 15 }}>When you place your first order, it will appear here</Text>
                            </View>
                            <Pressable style={styles.buttonContainer} onPress={() => navigation.navigate("Home")}>
                                <Text style={styles.buttonTextStyle}>Find food</Text>
                            </Pressable>
                        </View>
                    </View>
                )}
            </ScrollView>
        </>
    );
}

export default OrdersDetailScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f6f6f6"
    },
    orderContainer: {
        padding: 15,
        marginTop: 35,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "white"
    },
    textStyle: {
        marginRight: 25,
        fontSize: 20,
        fontWeight: "500"
    },
    orderDetailsContainer: {
        marginTop: 25,
        alignItems: "center",
        justifyContent: "center"
    },
    orderDetailsTextStyle: {
        marginBottom: 15,
        fontSize: 20,
        fontWeight: "500"
    },
    buttonContainer: {
        width: 100,
        height: 45,
        marginTop: 15,
        backgroundColor: "black",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 50
    },
    buttonTextStyle: {
        fontSize: 15,
        color: "white"
    }
});