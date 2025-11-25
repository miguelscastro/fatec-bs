import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SafeAreaProvider } from "react-native-safe-area-context";
import {
  Home as HomeIcon,
  Calculator,
  List,
  Settings as SettingsIcon,
} from "lucide-react-native";

// Hook de Tema
import { useAppTheme } from "./src/hooks/useAppTheme";

// Importação das Páginas
import { Home } from "./src/pages/Home";
import { Products } from "./src/pages/Products";
import { NewProduct } from "./src/pages/NewProduct";
import { Settings } from "./src/pages/Settings";
import { ProductDetails } from "./src/pages/Products/components/ProductDetails";
import { NewProductItem } from "./src/pages/NewProduct/components/NewProductItem";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

// 1. Navegador de Abas (A tela principal do App)
function AppTabs() {
  const { colors, isDark } = useAppTheme();

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false, // Removemos o header padrão do navegador (suas telas já têm header próprio)
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
          tabBarLabel: "Calcular",
          tabBarIcon: ({ color, size }) => (
            <Calculator color={color} size={size} />
          ),
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

// 2. Navegador de Pilha (Root)
// Ele segura as Abas + Telas que precisam cobrir as abas (Detalhes, Modais, etc)
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
    // Some navigation internals expect `theme.fonts.regular` to exist.
    // Provide the fonts object so libraries don't read `regular` of undefined.
    fonts: (theme && (theme as any).fonts) || { regular: { fontSize: 16 } },
  };

  return (
    <SafeAreaProvider>
      <NavigationContainer theme={navTheme as any}>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          {/* A tela inicial é o conjunto de abas */}
          <Stack.Screen name="Root" component={AppTabs} />

          {/* Telas de "segundo nível" (ficam por cima das abas) */}
          <Stack.Screen
            name="ProductDetails"
            component={ProductDetails}
            options={{ animation: "slide_from_right" }}
          />

          <Stack.Screen
            name="NewProductItem"
            component={NewProductItem}
            options={{
              presentation: "modal", // Abre puxando de baixo pra cima (estilo iOS)
              animation: "slide_from_bottom",
              title: "Adicionar Item",
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
