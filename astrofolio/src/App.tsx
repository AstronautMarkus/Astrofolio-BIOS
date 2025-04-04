import "./App.css";

import { BiosPortfolio } from "./components/BiosPortfolio"
import { ThemeProvider } from "./components/ThemeProvider"

function App() {
  return (
    <ThemeProvider>
      <BiosPortfolio />
    </ThemeProvider>
  )
}

export default App

