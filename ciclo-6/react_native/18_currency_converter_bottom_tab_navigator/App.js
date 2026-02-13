import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome5 } from '@expo/vector-icons';

import { Converter } from './src/pages/Converter';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: '#2ecc71',
          tabBarInactiveTintColor: '#ccc',
          tabBarStyle: { paddingBottom: 5, height: 60 },
          tabBarLabelStyle: { fontSize: 12, fontWeight: 'bold' },
        }}>
        <Tab.Screen
          name="Dólar"
          children={() => (
            <Converter currencyLabel="Dólar" rate={5.33} symbol="$" />
          )}
          options={{
            tabBarIcon: ({ color, size }) => (
              <FontAwesome5 name="dollar-sign" size={size} color={color} />
            ),
          }}
        />

        <Tab.Screen
          name="Euro"
          children={() => (
            <Converter currencyLabel="Euro" rate={6.17} symbol="€" />
          )}
          options={{
            tabBarIcon: ({ color, size }) => (
              <FontAwesome5 name="euro-sign" size={size} color={color} />
            ),
          }}
        />

        <Tab.Screen
          name="Bitcoin"
          children={() => (
            <Converter currencyLabel="Bitcoin" rate={492.623} symbol="₿" />
          )}
          options={{
            tabBarIcon: ({ color, size }) => (
              <FontAwesome5 name="bitcoin" size={size} color={color} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
