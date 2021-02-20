import { StatusBar } from 'react-native';
import React from 'react';
import { Poppins_300Light as Light, Poppins_400Regular as Regular, Poppins_600SemiBold as SemiBold, Poppins_700Bold as Bold, useFonts } from '@expo-google-fonts/poppins'
import AppLoading from 'expo-app-loading'

import Routes from './src/routes'

export default function App() {

  let [fonts] = useFonts({
    Light,
    Regular,
    SemiBold, 
    Bold
  })

  if(!fonts) {
    return <AppLoading />
  }

  return (
    <>
      <StatusBar backgroundColor="#690192" translucent barStyle="light-content" />
      <Routes />
    </>
  );
}
