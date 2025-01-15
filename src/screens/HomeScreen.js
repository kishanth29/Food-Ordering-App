import React, { useState, useEffect } from "react";
import { View, Text, ScrollView, FlatList, StyleSheet } from "react-native";
import { MaterialIcons } from "react-native-vector-icons";
import SearchBar from "../components/SearchBar";
import CategoriesItems from "../components/CategoriesItems";
import HeaderTabs from "../components/HeaderTabs";
import ResturantDetails from "../components/ResturantDetails";
import BottomTabs from "../components/BottomTabs";
import ResturantDetail from "../components/ResturantDetail";
import HomeItems from "../components/HomeItems";
import HomeGroceries from "../components/HomeGroceries";
import HomeFooter from "../components/HomeFooter";

const chocolates = [
  {
    uri: "https://m.media-amazon.com/images/I/71TXktmamcL._AC_UF894,1000_QL80_.jpg",
    text: "Hershey's Candy, Individually Wrapped, Bag Milk Chocolate Almond - 10.1 oz",
    price: "5.76",
  },
  {
    uri: "https://m.media-amazon.com/images/I/71G7nkmaPeL.jpg",
    text: "Hershey's Truffles Candy, Individually Wrapped, Share Pack Milk Chocolate - 7.7 oz",
    price: "5.78",
  },
  {
    uri: "https://i5.walmartimages.com/asr/697bdf06-b9e5-4b85-914c-9c31fac30064.befa4d58484ebbe75027172b993d2a76.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
    text: "Cadbury King Size Candy, Bar Milk Chocolate and Creamy Caramel - 2.7 oz",
    price: "2.92",
  },
  {
    uri: "https://m.media-amazon.com/images/I/613PQ38azAL._SL1500_.jpg",
    text: "Hershey's Candy, Gaint Bar Milk Chocolate, Almonds and Toffe - 6.8 oz",
    price: "4.71",
  },
  {
    uri: "https://m.media-amazon.com/images/I/81q6CF1JG4L._SL1500_.jpg",
    text: "Oreo Golden Sandwich Cookies Vanilla - 14.3 oz",
    price: "1.99",
  },
  {
    uri: "https://i5.walmartimages.com/asr/4141ec66-2f37-4a12-88d4-9294577a463e.8652edfb98830dae2db064692804685d.jpeg",
    text: "Twix Caramel Full Size Chocolate Cookie Bar - 1.79 oz",
    price: "1.46",
  },
  {
    uri: "https://m.media-amazon.com/images/I/719WTnG5hYL._AC_UF1000,1000_QL80_.jpg",
    text: "Kit Kat Dark Chocolate Wafer Candy, Individually Wrapped, Bar - 1.5 oz",
    price: "2.31",
  },
  {
    uri: "https://m.media-amazon.com/images/I/81ZAB-ZboPL._AC_UF1000,1000_QL80_.jpg",
    text: "Oreo Cookies - 5.2 oz",
    price: "1.99",
  },
  {
    uri: "https://m.media-amazon.com/images/I/71PnZwaKYLL.jpg",
    text: "Cadbury Rock The Road, Candy Bar - 3.5 oz",
    price: "2.79",
  },
  {
    uri: "https://m.media-amazon.com/images/I/51OjIGq7-wL._AC_UF1000,1000_QL80_.jpg",
    text: "Snickers Chocolate Candy Bars - 1.86 oz",
    price: "2.90",
  },
  {
    uri: "https://m.media-amazon.com/images/I/51el9GETEZL._AC_.jpg",
    text: "M&M's Crunchy Cookie Milk Chocolate Single Size Candy - 1.35 oz",
    price: "2.08",
  },
  {
    uri: "https://m.media-amazon.com/images/I/711FIYxVRXL._AC_UF1000,1000_QL80_.jpg",
    text: "Hershey's Organic Dark Chocolate Miniatures Pouch - 4.2 oz",
    price: "3.89",
  },
  {
    uri: "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T2/images/I/71gu35B3h1L.jpg",
    text: "Kit Kat Extra Large Candy, Individually Wrapped, Bar - 4.5 oz",
    price: "3.17",
  },
  {
    uri: "https://m.media-amazon.com/images/I/7190VJZZuyL._SL1000_.jpg",
    text: "Ferrero Rocher Candy Collection - 4.6 oz",
    price: "6.60",
  },
];
const drinks = [
  {
    uri: "https://m.media-amazon.com/images/I/71DVyVo8UOL._SL1500_.jpg",
    text: "Gatorade Perform 02 Thirst Quencher Lemon Lime - 24.0 fl oz",
    price: "6.60",
  },
  {
    uri: "https://m.media-amazon.com/images/I/510OGH6WzUL._SX522_.jpg",
    text: "Red Bull Energy Drink - 16oz",
    price: "5.76",
  },
  {
    uri: "https://m.media-amazon.com/images/I/815GOObjsDL._SL1500_.jpg",
    text: "Monster Ultra Gold - 16oz",
    price: "6.92",
  },
  {
    uri: "https://m.media-amazon.com/images/I/81XzSWuF91L._SY879_.jpg",
    text: "Minute Maid 100% Apple Juice - 12.0 fl oz",
    price: "3.13",
  },
  {
    uri: "https://m.media-amazon.com/images/I/71aNZfwe0eL._SL1204_.jpg",
    text: "Gatorade Perform 02 Thirst Quencher Blue Bolt - 24.0 fl oz",
    price: "6.60",
  },
  {
    uri: "https://m.media-amazon.com/images/I/71re-aC6CGL._AC_UF1000,1000_QL80_.jpg",
    text: "Simply Lemonade Juice Drink, All Natural Lemonade - 11.5 fl oz",
    price: "3.56",
  },
  {
    uri: "https://m.media-amazon.com/images/I/71GuB+HzRaL.jpg",
    text: "Gatorade Perform 02 Thirst Quencher Apple Punch - 24.0 fl oz",
    price: "6.60",
  },
  {
    uri: "https://m.media-amazon.com/images/I/41LlP8aTKeL.jpg",
    text: "Snapple Juice Drink Kiwi Strawberry - 16.0 oz",
    price: "5.67",
  },
  {
    uri: "https://m.media-amazon.com/images/I/81U0BX+EolL._AC_UF894,1000_QL80_.jpg",
    text: "Ocean Spray Juice Cranberry Apple - 64.0 oz",
    price: "4.99",
  },
  {
    uri: "https://m.media-amazon.com/images/I/417obEEXaWL._AC_UF894,1000_QL80_.jpg",
    text: "Arizona Juice Mango - 23.0 oz",
    price: "3.23",
  },
  {
    uri: "https://m.media-amazon.com/images/I/31uy3cpRirL.jpg",
    text: "Canada Dry Ginger Ale - 16.9 fl oz",
    price: "3.56",
  },
  {
    uri: "https://images-na.ssl-images-amazon.com/images/I/31BUOP-niYL._AC_UL900_SR615,900_.jpg",
    text: "Jarritos Soda Fruit Punch - 12.5 oz",
    price: "3.76",
  },
  {
    uri: "https://m.media-amazon.com/images/I/619-gjZ1RMS._SL1400_.jpg",
    text: "Sprite Soft Drink, Lemon-Lime Lemon Lime - 20.0 fl oz",
    price: "3.13",
  },
  {
    uri: "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T2/images/I/81VndwEreuL.jpg",
    text: "Gatorade Electrolyte Beverage Orange Flavour - 20.0 fl oz",
    price: "6.60",
  },
  {
    uri: "https://m.media-amazon.com/images/I/81CyyXk6zfS._AC_UF894,1000_QL80_.jpg",
    text: "Hawaiian Punch Fruit Juicy Red Fruit Juicy Red - 32.0 fl oz",
    price: "4.18",
  },
  {
    uri: "https://m.media-amazon.com/images/I/81SkiYK6+ZL._AC_UF894,1000_QL80_.jpg",
    text: "Dr Pepper - 20oz",
    price: "3.78",
  },
  {
    uri: "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T2/images/I/41ea2QENAVL._AC_UF894,1000_QL80_.jpg",
    text: "Monster Low Carb Energy - 16.0 oz",
    price: "6.92",
  },
  {
    uri: "https://m.media-amazon.com/images/I/81AsFIdamEL._SY550_.jpg",
    text: "Red Bull Energy Drink Watermelon Flavour - 1.0 ea",
    price: "5.76",
  },
  {
    uri: "https://m.media-amazon.com/images/I/71YBmiSj-cL._AC_CR0%2C0%2C0%2C0_SX375_.jpg",
    text: "Coca Cola Soft Drink - 16oz",
    price: "3.13",
  },
];
const desserts = [
  {
    uri: "https://tb-static.uber.com/prod/image-proc/processed_images/29de8f16eb8e07ba34c2a900d7abd6ac/5954bcb006b10dbfd0bc160f6370faf3.jpeg",
    text: "Blue Bell Mint Chocolate Chip Ice Cream 16oz",
    price: "4.29",
  },
  {
    uri: "https://tb-static.uber.com/prod/image-proc/processed_images/666ed6199ed85f41857132e2fc3c1a3e/5954bcb006b10dbfd0bc160f6370faf3.jpeg",
    text: "Serendipity Selena Gomez Cookies & Cream Remix Pint",
    price: "6.99",
  },
  {
    uri: "https://tb-static.uber.com/prod/image-proc/processed_images/8f638bfabe073c7606c6d891eac4319c/5954bcb006b10dbfd0bc160f6370faf3.jpeg",
    text: "Ben & Jerry's Netflix & Chill'd Ice Cream 16oz",
    price: "6.99",
  },
  {
    uri: "https://tb-static.uber.com/prod/image-proc/processed_images/cd9ef461a6e49679a035e31cc5ff7a47/5954bcb006b10dbfd0bc160f6370faf3.jpeg",
    text: "Blue Bell Cookies n' Cream Ice Cream 16oz",
    price: "4.29",
  },
  {
    uri: "https://tb-static.uber.com/prod/image-proc/processed_images/fd1508c24c68c3fa11b00fd9b4f0393c/5954bcb006b10dbfd0bc160f6370faf3.jpeg",
    text: "Blue Bunny Bunny Tracks Load'd Bars 4ct 13.6oz",
    price: "7.99",
  },
  {
    uri: "http://cdn.shopify.com/s/files/1/0626/4953/2601/products/36798_US_IC_Milk---Cookies_473ml_FOP-720x720-f55dd41d-eb51-4344-b6f4-9334932d324d.jpg?v=1677611108",
    text: "Ben & Jerry's Milk Cookies Ice Cream 16oz",
    price: "6.99",
  },
  {
    uri: "https://www.simpleskincare.com/sk-eu/content/dam/brands/talenti/united_states_ofamerica/56452218-caramel-cooke-crunch-pint-shot.png",
    text: "Talenti Gelato Caramel Cookie Crunch 16oz",
    price: "7.99",
  },
  {
    uri: "https://tb-static.uber.com/prod/image-proc/processed_images/bbb3f16e418fa86ea5f74c2795d26736/5954bcb006b10dbfd0bc160f6370faf3.jpeg",
    text: "Ben & Jerry's Chubby Hubby Ice Cream 16oz",
    price: "6.99",
  },
  {
    uri: "https://d2aam04nmhpdf8.cloudfront.net/images/images/000/016/045/xlarge/BlueBell_CookieTwoStep.jpg",
    text: "Blue Bell Cookie Two Step Ice Cream 16oz",
    price: "4.29",
  },
  {
    uri: "https://target.scene7.com/is/image/Target/GUEST_ac3f0098-6662-40d2-949d-1a195f9897c9?wid=488&hei=488&fmt=pjpeg",
    text: "Good Humor Strawberry Shortcake Frozen Dessert Bars 6pk 18oz",
    price: "8.49",
  },
  {
    uri: "https://www.ubuy.co.in/productimg/?image=aHR0cHM6Ly9pbWFnZXMtY2RuLnVidXkuY28uaW4vNjM2NzIyNWYzMjZkODAxMDE0NGQ1M2I3LWJlbi1qZXJyeS0zOS1zLWhhbGYtYmFrZWQuanBn.jpg",
    text: "Ben & Jerry's Half Baked Ice Cream 16oz",
    price: "6.99",
  },
  {
    uri: "https://images-cdn.ubuy.co.in/637086553a50be11262dc3b3-ben-jerry-39-s-strawberry.jpg",
    text: "Ben & Jerry's Strawberry Cheesecake Ice Cream 16oz",
    price: "6.99",
  },
  {
    uri: "https://tb-static.uber.com/prod/image-proc/processed_images/8d61055db83ee221ac2d4d2828cdab7f/5954bcb006b10dbfd0bc160f6370faf3.jpeg",
    text: "Blue Bell Buttered Pecan Ice Cream 16oz",
    price: "4.29",
  },
  {
    uri: "https://images-cdn.ubuy.co.in/633ad51218948933bf65c1ab-ben-amp-jerry-x27-s-non-dairy.jpg",
    text: "Ben & Jerry's Non-Dairy P.B. & Cookies Pint Frozen Desserts 16oz",
    price: "6.99",
  },
];
const snacks = [
  {
    uri: "https://m.media-amazon.com/images/I/91Fn3x8-uPL._SL1500_.jpg",
    text: "Doritos Dinamita Chile Limon Dinamita Chile Limon - 10.14 oz",
    price: "7.54",
  },
  {
    uri: "https://m.media-amazon.com/images/I/91IWdvNEaSL.jpg",
    text: "Cheetos Cheese Flavoured Snacks XXtra Flamin' Hot Crunchy - 8.5 oz",
    price: "6.81",
  },
  {
    uri: "https://m.media-amazon.com/images/I/713ArqOfhkL.jpg",
    text: "Cheetos Crunchy Cheese Flavoured Snacks Xxtra Flamin' Hot - 3.25 oz",
    price: "3.31",
  },
  {
    uri: "https://m.media-amazon.com/images/I/61hSAZDmHnL._SL1500_.jpg",
    text: "Pringles Potato Crisps Chips Sour Cream and Onion - 5.5 oz",
    price: "3.13",
  },
  {
    uri: "https://m.media-amazon.com/images/I/91-XnfG4GWL.jpg",
    text: "Chester's Fries Corn And Potato Snacks Flamin' Hot - 3.63 oz",
    price: "3.13",
  },
  {
    uri: "https://m.media-amazon.com/images/I/815DTf8h1qL.jpg",
    text: "Cheetos Crunchy Cheese Flavoured Snacks Flamin' Hot Limon - 8.5 oz",
    price: "6.81",
  },
  {
    uri: "https://m.media-amazon.com/images/I/81IehzD87nL._SL1500_.jpg",
    text: "Cheetos Flamin' Hot Puffs - 8.5 oz",
    price: "6.81",
  },
  {
    uri: "https://m.media-amazon.com/images/I/81c0JUj0TYS._AC_UF1000,1000_QL80_.jpg",
    text: "Cheetos Baked Cheese Flavoured Snacks Flamin' Hot - 2.75 oz",
    price: "3.13",
  },
  {
    uri: "https://m.media-amazon.com/images/I/81P+2BOhgtL._SX522_.jpg",
    text: "Doritos Flamin Hot Nacho Flamin Hot Nacho - 9.25 oz",
    price: "7.54",
  },
  {
    uri: "https://m.media-amazon.com/images/I/51fjBlWYxlL.jpg",
    text: "Doritos Flavoured Tortilla Chips Flamin' Hot Limon - 2.75 oz",
    price: "3.13",
  },
  {
    uri: "https://m.media-amazon.com/images/I/71eRYwNWhGL.jpg",
    text: "Takis Fuego Rolled Tortilla Chips Hot Chili Pepper & Lime - 4.0 oz",
    price: "3.13",
  },
  {
    uri: "https://m.media-amazon.com/images/I/91gLTYhyjTL.jpg",
    text: "Lays's Potato Chips Limon - 7.75 oz",
    price: "6.49",
  },
  {
    uri: "https://m.media-amazon.com/images/I/71644-2+ZTL._SL1500_.jpg",
    text: "Cheetos Puffs - 3.0 oz",
    price: "3.13",
  },
  {
    uri: "https://m.media-amazon.com/images/I/51rD068D9XL._AC_.jpg",
    text: "Popcorners Snacks White Cheddar - 7.0 oz",
    price: "5.55",
  },
  {
    uri: "https://m.media-amazon.com/images/I/81G7zl-qZ0L.jpg",
    text: "Ruffles Potato Chips Queso - 2.5 oz",
    price: "2.61",
  },
  {
    uri: "https://m.media-amazon.com/images/I/71s9LFkEDqL._AC_UF894,1000_QL80_.jpg",
    text: "SkinnyPop Popcorn Cheddar - 4.4 oz",
    price: "5.23",
  },
];
const groceries = [
  {
    uri: "https://assets.stickpng.com/images/58429094a6515b1e0ad75abd.png",
    image:
      "https://d1ralsognjng37.cloudfront.net/0e9dfbc2-0d7c-40ce-a9b4-f314ec9e59bc.jpeg",
    text: "7-Eleven",
    address: "201 W Commerce St",
    rating: "4.6",
    reviews: "40",
    categories: "Convenience",
    color: "#e2ffe2",
    time: "15-30 min",
    selectedText: "Save on selected items",
  },
  {
    uri: "https://www.pngitem.com/pimgs/m/469-4690536_cvs-logo-cvs-health-hd-png-download.png",
    image:
      "https://tb-static.uber.com/prod/image-proc/processed_images/3be223c4dcb03d147789c3c66a94f88b/d24a30ada2fef6c54cef8739d94823b0.jpeg",
    text: "CVS",
    address: "300 E Commerce St",
    rating: "5.0",
    reviews: "25",
    categories: "Everyday essentials",
    color: "#fff1f3",
    time: "15-30 min",
    selectedText: "Save on selected items",
  },
  {
    uri: "https://download.logo.wine/logo/Costco/Costco-Logo.wine.png",
    image:
      "https://tb-static.uber.com/prod/image-proc/processed_images/ab9f32e3278b7b3e1d79e0bcef944aa9/3ac2b39ad528f8c8c5dc77c59abb683d.jpeg",
    text: "Costco",
    address: "NW San Antonio",
    rating: "4.9",
    reviews: "200+",
    categories: "Grocery",
    color: "#e2e2e2",
    time: "Available in 56 min",
    selectedText: "Offers available",
  },
  {
    uri: "https://seeklogo.com/images/G/gopuff-logo-A6FA404BA6-seeklogo.com.png",
    image:
      "https://tb-static.uber.com/prod/image-proc/processed_images/b409ed455208de8b670caa1a0db76410/719c6bd2757b08684c0faae44d43159d.jpeg",
    text: "Gopuff",
    address: "",
    rating: "4.8",
    reviews: "200+",
    categories: "Snacks",
    color: "#ecf7fc",
    time: "30-50 min",
    selectedText: "",
  },
  {
    uri: "https://www.walgreens.com/images/adaptive/sp/w-logo.png",
    image:
      "https://tb-static.uber.com/prod/image-proc/processed_images/7c8de9248810ea97ae0d0e6b60927521/16bb0a3ab8ea98cfe8906135767f7bf4.jpeg",
    text: "Walgreens",
    address: "401 W Cypress St",
    rating: "5.0",
    reviews: "40",
    categories: "Pharmacy",
    color: "#ffffd8",
    time: "25-40 min",
    selectedText: "Save on selected items",
  },
  {
    uri: "https://www.pngitem.com/pimgs/m/360-3608467_total-wine-more-total-wine-logo-png-transparent.png",
    image:
      "https://d1ralsognjng37.cloudfront.net/6ca1894d-2caf-4a07-b254-cc92407797bf.jpeg",
    text: "Total Wine",
    address: "125 NW Loop 410 Ste 260",
    rating: "5.0",
    reviews: "134",
    categories: "Off-licences",
    color: "#fff6ff",
    time: "Available at 11:00 am",
    selectedText: "",
  },
];

