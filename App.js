import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import AddNoteScreen from './screens/AddNoteScreen';
import ViewNoteScreen from './screens/ViewNoteScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="AddNote" component={AddNoteScreen} />
        <Stack.Screen name="ViewNote" component={ViewNoteScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
