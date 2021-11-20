import React from "react";
import { StatusBar } from "expo-status-bar";
import { NativeBaseProvider } from "native-base";

// Import Components
import Calculator from "./src/Screens/Calculator";

export default function App() {
  return (
    <NativeBaseProvider>
      <StatusBar style="auto" />
      <Calculator />
    </NativeBaseProvider>
  );
}