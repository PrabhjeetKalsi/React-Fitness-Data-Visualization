import "./css/Form.css";
import { useState } from "react";
import Navbar from "./components/Navbar.js";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Login() {
  const [username, updateUsername] = useState("");

  const [password, updatePassword] = useState("");

  const handleUsername = (e) => {
    updateUsername(e.target.value);
  };

  const handlePassword = (e) => {
    updatePassword(e.target.value);
  };

  const sendUserToServer = async (user) => {
    try {
      const response = await axios.post("/userLogin", { user });
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    console.log(username, password);
    e.preventDefault();
    const userData = { username, password };
    sendUserToServer(userData);
    navigate(`/${username}`);
  };

  return (
    <div>
      <Navbar />
      <div className="small form-align">
        <form
          id="data-form"
          className="my-3 mx-5 px-5 py-4 rounded-3"
          style={{ backgroundColor: "#E0E8F3" }}
          onSubmit={handleSubmit}
        >
          <h4 className="mb-4 form-heading">Login</h4>
          <div className="mb-3">
            <label className="form-label">Username</label>
            <input
              type="text"
              className="form-control"
              onChange={handleUsername}
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              onChange={handlePassword}
              required
            />
          </div>
          <button type="submit" className="btn form-button" id="submit">
            Submit
          </button>
          <br />
          <br />
          <a href="signup">First time user? Sign up</a>
        </form>
      </div>
    </div>
  );
}

export default Login;
