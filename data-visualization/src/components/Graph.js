import { Line } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";
import React, { useEffect, useRef } from "react";
import "../css/Graph.css";
import { filterData } from "../utils/utils";

Chart.register(...registerables);

const Graph = (props) => {
  const chartRef = useRef(null);
  let chartData = props.chartData;
  let loggedInUser = props.loggedInUser;
  useEffect(() => {
    const chart = chartRef.current;
    filterData(loggedInUser, chartData);
    if (chart) {
      chart.update();
    }
  }, [chartData, loggedInUser]);

  return (
    <div className="mx-auto my-5 shadow-lg border border-light rounded-3 graph">
      <Line
        ref={chartRef}
        data={chartData.data}
        options={chartData.options}
        style={{ display: "inline" }}
        className="mx-3 my-3"
      />
    </div>
  );
};

export default Graph;
