import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { useThemeProvider } from '../context/ThemeContext';

const PageBody = ({ children }) => {
  const { getTheme } = useThemeProvider();
  const theme = getTheme();

  return (
    <View style={[styles.con, { backgroundColor: theme.colors.background }]}>
      {children}
    </View>
  );
};

export default PageBody;

const styles = StyleSheet.create({
  con: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
