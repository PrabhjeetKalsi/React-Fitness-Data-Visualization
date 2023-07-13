import InvalidSignupCreds from "./InvalidSignupCreds";

function SignupForm(props) {
  return (
    <form
      id="data-form"
      className="my-3 mx-5 px-5 py-4 rounded-3"
      style={{ backgroundColor: "#E0E8F3", maxWidth: "320px" }}
      onSubmit={props.handleSubmit}
    >
      <h4 className="mb-4 form-heading">Signup</h4>
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
        <InvalidSignupCreds validUsername={props.validUsername} />
      </div>
      <button type="submit" className="btn form-button" id="submit">
        Submit
      </button>
      <br />
      <br />
      <a href="/">Existing user? Login</a>
    </form>
  );
}

export default SignupForm;
