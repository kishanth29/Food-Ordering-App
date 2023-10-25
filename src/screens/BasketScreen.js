import React, { useEffect, useState } from "react";
import { Image, Pressable, Text, TouchableOpacity, View, StatusBar, ScrollView, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import BasketItems from "../components/BasketItems";
import BottomTabs from "../components/BottomTabs";
import firebase from "../../firebase";
import "firebase/compat/firestore";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

function BasketScreen() {
    const navigation = useNavigation();
    const [lastOrder, setLastOrder] = useState([]);
    useEffect(() => {
        const db = firebase.firestore();
        const unsubscribe = db.collection("basketitems").orderBy("createdAt", "desc").limit(1).onSnapshot((snapshot) => {
            snapshot.docs.map((doc) => {
                setLastOrder(doc.data());
            });
        });
        return () => unsubscribe();
    }, []);
    return (
        <>
            <StatusBar barStyle="light-content" backgroundColor="black" hidden={false} translucent={true} />
            <ScrollView showsVerticalScrollIndicator={false} style={{ marginTop: 20 }}>
                <TouchableOpacity style={styles.ordersContainer} activeOpacity={1} onPress={() => navigation.navigate("Order")}>
                    <FontAwesome5 name="receipt" size={18} />
                    <Text style={styles.ordersTextStyle}>Orders</Text>
                </TouchableOpacity>
                <View style={styles.titleContainer}>
                    <Text style={styles.titleTextStyle}>Carts</Text>
                </View>
                {lastOrder.items ? (
                    <BasketItems items={lastOrder.items} />
                ) : (
                    <View style={styles.contentContainer}>
                        <Image source={{ uri: "https://static.vecteezy.com/system/resources/previews/016/911/594/original/shopping-cart-icon-in-comic-style-trolley-cartoon-illustration-on-white-isolated-background-basket-splash-effect-business-concept-vector.jpg" }} style={styles.imageStyle} />
                        <Text style={styles.contentTitleTextStyle}>Add items to start a cart</Text>
                        <View style={{ alignItems: "center" }}>
                            <Text style={styles.contentDescriptionTextStyle}>Once you add items from a restaurant or store, </Text>
                            <Text style={styles.contentDescriptionTextStyle}>your cart will appear here.</Text>
                        </View>
                        <Pressable style={styles.contentButtonContainer} onPress={() => navigation.navigate("Search")}>
                            <Text style={styles.contentButtonText}>Start shopping</Text>
                        </Pressable>
                    </View>
                )}
            </ScrollView>
            <View style={styles.bottomContainer}>
                <BottomTabs />
            </View>
        </>
    );
}

export default BasketScreen;

const styles = StyleSheet.create({
    ordersContainer: {
        marginTop: 20,
        marginLeft: "auto",
        marginRight: 15,
        width: 90,
        height: 40,
        flexDirection: "row",
        backgroundColor: "#f1f1f1",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 30
    },
    ordersTextStyle: {
        marginLeft: 10,
        fontWeight: "500"
    },
    titleContainer: {
        marginLeft: 20,
        marginTop: 5
    },
    titleTextStyle: {
        fontSize: 30,
        fontWeight: "600"
    },
    contentContainer: {
        marginTop: 30,
        alignItems: "center",
        justifyContent: "center"
    },
    imageStyle: {
        height: 180,
        width: 180,
        resizeMode: "contain"
    },
    contentTitleTextStyle: {
        marginBottom: 15,
        fontSize: 20,
        fontWeight: "600"
    },
    contentDescriptionTextStyle: {
        fontSize: 16,
        color: "grey"
    },
    contentButtonContainer: {
        width: 130,
        height: 40,
        marginTop: 15,
        backgroundColor: "black",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 50
    },
    contentButtonText: {
        fontSize: 15,
        color: "white"
    },
    bottomContainer: {
        backgroundColor: "white",
        borderTopColor: "#eee",
        borderTopWidth: 1
    }
});