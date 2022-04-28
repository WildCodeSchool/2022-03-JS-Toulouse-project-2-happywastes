import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Home from "./pages/Home";
import "./assets/css/main.css";
import Settings from "./pages/Settings";
import Dashboard from "./pages/Dashboard";
import MyRewards from "./pages/MyRewards";
import Recycler from "./pages/Recycler";
import Influence from "./pages/Influence";

function App() {
  const location = useLocation();
  return (
    <div className="App">
      <AnimatePresence exitBeforeEnter initial={false}>
        <Routes location={location} key={location.key}>
          <Route path="/" element={<Home />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/dashboard/my-rewards" element={<MyRewards />} />
          <Route path="/recycler" element={<Recycler />} />
          <Route path="/influence" element={<Influence />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
