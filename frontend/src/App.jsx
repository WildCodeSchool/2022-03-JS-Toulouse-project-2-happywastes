import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { useContext } from "react";
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

import { GlobalUserContext } from "./components/GlobalUserContext";

function App() {
  const userContext = useContext(GlobalUserContext);
  const [userValue] = userContext.user;
  const location = useLocation();

  return (
    <div className="App">
      <AnimatePresence exitBeforeEnter initial={false}>
        <Routes location={location} key={location.key}>
          <Route path="/" element={userValue ? <Home /> : <Login />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/dashboard/my-rewards" element={<MyRewards />} />
          <Route path="/recycler" element={<Recycler />} />
          <Route path="/recycler/centre/:id" element={<Centre />} />
          <Route path="/login" element={<Login />} />
          <Route path="/create-account" element={<Form />} />
          <Route path="/influence" element={<Influence />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
