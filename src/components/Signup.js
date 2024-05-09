import React from "react";

export const Signup = () => {
  return (
    <div className="grid-container">
      <div className="grid-child purple">
        <div className="leftContainer">
          <h1>Glad to see you!</h1>
          <p>
            lorem ipsum lorem ipsum lorem ipsum , <br />
            lorem ipsum lorem ipsum lorem ipsum <br />
            lorem ipsum lorem ipsum lorem ipsum , <br />
            lorem ipsum lorem ipsum lorem ipsum
          </p>
        </div>
      </div>
      <div className="grid-child green">
        <div className="rightContainer">
          <h2>Welcome to Company name</h2>
          <div className="internalContainer">
            <div>Sign in to continue</div>
            <div className="not-member">
              Not a member yet?
              <a href="#">Register Now</a>
            </div>
          </div>
          <div className="input-container">
            <input placeholder="Enter email" />
            <input type="password" placeholder="Enter password" />
          </div>
          <div className="label">
            <label>
              <input type="checkbox"></input>
              Keep me logged in
            </label>
          </div>
          <button className="loginButton">Login</button>
        </div>
      </div>
    </div>
  );
};
