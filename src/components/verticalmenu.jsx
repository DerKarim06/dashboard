import React, { Component } from "react";

class VerticalMenu extends Component {
  state = {};
  render() {
    return (
      <nav className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
        <div className="sidebar-sticky pt-3">
          <ul className="nav flex-column">
            <li className="nav-item">
              <a className="nav-link active" href="/">
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                <polyline points="9 22 9 12 15 12 15 22"></polyline>
                Dashboard <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/employees">
                <path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"></path>
                <polyline points="13 2 13 9 20 9"></polyline>
                Employees
              </a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default VerticalMenu;
