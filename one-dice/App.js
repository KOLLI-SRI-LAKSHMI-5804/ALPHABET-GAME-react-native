import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import NewApp from './components/newApp'; // Capitalized to follow React naming conventions

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <NewApp />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
});

