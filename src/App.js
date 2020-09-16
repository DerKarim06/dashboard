import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/navbar";
import VerticalMenu from "./components/verticalmenu";
import Dashboard from "./components/dashboard";
import Employees from "./components/employees";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Products from "./components/products";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <Router>
          <Route path="/" exact component={Dashboard} />
          <Route path="/employees" component={Employees} />
          <Route path="/products" component={Products} />
        </Router>
      </React.Fragment>
    );
  }
}

export default App;
