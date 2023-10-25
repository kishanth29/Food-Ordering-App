import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Provider as ReduxProvider } from "react-redux";
import configStore from "../redux/store";
import HomeScreen from "../screens/HomeScreen";
import LoginScreen from "../screens/LoginScreen";
import PickUpScreen from "../screens/PickUpScreen";
import CheckoutScreen from "../screens/CheckoutScreen";
import CartItemsScreen from "../screens/CartItemsScreen";
import ResturantDetailScreen from "../screens/ResturantDetailScreen";
import BasketScreen from "../screens/BasketScreen";
import OrdersDetailScreen from "../screens/OrdersDetailScreen";
import SearchScreen from "../screens/SearchScreen";
import ProfileScreen from "../screens/ProfileScreen";
import ResturantsScreen from "../screens/ResturantsScreen";
import SearchItemsScreen from "../screens/SearchItemsScreen";
import ProfileSettingScreen from "../screens/ProfileSettingScreen";
import CategoriesScreen from "../screens/CategoriesScreen";
import CategoriesResturantDetailsScreen from "../screens/CategoriesResturantDetailsScreen";
import AllResturantsScreen from "../screens/AllResturantsScreen";
import OrderPlacedScreen from "../screens/OrderPlacedScreen";
import OrderCompletedScreen from "../screens/OrderCompletedScreen";
import OrderInfoScreen from "../screens/OrderInfoScreen";

const store = configStore();
const Stack = createNativeStackNavigator();

function RootNavigation() {
    return (
        <ReduxProvider store={store}>
            <NavigationContainer>
                <GestureHandlerRootView style={{ flex: 1 }}>
                    <Stack.Navigator screenOptions={{ headerShown: false, contentStyle: { backgroundColor: "white" } }} initialRouteName="Login" >
                        <Stack.Screen name="Login" component={LoginScreen} />
                        <Stack.Screen name="Home" component={HomeScreen} />
                        <Stack.Screen name="Pickup" component={PickUpScreen} />
                        <Stack.Screen name="Resturants" component={ResturantsScreen} />
                        <Stack.Screen name="SearchItems" component={SearchItemsScreen} />
                        <Stack.Screen name="Checkout" component={CheckoutScreen} />
                        <Stack.Screen name="OrderPlaced" component={OrderPlacedScreen} />
                        <Stack.Screen name="OrderCompleted" component={OrderCompletedScreen} />
                        <Stack.Screen name="Cart" component={CartItemsScreen} />
                        <Stack.Screen name="Resturant" component={ResturantDetailScreen} />
                        <Stack.Screen name="Basket" component={BasketScreen} />
                        <Stack.Screen name="OrderInfo" component={OrderInfoScreen} />
                        <Stack.Screen name="Categories" component={CategoriesScreen} />
                        <Stack.Screen name="AllResturants" component={AllResturantsScreen} />
                        <Stack.Screen name="CategoriesResturant" component={CategoriesResturantDetailsScreen} />
                        <Stack.Screen name="Order" component={OrdersDetailScreen} />
                        <Stack.Screen name="Search" component={SearchScreen} />
                        <Stack.Screen name="Profile" component={ProfileScreen} />
                        <Stack.Screen name="ProfileSetting" component={ProfileSettingScreen} />
                    </Stack.Navigator>
                </GestureHandlerRootView>
            </NavigationContainer>
        </ReduxProvider>
    );
}

export default RootNavigation;