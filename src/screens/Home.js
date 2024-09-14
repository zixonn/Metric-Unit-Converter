import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import PageBody from '../components/PageBody'
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import { TextInput } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

const Home = () => {
  const [searchQuery, setSearchQuery] = useState()
  const nav = useNavigation()
  return (
    <PageBody>
      <View style = {styles.rowBar}>
        <FontAwesome6 onPress = { () => nav.openDrawer()}  name="bars" size={25} color="gray" />
        <TextInput 
        maxLength={30}
        textColor='gray'
        placeholder='Search'
        placeholderTextColor={"lightgray"}
        outlineColor='gray'
        activeOutlineColor='gray'
        outlineStyle = {{borderRadius:0}}
        style = {{width:"75%", marginHorizontal:"5%", backgroundColor:"white"}}
        mode='outlined'
        value = {searchQuery}
        onChangeText={text => setSearchQuery(text)}
         />
      </View>
    </PageBody>
  )
}

export default Home

const styles = StyleSheet.create({
  rowBar:{
    //borderWidth:1,
    flexDirection:"row",
    justifyContent:"center",
    alignItems:"center",
    width:"100%"
  },
  content:{
    borderWidth:1,
    width:"100%"
  }
})