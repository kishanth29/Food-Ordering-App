import React, { useState, useEffect } from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const YELP_API_KEY =
  "9MpCpziTpWpNEpw1mQszdVERxaJ4qNwWrZXhh3SRtEISnskcjFx1o3fGjn7xDa5ZQleKRaDfTvoULKy0Wen6THwhgSrByNwJAvZspAxyrg-WvH5Kj5_jy8rQZ_erY3Yx";

export default function ResturantDetails({ cities, discount, closed }) {
  const navigation = useNavigation();
  const [activeTab, setActiveTab] = useState("Delivery");
  const [resturantData, setResturantData] = useState([]);

  const getResturantsFromYelp = () => {
    const yelpUrl = `https://api.yelp.com/v3/businesses/search?term=restaurants&location=${cities}`;
    const apiOptions = {
      headers: {
        Authorization: `Bearer ${YELP_API_KEY}`,
      },
    };
    return fetch(yelpUrl, apiOptions)
      .then((res) => res.json())
      .then((json) =>
        setResturantData(
          json.businesses.filter((business) =>
            business.transactions.includes(activeTab.toLowerCase())
          )
        )
      );
  };

  useEffect(() => {
    getResturantsFromYelp();
  }, [cities, activeTab]);

  function truncate(string, n) {
    return string?.length > n ? string.substr(0, n - 1) + ".." : string;
  }

  return (
    <>
      {resturantData.map((resturant, index) => (
        <TouchableOpacity
          activeOpacity={1}
          onPress={() =>
            !closed &&
            navigation.navigate("Resturant", {
              name: resturant.name,
              image: resturant.image_url,
              price: `Rs ${resturant.price || "N/A"}`,
              reviews: resturant.review_count,
              rating: resturant.rating,
              categories: resturant.categories,
              address: resturant.location.address1,
              city: resturant.location.city,
              discount: discount,
              latitude: resturant.coordinates.latitude,
              longitude: resturant.coordinates.longitude,
            })
          }
          key={index}
          style={{ marginBottom: 5 }}
        >
          <View style={styles.subContainer}>
            <ResturantImage
              image={resturant.image_url}
              discount={discount}
              closed={closed}
            />
            <ResturantInfo
              name={resturant.name}
              rating={resturant.rating}
              address={resturant.location.address1}
              truncate={truncate}
              discount={discount}
            />
          </View>
        </TouchableOpacity>
      ))}
    </>
  );
}

const ResturantImage = (props) => (
  <>
    <Image
      source={{ uri: props.image }}
      style={[
        styles.imageStyle,
        props.closed && { backgroundColor: "#111", opacity: 0.5 },
      ]}
    />
    {props.discount && (
      <View style={styles.discountContainer}>
        <Text style={styles.discountTextStyle}>Spend Rs 3000, save Rs 500</Text>
      </View>
    )}
    {props.closed && (
      <View style={styles.closedContainer}>
        <Text style={styles.closedTextStyle}>Currently unavailable</Text>
      </View>
    )}
    <TouchableOpacity style={styles.iconContainer}>
      <MaterialCommunityIcons name="heart-outline" size={25} color="#fff" />
    </TouchableOpacity>
  </>
);

const ResturantInfo = (props) => (
  <View style={styles.informationContainer}>
    <View>
      <View style={styles.informationSubContainer}>
        <Text style={styles.nameTextStyle}>
          {props.truncate(props.name, 25)}
        </Text>
        <Text style={styles.addressTextStyle}>
          ({props.truncate(props.address, 15)})
        </Text>
      </View>
      <View style={{ flexDirection: "row" }}>
        <Text style={{ color: "grey" }}>
          {props.discount ? "Rs 49 Delivery Fee • " : "Rs 99 Delivery Fee • "}
        </Text>
        <Text style={{ color: "grey" }}>30-45 min</Text>
      </View>
    </View>
    <View style={styles.ratingTextContainerStyle}>
      <Text>{props.rating}</Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  subContainer: {
    padding: 15,
    backgroundColor: "white",
  },
  imageStyle: {
    width: "100%",
    height: 180,
  },
  discountContainer: {
    position: "absolute",
    padding: 5,
    top: 25,
    left: 15,
    width: 200,
    backgroundColor: "#3cb043",
    borderTopRightRadius: 50,
    borderBottomRightRadius: 50,
  },
  discountTextStyle: {
    marginLeft: 12,
    fontSize: 15,
    fontWeight: "500",
    color: "white",
  },
  closedContainer: {
    position: "absolute",
    alignSelf: "center",
  },
  closedTextStyle: {
    marginTop: 90,
    fontSize: 15,
    fontWeight: "500",
    color: "white",
  },
  iconContainer: {
    position: "absolute",
    top: 20,
    right: 20,
    fontWeight: "bold",
  },
  informationContainer: {
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  informationSubContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  nameTextStyle: {
    fontSize: 16,
    fontWeight: "500",
  },
  addressTextStyle: {
    marginHorizontal: 5,
    fontSize: 16,
    fontWeight: "500",
  },
  ratingTextContainerStyle: {
    height: 30,
    width: 30,
    backgroundColor: "#eee",
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
  },
});
