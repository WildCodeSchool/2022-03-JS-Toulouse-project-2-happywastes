import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { GlobalUserProvider } from "./components/GlobalUserContext";

ReactDOM.render(
  <React.StrictMode>
    <GlobalUserProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </GlobalUserProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
