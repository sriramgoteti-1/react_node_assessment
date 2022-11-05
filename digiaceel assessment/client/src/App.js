import React from "react";
import SignUp from "./components/signUp/SignUp";
import Login from "../src/components/login/Login";
import Home from "../src/components/Home/Home";
import Question from "../src/components/Question/Question"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Route exact path="/"> 
        <Home/>
      </Route>
      <Route exact path="/login"> 
        <Login/>
      </Route>
      <Route exact path="/signup"> 
        <SignUp/>
      </Route>
      <Route exact path="/quiz"> 
        <Question/>
      </Route>
    </Router>
  );
}

export default App;
