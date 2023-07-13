function InvalidSignupCreds(props) {
  if (!props.validUsername) {
    return (
      <p style={{ color: "red" }}>
        Username already taken. Please use some other username.
      </p>
    );
  }
}

export default InvalidSignupCreds;
