// ...existing code...
import { ThemeProvider } from "../context/ThemeContext";

function App() {
  // ...existing code...
  return (
    <ThemeProvider>
      <App />
    </ThemeProvider>
  );
}

export default App;
