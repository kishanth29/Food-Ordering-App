import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Image, Text, ScrollView, StyleSheet, Pressable, TextInput, StatusBar, FlatList } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import firebase from "../../firebase";
import "firebase/compat/firestore";
import Entypo from "react-native-vector-icons/Entypo";
import Ionicons from "react-native-vector-icons/Ionicons";
import MenuItems from "../components/MenuItems";
import MenuDessertDetails from "../components/MenuDessertDetails";
import MenuBreadDetails from "../components/MenuBreadDetails";
import MenuSideDetails from "../components/MenuSideDetails";
import HomeItems from "../components/HomeItems";

const foods = [
    {
        title: "Fried Fish",
        description: "Served with 2 sides and a bread",
        price: "10.49",
        image: "https://d1ralsognjng37.cloudfront.net/ff8651a6-9856-42b4-92e7-562dca5b2a31.jpeg"
    },
    {
        title: "Sweet Iced Tea",
        price: "3.29",
        image: "https://d1ralsognjng37.cloudfront.net/687dac97-3729-4990-9fbd-16c82db57236.jpeg"
    },
    {
        title: "Fountain Coke",
        price: "3.29",
        image: "https://d1ralsognjng37.cloudfront.net/db99aa9a-075f-4bf4-b207-53c7acdcda3b.jpeg",
    },
    {
        title: "Lime Congeal",
        price: "2.99",
        image: "https://d1ralsognjng37.cloudfront.net/eb3ae701-ed48-4e0e-aa0c-88cca5c34d05.jpeg"
    },
    {
        title: "Fried Chicken",
        description: "Served with 2 sides and a bread",
        price: "10.49",
        image: "https://d1ralsognjng37.cloudfront.net/7f6023de-29ef-49d9-bcd1-39af45a1c1a1.jpeg"
    },
    {
        title: "Pecan Pie",
        price: "5.99",
        image: "https://d1ralsognjng37.cloudfront.net/23dfad7a-b77e-46a7-9459-1dc36a84bf96.jpeg"
    },
    {
        title: "Liver and Onions",
        description: "Served with 2 sides and a bread",
        price: "10.49",
        image: "https://d1ralsognjng37.cloudfront.net/6f495b78-f3f9-4cc5-9ea4-8c30cbcf8d14.jpeg"
    },
    {
        title: "Baked Almondine",
        description: "Served with 2 sides and a bread",
        price: "10.49",
        image: "https://d1ralsognjng37.cloudfront.net/3ab3fbb2-f697-453a-9f1e-99fe045289cd.jpeg"
    }
];
const frequentlyfoods = [
    {
        uri: "https://m.media-amazon.com/images/I/71aNZfwe0eL._SL1204_.jpg",
        text: "Gatorade Perform 02 Thirst Quencher Blue Bolt - 24.0 fl oz",
        price: "6.60"
    },
    {
        uri: "https://m.media-amazon.com/images/I/91gLTYhyjTL.jpg",
        text: "Lays's Potato Chips Limon - 7.75 oz",
        price: "6.49"
    },
    {
        uri: "https://m.media-amazon.com/images/I/71re-aC6CGL._AC_UF1000,1000_QL80_.jpg",
        text: "Simply Lemonade Juice Drink, All Natural Lemonade - 11.5 fl oz",
        price: "3.56"
    },
    {
        uri: "http://cdn.shopify.com/s/files/1/0626/4953/2601/products/36798_US_IC_Milk---Cookies_473ml_FOP-720x720-f55dd41d-eb51-4344-b6f4-9334932d324d.jpg?v=1677611108",
        text: "Ben & Jerry's Milk Cookies Ice Cream 16oz",
        price: "6.99"
    },
    {
        uri: "https://tb-static.uber.com/prod/image-proc/processed_images/cd9ef461a6e49679a035e31cc5ff7a47/5954bcb006b10dbfd0bc160f6370faf3.jpeg",
        text: "Blue Bell Cookies n' Cream Ice Cream 16oz",
        price: "4.29"
    },
    {
        uri: "https://m.media-amazon.com/images/I/91Fn3x8-uPL._SL1500_.jpg",
        text: "Doritos Dinamita Chile Limon Dinamita Chile Limon - 10.14 oz",
        price: "7.54"
    },
    {
        uri: "https://m.media-amazon.com/images/I/71GuB+HzRaL.jpg",
        text: "Gatorade Perform 02 Thirst Quencher Apple Punch - 24.0 fl oz",
        price: "6.60"
    },
    {
        uri: "https://pics.walgreens.com/prodimg/416817/450.jpg",
        text: "Barefoot Chardonnay White Wine 1.5L",
        price: "12.99"
    },
    {
        uri: "https://media.liquormax.com/cvdza2kmqsdf15sg5ap0m/andre-brut-champagne-2048x.webp",
        text: "Andre Brut Sparkling Wine 750 ml",
        price: "9.99"
    },
    {
        uri: "https://m.media-amazon.com/images/I/41LlP8aTKeL.jpg",
        text: "Snapple Juice Drink Kiwi Strawberry - 16.0 oz",
        price: "5.67"
    },
    {
        uri: "https://tb-static.uber.com/prod/image-proc/processed_images/519ce519f7377b213036ed14fe2cc6f0/5954bcb006b10dbfd0bc160f6370faf3.jpeg",
        text: "Bubbies Hawaii Passion Fruit Mochi Ice Cream Individually Wrapped 1ct",
        price: "2.49"
    },
    {
        uri: "https://m.media-amazon.com/images/I/719WTnG5hYL._AC_UF1000,1000_QL80_.jpg",
        text: "Kit Kat Dark Chocolate Wafer Candy, Individually Wrapped, Bar - 1.5 oz",
        price: "2.31"
    },
    {
        uri: "https://m.media-amazon.com/images/I/91JNXjCjrML._AC_UF894,1000_QL80_.jpg",
        text: "Cinnamon Toast Crunch Cereal Cup 2oz",
        price: "2.89"
    },
    {
        uri: "https://m.media-amazon.com/images/I/81ZAB-ZboPL._AC_UF1000,1000_QL80_.jpg",
        text: "Oreo Cookies - 5.2 oz",
        price: "1.99"
    },
    {
        uri: "https://usa.mionetto.com/uploads/4/product/prestige-prosecco-brut-2018-h824-3.png",
        text: "Mionetto Prestige Prosecco Treviso Brut 750ml 11% ABV",
        price: "16.98"
    },
    {
        uri: "https://tb-static.uber.com/prod/image-proc/processed_images/fd1508c24c68c3fa11b00fd9b4f0393c/5954bcb006b10dbfd0bc160f6370faf3.jpeg",
        text: "Blue Bunny Bunny Tracks Load'd Bars 4ct 13.6oz",
        price: "7.99"
    },
    {
        uri: "https://www.simpleskincare.com/sk-eu/content/dam/brands/talenti/united_states_ofamerica/56452218-caramel-cooke-crunch-pint-shot.png",
        text: "Talenti Gelato Caramel Cookie Crunch 16oz",
        price: "7.99"
    },
    {
        uri: "https://m.media-amazon.com/images/I/91IWdvNEaSL.jpg",
        text: "Cheetos Cheese Flavoured Snacks XXtra Flamin' Hot Crunchy - 8.5 oz",
        price: "6.81"
    },
    {
        uri: "https://m.media-amazon.com/images/I/71lNL6PzslL._AC_UF1000,1000_QL80_.jpg",
        text: "Diary Pure Half & Half 1 Pint",
        price: "3.29"
    },
    {
        uri: "https://m.media-amazon.com/images/I/71q-F1i+Q-L._AC_UF1000,1000_QL80_.jpg",
        text: "Maruchan Yakisoba Teriyaki 4oz",
        price: "2.49"
    },
    {
        uri: "https://m.media-amazon.com/images/I/61+g+MoY3EL._AC_UL420_SR420,420_.jpg",
        text: "White Castle Cheeseburgers 11oz",
        price: "8.59"
    }
];

