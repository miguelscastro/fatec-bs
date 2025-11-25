import { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const KEYS = {
  THEME: "@settings:theme",
  CURRENCY: "@settings:currency",
};

class SimpleEventEmitter {
  private listeners: Record<string, Array<(val: any) => void>> = {};

  on(event: string, callback: (val: any) => void) {
    if (!this.listeners[event]) {
      this.listeners[event] = [];
    }
    this.listeners[event].push(callback);
  }

  off(event: string, callback: (val: any) => void) {
    if (!this.listeners[event]) return;
    this.listeners[event] = this.listeners[event].filter(
      (cb) => cb !== callback
    );
  }

  emit(event: string, payload: any) {
    if (this.listeners[event]) {
      this.listeners[event].forEach((callback) => callback(payload));
    }
  }
}

const settingsEvents = new SimpleEventEmitter();

export function useAppSettings() {
  const [theme, setThemeState] = useState<"light" | "dark">("light");
  const [currency, setCurrencyState] = useState("R$");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;

    async function load() {
      try {
        const storedTheme = await AsyncStorage.getItem(KEYS.THEME);
        const storedCurrency = await AsyncStorage.getItem(KEYS.CURRENCY);

        if (mounted) {
          if (storedTheme) setThemeState(storedTheme as "light" | "dark");
          if (storedCurrency) setCurrencyState(storedCurrency);
          setLoading(false);
        }
      } catch (e) {
        console.error("Erro ao carregar settings", e);
      }
    }
    load();

    const onThemeChange = (t: "light" | "dark") => {
      if (mounted) setThemeState(t);
    };
    const onCurrencyChange = (c: string) => {
      if (mounted) setCurrencyState(c);
    };

    settingsEvents.on("change:theme", onThemeChange);
    settingsEvents.on("change:currency", onCurrencyChange);

    return () => {
      mounted = false;
      settingsEvents.off("change:theme", onThemeChange);
      settingsEvents.off("change:currency", onCurrencyChange);
    };
  }, []);

  const setTheme = async (newTheme: "light" | "dark") => {
    setThemeState(newTheme);
    settingsEvents.emit("change:theme", newTheme);
    await AsyncStorage.setItem(KEYS.THEME, newTheme);
  };

  const setCurrency = async (newCurrency: string) => {
    setCurrencyState(newCurrency);
    settingsEvents.emit("change:currency", newCurrency);
    await AsyncStorage.setItem(KEYS.CURRENCY, newCurrency);
  };

  return { theme, currency, setTheme, setCurrency, loading };
}
