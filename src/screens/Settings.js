import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { RadioButton } from 'react-native-paper';
import PageBody from '../components/PageBody';
import { useThemeProvider } from '../context/ThemeContext';
import { DarkTheme, DefaultTheme } from '@react-navigation/native';
import MenuIcon from '../components/MenuIcon';

const Settings = () => {
  const { getTheme, updateTheme } = useThemeProvider();
  const [appTheme, setAppTheme] = React.useState(() => {
    const currentTheme = getTheme();
    return currentTheme === DarkTheme ? 'dark' : (currentTheme === DefaultTheme ? 'light' : 'system');
  });

  React.useEffect(() => {
    updateTheme(appTheme === 'dark' ? 'dark' : (appTheme === 'light' ? 'light' : 'system'));
  }, [appTheme]);

  return (
    <PageBody>
      <MenuIcon/>
      <RadioButton.Group onValueChange={(newValue) => setAppTheme(newValue)} value={appTheme}>
        <View>
          <Text>Light</Text>
          <RadioButton value="light" />
        </View>
        <View>
          <Text>Dark</Text>
          <RadioButton value="dark" />
        </View>
        <View>
          <Text>System</Text>
          <RadioButton value="system" />
        </View>
      </RadioButton.Group>
    </PageBody>
  );
};

export default Settings;

const styles = StyleSheet.create({});
