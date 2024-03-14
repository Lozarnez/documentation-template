'use client'

import { createContext, useState } from "react"
import { themeCreator } from "./base";
import { ThemeProvider } from "@mui/material";

export const ThemeContext = createContext(themeName => themeName);

const ThemeProviderWrapper = ({ children }) => {
  const [themeName, setThemeName] = useState('main');

  const theme = themeCreator(themeName);
  const setTheme = (themeName) => setThemeName(themeName);

  return (
    <ThemeContext.Provider value={setTheme}>
      <ThemeProvider theme={theme}>
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}

export default ThemeProviderWrapper;