import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import "./assets/css/main.css";
import Settings from "./pages/Settings";
import Dashboard from "./pages/Dashboard";
import BigMap from "./pages/BigMap";
import MyRewards from "./pages/MyRewards";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/recycler" element={<BigMap />} />
          <Route path="/dashboard/my-rewards" element={<MyRewards />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
