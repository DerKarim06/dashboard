import React, { Component } from "react";
import AvaiableProducts from "./avaiableproducts";

class Products extends Component {
  state = {};
  render() {
    return (
      <div className="p-3">
        <AvaiableProducts />
      </div>
    );
  }
}

export default Products;
