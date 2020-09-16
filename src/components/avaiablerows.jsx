import React, { Component } from "react";

class AvaiableRows extends Component {
  render() {
    console.log(this.props);
    return (
      <tr>
        <th scope="row">{this.props.row.id}</th>
        <td>
          {this.props.avaiableProducts.datasets[this.props.row.id - 1].name}
        </td>
        <td>
          {this.props.avaiableProducts.datasets[this.props.row.id - 1].stock}
        </td>
        <td>
          {this.props.avaiableProducts.datasets[this.props.row.id - 1].price}
        </td>
      </tr>
    );
  }
}

export default AvaiableRows;
