import React, { useEffect, useState } from "react";
import { Text, View, Image, ScrollView, StatusBar, FlatList, Pressable, StyleSheet } from "react-native";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import { useNavigation } from "@react-navigation/native";
import firebase from "../../firebase";
import "firebase/compat/firestore";
import ResturantDetail from "../components/ResturantDetail";
import MenuDesserts from "../components/MenuDesserts";
import Ionicons from "react-native-vector-icons/Ionicons";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import ButtonTabs from "../components/ButtonTabs";
import MenuItems from "../components/MenuItems";
import MenuDrinks from "../components/MenuDrinks";
import MenuBreads from "../components/MenuBreads";
import MenuMeals from "../components/MenuMeals";
import MenuSides from "../components/MenuSides";
import MenuSalads from "../components/MenuSalads";

const foods = [
    {
        title: "Fried Fish",
        description: "Served with 2 sides and a bread",
        price: "10.49",
        image: "https://d1ralsognjng37.cloudfront.net/ff8651a6-9856-42b4-92e7-562dca5b2a31.jpeg"
    },
    {
        title: "Bacon Cheese Steak",
        description: "Served with 2 sides and a bread",
        price: "10.49",
        image: "https://d1ralsognjng37.cloudfront.net/89213c8e-8a5b-451d-8a9d-0c0ea62e37c8.jpeg"
    },
    {
        title: "Chicken Fried Steak",
        description: "Served with 2 sides and a bread",
        price: "12.50",
        image: "https://d1ralsognjng37.cloudfront.net/f616d43d-7ced-490a-92a2-fe9acd1999d5.jpeg"
    },
    {
        title: "Baked White Fish",
        description: "Served with 2 sides and a bread",
        price: "10.49",
        image: "https://d1ralsognjng37.cloudfront.net/16bc5619-7bd4-45f0-a5e5-3579fe305132.jpeg"
    },
    {
        title: "Roast Chicken",
        description: "Served with 2 sides and a bread",
        price: "14.99",
        image: "https://d1ralsognjng37.cloudfront.net/1084b232-3f0a-4cfe-96e7-e564e6d3a150.jpeg"
    },
    {
        title: "Chicken Tender",
        description: "Served with 2 sides and a bread",
        price: "10.49",
        image: "https://d1ralsognjng37.cloudfront.net/3f1ecc63-f063-4317-826a-1d40a09a01c0.jpeg"
    },
    {
        title: "Fried Chicken",
        description: "Served with 2 sides and a bread",
        price: "10.49",
        image: "https://d1ralsognjng37.cloudfront.net/7f6023de-29ef-49d9-bcd1-39af45a1c1a1.jpeg"
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
    },
    {
        title: "Blackened Tilapia",
        description: "Comes with 6 entree servings, 2 quarts of sides and 6 pieces of bread",
        price: "68.99",
        image: "https://d1ralsognjng37.cloudfront.net/88822211-93d0-47e8-baac-e56085d2aa97.jpeg"
    },
    {
        title: "Chicken Fried Chicken",
        description: "Comes with 6 entree servings, 2 quarts of sides and 6 pieces of bread",
        price: "68.99",
        image: "https://d1ralsognjng37.cloudfront.net/c148a9fa-a019-42e7-932d-c0a8a7629704.jpeg"
    },
    {
        title: "Angus Chopped Steak",
        description: "Comes with 6 entree servings, 2 quarts of sides and 6 pieces of bread",
        price: "68.99",
        image: "https://d1ralsognjng37.cloudfront.net/2e1b214a-d27e-42a0-aa34-f8ebf13ea137.jpeg"
    },
    {
        title: "Fried Fish Family Pack",
        description: "Comes with 6 entree servings, 2 quarts of sides and 6 pieces of bread",
        price: "68.99",
        image: "https://d1ralsognjng37.cloudfront.net/8e9cbfe8-0f18-4e6a-8ad9-ca6c1d5682a4.jpeg"
    }
];
const meals = [
    {
        title: "Fried Fish",
        price: "6.99",
        image: "https://d1ralsognjng37.cloudfront.net/ff8651a6-9856-42b4-92e7-562dca5b2a31.jpeg"
    },
    {
        title: "Bacon Cheese Steak",
        price: "6.99",
        image: "https://d1ralsognjng37.cloudfront.net/ef80bed9-7de7-4852-86e0-7a16ea81240e.jpeg"
    },
    {
        title: "Chicken Strips",
        price: "6.99",
        image: "https://d1ralsognjng37.cloudfront.net/29781634-5b06-4743-8b32-c38c86a8cf99.jpeg"
    },
    {
        title: "3 Veg Plate",
        price: "6.99",
        image: "https://d1ralsognjng37.cloudfront.net/9d76a35a-99a0-4291-9af8-bd9229f1a5c7.jpeg"
    },
    {
        title: "Roast Chicken",
        price: "6.99",
        image: "https://d1ralsognjng37.cloudfront.net/1084b232-3f0a-4cfe-96e7-e564e6d3a150.jpeg"
    }
];
const salads = [
    {
        title: "Tossed Salad",
        price: "3.99",
        image: "https://d1ralsognjng37.cloudfront.net/c5d5ae82-b578-44d8-9526-11d5ab8a1aa3.jpeg"
    },
    {
        title: "Spinach Salad",
        price: "3.99",
        image: "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,width=1200,height=672,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/cea1a4b3-5bc8-4571-a0e2-54122202a3df-retina-large.jpg"
    }
];
const sides = [
    {
        title: "Mac and Cheese",
        price: "2.99",
        image: "https://d1ralsognjng37.cloudfront.net/4bb4540d-952a-4d39-ad93-5e4911269866.jpeg"
    },
    {
        title: "Mashed Potato",
        price: "2.99",
        image: "https://d1ralsognjng37.cloudfront.net/7105f71e-32c9-4229-8525-e5f8beae86e9.jpeg"
    },
    {
        title: "Spinach",
        price: "2.99",
        image: "https://d1ralsognjng37.cloudfront.net/75e198a9-8846-4b7f-9676-514b313f03ab.jpeg"
    },
    {
        title: "Fried Okra",
        price: "2.99",
        image: "https://d1ralsognjng37.cloudfront.net/de844890-228a-4da6-a5bc-4d33f6e92114.jpeg"
    },
    {
        title: "Cabbage",
        price: "2.99",
        image: "https://d1ralsognjng37.cloudfront.net/f8beb20a-ad66-4b5f-aaca-2ab6d1dff020.jpeg"
    },
    {
        title: "Green Beans with Bacon",
        price: "2.99",
        image: "https://d1ralsognjng37.cloudfront.net/8fc96f66-ec59-4d83-ad7d-250016359a00.jpeg"
    },
    {
        title: "Corn",
        price: "2.99",
        image: "https://tb-static.uber.com/prod/image-proc/processed_images/d29a9fe8aacb34068aad887e4370ad4c/5954bcb006b10dbfd0bc160f6370faf3.jpeg"
    }
];
const breads = [
    {
        title: "White Roll",
        price: "0.59",
        image: "https://d1ralsognjng37.cloudfront.net/3ab7d288-45db-4a92-9ad5-c1c114d110c8.jpeg"
    },
    {
        title: "Cornbread",
        price: "0.59",
        image: "https://d1ralsognjng37.cloudfront.net/f10b6817-58fe-4fc4-8e3f-3290d87a752b.jpeg"
    },
    {
        title: "Jalapeno Cornbread",
        price: "0.59",
        image: "https://d1ralsognjng37.cloudfront.net/cc3ff011-51d7-44ad-9192-516adeaa3fc2.jpeg"
    },
    {
        title: "Wheat Roll",
        price: "0.59",
        image: "https://d1ralsognjng37.cloudfront.net/1641082c-7982-4caf-93d3-147d61a33acf.jpeg"
    }
];
const drinks = [
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
        title: "Unsweet Iced Tea",
        price: "3.29",
        image: "https://d1ralsognjng37.cloudfront.net/687dac97-3729-4990-9fbd-16c82db57236.jpeg"
    },
    {
        title: "Fountain Dr Pepper",
        description: "Served with two sides and bread.",
        price: "3.29",
        image: "https://d1ralsognjng37.cloudfront.net/c3a76f18-23c0-4c70-8110-dfdf92bc24d2.jpeg"
    },
    {
        title: "Fountain Sprite",
        price: "3.29",
        image: "https://d1ralsognjng37.cloudfront.net/bbaa69a1-2acd-4722-b36c-263400287c3e.jpeg"
    },
    {
        title: "Fountain Root Beer",
        price: "3.29",
        image: "https://d1ralsognjng37.cloudfront.net/db99aa9a-075f-4bf4-b207-53c7acdcda3b.jpeg"
    },
    {
        title: "Fountain Diet Coke",
        price: "3.29",
        image: "https://d1ralsognjng37.cloudfront.net/db99aa9a-075f-4bf4-b207-53c7acdcda3b.jpeg"
    }
];
const desserts = [
    {
        title: "Carrot Cake",
        price: "5.99",
        image: "https://d1ralsognjng37.cloudfront.net/3d0d7bf8-1ce8-4281-9d1b-b4e12dc5087e.jpeg"
    },
    {
        title: "Chocolate Icebox",
        price: "4.99",
        image: "https://d1ralsognjng37.cloudfront.net/325d69f0-90b3-4e87-b1b7-4fc7e7eb3794.jpeg"
    },
    {
        title: "Jello",
        price: "1.19",
        image: "https://d1ralsognjng37.cloudfront.net/e3f63845-0f78-42bc-9938-dc4bb90f5fb2.jpeg"
    },
    {
        title: "Cheesecake",
        price: "5.99",
        image: "https://d1ralsognjng37.cloudfront.net/8c813714-5dd0-4627-a879-a262d70fa77b.jpeg"
    },
    {
        title: "Lime Congeal",
        price: "2.99",
        image: "https://d1ralsognjng37.cloudfront.net/eb3ae701-ed48-4e0e-aa0c-88cca5c34d05.jpeg"
    },
    {
        title: "Pecan Pie",
        price: "5.99",
        image: "https://d1ralsognjng37.cloudfront.net/23dfad7a-b77e-46a7-9459-1dc36a84bf96.jpeg"
    }
];

