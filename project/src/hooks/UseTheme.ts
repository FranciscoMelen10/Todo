import { ThemeContext } from "@/context/ThemeContext";
import { useContext } from "react";

// Hook personalizado para consumir el contexto
export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme debe usarse dentro de un ThemeProvider");
  }
  return context;
}
