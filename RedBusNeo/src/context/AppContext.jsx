import { createContext, useContext, useState, useEffect } from "react";

const AppContext = createContext();

export function AppProvider({ children }) {
  const [darkMode, setDarkMode] = useState(
    JSON.parse(localStorage.getItem("dark")) || false,
  );

  const [selectedBus, setSelectedBus] = useState(null);

  const [searchQuery, setSearchQuery] = useState({
    from: "",
    to: "",
    date: "",
  });

  const [currency, setCurrency] = useState(
    localStorage.getItem("currency") || "INR",
  );

  useEffect(() => {
    document.body.classList.toggle("dark", darkMode);

    localStorage.setItem("dark", JSON.stringify(darkMode));
  }, [darkMode]);

  const toggleDark = () => {
    setDarkMode((v) => !v);
  };

  return (
    <AppContext.Provider
      value={{
        darkMode,
        toggleDark,
        selectedBus,
        setSelectedBus,
        searchQuery,
        setSearchQuery,
        currency,
        setCurrency,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export const useApp = () => useContext(AppContext);
