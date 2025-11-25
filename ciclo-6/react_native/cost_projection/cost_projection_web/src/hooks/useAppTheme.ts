import { useMemo } from "react";
import { useAppSettings } from "./useAppSettings";

// Palette definitions for light and dark
const lightColors = {
  background: "#FAFAFA",
  "base-card": "#F3F2F2",
  "base-text": "#574F4D",
  "brown-dark": "#403937",
  brown: "#8D8686",
  white: "#FFFFFF",
  success: "#00C851",
  primary: "#6C63FF",
  surface: "#FFFFFF",
  border: "#E0E0E0",
  placeholder: "#BDBDBD",
  error: "#ff4d4d",
  subtext: "#6b6b6b",
};

const darkColors = {
  background: "#121212",
  "base-card": "#1E1E1E",
  "base-text": "#E0E0E0",
  "brown-dark": "#E6D8D2",
  brown: "#BBAAA3",
  white: "#FFFFFF",
  success: "#00C851",
  primary: "#8E7BFF",
  surface: "#181818",
  border: "#2C2C2C",
  placeholder: "#757575",
  error: "#ff6b6b",
  subtext: "#9a9a9a",
};

export const baseFonts = {
  titleM: { fontSize: 24, fontWeight: "bold" },
  textM: { fontSize: 16 },
  buttonM: { fontSize: 14, fontWeight: "bold", textTransform: "uppercase" },
};

export type ThemeColors = typeof lightColors;

export function useAppTheme() {
  const { theme: mode } = useAppSettings();

  const isDark = mode === "dark";

  const colors = useMemo(() => (isDark ? darkColors : lightColors), [isDark]);

  // Provide a `fonts` object with common keys (regular/medium/light/thin)
  // so third-party components that access `theme.fonts.regular` don't crash.
  const themeFonts = {
    // existing named font styles
    ...baseFonts,
    // common keys expected by some UI libraries
    regular: { fontSize: 16 },
    medium: { fontSize: 16, fontWeight: "500" },
    light: { fontSize: 16, fontWeight: "300" },
    thin: { fontSize: 14, fontWeight: "200" },
  };

  return { colors, theme: { colors, fonts: themeFonts }, isDark };
}
