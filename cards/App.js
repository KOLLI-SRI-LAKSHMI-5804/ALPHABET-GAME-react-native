import { View, Text, SafeAreaView, ScrollView } from 'react-native';
import React from 'react';
import FlatCards from './components/FlatCard';
import ElevatedCards from './components/ElevatedCard';
import FancyCard from './components/FancyCard';
import ContactList from './components/ContactList';
import ActionCard from './components/ActionCard';

const App = () => {
  return (
      <ScrollView>
        <FlatCards />
        <ElevatedCards />
        <FancyCard />
        <ContactList />
        <ActionCard />
      </ScrollView>
  );
};

export default App;
