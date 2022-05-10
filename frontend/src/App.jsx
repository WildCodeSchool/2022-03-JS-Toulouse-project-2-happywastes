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
import Login from "./pages/Login";
import Influence from "./pages/Influence";
import UserContext from "./components/UserContext";
import NotifContext from "./components/NotifContext";
import AvatarContext from "./components/AvatarContext";

function App() {
  const [user, setUser] = useState(false);
  const [avatarLink, setAvatarLink] = useState("");
  const [notif, setNotif] = useState(false);
  const userHasLogged = useMemo(() => ({ user, setUser }), [user]);
  const notifActive = useMemo(() => ({ notif, setNotif }), [notif]);
  const avatarNewLink = useMemo(
    () => ({ avatarLink, setAvatarLink }),
    [avatarLink]
  );
  const location = useLocation();

  return (
    <div className="App">
      <AnimatePresence exitBeforeEnter initial={false}>
        <NotifContext.Provider value={notifActive}>
          <UserContext.Provider value={userHasLogged}>
            <AvatarContext.Provider value={avatarNewLink}>
              <Routes location={location} key={location.key}>
                <Route path="/" element={user ? <Home /> : <Login />} />
                <Route path="/settings" element={<Settings />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/dashboard/my-rewards" element={<MyRewards />} />
                <Route path="/recycler" element={<Recycler />} />
                <Route path="/login" element={<Login />} />
                <Route path="/create-account" element={<Form />} />
                <Route path="/influence" element={<Influence />} />
                <Route path="/create-account" element={<Form />} />
              </Routes>
            </AvatarContext.Provider>
          </UserContext.Provider>
        </NotifContext.Provider>
      </AnimatePresence>
    </div>
  );
}

export default App;
