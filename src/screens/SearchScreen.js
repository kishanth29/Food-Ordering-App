import React, { useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import SearchBar from "../components/SearchBar";
import TopCategories from "../components/TopCategories";
import BottomTabs from "../components/BottomTabs";
import AllCategories from "../components/AllCategories";

function SearchScreen() {
    const [city, setCity] = useState("San Antonio");
    return (
        <>
            <View style={{ marginTop: 26 }}>
                <View style={{ marginBottom: 10 }}>
                    <SearchBar cityHandler={setCity} backgroundColor={"#eee"} marginTop={20} width={360} alignSelf="center" left={0} marginRight={0} height={50} placeHolder={"Food, groceries, drinks, etc"} />
                </View>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <Text style={styles.topCategoriesTextStyle}>Top Categories</Text>
                    <TopCategories />
                    <Text style={styles.allCategoriesTextStyle}>All Categories</Text>
                    <AllCategories />
                </ScrollView>
            </View>
            <View style={styles.bottomContainer}>
                <BottomTabs />
            </View>
        </>
    );
}

export default SearchScreen;

const styles = StyleSheet.create({
    topCategoriesTextStyle: {
        marginLeft: 20,
        marginTop: 10,
        marginBottom: 5,
        fontSize: 20,
        fontWeight: "700"
    },
    allCategoriesTextStyle: {
        marginLeft: 20,
        marginTop: 30,
        marginBottom: 5,
        fontSize: 20,
        fontWeight: "700"
    },
    bottomContainer: {
        marginTop: "auto",
        backgroundColor: "#fff",
        borderTopColor: "#eee",
        borderTopWidth: 1
    }
});