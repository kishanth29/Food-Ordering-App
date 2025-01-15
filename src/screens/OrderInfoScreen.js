import React, { useState } from "react";
import {
  View,
  Text,
  Pressable,
  ScrollView,
  Image,
  StyleSheet,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import Feather from "react-native-vector-icons/Feather";
import Entypo from "react-native-vector-icons/Entypo";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Ionicons from "react-native-vector-icons/Ionicons";

const OrderInfoScreen = ({ route }) => {
  const navigation = useNavigation();
  const { item } = route.params;
  const [quantity, setQuantity] = useState(item.quantity);
  const getTotal = () => {
    return Number(Number(item.price) * quantity).toFixed(2);
  };
  const dessertPrice = item.total - Number(item.price) * quantity;
  function truncate(string, n) {
    return string?.length > n ? string.substr(0, n - 1) + ".." : string;
  }
  return (
    <>
      <ScrollView style={{ marginTop: 50 }}>
        <Pressable
          style={styles.backButtonContainer}
          onPress={() => navigation.goBack()}
        >
          <Feather name="arrow-left" size={23} />
        </Pressable>
        <Text style={styles.informationTextStyle}>
          {item.resturantName} ({truncate(item.resturantAddress, 25)})
        </Text>
        <View style={styles.headerContainer}>
          <Text style={styles.quantityTextStyle}>{quantity} items</Text>
          <View style={styles.textContainer}>
            <Text style={[styles.textStyle, { color: "grey" }]}>
              Subtotal:{" "}
            </Text>
            <Text style={styles.textStyle}>
              {"Rs"}
              {getTotal()}
            </Text>
          </View>
        </View>
        <View style={[styles.borderStyle, { marginTop: 20 }]} />
        <View style={styles.titleTextContainer}>
          <View>
            <View style={styles.titleTextSubContainer}>
              <Text style={styles.titleTextStyle}>{item.title}</Text>
            </View>
          </View>
          <Image
            source={{ uri: item.uri || item.image }}
            style={[styles.imageStyle, item.uri && { resizeMode: "contain" }]}
          />
        </View>
        <View style={styles.totalTextContainer}>
          <View
            style={[styles.iconContainer, quantity >= 10 && { width: 130 }]}
          >
            <Pressable
              onPress={() => {
                if (quantity > 1) {
                  setQuantity(quantity - 1);
                }
              }}
            >
              <Entypo
                name="minus"
                size={25}
                style={[{ color: "grey" }, quantity > 1 && { color: "black" }]}
              />
            </Pressable>
            <Text style={{ marginHorizontal: 25 }}>{quantity}</Text>
            <Pressable onPress={() => setQuantity(quantity + 1)}>
              <Entypo name="plus" size={25} />
            </Pressable>
          </View>
          <Text style={styles.totalTextStyle}>
            {"Rs"}
            {getTotal()}
          </Text>
        </View>
        <View style={[styles.borderStyle, { marginTop: 20 }]} />
        <View style={styles.promoTextContainer}>
          <Ionicons name="pricetag-sharp" size={25} />
          <View style={{ marginLeft: 20 }}>
            <Text style={styles.promoTextStyle}>Add a promo</Text>
          </View>
          <View style={styles.promoTextIconContainer}>
            <MaterialIcons
              name="keyboard-arrow-right"
              size={20}
              color="black"
            />
          </View>
        </View>
        <View style={[styles.borderStyle, { marginTop: 25 }]} />
        <View style={styles.subTotalTextContainer}>
          <Text style={styles.subTotalTextStyle}>Subtotal</Text>
          <Text style={styles.getTotalFunctionTextStyle}>
            {"Rs"}
            {getTotal()}
          </Text>
        </View>
      </ScrollView>
      <View style={styles.buttonBorderStyle} />
      <Pressable
        style={[styles.buttonContainer, { backgroundColor: "black" }]}
        onPress={() =>
          navigation.navigate("Checkout", {
            item: item,
            getTotal: getTotal(),
            dessertPrice: dessertPrice,
          })
        }
      >
        <Text style={[styles.buttonTextStyle, { color: "white" }]}>
          Go to checkout
        </Text>
      </Pressable>
      <Pressable
        style={[styles.buttonContainer, { backgroundColor: "#eaeaea" }]}
        onPress={() =>
          navigation.navigate("Cart", {
            name: item.title || item.text,
            description: item.description,
            restName: item.resturantName,
            restimage: item.resturantImage,
            restAddress: item.resturantAddress,
            image: item.image || item.uri,
            price: item.price,
            notfood: item.text && true,
            food: item,
            information: false,
            instruction: false,
          })
        }
      >
        <Text style={[styles.buttonTextStyle, { color: "black" }]}>
          Add items
        </Text>
      </Pressable>
    </>
  );
};

export default OrderInfoScreen;

const styles = StyleSheet.create({
  backButtonContainer: {
    marginLeft: 15,
    marginBottom: 10,
  },
  informationTextStyle: {
    marginLeft: 15,
    marginTop: 10,
    fontSize: 25,
    fontWeight: "600",
  },
  headerContainer: {
    marginTop: 18,
    marginLeft: 15,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  quantityTextStyle: {
    fontSize: 16,
    fontWeight: "500",
  },
  textContainer: {
    marginRight: 15,
    flexDirection: "row",
    alignItems: "center",
  },
  textStyle: {
    fontSize: 16,
    fontWeight: "500",
  },
  borderStyle: {
    marginHorizontal: 15,
    borderBottomColor: "#e2e2e2",
    borderBottomWidth: 1,
  },
  titleTextContainer: {
    marginTop: 15,
    flexDirection: "row",
  },
  titleTextSubContainer: {
    marginLeft: 15,
    flexDirection: "row",
  },
  titleTextStyle: {
    fontSize: 20,
    fontWeight: "500",
  },
  imageStyle: {
    marginLeft: "auto",
    marginRight: 15,
    width: 55,
    height: 55,
  },
  totalTextContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  totalTextStyle: {
    marginLeft: "auto",
    marginTop: 15,
    marginRight: 15,
    fontSize: 16,
    fontWeight: "500",
  },
  iconContainer: {
    width: 120,
    height: 35,
    marginLeft: 15,
    marginTop: 15,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#eee",
    borderRadius: 30,
  },
  promoTextContainer: {
    marginTop: 25,
    marginLeft: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  promoTextStyle: {
    fontSize: 17,
    fontWeight: "500",
  },
  promoTextIconContainer: {
    marginLeft: "auto",
    marginRight: 15,
  },
  subTotalTextContainer: {
    marginTop: 18,
    marginLeft: 15,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  subTotalTextStyle: {
    fontSize: 22,
    fontWeight: "600",
  },
  getTotalFunctionTextStyle: {
    marginRight: 15,
    fontSize: 18,
    fontWeight: "500",
  },
  buttonBorderStyle: {
    marginBottom: 14,
    borderBottomColor: "#eee",
    borderBottomWidth: 1,
  },
  buttonContainer: {
    width: "93%",
    height: 55,
    marginBottom: 16,
    marginTop: "auto",
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
  },
  buttonTextStyle: {
    fontSize: 18,
    fontWeight: "500",
  },
});
