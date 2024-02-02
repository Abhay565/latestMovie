import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.text}>Latest Movies</Text>
    </View>
  )
}

export default Header;

const styles=StyleSheet.create({
    header:{
        height: "7%",
        width:"100%",
        backgroundColor: '#363737',
        paddingLeft: "25%",
        paddingTop: 10,
    },
    text:{
        color: "white",
        fontSize:25,  
    }
})