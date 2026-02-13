import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

import { Personal } from './src/pages/Personal';
import { Education } from './src/pages/Education';
import { Experience } from './src/pages/Experience';

const Tab = createMaterialTopTabNavigator();

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <SafeAreaView
          style={{ flex: 1, backgroundColor: '#FFF' }}
          edges={['top', 'left', 'right']}>
          <StatusBar barStyle="dark-content" backgroundColor="#FFF" />

          <Tab.Navigator
            screenOptions={{
              tabBarLabelStyle: {
                fontSize: 14,
                fontWeight: 'bold',
                textTransform: 'none',
              },
              tabBarStyle: {
                backgroundColor: '#FFF',
                elevation: 0,
                shadowOpacity: 0,
                borderBottomWidth: 1,
                borderBottomColor: '#eee',
              },
              tabBarIndicatorStyle: {
                backgroundColor: '#5C71D2',
                height: 3,
              },
              tabBarActiveTintColor: '#5C71D2',
              tabBarInactiveTintColor: '#999',
            }}>
            <Tab.Screen name="Pessoal" component={Personal} />
            <Tab.Screen name="Formação" component={Education} />
            <Tab.Screen name="Experiência" component={Experience} />
          </Tab.Navigator>
        </SafeAreaView>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
