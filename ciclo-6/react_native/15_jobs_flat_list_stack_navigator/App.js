import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { Jobs } from './src/pages/Jobs/index';
import { JobDetails } from './src/pages/JobDetails/index';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Jobs"
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Jobs" component={Jobs} />
        <Stack.Screen name="JobDetails" component={JobDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
