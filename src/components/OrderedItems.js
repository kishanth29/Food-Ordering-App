import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

function BasketItems({ items }) {
    function truncate(string, n) {
        return string?.length > n ? string.substr(0, n - 1) + ".." : string;
    };
    return (
        <>
            <View>
                {items.map((item, index) => (
                    <View key={index}>
                        <View style={[styles.orderedItemsContainer, items.indexOf(item) === items.length - 1 && { marginBottom: 14 }]}>
                            <Image source={{ uri: item.resturantImage }} style={styles.imageStyle} />
                            <View style={styles.orderedItemsSubContainer}>
                                <View style={{ marginLeft: 12 }}>
                                    <View style={styles.orderedItemsInformationContainer}>
                                        <Text style={styles.orderedItemNameTextStyle}>{truncate(item.resturantName, 18)}</Text>
                                        <Text style={styles.orderedItemAddressTextStyle}>({truncate(item.resturantAddress, 12)})</Text>
                                    </View>
                                    <View style={{ marginTop: 8 }}>
                                        <Text style={styles.textStyle}>{item.quantity} items • {"\u00A3"}{(item.total).toFixed(2)}</Text>
                                        <Text style={styles.textStyle}>Delivered to San Antonio</Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                        {items.indexOf(item) !== items.length - 1 && (
                            <View style={styles.borderStyle} />
                        )}
                    </View>
                ))}
            </View>
        </>
    );
}

export default BasketItems;

const styles = StyleSheet.create({
    orderedItemsContainer: {
        marginTop: 25,
        marginLeft: 15,
        flexDirection: "row",
        alignItems: "center"
    },
    imageStyle: {
        width: 65,
        height: 65,
        borderRadius: 50
    },
    orderedItemsSubContainer: {
        flexDirection: "row",
        alignItems: "center"
    },
    orderedItemsInformationContainer: {
        flexDirection: "row",
        alignItems: "center"
    },
    orderedItemNameTextStyle: {
        fontSize: 17,
        fontWeight: "500"
    },
    orderedItemAddressTextStyle: {
        marginLeft: 3,
        fontSize: 17,
        fontWeight: "500"
    },
    textStyle: {
        fontSize: 14,
        color: "grey"
    },
    borderStyle: {
        marginLeft: 90,
        marginTop: 14,
        borderBottomColor: "#e2e2e2",
        borderBottomWidth: 1
    }
});