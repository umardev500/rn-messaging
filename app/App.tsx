import '@/assets/styles/app.css';
import { MessagingScreen } from '@/screens';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

const Stack = createNativeStackNavigator();

const App = (): React.JSX.Element => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="MessagingScreen" component={MessagingScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
