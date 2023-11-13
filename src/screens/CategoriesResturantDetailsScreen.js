import React, { useState } from "react";
import { Text, View, Image, ScrollView, StatusBar, Pressable, FlatList, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";
import Ionicons from "react-native-vector-icons/Ionicons";
import HomeItems from "../components/HomeItems";
import SearchBar from "../components/SearchBar";

const chocolates = [
    {
        uri: "https://m.media-amazon.com/images/I/71TXktmamcL._AC_UF894,1000_QL80_.jpg",
        text: "Hershey's Candy, Individually Wrapped, Bag Milk Chocolate Almond - 10.1 oz",
        price: "5.76"
    },
    {
        uri: "https://m.media-amazon.com/images/I/71G7nkmaPeL.jpg",
        text: "Hershey's Truffles Candy, Individually Wrapped, Share Pack Milk Chocolate - 7.7 oz",
        price: "5.78"
    },
    {
        uri: "https://i5.walmartimages.com/asr/697bdf06-b9e5-4b85-914c-9c31fac30064.befa4d58484ebbe75027172b993d2a76.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
        text: "Cadbury King Size Candy, Bar Milk Chocolate and Creamy Caramel - 2.7 oz",
        price: "2.92"
    },
    {
        uri: "https://m.media-amazon.com/images/I/613PQ38azAL._SL1500_.jpg",
        text: "Hershey's Candy, Gaint Bar Milk Chocolate, Almonds and Toffe - 6.8 oz",
        price: "4.71"
    },
    {
        uri: "https://m.media-amazon.com/images/I/81q6CF1JG4L._SL1500_.jpg",
        text: "Oreo Golden Sandwich Cookies Vanilla - 14.3 oz",
        price: "1.99"
    },
    {
        uri: "https://i5.walmartimages.com/asr/4141ec66-2f37-4a12-88d4-9294577a463e.8652edfb98830dae2db064692804685d.jpeg",
        text: "Twix Caramel Full Size Chocolate Cookie Bar - 1.79 oz",
        price: "1.46"
    },
    {
        uri: "https://m.media-amazon.com/images/I/719WTnG5hYL._AC_UF1000,1000_QL80_.jpg",
        text: "Kit Kat Dark Chocolate Wafer Candy, Individually Wrapped, Bar - 1.5 oz",
        price: "2.31"
    },
    {
        uri: "https://m.media-amazon.com/images/I/81ZAB-ZboPL._AC_UF1000,1000_QL80_.jpg",
        text: "Oreo Cookies - 5.2 oz",
        price: "1.99"
    },
    {
        uri: "https://m.media-amazon.com/images/I/71PnZwaKYLL.jpg",
        text: "Cadbury Rock The Road, Candy Bar - 3.5 oz",
        price: "2.79"
    },
    {
        uri: "https://m.media-amazon.com/images/I/51OjIGq7-wL._AC_UF1000,1000_QL80_.jpg",
        text: "Snickers Chocolate Candy Bars - 1.86 oz",
        price: "2.90"
    },
    {
        uri: "https://m.media-amazon.com/images/I/51el9GETEZL._AC_.jpg",
        text: "M&M's Crunchy Cookie Milk Chocolate Single Size Candy - 1.35 oz",
        price: "2.08"
    },
    {
        uri: "https://m.media-amazon.com/images/I/711FIYxVRXL._AC_UF1000,1000_QL80_.jpg",
        text: "Hershey's Organic Dark Chocolate Miniatures Pouch - 4.2 oz",
        price: "3.89"
    },
    {
        uri: "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T2/images/I/71gu35B3h1L.jpg",
        text: "Kit Kat Extra Large Candy, Individually Wrapped, Bar - 4.5 oz",
        price: "3.17"
    },
    {
        uri: "https://m.media-amazon.com/images/I/7190VJZZuyL._SL1000_.jpg",
        text: "Ferrero Rocher Candy Collection - 4.6 oz",
        price: "6.60"
    }
];
const drinks = [
    {
        uri: "https://m.media-amazon.com/images/I/71DVyVo8UOL._SL1500_.jpg",
        text: "Gatorade Perform 02 Thirst Quencher Lemon Lime - 24.0 fl oz",
        price: "6.60"
    },
    {
        uri: "https://m.media-amazon.com/images/I/510OGH6WzUL._SX522_.jpg",
        text: "Red Bull Energy Drink - 16oz",
        price: "5.76"
    },
    {
        uri: "https://m.media-amazon.com/images/I/815GOObjsDL._SL1500_.jpg",
        text: "Monster Ultra Gold - 16oz",
        price: "6.92"
    },
    {
        uri: "https://m.media-amazon.com/images/I/81XzSWuF91L._SY879_.jpg",
        text: "Minute Maid 100% Apple Juice - 12.0 fl oz",
        price: "3.13"
    },
    {
        uri: "https://m.media-amazon.com/images/I/71aNZfwe0eL._SL1204_.jpg",
        text: "Gatorade Perform 02 Thirst Quencher Blue Bolt - 24.0 fl oz",
        price: "6.60"
    },
    {
        uri: "https://m.media-amazon.com/images/I/71re-aC6CGL._AC_UF1000,1000_QL80_.jpg",
        text: "Simply Lemonade Juice Drink, All Natural Lemonade - 11.5 fl oz",
        price: "3.56"
    },
    {
        uri: "https://m.media-amazon.com/images/I/71GuB+HzRaL.jpg",
        text: "Gatorade Perform 02 Thirst Quencher Apple Punch - 24.0 fl oz",
        price: "6.60"
    },
    {
        uri: "https://m.media-amazon.com/images/I/41LlP8aTKeL.jpg",
        text: "Snapple Juice Drink Kiwi Strawberry - 16.0 oz",
        price: "5.67"
    },
    {
        uri: "https://m.media-amazon.com/images/I/81U0BX+EolL._AC_UF894,1000_QL80_.jpg",
        text: "Ocean Spray Juice Cranberry Apple - 64.0 oz",
        price: "4.99"
    },
    {
        uri: "https://m.media-amazon.com/images/I/417obEEXaWL._AC_UF894,1000_QL80_.jpg",
        text: "Arizona Juice Mango - 23.0 oz",
        price: "3.23"
    },
    {
        uri: "https://m.media-amazon.com/images/I/31uy3cpRirL.jpg",
        text: "Canada Dry Ginger Ale - 16.9 fl oz",
        price: "3.56"
    },
    {
        uri: "https://images-na.ssl-images-amazon.com/images/I/31BUOP-niYL._AC_UL900_SR615,900_.jpg",
        text: "Jarritos Soda Fruit Punch - 12.5 oz",
        price: "3.76"
    },
    {
        uri: "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T2/images/I/81VndwEreuL.jpg",
        text: "Gatorade Electrolyte Beverage Orange Flavour - 20.0 fl oz",
        price: "6.60"
    },
    {
        uri: "https://m.media-amazon.com/images/I/81CyyXk6zfS._AC_UF894,1000_QL80_.jpg",
        text: "Hawaiian Punch Fruit Juicy Red Fruit Juicy Red - 32.0 fl oz",
        price: "4.18"
    },
    {
        uri: "https://m.media-amazon.com/images/I/81SkiYK6+ZL._AC_UF894,1000_QL80_.jpg",
        text: "Dr Pepper - 20oz",
        price: "3.78"
    },
    {
        uri: "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T2/images/I/41ea2QENAVL._AC_UF894,1000_QL80_.jpg",
        text: "Monster Low Carb Energy - 16.0 oz",
        price: "6.92"
    },
    {
        uri: "https://m.media-amazon.com/images/I/81AsFIdamEL._SY550_.jpg",
        text: "Red Bull Energy Drink Watermelon Flavour - 1.0 ea",
        price: "5.76"
    },
    {
        uri: "https://m.media-amazon.com/images/I/71YBmiSj-cL._AC_CR0%2C0%2C0%2C0_SX375_.jpg",
        text: "Coca Cola Soft Drink - 16oz",
        price: "3.13"
    }
];
const alcohols = [
    {
        uri: "https://cdn.shopify.com/s/files/1/0099/0045/8042/products/dark_horse_pnoir_18_750-sw_large.jpg?v=1647477622",
        text: "Dark Horse Pinot Noir 750 ml",
        price: "8.49"
    },
    {
        uri: "https://usa.mionetto.com/uploads/4/product/prestige-prosecco-brut-2018-h824-3.png",
        text: "Mionetto Prestige Prosecco Treviso Brut 750ml 11% ABV",
        price: "16.98"
    },
    {
        uri: "https://pics.walgreens.com/prodimg/416817/450.jpg",
        text: "Barefoot Chardonnay White Wine 1.5L",
        price: "12.99"
    },
    {
        uri: "https://images.commerce7.com/deutsch-family-wine-spirits/images/original/jcell_rose_1x1-1670505457620.png",
        text: "Josh Cellars Rose 750 ml",
        price: "15.99"
    },
    {
        uri: "https://www.totalwine.com/dynamic/490x/media/sys_master/twmmedia/h4e/ha0/12343355998238.png",
        text: "Moet & Chandon Nectar Imperial Rose Champagne 750ml",
        price: "76.98"
    },
    {
        uri: "https://www.totalwine.com/dynamic/x490,sq/media/sys_master/twmmedia/h4c/h6a/12343357931550.png",
        text: "Black Box Pinot Grigio 3L Box",
        price: "21.99"
    },
    {
        uri: "https://www.totalwine.com/dynamic/x490,sq/media/sys_master/twmmedia/h35/h74/11374547238942.png",
        text: "Excelsior Sauvignon Blanc 750 ml",
        price: "7.99"
    },
    {
        uri: "https://media.liquormax.com/cvdza2kmqsdf15sg5ap0m/andre-brut-champagne-2048x.webp",
        text: "Andre Brut Sparkling Wine 750 ml",
        price: "9.99"
    },
    {
        uri: "http://cdn.shopify.com/s/files/1/0501/1845/9591/products/HW_RoseCan_BS_Front.png?v=1623961243",
        text: "House Wine Rose 375 ml Can",
        price: "5.99"
    },
    {
        uri: "https://cdn.shopify.com/s/files/1/1410/8098/products/Bota_Box_Pinot_Grigio.jpg?v=1606864049",
        text: "Bota Box Pinot Grigio 3 Litre Box 3L 12% ABV",
        price: "20.99"
    },
    {
        uri: "https://www.totalwine.com/dynamic/490x/media/sys_master/twmmedia/ha7/h65/17159081132062.png",
        text: "FitVine Pinot Grigio 750 ml",
        price: "16.48"
    },
    {
        uri: "https://cdn.shopify.com/s/files/1/0113/3314/0561/products/FitVineCabernetSauvignon2018c_29d4f72b-b0e0-4b1b-9746-df96786e5a3a_1024x.jpg?v=1625516714",
        text: "FitVine Cabernet Sauvignon 750 ml",
        price: "16.48"
    },
    {
        uri: "https://wineonlinedelivery.com/wp-content/uploads/2022/11/SGPF515292.jpg",
        text: "Fresh Vine Wine Pinot Noir 750 ml",
        price: "17.98"
    },
    {
        uri: "http://www.wespeakwine.com/Shared/Images/Product/14-Hands-Cabernet-Sauvignon-2018-750ML/14_hands_cab_bottle.jpg",
        text: "14 Hands Cabernet 750 ml",
        price: "14.99"
    },
    {
        uri: "https://dydza6t6xitx6.cloudfront.net/ci-settecieli-pinot-grigio-3df8d6c0e2f3e9ed.png",
        text: "Settecieli Pinot Grigio 750 ml",
        price: "10.99"
    },
    {
        uri: "https://theloadedkitchen.com/ami/wp-content/uploads/sites/3/2022/01/large_f7ccb622-1358-40be-8e50-40fa68eb395f.png",
        text: "La Marca Prosecco Sparkling Wine 750 ml 11% ABV",
        price: "20.99"
    },
    {
        uri: "https://soleratt.com/wp-content/uploads/2019/11/luc-belaire-luxe-rose-750ml.png",
        text: "Luc Belaire Luxe Rose 750 ml",
        price: "33.49"
    },
    {
        uri: "https://woodshedwinenspirits.com/wp-content/uploads/2021/07/CavitPinotGrigioWine.jpeg",
        text: "Cavit Pinot Grigio 1.5L",
        price: "14.99"
    },
    {
        uri: "https://theloadedkitchen.com/ami/wp-content/uploads/sites/3/2022/01/large_e4cc24db-6cd7-471a-bc6f-405abf7b55e5.png",
        text: "Martin Codax Albarino Spanish White Wine 750 ml",
        price: "14.99"
    }
];
const desserts = [
    {
        uri: "https://tb-static.uber.com/prod/image-proc/processed_images/cd9ef461a6e49679a035e31cc5ff7a47/5954bcb006b10dbfd0bc160f6370faf3.jpeg",
        text: "Blue Bell Cookies n' Cream Ice Cream 16oz",
        price: "4.29"
    },
    {
        uri: "https://tb-static.uber.com/prod/image-proc/processed_images/8f638bfabe073c7606c6d891eac4319c/5954bcb006b10dbfd0bc160f6370faf3.jpeg",
        text: "Ben & Jerry's Netflix & Chill'd Ice Cream 16oz",
        price: "6.99"
    },
    {
        uri: "https://tb-static.uber.com/prod/image-proc/processed_images/666ed6199ed85f41857132e2fc3c1a3e/5954bcb006b10dbfd0bc160f6370faf3.jpeg",
        text: "Serendipity Selena Gomez Cookies & Cream Remix Pint",
        price: "6.99"
    },
    {
        uri: "https://tb-static.uber.com/prod/image-proc/processed_images/fd1508c24c68c3fa11b00fd9b4f0393c/5954bcb006b10dbfd0bc160f6370faf3.jpeg",
        text: "Blue Bunny Bunny Tracks Load'd Bars 4ct 13.6oz",
        price: "7.99"
    },
    {
        uri: "http://cdn.shopify.com/s/files/1/0626/4953/2601/products/36798_US_IC_Milk---Cookies_473ml_FOP-720x720-f55dd41d-eb51-4344-b6f4-9334932d324d.jpg?v=1677611108",
        text: "Ben & Jerry's Milk Cookies Ice Cream 16oz",
        price: "6.99"
    },
    {
        uri: "https://tb-static.uber.com/prod/image-proc/processed_images/29de8f16eb8e07ba34c2a900d7abd6ac/5954bcb006b10dbfd0bc160f6370faf3.jpeg",
        text: "Blue Bell Mint Chocolate Chip Ice Cream 16oz",
        price: "4.29"
    },
    {
        uri: "https://www.simpleskincare.com/sk-eu/content/dam/brands/talenti/united_states_ofamerica/56452218-caramel-cooke-crunch-pint-shot.png",
        text: "Talenti Gelato Caramel Cookie Crunch 16oz",
        price: "7.99"
    },
    {
        uri: "https://tb-static.uber.com/prod/image-proc/processed_images/bbb3f16e418fa86ea5f74c2795d26736/5954bcb006b10dbfd0bc160f6370faf3.jpeg",
        text: "Ben & Jerry's Chubby Hubby Ice Cream 16oz",
        price: "6.99"
    },
    {
        uri: "https://d2aam04nmhpdf8.cloudfront.net/images/images/000/016/045/xlarge/BlueBell_CookieTwoStep.jpg",
        text: "Blue Bell Cookie Two Step Ice Cream 16oz",
        price: "4.29"
    },
    {
        uri: "https://target.scene7.com/is/image/Target/GUEST_ac3f0098-6662-40d2-949d-1a195f9897c9?wid=488&hei=488&fmt=pjpeg",
        text: "Good Humor Strawberry Shortcake Frozen Dessert Bars 6pk 18oz",
        price: "8.49"
    },
    {
        uri: "https://www.ubuy.co.in/productimg/?image=aHR0cHM6Ly9pbWFnZXMtY2RuLnVidXkuY28uaW4vNjM2NzIyNWYzMjZkODAxMDE0NGQ1M2I3LWJlbi1qZXJyeS0zOS1zLWhhbGYtYmFrZWQuanBn.jpg",
        text: "Ben & Jerry's Half Baked Ice Cream 16oz",
        price: "6.99"
    },
    {
        uri: "https://images-cdn.ubuy.co.in/637086553a50be11262dc3b3-ben-jerry-39-s-strawberry.jpg",
        text: "Ben & Jerry's Strawberry Cheesecake Ice Cream 16oz",
        price: "6.99"
    },
    {
        uri: "https://tb-static.uber.com/prod/image-proc/processed_images/8d61055db83ee221ac2d4d2828cdab7f/5954bcb006b10dbfd0bc160f6370faf3.jpeg",
        text: "Blue Bell Buttered Pecan Ice Cream 16oz",
        price: "4.29"
    },
    {
        uri: "https://images-cdn.ubuy.co.in/633ad51218948933bf65c1ab-ben-amp-jerry-x27-s-non-dairy.jpg",
        text: "Ben & Jerry's Non-Dairy P.B. & Cookies Pint Frozen Desserts 16oz",
        price: "6.99"
    }
];
const snacks = [
    {
        uri: "https://m.media-amazon.com/images/I/81P+2BOhgtL._SX522_.jpg",
        text: "Doritos Flamin Hot Nacho Flamin Hot Nacho - 9.25 oz",
        price: "7.54"
    },
    {
        uri: "https://m.media-amazon.com/images/I/51fjBlWYxlL.jpg",
        text: "Doritos Flavoured Tortilla Chips Flamin' Hot Limon - 2.75 oz",
        price: "3.13"
    },
    {
        uri: "https://m.media-amazon.com/images/I/91gLTYhyjTL.jpg",
        text: "Lays's Potato Chips Limon - 7.75 oz",
        price: "6.49"
    },
    {
        uri: "https://m.media-amazon.com/images/I/91Fn3x8-uPL._SL1500_.jpg",
        text: "Doritos Dinamita Chile Limon Dinamita Chile Limon - 10.14 oz",
        price: "7.54"
    },
    {
        uri: "https://m.media-amazon.com/images/I/91IWdvNEaSL.jpg",
        text: "Cheetos Cheese Flavoured Snacks XXtra Flamin' Hot Crunchy - 8.5 oz",
        price: "6.81"
    },
    {
        uri: "https://m.media-amazon.com/images/I/713ArqOfhkL.jpg",
        text: "Cheetos Crunchy Cheese Flavoured Snacks Xxtra Flamin' Hot - 3.25 oz",
        price: "3.31"
    },
    {
        uri: "https://m.media-amazon.com/images/I/61hSAZDmHnL._SL1500_.jpg",
        text: "Pringles Potato Crisps Chips Sour Cream and Onion - 5.5 oz",
        price: "3.13"
    },
    {
        uri: "https://m.media-amazon.com/images/I/91-XnfG4GWL.jpg",
        text: "Chester's Fries Corn And Potato Snacks Flamin' Hot - 3.63 oz",
        price: "3.13"
    },
    {
        uri: "https://m.media-amazon.com/images/I/815DTf8h1qL.jpg",
        text: "Cheetos Crunchy Cheese Flavoured Snacks Flamin' Hot Limon - 8.5 oz",
        price: "6.81"
    },
    {
        uri: "https://m.media-amazon.com/images/I/81IehzD87nL._SL1500_.jpg",
        text: "Cheetos Flamin' Hot Puffs - 8.5 oz",
        price: "6.81"
    },
    {
        uri: "https://m.media-amazon.com/images/I/81c0JUj0TYS._AC_UF1000,1000_QL80_.jpg",
        text: "Cheetos Baked Cheese Flavoured Snacks Flamin' Hot - 2.75 oz",
        price: "3.13"
    },
    {
        uri: "https://m.media-amazon.com/images/I/71644-2+ZTL._SL1500_.jpg",
        text: "Cheetos Puffs - 3.0 oz",
        price: "3.13"
    },
    {
        uri: "https://m.media-amazon.com/images/I/51rD068D9XL._AC_.jpg",
        text: "Popcorners Snacks White Cheddar - 7.0 oz",
        price: "5.55"
    },
    {
        uri: "https://m.media-amazon.com/images/I/71eRYwNWhGL.jpg",
        text: "Takis Fuego Rolled Tortilla Chips Hot Chili Pepper & Lime - 4.0 oz",
        price: "3.13"
    },
    {
        uri: "https://m.media-amazon.com/images/I/81G7zl-qZ0L.jpg",
        text: "Ruffles Potato Chips Queso - 2.5 oz",
        price: "2.61"
    },
    {
        uri: "https://m.media-amazon.com/images/I/71s9LFkEDqL._AC_UF894,1000_QL80_.jpg",
        text: "SkinnyPop Popcorn Cheddar - 4.4 oz",
        price: "5.23"
    }
];
const groceries = [
    {
        uri: "https://m.media-amazon.com/images/I/91f6dVlnzTL._SL1500_.jpg",
        text: "Quaker Express Maple & Brown Sugar 1.69oz",
        price: "3.39"
    },
    {
        uri: "https://m.media-amazon.com/images/I/91JNXjCjrML._AC_UF894,1000_QL80_.jpg",
        text: "Cinnamon Toast Crunch Cereal Cup 2oz",
        price: "2.89"
    },
    {
        uri: "https://m.media-amazon.com/images/I/71wWgDzJWES.jpg",
        text: "Jimmy Dean Sausage Egg Croissant 2 Pack",
        price: "5.69"
    },
    {
        uri: "https://m.media-amazon.com/images/I/818w2P9z6sL.jpg",
        text: "Lunchables Cracker Turkey Cheddar 3.2oz",
        price: "4.59"
    },
    {
        uri: "https://m.media-amazon.com/images/I/71lNL6PzslL._AC_UF1000,1000_QL80_.jpg",
        text: "Diary Pure Half & Half 1 Pint",
        price: "3.29"
    },
    {
        uri: "https://m.media-amazon.com/images/I/71q-F1i+Q-L._AC_UF1000,1000_QL80_.jpg",
        text: "Maruchan Yakisoba Teriyaki 4oz",
        price: "2.49"
    },
    {
        uri: "https://m.media-amazon.com/images/I/61+g+MoY3EL._AC_UL420_SR420,420_.jpg",
        text: "White Castle Cheeseburgers 11oz",
        price: "8.59"
    },
    {
        uri: "https://m.media-amazon.com/images/I/81uQm2SqxhL._AC_UF1000,1000_QL80_.jpg",
        text: "7 Select Whole Milk 1 Gallon",
        price: "6.59"
    },
    {
        uri: "https://m.media-amazon.com/images/I/71I0FRdXAVL._AC_SX425_.jpg",
        text: "Cup Noodles Beef 2.25oz",
        price: "1.99"
    },
    {
        uri: "https://m.media-amazon.com/images/I/61hxe7ajQrL._AC_UF894,1000_QL80_.jpg",
        text: "Tia Rosa Flour Tortillas 20 Count",
        price: "3.89"
    },
    {
        uri: "https://images-na.ssl-images-amazon.com/images/I/81H+7fnG7kL._AC_UL600_SR600,600_.jpg",
        text: "Smucker's Grape Jelly 20oz",
        price: "4.39"
    },
    {
        uri: "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/71eHIqo9bdL._SX522_.jpg",
        text: "Jif Peanut Butter Creamy 16oz",
        price: "4.59"
    },
    {
        uri: "https://images.albertsons-media.com/is/image/ABS/188590269-ECOM?$ng-ecom-pdp-desktop$&defaultImage=Not_Available",
        text: "Jimmy Dean Bacon Breakfast Bowl 7oz",
        price: "4.99"
    },
    {
        uri: "https://cdn.minibardelivery.com/products/498866/product/174562_Who.jpg",
        text: "7-Select Whole Dill Pickle",
        price: "2.39"
    },
    {
        uri: "https://tb-static.uber.com/prod/image-proc/processed_images/109691f419b1495acdd9fb2c65aee78d/859baff1d76042a45e319d1de80aec7a.jpeg",
        text: "Cup Noodles Shrimp 2.25oz",
        price: "1.99"
    },
    {
        uri: "https://m.media-amazon.com/images/I/71+dF+PtofL._SL1500_.jpg",
        text: "Hidden Valley Ranch Original 8oz",
        price: "4.89"
    },
    {
        uri: "https://m.media-amazon.com/images/I/81+A14C2CkL._AC_UL400_.jpg",
        text: "Organic Valley Whole Milk 1/2 Gallon",
        price: "5.99"
    },
    {
        uri: "https://m.media-amazon.com/images/I/81alJ0P9CML.jpg",
        text: "Tyson Grilled & Ready Frozen Chicken Breast Strips 11oz",
        price: "7.99"
    },
    {
        uri: "https://m.media-amazon.com/images/I/71e2AkwTocS._AC_UF1000,1000_QL80_.jpg",
        text: "Chobani Plain Non-fat Greek Yogurt 32oz",
        price: "6.99"
    },
    {
        uri: "https://m.media-amazon.com/images/I/719SmjaU8nL.jpg",
        text: "Nestle Toll House Chocolate Chip Cookie Ready to Bake Dough 24ct 16.5oz",
        price: "4.49"
    },
    {
        uri: "https://m.media-amazon.com/images/I/816xwz-hLVL._AC_UF894,1000_QL80_.jpg",
        text: "Kraft Real Mayo Creamy & Smooth Mayonnaise 12oz",
        price: "6.99"
    },
    {
        uri: "https://m.media-amazon.com/images/I/810-m-plPgL._AC_UF1000,1000_QL80_.jpg",
        text: "Ore Ida Frozen Golden Tater Tots Seasoned Shredded Potatoes 32oz",
        price: "5.99"
    },
    {
        uri: "https://m.media-amazon.com/images/I/71F3SNnaaGL._AC_SX425_.jpg",
        text: "Coffee mate French Vanilla Creamer 16oz",
        price: "4.19"
    }
];
const healthitems = [
    {
        uri: "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/61glrRWRSiL.jpg",
        text: "LOLA Personal Lubricant 1.7 oz",
        price: "15.49"
    },
    {
        uri: "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/81ifRNFEk2L._AC_UF1000,1000_QL80_.jpg",
        text: "NicoDerm CQ Step 1 Stop Smoking Aid Nicotine Clear Patches 21mg 7ct",
        price: "36.99"
    },
    {
        uri: "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/613ZYvhYl5L._AC_UF1000,1000_QL80_.jpg",
        text: "Visine Multi-Action Allergy Eye Relief Eye Drops 0.5oz",
        price: "9.49"
    },
    {
        uri: "https://www.ubuy.co.in/productimg/?image=aHR0cHM6Ly9pbWFnZXMtY2RuLnVidXkuY28uaW4vNjNjYTU1MWY1NzQ1YTMxYzlmNGI5OWYzLWltb2RpdW0tbXVsdGktc3ltcHRvbS1yZWxpZWYtY2FwbGV0cy5qcGc.jpg",
        text: "Imodium Multi Symptom Relief Caplets 18ct",
        price: "11.99"
    },
    {
        uri: "https://m.media-amazon.com/images/I/81zCSjDOhsL._AC_UF1000,1000_QL80_.jpg",
        text: "Midol Complete Menstural Relief Caplets 24ct",
        price: "10.49"
    },
    {
        uri: "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/71Ggbx46znL._SY450_.jpg",
        text: "Halls Honey Lemon Cough Drops 30ct",
        price: "3.79"
    },
    {
        uri: "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/71MVSYs6OIL._AC_UF894,1000_QL80_.jpg",
        text: "Zytrec 24-Hour Allergy Relief Tablets 30ct",
        price: "27.49"
    },
    {
        uri: "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/81DQpyaEPLL._SL1500_.jpg",
        text: "Burt's Bees Beeswax Lip Balm",
        price: "3.49"
    },
    {
        uri: "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/71TKja1yz5L._AC_UF1000,1000_QL80_.jpg",
        text: "Advil Tablets 100ct",
        price: "13.99"
    },
    {
        uri: "https://www.ubuy.co.in/productimg/?image=aHR0cHM6Ly9pbWFnZXMtY2RuLnVidXkuY28uaW4vNjNjMzQxZTkxZmVmZDg0NjgxMGM5MDY5LXBlcHRvLWJpc21vbC1vcmlnaW5hbC1saXF1aWQtdXBzZXQuanBn.jpg",
        text: "Pepto Bismol 5 Symptom Digestive Relief Original Liquid 8oz",
        price: "6.99"
    },
    {
        uri: "https://www.ubuy.co.in/productimg/?image=aHR0cHM6Ly9pbWFnZXMtY2RuLnVidXkuY28uaW4vNjMzYjMzZGNhNWQzNmM2MjIyN2ExN2ZkLW9wdGkuanBn.jpg",
        text: "Opti-Free Puremoist Contact Lens Solution with Free Lens Case 2oz",
        price: "5.49"
    },
    {
        uri: "https://m.media-amazon.com/images/I/818gyp-r-CL._SY741_.jpg",
        text: "Digital Thermometer",
        price: "7.99"
    },
    {
        uri: "https://images-cdn.ubuy.co.in/63524fa572a3bf02a451f04f-bausch-lomb-renu-advanced-formula-all.jpg",
        text: "Bausch & Lomb ReNu Contact Lens Solution 4oz",
        price: "8.49"
    },
    {
        uri: "https://accessbio.net/wp-content/uploads/2021/09/home-test.png",
        text: "Carestart Covid-19 Antigen Home Test, 2 Tests",
        price: "23.99"
    }
];
const betterforyou = [
    {
        uri: "https://tb-static.uber.com/prod/image-proc/processed_images/7953bc2338bbc8759db60de9d2325795/5954bcb006b10dbfd0bc160f6370faf3.jpeg",
        text: "Pure Green Turmeric Tonic 2oz",
        price: "3.29"
    },
    {
        uri: "https://tb-static.uber.com/prod/image-proc/processed_images/328c2e3997d024c490f2d6bf28044831/5954bcb006b10dbfd0bc160f6370faf3.jpeg",
        text: "Bubbies Hawaii Strawberry Mochi Ice Cream Individually Wrapped 1ct",
        price: "2.49"
    },
    {
        uri: "https://i5.walmartimages.com/asr/5d44fcde-6d30-42a6-ab83-e06fab0a360d.c0a613bc2c294fdb7e06a21c518d259b.jpeg?odnHeight=580&odnWidth=580&odnBg=FFFFFF",
        text: "Mike's Mighty Good Chicken Craft Ramen Soup Cup 1.6oz",
        price: "2.99"
    },
    {
        uri: "https://m.media-amazon.com/images/I/71lrftRL4ML._SL1500_.jpg",
        text: "Repurpose Compostables 16oz Bowls 20ct",
        price: "5.49"
    },
    {
        uri: "https://images-cdn.ubuy.co.in/6340669ff2cd1157f43c35a7-ubuy-online-shopping.jpg",
        text: "NadaMoo! Cookies & Creme Dairy-Free Frozen Dessert 16oz",
        price: "8.49"
    },
    {
        uri: "https://tb-static.uber.com/prod/image-proc/processed_images/9e35f3e94bbf757a4b5ce184c8e6c21c/5954bcb006b10dbfd0bc160f6370faf3.jpeg",
        text: "Mrs. Meyer's Hand Soup Lemon Verbena 12.5oz",
        price: "4.79"
    },
    {
        uri: "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/71SYmo+Dy+L.jpg",
        text: "Quinn Peanut Butter Filled Pretzel Nuggets 7oz",
        price: "7.99"
    },
    {
        uri: "https://tb-static.uber.com/prod/image-proc/processed_images/7853373c4acb6ef63a424e9879bfcb52/5954bcb006b10dbfd0bc160f6370faf3.jpeg",
        text: "Sargento Balanced Breaks Sharp White Cheddar with Almond & Cranberry 1.5oz",
        price: "2.49"
    },
    {
        uri: "https://target.scene7.com/is/image/Target/GUEST_fa320f6b-4bb7-48e3-8dc8-ba379be25cda?wid=488&hei=488&fmt=pjpeg",
        text: "Halo Top Cookies and Cream Ice Cream 16oz",
        price: "6.99"
    },
    {
        uri: "https://tb-static.uber.com/prod/image-proc/processed_images/c0ff13e5820ebabdf32764624671f726/5954bcb006b10dbfd0bc160f6370faf3.jpeg",
        text: "Pure Green Apple Lemon Ginger 16oz",
        price: "6.49"
    },
    {
        uri: "https://tb-static.uber.com/prod/image-proc/processed_images/522ea630368fe2dc3c9b0e8e56cff10a/5954bcb006b10dbfd0bc160f6370faf3.jpeg",
        text: "Sweet Nothings Smoothie Cup - Strawberry 3.5oz",
        price: "3.29"
    },
    {
        uri: "https://tb-static.uber.com/prod/image-proc/processed_images/4684a26cecd66aa082cb79506defbb36/5954bcb006b10dbfd0bc160f6370faf3.jpeg",
        text: "Ithaca Buffalo Ranch Dip Hummus 10oz",
        price: "5.99"
    },
    {
        uri: "https://images-cdn.ubuy.co.in/636321ad54f2b3510f59af05-a-dozen-cousins-classic-refried-pinto.jpg",
        text: "A Dozen Cousins Refried Pinto Beans 10oz",
        price: "4.29"
    },
    {
        uri: "https://images-cdn.ubuy.co.in/634fb48bda3eaf105d09f992-parmcrisps-original-cheese-parm.jpg",
        text: "ParmCrisps Original Cheese Snack 1.75oz",
        price: "3.99"
    },
    {
        uri: "https://tb-static.uber.com/prod/image-proc/processed_images/519ce519f7377b213036ed14fe2cc6f0/5954bcb006b10dbfd0bc160f6370faf3.jpeg",
        text: "Bubbies Hawaii Passion Fruit Mochi Ice Cream Individually Wrapped 1ct",
        price: "2.49"
    }
];

const CategoriesResturantDetailsScreen = ({ route }) => {
    const navigation = useNavigation();
    const [city, setCity] = useState("San Antonio");
    const { name, image, review, rating, categories, address, discount, title } = route.params;
    const [activeTab, setActiveTab] = useState("Delivery");
    return (
        <>
            <StatusBar barStyle="light-content" backgroundColor="transparent" hidden={false} translucent={true} />
            <ScrollView showsVerticalScrollIndicator={false}>
                {activeTab === "Delivery" ? (
                    <>
                        <Image source={{ uri: image }} style={styles.imageStyle} />
                        <Pressable style={styles.backButtonContainer} onPress={() => navigation.goBack()}>
                            <Ionicons name="arrow-back" size={25} />
                        </Pressable>
                    </>
                ) : (<MapView style={styles.mapViewStyle}
                    provider={PROVIDER_GOOGLE}
                    initialRegion={{
                        latitude: 32.732346,
                        longitude: -117.196053,
                        latitudeDelta: 0.07,
                        longitudeDelta: 0.07
                    }}
                    customMapStyle={[
                        {
                            "featureType": "landscape",
                            "stylers": [
                                {
                                    "visibility": "off"
                                }
                            ]
                        },
                        {
                            "featureType": "poi.park",
                            "stylers": [
                                {
                                    "visibility": "off"
                                }
                            ]
                        },
                        {
                            "featureType": "water",
                            "stylers": [
                                {
                                    "color": "#87ceeb"
                                },
                                {
                                    "lightness": -15
                                }
                            ]
                        }
                    ]} >
                </MapView>)}
                <View style={{ maxWidth: 350 }}>
                    <Text style={styles.informationTextStyle}>{name} ({address})</Text>
                </View>
                <View style={styles.informationContainer}>
                    <View style={{ maxWidth: 350 }}>
                        <Text style={styles.ratingTextStyle}>⭐ {rating} ({review} reviews) • {categories}</Text>
                    </View>
                    <Text style={[styles.timeTextStyle, { marginTop: 2 }]}>Open until 8:30 PM</Text>
                    <Text style={styles.timeTextStyle}>Tap for hours, info and more</Text>
                </View>
                <SearchBar cityHandler={setCity} backgroundColor={"#eee"} marginTop={4} marginRight={0} left={0} width={370} alignSelf="center" height={50} placeHolder={"Search grocery items"} />
                {title !== "Dessert" && (
                    <View style={{ marginTop: 20 }}>
                        <Text style={styles.textStyle}>Snacks</Text>
                        <FlatList horizontal showsHorizontalScrollIndicator={false} data={snacks} renderItem={({ item }) => <HomeItems items={item} marginBottom={12} restName={route.params.name} image={route.params.image} address={route.params.address} notfood={true} groceries={true} />} />
                    </View>
                )}
                {title !== "Dessert" && (
                    <View style={{ marginTop: 15 }}>
                        <Text style={styles.textStyle}>Drinks</Text>
                        <FlatList horizontal showsHorizontalScrollIndicator={false} data={drinks} renderItem={({ item }) => <HomeItems items={item} marginBottom={12} restName={route.params.name} image={route.params.image} address={route.params.address} notfood={true} groceries={true} />} />
                    </View>
                )}
                <View style={[{ marginTop: 10 }, title === "Dessert" && { marginTop: 20 }]}>
                    <Text style={styles.textStyle}>Ice Cream</Text>
                    <FlatList horizontal showsHorizontalScrollIndicator={false} data={desserts} renderItem={({ item }) => <HomeItems items={item} marginBottom={12} restName={route.params.name} image={route.params.image} address={route.params.address} notfood={true} groceries={true} />} />
                </View>
                <View style={[{ marginTop: 15 }, title === "Dessert" && { marginTop: 10 }]}>
                    <Text style={styles.textStyle}>Chocolates</Text>
                    <FlatList horizontal showsHorizontalScrollIndicator={false} data={chocolates} renderItem={({ item }) => <HomeItems items={item} marginBottom={15} restName={route.params.name} image={route.params.image} address={route.params.address} notfood={true} groceries={true} />} />
                </View>
                {title !== "Dessert" && (
                    <View style={{ marginTop: 13 }}>
                        <Text style={styles.textStyle}>Alcohols</Text>
                        <FlatList horizontal showsHorizontalScrollIndicator={false} data={alcohols} renderItem={({ item }) => <HomeItems items={item} marginBottom={0} restName={route.params.name} image={route.params.image} address={route.params.address} notfood={true} groceries={true} />} />
                    </View>
                )}
                <View style={[{ marginBottom: 15 }, title === "Dessert" && { marginTop: 8, marginBottom: 20 }]}>
                    <Text style={styles.textStyle}>Grocery</Text>
                    <FlatList horizontal showsHorizontalScrollIndicator={false} data={groceries} renderItem={({ item }) => <HomeItems items={item} marginBottom={0} restName={route.params.name} image={route.params.image} address={route.params.address} notfood={true} groceries={true} />} />
                </View>
                {title !== "Dessert" && (
                    <View style={styles.betterForYouFlatListContainer}>
                        <Text style={styles.textStyle}>Better For You</Text>
                        <FlatList horizontal showsHorizontalScrollIndicator={false} data={betterforyou} renderItem={({ item }) => <HomeItems items={item} marginBottom={0} restName={route.params.name} image={route.params.image} address={route.params.address} notfood={true} groceries={true} />} />
                    </View>
                )}
                {title !== "Dessert" && (
                    <View style={styles.healthItemsFlatListContainer}>
                        <Text style={styles.textStyle}>Health</Text>
                        <FlatList horizontal showsHorizontalScrollIndicator={false} data={healthitems} renderItem={({ item }) => <HomeItems items={item} marginBottom={0} restName={route.params.name} image={route.params.image} address={route.params.address} notfood={true} groceries={true} />} />
                    </View>
                )}
            </ScrollView >
            {discount && (
                <>
                    <View style={styles.borderStyle} />
                    <View style={styles.discountContainer}>
                        <Text style={styles.discountTextStyle}>{discount}</Text>
                    </View>
                </>
            )}
        </>
    );
}

export default CategoriesResturantDetailsScreen;

const styles = StyleSheet.create({
    imageStyle: {
        height: 216,
        width: "100%"
    },
    backButtonContainer: {
        width: 45,
        height: 45,
        marginLeft: 25,
        marginTop: 45,
        position: "absolute",
        backgroundColor: "white",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 50
    },
    mapViewStyle: {
        height: 218,
        width: "100%"
    },
    informationTextStyle: {
        marginTop: 20,
        marginHorizontal: 15,
        fontSize: 24,
        fontWeight: "700"
    },
    informationContainer: {
        marginTop: 5,
        marginLeft: 15,
        marginBottom: 10
    },
    ratingTextStyle: {
        fontSize: 16,
        fontWeight: "500"
    },
    timeTextStyle: {
        fontSize: 15,
        color: "#7a7a7a"
    },
    textStyle: {
        marginLeft: 15,
        fontSize: 24,
        fontWeight: "700"
    },
    betterForYouFlatListContainer: {
        marginTop: 15,
        marginBottom: 15
    },
    healthItemsFlatListContainer: {
        marginTop: 18,
        marginBottom: 15
    },
    borderStyle: {
        marginBottom: 8,
        borderBottomColor: "#e5e5e5",
        borderBottomWidth: 2
    },
    discountContainer: {
        marginBottom: 16,
        marginTop: "auto",
        alignSelf: "center",
        alignItems: "center",
        justifyContent: "center"
    },
    discountTextStyle: {
        fontSize: 17,
        fontWeight: "500",
        color: "green"
    }
});