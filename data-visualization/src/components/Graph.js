import { Line } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";
import { options, data } from "../mocks/mockGraphData.js";

Chart.register(...registerables);

const Graph = () => {
  return (
    <div>
      <Line data={data} options={options} style={{ display: "inline" }} />
    </div>
  );
};

export default Graph;
