/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Mpos from '@alerzopay-artifact/react-native-alerzo-mpos';
import {Header} from 'react-native/Libraries/NewAppScreen';

const Stack = createNativeStackNavigator();

const MposScreen = ({navigation}) => (
  <Mpos
    amount={500}
    token=""
    apiUrl="https://api.alerzopay.com/v2/terminals/"
    goBack={() => navigation.goBack()}
    onSuccess={() => {}}
    onError={() => {}}
  />
);

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="mpos"
          component={MposScreen}
          options={{headerShown: false, title: ''}}
        />
        <Stack.Screen
          name="home"
          component={Header}
          options={{headerShown: false, title: ''}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
