import React, { useState } from "react";
import App from "./pages/App";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function Parent() {
  const [loggedIn, updateLoggedIn] = useState(false);
  const login = () => {
    updateLoggedIn(true);
  };
  return (
    <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login login={login} />} />
          <Route path="signup" element={<Signup login={login} />} />
          <Route path="/:username" element={<App loggedIn={loggedIn} />} />
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  );
}

export default Parent;
