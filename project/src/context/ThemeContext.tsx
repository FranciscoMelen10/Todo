"use client";

import React, { createContext, useEffect } from "react";

import { Theme, ThemeContextType } from "@/types";

// Crear el contexto con valor inicial undefined
export const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// Componente UseTheme que provee el contexto
export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = React.useState<Theme>("light");

  // Cambiar la clase de "html" cuando el tema cambia
  useEffect(() => {
    if (theme === "dark") {
      document.querySelector("html")?.classList.add("dark");
    } else {
      document.querySelector("html")?.classList.remove("dark");
    }
  }, [theme]);

  // Función para alternar el tema
  const handleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <ThemeContext.Provider value={{ theme, handleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
