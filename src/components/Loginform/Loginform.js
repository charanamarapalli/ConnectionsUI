import React from "react";
import './Loginform.css';
export default function Loginform() {
  return (
    <>
      <div class="container">
      <div class="login-container">
      <form className="form-login" onclick="submit">
        <div className="items label heading">Login Here</div>
        <hr className="line-break"></hr>
        <div className="items">
          <label className="label" htmlFor="userEmail">
            Enter User Email:
          </label>
          <input
            className="input-field"
            id="userEmail"
            type="text"
            placeholder="Enter Email"
          />
        </div>

        <div className="items">
          <label className="label" htmlFor="Password">
            Enter Password:
          </label>
          <input
            className="input-field"
            id="Password"
            type="password"
            placeholder="Enter Password"
          />
        </div>

        <div className="items">
          <button className="btn-submit" type="submit">
            Login
          </button>
        </div>
      </form>
      </div>
      </div>
    </>
  );
}
