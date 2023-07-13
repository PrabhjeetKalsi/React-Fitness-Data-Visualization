import "../css/Form.css";
import { useState } from "react";
import Navbar from "../components/Navbar.js";
import SignupForm from "../components/SignupForm";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Signup({ login, updateUser }) {
  const [username, updateUsername] = useState("");

  const [password, updatePassword] = useState("");

  const [validUsername, updateValidUsername] = useState(true);

  const handleUsername = (e) => {
    updateUsername(e.target.value);
  };

  const handlePassword = (e) => {
    updatePassword(e.target.value);
  };

  const sendUserToServer = async (user) => {
    try {
      const response = await axios.post("/userSignup", { user });
      if (response.data === "User found") {
        updateValidUsername(false);
      } else {
        login();
        updateUser(username);
        navigate(`/${username}`);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const userData = { username, password };
    sendUserToServer(userData);
  };

  return (
    <div>
      <Navbar />
      <div className="small form-align">
        <SignupForm
          handlePassword={handlePassword}
          handleSubmit={handleSubmit}
          handleUsername={handleUsername}
          validUsername={validUsername}
        />
      </div>
    </div>
  );
}

export default Signup;
