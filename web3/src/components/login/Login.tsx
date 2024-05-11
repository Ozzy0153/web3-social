import React from "react";
import { Link } from "react-router-dom";
import "./Login.css";

function Login() {
  return (
    <div className="login">
      <div className="card">
        <div className="left">
          <h2>Web3</h2>
          <p>
            Lorem ipsum dolor dipisicing elit. Odit dignissimos maxime voluptate
            laborum amet delectus asperiores quaerat deserunt nulla ea!
          </p>
          <span>Don't have an account?</span>
          <Link to="/signup">
            <button className="btn btn-primary">Sign Up</button>
          </Link>
        </div>
        <form className="right">
          <input type="text" required placeholder="username" />
          <input type="password" required placeholder="password" />
          <button type="submit" className="btn">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
