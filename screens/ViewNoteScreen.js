import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ViewNoteScreen = ({ route }) => {
  const { note } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Visualizar Nota</Text>
      <Text>{note}</Text>
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

export default ViewNoteScreen;
