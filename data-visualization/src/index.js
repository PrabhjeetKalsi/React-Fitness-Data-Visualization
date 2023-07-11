import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Login from "./Login";
import Signup from "./Signup";
import reportWebVitals from "./reportWebVitals";
import { updateMocks } from "./utils/utils.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
updateMocks().then(() => {
  root.render(
    <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="signup" element={<Signup />} />
          <Route path="user" element={<App />} />
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  );
});

reportWebVitals();
