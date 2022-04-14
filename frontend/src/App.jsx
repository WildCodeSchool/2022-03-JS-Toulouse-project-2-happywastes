import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import "./assets/css/main.css";
import Settings from "./pages/Settings";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="dashboard" element={<Dashboard />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
