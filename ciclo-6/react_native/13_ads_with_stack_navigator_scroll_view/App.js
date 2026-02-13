import { Ads } from './src/pages/Ads/index';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { AdDetails } from './src/pages/AdDetails/index';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Ads"
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Ads" component={Ads} />
        <Stack.Screen name="AdDetails" component={AdDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
