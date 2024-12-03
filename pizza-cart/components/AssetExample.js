import React, { useState } from 'react';
import { Text, View, StyleSheet, Pressable } from 'react-native';

export default function ShapeFormulas() {
  const [bcount, setBcount] = useState(0);
  const [ccount, setCcount] = useState(0);
  const [pcount, setPcount] = useState(0);

  const getItem = (shape) => {
    switch (shape) {
      case 'burger':
        setBcount(bcount + 1);
        break;
      case 'chips':
        setCcount(ccount + 1);
        break;
      case 'pizza':
        setPcount(pcount + 1);
        break;
      default:
        break;
    }
  };

  return (
    <View style={styles.container}>
      {/* Buttons */}
      <View style={styles.buttonContainer}>
        <Pressable style={styles.burger} onPress={() => getItem('burger')}>
          <Text style={styles.buttonText}>BURGER</Text>
        </Pressable>
        <Pressable style={styles.chips} onPress={() => getItem('chips')}>
          <Text style={styles.buttonText}>CHIPS</Text>
        </Pressable>
        <Pressable style={styles.circle} onPress={() => getItem('pizza')}>
          <Text style={styles.buttonText}>PIZZA</Text>
        </Pressable>
      </View>

      {/* Cart */}
      <View style={styles.formulaContainer}>
        <Text style={styles.subheading}>CART</Text>
<Text style={[styles.formulaText, {color:'#95f542'}]}>Burger: {bcount}</Text>
<Text style={[styles.formulaText, {color:'yellow'}]}>Chips: {ccount}</Text>
<Text style={[styles.formulaText,{color:'red'}]}>Pizza: {pcount}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    backgroundColor: '#f9f9f9',
  },
  burger: {
    backgroundColor: '#95f542',
    borderRadius: 20,
    height: 90,
    width: 80,
    justifyContent: 'center',
  },
  chips: {
    backgroundColor: 'yellow',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    height: 90,
    width: 80,
    justifyContent: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  circle: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: 'red',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#000',
    fontSize: 13,
    textAlign: 'center',
    padding: 12,
  },
  formulaContainer: {
    padding: 15,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    backgroundColor: '#515151',
  },
  subheading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  formulaText: {
    fontSize: 16,
    marginVertical: 5,
    textAlign: 'center',
  },
});
