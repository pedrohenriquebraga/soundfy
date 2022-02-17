import React from 'react';
import Routes from "./src/routes"
import { useFonts } from "expo-font"
import { Nunito_400Regular } from "@expo-google-fonts/nunito"
import { Roboto_700Bold, Roboto_500Medium } from "@expo-google-fonts/roboto"
import AppLoading from "expo-app-loading"

export default function App() {

  const [fontsLoaded] = useFonts({
    Roboto_500Medium,
    Roboto_700Bold,
    Nunito_400Regular
  })

  if (!fontsLoaded)
    return <AppLoading />

  return (
    <Routes />
  );
}