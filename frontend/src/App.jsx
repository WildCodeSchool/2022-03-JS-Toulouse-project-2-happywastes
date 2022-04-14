import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import "./assets/css/main.css";
import Settings from "./pages/Settings";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
