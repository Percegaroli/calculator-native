import React from 'react';
import { StatusBar, View } from 'react-native';
import {
  useFonts,
  // eslint-disable-next-line camelcase
  Spartan_700Bold,
} from '@expo-google-fonts/spartan';
import AppLoading from 'expo-app-loading';
import Main from './src/screens/Main';
import AppThemeProvider from './src/styles/AppThemeProvider';

const App = () => {
  const [fontsLoaded] = useFonts({ Spartan_700Bold });
  return !fontsLoaded ? <AppLoading /> : (
    <AppThemeProvider>
      <View style={{ paddingTop: StatusBar.currentHeight ?? 0 }}>
        <Main />
      </View>
    </AppThemeProvider>
  );
};

export default App;
