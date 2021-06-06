
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from "./components/Login.js";
import Register from "./components/Register.js";
import Dashboard from "./components/Dashboard.js";
import Validator from "./components/Validator.js";


const App = () => {
  return (
    <BrowserRouter>
      <Switch>
       <Route exact path="/" component={Login}/>
       <Route exact path="/redir" component={Validator}/>
        <Route exact path="/register" component={Register}/>
        <Route exact path="/dashboard" component={Dashboard}/>
        </Switch>
      </BrowserRouter>
  )
}

export default App;
