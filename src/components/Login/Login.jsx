import React, { useContext, useState } from "react";
import "./Login.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";

const Login = () => {
  const [error, setError] = useState("");
  const [show, setShow] = useState(false);

  const { loginUser } = useContext(AuthContext);

  const location = useLocation();
  const navigate = useNavigate();
  // console.log(location);

  const from = location.state?.from?.pathname || "/";

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    if (email === "" || password === "") {
      return setError("your field is empty");
    }

    loginUser(email, password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <div className="form-container">
      <h2 className="form-title">Login</h2>
      <form onSubmit={handleLogin}>
        <div className="form-control">
          <label htmlFor="email">Email</label>
          <input type="email" name="email" required />
        </div>
        <div className="form-control">
          <label htmlFor="password">Password</label>
          <input type={show ? "text" : "password"} name="password" required />
          <br />
          <p className="show" onClick={() => setShow(!show)}>
            <small>
              {show ? <span>Hide Password</span> : <span>Show Password</span>}
            </small>
          </p>
        </div>
        <input className="btn-submit" type="submit" value="Login" />
      </form>
      <p>
        <small>
          New to Ema-john? <Link to="/register">Create New Account</Link>
        </small>
      </p>
      <p className="text-error">{error}</p>
    </div>
  );
};

export default Login;
