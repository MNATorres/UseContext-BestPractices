import ButtonMode from "./ButtonMode";
import { useTheme } from "./hooks/useTheme";
import './App.css';


function App() {

  const { theme } = useTheme();

  return (
    <div
      className="App"
      style={{
        color: theme.color,
        backgroundColor: theme.background
      }}
    >
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <ButtonMode />
    </div>
  );
}

export default App;
