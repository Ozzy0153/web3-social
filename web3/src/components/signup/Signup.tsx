import React from "react";
import { Link } from "react-router-dom";

import "./Signup.css";

function Signup() {
  return (
    <div className="signup">
      <div className="card">
        <div className="left">
          <h2>
            {" "}
            -<br />
            Web3 Signup <br />-
          </h2>
          <p>
            Lorem ipsum dolor dipisicing elit. Odit dignissimos maxime voluptate
            laborum amet delectus asperiores quaerat deserunt nulla ea!
          </p>
          <span>have an account?</span>
          <Link to="/login">
            <button className="btn btn-primary">Login</button>
          </Link>
        </div>
        <form className="right">
          <input type="text" required placeholder="username" />
          <input type="email" required placeholder="email" />
          <input type="password" required placeholder="password" />
          <button type="submit" className="btn">
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
}

export default Signup;