function CartItemScreen({ route }) {
    const navigation = useNavigation();
    const dispatch = useDispatch();
    const [quantity, setQuantity] = useState(1);
    const [dessertPrice, setDessertPrice] = useState(0);
    const { name, description, restName, restimage, restAddress, image, price, notfood, food, information, instruction, groceries } = route.params;
    const getTotal = () => {
        return (Number(price) * quantity).toFixed(2);
    };
    const addItemtoFirebase = (item) =>
        dispatch({
            type: "ADD_TO_BASKET",
            payload: { ...item, resturantName: restName, resturantImage: restimage, resturantAddress: restAddress, quantity: quantity, total: Number(getTotal()) + Number(dessertPrice) }
        });
    const { items } = useSelector((state) => state.cartReducer.selectedItems);
    const db = firebase.firestore();
    db.collection("basketitems").add({
        items: items,
        createdAt: firebase.firestore.FieldValue.serverTimestamp()
    });
    return (
        <>
            <StatusBar barStyle="light-content" backgroundColor="transparent" hidden={false} translucent={true} />
            <ScrollView showsVerticalScrollIndicator={false}>
                {image ? (
                    <Image source={{ uri: image }} style={[styles.imageStyle, notfood && { resizeMode: "contain" }]} />
                ) : (
                    <Image source={{ uri: restimage }} style={[styles.imageStyle, { resizeMode: "contain" }]} />
                )}
                <Pressable style={[styles.buttonContainer, notfood && { backgroundColor: "black" }]} onPress={() => navigation.goBack()}>
                    {notfood ? (
                        <Ionicons name="arrow-back" size={25} color="white" />
                    ) : (
                        <Ionicons name="arrow-back" size={25} color="black" />
                    )}
                </Pressable>
                <View style={styles.informationContainer}>
                    <Text style={styles.nameTextStyle}>{name}</Text>
                    <Text style={styles.priceTextStyle}>{"\u00A3"}{price}</Text>
                </View>
                {information && (
                    <View style={[styles.menuDetailsContainer, { marginTop: 6 }]}>
                        <MenuSideDetails />
                    </View>
                )}
                {information && (
                    <View style={styles.menuDetailsContainer}>
                        <MenuBreadDetails />
                    </View>
                )}
                {information && (
                    <View style={styles.menuDetailsContainer}>
                        <MenuDessertDetails dessertPrice={dessertPrice} setDessertPrice={setDessertPrice} />
                    </View>
                )}
                {instruction && (
                    <View style={[styles.instructionContainer, !information && { marginTop: 6 }]}>
                        <View style={styles.instructionSubContainer}>
                            <Text style={styles.instructionTextStyle}>Special instructions</Text>
                            <View style={styles.instructionTextInputContainer}>
                                <TextInput style={styles.instructionTextInputStyle} keyboardType="default">Add a note (extra sauce, no onions, etc.)</TextInput>
                            </View>
                        </View>
                    </View>
                )}
                <View style={[styles.iconContainer, quantity >= 10 && { width: 130 }]}>
                    <Pressable onPress={() => { if (quantity > 1) { setQuantity(quantity - 1) } }}>
                        <Entypo name="minus" size={25} style={[{ color: "grey" }, quantity > 1 && { color: "black" }]} />
                    </Pressable>
                    <Text style={{ marginHorizontal: 25 }}>{quantity}</Text>
                    <Pressable onPress={() => setQuantity(quantity + 1)}>
                        <Entypo name="plus" size={25} />
                    </Pressable>
                </View>
                {description && (
                    <View style={styles.descriptionContainer}>
                        <View style={styles.descriptionSubContainer}>
                            <Text style={styles.descriptionTitleTextStyle}>Description</Text>
                            <Text style={styles.descriptionTextStyle}>{description}</Text>
                        </View>
                    </View>
                )}
                <View style={[styles.menuContainer, description && { marginTop: 10 }]}>
                    <View style={styles.menuSubContainer}>
                        <Text style={styles.textStyle}>Frequently bought together</Text>
                    </View>
                </View>
                {!groceries ? (
                    <View style={styles.meunItemsContainer}>
                        <MenuItems foods={foods} restName={route.params.restName} image={route.params.restimage} address={route.params.restAddress} marginLeft={22} information={false} instruction={false} />
                    </View>
                ) : (
                    <View style={{ marginTop: 5 }}>
                        <FlatList horizontal showsHorizontalScrollIndicator={false} data={frequentlyfoods} renderItem={({ item }) => <HomeItems items={item} marginBottom={12} restName={route.params.name} image={route.params.image} address={route.params.address} notfood={true} groceries={false} />} />
                    </View>
                )}
            </ScrollView>
            <View style={styles.borderStyle} />
            <Pressable style={styles.cartButtonContainer} onPress={() => addItemtoFirebase(food)}>
                <Text style={styles.cartButtonTextStyle}>Add {quantity} to cart • {"\u00A3"}{getTotal()}</Text>
            </Pressable>
        </>
    );
}