const YELP_API_KEY =
  "9MpCpziTpWpNEpw1mQszdVERxaJ4qNwWrZXhh3SRtEISnskcjFx1o3fGjn7xDa5ZQleKRaDfTvoULKy0Wen6THwhgSrByNwJAvZspAxyrg-WvH5Kj5_jy8rQZ_erY3Yx";

function HomeScreen() {
  const [activeTab, setActiveTab] = useState("Delivery");
  const [city, setCity] = useState("Colombo");
  const [cities1, setCities1] = useState("Colombo");
  const [cities2, setCities2] = useState("Kandy");
  const [resturantData1, setResturantData1] = useState([]);
  const [resturantData2, setResturantData2] = useState([]);
  const [homeresturant, setHomeresturant] = useState(groceries[0]);

  const getResturantsFromYelp = (setResturantData, cities) => {
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
    getResturantsFromYelp(setResturantData1, cities1);
  }, [cities1, activeTab]);
  useEffect(() => {
    getResturantsFromYelp(setResturantData2, cities2);
  }, [cities2, activeTab]);
  return (
    <>
      <View style={styles.headerContainer}>
        <View style={{ marginLeft: 15 }}>
          <Text style={{ fontWeight: "400" }}>Delivery now</Text>
          <View style={styles.headerSubContainer}>
            <Text style={{ fontWeight: "500" }}>location</Text>
            <MaterialIcons name="keyboard-arrow-down" size={25} />
          </View>
        </View>
        {/* <View style={{ marginRight: 15 }}>
          <HeaderTabs activeTab={activeTab} setActiveTab={setActiveTab} />
        </View> */}
      </View>
      <ScrollView vertical showsVerticalScrollIndicator={false}>
        <SearchBar
          cityHandler={setCity}
          backgroundColor={"#eee"}
          marginTop={0}
          marginRight={0}
          left={0}
          width={370}
          alignSelf="center"
          height={50}
          placeHolder={"Food, groceries, drinks, etc"}
        />
        <CategoriesItems />
        <View style={[styles.contentContainer, { marginTop: 12 }]}>
          <Text style={[styles.textStyle, { marginTop: 10 }]}>
            Get groceries and more
          </Text>
          <View style={{ marginRight: 15 }}>
            <FlatList
              horizontal
              showsHorizontalScrollIndicator={false}
              data={groceries}
              renderItem={({ item }) => <HomeGroceries groceriesData={item} />}
            />
          </View>
        </View>
        <View style={[styles.contentContainer, { marginTop: 18 }]}>
          <ResturantDetails cities="Savannah" discount={false} />
        </View>
        <View style={styles.contentContainer}>
          <View style={{ flexDirection: "row" }}>
            <Text style={[styles.textStyle, { marginTop: 15 }]}>
              Family favourites
            </Text>
            <Text style={styles.seeAllTextStyle}>See all</Text>
          </View>
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={resturantData1}
            renderItem={({ item }) => (
              <ResturantDetail
                resturantData={item}
                isList="true"
                discount={false}
                marginTop={10}
                left={0}
                top={8}
              />
            )}
          />
        </View>
        <View style={styles.popularResturantsDataContainer}>
          <View style={{ flexDirection: "row" }}>
            <Text style={[styles.textStyle, { marginTop: 15 }]}>
              Popular near you
            </Text>
            <Text style={[styles.seeAllTextStyle, { fontWeight: "500" }]}>
              See all
            </Text>
          </View>
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={resturantData2}
            renderItem={({ item }) => (
              <ResturantDetail
                resturantData={item}
                isList="true"
                discount={false}
                marginTop={10}
                left={0}
                top={8}
              />
            )}
          />
        </View>
        <View style={styles.contentContainer}>
          <Text style={[styles.textStyle, { marginTop: 15 }]}>
            Refreshing drinks
          </Text>
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={drinks}
            renderItem={({ item }) => (
              <HomeItems
                items={item}
                marginBottom={15}
                restName={homeresturant.text}
                image={homeresturant.image}
                address={homeresturant.address}
                notfood={true}
                groceries={true}
              />
            )}
          />
        </View>
        <View style={{ marginTop: 8 }}>
          <Text style={styles.textStyle}>Frozen desserts</Text>
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={desserts}
            renderItem={({ item }) => (
              <HomeItems
                items={item}
                marginBottom={15}
                restName={homeresturant.text}
                image={homeresturant.image}
                address={homeresturant.address}
                notfood={true}
                groceries={true}
              />
            )}
          />
        </View>
        <View style={{ marginTop: 8 }}>
          <Text style={styles.textStyle}>Chocolates</Text>
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={chocolates}
            renderItem={({ item }) => (
              <HomeItems
                items={item}
                marginBottom={15}
                restName={homeresturant.text}
                image={homeresturant.image}
                address={homeresturant.address}
                notfood={true}
                groceries={true}
              />
            )}
          />
        </View>
        <View style={{ marginTop: 8 }}>
          <Text style={styles.textStyle}>Snacks</Text>
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={snacks}
            renderItem={({ item }) => (
              <HomeItems
                items={item}
                marginBottom={15}
                restName={homeresturant.text}
                image={homeresturant.image}
                address={homeresturant.address}
                notfood={true}
                groceries={true}
              />
            )}
          />
        </View>
        <View style={[styles.contentContainer, { marginTop: 10 }]}>
          <ResturantDetails cities="Austin" discount={false} />
        </View>
        <View>
          <ResturantDetails cities="Raleigh" discount={false} />
        </View>
        <View>
          <ResturantDetails cities="Atlanta" discount={false} closed={true} />
        </View>
        <View>
          <HomeFooter />
        </View>
      </ScrollView>
      <View style={styles.bottomContainer}>
        <BottomTabs />
      </View>
    </>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  headerContainer: {
    marginTop: 50,
    marginBottom: 5,
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "white",
  },
  headerSubContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  contentContainer: {
    borderTopColor: "#f4f4f4",
    borderTopWidth: 8,
  },
  textStyle: {
    marginLeft: 15,
    fontSize: 24,
    fontWeight: "700",
  },
  popularResturantsDataContainer: {
    marginBottom: 15,
    marginTop: 15,
  },
  seeAllTextStyle: {
    marginLeft: "auto",
    marginRight: 15,
    marginTop: 25,
  },
  bottomContainer: {
    borderTopColor: "#eee",
    backgroundColor: "white",
    borderTopWidth: 1,
  },
});
