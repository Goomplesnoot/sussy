import { response } from "express";
import React, {useState} from "react";

function SignIn() {

  const [emailReg, setEmailReg] = useState('')
  const [passwordReg, setPasswordReg] = useState('')
  const [loginStatus, setLoginStatus] = useState('')


const login = ()=>{
  Axios.post("http://localhost:5500/api/login",{
      eMail:emailReg,
      passWord:passwordReg
  }).then((response)=> {
    if(response.data.message){
      setLoginStatus(response.data.message)
    }
    else{setLoginStatus(response.data[0].username)}
})}

return (
    <div>
    <div className="App">
        <div className="inputDiv">
        <input type="email" placeholder="Email" name="emailReg" className = "emailInput" onChange={(e)=>{
          setEmailReg(e.target.value)
          }}/> <br/>

        <input type="password" placeholder="Password" name="passwordReg" className = "passwordInput" onChange={(e)=>{
          setPasswordReg(e.target.value)
          }}/><br/>

        <button className="loginButton" onClick={login}>Login</button>
        < hr/> <br/>

        <a href="./SignUp">
        <button className="signUpButton">SignUp</button>
        </a>
        </div>
        <h1>{loginStatus}</h1>
    </div>
    </div>
  );
}

export default SignIn