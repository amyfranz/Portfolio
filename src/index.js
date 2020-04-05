import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./styles1.module.css"
import Project1 from "./components/projects/project1/project1.js";
import Project2 from "./components/projects/project2/Project2.js";
import Project3 from "./components/projects/project3/Project3.js";
import Project4Login from "./components/projects/project4/login/login.js";
import Project4SignUp from "./components/projects/project4/signup/signup.js";
import Project4Dashboard from "./components/projects/project4/dashboard/dashboard.js";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter as Router, Route } from "react-router-dom";

const firebase = require("firebase");
require("firebase/firestore");

firebase.initializeApp({
  apiKey: "AIzaSyDEUX2UzAgzwva0Cr_8UVtVQbnczcVLSRg",
  authDomain: "messenger-app-react.firebaseapp.com",
  databaseURL: "https://messenger-app-react.firebaseio.com",
  projectId: "messenger-app-react",
  storageBucket: "messenger-app-react.appspot.com",
  messagingSenderId: "1040626419703",
  appId: "1:1040626419703:web:d2fcba261b0fdad62350f2",
});

ReactDOM.render(
  <Router>
    <div>
      <Route exact path="/" component={App} />
      <Route exact path="/project1" component={Project1} />
      <Route exact path="/project2" component={Project2} />
      <Route exact path="/project3" component={Project3} />
      <Route path="/project4/login" component={Project4Login} />
      <Route path="/project4/signup" component={Project4SignUp} />
      <Route path="/project4/dashboard" component={Project4Dashboard} />
    </div>
  </Router>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
