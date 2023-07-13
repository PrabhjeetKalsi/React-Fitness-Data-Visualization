function SessionLoggedOut(props) {
  return (
    <div className="d-flex justify-content-center my-5">
      <h1>Session Logged Out!!!</h1>
      <div>
        <button
          className="btn border-dark my-2 mx-4"
          onClick={props.goToLoginPage}
        >
          Click here to login again
        </button>
      </div>
    </div>
  );
}

export default SessionLoggedOut;
