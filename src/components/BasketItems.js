import React from "react";
import { View, Text, Image, Pressable, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

function BasketItems({ items }) {
  const navigation = useNavigation();
  function truncate(string, n) {
    return string?.length > n ? string.substr(0, n - 1) + ".." : string;
  }
  return (
    <>
      <View>
        {items.map((item, index) => (
          <Pressable
            key={index}
            onPress={() =>
              navigation.navigate("OrderInfo", {
                item: item,
              })
            }
          >
            <View
              style={[
                styles.basketItemsContainer,
                items.indexOf(item) === items.length - 1 && {
                  marginBottom: 14,
                },
              ]}
            >
              <Image
                source={{ uri: item.resturantImage }}
                style={styles.imageStyle}
              />
              <View style={styles.informationContainer}>
                <View style={{ marginLeft: 12 }}>
                  <View style={styles.informationSubContainer}>
                    <Text style={styles.nameTextStyle}>
                      {truncate(item.resturantName, 18)}
                    </Text>
                    <Text style={styles.addressTextStyle}>
                      ({truncate(item.resturantAddress, 12)})
                    </Text>
                  </View>
                  <View style={{ marginTop: 8 }}>
                    <Text style={styles.textStyle}>
                      {item.quantity} items • Rs.{item.total.toFixed(2)}
                    </Text>
                    <Text style={styles.textStyle}></Text>
                  </View>
                </View>
              </View>
              <View style={styles.iconContainer}>
                <MaterialIcons
                  name="keyboard-arrow-right"
                  size={28}
                  color="black"
                />
              </View>
            </View>
            {items.indexOf(item) !== items.length - 1 && (
              <View style={styles.borderStyle} />
            )}
          </Pressable>
        ))}
      </View>
    </>
  );
}

export default BasketItems;

const styles = StyleSheet.create({
  basketItemsContainer: {
    marginTop: 25,
    marginLeft: 15,
    flexDirection: "row",
    alignItems: "center",
  },
  imageStyle: {
    width: 65,
    height: 65,
    borderRadius: 50,
  },
  informationContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  informationSubContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  nameTextStyle: {
    fontSize: 17,
    fontWeight: "500",
  },
  addressTextStyle: {
    marginLeft: 3,
    fontSize: 17,
    fontWeight: "500",
  },
  textStyle: {
    fontSize: 14,
    color: "grey",
  },
  iconContainer: {
    marginLeft: "auto",
    right: 5,
  },
  borderStyle: {
    marginLeft: 90,
    marginTop: 14,
    borderBottomColor: "#e2e2e2",
    borderBottomWidth: 1,
  },
});
