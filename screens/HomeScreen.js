import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet, FlatList } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const HomeScreen = ({ navigation }) => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const fetchNotes = async () => {
      const storedNotes = await AsyncStorage.getItem('travel_notes');
      if (storedNotes) {
        setNotes(JSON.parse(storedNotes));
      }
    };
    fetchNotes();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Bloco de Notas de Viagem</Text>
      <Button title="Adicionar Nota" onPress={() => navigation.navigate('AddNote')} />
      <FlatList
        data={notes}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (
          <Button
            title={`Nota ${index + 1}`}
            onPress={() => navigation.navigate('ViewNote', { note: item })}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  header: {
    fontSize: 24,
    marginBottom: 10,
  },
});

export default HomeScreen;
