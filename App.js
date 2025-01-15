import "expo-dev-client";
import "react-native-gesture-handler";
import React, { useEffect } from "react";
import { StatusBar, LogBox } from "react-native";
import * as NavigationBar from "expo-navigation-bar";
import RootNavigation from "./src/navigation/RootNavigation";

LogBox.ignoreAllLogs();

function App() {
  useEffect(() => {
    NavigationBar.setBackgroundColorAsync("white");
  }, []);
  return (
    <>
      <RootNavigation />
      <StatusBar
        barStyle="light-content"
        backgroundColor="black"
        hidden={false}
        translucent={true}
      />
    </>
  );
}

export default App;
