import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SafeAreaProvider } from "react-native-safe-area-context";
import {
  Home as HomeIcon,
  List,
  Settings as SettingsIcon,
  Plus,
} from "lucide-react-native";

import { useAppTheme } from "./src/hooks/useAppTheme";

import { Home } from "./src/pages/Home";
import { Products } from "./src/pages/Products";
import { NewProduct } from "./src/pages/NewProduct";
import { Settings } from "./src/pages/Settings";
import { ProductDetails } from "./src/pages/Products/components/ProductDetails";
import { NewProductItem } from "./src/pages/Products/components/ProductDetails/components/NewProductItem";
import { EditProduct } from "./src/pages/Products/components/ProductDetails/components/EditProduct";
import { EditProductItem } from "./src/pages/Products/components/ProductDetails/components/EditProductItem";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function AppTabs() {
  const { colors, isDark } = useAppTheme();

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: isDark ? "#888" : "#999",
        tabBarStyle: {
          backgroundColor: colors.surface,
          borderTopColor: colors.border || "#e0e0e0",
          paddingBottom: 5,
          height: 60,
        },
      }}
    >
      <Tab.Screen
        name="HomeTab"
        component={Home}
        options={{
          tabBarLabel: "Início",
          tabBarIcon: ({ color, size }) => (
            <HomeIcon color={color} size={size} />
          ),
        }}
      />

      <Tab.Screen
        name="NewProduct"
        component={NewProduct}
        options={{
          tabBarLabel: "Adicionar",
          tabBarIcon: ({ color, size }) => <Plus color={color} size={size} />,
        }}
      />

      <Tab.Screen
        name="Products"
        component={Products}
        options={{
          tabBarLabel: "Produtos",
          tabBarIcon: ({ color, size }) => <List color={color} size={size} />,
        }}
      />

      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{
          tabBarLabel: "Ajustes",
          tabBarIcon: ({ color, size }) => (
            <SettingsIcon color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  const { colors, isDark, theme } = useAppTheme();

  const navTheme = {
    dark: !!isDark,
    colors: {
      primary: colors.primary,
      background: colors.background,
      card: colors.surface,
      text: colors["base-text"],
      border: colors.border,
      notification: colors.primary,
    },
    fonts: (theme && (theme as any).fonts) || { regular: { fontSize: 16 } },
  };

  return (
    <SafeAreaProvider>
      <NavigationContainer theme={navTheme as any}>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Root" component={AppTabs} />
          <Stack.Screen
            name="ProductDetails"
            component={ProductDetails}
            options={{ animation: "slide_from_right" }}
          />

          <Stack.Screen
            name="NewProductItem"
            component={NewProductItem}
            options={{
              presentation: "modal",
              animation: "slide_from_bottom",
              title: "Adicionar Item",
            }}
          />
          <Stack.Screen
            name="EditProduct"
            component={EditProduct}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="EditProductItem"
            component={EditProductItem}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
