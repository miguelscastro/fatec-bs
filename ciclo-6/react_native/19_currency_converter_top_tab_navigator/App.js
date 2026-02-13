import { Text, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { styles } from './styles';

import { Converter } from './src/pages/Converter';

const Tab = createMaterialTopTabNavigator();

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <SafeAreaView style={styles.container} edges={['top', 'left', 'right']}>
          <StatusBar barStyle="dark-content" backgroundColor="#FFF" />

          <Text style={styles.globalTitle}>Conversor de Moedas</Text>

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
              },
              tabBarIndicatorStyle: {
                backgroundColor: '#2ecc71',
                height: 4,
                borderRadius: 2,
              },
              tabBarActiveTintColor: '#2ecc71',
              tabBarInactiveTintColor: '#999',
            }}>
            <Tab.Screen
              name="Dólar"
              children={() => (
                <Converter currencyLabel="Dólar" rate={5.33} symbol="$" />
              )}
            />
            <Tab.Screen
              name="Euro"
              children={() => (
                <Converter currencyLabel="Euro" rate={6.17} symbol="€" />
              )}
            />
            <Tab.Screen
              name="Bitcoin"
              children={() => (
                <Converter currencyLabel="Bitcoin" rate={350000} symbol="₿" />
              )}
            />
          </Tab.Navigator>
        </SafeAreaView>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
