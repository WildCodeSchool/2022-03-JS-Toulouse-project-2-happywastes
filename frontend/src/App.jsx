import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import "./assets/css/main.css";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
