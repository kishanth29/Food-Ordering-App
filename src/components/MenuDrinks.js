import React from "react";
import { View, Text, StyleSheet, Pressable, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function MenuDrinks({ drinks, restName, image, address }) {
  const navigation = useNavigation();
  return (
    <>
      {drinks.map((drink, index) => (
        <Pressable
          key={index}
          onPress={() =>
            navigation.navigate("Cart", {
              name: drink.title,
              description: drink.description,
              restName: restName,
              restimage: image,
              restAddress: address,
              image: drink.image,
              price: drink.price,
              notfood: false,
              food: drink,
              information: false,
              instruction: false,
            })
          }
        >
          <View style={styles.menuItemContainerStyle}>
            <FoodInfo drink={drink} />
            <FoodImage drink={drink} />
          </View>
        </Pressable>
      ))}
    </>
  );
}
const FoodInfo = (props) => (
  <View style={{ width: 230 }}>
    <Text style={styles.titleStyle}>{props.drink.title}</Text>
    <Text style={{ marginTop: 5 }}>Rs.{props.drink.price}</Text>
  </View>
);
const FoodImage = (props) => (
  <View style={{ marginLeft: 15 }}>
    <Image source={{ uri: props.drink.image }} style={styles.imageStyle} />
  </View>
);

const styles = StyleSheet.create({
  menuItemContainerStyle: {
    margin: 10,
    marginTop: 10,
    flexDirection: "row",
    justifycontent: "space-between",
  },
  titleStyle: {
    fontSize: 16,
    fontWeight: "500",
  },
  imageStyle: {
    width: 110,
    height: 110,
  },
});
