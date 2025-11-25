import { useMemo } from "react";
import { useAppSettings } from "./useAppSettings";

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
  "base-card": "#2C2C2C",
  "base-text": "#F5F5F5",
  "brown-dark": "#D7CCC8",
  brown: "#A1887F",
  white: "#1E1E1E",
  success: "#00E676",
  primary: "#8E7BFF",
  surface: "#1E1E1E",
  border: "#333333",
  placeholder: "#666666",
  error: "#FF5252",
  subtext: "#9E9E9E",
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

  const themeFonts = {
    ...baseFonts,
    regular: { fontSize: 16 },
    medium: { fontSize: 16, fontWeight: "500" },
    light: { fontSize: 16, fontWeight: "300" },
    thin: { fontSize: 14, fontWeight: "200" },
  };

  return { colors, theme: { colors, fonts: themeFonts }, isDark };
}
