import React from 'react'
import { useThemeProvider } from '../context/ThemeContext'
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import { useNavigation } from '@react-navigation/native';

const MenuIcon = () => {
 const { getTheme } = useThemeProvider();
 const theme = getTheme();
 const nav = useNavigation()
  return (
    <FontAwesome6 
        onPress = { () => nav.openDrawer()}  
        name="bars" 
        size={30} 
        color= {theme.colors.border}
    />
  )
}

export default MenuIcon

