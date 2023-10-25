import { useNavigation } from "@react-navigation/native";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const DEFAULT_IMAGE = "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/uber-eats/restaurant3.jpeg";

function ResturantItems({ resturant }) {
    const navigation = useNavigation();
    return (
        <TouchableOpacity onPress={() => navigation.navigate("Resturant", {
            id: resturant.id
        })} style={styles.container}>
            <Image source={{ uri: resturant.image.startsWith("http") ? resturant.image : DEFAULT_IMAGE }} style={styles.imageStyle} />
            <View style={styles.subContainer}>
                <View>
                    <Text style={styles.nameTextStyle}>{resturant.name}</Text>
                    <Text style={{ color: "grey" }}>{resturant.deliveryFee.toFixed(1)} • {resturant.minDeliveryTime}-{resturant.maxDeliveryTime} min</Text>
                </View>
                <View style={styles.ratingContainerStyle}>
                    <Text>{resturant.rating.toFixed(1)}</Text>
                </View>
            </View>
        </TouchableOpacity>
    );
}

export default ResturantItems;

const styles = StyleSheet.create({
    container: {
        width: "100%",
        marginVertical: 10
    },
    imageStyle: {
        marginBottom: 5,
        width: "100%",
        aspectRatio: 5 / 3
    },
    subContainer: {
        flexDirection: "row",
        alignItems: "center"
    },
    nameTextStyle: {
        marginVertical: 5,
        fontSize: 16,
        fontWeight: "600"
    },
    ratingContainerStyle: {
        width: 30,
        height: 30,
        marginLeft: "auto",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#eee",
        borderRadius: 20
    }
});