const YELP_API_KEY = "9MpCpziTpWpNEpw1mQszdVERxaJ4qNwWrZXhh3SRtEISnskcjFx1o3fGjn7xDa5ZQleKRaDfTvoULKy0Wen6THwhgSrByNwJAvZspAxyrg-WvH5Kj5_jy8rQZ_erY3Yx";

function ResturantDetailScreen({ route }) {
    const navigation = useNavigation();
    const { name, image, price, reviews, rating, categories, address, city, discount, latitude, longitude } = route.params;
    const [activeTab, setActiveTab] = useState("Delivery");
    const formattedCategories = categories.map((categorie) => categorie.title).join(" • ");
    const [cities, setCities] = useState(city);
    const [resturantData, setResturantData] = useState([]);
    const [lastOrder, setLastOrder] = useState([]);
    const getResturantsFromYelp = () => {
        const yelpUrl = `https://api.yelp.com/v3/businesses/search?term=restaurants&location=${cities}`;
        const apiOptions = {
            headers: {
                Authorization: `Bearer ${YELP_API_KEY}`
            }
        }
        return fetch(yelpUrl, apiOptions).then((res) => res.json()).then((json) => setResturantData(json.businesses.filter((business) => business.transactions.includes(activeTab.toLowerCase()))));
    };
    useEffect(() => {
        getResturantsFromYelp();
    }, [cities, activeTab]);
    useEffect(() => {
        const db = firebase.firestore();
        const unsubscribe = db.collection("basketitems").orderBy("createdAt", "desc").limit(1).onSnapshot((snapshot) => {
            snapshot.docs.map((doc) => {
                setLastOrder(doc.data());
            })
        })
        return () => unsubscribe();
    }, []);
    return (
        <>
            <StatusBar barStyle="light-content" backgroundColor="transparent" hidden={false} translucent={true} />
            <ScrollView showsVerticalScrollIndicator={false}>
                {activeTab === "Delivery" ? (
                    <>
                        <Image source={{ uri: image }} style={styles.imageStyle} />
                        <Pressable style={styles.backButtonContainer} onPress={() => navigation.goBack()}>
                            <Ionicons name="arrow-back" size={25} />
                        </Pressable>
                    </>
                ) : (<MapView provider={PROVIDER_GOOGLE}
                    initialRegion={{
                        latitude: latitude,
                        longitude: longitude,
                        latitudeDelta: 0.07,
                        longitudeDelta: 0.07
                    }}
                    customMapStyle={[
                        {
                            "featureType": "landscape",
                            "stylers": [
                                {
                                    "visibility": "off"
                                }
                            ]
                        },
                        {
                            "featureType": "poi.park",
                            "stylers": [
                                {
                                    "visibility": "off"
                                }
                            ]
                        },
                        {
                            "featureType": "water",
                            "stylers": [
                                {
                                    "color": "#87ceeb"
                                },
                                {
                                    "lightness": -15
                                }
                            ]
                        }
                    ]} style={styles.mapViewStyle}>
                    <Marker title={name} description={address} coordinate={{
                        latitude: latitude,
                        longitude: longitude
                    }}>
                        <View style={styles.iconContainer}><MaterialCommunityIcons name="food-fork-drink" size={20} color="black" /></View>
                    </Marker>
                </MapView>)}
                <View style={{ maxWidth: 350 }}>
                    <Text style={styles.informationTextStyle}>{name} ({address})</Text>
                </View>
                <View style={styles.ratingTextContainer}>
                    <View style={{ maxWidth: 350 }}>
                        <Text style={styles.ratingTextStyle}>⭐ {rating} ({reviews} reviews) • {formattedCategories}</Text>
                    </View>
                    <Text style={[styles.timeTextStyle, { marginTop: 2 }]}>Open until 8:30 PM</Text>
                    <Text style={styles.timeTextStyle}>Tap for hours, info and more</Text>
                </View>
                <ButtonTabs activeTab={activeTab} setActiveTab={setActiveTab} checkout={false} />
                <View style={styles.groupOrderTextContainer}>
                    <FontAwesome5 name="user-plus" size={16} />
                    <Text style={styles.groupOrderTextStyle}>Group order</Text>
                </View>
                <View style={styles.pickedTextContainer}>
                    <Text style={styles.contentTextStyle}>Picked for you</Text>
                </View>
                <View style={styles.menuItemsContainer}>
                    <MenuItems foods={foods} restName={route.params.name} image={route.params.image} address={route.params.address} marginLeft={15} information={true} instruction={true} />
                </View>
                <View style={styles.contentTextContainer}>
                    <Text style={styles.contentTextStyle}>Meals</Text>
                </View>
                <View style={styles.contentMenuContainer}>
                    <MenuMeals meals={meals} restName={route.params.name} image={route.params.image} address={route.params.address} />
                </View>
                <View style={styles.contentTextContainer}>
                    <Text style={styles.contentTextStyle}>Salads</Text>
                </View>
                <View style={styles.contentMenuContainer}>
                    <MenuSalads salads={salads} restName={route.params.name} image={route.params.image} address={route.params.address} />
                </View>
                <View style={styles.contentTextContainer}>
                    <Text style={styles.contentTextStyle}>Sides</Text>
                </View>
                <View style={styles.contentMenuContainer}>
                    <MenuSides sides={sides} restName={route.params.name} image={route.params.image} address={route.params.address} />
                </View>
                <View style={styles.contentTextContainer}>
                    <Text style={styles.contentTextStyle}>Breads</Text>
                </View>
                <View style={styles.contentMenuContainer}>
                    <MenuBreads breads={breads} restName={route.params.name} image={route.params.image} address={route.params.address} />
                </View>
                <View style={styles.contentTextContainer}>
                    <Text style={styles.contentTextStyle}>Drinks</Text>
                </View>
                <View style={styles.contentMenuContainer}>
                    <MenuDrinks drinks={drinks} restName={route.params.name} image={route.params.image} address={route.params.address} />
                </View>
                <View style={styles.contentTextContainer}>
                    <Text style={styles.contentTextStyle}>Desserts</Text>
                </View>
                <View style={styles.contentMenuContainer}>
                    <MenuDesserts desserts={desserts} restName={route.params.name} image={route.params.image} address={route.params.address} />
                </View>
                <View style={{ marginBottom: 5 }}>
                    <Text style={styles.textStyle}>More to explore</Text>
                    <View style={{ marginBottom: 5 }}>
                        <FlatList horizontal showsHorizontalScrollIndicator={false} data={resturantData} renderItem={({ item }) => <ResturantDetail resturantData={item} isList="true" discount={false} marginTop={0} left={0} top={8} />} />
                    </View>
                </View>
            </ScrollView>
            {lastOrder.items && (
                <Pressable style={[styles.viewcartButton, !discount && { marginBottom: 18 }]} onPress={() => navigation.navigate("Basket")}>
                    <Text style={styles.viewcartButtonTextStyle}>View Cart</Text>
                </Pressable>
            )}
            {discount && (
                <>
                    <View style={styles.borderStyle} />
                    <View style={styles.discountTextContainer}>
                        <Text style={styles.discountTextStyle}>Spend {"\u00A3"}30, save {"\u00A3"}5</Text>
                    </View>
                </>
            )}
        </>
    );
}

