import React, { useState } from 'react';
import {
  FlatList,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

// Constants
import CurrencyButton from './components/Currency'
import { ALPHA } from './constants';

const App = (): JSX.Element => {
  const [inputValue, setInputValue] = useState('');
  const [resultValue, setResultValue] = useState('');
  const [selectedButton, setSelectedButton] = useState<string | null>(null); // Track selected button
  const [score, setScore] = useState(0); // Track score
  const [lives, setLives] = useState(5); // Track lives
  
  // Function to handle Start button click and generate random input
  const generateRandomInput = () => {
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'; // String of possible letters
    const randomLetter = alphabet[Math.floor(Math.random() * alphabet.length)]; // Random letter
    setInputValue(randomLetter); // Set the random letter as input
    setResultValue(''); // Clear result on new generation
    setSelectedButton(null); // Reset selected button
  };

  // Reset the input and result when the user changes the input manually
  const handleInputChange = (value: string) => {
    setInputValue(value);
    setResultValue(''); // Reset result when input changes
    setSelectedButton(null); // Reset the selected button
  };

  const buttonPressed = (targetValue: { name: string; flag: string; symbol: string }) => {
    if (!inputValue) {
      setResultValue("Please START the game");
      return;
    }

    // Check if inputValue matches targetValue.symbol
    if (inputValue.toUpperCase() === targetValue.symbol.toUpperCase().replace('-', '')) {
      setResultValue(`Success! ${targetValue.name} ${targetValue.flag}`);
      setScore(prevScore => prevScore + 1); // Increment score for correct answer
      setSelectedButton(targetValue.name); // Highlight the selected button

      // After 5 seconds, generate a new random letter
      setTimeout(() => {
        generateRandomInput();
      }, 2000); // Delay for 5 seconds
      return;
    }

    // If the input doesn't match the target value, show "Wrong Letter" after clicking the button
    setResultValue("Wrong Letter");
    setSelectedButton(targetValue.name); // Highlight the button even if it's wrong

    // Reduce the number of lives if wrong
    setLives(prevLives => {
      const newLives = prevLives - 1;
      if (newLives <= 0) {
        setResultValue("Game Over! Restarting...");
        setScore(0); // Reset score to 0
        setTimeout(() => {
          setLives(5); // Reset lives
          generateRandomInput(); // Start new game
        }, 2000); // Delay for 2 seconds before restarting
      }
      return newLives;
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <View>
          <TextInput
            maxLength={14}
            value={inputValue}
            clearButtonMode="always" // only for iOS
            onChangeText={handleInputChange} // Reset result on input change
            keyboardType="default" // Ensures valid input
            placeholder="ALPHABETS GAME ~ FUN"
            style={styles.inputAmountField}
            editable={false} // Disable manual input (optional, as input will be auto-generated)
          />
        </View>
        {resultValue && (
          <Text style={styles.resultTxt}>{resultValue}</Text>
        )}
        <Text style={styles.scoreTxt}>Score: {score}</Text>
        <Text style={styles.livesTxt}>Lives: {lives}</Text> {/* Display Lives */}
      </View>
      <View style={styles.bottomContainer}>
        <FlatList
          numColumns={3}
          data={ALPHA}
          keyExtractor={(item) => item.name}
          renderItem={({ item }) => (
            <Pressable
              style={[
                styles.button,
                selectedButton === item.name && styles.selected, // Highlight the selected button
              ]}
              onPress={() => buttonPressed(item)}
            >
              <CurrencyButton {...item} />
            </Pressable>
          )}
        />
      </View>
      <Pressable style={styles.startButton} onPress={generateRandomInput}>
        <Text style={styles.startButtonText}>Start</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#515151',
  },
  topContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  resultTxt: {
    fontSize: 26,
    color: '#FFFFFF',
    fontWeight: '800',
  },
  scoreTxt: {
    fontSize: 22,
    color: '#FFFFFF',
    fontWeight: '600',
  },
  livesTxt: {
    fontSize: 14,
    color: '#FFFFFF',
    fontWeight: '600',
  },

  inputAmountField: {
    height: 40,
    width: 200,
    padding: 8,
    borderWidth: 1,
    borderRadius: 4,
    backgroundColor: '#FFFFFF',
  },
  bottomContainer: {
    flex: 3,
  },
  button: {
    flex: 1,
    margin: 12,
    height: 60,
    borderRadius: 12,
    backgroundColor: '#fff',
    elevation: 2,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowColor: '#333',
    shadowOpacity: 0.1,
    shadowRadius: 1,
  },
  selected: {
    backgroundColor: '#ffeaa7', // Highlight color when selected
  },
  startButton: {
    marginTop: 20,
    padding: 15,
    backgroundColor: '#4CAF50',
    borderRadius: 8,
    alignItems: 'center',
  },
  startButtonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default App;
