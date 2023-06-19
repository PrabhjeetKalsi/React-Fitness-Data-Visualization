import { Line } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";
import React, { useEffect, useRef } from "react";
import "../css/Graph.css";

Chart.register(...registerables);

const Graph = ({ chartData }) => {
  const chartRef = useRef(null);
  useEffect(() => {
    const chart = chartRef.current;
    if (chart) {
      chart.update();
    }
  }, [chartData]);

  return (
    <div className="w-50 mx-auto my-5 shadow-lg border border-light rounded-3 graph">
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
