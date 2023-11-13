import React, { useEffect, useMemo, useRef, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import BottomSheet, { BottomSheetFlatList } from "@gorhom/bottom-sheet";
import * as Location from "expo-location";
import BottomTabs from "../components/BottomTabs";
import Categories from "../components/Categories";
import SearchBar from "../components/SearchBar";
import HeaderTabs from "../components/HeaderTabs";
import ResturantDetail from "../components/ResturantDetail";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

const YELP_API_KEY = "9MpCpziTpWpNEpw1mQszdVERxaJ4qNwWrZXhh3SRtEISnskcjFx1o3fGjn7xDa5ZQleKRaDfTvoULKy0Wen6THwhgSrByNwJAvZspAxyrg-WvH5Kj5_jy8rQZ_erY3Yx";

function PickUpScreen() {
    const [activeTab, setActiveTab] = useState("Pickup");
    const [city, setCity] = useState("San Francisco");
    const [resturantData, setResturantData] = useState([]);
    const [userLocation, setUserLocation] = useState(null);
    const mapRef = useRef(null);
    const getResturantsFromYelp = () => {
        const yelpUrl = `https://api.yelp.com/v3/businesses/search?term=restaurants&location=${city}`;
        const apiOptions = {
            headers: {
                Authorization: `Bearer ${YELP_API_KEY}`
            }
        }
        return fetch(yelpUrl, apiOptions).then((res) => res.json()).then((json) => setResturantData(json.businesses.filter((business) => business.transactions.includes(activeTab.toLowerCase()))));
    };
    useEffect(() => {
        getResturantsFromYelp();
    }, [city, activeTab]);
    useEffect(() => {
        const getUserLocation = async () => {
            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== "granted") {
                return;
            }
            let location = await Location.getCurrentPositionAsync({});
            setUserLocation(location);
        }
        getUserLocation();
    }, []);
    const items = [
        {
            image: require("../../assets/categoriesimages/italian.png"),
            text: "Italian",
            title: "italian"
        },
        {
            image: require("../../assets/categoriesimages/pizza.png"),
            text: "Pizza",
            title: "pizza"
        },
        {
            image: require("../../assets/categoriesimages/juice.png"),
            text: "Juices",
            title: "juice"
        },
        {
            image: require("../../assets/categoriesimages/thai.png"),
            text: "Thai",
            title: "thai"
        },
        {
            image: require("../../assets/categoriesimages/vegan.png"),
            text: "Vegan",
            title: "vegan"
        },
        {
            image: require("../../assets/categoriesimages/bakery.png"),
            text: "Bakery",
            title: "bakery"
        },
        {
            image: require("../../assets/categoriesimages/american.png"),
            text: "American",
            title: "american"
        },
        {
            image: require("../../assets/categoriesimages/burger.png"),
            text: "Burger",
            title: "burger"
        }
    ];
    const bottomSheetRef = useRef(null);
    const snapPoints = useMemo(() => ["19%", "41%", "70%"], []);
    return (
        <View>
            <View style={styles.headerContainer}>
                <View style={{ marginLeft: 15 }}>
                    <Text style={{ fontWeight: "400" }}>Pickup now</Text>
                    <View style={styles.mapLocationTextContainer}>
                        <Text style={{ fontWeight: "600" }}>Map location</Text>
                        <MaterialIcons name="keyboard-arrow-down" size={25} />
                    </View>
                </View>
                <View style={{ marginRight: 15 }}>
                    <HeaderTabs activeTab={activeTab} setActiveTab={setActiveTab} />
                </View>
            </View>
            <MapView ref={mapRef} provider={PROVIDER_GOOGLE}
                showsUserLocation={true}
                followsUserLocation={true}
                initialRegion={{
                    latitude: 37.773972,
                    longitude: -122.431297,
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
                {resturantData.map((rest) => (
                    <Marker title={rest.name} description={rest.location.address1} coordinate={{
                        latitude: rest?.coordinates?.latitude,
                        longitude: rest?.coordinates?.longitude,
                    }} key={rest.id}>
                        <View style={styles.iconContainer}>
                            <MaterialCommunityIcons name="food-fork-drink" size={20} color="black" />
                        </View>
                    </Marker>
                ))}
            </MapView>
            <View style={{ position: "absolute", marginTop: 92 }}>
                <SearchBar cityHandler={setCity} backgroundColor={"#fff"} marginTop={15} left={20} marginRight={10} width={360} alignSelf="auto" height={50} placeHolder={"Food, groceries, drinks, etc"} />
            </View>
            <BottomSheet ref={bottomSheetRef} snapPoints={snapPoints} handleIndicatorStyle={{ backgroundColor: "#DFDFDF", width: 50 }} >
                <View style={{ height: "18%" }}>
                    <BottomSheetFlatList horizontal showsHorizontalScrollIndicator={false} data={items} renderItem={({ item }) => <Categories items={item} key={item.id} marginTop={5} width={40} height={40} />} />
                </View>
                <View style={styles.bottomSheetFlatListContainer}>
                    <BottomSheetFlatList showsVerticalScrollIndicator={false} data={resturantData} renderItem={({ item }) => <ResturantDetail resturantData={item} discount={false} isList="false" marginTop={25} left={0} top={10} />} />
                </View>
            </BottomSheet>
            <View style={styles.bottomContainer}>
                <BottomTabs />
            </View>
        </View>
    );
}

export default PickUpScreen;

const styles = StyleSheet.create({
    headerContainer: {
        marginTop: 50,
        backgroundColor: "#fff",
        flexDirection: "row",
        justifyContent: "space-between"
    },
    mapLocationTextContainer: {
        flexDirection: "row",
        alignItems: "center"
    },
    mapViewStyle: {
        height: "100%",
        width: "100%",
        marginTop: 5
    },
    iconContainer: {
        padding: 12,
        backgroundColor: "white",
        borderRadius: 50
    },
    bottomSheetFlatListContainer: {
        flex: 1,
        marginTop: 5,
        marginBottom: 75
    },
    bottomContainer: {
        marginTop: "auto",
        backgroundColor: "#fff",
        borderTopColor: "#eee",
        borderTopWidth: 1
    }
});