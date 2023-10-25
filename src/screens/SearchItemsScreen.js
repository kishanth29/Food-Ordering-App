import React from "react";
import { View, Text, Pressable, ScrollView, Image, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Feather from "react-native-vector-icons/Feather";
import BottomTabs from "../components/BottomTabs";
import CategoriesResturants from "../components/CategoriesResturants";

const items = {
    breakfast: require("../../assets/categoriesimages/breakfast.png"),
    coffee: require("../../assets/categoriesimages/coffee.png"),
    soup: require("../../assets/categoriesimages/soup.png"),
    mexican: require("../../assets/categoriesimages/taco.png"),
    pizza: require("../../assets/categoriesimages/pizza.png"),
    chinese: require("../../assets/categoriesimages/chinese.png"),
    sandwich: require("../../assets/categoriesimages/sandwich.png"),
    bakery: require("../../assets/categoriesimages/bakery.png"),
    vegan: require("../../assets/categoriesimages/vegan.png"),
    wings: require("../../assets/categoriesimages/wings.png"),
    bbq: require("../../assets/categoriesimages/bbq.png"),
    doughnut: require("../../assets/categoriesimages/doughnut.png"),
    sushi: require("../../assets/categoriesimages/sushi.png"),
    indian: require("../../assets/categoriesimages/indian.png"),
    burger: require("../../assets/categoriesimages/burger.png"),
    asian: require("../../assets/categoriesimages/asian.png"),
    thai: require("../../assets/categoriesimages/thai.png"),
    pasta: require("../../assets/categoriesimages/pasta.png"),
    seafood: require("../../assets/categoriesimages/seafood.png"),
    juice: require("../../assets/categoriesimages/juice.png"),
    chicken: require("../../assets/categoriesimages/chicken.png"),
    comfortfood: require("../../assets/categoriesimages/comfortfood.png"),
    bubbletea: require("../../assets/categoriesimages/bubbletea.png"),
    ramen: require("../../assets/categoriesimages/ramen.png"),
    retail: require("../../assets/categoriesimages/retail.png"),
    italian: require("../../assets/categoriesimages/italian.png"),
    dessert: require("../../assets/categoriesimages/dessert.png"),
    grocery: require("../../assets/categoriesimages/grocery.png"),
    japanese: require("../../assets/categoriesimages/japanese.png"),
    american: require("../../assets/categoriesimages/american.png"),
    flower: require("../../assets/categoriesimages/flower.png"),
    vietnamese: require("../../assets/categoriesimages/vietnamese.png"),
    salad: require("../../assets/categoriesimages/salad.png"),
    southernfood: require("../../assets/categoriesimages/southernfood.png"),
    baby: require("../../assets/categoriesimages/baby.png"),
    soulfood: require("../../assets/categoriesimages/soulfood.png"),
    fish: require("../../assets/categoriesimages/fish.png"),
    roll: require("../../assets/categoriesimages/roll.png"),
    african: require("../../assets/categoriesimages/african.png"),
    vegetarian: require("../../assets/categoriesimages/vegetarian.png"),
    glutenfree: require("../../assets/categoriesimages/glutenfree.png"),
    halal: require("../../assets/categoriesimages/chicken.png"),
    cupcake: require("../../assets/categoriesimages/cupcake.png"),
    everydayessential: require("../../assets/categoriesimages/everydayessential.png"),
    icecream: require("../../assets/categoriesimages/icecream.png"),
    healthy: require("../../assets/categoriesimages/healthy.png"),
    mediterranean: require("../../assets/categoriesimages/mediterranean.png"),
    korean: require("../../assets/categoriesimages/korean.png"),
    pharmacy: require("../../assets/categoriesimages/pharmacy.png"),
    alcohol: require("../../assets/categoriesimages/alcohol.png"),
    burritos: require("../../assets/categoriesimages/burritos.png"),
    steak: require("../../assets/categoriesimages/steak.png"),
    middleeastern: require("../../assets/categoriesimages/middleeastern.png"),
    barfood: require("../../assets/categoriesimages/wings.png"),
    streetfood: require("../../assets/categoriesimages/streetfood.png"),
    pastry: require("../../assets/categoriesimages/pastry.png"),
    frenchfries: require("../../assets/categoriesimages/frenchfries.png"),
    biryani: require("../../assets/categoriesimages/biryani.png"),
    falafel: require("../../assets/categoriesimages/falafel.png"),
    cocktail: require("../../assets/categoriesimages/cocktail.png"),
    southasian: require("../../assets/categoriesimages/southasian.png"),
    turkish: require("../../assets/categoriesimages/turkish.png")
};

function SearchItemsScreen({ route }) {
    const navigation = useNavigation();
    const { name, title } = route.params;
    return (
        <>
            <View>
                <View style={styles.container}>
                    <Pressable style={styles.backButtonContainer} onPress={() => navigation.goBack()}>
                        <Feather name="arrow-left" size={25} />
                    </Pressable>
                    <Text style={styles.nameTextStyle}>{name}</Text>
                    <View style={styles.imageContainer}>
                        <Image source={items[title]} style={styles.imageStyle} />
                    </View>
                </View>
            </View>
            <ScrollView showsVerticalScrollIndicator={false} style={styles.resultsContainer}>
                <Text style={styles.resultsTextStyle}>100+ Results</Text>
                <CategoriesResturants cities="Madison" discount={false} />
                <CategoriesResturants cities="Dallas" discount={false} />
                <CategoriesResturants cities="Omaha" discount={false} />
                <CategoriesResturants cities="Miami" discount={false} />
                <CategoriesResturants cities="Raleigh" discount={false} />
                <CategoriesResturants cities="Mesa" discount={false} closed={true} />
            </ScrollView>
            <View style={styles.bottomContainer}>
                <BottomTabs />
            </View>
        </>
    );
}

export default SearchItemsScreen;

const styles = StyleSheet.create({
    container: {
        height: 165,
        backgroundColor: "#fff2f4"
    },
    backButtonContainer: {
        position: "absolute",
        marginTop: 50,
        marginLeft: 15
    },
    nameTextStyle: {
        position: "absolute",
        marginTop: 100,
        marginLeft: 15,
        fontSize: 28,
        fontWeight: "600"
    },
    imageContainer: {
        marginTop: "auto",
        marginLeft: "auto",
        marginBottom: 15,
        marginRight: 10
    },
    imageStyle: {
        width: 70,
        height: 70,
        resizeMode: "contain"
    },
    resultsContainer: {
        marginTop: 10,
        marginLeft: 12
    },
    resultsTextStyle: {
        marginTop: 5,
        marginBottom: 25,
        fontSize: 20,
        fontWeight: "600"
    },
    bottomContainer: {
        marginTop: "auto",
        backgroundColor: "white",
        borderTopColor: "#eee",
        borderTopWidth: 1
    }
});