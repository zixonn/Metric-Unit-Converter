import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useTheme } from 'react-native-paper'
import { useThemeProvider } from '../context/ThemeContext'

const MyText = ({children, style}) => {
 const {getTheme} = useThemeProvider()
 const theme = getTheme()
  return (
    <Text style = {[style,{color: theme.colors.text}]}>{children}</Text>
  )
}

export default MyText

const styles = StyleSheet.create({})