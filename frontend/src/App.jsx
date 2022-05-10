import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { useState, useMemo } from "react";
import Home from "./pages/Home";
import "./assets/css/main.css";
import Form from "./components/Form/Form";
import Settings from "./pages/Settings";
import Dashboard from "./pages/Dashboard";
import MyRewards from "./pages/MyRewards";
import Recycler from "./pages/Recycler";
import Centre from "./pages/Centre";
import Login from "./pages/Login";
import Influence from "./pages/Influence";
import UserContext from "./components/UserContext";
import NotifContext from "./components/NotifContext";

function App() {
  const [user, setUser] = useState(false);
  const userHasLogged = useMemo(() => ({ user, setUser }), []);
  const [notif, setNotif] = useState(false);
  const location = useLocation();
  const notifActive = useMemo(() => ({ notif, setNotif }), []);
  return (
    <div className="App">
      <AnimatePresence exitBeforeEnter initial={false}>
        <NotifContext.Provider value={notifActive}>
          <UserContext.Provider value={userHasLogged}>
            <Routes location={location} key={location.key}>
              <Route path="/" element={user ? <Home /> : <Login />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/dashboard/my-rewards" element={<MyRewards />} />
              <Route path="/recycler" element={<Recycler />} />
              <Route path="/recycler/centre/:id" element={<Centre />} />
              <Route path="/login" element={<Login />} />
              <Route path="/create-account" element={<Form />} />
              <Route path="/influence" element={<Influence />} />
            </Routes>
          </UserContext.Provider>
        </NotifContext.Provider>
      </AnimatePresence>
    </div>
  );
}

export default App;
