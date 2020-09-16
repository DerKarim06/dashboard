import React, { Component } from "react";
import { NavLink, Router } from "react-router-dom";

class NavBar extends Component {
  render() {
    return (
      /* <nav className="navbar navbar-dark bg-dark">
      <a className="navbar-brand" href="/">
        Company{" "}
      </a>
    </nav> */

      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand" href="/">
          FoodCompany
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <a className="nav-link" href="/">
              Dashboard <span className="sr-only">(current)</span>
            </a>
            <a className="nav-link" href="/products">
              Products
            </a>
            <a className="nav-link" href="/employees">
              Employees
            </a>
          </div>
        </div>
      </nav>
    );
  }
}

export default NavBar;
