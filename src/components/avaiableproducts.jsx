import React, { Component } from "react";
import AvaiableRows from "./avaiablerows";

class AvaiableProducts extends Component {
  state = {
    rows: [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }],
    avaiableProducts: {
      datasets: [
        {
          name: "Hamburger",
          stock: 526,
          price: 5.99,
        },
        {
          name: "Cheeseburger",
          stock: 345,
          price: 6.99,
        },
        {
          name: "Salad",
          stock: 413,
          price: 7.99,
        },
        {
          name: "Wrap",
          stock: 465,
          price: 3.99,
        },
        {
          name: "Chicken Burger",
          stock: 213,
          price: 7.99,
        },
      ],
    },
  };

  render() {
    return (
      <table class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Product</th>
            <th scope="col">Stock</th>
            <th scope="col">Price per unit</th>
          </tr>
        </thead>
        <tbody>
          {this.state.rows.map((row) => (
            <AvaiableRows
              key={row.id}
              avaiableProducts={this.state.avaiableProducts}
              row={row}
            />
          ))}
        </tbody>
      </table>
    );
  }
}

export default AvaiableProducts;
