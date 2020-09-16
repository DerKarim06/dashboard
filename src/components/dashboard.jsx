import React, { Component } from "react";
import ChartSales from "./chartsales";
import AvaiableProducts from "./avaiableproducts";

class Dashboard extends Component {
  state = {};

  constructor() {
    super();
    this.state = {
      chartData: {},
    };
  }

  componentWillMount() {
    this.getChartData();
  }

  getChartData() {
    this.setState({
      chartData: {
        labels: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        datasets: [
          {
            label: "Hamburger",
            data: [55, 71, 68, 83, 98, 67],
            backgroundColor: "rgba(255, 99, 132, 0.6)",
            /* "rgba(54, 162, 235, 0.6)",
              "rgba(255, 206, 86, 0.6)",
              "rgba(75, 192, 192, 0.6)",
              "rgba(153, 102, 255, 0.6)",
              "rgba(255, 159, 64, 0.6)",
              "rgba(255, 99, 132, 0.6)", */
          },
          {
            label: "Cheeseburger",
            data: [27, 33, 56, 115, 75, 69],
            backgroundColor: "rgba(54, 162, 235, 0.6)",
          },
          {
            label: "Salad",
            data: [46, 73, 76, 27, 23, 14],
            backgroundColor: "rgba(255, 206, 86, 0.6)",
          },
          {
            label: "Wrap",
            data: [30, 50, 40, 60, 80, 70],
            backgroundColor: "rgba(75, 192, 192, 0.6)",
          },
          {
            label: "Chicken Burger",
            data: [50, 60, 46, 53, 63, 58],
            backgroundColor: "rgba(153, 102, 255, 0.6)",
          },
        ],
      },
      chartData2: {
        labels: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        datasets: [
          {
            label: "Summary of sold products",
            data: [
              5.99 * 55 + 6.99 * 27 + 7.99 * 46 + 3.99 * 30 + 7.99 * 50,
              5.99 * 71 + 6.99 * 33 + 7.99 * 73 + 3.99 * 50 + 7.99 * 60,
              5.99 * 68 + 6.99 * 56 + 7.99 * 76 + 3.99 * 40 + 7.99 * 46,
              5.99 * 83 + 6.99 * 115 + 7.99 * 27 + 3.99 * 60 + 7.99 * 53,
              5.99 * 98 + 6.99 * 75 + 7.99 * 23 + 3.99 * 80 + 7.99 * 63,
              5.99 * 67 + 6.99 * 69 + 7.99 * 14 + 3.99 * 70 + 7.99 * 58,
            ],
            backgroundColor: "rgba(54, 162, 235, 0.6)",
          },
        ],
      },
    });
  }

  render() {
    return (
      <main className="p-5">
        <h1 className="display-4">Dashboard</h1>
        <hr />
        <div className="">
          <div className="">
            <ChartSales
              chartData={this.state.chartData}
              legendPosition="bottom"
              titleName="Sold products last week"
              isStacked="true"
            />
          </div>
          <hr></hr>
          <div className="">
            <ChartSales
              chartData={this.state.chartData2}
              legendPosition="bottom"
              titleName="Total sales last week"
              isLine="true"
            />
          </div>
        </div>
      </main>
    );
  }
}

export default Dashboard;
