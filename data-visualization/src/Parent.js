import React from "react";
import App from "./pages/App";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function Parent() {
  return (
    <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="signup" element={<Signup />} />
          <Route path="/:username" element={<App />} />
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  );
}

export default Parent;
