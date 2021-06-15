import { Poppins_400Regular, Poppins_500Medium, Poppins_600SemiBold } from '@expo-google-fonts/poppins';
import { PortalProvider } from '@gorhom/portal';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';
import React from 'react';
import AppRouting from './AppRouting';

export default function App() {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold,
  });

  return fontsLoaded ? (
    <PortalProvider>
      <AppRouting />
    </PortalProvider>
  ) : (
    <AppLoading />
  );
}
