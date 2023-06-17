import { Line } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";

Chart.register(...registerables);

let dateLabels = [
  "Jun 10, 2023",
  "Jun 11, 2023",
  "Jun 12, 2023",
  "Jun 13, 2023",
  "Jun 14, 2023",
  "Jun 15, 2023",
];
let legPressReps = [6, 7, 7, 8, 10, 11];
let legPressWeight = [70, 85, 100, 100, 130, 130];

let data = {
  labels: dateLabels,
  datasets: [
    {
      yAxisID: "left",
      label: "# of Reps",
      data: legPressReps,
      borderWidth: 1,
    },
    {
      yAxisID: "right",
      label: "Weight",
      data: legPressWeight,
      borderWidth: 1,
    },
  ],
};

let options = {
  plugins: {
    title: {
      text: "Leg Press",
      align: "center",
      display: true,
      font: {
        weight: "bold",
        size: 30,
      },
    },
  },
  tension: 0.3,
  scales: {
    x: {
      title: {
        text: "Date",
        display: true,
        font: { size: 20, weight: "bold" },
      },
    },
    left: {
      title: {
        text: "Repititions",
        display: true,
        font: { size: 20, weight: "bold" },
      },
      beginAtZero: true,
    },
    right: {
      position: "right",
      title: {
        text: "Weight",
        display: true,
        font: { size: 20, weight: "bold" },
      },
      beginAtZero: true,
    },
  },
};

const Graph = () => {
  return (
    <div>
      <Line data={data} options={options} />
    </div>
  );
};

export default Graph;
