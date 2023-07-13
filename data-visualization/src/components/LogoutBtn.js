function LogoutBtn(props) {
  return (
    <button
      className="btn btn-outline-danger mx-5 my-3"
      onClick={props.goToLoginPage}
    >
      Logout
    </button>
  );
}

export default LogoutBtn;
