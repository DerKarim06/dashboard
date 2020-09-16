import React, { Component } from "react";

class Employees extends Component {
  state = {};
  render() {
    return (
      <div className="p-3">
        <table class="table table-hover">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">First Name</th>
              <th scope="col">Last Name</th>
              <th scope="col">Role</th>
              <th scope="col">Joined on</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Henri</td>
              <td>Otto</td>
              <td>Chef</td>
              <td>11.05.2003</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>Sale</td>
              <td>21.05.2012</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Larry</td>
              <td>Decker</td>
              <td>Cleaning</td>
              <td>07.06.2020</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default Employees;
