import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './asSet/styles/logIn&signUp.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Login from "./components/login&signup/login";
import SignUp from "./components/login&signup/signup";
import loginSideViwe from "./components/login&signup/LoginSideViwe"
import chooseSignUp from "./components/login&signup/chooseSignUp"
import CustomerRegistation from "./components/login&signup/CustomerRegistation"
import SellerRegistation from "./components/login&signup/SellerRegistation"

function App() {
  return (<Router>
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-light fixed-top">
        <div className="container">
          <Link className="navbar-brand" to={"/sign-in"}>positronX.io</Link>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link" to={"/sign-in"}>Login</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/sign-up"}>Sign up</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="auth-wrapper">
        <div className="background_box_1">
        <Route path="/sign-in" component={loginSideViwe} />
          <div className="background_box_2">
            
            <div className="auth-inner">
              <Switch>
                <Route exact path='/' component={Login} />
                <Route path="/sign-in" component={Login} />
                <Route path="/sign-up-#" component={SignUp} />
                <Route path="/sign-up" component={chooseSignUp} />
                <Route path="/cus-Registation" component={CustomerRegistation}/>
                <Route path='/sell-Registation' component={SellerRegistation}/>
              </Switch>
            </div>
          </div>
        </div>

      </div>
    </div></Router>
  );
}

export default App;