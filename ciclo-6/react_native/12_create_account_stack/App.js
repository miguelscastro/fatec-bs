import { SignUp } from './src/pages/SignUp/index';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { AccountData } from './src/pages/AccountData/index';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="SignUp"
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="AccountData" component={AccountData} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
