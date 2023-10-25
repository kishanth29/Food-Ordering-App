import React from "react";
import { View, StyleSheet } from "react-native";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import LocationRow from "../components/LocationRow";

export default function SearchBar({ cityHandler, backgroundColor, marginTop, marginRight, left, width, alignSelf, height, placeHolder }) {
    return (
        <View style={[styles.container, { marginTop: marginTop }]}>
            <GooglePlacesAutocomplete onPress={(data, details = null) => {
                const city = data.description.split(",")[0];
                cityHandler(city);
            }}
                placeholder={placeHolder}
                enablePoweredByContainer={false}
                renderRow={(data) =>
                    <LocationRow data={data} />
                }
                styles={{
                    textInput: [styles.textInputStyle, { backgroundColor: backgroundColor }],
                    textInputContainer: [styles.textInputContainer, { marginRight: marginRight, left: left, width: width, height: height, alignSelf: alignSelf, backgroundColor: backgroundColor }]
                }}
                renderLeftButton={() => (
                    <View style={styles.iconContainer}>
                        <FontAwesome5 name="search" size={22} />
                    </View>
                )}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row"
    },
    textInputStyle: {
        marginTop: 7,
        fontSize: 16,
        fontWeight: "400",
        borderRadius: 20
    },
    textInputContainer: {
        flexDirection: "row",
        alignItems: "center",
        borderRadius: 50
    },
    iconContainer: {
        marginLeft: 15,
        marginRight: 5
    }
});