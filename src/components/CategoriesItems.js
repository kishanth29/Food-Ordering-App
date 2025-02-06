import React, { useState } from "react";
import { Image, Modal, Pressable, StyleSheet, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";
import ModalCategories from "./ModalCategories";

function CategoriesItems() {
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);
  const checkoutModalContent = () => {
    return (
      <View style={styles.modalContainer}>
        <View style={styles.modalSubContainer}>
          <View style={styles.titleTextContainer}>
            <Text style={styles.titleTextStyle}>All categories</Text>
          </View>
          <ModalCategories
            item1="alcohol"
            item2="coffee"
            item3="desserts"
            item4="resturant"
            marginBottom={5}
            text1="Alcohol"
            text2="Coffee"
            text3="Dessert"
            text4="Restaurants"
          />
          <ModalCategories
            item1="pharmacy"
            item2="flowers"
            item3="grocery"
            item4="icecream"
            marginBottom={5}
            text1="Pharmacy"
            text2="Flowers"
            text3="Grocery"
            text4="Ice cream"
          />
          {/* <ModalCategories item1="ride" marginBottom={0} text1="Ride" /> */}
        </View>
      </View>
    );
  };
  return (
    <View>
      <Modal
        animationType="slide"
        visible={modalVisible}
        transparent={true}
        onRequestClose={() => setModalVisible(false)}
      >
        {checkoutModalContent()}
      </Modal>
      <View style={styles.container}>
        <Pressable
          style={[styles.subContainer, { marginLeft: 15 }]}
          onPress={() => navigation.navigate("Resturants")}
        >
          <Image
            source={require("../../assets/images/resturant.png")}
            style={styles.resturantsImageStyle}
          />
          <Text style={[styles.textStyle, { marginLeft: 5, fontSize: 16 }]}>
            Restaurants
          </Text>
        </Pressable>
        <Pressable
          style={[styles.subContainer, { marginRight: 15 }]}
          onPress={() =>
            navigation.navigate("Categories", {
              title: "Grocery",
              placeHolder: "Search grocery",
            })
          }
        >
          <Image
            source={require("../../assets/images/grocery.png")}
            style={styles.groceryImageStyle}
          />
          <Text style={[styles.textStyle, { marginLeft: 5, fontSize: 16 }]}>
            Grocery
          </Text>
        </Pressable>
      </View>
      <View style={styles.container}>
        <View style={{ alignItems: "center" }}>
          <Pressable
            style={[styles.bottomSubContainer, { marginLeft: 12 }]}
            onPress={() =>
              navigation.navigate("Categories", {
                title: "Alcohol",
                placeHolder: "Search alcohol",
              })
            }
          >
            <Image
              source={require("../../assets/images/alcohol.png")}
              style={styles.alcoholImageStyle}
            />
          </Pressable>
          <Text style={[styles.textStyle, { marginLeft: 12 }]}>Alcohol</Text>
        </View>
        <View style={{ alignItems: "center" }}>
          <Pressable
            style={styles.bottomSubContainer}
            onPress={() =>
              navigation.navigate("Categories", {
                title: "Dessert",
                placeHolder: "Search dessert",
              })
            }
          >
            <Image
              source={require("../../assets/images/dessert.png")}
              style={styles.dessertImageStyle}
            />
          </Pressable>
          <Text style={styles.textStyle}>Dessert</Text>
        </View>
        <View style={{ alignItems: "center" }}>
          <View style={styles.bottomSubContainer}>
            <View style={styles.rideContainer}>
              <Image
                source={require("../../assets/images/icecream.png")}
                style={styles.rideImageStyle}
              />
            </View>
          </View>
          <Text style={styles.textStyle}>IceCream</Text>
        </View>
        <View style={{ alignItems: "center" }}>
          <Pressable
            style={[styles.bottomSubContainer, { marginRight: 12 }]}
            onPress={() => setModalVisible(true)}
          >
            <SimpleLineIcons name="options" size={22} color="#696969" />
          </Pressable>
          <Text style={styles.textStyle}>See all</Text>
        </View>
      </View>
    </View>
  );
}

export default CategoriesItems;

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  modalSubContainer: {
    marginTop: "auto",
    height: 420,
    width: "100%",
    backgroundColor: "white",
  },
  titleTextContainer: {
    marginTop: 15,
    alignItems: "center",
  },
  titleTextStyle: {
    marginBottom: 15,
    fontSize: 18,
    fontWeight: "500",
  },
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  subContainer: {
    width: 175,
    height: 90,
    padding: 8,
    marginTop: 8,
    backgroundColor: "#f4f4f4",
    borderRadius: 10,
  },
  resturantsImageStyle: {
    width: 45,
    height: 50,
    marginLeft: "auto",
    resizeMode: "contain",
  },
  textStyle: {
    marginTop: 5,
    fontSize: 12,
    fontWeight: "500",
  },
  bottomSubContainer: {
    width: 85,
    height: 70,
    padding: 10,
    marginTop: 10,
    backgroundColor: "#f4f4f4",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  groceryImageStyle: {
    width: 45,
    height: 50,
    marginLeft: "auto",
    resizeMode: "contain",
  },
  alcoholImageStyle: {
    width: 40,
    height: 45,
    resizeMode: "contain",
  },
  dessertImageStyle: {
    width: 40,
    height: 50,
    resizeMode: "contain",
  },
  rideContainer: {
    marginLeft: 15,
    marginBottom: 10,
  },
  rideImageStyle: {
    width: 40,
    height: 50,
    resizeMode: "contain",
  },
});
