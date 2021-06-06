import { useState, useEffect } from 'react';
import GoogleLogin from 'react-google-login';
import { Redirect } from "react-router-dom";

const Login = () => {

  const [attempt, setAttempt] = useState(false)
  const [exists, setExists] = useState(false)

  const responseGoogle = (response) => {
    console.log(response);
  }
  
  const processGoogleAuth = (response) => {
    let netid = response["At"]["ku"];
    let index = netid.indexOf("@");
    netid = netid.substring(0, index);
    return netid
  } 

  const checkUser = async (netid) => {
    console.log("wawoweewa")
    await fetch("http://127.0.0.1:5000/getUser?netid="+netid, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' }
    })
    .then(res => {
      console.log(res)
      return res.json()
    })
    .then(r => {
      console.log(r)
      setExists(r)
    })
  }
  
  const success = async (res) => {
    const netid = processGoogleAuth(res)
    console.log(netid)
    await checkUser(netid)
    setAttempt(true)
    sessionStorage.setItem("netid", netid);
  }

  console.log(exists)

  return attempt ? 
    (exists.success ? <Redirect to="/dashboard"/> : <Redirect to="/register"/> ) :
    (
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

export default Login;
