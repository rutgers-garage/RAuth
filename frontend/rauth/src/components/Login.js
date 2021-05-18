import React, { Component } from 'react';
import GoogleLogin from 'react-google-login';
import { Redirect } from "react-router-dom";
import Register from "./Register.js";



const responseGoogle = (response) => {
  console.log(response);
}
const success = (response) => {
  console.log(response["ft"]["Qt"]);
  sessionStorage.setItem("email", response["ft"]["Qt"]);
  <Redirect to="/register" />
}

class Login extends Component {
  render(){
    return(
      <div>
        <GoogleLogin
          clientId="928852366939-tps39s15ntonmmrc0pllpj0klionbs7c.apps.googleusercontent.com"
          buttonText="Login"
          onSuccess={success}
          onFailure={responseGoogle}
          cookiePolicy={'single_host_origin'}
          hostedDomain="scarletmail.rutgers.edu"
        />
      </div>
    );
  }
}

export default Login;
