import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import PageBody from '../components/PageBody'
import MenuIcon from '../components/MenuIcon';

const Home = () => {
  return (
    <PageBody>
      <MenuIcon/>
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