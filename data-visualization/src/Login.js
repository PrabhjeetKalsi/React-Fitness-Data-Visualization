import "./css/Form.css";
import { useState } from "react";

function Login() {
  const [username, updateUsername] = useState({
    username: "",
  });

  const [password, updatePassword] = useState({
    password: "",
  });

  const handleUsername = (e) => {
    updateUsername({
      username: e.target.value,
    });
  };

  const handlePassword = (e) => {
    updatePassword({
      password: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    console.log(username, password);
    e.preventDefault();
  };

  return (
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
      </form>
    </div>
  );
}

export default Login;
