import React, { useState } from "react";
import { ScrollView, Text, View, Image, Pressable, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Feather from "react-native-vector-icons/Feather";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import Octicons from "react-native-vector-icons/Octicons";
import Ionicons from "react-native-vector-icons/Ionicons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import ButtonTabs from "../components/ButtonTabs";

function CheckoutScreen({ route }) {
    const navigation = useNavigation();
    const [activeTab, setActiveTab] = useState("Delivery");
    const [isfasterBlack, setIsfasterBlack] = useState(false);
    const [isstandardBlack, setIsstandardBlack] = useState(false);
    const extradeliveryFee = isfasterBlack ? 2.99 : 0;
    const { item, getTotal, dessertPrice } = route.params;
    const [subTotal, setSubTotal] = useState(getTotal);
    function truncate(string, n) {
        return string?.length > n ? string.substr(0, n - 1) + ".." : string;
    };
    return (
        <>
            <ScrollView showsVerticalScrollIndicator={false} style={{ marginTop: 50 }}>
                <Pressable style={styles.backButtonContainer} onPress={() => navigation.goBack()}>
                    <Feather name="arrow-left" size={23} />
                </Pressable>
                <Text style={styles.titleTextStyle}>Checkout</Text>
                <View style={{ marginTop: 20 }}>
                    <ButtonTabs activeTab={activeTab} setActiveTab={setActiveTab} checkout={true} />
                </View>
                <View style={styles.locationTextContainer}>
                    <Octicons name="location" size={25} />
                    <View style={{ marginLeft: 20 }}>
                        <Text style={styles.locationTextStyle}>San Antonio</Text>
                        <Text style={{ marginTop: 5 }}>TX</Text>
                    </View>
                    <View style={styles.iconContainer}>
                        <MaterialIcons name="keyboard-arrow-right" size={25} color="black" />
                    </View>
                </View>
                <View style={[styles.borderStyle, { marginLeft: 80 }]} />
                <View style={styles.deliveryTextContainer}>
                    <FontAwesome5 name="user" size={25} color="black" />
                    <View style={{ marginLeft: 25 }}>
                        <Text style={styles.deliveryTextStyle}>Meet at door</Text>
                        <Text style={styles.addDeliveryTextStyle}>Add delivery note</Text>
                    </View>
                    <View style={styles.iconContainer}>
                        <MaterialIcons name="keyboard-arrow-right" size={25} color="black" />
                    </View>
                </View>
                <View style={[styles.borderStyle, { marginLeft: 80 }]} />
                <View style={styles.middleContainer}>
                    <Text style={styles.deliveryOptionsTextStyle}>Delivery Options</Text>
                    <Pressable style={[styles.fasterDeliveryContainer, isfasterBlack && { borderColor: "black" }]} onPress={() => setIsfasterBlack(true) + setIsstandardBlack(true)} >
                        <MaterialCommunityIcons name="lightning-bolt" size={30} color="green" />
                        <View style={{ marginLeft: 15 }}>
                            <View style={styles.fasterDeliverySubContainer}>
                                <Text style={styles.deliveryTypeTextStyle}>Priority</Text>
                                <View style={styles.fasterDeliveryTextContainer}>
                                    <Text style={styles.fasterDeliveryTextStyle}>Faster</Text>
                                </View>
                                <Text style={styles.fasterTimeTextStyle}>+{"\u00A3"}2.99</Text>
                            </View>
                            <Text style={styles.timeTextStyle}>25-40 min(s) • Delivered directly to you</Text>
                        </View>
                    </Pressable>
                    <Pressable style={[styles.standardDeliveryContainer, isstandardBlack && { borderColor: "#e2e2e2" }]} onPress={() => setIsstandardBlack(false) + setIsfasterBlack(false)}>
                        <MaterialCommunityIcons name="clock-fast" size={30} />
                        <View style={{ marginLeft: 15 }}>
                            <Text style={styles.deliveryTypeTextStyle}>Standard</Text>
                            <Text style={styles.timeTextStyle}>30-45 min(s)</Text>
                        </View>
                    </Pressable>
                    <View style={{ marginTop: 20 }}>
                        <View style={styles.menuItemsContainer}>
                            <Text style={styles.menuItemsTextStyle}>Your items</Text>
                            <Text style={styles.seeMenuTextStyle}>See menu</Text>
                        </View>
                        <View style={styles.resturantInformationContainer}>
                            <Image source={{ uri: item.resturantImage }} style={styles.resturantImageStyle} />
                            <View>
                                <View style={styles.resturantInformationSubContainer}>
                                    <Text style={styles.resturantNameTextStyle}>{item.resturantName}</Text>
                                    <Text style={styles.resturantAddressTextStyle}>({truncate(item.resturantAddress, 14)})</Text>
                                </View>
                                <Text style={styles.quantityTextStyle}>{item.quantity} item</Text>
                            </View>
                        </View>
                    </View>
                    <View style={[styles.borderStyle, { marginRight: 20 }]} />
                </View>
                <View style={{ marginTop: 15 }}>
                    <View style={styles.addItemsTextContainer}>
                        <Text style={{ fontWeight: "500" }}>+ Add items</Text>
                    </View>
                </View>
                <View style={styles.giftTextContainer}>
                    <Ionicons name="md-gift-sharp" size={25} />
                    <View style={{ marginLeft: 20 }}>
                        <Text style={styles.giftTextStyle}>Make it a gift</Text>
                        <Text style={styles.addReceiptTextStyle}>Add recipient info and a message</Text>
                    </View>
                    <View style={styles.iconContainer}>
                        <MaterialIcons name="keyboard-arrow-right" size={20} color="black" />
                    </View>
                </View>
                <View style={[styles.borderStyle, { marginLeft: 60, marginRight: 15 }]} />
                <View style={styles.promoTextContainer}>
                    <Ionicons name="pricetag-sharp" size={25} />
                    <View style={{ marginLeft: 20 }}>
                        <Text style={styles.promoTextStyle}>Add a promo</Text>
                    </View>
                    <View style={styles.iconContainer}>
                        <MaterialIcons name="keyboard-arrow-right" size={20} color="black" />
                    </View>
                </View>
                <View style={styles.abovePriceDetailsBorderStyle} />
                <View style={styles.priceDetailsContainer}>
                    <View style={styles.textContainer}>
                        <Text style={styles.textStyle}>Subtotal</Text>
                        <Text style={styles.subTextStyle}>{"\u00A3"}{(Number(subTotal) + dessertPrice).toFixed(2)}</Text>
                    </View>
                    <View style={[styles.textContainer, { marginTop: 15 }]}>
                        <Text style={styles.textStyle}>Delivery fee</Text>
                        <Text style={styles.subTextStyle}>{"\u00A3"}0.49</Text>
                    </View>
                    <View style={[styles.textContainer, { marginTop: 15 }]}>
                        <Text style={styles.textStyle}>Taxes & Other Fees</Text>
                        <Text style={styles.subTextStyle}>{"\u00A3"}3.33</Text>
                    </View>
                    <View style={styles.totalTextContainer}>
                        <Text style={styles.totalTextStyle}>Total</Text>
                        <Text style={styles.subTotalTextStyle}>{"\u00A3"}{(Number(subTotal) + 0.49 + 3.33 + extradeliveryFee + dessertPrice).toFixed(2)}</Text>
                    </View>
                </View>
                <View style={styles.creditCardDetailsContainer}>
                    <Image source={require("../../assets/images/creditcard.png")} style={styles.creditCardImageStyle} />
                    <View style={styles.iconContainer}>
                        <MaterialIcons name="keyboard-arrow-right" size={20} color="black" />
                    </View>
                </View>
                <View style={styles.borderStyle} />
                <View style={styles.bottomDescriptionContainer}>
                    <Text style={styles.bottomDescriptionTextStyle}>If you're not around when the courier arrives, they'll leave your order at the door. By placing your order, you agree to take full responsibility for it once it's delivered. Orders containing alcohol or other restricted items may not be eligible for leave at door and will be returned to the shop if you are not available.</Text>
                </View>
                <Pressable style={styles.buttonContainer} onPress={() => navigation.navigate("OrderPlaced", {
                    item: item,
                    getTotal: (Number(subTotal) + 0.49 + 3.33 + extradeliveryFee + dessertPrice).toFixed(2),
                    dessertPrice: dessertPrice
                })}>
                    <Text style={styles.buttonTextStyle}>Next</Text>
                </Pressable>
            </ScrollView>
        </>
    );
}

export default CheckoutScreen;

const styles = StyleSheet.create({
    backButtonContainer: {
        marginLeft: 15,
        marginBottom: 10
    },
    titleTextStyle: {
        marginLeft: 15,
        marginTop: 5,
        fontSize: 30,
        fontWeight: "600"
    },
    locationTextContainer: {
        marginLeft: 25,
        marginTop: 25,
        flexDirection: "row",
        alignItems: "center"
    },
    locationTextStyle: {
        fontSize: 17,
        fontWeight: "500"
    },
    iconContainer: {
        marginLeft: "auto",
        marginRight: 15
    },
    borderStyle: {
        marginTop: 15,
        borderBottomColor: "#e2e2e2",
        borderBottomWidth: 1
    },
    deliveryTextContainer: {
        marginLeft: 25,
        marginTop: 15,
        flexDirection: "row",
        alignItems: "center"
    },
    deliveryTextStyle: {
        fontSize: 17,
        fontWeight: "500"
    },
    addDeliveryTextStyle: {
        marginTop: 5,
        color: "green"
    },
    middleContainer: {
        marginLeft: 15,
        marginTop: 15
    },
    deliveryOptionsTextStyle: {
        fontSize: 20,
        fontWeight: "600"
    },
    fasterDeliveryContainer: {
        padding: 10,
        marginTop: 18,
        marginRight: 15,
        flexDirection: "row",
        alignItems: "center",
        borderColor: "#e2e2e2",
        borderRadius: 10,
        borderWidth: 2
    },
    fasterDeliverySubContainer: {
        flexDirection: "row",
        alignItems: "center"
    },
    deliveryTypeTextStyle: {
        fontSize: 17,
        fontWeight: "500"
    },
    fasterDeliveryTextContainer: {
        marginLeft: 10,
        width: 50,
        height: 23,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "green",
        borderRadius: 30
    },
    fasterDeliveryTextStyle: {
        fontSize: 12,
        color: "white"
    },
    fasterTimeTextStyle: {
        marginLeft: 125,
        fontSize: 13
    },
    timeTextStyle: {
        marginTop: 5,
        fontSize: 14,
        color: "#9d9d9d"
    },
    standardDeliveryContainer: {
        padding: 10,
        marginTop: 8,
        marginRight: 15,
        flexDirection: "row",
        alignItems: "center",
        borderColor: "#111",
        borderRadius: 10,
        borderWidth: 2
    },
    menuItemsContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },
    menuItemsTextStyle: {
        fontSize: 20,
        fontWeight: "600"
    },
    seeMenuTextStyle: {
        marginRight: 20,
        color: "green"
    },
    resturantInformationContainer: {
        marginTop: 30,
        flexDirection: "row"
    },
    resturantImageStyle: {
        width: 45,
        height: 45,
        borderRadius: 50
    },
    resturantInformationSubContainer: {
        marginLeft: 12,
        flexDirection: "row"
    },
    resturantNameTextStyle: {
        fontSize: 16,
        fontWeight: "500"
    },
    resturantAddressTextStyle: {
        marginLeft: 3,
        fontSize: 16,
        fontWeight: "500"
    },
    quantityTextStyle: {
        marginLeft: 12,
        color: "grey"
    },
    addItemsTextContainer: {
        width: 110,
        height: 40,
        marginLeft: 15,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#eaeaea",
        borderRadius: 30
    },
    giftTextContainer: {
        marginTop: 25,
        marginLeft: 20,
        flexDirection: "row",
        alignItems: "center"
    },
    giftTextStyle: {
        fontSize: 17,
        fontWeight: "500"
    },
    addReceiptTextStyle: {
        marginTop: 3,
        fontSize: 14,
        color: "#9d9d9d"
    },
    promoTextContainer: {
        marginTop: 20,
        marginLeft: 20,
        flexDirection: "row",
        alignItems: "center"
    },
    promoTextStyle: {
        fontSize: 17,
        fontWeight: "500"
    },
    abovePriceDetailsBorderStyle: {
        marginLeft: 60,
        marginRight: 15,
        marginTop: 20,
        borderBottomColor: "#e2e2e2",
        borderBottomWidth: 1
    },
    priceDetailsContainer: {
        marginLeft: 15,
        marginTop: 15
    },
    textContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },
    textStyle: {
        fontSize: 16,
        color: "#8a8a8a"
    },
    subTextStyle: {
        marginRight: 15,
        fontSize: 15,
        color: "#8a8a8a"
    },
    totalTextContainer: {
        marginTop: 15,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },
    totalTextStyle: {
        fontSize: 17,
        fontWeight: "500",
        color: "black"
    },
    subTotalTextStyle: {
        marginRight: 15,
        fontSize: 16,
        fontWeight: "500"
    },
    creditCardDetailsContainer: {
        marginLeft: 15,
        marginTop: 35,
        marginBottom: 5,
        flexDirection: "row",
        alignItems: "center"
    },
    creditCardImageStyle: {
        width: 35,
        height: 35,
        resizeMode: "contain"
    },
    bottomDescriptionContainer: {
        marginLeft: 15,
        marginTop: 15,
        maxWidth: 350
    },
    bottomDescriptionTextStyle: {
        fontSize: 12,
        lineHeight: 18,
        color: "grey"
    },
    buttonContainer: {
        width: "92%",
        height: 55,
        marginBottom: 15,
        marginTop: 20,
        alignSelf: "center",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "black",
        borderRadius: 10
    },
    buttonTextStyle: {
        fontSize: 18,
        fontWeight: "500",
        color: "white"
    }
});