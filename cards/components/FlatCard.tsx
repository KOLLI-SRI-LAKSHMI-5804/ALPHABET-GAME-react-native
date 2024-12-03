import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function FlatCards() {
  return (
    <View>
    <Text style={styles.heading}>FlatCards</Text>
    <View style={styles.container}>
    <View style={[styles.card , styles.cardOne]}> GREEN</View>
    <View style={[styles.card, styles.cardTwo]}> BLUE</View>
    <View style={[styles.card, styles.cardThree]}> YELLOW</View>
    </View>
    </View>
  )
  }
const styles=StyleSheet.create({
  card:{
    flex:1,
    alignItems:'center',
    justifyContent:'center',
    width:100,
    height:100,
    margin:8,
    borderRadius:10,

  },
  container:{
    flex:1,
    flexDirection:'row',
    padding:8,
  },
  heading:{
    fontSize:16,
    fontWeight:800,
    paddingHorizontal:18,
    marginTop:8,
  },
  cardOne:{
    backgroundColor:'green',
  },
  cardTwo:{
    backgroundColor:'blue',
  },
  cardThree:{
    backgroundColor:'yellow',
  }

})