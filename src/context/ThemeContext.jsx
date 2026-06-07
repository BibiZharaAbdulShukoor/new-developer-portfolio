import { createContext, useState } from "react";

export const ThemeContext = createContext();

function ThemeProvider({ children }) {
  const [darkMode, setDarkMode] = useState(false);
  const [favorites, setFavorites] = useState([]);

  const toggleTheme = () => {
    setDarkMode((prev) => !prev);
  };

  const toggleFavorite = (id) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id],
    );
  };

  return (
    <ThemeContext.Provider
      value={{
        darkMode,
        toggleTheme,
        favorites,
        toggleFavorite,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export default ThemeProvider;
