import React from "react";
import { View } from "react-native";
import { StatusBar } from "expo-status-bar";

// Import Components
import Calculator from "./src/Screens/Calculator";

export default function App() {
  return (
    <View>
      <StatusBar style="auto" />
      <Calculator />
    </View>
  );
}