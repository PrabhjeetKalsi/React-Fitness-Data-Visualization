import Graph from "./components/Graph.js";
import Form from "./components/Form.js";
import Navbar from "./components/Navbar.js";
import { useState } from "react";
import {
  legPressOptions,
  legPressData,
} from "./mocks/legPressMockGraphData.js";

const exercises = ["Dumbell Press", "Leg Press", "Bicep Curl"];

function App() {
  const [chartData, setChartData] = useState({
    options: legPressOptions,
    data: legPressData,
  });

  const updateChartData = (formData) => {
    const { exercise, weight, reps, date } = formData;
    chartData.data.datasets.forEach((dataset, idx) => {
      if (idx === 1) {
        dataset.data = [...dataset.data, weight];
      } else {
        dataset.data = [...dataset.data, reps];
      }
    });
    setChartData({
      ...chartData,
      data: {
        labels: [...chartData.data.labels, date],
        datasets: [...chartData.data.datasets],
      },
    });
  };

  const Graphs = [];
  exercises.forEach((exercise, idx) => {
    Graphs.push(<Graph key={idx} chartData={chartData} />);
  });

  return (
    <div className="App">
      <Navbar />
      <Form updateChartData={updateChartData} />
      {Graphs}
    </div>
  );
}

export default App;
