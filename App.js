
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Search from './components/Search'
import GlobalState from './contexts/GlobalState';
import Results from './components/Results';
import Details from './components/Details';

const Stack = createNativeStackNavigator();

export default class App extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <GlobalState>
          <Stack.Navigator>
            <Stack.Screen name="Search" component={Search} />
            <Stack.Screen name="Results" component={Results} />
            <Stack.Screen name="Details" component={Details} />
          </Stack.Navigator>
        </GlobalState>
      </NavigationContainer>
    );
  }
}