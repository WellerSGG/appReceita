import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const AddNoteScreen = ({ navigation }) => {
  const [newNote, setNewNote] = useState('');

  const saveNote = async () => {
    const existingNotes = await AsyncStorage.getItem('travel_notes');
    const notes = existingNotes ? JSON.parse(existingNotes) : [];
    notes.push(newNote);
    await AsyncStorage.setItem('travel_notes', JSON.stringify(notes));
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Adicionar Nota</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite sua nota de viagem"
        value={newNote}
        onChangeText={setNewNote}
      />
      <Button title="Salvar Nota" onPress={saveNote} />
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
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 10,
  },
});

export default AddNoteScreen;
