import React, { useState } from 'react';
import { SafeAreaView,StyleSheet, Text, View, Image, Pressable, ImageSourcePropType } from 'react-native';

import DiceOne from '../assets/One.png';
import DiceTwo from '../assets/Two.png';
import DiceThree from '../assets/Three.png';
import DiceFour from '../assets/Four.png';
import DiceFive from '../assets/Five.png';
import DiceSix from '../assets/Six.png';

const targetrandomNumber = Math.floor(Math.random() * 30) + 1;
const diceImages = [DiceOne, DiceTwo, DiceThree, DiceFour, DiceFive, DiceSix];

const NewApp = () => {
  // State for Player 1
  const [diceImageONE, setDiceImageONE] = useState<ImageSourcePropType>(DiceOne);
  const [scoreONE, setScoreONE] = useState(0);
  const [buttonTextONE, setButtonTextONE] = useState('Roll the dice');

  // State for Player 2
  const [diceImageTWO, setDiceImageTWO] = useState<ImageSourcePropType>(DiceOne);
  const [scoreTWO, setScoreTWO] = useState(0);
  const [buttonTextTWO, setButtonTextTWO] = useState('Roll the dice');

  const rollDice = (player: string) => {
    const randomNumber = Math.floor(Math.random() * 6) + 1;
    const newImage = diceImages[randomNumber - 1];
    let newScore;

    if (player === 'ONE') {
      setDiceImageONE(newImage);
      newScore = scoreONE + randomNumber;
      setScoreONE(newScore);
      updateButtonText(newScore, setButtonTextONE, setScoreONE);
    } else if (player === 'TWO') {
      setDiceImageTWO(newImage);
      newScore = scoreTWO + randomNumber;
      setScoreTWO(newScore);
      updateButtonText(newScore, setButtonTextTWO, setScoreTWO);
    }
  };

const updateButtonText = (score: number, setButtonText: Function, setScore: Function) => {
    if (score === targetrandomNumber) {
      setButtonText('YOU WON');
      setScore(1000);
    } else if (score > targetrandomNumber) {
      setButtonText('LOST');
      setScore(0);
    } else {
      setButtonText('Roll the dice');
    }
  };

  const Dice = ({ imageUrl }: { imageUrl: ImageSourcePropType }): JSX.Element => (
  <View>
    <Image style={styles.diceImage} source={imageUrl} />
  </View>
);

  return (
    // <SafeAreaView>
    <View style={styles.container}>
      <Text style={styles.targetNumberText}>Target: {targetrandomNumber}</Text>

      {/* Player ONE */}
        <Text style={styles.playerTitle}>Player 1</Text>
        <Pressable onPress={() => rollDice('ONE')}>
          <Text style={styles.rollDiceBtnText} selectable={false}>
            {buttonTextONE}
          </Text>
        </Pressable>
        <Dice imageUrl={diceImageONE} />
        <Text style={[styles.rollDiceBtnText,{color:'purple'}]}>Score: {scoreONE}</Text>

      {/* Player TWO */}
       <Text style={[styles.rollDiceBtnText,{color:'purple'}]}>Score: {scoreTWO}</Text>
        <Dice imageUrl={diceImageTWO} />
        <Pressable onPress={() => rollDice('TWO')}>
          <Text style={styles.rollDiceBtnText} selectable={false}>
            {buttonTextTWO}
          </Text>
        </Pressable>
        <Text style={styles.playerTitle}>Player 2</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF2F2',
  },
  targetNumberText: {
    fontSize: 10,
    fontWeight: 'bold',
    margin: 20,
    color: '#333',
  },

  playerTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 10,
    color:'purple',
  },
  diceImage: {
    width: 100,
    height: 100,
    marginVertical: 10,
  },
  rollDiceBtnText: {
    paddingVertical: 10,
    paddingHorizontal: 40,
    borderWidth: 2,
    borderRadius: 8,
    borderColor: '#E5E0FF',
    fontSize: 16,
    color: '#8EA7E9',
    fontWeight: '700',
    textTransform: 'uppercase',
    marginVertical: 10,
  },

});

export default NewApp;
