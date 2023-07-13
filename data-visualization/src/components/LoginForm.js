import InvalidLoginCreds from "./InvalidLoginCreds";

function LoginForm(props) {
  return (
    <form
      id="data-form"
      className="my-3 mx-5 px-5 py-4 rounded-3"
      style={{ backgroundColor: "#E0E8F3", maxWidth: "320px" }}
      onSubmit={props.handleSubmit}
    >
      <h4 className="mb-4 form-heading">Login</h4>
      <div className="mb-3">
        <label className="form-label">Username</label>
        <input
          type="text"
          className="form-control"
          onChange={props.handleUsername}
          required
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Password</label>
        <input
          type="password"
          className="form-control"
          onChange={props.handlePassword}
          required
        />
        <InvalidLoginCreds invalidUser={props.invalidUser} />
      </div>
      <button type="submit" className="btn form-button" id="submit">
        Submit
      </button>
      <br />
      <br />
      <a href="signup">First time user? Sign up</a>
    </form>
  );
}

export default LoginForm;
