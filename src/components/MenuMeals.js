import React from "react";
import { View, Text, StyleSheet, Pressable, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function MenuMeals({ meals, restName, image, address }) {
  const navigation = useNavigation();
  return (
    <>
      {meals.map((meal, index) => (
        <Pressable
          key={index}
          onPress={() =>
            navigation.navigate("Cart", {
              name: meal.title,
              description: meal.description,
              restName: restName,
              restimage: image,
              restAddress: address,
              image: meal.image,
              price: meal.price,
              notfood: false,
              food: meal,
              information: true,
              instruction: true,
            })
          }
        >
          <View style={styles.menuItemContainerStyle}>
            <FoodInfo meal={meal} />
            <FoodImage meal={meal} />
          </View>
        </Pressable>
      ))}
    </>
  );
}

const FoodInfo = (props) => (
  <View style={{ width: 230 }}>
    <Text style={styles.titleStyle}>{props.meal.title}</Text>
    <Text style={{ marginTop: 5 }}>Rs. {props.meal.price}</Text>
  </View>
);

const FoodImage = (props) => (
  <View style={{ marginLeft: 15 }}>
    <Image source={{ uri: props.meal.image }} style={styles.imageStyle} />
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
    fontSize: 17,
    fontWeight: "500",
  },
  imageStyle: {
    width: 110,
    height: 110,
  },
});
