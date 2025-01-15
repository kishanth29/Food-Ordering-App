import React from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

const HomeFooter = () => {
  const navigation = useNavigation();
  return (
    <View style={{ marginTop: 15 }}>
      <View style={{ alignItems: "center" }}>
        <Pressable
          style={styles.subContainer}
          onPress={() => navigation.navigate("Search")}
        >
          <Text style={{ fontWeight: "500" }}>BROWSER OR SEARCH</Text>
        </Pressable>
        <Pressable onPress={() => navigation.navigate("AllResturants")}>
          <Text style={styles.textStyle}>SEE ALL RESTURANTS</Text>
        </Pressable>
      </View>
      <View style={styles.descriptionTextContainer}>
        <Text style={styles.descriptionTextStyle}>
          Uva Eats is paid by merchants for marketing and promotion, which
          influences the personalised recommendations you see. Learn more or
          change settings
        </Text>
      </View>
    </View>
  );
};

export default HomeFooter;

const styles = StyleSheet.create({
  subContainer: {
    width: "92%",
    height: 48,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "#7a7a7a",
  },
  textStyle: {
    marginTop: 20,
    fontSize: 12,
    fontWeight: "500",
    color: "grey",
  },
  descriptionTextContainer: {
    marginLeft: 16,
    marginBottom: 15,
    marginTop: 40,
    maxWidth: 360,
  },
  descriptionTextStyle: {
    fontSize: 15,
    lineHeight: 22,
  },
});
