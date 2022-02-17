import React from 'react';
import Routes from "./src/routes"
import AppLoading from "expo-app-loading"
import { useFonts } from "expo-font"
import { Nunito_400Regular } from "@expo-google-fonts/nunito"
import { Roboto_700Bold, Roboto_500Medium } from "@expo-google-fonts/roboto"
import { ThemeControllerProvider } from "./src/contexts/theme"

export default function App() {

  const [fontsLoaded] = useFonts({
    Roboto_500Medium,
    Roboto_700Bold,
    Nunito_400Regular
  })

  if (!fontsLoaded)
    return <AppLoading />

  return (
    <ThemeControllerProvider>
      <Routes />
    </ThemeControllerProvider>
  );
}