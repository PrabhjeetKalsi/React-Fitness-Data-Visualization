import { Line } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";
import React, { useEffect, useRef } from "react";

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
    <div>
      <Line
        ref={chartRef}
        data={chartData.data}
        options={chartData.options}
        style={{ display: "inline" }}
      />
    </div>
  );
};

export default Graph;
