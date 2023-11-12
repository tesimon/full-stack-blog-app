"use client";

import { createContext, useEffect, useState } from "react";
export const ThemeContext = createContext();

const getLocalStorage = () => {
  if (typeof window !== "undefined") {
    const value = localStorage.getItem("theme");
    return value;
  }
};

const ThemeContextApi = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    return getLocalStorage();
  });

  const toggleThemes = () => {
    return setTheme(theme === "dark" ? "light" : "dark");
  };

  // Check if the user's system preference is dark
  if (typeof window !== "undefined") {
    if (
      theme === "dark" ||
      (window.matchMedia("prefers-color-scheme:dark") &&
        !"theme" in localStorage)
    ) {
      localStorage.theme = "dark";
    } else {
      localStorage.theme = "light";
    }
  }
  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);
  return (
    <ThemeContext.Provider value={{ theme, toggleThemes }}>
      {children}
    </ThemeContext.Provider>
  );
};
export default ThemeContextApi;