export default CartItemScreen;

const styles = StyleSheet.create({
    imageStyle: {
        width: "100%",
        height: 300
    },
    buttonContainer: {
        position: "absolute",
        width: 45,
        height: 45,
        marginLeft: 25,
        marginTop: 45,
        backgroundColor: "white",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 50
    },
    informationContainer: {
        marginTop: 10,
        marginLeft: 15
    },
    nameTextStyle: {
        fontSize: 25,
        fontWeight: "600"
    },
    priceTextStyle: {
        marginTop: 8,
        fontSize: 17,
        fontWeight: "500"
    },
    menuDetailsContainer: {
        borderTopColor: "#f6f6f6",
        borderTopWidth: 8
    },
    instructionContainer: {
        borderTopColor: "#f6f6f6",
        borderTopWidth: 8
    },
    instructionSubContainer: {
        marginLeft: 15,
        marginRight: 15,
        marginTop: 15
    },
    instructionTextStyle: {
        fontSize: 20,
        fontWeight: "600"
    },
    instructionTextInputContainer: {
        marginTop: 20,
        width: "100%",
        height: 110,
        backgroundColor: "#f8f8f8",
        borderRadius: 5
    },
    instructionTextInputStyle: {
        marginLeft: 15,
        marginTop: 5,
        color: "grey"
    },
    iconContainer: {
        width: 120,
        height: 40,
        marginLeft: 15,
        marginTop: 40,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#eee",
        borderRadius: 30
    },
    descriptionContainer: {
        marginTop: 18,
        borderTopColor: "#f6f6f6",
        borderTopWidth: 8
    },
    descriptionSubContainer: {
        marginLeft: 15,
        marginTop: 15
    },
    descriptionTitleTextStyle: {
        fontSize: 20,
        fontWeight: "600"
    },
    descriptionTextStyle: {
        marginTop: 5,
        color: "grey"
    },
    menuContainer: {
        marginTop: 20,
        borderTopColor: "#f6f6f6",
        borderTopWidth: 8
    },
    menuSubContainer: {
        marginLeft: 15,
        marginTop: 10
    },
    textStyle: {
        fontSize: 25,
        fontWeight: "600"
    },
    meunItemsContainer: {
        marginTop: 5,
        marginLeft: 5,
        marginBottom: 5
    },
    borderStyle: {
        marginBottom: 14,
        borderBottomColor: "#eee",
        borderBottomWidth: 1
    },
    cartButtonContainer: {
        width: "93%",
        height: 55,
        marginBottom: 16,
        marginTop: "auto",
        alignSelf: "center",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "black",
        borderRadius: 10
    },
    cartButtonTextStyle: {
        fontSize: 18,
        fontWeight: "500",
        color: "white"
    }
});