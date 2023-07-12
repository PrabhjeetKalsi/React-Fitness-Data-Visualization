import React, { useState } from "react";
import App from "./pages/App";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function Parent() {
  const [loggedIn, updateLoggedIn] = useState(false);
  const [loggedInUser, updateLoggedInUser] = useState("");
  const login = () => {
    updateLoggedIn(true);
  };
  const updateUser = (user) => {
    updateLoggedInUser(user);
  };
  return (
    <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<Login login={login} updateUser={updateUser} />}
          />
          <Route
            path="signup"
            element={<Signup login={login} updateUser={updateUser} />}
          />
          <Route
            path="/:username"
            element={<App loggedIn={loggedIn} loggedInUser={loggedInUser} />}
          />
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  );
}

export default Parent;
