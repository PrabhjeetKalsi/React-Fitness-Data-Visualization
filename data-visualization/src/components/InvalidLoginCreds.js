function InvalidLoginCreds(props) {
  if (props.invalidUser) {
    return (
      <p style={{ color: "red" }}>
        Wrong password or username!! Please try again or signup if you are a
        first time user.
      </p>
    );
  }
}

export default InvalidLoginCreds;
