import React from "react";
import { View, Text, ScrollView, Pressable, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import AllResturantsDetails from "../components/AllResturantsDetails";
import Ionicons from "react-native-vector-icons/Ionicons";

const AllResturantsScreen = () => {
    const navigation = useNavigation();
    return (
        <>
            <View style={styles.headerContainer}>
                <Pressable style={{ right: 6 }} onPress={() => navigation.goBack()}>
                    <Ionicons name="arrow-back" size={25} />
                </Pressable>
                <Text style={styles.headerTextStyle}>All Stores</Text>
            </View>
            <ScrollView showsVerticalScrollIndicator={false} style={{ marginLeft: 12 }}>
                <AllResturantsDetails cities="Bakersfield" discount={false} />
                <AllResturantsDetails cities="New York" discount={false} />
                <AllResturantsDetails cities="Omaha" discount={false} />
                <AllResturantsDetails cities="Atlanta" discount={false} />
                <AllResturantsDetails cities="Raleigh" discount={false} />
                <AllResturantsDetails cities="Colorado Springs" discount={false} closed={true} />
            </ScrollView>
        </>
    );
}

export default AllResturantsScreen;

const styles = StyleSheet.create({
    headerContainer: {
        padding: 19,
        marginTop: 35,
        marginBottom: 7,
        flexDirection: "row",
        alignItems: "center",
        borderBottomColor: "#eee",
        borderBottomWidth: 1
    },
    headerTextStyle: {
        marginLeft: 10,
        fontSize: 17,
        fontWeight: "500"
    }
});