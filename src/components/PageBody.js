import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const PageBody = ({children}) => {
  return (
    <>
    <View style = {styles.con}>
      {children}
    </View>
    </>
  )
}

export default PageBody

const styles = StyleSheet.create({
    con:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"white"
    }
})