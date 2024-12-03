import React from 'react'
import {StyleSheet, View, Text, ScrollView} from 'react-native'

export default function ElevatedCard(){
  return(
    <View>
    <Text style={styles.heading}>Elevated Cards</Text>
    <ScrollView horizontal={true} style={styles.container}>
    <View style={[styles.box,styles.elevated]}><Text>Hi</Text></View>
    <View style={[styles.box,styles.elevated]}><Text>Guys</Text></View>
    <View style={[styles.box,styles.elevated]}><Text>Welcome</Text></View>
    <View style={[styles.box,styles.elevated]}><Text>to</Text></View>
    <View style={[styles.box,styles.elevated]}><Text>Most</Text></View>
    <View style={[styles.box,styles.elevated]}><Text>Exciting</Text></View>
    <View style={[styles.box,styles.elevated]}><Text>Fest</Text></View>
    <View style={[styles.box,styles.elevated]}><Text>Fest</Text></View>
    <View style={[styles.box,styles.elevated]}><Text>YAADEIN</Text></View>
    <View style={[styles.box,styles.elevated]}><Text>2k25</Text></View>
    <View style={[styles.box,styles.elevated]}><Text>.......</Text></View>

    </ScrollView>
    </View>
  )
}
const styles=StyleSheet.create({
  heading:{
    fontSize:16,
    fontWeight:800,
    paddingLeft:18,
  },
  container:{
   padding:8,
  },
  box:{
    height:80,
    width:80,
    margin:6,
    borderRadius:10,
    flex:1,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'gray'

  },
  elevated:{
    backgroundColor: '#CAD5E2',
        elevation: 4,
        shadowOffset: {
            width: 1,
            height:1
        },
        shadowColor: '#333',
        shadowOpacity: 0.4,
        shadowRadius: 2
  }

})