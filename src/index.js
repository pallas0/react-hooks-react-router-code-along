import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, NavLink, Switch } from "react-router-dom"
import Home from "./components/Home";
import About from "./components/About";
import Login from "./components/Login";
import NavBar from "./components/NavBar";
import App from "./components/App";


ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);