export default ResturantDetailScreen;

const styles = StyleSheet.create({
    imageStyle: {
        height: 218,
        width: "100%"
    },
    backButtonContainer: {
        width: 45,
        height: 45,
        marginLeft: 25,
        marginTop: 45,
        position: "absolute",
        backgroundColor: "white",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 50
    },
    mapViewStyle: {
        height: 218,
        width: "100%"
    },
    iconContainer: {
        padding: 12,
        backgroundColor: "white",
        borderRadius: 50
    },
    informationTextStyle: {
        marginTop: 20,
        marginHorizontal: 15,
        fontSize: 24,
        fontWeight: "700"
    },
    ratingTextContainer: {
        marginTop: 5,
        marginLeft: 15,
        marginBottom: 10
    },
    ratingTextStyle: {
        fontSize: 16,
        fontWeight: "500"
    },
    timeTextStyle: {
        fontSize: 15,
        color: "grey"
    },
    groupOrderTextContainer: {
        width: 140,
        height: 40,
        marginTop: 20,
        marginLeft: 15,
        flexDirection: "row",
        backgroundColor: "#eee",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 30
    },
    groupOrderTextStyle: {
        marginLeft: 10,
        fontWeight: "500"
    },
    pickedTextContainer: {
        marginTop: 20,
        marginLeft: 20
    },
    menuItemsContainer: {
        marginTop: 10,
        marginLeft: 12
    },
    contentTextContainer: {
        marginTop: 25,
        marginLeft: 20
    },
    contentTextStyle: {
        fontSize: 25,
        fontWeight: "700"
    },
    contentMenuContainer: {
        marginTop: 10,
        marginLeft: 12,
        marginBottom: 5
    },
    textStyle: {
        marginLeft: 15,
        marginTop: 15,
        marginBottom: 10,
        fontSize: 25,
        fontWeight: "600"
    },
    viewcartButton: {
        width: "90%",
        height: 55,
        marginBottom: 10,
        marginTop: "auto",
        alignSelf: "center",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "black",
        borderRadius: 10
    },
    viewcartButtonTextStyle: {
        fontSize: 18,
        fontWeight: "500",
        color: "white"
    },
    borderStyle: {
        marginBottom: 8,
        borderBottomColor: "#e5e5e5",
        borderBottomWidth: 2
    },
    discountTextContainer: {
        marginBottom: 16,
        marginTop: "auto",
        alignSelf: "center",
        alignItems: "center",
        justifyContent: "center"
    },
    discountTextStyle: {
        fontSize: 17,
        fontWeight: "500",
        color: "green"
    }
});