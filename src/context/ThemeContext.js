import React, { createContext, useState, useContext, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { DefaultTheme, DarkTheme } from '@react-navigation/native';
import * as NavigationBar from 'expo-navigation-bar';
import { useColorScheme } from 'react-native';

const ThemeContext = createContext();

const getInitialTheme = (systemColorScheme) => {
  return systemColorScheme === 'dark' ? DarkTheme : DefaultTheme;
};

export const ThemeProvider = ({ children }) => {
  const systemColorScheme = useColorScheme();
  const [theme, setTheme] = useState('system');
  const [currentTheme, setCurrentTheme] = useState(() => getInitialTheme(systemColorScheme));

  useEffect(() => {
    const loadTheme = async () => {
      try {
        const savedTheme = await AsyncStorage.getItem('appTheme');
        if (savedTheme) {
          setTheme(savedTheme);
        }
      } catch (error) {
        console.error("Failed to load theme from storage", error);
      }
    };

    loadTheme();
  }, []);

  useEffect(() => {
    const saveTheme = async () => {
      try {
        await AsyncStorage.setItem('appTheme', theme);
      } catch (error) {
        console.error("Failed to save theme to storage", error);
      }
    };

    saveTheme();
  }, [theme]);

  useEffect(() => {
    if (theme === 'system') {
      setCurrentTheme(systemColorScheme === 'dark' ? DarkTheme : DefaultTheme);
    } else {
      setCurrentTheme(theme === 'dark' ? DarkTheme : DefaultTheme);
    }
  }, [theme, systemColorScheme]);

  useEffect(() => {
    const backgroundColor = currentTheme === DarkTheme ? '#000000' : '#FFFFFF';
    NavigationBar.setBackgroundColorAsync(backgroundColor);
    NavigationBar.setButtonStyleAsync(currentTheme === DarkTheme ? 'light' : 'dark');
  }, [currentTheme]);

  const getTheme = () => currentTheme;

  const updateTheme = (newTheme) => {
    setTheme(newTheme);
    const themeToApply = newTheme === 'dark' ? DarkTheme : (newTheme === 'light' ? DefaultTheme : (systemColorScheme === 'dark' ? DarkTheme : DefaultTheme));
    setCurrentTheme(themeToApply);
  };

  return (
    <ThemeContext.Provider value={{ getTheme, updateTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useThemeProvider = () => useContext(ThemeContext);


/**
colors (object): Various colors used by react navigation components:
  primary (string): The primary color of the app used to tint various elements. Usually you'll want to use your brand color for this.
  background (string): The color of various backgrounds, such as background color for the screens.
  card (string): The background color of card-like elements, such as headers, tab bars etc.
  text (string): The text color of various elements.
  border (string): The color of borders, e.g. header border, tab bar border etc.
  notification (string): The color of Tab Navigator badge.
 */