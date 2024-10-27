import React from "react";
import './Loginform.css';
import {login} from '../../service/loginService';
import {useState } from "react";
import { useNavigate } from "react-router-dom";

export default function LoginForm() {
  const [userEmail, setUserEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleEmailChange=(event)=>{
    setUserEmail(event.target.value);
  }

  const handlePasswordChange=(event)=>{
    setPassword(event.target.value);
  }

  const handleSubmit =async (event)=>{
    event.preventDefault();
    try{
      const response = await login({userEmail, password});
      const jwtToken = response;
      console.log("jwt response: "+jwtToken);
      localStorage.setItem("jwtToken", jwtToken);
      console.log(  "from network : "+ localStorage.getItem("jwtToken", jwtToken));
      navigate("/dashboard");
    }
    catch(error){
      console.log(error);
    }
  }


  return (
    <>
    <div className="my-container">
      <div className="login-container">
      <form className="form-login" onSubmit={handleSubmit}>
        <div className="items label heading">Login Here</div>
        <hr className="line-break"></hr>
        <div className="items">
          <label className="label" htmlFor="userEmail">
            Enter User Email:
          </label>
          <input
            onChange={handleEmailChange}
            className="input-field"
            id="userEmail"
            type="text"
            value={userEmail}
            placeholder="Enter Email"
          />
        </div>

        <div className="items">
          <label className="label" htmlFor="Password">
            Enter Password:
          </label>
          <input 
            onChange={handlePasswordChange}
            className="input-field"
            id="Password"
            type="password"
            value={password}
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
