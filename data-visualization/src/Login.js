import "./css/Form.css";
import { useState } from "react";
import Navbar from "./components/Navbar.js";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Login() {
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
        navigate(`/${username}`);
      } else {
        updateInvalidUser(true);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = (e) => {
    console.log(username, password);
    e.preventDefault();
    const userData = { username, password };
    sendUserToServer(userData);
  };

  if (!invalidUser) {
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
  return (
    <div>
      <Navbar />
      <div className="small form-align">
        <form
          id="data-form"
          className="my-3 mx-5 px-5 py-4 rounded-3"
          style={{ backgroundColor: "#E0E8F3", maxWidth: "320px" }}
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
            <p style={{ color: "red" }}>
              Wrong password or username!! Please try again or signup if you are
              a first time user.
            </p>
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
