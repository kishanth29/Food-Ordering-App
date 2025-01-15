import React from "react";
import { View, Text, StyleSheet, Pressable, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function MenuBreads({ breads, restName, image, address }) {
  const navigation = useNavigation();
  return (
    <>
      {breads.map((bread, index) => (
        <Pressable
          key={index}
          onPress={() =>
            navigation.navigate("Cart", {
              name: bread.title,
              description: bread.description,
              restName: restName,
              restimage: image,
              restAddress: address,
              image: bread.image,
              price: bread.price,
              notfood: false,
              food: bread,
              information: false,
              instruction: false,
            })
          }
        >
          <View style={styles.menuItemContainerStyle}>
            <FoodInfo bread={bread} />
            <FoodImage bread={bread} />
          </View>
        </Pressable>
      ))}
    </>
  );
}
const FoodInfo = (props) => (
  <View style={{ width: 230 }}>
    <Text style={styles.titleStyle}>{props.bread.title}</Text>
    <Text style={{ marginTop: 5 }}>Rs.{props.bread.price}</Text>
  </View>
);
const FoodImage = (props) => (
  <View style={{ marginLeft: 15 }}>
    <Image source={{ uri: props.bread.image }} style={styles.imageStyle} />
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
