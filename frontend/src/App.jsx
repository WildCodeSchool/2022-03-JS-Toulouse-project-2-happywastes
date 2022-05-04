import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { useState, useMemo } from "react";
import Home from "./pages/Home";
import "./assets/css/main.css";
import Settings from "./pages/Settings";
import Dashboard from "./pages/Dashboard";
import MyRewards from "./pages/MyRewards";
import Recycler from "./pages/Recycler";
import Login from "./pages/Login";
import Influence from "./pages/Influence";
import UserContext from "./components/UserContext";

function App() {
  const [user, setUser] = useState(false);
  const userHasLogged = useMemo(() => ({ user, setUser }), []);
  const location = useLocation();
  return (
    <div className="App">
      <AnimatePresence exitBeforeEnter initial={false}>
        <UserContext.Provider value={userHasLogged}>
          <Routes location={location} key={location.key}>
            <Route path="/" element={user ? <Home /> : <Login />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/dashboard/my-rewards" element={<MyRewards />} />
            <Route path="/recycler" element={<Recycler />} />
            <Route path="/login" element={<Login />} />
            <Route path="/influence" element={<Influence />} />
          </Routes>
        </UserContext.Provider>
      </AnimatePresence>
    </div>
  );
}

export default App;
