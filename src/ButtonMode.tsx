import React from "react";
import { useTheme } from "./hooks/useTheme";

function ButtonMode() {
  const { theme, switchTheme } = useTheme();
  return <button onClick={switchTheme}>Cambiar Pantalla</button>;
}

export default ButtonMode;
