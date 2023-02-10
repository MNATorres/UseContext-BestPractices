import React from "react";

const themes = {
  light: {
    color: "#555555",
    background: "#eeeeee"
  },
  dark: {
    color: "#eeeeee",
    background: "#222222"
  }
};

type Theme = {
  color: string;
  background: string;
};

interface ThemeContextType {
  theme: Theme;
  switchTheme: () => void;
}

//Creacion contexto
const ThemeContext = React.createContext<ThemeContextType>({
  theme: themes.light,
  switchTheme: () => {}
});


//Crecion provider
export const ThemeProvider: React.FC = ({ children }:any) => {
  const [light, setLight] = React.useState(true);

  const switchTheme = () => {
    setLight(!light);
  };

  return (
    <ThemeContext.Provider
      value={{ theme: light ? themes.light : themes.dark, switchTheme }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

//Creacion hook
export const useTheme = () => {
  const context = React.useContext(ThemeContext);
  return context;
};
