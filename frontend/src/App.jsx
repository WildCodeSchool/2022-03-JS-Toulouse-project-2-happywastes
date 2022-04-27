import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import "./assets/css/main.css";
import Settings from "./pages/Settings";
import Dashboard from "./pages/Dashboard";
import MyRewards from "./pages/MyRewards";
import Recycler from "./pages/Recycler";
import Influence from "./pages/Influence";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/dashboard/my-rewards" element={<MyRewards />} />
          <Route path="/recycler" element={<Recycler />} />
          <Route path="/influence" element={<Influence />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
