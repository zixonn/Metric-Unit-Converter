import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer, DarkTheme} from '@react-navigation/native';
import { ThemeProvider, useThemeProvider } from './src/context/ThemeContext';
import Home from "./src/screens/Home";
import History from "./src/screens/History";
import Bookmarks from "./src/screens/Bookmarks";
import Settings from "./src/screens/Settings";
import { PaperProvider } from 'react-native-paper';
import { StatusBar } from 'expo-status-bar';

const AppContent = () => {
  const { getTheme } = useThemeProvider();
  const theme = getTheme();

  const statusBarStyle = theme === DarkTheme ? "light" : "dark";

  const Drawer = createDrawerNavigator();

  return (
    <>
      <StatusBar style={statusBarStyle} />
      <NavigationContainer theme={theme}>
        <Drawer.Navigator screenOptions={{ headerShown: false }}>
          <Drawer.Screen name='Home' component={Home} />
          <Drawer.Screen name='History' component={History} />
          <Drawer.Screen name='Bookmarks' component={Bookmarks} />
          <Drawer.Screen name='Settings' component={Settings} />
        </Drawer.Navigator>
      </NavigationContainer>
    </>
  );
};

export default function App() {
  return (
    <ThemeProvider>
      <PaperProvider>
        <AppContent />
      </PaperProvider>
    </ThemeProvider>
  );
}
