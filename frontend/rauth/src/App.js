
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from "./components/Login.js";
import Register from "./components/Register.js";


const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Login}/>
        <Route exact path="/register" component={Register}/>
        </Switch>
      </BrowserRouter>
  )
}

export default App;
