import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import PageBody from '../components/PageBody'
import MenuIcon from '../components/MenuIcon';
import { Searchbar } from 'react-native-paper';
import { useThemeProvider } from '../context/ThemeContext';

const Home = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const {getTheme} = useThemeProvider();
  const theme = getTheme();
  return (
    <PageBody>
      <MenuIcon/>
      <Searchbar
      placeholder='Search'
      onChangeText={text => setSearchQuery(text)}
      value={searchQuery}
      style = {{backgroundColor: theme.colors.border}}
      cursorColor={theme.colors.text}
      inputStyle = {{color:theme.colors.text}}
      iconColor={theme.colors.background}
      placeholderTextColor={theme.colors.background}
      />
    </PageBody>
  )
}

export default Home

const styles = StyleSheet.create({
  content:{
    borderWidth:1,
    width:"100%"
  }
})