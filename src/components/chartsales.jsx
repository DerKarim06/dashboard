import React, { Component } from "react";
import { Bar, Line } from "react-chartjs-2";

class ChartSales extends Component {
  constructor(props) {
    super(props);
    this.state = { chartData: props.chartData };
  }

  static defaultProps = {
    isLine: false,
    displayTitle: true,
    displayLegend: true,
    legendPosition: "right",
    titleName: "Chart",
    isStacked: false,
  };

  render() {
    if (this.props.isLine) {
      return (
        <div className="chart">
          <Line
            data={this.state.chartData}
            options={{
              title: {
                display: this.props.displayTitle,
                text: this.props.titleName,
                fontSize: 25,
              },
              legend: {
                display: this.props.displayLegend,
                position: this.props.legendPosition,
              },
              scales: {
                xAxes: [{ stacked: this.props.isStacked }],
                yAxes: [
                  {
                    stacked: this.props.isStacked,
                    ticks: {
                      beginAtZero: true,
                    },
                  },
                ],
              },
            }}
          />
        </div>
      );
    } else {
      return (
        <div className="chart">
          <Bar
            data={this.state.chartData}
            options={{
              title: {
                display: this.props.displayTitle,
                text: this.props.titleName,
                fontSize: 25,
              },
              legend: {
                display: this.props.displayLegend,
                position: this.props.legendPosition,
              },
              scales: {
                xAxes: [{ stacked: this.props.isStacked }],
                yAxes: [
                  {
                    stacked: this.props.isStacked,
                    ticks: {
                      beginAtZero: true,
                    },
                  },
                ],
              },
            }}
          />
        </div>
      );
    }
  }
}

export default ChartSales;
