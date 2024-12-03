
import React, { useState } from 'react';
import { Text, View, StyleSheet, Pressable } from 'react-native';

export default function ShapeFormulas() {
  const [shape, setShape] = useState('Select a shape to view formulas');

  const formulas = {
    rectangle: {
      area: 'Area = length × width',
      perimeter: 'Perimeter = 2 × (length + width)',
      volume: 'Volume = Not applicable',
    },
    square: {
      area: 'Area = side²',
      perimeter: 'Perimeter = 4 × side',
      volume: 'Volume = side³',
    },
    circle: {
      area: 'Area = π × radius²',
      perimeter: 'Perimeter = 2 × π × radius',
      volume: 'Volume = Not applicable',
    },
  };

  const getFormulas = (shape) => {
    if (formulas[shape]) {
      const { area, perimeter, volume } = formulas[shape];
      return (
        <>
          <Text style={styles.formulaText}>{area}</Text>
          <Text style={styles.formulaText}>{perimeter}</Text>
          <Text style={styles.formulaText}>{volume}</Text>
        </>
      );
    } else {
      return <Text style={styles.formulaText}>No formulas available.</Text>;
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Shape Formulas</Text>
      <View style={styles.buttonContainer}>
        <Pressable style={styles.rectangle} onPress={() => setShape('rectangle')}>
          <Text style={styles.buttonText}>Rectangle</Text>
        </Pressable>
        <Pressable style={styles.square} onPress={() => setShape('square')}>
          <Text style={styles.buttonText}>Square</Text>
        </Pressable>
        <Pressable style={styles.circle} onPress={() => setShape('circle')}>
          <Text style={styles.buttonText}>Circle</Text>
        </Pressable>
      </View>
      <View style={styles.formulaContainer}>
        <Text style={styles.subheading}>Selected Shape: {shape}</Text>
        {getFormulas(shape)}
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
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  rectangle:{
    width:120,
    height:70,
    backgroundColor:'blue',
  },
  circle:{
    width:80,
    height:80,
    borderRadius:40,
    backgroundColor:'red',
  },
  square:{
    width:80,
    height:80,
    backgroundColor:'green',
    marginHorizontal:8,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    textAlign:'center',
    padding:10,
  },
  formulaContainer: {
    padding: 15,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    backgroundColor: '#fff',
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

