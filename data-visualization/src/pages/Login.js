import "../css/Form.css";
import { useState } from "react";
import Navbar from "../components/Navbar.js";
import LoginForm from "../components/LoginForm";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Login({ login, updateUser }) {
  const [invalidUser, updateInvalidUser] = useState(false);

  const [username, updateUsername] = useState("");

  const [password, updatePassword] = useState("");

  const handleUsername = (e) => {
    updateUsername(e.target.value);
  };

  const handlePassword = (e) => {
    updatePassword(e.target.value);
  };

  const navigate = useNavigate();

  const sendUserToServer = async (user) => {
    try {
      const response = await axios.post("/userLogin", { user });
      if (!response.data) {
        login();
        updateUser(username);
        navigate(`/${username}`);
      } else {
        updateInvalidUser(true);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const userData = { username, password };
    sendUserToServer(userData);
  };

  return (
    <div>
      <Navbar />
      <div className="small form-align">
        <LoginForm
          handlePassword={handlePassword}
          handleSubmit={handleSubmit}
          handleUsername={handleUsername}
          invalidUser={invalidUser}
        />
      </div>
    </div>
  );
}

export default Login;
