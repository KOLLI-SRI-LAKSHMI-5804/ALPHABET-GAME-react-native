import {StyleSheet, View, Text, Image} from 'react-native'

export default function FancyCard(){
  return(
    <View>
      <Text style={styles.headingText}>Fancy Card</Text>
      <View style={styles.container}>
         <Image
        source={{
            uri: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQQZA8s3i80S9sJnQwPMBucnYOuPjOsPWuuWKP272agfS60vRU_0o1Vzv_6W03OySwua1OyWOjO2wlK9hVL2lzOgQ'
        }}
        style={styles.cardImage}
        />
        <View>
          <Text style={styles.hawa}>HAWA MAHAL</Text>
          <Text style={styles.para}>Experience travel places in this summer with lot of joy..Happy Travelling with FancyTour</Text>
          <Text style={styles.placelink}>12km away</Text>

        </View>
      </View>
    </View>
  )

}
const styles=StyleSheet.create({
  cardImage:{
    width:240,
    height:150,
    borderTopRightRadius:15,
    borderBottomLeftRadius:15,
  },
  headingText: {
        fontSize: 16,
        fontWeight: 'bold',
        padding: 8
    },
  container:{
    flex:1,
    alignItems:'center',
    padding:18,
    backgroundColor:'#f0e68c',
    borderRadius:4,
    margin:10
  },
  hawa:{
    margin:10,
    fontWeight:'bold',
    fontSize:14
  },
  para:{
    margin:10,
    marginTop:13,
    color:'#2f4f4f'
  },
  placelink:{
    color:'blue',
    fontSize:10,
    margin:15,
    marginTop:20,

  }
})