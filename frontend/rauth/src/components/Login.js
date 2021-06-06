import { useState } from 'react';
import GoogleLogin from 'react-google-login';
import { Redirect } from "react-router-dom";

const Login = () => {

  const [netid, setNetid] = useState(undefined)

  const responseGoogle = (response) => {
    console.log(response);
  }
  
  const success = (response) => {
    console.log(response);
    console.log(response["At"]["ku"]);
    let x = response["At"]["ku"];
    let index = x.indexOf("@");
    x = x.substring(0, index);
    sessionStorage.setItem("email", x);
    setNetid(x)
  }

  if(sessionStorage.getItem("email") != null){
    return <Redirect to="/redir" netid={netid} />;
  }
  
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

export default Login;
