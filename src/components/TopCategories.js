import React from "react";
import { View } from "react-native";
import TopCategoriesRow from "./TopCategoriesRow";

function TopCategories() {
    return (
        <View>
            <TopCategoriesRow name1="Breakfast & brunch" title1="breakfast" title2="mexican" name2="Mexican" location1="https://images.unsplash.com/photo-1455853739633-8c94c03d8121?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fG1pZGRsZSUyMGVhc3Rlcm4lMjBmb29kfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=500&q=60" location2="https://images.unsplash.com/photo-1615870216519-2f9fa575fa5c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bWV4aWNhbiUyMGZvb2R8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" />
            <TopCategoriesRow name1="Coffee & tea" title1="coffee" title2="soup" name2="Soup" location1="https://images.unsplash.com/photo-1541167760496-1628856ab772?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8Y29mZmVlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" location2="https://images.unsplash.com/photo-1547592166-23ac45744acd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c291cHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" />
        </View>
    );
}

export default TopCategories;