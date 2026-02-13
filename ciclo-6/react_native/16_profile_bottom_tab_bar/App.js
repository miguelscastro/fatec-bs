import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Feather } from '@expo/vector-icons';

import { Personal } from './src/pages/Personal';
import { Education } from './src/pages/Education';
import { Experience } from './src/pages/Experience';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarActiveTintColor: '#5C71D2',
          tabBarInactiveTintColor: 'gray',
          tabBarStyle: { paddingBottom: 5, height: 60 },
          tabBarIcon: ({ color, size }) => {
            let iconName;

            if (route.name === 'Pessoal') {
              iconName = 'user';
            } else if (route.name === 'Formação') {
              iconName = 'book-open';
            } else if (route.name === 'Experiência') {
              iconName = 'briefcase';
            }

            return <Feather name={iconName} size={size} color={color} />;
          },
        })}>
        <Tab.Screen name="Pessoal" component={Personal} />
        <Tab.Screen name="Formação" component={Education} />
        <Tab.Screen name="Experiência" component={Experience} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
