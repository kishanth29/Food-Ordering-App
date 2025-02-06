import React from "react";
import { StyleSheet, Text, View } from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import Ionicons from "react-native-vector-icons/Ionicons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Foundation from "react-native-vector-icons/Foundation";
import AntDesign from "react-native-vector-icons/AntDesign";

function ProfileDetails() {
  return (
    <View>
      <View style={[styles.container, { marginTop: 20 }]}>
        <Ionicons name="pricetag-sharp" size={18} />
        <Text style={styles.textStyle}>Promotions</Text>
      </View>
      <View style={[styles.container, { marginTop: 35 }]}>
        <Ionicons name="md-help-buoy-sharp" size={20} />
        <Text style={styles.textStyle}>Help</Text>
      </View>
      <View style={[styles.container, { marginTop: 35 }]}>
        <MaterialIcons name="stars" size={20} />
        <Text style={styles.textStyle}>Restaurant Rewards</Text>
      </View>
      <View style={[styles.container, { marginTop: 35 }]}>
        <FontAwesome5 name="users" size={18} />
        <View>
          <Text style={styles.textStyle}>Family</Text>
          <Text style={styles.descriptionTextStyle}>
            Manage a family profile
          </Text>
        </View>
      </View>
      <View style={[styles.container, { marginTop: 35 }]}>
        <Foundation name="shopping-bag" size={20} />
        <View>
          <Text style={styles.textStyle}>Business Preferences</Text>
          <Text style={styles.descriptionTextStyle}>
            Make work meals quicker and easier
          </Text>
        </View>
      </View>
      <View style={[styles.container, { marginTop: 35 }]}>
        <Ionicons name="md-gift-sharp" size={20} />
        <Text style={styles.textStyle}>Send a gift</Text>
      </View>
      <View style={[styles.container, { marginTop: 35 }]}>
        <FontAwesome5 name="user-plus" size={18} />
        <View>
          <Text style={styles.textStyle}>Invite friends</Text>
          <Text style={styles.descriptionTextStyle}>
            Get Rs.100 off your order
          </Text>
        </View>
      </View>
      <View style={[styles.container, { marginTop: 35 }]}>
        <MaterialCommunityIcons name="eye-remove" size={22} />
        <Text style={styles.textStyle}>Privacy</Text>
      </View>
      <View style={[styles.container, { marginTop: 35 }]}>
        <MaterialCommunityIcons name="shield-check" size={20} />
        <Text style={styles.textStyle}>COVID-19 Safety Center</Text>
      </View>
      <View style={[styles.container, { marginTop: 35 }]}>
        <FontAwesome5 name="shopping-bag" size={18} />
        <Text style={styles.textStyle}>Earn by driving or delivering</Text>
      </View>
      <View style={[styles.container, { marginTop: 35 }]}>
        <AntDesign name="exclamationcircle" size={18} />
        <Text style={styles.textStyle}>About</Text>
      </View>
      <Text style={styles.versionTextStyle}>v6.150.10001</Text>
    </View>
  );
}

export default ProfileDetails;

const styles = StyleSheet.create({
  container: {
    marginLeft: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  textStyle: {
    marginLeft: 20,
    fontSize: 16,
    fontWeight: "500",
  },
  descriptionTextStyle: {
    marginLeft: 20,
    fontSize: 13,
    color: "grey",
  },
  versionTextStyle: {
    marginLeft: 20,
    marginBottom: 15,
    marginTop: 30,
    fontSize: 14,
    color: "grey",
  },
});
