import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./styles1.module.css"
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
    </div>
  </Router>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
