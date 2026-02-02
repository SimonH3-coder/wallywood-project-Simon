import React, { createContext, useState, useEffect} from 'react';
import { ThemeContext } from "../context/ThemeContext.tsx";

export const ThemContext = createContext({
  darkMode: false,
  toggleTheme: () => {},
})



export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.body.className = darkMode ? "dark" : "light";
    document.getElementById("root")!.className = darkMode ? "dark" : "light"; 

  }, [darkMode]);

  const toggleTheme = () => setDarkMode((prev) => !prev);

  return ( <ThemeContext.Provider value={{ darkMode, toggleTheme }}>{children}</ThemeContext.Provider>;
  );
}
