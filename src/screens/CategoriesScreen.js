import React, { useState } from "react";
import { View, Text, Pressable, FlatList, ScrollView, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Feather from "react-native-vector-icons/Feather";
import SearchBar from "../components/SearchBar";
import HomeGroceries from "../components/HomeGroceries";
import CategoriesAlcohols from "../components/CategoriesAlcohols";
import BottomTabs from "../components/BottomTabs";
import CategoriesGroceries from "../components/CategoriesGroceries";
import CategoriesDesserts from "../components/CategoriesDesserts";

const groceries = [
    {
        uri: "https://assets.stickpng.com/images/58429094a6515b1e0ad75abd.png",
        image: "https://d1ralsognjng37.cloudfront.net/0e9dfbc2-0d7c-40ce-a9b4-f314ec9e59bc.jpeg",
        text: "7-Eleven",
        address: "201 W Commerce St",
        rating: "4.6",
        reviews: "40",
        categories: "Convenience",
        color: "#e2ffe2",
        time: "15-30 min",
        selectedText: "Save on selected items"
    },
    {
        uri: "https://www.pngitem.com/pimgs/m/469-4690536_cvs-logo-cvs-health-hd-png-download.png",
        image: "https://tb-static.uber.com/prod/image-proc/processed_images/3be223c4dcb03d147789c3c66a94f88b/d24a30ada2fef6c54cef8739d94823b0.jpeg",
        text: "CVS",
        address: "300 E Commerce St",
        rating: "5.0",
        reviews: "25",
        categories: "Everyday essentials",
        color: "#fff1f3",
        time: "15-30 min",
        selectedText: "Save on selected items"
    },
    {
        uri: "https://download.logo.wine/logo/Costco/Costco-Logo.wine.png",
        image: "https://tb-static.uber.com/prod/image-proc/processed_images/ab9f32e3278b7b3e1d79e0bcef944aa9/3ac2b39ad528f8c8c5dc77c59abb683d.jpeg",
        text: "Costco",
        address: "NW San Antonio",
        rating: "4.9",
        reviews: "200+",
        categories: "Grocery",
        color: "#e2e2e2",
        time: "Available in 56 min",
        selectedText: "Offers available"
    },
    {
        uri: "https://www.walgreens.com/images/adaptive/sp/w-logo.png",
        image: "https://tb-static.uber.com/prod/image-proc/processed_images/7c8de9248810ea97ae0d0e6b60927521/16bb0a3ab8ea98cfe8906135767f7bf4.jpeg",
        text: "Walgreens",
        address: "401 W Cypress St",
        rating: "5.0",
        reviews: "40",
        categories: "Pharmacy",
        color: "#ffffd8",
        time: "25-40 min",
        selectedText: "Save on selected items"
    },
    {
        uri: "https://www.pngitem.com/pimgs/m/360-3608467_total-wine-more-total-wine-logo-png-transparent.png",
        image: "https://d1ralsognjng37.cloudfront.net/6ca1894d-2caf-4a07-b254-cc92407797bf.jpeg",
        text: "Total Wine",
        address: "125 NW Loop 410 Ste 260",
        rating: "5.0",
        reviews: "134",
        categories: "Off-licences",
        color: "#fff6ff",
        time: "Available at 11:00 am",
        selectedText: ""
    }
];

const CategoriesScreen = ({ route }) => {
    const navigation = useNavigation();
    const [city, setCity] = useState("Philadelphia");
    const { title, placeHolder } = route.params;
    return (
        <>
            <ScrollView showsVerticalScrollIndicator={false} style={{ marginTop: 50 }}>
                <Pressable style={styles.backButtonContainer} onPress={() => navigation.goBack()}>
                    <Feather name="arrow-left" size={23} />
                </Pressable>
                <Text style={styles.titleTextStyle}>{title}</Text>
                <SearchBar cityHandler={setCity} backgroundColor={"#eee"} marginTop={8} marginRight={0} left={0} width={370} alignSelf="center" height={50} searchShown={true} placeHolder={placeHolder} />
                <View style={{ marginTop: 15 }}>
                    <Text style={styles.subTitleTextStyle}>Featured stores</Text>
                    <View style={styles.flatListContainer}>
                        <FlatList horizontal showsHorizontalScrollIndicator={false} data={groceries} renderItem={({ item }) => <HomeGroceries groceriesData={item} />} />
                    </View>
                </View>
                {route.params.title === "Alcohol" && (
                    <CategoriesAlcohols />
                )}
                {route.params.title === "Grocery" && (
                    <CategoriesGroceries />
                )}
                {route.params.title === "Dessert" && (
                    <CategoriesDesserts title={"Dessert"} />
                )}
            </ScrollView>
            <View style={styles.bottomContainer}>
                <BottomTabs />
            </View>
        </>
    );
}

export default CategoriesScreen;

const styles = StyleSheet.create({
    backButtonContainer: {
        marginLeft: 15,
        marginBottom: 2
    },
    titleTextStyle: {
        marginLeft: 15,
        fontSize: 30,
        fontWeight: "700"
    },
    subTitleTextStyle: {
        marginTop: 5,
        marginLeft: 15,
        fontSize: 24,
        fontWeight: "700"
    },
    flatListContainer: {
        marginRight: 15,
        marginTop: 2
    },
    bottomContainer: {
        borderTopColor: "#eee",
        backgroundColor: "white",
        borderTopWidth: 1
    }
});